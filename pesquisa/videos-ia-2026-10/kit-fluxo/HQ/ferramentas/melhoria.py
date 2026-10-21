#!/usr/bin/env python3
"""Ciclo de melhoria diária: a parte que é conta, não opinião.

Lê as decisões registradas nos JOB.json de todos os projetos, atualiza o placar de cada meta,
agrupa os motivos de correção e recusa em regras candidatas (por cliente, por cartucho e geral)
e escreve um relatório para a skill `melhoria-diaria` e para o Carlo.

Uso:
  python3 melhoria.py --clientes CLIENTES --hq HQ [--desde AAAA-MM-DD]

Arquivos:
  lê   CLIENTES/<cliente>/<projeto>/JOB.json   (campo "decisoes")
  lê   HQ/PLACAR.json (se existir)
  grava HQ/PLACAR.json
  grava HQ/melhoria/MELHORIA-<data>.md
"""
import argparse, datetime as dt, glob, json, os
from collections import defaultdict

SOBE_SEQUENCIA = 10      # aprovações seguidas sem correção
SOBE_CONCORDANCIA = 0.90 # juiz × Carlo
JANELA_JUIZ = 20         # últimos casos com juiz e Carlo
PROMOVE = 3              # 3 clientes no mesmo cartucho → regra do cartucho; 3 cartuchos → regra geral


def carregar_jobs(raiz):
    for caminho in sorted(glob.glob(os.path.join(raiz, "*", "*", "JOB.json"))):
        try:
            with open(caminho, encoding="utf-8") as f:
                job = json.load(f)
        except (OSError, json.JSONDecodeError) as e:
            yield caminho, None, str(e)
            continue
        yield caminho, job, None


def aprovado_pelo_carlo(d):
    return d.get("veredito_carlo") == "aprovado"


