#!/usr/bin/env python3
"""Motor das metas: faz cada projeto andar sozinho até o próximo portão, com as travas em código.

Roda em qualquer computador ou sessão na nuvem (só Python, nada a instalar). A raiz é a pasta que
contém HQ/ e CLIENTES/ (padrão: a pasta atual; ou a variável MAQUINA_RAIZ).

Comandos:
  python3 HQ/ferramentas/motor.py status
      Uma linha por projeto: etapa, próximo passo, se está parado num portão, alertas.
  python3 HQ/ferramentas/motor.py proximo CLIENTE/PROJETO
      Mostra o que seria feito agora e por quê (não executa nada).
  python3 HQ/ferramentas/motor.py rodar CLIENTE/PROJETO [--executar]
      Sem --executar: mostra o comando. Com --executar: chama `claude -p` com teto de gasto,
      registra custo e avança o status. Para sozinho em todo portão.
  python3 HQ/ferramentas/motor.py decidir CLIENTE/PROJETO --portao N --veredito aprovado|corrigido|recusado --motivo "..." [--tags cor,texto] [--juiz aprovado|reprovado]
      Registra a decisão do Carlo (alimenta o ciclo de melhoria) e libera ou segura o portão.

Travas (portões em código), em qualquer nível de autonomia:
  - não passa de um portão sem "aprovado" registrado;
  - não gera o final 1080p sem o OK do Portão 3, nem depois do prazo de 7 dias;
  - não executa se o gasto + o teto da execução passar do teto do projeto;
  - não marca como entregue sem o Portão 4.
"""
import argparse, datetime as dt, json, os, shlex, subprocess, sys

ETAPAS = [
    # status atual, o que fazer, skill, próximo status
    ("pendente",     "Pesquisa e perfil (etapas B–C)",                   "pesquisa do setor + Perfil de Gosto", "pesquisa"),
    ("pesquisa",     "Ideias descartadas, 6 lentes, roteiros (D–G)",     "pitch-e-roteiro",                     "ideia"),
    ("ideia",        "PORTÃO 1 · pitch e roteiro",                       None,                                  "portao1"),
    ("portao1",      "Fichas de pessoa, produto ou lugar, cenários (H–J)", "folha-de-personagem, folha-de-produto-e-lugar", "ativos"),
    ("ativos",       "PORTÃO 2 · ficha",                                 None,                                  "portao2"),
    ("portao2",      "Storyboard desenhado (K)",                         "pitch-e-roteiro (prancha)",           "prancha"),
    ("prancha",      "Rascunhos 480p e corte (L)",                       "video-multicena, vfx-sobre-video-real", "rascunho480"),
    ("rascunho480",  "PORTÃO 3 · corte em 480p (OK em até 7 dias)",      None,                                  "portao3"),
    ("portao3",      "Final 1080p só do que entrou no corte (M–N)",      "video-multicena",                     "final"),
    ("final",        "Guardião: fidelidade e conformidade (O)",          "Guardião da Marca + delta_e.py",      "guardiao"),
    ("guardiao",     "PORTÃO 4 · conjunto",                              None,                                  "portao4"),
    ("portao4",      "Entrega em todos os formatos (P)",                 "entrega",                             "entregue"),
]
PORTAO_DE = {"ideia": "1_pitch_roteiro", "ativos": "2_ficha", "rascunho480": "3_corte_480p", "guardiao": "4_conjunto"}
NUM_PORTAO = {"1": "1_pitch_roteiro", "2": "2_ficha", "3": "3_corte_480p", "4": "4_conjunto"}
STATUS_APOS = {"1_pitch_roteiro": "portao1", "2_ficha": "portao2", "3_corte_480p": "portao3", "4_conjunto": "portao4"}


def raiz():
    return os.environ.get("MAQUINA_RAIZ", os.getcwd())


def hoje():
    return os.environ.get("MAQUINA_HOJE", dt.date.today().isoformat())


def job_path(proj):
    return os.path.join(raiz(), "CLIENTES", proj, "JOB.json")


def ler(proj):
    with open(job_path(proj), encoding="utf-8") as f:
        return json.load(f)


def gravar(proj, job):
    with open(job_path(proj), "w", encoding="utf-8") as f:
        json.dump(job, f, ensure_ascii=False, indent=2)


def metas():
    p = os.path.join(raiz(), "HQ", "metas.json")
    return json.load(open(p, encoding="utf-8"))["metas"] if os.path.exists(p) else {}


def etapa(job):
    for st, oque, skill, prox in ETAPAS:
        if st == job.get("status", "pendente"):
            return st, oque, skill, prox
    return None


