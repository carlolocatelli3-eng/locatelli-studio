---
name: melhoria-diaria
description: Roda o ciclo de melhoria da máquina — lê todas as aprovações, correções e recusas do Carlo em todos os projetos de todos os setores, atualiza o placar das metas, transforma recusas em regras no nível certo (cliente, setor ou geral) e propõe no máximo duas melhorias de skill testadas. Use no fim de cada dia (rotina agendada) ou quando Carlo pedir "o que a máquina aprendeu".
---

# Melhoria diária (o que faz o dia 30 ser melhor que o dia 1)

A máquina é geral: serve a qualquer negócio que dependa de imagem. Nada aqui é de um setor específico; o que é específico mora no cartucho do setor (`HQ/cartuchos/<setor>/CARTUCHO.md`).

## Passo 1 · A conta (determinística)
Rode:
```
python3 HQ/ferramentas/melhoria.py --clientes CLIENTES --hq HQ
```
Ele lê o campo `decisoes` de todos os `JOB.json`, atualiza `HQ/PLACAR.json` e escreve `HQ/melhoria/MELHORIA-<data>.md` com:
- o placar de cada meta (aprovação de primeira, sequência, concordância juiz × Carlo, erros graves, se pode subir de nível);
- as regras candidatas, já com o nível sugerido;
- alertas (gasto perto do teto, rascunho 480p perto de vencer).

Não refaça essas contas de cabeça: use o que o script calculou.

## Passo 2 · Regras no lugar certo
Para cada regra candidata do relatório, escreva **uma frase de regra verificável** (o que fazer ou não fazer, e como conferir) no arquivo do nível sugerido:
- **Cliente:** `CLIENTES/<cliente>/REGRAS.md` — só aquele cliente.
- **Setor:** seção 7 de `HQ/cartuchos/<setor>/CARTUCHO.md` — vale para todo cliente do setor (apareceu em 3 clientes do mesmo setor).
- **Geral:** `HQ/REGRAS-GERAIS.md` — vale para todo setor (apareceu em 3 setores).

Regra boa: "Comparar a cor da embalagem com a foto real pelo `delta_e.py` antes de mostrar ao cliente." Regra ruim: "Ter mais cuidado com cor."

Se a regra puder ser checada por código, anote "candidata a portão em código" (vai para o item 4 da máquina).

## Passo 3 · No máximo 2 melhorias de skill
Escolha as 2 regras com mais casos. Para cada uma:
1. Localize a skill e o trecho que deixou o erro passar.
2. Escreva a mudança como **antes → depois**, curta.
3. Rode os testes da skill (`skills/<skill>/testes/`). Se a mudança piorar algum teste, descarte.
4. Liste as decisões que justificam (projeto, data, motivo).

## Passo 4 · Para o Carlo, em uma tela só ("Decidir hoje")
```
MELHORIA · <data>
Placar: S1 72% de primeira (+5 pts) · sequência 4/10 · juiz 85% · nenhum erro grave
Regras novas: 3 (1 geral, 1 de setor, 1 de cliente) → [lista de uma linha cada]
Proposta 1: skill X — antes / depois — testes: passou 12/12 — [aprovar] [recusar]
Proposta 2: ...
Alertas: ...
Pode subir de nível: S1 → nível 2? [sim] [ainda não]
```
**Nada muda em skill sem o sim do Carlo.** Regras de cliente e de setor podem ser escritas direto (nível 2); regras gerais pedem o sim.

## Toda segunda: a retrospectiva da semana
Compare a semana com a anterior e diga em 5 linhas se a máquina melhorou:
- aprovação de primeira;
- correções por entrega;
- custo por entrega;
- tempo até o Portão 3;
- concordância do juiz.

Se algum piorou, diga qual mudança da semana pode ter causado.

## Como o Carlo registra uma decisão (para o ciclo ter matéria-prima)
Cada aprovação, correção ou recusa vira uma linha em `decisoes` do `JOB.json` (o painel ou o Claude grava quando o Carlo responde na fila):
```json
{"data": "2026-10-21", "meta": "S1", "etapa": "I", "item": "03-ativos/produto/vista-02.jpg",
 "veredito_carlo": "corrigido", "veredito_juiz": "aprovado", "grave": false,
 "tags": ["cor"], "motivo": "a cor da embalagem saiu mais quente que a real"}
```
- `veredito_carlo`: aprovado · corrigido · recusado
- `veredito_juiz`: o que o Guardião ou o Destruidor disse antes (aprovado · reprovado)
- `tags`: palavras curtas e reaproveitáveis (cor, texto, forma, lugar, pessoa, promessa, tom, enquadramento…). **As tags são o que permite a regra subir de cliente para setor e de setor para geral.**
