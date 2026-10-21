# QA de artefatos: o checklist do Guardião além da cor

O Guardião mede a cor com número (`delta_e.py`). Os erros que o cliente **vê** são estes. Confira quadro a quadro, em imagem e vídeo. Cada item reprovado vira uma **tag** em `decisoes`, e o ciclo de melhoria aprende com ela.

| Tag | Conferir |
|---|---|
| `maos` | Cinco dedos, juntas naturais, unhas, anel na mão certa |
| `olhos` | Direção do olhar coerente, íris e brilho iguais nos dois olhos |
| `dentes-orelhas` | Dentes naturais; orelhas e brincos simétricos |
| `texto` | Logo e etiqueta legíveis e corretos (nenhum texto inventado pela IA) |
| `tecido` | Costura, estampa e caimento sem "derreter"; peso e vinco plausíveis |
| `pele` | Textura real (poros, imperfeições), sem cara de plástico |
| `luz` | Sombras na direção da luz principal; reflexos e espelhos coerentes |
| `continuidade` | Look, cabelo, objeto na mão, sujeira e acessórios iguais entre planos |
| `morphing` | Em vídeo: nada se deforma de um frame para o outro |
| `lipsync` | Boca sincronizada com o áudio real |
| `escala` | Tamanho do produto e altura das pessoas coerentes |
| `zona-segura` | Nada importante sob a interface da plataforma (ver bíblia visual §6) |

**Bloco anti-"cara de IA" para os prompts de imagem e vídeo (inglês):**
"natural skin texture with visible pores and fine vellus hair, subtle imperfections, no airbrushing; anatomically correct hands, five fingers, natural knuckles; fabric with realistic weight, drape and creases from movement; no garbled text, no fake logos; no HDR look, no oversaturation, no glow."
Para vídeo, acrescentar: "natural micro-movements, no morphing between frames."
Quando a estética nativa for o objetivo (celular, UGC), mantê-la: não transformar em "cinemático".

**Curadoria:** gerar volume e escolher. A proporção-alvo é 8:1 em imagem e 3:1 em vídeo. Cada escolha recebe uma nota de 1 a 5 em identidade, produto, luz, gesto e "vida". O descarte vira tag. **Repetir a geração com instrução diferencial** (uma mudança por rodada: cor, janela ou pose), nunca o mesmo prompt.
