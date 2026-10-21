---
name: video-multicena
description: Escreve o prompt de vídeo para o Seedance 2.5 (ou Kling/MiniMax) a partir dos ativos aprovados — folha de personagem, folha de produto ou de lugar, áudio real e storyboard — e conduz o rascunho 480p, a aprovação em até 7 dias e o final 1080p só do que entrou no corte. Use para Reels de campanha, UGC com fala, vídeo de vitrine por peça e vídeo de destino ou pousada.
---

# Vídeo multicena (Fluxo 4 de 5 do vídeo 8 + etapas K–M do Fluxo A–Z)

Na live: folha de personagem + **áudio gravado no celular** + prompt → Seedance 2.5 → **rascunho 480p para aprovação** → **3 opções em 1080p 9:16, 11 s (a duração do áudio)**, cinco ambientes conectados, sete planos.

## Entradas
- folha de personagem (Image 1, identidade absoluta);
- folha de produto ou de lugar;
- áudio real (se houver fala): **gravado na mesma situação da cena** (andando, sentado, ao ar livre), porque a voz muda;
- `04-prancha/` com o storyboard aprovado e o roteiro com `[ATIVO: ...]`.

## Blockout antes do rascunho (movimento e câmera)
Antes de gerar, defina o **blockout**: como a câmera e a pessoa se movem em cada plano. Três fontes, da mais barata para a mais precisa:
1. **Descrição** no próprio prompt (plano simples).
2. **Vídeo de referência gravado no celular** com a ação e o movimento de câmera (Kling Motion Control ou Seedance com o vídeo como referência).
3. **Mapa de profundidade** desse vídeo, quando a luz e o cenário do celular não podem contaminar (ver `vfx-sobre-video-real`, modo mapa de profundidade).
Movimento humano real dá a "imperfeição orgânica" que a IA pura ainda não simula.

## Estrutura do prompt (inglês, seções em maiúsculas)
```
OBJECTIVE AND FORMAT
Create a [N]-second vertical 9:16 [commercial / reel] in 1080p. [Quem] [faz o quê] across [N] connected locations, with [N] shots. [Arco: begin intimate and informal, then build ...]. Preserve natural [voice timing / lip sync / gestures].

REFERENCES
@image1 character sheet — sole identity and wardrobe reference.
@image2 [product sheet / real location] — exact reference, do not alter.
@audio — original voice; keep every word and timing; no music.

SHOT 1 — [LOCAL] (0–2 s): camera [posição e movimento], action [ação], [regra de movimento: "Avoid an exaggerated head turn."]
SHOT 2 — ...
...
BACKGROUND: [o que se mexe ao fundo, discreto e plausível]
TRANSITIONS: [como um local leva ao outro]
ARRIVAL: [plano final; ex.: "Stable close framing", produto ou lugar inteiro]
DO NOT: change face, garment, logo, product, architecture; add text; add music.
```
Peça o vídeo **"sem trilha"** para aproveitar os efeitos sonoros na edição. Música licenciada entra na edição.

## Sequência de geração (regra de custo)
0. **Grátis antes do pago** (`HQ/maquina/CARTEIRA.md`): blockout e testes de movimento nos **2 vídeos/dia do Gemini**; planos simples de rascunho com os 50 créditos/dia do Flow. Tudo via `FILA-GOOGLE.md` (manual). O Seedance pago entra nos planos com pessoa, produto ou fala.
1. **Rascunho 480p** de todas as cenas (1/3 a 1/5 do custo). Edite o filme inteiro em rascunho (DaVinci).
2. **Portão 3:** cliente aprova o corte em 480p. Registre a data no `JOB.json`: **o "OK" para 1080p precisa sair em até 7 dias**, senão o mesmo vídeo não pode mais ser ampliado (plano B: regerar usando o 480p como referência de movimento e câmera).
3. **1080p só das cenas que entraram no corte.** Peça 2 ou 3 opções por cena difícil.
4. **Mistura de modelos por cena:** Seedance no difícil (pessoa, produto, fala), Kling em transição, MiniMax (10–20% do custo do Seedance) em cena simples ou efeito.

**Qual modelo de imagem para os quadros e referências** (do Playbook; conferir na ferramenta, porque muda rápido):
| Modelo | Melhor uso | Atenção |
|---|---|---|
| Nano Banana 2.0 | Escala e testes em massa (barato) | Confunde sobreposições de layout |
| Nano Banana 2.1 | Composição com texto e layout | Custo intermediário |
| Nano Banana Pro | Editorial hiper-realista | **Muda o ângulo de câmera por conta própria**: trave a câmera no prompt |

Custo de referência na live: cerca de **80 créditos** do Higgsfield por geração de Seedance 2.5 em 1080p.

## Studio × SOL
- **Studio:** a peça sagrada aparece inteira no plano de revelação; o Guardião confere quadro a quadro os planos com a peça. UGC: áudio real do criador licenciado.
- **SOL:** o vídeo parte de fotos ou vídeos **reais** da pousada; a IA mexe em pessoas, clima, estação e câmera. Último plano: o lugar inteiro + chamada para o WhatsApp da Vera com o código do anúncio.

## Saída
`05-rascunho-480p/` (drafts + corte + data do OK), `06-final/` (1080p das cenas usadas), prompts em `PROMPTS-VIDEO.md`. Nível de autonomia: 2 para gerar rascunhos; o 1080p só sai depois do Portão 3.
