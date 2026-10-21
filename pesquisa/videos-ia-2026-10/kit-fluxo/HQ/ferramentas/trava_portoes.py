#!/usr/bin/env python3
"""Trava dos portões dentro do Claude Code (hook PreToolUse).

Bloqueia (código de saída 2) qualquer gravação em:
  CLIENTES/<cliente>/<projeto>/06-final/    sem o Portão 3 aprovado e dentro do prazo de 7 dias
  CLIENTES/<cliente>/<projeto>/07-entrega/  sem o Portão 4 aprovado

Instalação no computador (.claude/settings.json do projeto):
  {"hooks": {"PreToolUse": [{"matcher": "Write|Edit|MultiEdit",
     "hooks": [{"type": "command", "command": "python3 HQ/ferramentas/trava_portoes.py"}]}]}}
"""
import datetime as dt, json, os, re, sys


def main():
    try:
        dados = json.load(sys.stdin)
    except json.JSONDecodeError:
        sys.exit(0)
    caminho = (dados.get("tool_input") or {}).get("file_path") or ""
    m = re.search(r"(.*CLIENTES[/\\][^/\\]+[/\\][^/\\]+)[/\\](06-final|07-entrega)[/\\]", caminho)
    if not m:
        sys.exit(0)
    pasta, etapa = m.group(1), m.group(2)
    try:
        job = json.load(open(os.path.join(pasta, "JOB.json"), encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        print(f"Trava: não achei o JOB.json de {pasta}; gravação em {etapa} bloqueada.", file=sys.stderr)
        sys.exit(2)
    portoes = job.get("portoes", {})
    hoje = os.environ.get("MAQUINA_HOJE", dt.date.today().isoformat())
    if etapa == "06-final":
        p3 = portoes.get("3_corte_480p", {})
        if not p3.get("aprovado"):
            print("Trava: o final 1080p só pode ser gravado depois do Portão 3 aprovado pelo Carlo.", file=sys.stderr); sys.exit(2)
        if p3.get("prazo_1080p") and hoje > p3["prazo_1080p"]:
            print(f"Trava: o prazo de 7 dias do rascunho venceu em {p3['prazo_1080p']}.", file=sys.stderr); sys.exit(2)
    if etapa == "07-entrega" and not portoes.get("4_conjunto", {}).get("aprovado"):
        print("Trava: a entrega só pode ser gravada depois do Portão 4 aprovado pelo Carlo.", file=sys.stderr); sys.exit(2)
    sys.exit(0)


if __name__ == "__main__":
    main()
