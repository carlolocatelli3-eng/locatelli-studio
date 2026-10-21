#!/usr/bin/env python3
"""Roda todos os testes da máquina. Nenhuma mudança de skill ou ferramenta é aceita se isto falhar.

Uso (de dentro da pasta que contém HQ/ e skills/):
  python3 HQ/testes/rodar.py [--skills CAMINHO_DAS_SKILLS]

O que faz:
  1. Testes das ferramentas (cor, vencedor, melhoria) — automáticos.
  2. Confere a forma de cada skill: SKILL.md com nome e descrição, e testes/CASOS.md com pelo menos 3 casos
     completos (Entrada, Deve, Reprova se).
  3. Gera HQ/testes/PLANO-JUIZ.md: os casos que precisam de IA para rodar (cada um vira uma execução
     `claude -p` da skill + um juiz separado que só lê "Deve" e "Reprova se").
"""
import argparse, os, re, sys, unittest

AQUI = os.path.dirname(os.path.abspath(__file__))
HQ = os.path.dirname(AQUI)


def casos(texto):
    blocos = re.split(r"^## ", texto, flags=re.M)[1:]
    out = []
    for b in blocos:
        titulo = b.splitlines()[0].strip()
        campos = {k: bool(re.search(rf"^\*\*{k}:?\*\*", b, re.M | re.I)) for k in ("Entrada", "Deve", "Reprova se")}
        out.append((titulo, campos, b))
    return out


def checar_skills(pasta):
    problemas, plano = [], []
    for nome in sorted(os.listdir(pasta)):
        d = os.path.join(pasta, nome)
        if not os.path.isdir(d):
            continue
        sk = os.path.join(d, "SKILL.md")
        if not os.path.exists(sk):
            problemas.append(f"{nome}: sem SKILL.md"); continue
        topo = open(sk, encoding="utf-8").read().split("---")
        if len(topo) < 3 or f"name: {nome}" not in topo[1] or "description:" not in topo[1]:
            problemas.append(f"{nome}: cabeçalho do SKILL.md sem name igual à pasta ou sem description")
        ct = os.path.join(d, "testes", "CASOS.md")
        if not os.path.exists(ct):
            problemas.append(f"{nome}: sem testes/CASOS.md"); continue
        cs = casos(open(ct, encoding="utf-8").read())
        if len(cs) < 3:
            problemas.append(f"{nome}: só {len(cs)} caso(s); mínimo 3")
        for titulo, campos, bloco in cs:
            faltam = [k for k, ok in campos.items() if not ok]
            if faltam:
                problemas.append(f"{nome} · {titulo}: falta {', '.join(faltam)}")
            plano.append((nome, titulo, bloco.strip()))
    return problemas, plano


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--skills", default=os.path.join(os.path.dirname(HQ), "skills"))
    a = p.parse_args()

    print("1 · Ferramentas")
    r = unittest.TextTestRunner(verbosity=1).run(unittest.defaultTestLoader.discover(os.path.join(AQUI, "unit")))
    print("\n2 · Forma das skills e dos casos de teste")
    problemas, plano = checar_skills(a.skills)
    for x in problemas:
        print("  ✗", x)
    if not problemas:
        print(f"  ✓ {len(plano)} casos em {len({n for n, _, _ in plano})} skills")

    linhas = ["# Plano do juiz (casos que precisam de IA)", "",
              "Para cada caso: rode a skill com a Entrada (`claude -p`, com teto de gasto). Depois, um juiz",
              "separado lê só a saída, o \"Deve\" e o \"Reprova se\", e responde PASSOU ou FALHOU com o motivo.",
              "Uma mudança de skill só vai para o Carlo se não fizer nenhum caso que passava começar a falhar.", ""]
    for nome, titulo, bloco in plano:
        linhas += [f"## {nome} · {titulo}", "", bloco, ""]
    with open(os.path.join(AQUI, "PLANO-JUIZ.md"), "w", encoding="utf-8") as f:
        f.write("\n".join(linhas))
    print(f"\n3 · PLANO-JUIZ.md gerado com {len(plano)} casos")

    ok = r.wasSuccessful() and not problemas
    print("\nRESULTADO:", "TUDO PASSOU" if ok else "HÁ FALHAS")
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
