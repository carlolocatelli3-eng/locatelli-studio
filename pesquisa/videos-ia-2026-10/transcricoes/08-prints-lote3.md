# Vídeo 8 · prints do lote 3 (27 telas, de ~39:36 a ~2:16:05)

## Roteiro no Google Docs: "O Caçador de Monstros" (39:36–41:01)
- **Arquivo:** "Fanta + @Paulo.IA / Halloween : Roteiros"
- **Ideia (texto literal):**
  > "Em um Reels cinematográfico de cerca de um minuto, Paulo vive um caçador solitário que cruza a cidade rastreando os monstros da campanha. Sem falas, locução ou exposição direta das criaturas, a narrativa avança por vultos, rastros, objetos, reações e confrontos fora de quadro. As capturas são costuradas por deslocamentos de carro, pequenas rotinas e um GPS digital integrado ao painel, criando ritmo de trailer e a sensação de uma missão contínua. A arma dispara um raio laranja e cada presença desaparece, mas o resultado permanece oculto: as latas surgem apenas em fragmentos. Somente no final, na sala de troféus, vemos a coleção completa e entendemos que Paulo não elimina os monstros; ele os transforma nas seis latas da edição limitada de Fanta."
- **Roteiro em tabela.** Três colunas: nº do plano, descrição e 3 quadros de storyboard por plano.
- **Estrutura.** As **CAPTURAS** (uma por monstro) se alternam com as **PONTES** (o carro e o GPS em forma de HUD). Os produtos só aparecem por inteiro no fim.
- **Exemplos de planos (texto literal):**
  - **20, PONTE 01:** "Paulo sai da casa e fecha o estojo no banco do passageiro. Ao ligar o carro, o painel digital desperta: um ponto branco se apaga e um novo alvo laranja pulsa no centro da cidade. A rota se desenha no para-brisa como um HUD. Ele acelera. Corte para o plano aberto do paulo chegando em um grade prédio/hotel"
  - **27, CAPTURA 02, VAMPIRO:** "Paulo cruza o hall do hotel, bastante fog/névoa, morcegos passam perto dele, portas batem e o lustre balança. No espelho, o corredor está vazio, mas Paulo encara algo à sua frente. plano lateral dele disparando a arma. A presença desaba em cinzas roxas; barulho de metal caindo no chão, plano aberto do paulo indo em direção as cinza pegando algo do meio delas sem relevar o que é"
  - **38, PONTE 03:** "Paulo entra no carro com um pouco de sujeiro no rosto Parado num sinal, toma um gole de Fanta, corta planoa berto chegando em uma estação elétrica"
  - **46, CAPTURA 04, CRIATURA REANIMADA:** "Na estação elétrica, correias se rompem e o vidro vibra. Uma forma enorme chega diante de Paulo, mas ficamos em seu rosto. Ele dispara; o raio entra em curto e se divide em pulsos amarelo e vermelho. A presença some. Eletrodos caem e dois objetos metálicos rolam para lados opostos, vistos apenas em fragmentos."

## Fluxograma Humano × IA (44:49)
| # | Etapa | Quem faz |
|---|---|---|
| 1 | Briefing + Creative Session | Humano |
| 2 | Ideia + Direção criativa: "O Caçador de ~~Monstros~~ Latas" | Humano |
| 3 | Roteiros medíocres | IA |
| 4 | Roteiro bom | Humano |
| 5 | Criação de personagem & props | IA |
| 6 | Criação dos cenários | IA |
| 7 | Storyboard | IA |
| 8 | Gerar prompts + vídeos | IA |
| 9 | Select e re-runs | Humano |
| 10 | Edição, som e cor | Humano |
| 11 | Thumb | IA |

## Slides de conceito
- **47:02:** "I.A como sua copilota para acelerar o processo ou para criar o que seria impossível"
- **48:18:** "Ideia → Realidade"

## Demonstração ao vivo no Higgsfield (Seedance 2.5)
- **Endereço:** `higgsfield.ai/ai/video?model=seedance_2_5`
- **Abas:** Create Video / Edit Video / Motion Control. Referências aceitas: imagem, vídeo ou áudio, chamadas com `@`.
- **Configuração mostrada:** 16:9, 1080p, provavelmente 5 s, Bitrate High, botão Generate a **80 créditos**.

### Troca de personagem: homem → pantera de terno
- **Modelo:** provavelmente "Seedance – Object Swap". Saída 1080x1920.
- **Prompt (parte legível):**
  > "Replace the single man in the source video with the anthropomorphic black panther character shown in the reference image: realistic black spotted feline head, green-gold eyes, black tailored suit, black shirt and tie, black trousers. The two panels of the reference show the same single character [...]"

### Estúdio que vira floresta
- **Modelo:** provavelmente "Seedance 2.5 Edit".
- **Prompt (parte legível):**
  > "Edit the supplied original video into a photorealistic practical-looking forest takeover. Use the source footage as the exact temporal and camera-motion plate, not as loose inspiration. PRESERVATION: Preserve the original [...]"

### De onde vêm os prompts
- Os prompts são escritos no **app Codex**.
- **Conversas visíveis na tela:**
  - "Criar prompt Seedance 2.5"
  - "Conectar o Higgsfield"
  - "Conectar o Magnific"
  - "Usar esta skill"
  - "Criar prompts de ângulos ousa…"
  - "Criar prompts para ensaio foto…"
  - "Criar prompt de VFX…"
  - "Usar o Higgsfield Genjustu"
- **Pastas na tela:** "PRODUCTION MAP", "VIDEOLAB 5", "studio".
- O vídeo de origem foi gravado no celular (IMG_4877.mov).

## Regras práticas
1. Ideia, direção, seleção, re-runs, edição, som e cor ficam com o humano. A IA gera roteiros medíocres, personagens, cenários, storyboard, vídeos e thumb.
2. O produto só aparece por inteiro no final; antes disso, só em fragmentos.
3. Na edição de vídeo por IA, o vídeo filmado é a **base exata de tempo e de câmera ("plate"), não uma inspiração**. O prompt traz uma seção **PRESERVATION** dizendo o que não pode mudar.
4. Na troca de personagem, descrever o personagem peça por peça e dizer que os painéis da referência mostram o mesmo personagem.
