# Vídeo 8 · prints do lote 1 (21 telas, de ~36:00 a ~1:15:43)

## Construção do mundo do case Fanta Halloween (cerca de 36:00–37:00)
Uma prancha para cada asset, sempre em mais de uma vista:
- **Arma "Maleta Fanta":** lança-granadas cromado com tambor de latas coloridas. Aparece também segurada pelo personagem, como referência de escala.
- **Maleta:** a mesma maleta em 3 ângulos.
- **Carro:** Porsche 911 de rally descaracterizado, em vista de estúdio (frente e traseira), em cena noturna e no interior.
- **As seis latas:** vampiro, criatura, Ghostface, abóbora, lobisomem e zumbi, em fundo branco.
- **Um cenário por monstro, por fora e por dentro:**
  - "Cabeça de abóbora / Fazenda";
  - "Criatura reanimada / Estação".
- **QG / Sala de troféus:** o lugar que reúne os assets de todos os personagens.

## Filosofia e ferramentas (51:01–58:55)
- **Ciclo:** "Repensar processo criativo" → "Conhecer as melhores ferramentas". O repertório soma e o controle pesa.
- **Quantidade de IAs:** "theresanaiforthat.com · 54.116 AIs".
- **"ChatGPT + Seedance":** "90% do meu tempo".
- **Mapa de ferramentas:**

| Categoria | Ferramentas |
|---|---|
| LLM e agentes | Gemini e Notebook, ChatGPT, Claude, Manus, Meta Muse, Perplexity, Grok, Kimi, DeepSeek |
| Imagem e vídeo | Midjourney, ChatGPT, Google Omni, Kling, Nano Banana, Seedream, Seedance, Luma |
| Avatar, CGI e 3D | Heygen, Wonder D., Meshy, Simulon |
| Hubs criativos | Magnific, Krea, Higgsfield, ComfyUI |
| Programação e protótipo | Lovable, Claude Code, Codex, AntiGravity |
| Reunião | Read.AI, Tactiq |
| Áudio | ElevenLabs, Suno |

- **"Tudo que vamos usar hoje":** "Um modelo para imagem, um para vídeo e o ChatGPT criando os prompts". Os três são Nano Banana 2.1 (imagem), Seedance 2.5 (vídeo) e ChatGPT (prompts).

## FLUXO 1 DE 5 · Variação de ângulos: "Uma foto, vários pontos de vista" (1:01:08–1:15:43)
1. **Foto:** uma foto de celular da pessoa, tirada ao vivo.
2. **Prompts:** colar o meta-prompt abaixo no ChatGPT e anexar a foto. Ele devolve 5 prompts em inglês.
3. **Geração no Higgsfield:**
   - modelo **Nano Banana 2.1**;
   - **3:4, 2K, qualidade High (ou Medium)**, 4 imagens por geração;
   - a foto original como referência em toda geração;
   - saída de 1792×2400.
4. **Revisão:** a partir de cada resultado, dá para usar "Turn to video", "Recreate" ou "Reference".
5. **Pergunta do público no fim:** "Eu posso transformar esse seu prompt como skill pra ficar mais fácil?"

