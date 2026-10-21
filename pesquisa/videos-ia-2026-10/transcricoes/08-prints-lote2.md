# Vídeo 8 · prints do lote 2 (25 telas, de ~1:16:59 a ~2:07:41)

## FLUXO 2 DE 5 · Character sheet: "Uma referência do Paulo para reutilizar" (FOTOS + SKILL)
- **Esquema do slide:** [FOTOS DA PESSOA] + [Skill do character sheet] → prancha com FRENTE · TRÊS QUARTOS · PERFIL · CORPO INTEIRO. A prancha é "uma referência visual organizada do Paulo, para reutilizar em tudo que vem depois".
- **Execução no app Codex:** a conversa se chama "Usar esta skill", com o modelo em "Acesso completo".
  - **Entrada:** 3 fotos do iPhone (HEIC).
  - **O que a skill faz:** remove o fundo (rembg), gera os corpos de frente e de costas, cria máscaras e monta o painel.
  - **Resposta do agente:** "Pronto — painel em 4800 × 1800, com retratos originais preservados e corpos gerados aqui no chat. As costas foram aproximadas conforme autorizado."
  - **Pacote entregue:** "PNG, HTML, originais, máscaras, prompt e relatório de verificação".
  - **Tempo:** 2 min 48 s.
- **Resultado:** fundo cinza; rosto de frente e perfil são **fotos reais** (aparece até a tatuagem do pescoço); os corpos de frente e de costas são gerados.
- **Sugestão que aparece no campo de texto:** "instala essa skill pra eu usar de novo depois".

## Conexões no Codex
- **Higgsfield:** "vamos conectar o higgsfield". Abre o plugin "Higgsfield · Every image and video model", que pede autorização no navegador.
- **Magnific:** conversa "Conectar o Magnific".
- **DaVinci Resolve:** integração "Com.blackmagic Design.davinciresolve". O agente religa os arquivos brutos em 1080p no projeto sem renderizar de novo.

## FLUXO 3 DE 5 · Ensaio fotográfico: "Do character sheet ao ensaio" (CHARACTER SHEET + REFERÊNCIA + PROMPT)
- **Configuração no Higgsfield:**
  - modelo Nano Banana 2.1;
  - 3:4, 2K, qualidade Medium;
  - saída de 1856×2304.
- **Duas referências, nesta ordem:**
  1. a folha de personagem;
  2. uma referência estética (por exemplo, um editorial da Billboard).
- **Prompt (parte visível):**
  > "Image 1: character sheet — sole identity and wardrobe reference, absolute priority. Image 2: aesthetic reference — lighting, texture and mood only, never its model's identity, clothes or composition. Create ONE original professional editorial photograph of the exact adult man in Image 1. Preserve his [...]"
- **Resultado:** dezenas de fotos com a mesma identidade e o mesmo figurino, variando fundo (azul-petróleo, terracota, branco, preto e branco), luz e pose.

## FLUXO 4 DE 5 · "O Paulo falando em outros lugares" (SEEDANCE 2.5 · CHARACTER SHEET + ÁUDIO + PROMPT)
- **Entradas:** a folha de personagem, o áudio gravado no celular ("Join Cafeteria.m4a") e um board.png.
- **Comandos no Codex, em ordem:**
  1. "use o seedance 2.5 pra gerar o video, upando os assets e prompt junto". O agente responde que vai gerar **primeiro o draft em 480p para aprovação**.
  2. "1080, 9:16"
  3. "pode gerar 3 opcs"
- **Resposta do agente:** "três opções em 1080p, vertical 9:16, com 11 segundos cada para preservar o áudio inteiro. As três terão cinco ambientes conectados: cafeteria, galeria envidraçada, passagem com colunas, pátio arborizado e terraço, variando a direção de câmera e a montagem."
- **Prompt (início):**
  > "OBJECTIVE AND FORMAT — Create an 11-second vertical 9:16 commercial in 1080p. One man walking and speaking directly to camera across five connected locations, with seven shots. Begin intimate and informal, then build physical camera spectacle. Preserve natural [...]"
- **Prompt (fim):**
  > "...Avoid an exaggerated head turn. BACKGROUND: Reflections slide across the glazing; courtyard plants move beyond it. One distant pedestrian passes outside. ARRIVAL: Stable close framing"
- **Estrutura do prompt:** seções em maiúsculas (OBJECTIVE AND FORMAT, os planos, BACKGROUND, ARRIVAL…), com uma regra de movimento em cada plano.
- **Configuração no Higgsfield:**
  - Seedance 2.5, 1080p, 1080×1920;
  - **cerca de 80 créditos por geração**;
  - aceita imagem, vídeo ou áudio como referência.

