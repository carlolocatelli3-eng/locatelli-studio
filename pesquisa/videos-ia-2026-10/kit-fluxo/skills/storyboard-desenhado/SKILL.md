---
name: storyboard-desenhado
description: Gera a prancha (etapa K) a partir do roteiro aprovado e da pasta de ativos — quadros desenhados, não realistas, com número do plano, lente, movimento e duração — para o cliente aprovar antes de qualquer vídeo. Use depois do Portão 2 (ficha) e antes dos rascunhos 480p.
---

# Storyboard desenhado (etapa K)

O Paulo fez 60 quadros para cerca de 60 s, e o filme ficou "bem fiel ao storyboard" (vídeo 8, ~44:44). E avisou: "se você pede um storyboard sem direcionar, ele tende a fazer umas imagens realistas que sempre ficam meio toscas" (~40:03). A prancha é a peça de aprovação **mais barata** do fluxo.

## Entradas
- Roteiro aprovado no Portão 1 (tabela com `[ATIVO: ...]`).
- Pasta de ativos aprovada no Portão 2.
- 1 a 3 referências de **traço** (estilo de desenho), escolhidas pelo Carlo.
- A bíblia visual da marca (`HQ/marcas/<marca>/BIBLIA-VISUAL.md`), se existir.

## Como gerar
- **Um quadro por segundo de filme, mais ou menos** (30 s → ~30 quadros). Em cada plano, 1 a 3 quadros.
- Prompt base (inglês):
  "Storyboard panel, pencil and marker sketch style, NOT photorealistic, [9:16 or 16:9] frame. Shot [nº], [lente, ex.: 35 mm], [movimento: push-in / pan left / static], [duração] s. [Ação]. Characters and objects as in the attached asset sheets. Arrow showing camera movement."
- **Grátis antes do pago:** gerar no Flow (Nano Banana), pela `FILA-GOOGLE.md`. Ativos com pessoa real: só ferramenta com "biometria = sim" em `HQ/maquina/FORNECEDORES.md`; no storyboard, prefira silhueta ou personagem esboçado.
- Montar a prancha em grade, com legenda por quadro: nº do plano, lente, movimento, duração, som. O HyperFrames pode gerar também um **animatic** (quadros em sequência com tempo e som guia), de graça.

## Portão
A prancha vai ao cliente **antes** de qualquer vídeo. Quando aprovada, cada quadro vira a base do prompt de vídeo na skill `video-multicena`.

## Saída
`04-prancha/PRANCHA.png` (ou PDF), `04-prancha/QUADROS.md` (texto de cada quadro) e o animatic opcional. Nível de autonomia: 2.