### Meta-prompt "Uma foto, outros ângulos" (portal da Human, texto literal)
> Atue como um diretor de fotografia experimental especializado em criar pontos de vista inusitados.
>
> Analise a imagem anexada e escreva cinco prompts em INGLÊS para fotografar a mesma cena a partir de posições de câmera surpreendentes, ousadas e fisicamente plausíveis.
>
> Não quero pequenas variações do enquadramento original. Cada imagem deve provocar a sensação: "Onde colocaram essa câmera?"
>
> EXPLORE POSSIBILIDADES COMO:
> - Câmera quase encostada no chão, entre os pés, olhando para cima.
> - Câmera diretamente acima da pessoa, apontada quase verticalmente para baixo.
> - Câmera escondida atrás de um objeto existente, que ocupa grande parte do primeiro plano.
> - Câmera extremamente próxima de um animal ou objeto, criando uma diferença enorme de escala entre primeiro plano e fundo.
> - Câmera atrás do ombro, vendo a cena por uma abertura entre o braço e o corpo.
> - Câmera sob um móvel existente, enquadrando a pessoa através de suas estruturas.
> - Câmera rente a uma superfície, com linhas convergentes e forte profundidade.
>
> Escolha cinco soluções que realmente funcionem com a imagem fornecida. Esses exemplos são inspiração, não uma lista obrigatória. Não invente objetos para viabilizar um ângulo.
>
> COMO ESCREVER CADA PROMPT:
> 1. Comece pela posição incomum da câmera. Especifique altura, distância, direção, inclinação e distância focal.
> 2. Descreva o resultado visual concreto:
>    - O que fica enorme no primeiro plano?
>    - O que parece pequeno ou distante?
>    - O que encobre parcialmente a pessoa?
>    - Quais superfícies passam a aparecer?
>    - O que desaparece do enquadramento?
> 3. Inclua pelo menos duas evidências visuais de que a câmera realmente mudou de lugar. Não basta escrever "ângulo radical" ou "perspectiva cinematográfica".
> 4. Preserve a identidade da pessoa, os traços físicos, o figurino, os acessórios e a pose. Preserve a direção de arte, a iluminação e a disposição física do ambiente. Apenas a câmera muda de posição.
> 5. Libere a composição para mudar completamente. Permita cortes ousados, sobreposições, assimetria, encurtamento pela perspectiva e grandes diferenças de escala aparente. Não peça para preservar a composição original.
> 6. Não obrigue a pessoa a olhar para a nova câmera. Não force o rosto inteiro a aparecer quando isso for incompatível com o ângulo. Preserve sua identidade nas partes naturalmente visíveis.
> 7. Use a lente para reforçar a posição de câmera. Uma grande-angular próxima ao primeiro plano pode ampliar a profundidade. Apenas trocar a lente, inclinar a foto ou aplicar um efeito não conta como um novo ponto de vista.
> 8. Mantenha o resultado fotográfico e fisicamente coerente. Não altere o tamanho real dos objetos nem deforme a anatomia para simular perspectiva.
>
> ANTES DE ENTREGAR:
> Revise os cinco prompts. Se algum puder resultar em um retrato convencional ou parecido com o enquadramento original, substitua por uma posição de câmera mais inesperada. Os cinco devem ser claramente diferentes entre si.
>
> FORMATO:
> - Título curto em português.
> - Uma frase explicando onde a câmera foi colocada e por que o resultado será inusitado.
> - Prompt completo e independente em inglês, em bloco de código, pronto para copiar.
>
> Use sempre a imagem original como referência para cada geração.

### Exemplos de prompts gerados (parcialmente legíveis)
- **Pelas costas (o começo está cortado):**
  > "[…] nearer trouser leg. Beyond its outer contour, reveal small, partially visible shoes on the white floor; let the body hide whatever the actual sightline blocks. Show the rear collar and, at most, a cropped sliver of the back of his head. The face and chest disappear completely. The scuffed floor occupies the remaining negative space, with only a narrow portion of the existing wall-floor junction where geometrically visible. Do not add unseen furniture or architectural features.
  >
  > Preserve the exact man's identity, hair, physique, black leather jacket, shirt, trousers, socks, loafers, glasses, watch, and other accessories, even when occluded. Keep both hands in his pockets and maintain the original stance, shoulder position, head direction, and gaze. Do not turn him toward the new camera. Preserve the room geometry and soft overhead illumination. Change only the camera position, using physically plausible overlap, foreshortening, and scale without altering anatomy or object dimensions."
- **Do chão para cima (o fim está cortado):**
  > "Place the camera just 3 cm above the white floor, between and slightly forward of the man's shoe tips, approximately 15 cm from the nearest shoe. Aim upward toward his torso and the luminous ceiling, with an 80-degree upward tilt and a 14 mm full-frame-equivalent rectilinear lens. […]"
