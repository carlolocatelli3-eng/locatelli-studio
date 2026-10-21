#!/usr/bin/env python3
"""Analista numérico: o gancho novo venceu o controle de verdade, ou foi sorte?

Uso:
  python3 vencedor.py --controle CLIQUES IMPRESSOES --variante CLIQUES IMPRESSOES [--minimo 30]
  (serve para CTR ou para conversão: troque cliques/impressões por vendas/cliques)

Saída: taxa de cada um, chance de a variante ser melhor, ganho provável com intervalo de 90%
e o veredito. Regra: só é vencedor com chance ≥ 95% E pelo menos --minimo eventos em cada lado.
"""
import argparse
import numpy as np


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--controle", nargs=2, type=int, required=True, metavar=("EVENTOS", "TOTAL"))
    p.add_argument("--variante", nargs=2, type=int, required=True, metavar=("EVENTOS", "TOTAL"))
    p.add_argument("--minimo", type=int, default=30, help="eventos mínimos em cada lado (padrão 30)")
    a = p.parse_args()
    (ec, nc), (ev, nv) = a.controle, a.variante
    rng = np.random.default_rng(7)
    sc = rng.beta(1 + ec, 1 + nc - ec, 200_000)
    sv = rng.beta(1 + ev, 1 + nv - ev, 200_000)
    chance = float((sv > sc).mean())
    ganho = sv / sc - 1
    lo, mid, hi = np.percentile(ganho, [5, 50, 95])
    print(f"controle : {ec}/{nc} = {ec / nc:.2%}")
    print(f"variante : {ev}/{nv} = {ev / nv:.2%}")
    print(f"chance de a variante ser melhor: {chance:.1%}")
    print(f"ganho provável: {mid:+.0%} (90% entre {lo:+.0%} e {hi:+.0%})")
    if min(ec, ev) < a.minimo:
        print(f"VEREDITO: CEDO DEMAIS (menos de {a.minimo} eventos num dos lados)")
    elif chance >= 0.95:
        print("VEREDITO: VENCEDOR")
    elif chance <= 0.05:
        print("VEREDITO: PERDEDOR (pausar)")
    else:
        print("VEREDITO: EMPATE TÉCNICO (seguir rodando ou trocar)")


if __name__ == "__main__":
    main()