def placar_da_meta(decisoes):
    """todas as decisões da mesma meta, de todos os projetos e setores."""
    decisoes = sorted(decisoes, key=lambda d: d.get("data", ""))
    seq = 0
    for d in decisoes:
        if d.get("veredito_carlo") in ("aprovado", "corrigido", "recusado"):
            seq = seq + 1 if aprovado_pelo_carlo(d) else 0
    julgadas = [d for d in decisoes if d.get("veredito_juiz") in ("aprovado", "reprovado")
                and d.get("veredito_carlo") in ("aprovado", "corrigido", "recusado")][-JANELA_JUIZ:]
    concord = None
    if julgadas:
        iguais = sum((d["veredito_juiz"] == "aprovado") == aprovado_pelo_carlo(d) for d in julgadas)
        concord = iguais / len(julgadas)
    graves = sum(1 for d in decisoes if d.get("grave"))
    primeira = [d for d in decisoes if d.get("veredito_carlo")]
    taxa = (sum(aprovado_pelo_carlo(d) for d in primeira) / len(primeira)) if primeira else None
    pode_subir = (seq >= SOBE_SEQUENCIA and concord is not None and concord >= SOBE_CONCORDANCIA
                  and len(julgadas) >= JANELA_JUIZ)
    return {"sequencia": seq, "concordancia": concord, "casos_juiz": len(julgadas),
            "erros_graves": graves, "taxa_aprovacao": taxa, "decisoes": len(primeira),
            "pode_subir": pode_subir}


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--clientes", required=True)
    p.add_argument("--hq", required=True)
    p.add_argument("--desde", help="AAAA-MM-DD; padrão: última execução")
    p.add_argument("--hoje", help="AAAA-MM-DD; padrão: hoje (útil para teste)")
    a = p.parse_args()

    hoje = a.hoje or dt.date.today().isoformat()
    placar_path = os.path.join(a.hq, "PLACAR.json")
    anterior = {}
    if os.path.exists(placar_path):
        with open(placar_path, encoding="utf-8") as f:
            anterior = json.load(f)
    desde = a.desde or anterior.get("ultima_execucao", "0000-00-00")

    por_meta = defaultdict(list)
    novas = []
    motivos = defaultdict(lambda: {"clientes": set(), "cartuchos": set(), "exemplos": []})
    alertas, custos, erros = [], [], []

    for caminho, job, erro in carregar_jobs(a.clientes):
        if erro:
            erros.append(f"`{caminho}`: {erro}")
            continue
        cliente = job.get("cliente") or caminho.split(os.sep)[-3]
        cartucho = job.get("cartucho", "sem-cartucho")
        for d in sorted(job.get("decisoes", []), key=lambda x: x.get("data", "")):
            d = dict(d, cliente=cliente, cartucho=cartucho, projeto=job.get("id", caminho))
            por_meta[d.get("meta", "sem-meta")].append(d)
            if d.get("data", "") > desde:
                novas.append(d)
                if d.get("veredito_carlo") in ("corrigido", "recusado"):
                    for tag in d.get("tags") or ["sem-tag"]:
                        m = motivos[tag]
                        m["clientes"].add((cartucho, cliente))
                        m["cartuchos"].add(cartucho)
                        if len(m["exemplos"]) < 5:
                            m["exemplos"].append(f"{cliente} · {d.get('etapa', '?')} · {d.get('motivo', '')}")
        c = job.get("custos", {})
        teto, gasto = c.get("teto_reais") or 0, c.get("gasto_reais") or 0
        if teto and gasto >= 0.8 * teto:
            alertas.append(f"{job.get('id')}: gasto R$ {gasto:.0f} de R$ {teto:.0f} ({gasto / teto:.0%} do teto)")
        custos.append((job.get("id"), gasto, job.get("status")))
        prazo = job.get("portoes", {}).get("3_corte_480p", {}).get("prazo_1080p")
        if prazo and not job["portoes"]["3_corte_480p"].get("aprovado"):
            dias = (dt.date.fromisoformat(prazo) - dt.date.fromisoformat(hoje)).days
            if dias <= 2:
                alertas.append(f"{job.get('id')}: rascunho 480p vence em {dias} dia(s) ({prazo}) sem o OK")

    placar = {meta: placar_da_meta(ds) for meta, ds in sorted(por_meta.items())}

    # promoção de regras: cliente → cartucho → geral
    candidatas = []
    for tag, m in sorted(motivos.items(), key=lambda kv: -len(kv[1]["clientes"])):
        por_cart = defaultdict(set)
        for cart, cli in m["clientes"]:
            por_cart[cart].add(cli)
        if len(m["cartuchos"]) >= PROMOVE:
            nivel = "GERAL (todas as áreas)"
        elif any(len(v) >= PROMOVE for v in por_cart.values()):
            nivel = "CARTUCHO " + ", ".join(k for k, v in por_cart.items() if len(v) >= PROMOVE)
        else:
            nivel = "CLIENTE"
        candidatas.append((tag, nivel, m))

    os.makedirs(os.path.join(a.hq, "melhoria"), exist_ok=True)
    rel = [f"# Melhoria · {hoje}", "", f"Decisões novas desde {desde}: **{len(novas)}**", ""]
    rel += ["## Placar das metas", "", "| Meta | Decisões | Aprovação de primeira | Sequência | Juiz × Carlo | Erros graves | Pode subir? |",
            "|---|---|---|---|---|---|---|"]
    for meta, s in placar.items():
        ant = anterior.get("metas", {}).get(meta, {})
        taxa = "—" if s["taxa_aprovacao"] is None else f"{s['taxa_aprovacao']:.0%}"
        if ant.get("taxa_aprovacao") is not None and s["taxa_aprovacao"] is not None:
            taxa += f" ({(s['taxa_aprovacao'] - ant['taxa_aprovacao']) * 100:+.0f} pts)"
        conc = "—" if s["concordancia"] is None else f"{s['concordancia']:.0%} de {s['casos_juiz']}"
        rel.append(f"| {meta} | {s['decisoes']} | {taxa} | {s['sequencia']}/{SOBE_SEQUENCIA} | {conc} | {s['erros_graves']} | "
                   f"{'**SIM — Carlo decide**' if s['pode_subir'] else 'não'} |")
    rel += ["", "## Regras candidatas (de correções e recusas novas)", ""]
    if not candidatas:
        rel.append("Nenhuma correção ou recusa nova.")
    for tag, nivel, m in candidatas:
        rel.append(f"- **{tag}** → nível sugerido: {nivel} · {len(m['clientes'])} cliente(s), {len(m['cartuchos'])} cartucho(s)")
        rel += [f"  - {e}" for e in m["exemplos"]]
    rel += ["", "## Alertas", ""] + ([f"- {x}" for x in alertas] or ["Nenhum."])
    if erros:
        rel += ["", "## JOB.json com erro de leitura", ""] + [f"- {x}" for x in erros]
    rel += ["", "## Para a skill melhoria-diaria",
            "1. Escrever cada regra candidata no arquivo do nível sugerido (cliente, cartucho ou geral).",
            "2. Propor no máximo 2 mudanças de skill, com antes e depois e as decisões que justificam.",
            "3. Rodar os testes da skill antes de propor; mudança que piora teste não vai para o Carlo.",
            "4. Tudo vai para o Decidir hoje; nada muda em skill sem o sim do Carlo."]
    rel_path = os.path.join(a.hq, "melhoria", f"MELHORIA-{hoje}.md")
    with open(rel_path, "w", encoding="utf-8") as f:
        f.write("\n".join(rel) + "\n")
    with open(placar_path, "w", encoding="utf-8") as f:
        json.dump({"ultima_execucao": hoje, "metas": placar}, f, ensure_ascii=False, indent=2)
    print(rel_path)


if __name__ == "__main__":
    main()