def travas(job, teto_exec):
    """Devolve a lista de motivos que impedem executar agora. Vazia = pode."""
    motivos = []
    e = etapa(job)
    if e is None:
        return [f"status '{job.get('status')}' não é uma etapa que o motor executa (entregue ou desconhecido)"]
    st, oque, skill, prox = e
    if skill is None:
        motivos.append(f"parado no {oque}: precisa da decisão do Carlo (comando decidir)")
    p3 = job.get("portoes", {}).get("3_corte_480p", {})
    if st == "portao3":
        if not p3.get("aprovado"):
            motivos.append("final 1080p bloqueado: Portão 3 sem aprovação")
        elif not p3.get("prazo_1080p"):
            motivos.append("final 1080p bloqueado: sem prazo_1080p (rode enviou-480 com a data do rascunho)")
        elif p3.get("prazo_1080p") and hoje() > p3["prazo_1080p"]:
            motivos.append(f"final 1080p bloqueado: prazo de 7 dias venceu em {p3['prazo_1080p']} (regerar usando o 480p como referência)")
    if st == "portao4" and not job.get("portoes", {}).get("4_conjunto", {}).get("aprovado"):
        motivos.append("entrega bloqueada: Portão 4 sem aprovação")
    c = job.get("custos", {})
    teto, gasto = c.get("teto_reais") or 0, c.get("gasto_reais") or 0
    cambio = float(os.environ.get("MAQUINA_CAMBIO", "5.5"))
    if not teto:
        motivos.append("projeto sem teto: preencha custos.teto_reais no JOB.json")
    elif gasto + teto_exec * cambio > teto:
        motivos.append(f"teto do projeto: gasto R$ {gasto:.0f} + até R$ {teto_exec * cambio:.0f} desta execução passa de R$ {teto:.0f}")
    return motivos


def prompt_para(proj, job, e):
    st, oque, skill, prox = e
    return (f"Você é o motor da máquina Locatelli. Leia HQ/METAS.md, HQ/REGRAS-GERAIS.md, o cartucho "
            f"HQ/cartuchos/{job.get('cartucho', '?')}/CARTUCHO.md (se existir), CLIENTES/{proj.split('/')[0]}/REGRAS.md "
            f"(se existir) e CLIENTES/{proj}/JOB.json e BRIEFING.md. Execute apenas esta etapa: {oque}, usando: {skill}. "
            f"Salve tudo na pasta do projeto, na subpasta da etapa. Não passe de nenhum portão, não gere 1080p sem o "
            f"Portão 3, não publique nem envie nada. No fim, escreva em CLIENTES/{proj}/ULTIMA-EXECUCAO.md o que foi feito, "
            f"o que ficou pendente e qualquer exceção para o Carlo.")


def cmd_status(_):
    base = os.path.join(raiz(), "CLIENTES")
    if not os.path.isdir(base):
        print("Nenhuma pasta CLIENTES/ na raiz", raiz()); return
    for cli in sorted(os.listdir(base)):
        if not os.path.isdir(os.path.join(base, cli)):
            continue
        for proj in sorted(os.listdir(os.path.join(base, cli))):
            pth = os.path.join(cli, proj)
            if not os.path.exists(job_path(pth)):
                continue
            try:
                job = ler(pth)
            except (OSError, ValueError) as err:
                print(f"{pth:40s} JOB.json ilegível: {err}"); continue
            m = metas().get(job.get("meta", "S1"), {})
            e = etapa(job)
            prox = e[1] if e else str(job.get("status"))
            t = travas(job, m.get("teto_por_execucao_usd", 3))
            sinal = "PARADO · " + t[0] if t else "pode rodar"
            print(f"{pth:40s} {str(job.get('status') or 'pendente'):12s} → {prox:55s} [{sinal}]")


def cmd_proximo(a):
    job = ler(a.projeto)
    m = metas().get(job.get("meta", "S1"), {})
    e = etapa(job)
    t = travas(job, m.get("teto_por_execucao_usd", 3))
    print(f"Projeto: {a.projeto} · meta {job.get('meta', 'S1')} (nível {m.get('nivel', '?')}) · status {job.get('status')}")
    if e:
        print(f"Próximo: {e[1]}" + (f" · skill: {e[2]}" if e[2] else ""))
    print("Travas: " + ("; ".join(t) if t else "nenhuma, pode rodar"))