## FLUXO 5 DE 5 · Seedance 2.5 Edit: "Efeitos visuais sobre um vídeo real" (VÍDEO GRAVADO + PROMPT)
- **O que o slide pede:** "Grave o Paulo numa ação simples no estúdio e use o vídeo como base para mudar o ambiente ou somar um efeito".
- **Uso:** "COLE NO CHATGPT E ANEXE O VÍDEO". O ChatGPT devolve o prompt para o Seedance 2.5.

### O prompt de edição (página 1 de 2, texto literal)
> Você é um supervisor de efeitos visuais de cinema, especializado em transformar vídeos reais com efeitos impressionantes e integração fotorrealista.
> Vou enviar um vídeo. Sua tarefa é analisar a filmagem, entender o efeito que desejo e escrever um prompt detalhado para eu levar ao Seedance 2.5 junto com o vídeo original.
> Não gere o vídeo. Seu trabalho é dirigir criativamente o efeito e preparar o prompt de edição.
>
> **ETAPA 1 — ANALISE O VÍDEO**
> Antes de propor qualquer efeito, observe:
> - Pessoas, roupas, aparência e ações.
> - Ambiente, objetos e elementos que podem originar o efeito.
> - Enquadramento e movimentos da câmera.
> - Iluminação, sombras, reflexos e profundidade.
> - Sequência dos acontecimentos e duração, quando verificável.
> - Momentos adequados para iniciar e desenvolver a transformação.
>
> Não invente detalhes que não conseguiu observar. Caso não consiga acessar o vídeo, informe isso e peça uma descrição breve.
>
> **ETAPA 2 — PERGUNTE O QUE EU QUERO**
> Depois da análise, faça esta pergunta, adaptando-a naturalmente ao vídeo:
> "Qual efeito visual você quer criar neste vídeo? Conte o que deve acontecer, o que vai se transformar e em que momento o efeito deve começar. Pode explicar do seu jeito, sem termos técnicos."
> Aguarde minha resposta antes de escrever o prompt final.
>
> Se necessário, faça até três perguntas curtas para esclarecer:
> - A aparência desejada: mágica, assustadora, épica, delicada, surreal ou outra.
> - Como o efeito começa, cresce e termina.
> - Se a transformação permanece até o final ou desaparece.
>
> Pergunte apenas o que estiver faltando. Não repita informações que já forneci. Resolva os detalhes técnicos e criativos secundários com seu próprio julgamento.
>
> **ETAPA 3 — TRANSFORME MINHA IDEIA EM DIREÇÃO DE VFX**
> Desenvolva uma execução visual concreta, coerente com a filmagem.
> Evite descrições genéricas como "efeito cinematográfico incrível". Explique o que aparece, de onde surge, como se movimenta, como interage com o ambiente e qual será o resultado final.
>
> Por padrão, preserve:
> - Identidade, rosto, idade, cabelo, roupas e proporções das pessoas.
> - Atuação, expressões, gestos e percurso já filmados.
> - Enquadramento, perspectiva, movimentos e comportamento da câmera.
> - Duração e sequência original dos acontecimentos.
> - Arquitetura, posição dos móveis e objetos não envolvidos no efeito.
> - Vozes e áudio original, sem inventar falas ou acrescentar música.
>
> Altere esses elementos somente quando minha ideia pedir isso explicitamente. Sempre que possível, sincronize o efeito com as reações existentes, sem inventar uma nova atuação.

*(A página 2 de 2 não aparece nos prints.)*

### A demonstração ao vivo
- Gravaram o Paulo no celular (IMG_4976.MOV) e anexaram a imagem de referência de uma onça-pantera preta de terno.
- **Pedido no Codex:** "quero gerar direto no higgsfield usando seedance 2.5 edit, 1080 2 opcs"
- **Resposta do agente:** "Envie o vídeo original e descreva o efeito que você quer: o que deve acontecer ou se transformar e quando o efeito começa."
- **Pedido falado:** "…essa onça preta com a roupa dele e mantenha esse personagem até o final"

## Regras práticas
1. A folha de personagem "define quem aparece" e é reutilizada em tudo. Rosto real, corpo gerado.
2. No ensaio, a imagem 1 é a única referência de identidade e figurino, com prioridade absoluta. A imagem 2 serve só para luz, textura e clima.
3. No vídeo, primeiro o rascunho em 480p para aprovação, depois 1080p 9:16. A duração acompanha o áudio inteiro. Pedir 3 opções.
4. No VFX, a IA primeiro analisa o vídeo, depois pergunta o que se quer (no máximo 3 perguntas) e só então escreve o prompt. Por padrão, preserva identidade, atuação, câmera, duração, arquitetura e áudio.
5. A pessoa dá o comando em linguagem simples, e o agente faz o resto pelos plugins: sobe os arquivos, gera e religa no editor.
