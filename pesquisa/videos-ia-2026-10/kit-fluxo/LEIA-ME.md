# A máquina (kit para o Claude Code do computador)

Construída na nuvem em 20 e 21/10/2026 para ser levada ao computador e fundida ao Organismo Operador v2 num **único organismo**.

**A ideia:** o humano cria e dá o olho final; a máquina executa, mede e melhora um pouco a cada dia. Serve a **qualquer setor que dependa de imagem**: o núcleo é um só, e o que muda de um setor para outro mora num cartucho.

## Como está organizado (espelha onde cada coisa vai morar no computador)

```
kit-fluxo/
├── LEIA-ME.md                ← este mapa
├── skills/                   → vai para ~/.claude/skills/
│   ├── pitch-e-roteiro/            etapas D–G   (cada skill tem SKILL.md + testes/CASOS.md)
│   ├── angulos-diretor-de-fotografia/  etapa I e amostras
│   ├── folha-de-personagem/        etapa H
│   ├── folha-de-produto-e-lugar/   etapas I–J
│   ├── ensaio-por-referencia/      ensaio
│   ├── video-multicena/            etapas K–M
│   ├── vfx-sobre-video-real/       efeitos
│   ├── melhoria-diaria/            ciclo de melhoria
│   └── novo-cartucho/              entrada em setor novo
└── HQ/                       → vai para HQ/ do computador (juntar, não sobrescrever)
    ├── COMO-USAR.md                os comandos do dia a dia (de qualquer computador ou da nuvem)
    ├── METAS.md                    regras, meta de negócio, metas S1–S3 e V1–V3 com nível e placar
    ├── metas.json                  nível e teto de cada meta (o que o motor lê; só o Carlo muda)
    ├── REGRAS-GERAIS.md            regras que valem para todo setor (cresce com o ciclo)
    ├── maquina/                    como a máquina pensa
    │   ├── ORQUESTRADOR.md         de esteira para orquestrador; modelo de meta; 6 metas
    │   ├── AMBICAO.md              altitude, profundidade, abrangência; conselho de 6 lentes
    │   ├── CICLO.md                ciclo de melhoria diária
    │   └── PILOTOS.md              3 pilotos de ponta a ponta
    ├── ferramentas/                o que é conta, não opinião
    │   ├── delta_e.py              cor real × gerada (ΔE2000)
    │   ├── vencedor.py             gancho venceu de verdade? (95% e 30 eventos)
    │   ├── melhoria.py             placar, regras por nível, alertas
    │   ├── motor.py                faz cada projeto andar até o próximo portão, com travas
    │   ├── trava_portoes.py        hook: nenhuma sessão grava o final ou a entrega sem o portão
    │   └── gerar_pagina_maquina.py refaz a página maquina.html a partir do kit
    ├── modelos/
    │   ├── projeto/                a pasta que todo projeto copia (BRIEFING, JOB.json, 8 etapas)
    │   └── cartucho/               o modelo de cartucho de setor
    ├── cartuchos/                  um por setor, criado pela skill novo-cartucho
    └── testes/
        ├── rodar.py                roda tudo; nada muda se falhar
        ├── unit/                   testes das ferramentas
        └── PLANO-JUIZ.md           os 44 casos que precisam de IA (gerado pelo rodar.py)
```

Documentos de apoio, fora do kit (pasta `pesquisa/videos-ia-2026-10/`):
- `FLUXO-A-Z.md` e `fluxo-a-z.html`: o fluxo etapa por etapa.
- `transcricoes/08-prints-lote1..3.md`: os prompts originais do vídeo 8.
- A estratégia e as pesquisas: `DECISOES-URGENTES`, `METODO-UNIVERSAL`, `RADAR-MERCADO`, `ESTRATEGIA-CRESCIMENTO`.

## Os 5 princípios que não mudam
1. **O humano cria e decide.** Ideia, roteiro bom, os 4 portões e o olho final.
2. **Metas, não tarefas.** A máquina persegue a meta e para nos portões e nas exceções.
3. **Quem gera não julga.** O Guardião, o Destruidor, o conselho de 6 lentes e as ferramentas numéricas.
4. **Autonomia se ganha com placar.** Do nível 0 ao 3, por aprovações seguidas e concordância do juiz.
5. **Toda correção vira regra.** No nível certo (cliente, setor ou geral), e as skills só mudam com teste e com o sim do Carlo.

## Testado nesta sessão
`python3 HQ/testes/rodar.py`:
- **Ferramentas:** 9 testes passaram. A cor bate com os pares de referência da norma CIEDE2000; o vencedor, o perdedor e o "cedo demais" saem corretos; a melhoria promove as regras de cliente para setor e para geral e emite os alertas; o motor leva um projeto de ponta a ponta parando em cada portão e bloqueia teto, prazo de 7 dias e meta no nível 0; a trava impede gravar o final e a entrega sem portão.
- **Skills:** as 9 estão com o formato correto e têm 44 casos de teste.
- **Juiz:** os 44 casos que precisam de IA rodam no computador, pelo `PLANO-JUIZ.md`.

## Antes de instalar: cruzar com o Organismo v2
O Claude do computador deve **comparar antes de copiar**. Partes que provavelmente se sobrepõem ao que já existe:

| Na máquina | No Organismo v2 (provável) | Decidir |
|---|---|---|
| Fluxo A–Z e 4 portões | Criar maestro v2 (8 passos, 4 portões) | Unir: o Criar é o motor, o A–Z é o mapa |
| `pitch-e-roteiro` | Roteirista de Ganchos e `conceitos-anuncio-moda` | Manter uma: o pitch vira etapa antes do Roteirista |
| Guardião com `delta_e.py` | Guardião da Marca (skill) | Acrescentar a ferramenta à skill existente |
| `vencedor.py` | Analista de Ganchos | Acrescentar a ferramenta à skill existente |
| Placar e níveis | Colmeia (provas: testado, parcial, só no papel, falhando) | Unir: a Colmeia mostra o placar |
| Fila de exceções | "Decidir hoje" | É o mesmo lugar |
| `folha-de-personagem` | Ativos (contrato, repasse, banco de referências) | A folha vira um campo do Ativos |
| Pasta de projeto e `JOB.json` | Pastas de campanha (BRIEFING, PRODUTO, CONCEITOS, CENAS, REVISAO) | Unir os nomes; o `JOB.json` entra na pasta que já existe |
| Cartuchos | Perfil de Gosto (por marca) | Cartucho = setor; Perfil = marca; os dois convivem |

O pedido pronto para colar no computador fica no **pacote de passagem** (último passo da construção).