def cmd_rodar(a):
    job = ler(a.projeto)
    meta_id = job.get("meta")
    if not meta_id:
        print("NÃO RODOU: JOB.json sem o campo \"meta\" (ex.: S1, V3)."); sys.exit(2)
    m = metas().get(meta_id, {})
    teto_exec = m.get("teto_por_execucao_usd", 3)
    t = travas(job, teto_exec)
    if t:
        print("NÃO RODOU:\n- " + "\n- ".join(t)); sys.exit(2)
    if m.get("nivel", 0) < 1:
        print(f"NÃO RODOU: a meta {meta_id} está no nível {m.get('nivel', 0)} (manual). Só o Carlo sobe o nível em HQ/metas.json."); sys.exit(2)
    e = etapa(job)
    cmd = [os.environ.get("MAQUINA_CLAUDE", "claude"), "-p", prompt_para(a.projeto, job, e),
           "--max-budget-usd", str(teto_exec), "--output-format", "json",
           "--permission-mode", os.environ.get("MAQUINA_PERMISSAO", "acceptEdits")]
    if not a.executar:
        print("Comando (use --executar para rodar):\n" + " ".join(shlex.quote(x) for x in cmd)); return
    r = subprocess.run(cmd, cwd=raiz(), capture_output=True, text=True)
    custo_usd, saida = 0.0, {}
    try:
        saida = json.loads(r.stdout)
        custo_usd = float(saida.get("total_cost_usd") or 0)
    except (ValueError, TypeError, AttributeError):
        saida = {}
    ok = r.returncode == 0 and not saida.get("is_error") and not saida.get("permission_denials")
    job = ler(a.projeto)  # o claude -p pode ter atualizado o JOB.json: não sobrescrever
    cambio = float(os.environ.get("MAQUINA_CAMBIO", "5.5"))
    c = job.setdefault("custos", {"teto_reais": 0, "gasto_reais": 0, "lancamentos": []})
    c["gasto_reais"] = round((c.get("gasto_reais") or 0) + custo_usd * cambio, 2)
    c.setdefault("lancamentos", []).append({"data": hoje(), "etapa": e[0], "usd": custo_usd, "reais": round(custo_usd * cambio, 2)})
    if ok:
        job["status"] = e[3]
        print(f"OK: {e[1]} · custo US$ {custo_usd:.2f} · novo status: {job['status']}")
    else:
        job.setdefault("excecoes_para_carlo", []).append({"data": hoje(), "etapa": e[0], "erro": (r.stderr or r.stdout)[-500:],
                                                          "negadas": [d.get("tool_name") for d in saida.get("permission_denials") or []]})
        print(f"FALHOU na etapa {e[1]}; registrado em excecoes_para_carlo")
    gravar(a.projeto, job)
    nxt = etapa(job)
    if nxt and nxt[2] is None:
        print(f"PAROU no {nxt[1]}: aguardando o Carlo")


def cmd_decidir(a):
    job = ler(a.projeto)
    chave = NUM_PORTAO[a.portao]
    p = job.setdefault("portoes", {}).setdefault(chave, {})
    aprovado = a.veredito == "aprovado"  # "corrigido" devolve a etapa (ver DECISOES-ABERTAS: Carlo pode mudar)
    if job.get("status") not in PORTAO_DE or PORTAO_DE[job["status"]] != chave:
        print(f"NÃO REGISTROU: o projeto está em '{job.get('status')}', não no Portão {a.portao}."); sys.exit(2)
    p.update({"aprovado": aprovado, "por": "Carlo", "data": hoje()})
    if aprovado and chave == "3_corte_480p" and not p.get("prazo_1080p"):
        p["prazo_1080p"] = (dt.date.fromisoformat(hoje()) + dt.timedelta(days=7)).isoformat()
    job.setdefault("decisoes", []).append({
        "data": hoje(), "quando": dt.datetime.now().isoformat(timespec="seconds"), "meta": job.get("meta", "S1"), "etapa": f"portao{a.portao}", "item": a.item or "",
        "veredito_carlo": a.veredito, "veredito_juiz": a.juiz, "grave": a.grave,
        "tags": [t for t in (a.tags or "").split(",") if t], "motivo": a.motivo or ""})
    if aprovado and job.get("status") in PORTAO_DE and PORTAO_DE[job["status"]] == chave:
        job["status"] = STATUS_APOS[chave]
    elif not aprovado:
        volta = {"1_pitch_roteiro": "pesquisa", "2_ficha": "portao1", "3_corte_480p": "prancha", "4_conjunto": "final"}[chave]
        if job.get("status") in PORTAO_DE and PORTAO_DE[job["status"]] == chave:
            job["status"] = volta
            job.setdefault("recusas_viram_regra", []).append({"data": hoje(), "portao": a.portao, "motivo": a.motivo})
    gravar(a.projeto, job)
    print(f"Registrado: Portão {a.portao} {a.veredito} · status agora: {job['status']}")


def cmd_enviar_480(a):
    job = ler(a.projeto)
    prazo = (dt.date.fromisoformat(hoje()) + dt.timedelta(days=7)).isoformat()
    job.setdefault("portoes", {}).setdefault("3_corte_480p", {})["prazo_1080p"] = prazo
    gravar(a.projeto, job)
    print(f"Corte 480p enviado ao cliente em {hoje()}; o OK para 1080p precisa sair até {prazo}")


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)
    sub.add_parser("status").set_defaults(f=cmd_status)
    s = sub.add_parser("proximo"); s.add_argument("projeto"); s.set_defaults(f=cmd_proximo)
    s = sub.add_parser("rodar"); s.add_argument("projeto"); s.add_argument("--executar", action="store_true"); s.set_defaults(f=cmd_rodar)
    s = sub.add_parser("enviou-480"); s.add_argument("projeto"); s.set_defaults(f=cmd_enviar_480)
    s = sub.add_parser("decidir"); s.add_argument("projeto"); s.add_argument("--portao", required=True, choices=list(NUM_PORTAO))
    s.add_argument("--veredito", required=True, choices=["aprovado", "corrigido", "recusado"])
    s.add_argument("--motivo"); s.add_argument("--tags"); s.add_argument("--item")
    s.add_argument("--juiz", choices=["aprovado", "reprovado"]); s.add_argument("--grave", action="store_true")
    s.set_defaults(f=cmd_decidir)
    a = p.parse_args()
    a.f(a)


if __name__ == "__main__":
    main()
