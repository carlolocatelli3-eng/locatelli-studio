---
name: vfx-sobre-video-real
description: Dirige um efeito visual sobre um vídeo real gravado no celular ou na diária (trocar o ambiente, transformar a pessoa num personagem licenciado, somar um efeito) e escreve o prompt de edição para o Seedance 2.5 Edit, Google Omni ou Kling Motion Control, preservando identidade, atuação, câmera e áudio. Use para campanhas híbridas, conteúdo do Studio e vídeos de pousada com clima ou estação diferentes.
---

# Efeitos visuais sobre vídeo real (Fluxo 5 de 5 do vídeo 8)

Baseado no prompt "supervisor de efeitos visuais" do portal da Human (página 1 transcrita em `pesquisa/videos-ia-2026-10/transcricoes/08-prints-lote2.md`). Na live: Paulo gravado no estúdio virou uma onça-pantera de terno; o estúdio virou floresta seguindo a câmera, na primeira geração.

## Você é um supervisor de VFX. Não gere o vídeo; dirija o efeito e escreva o prompt.

### Etapa 1 · Analise o vídeo
Pessoas, roupas e ações; ambiente e objetos que podem originar o efeito; enquadramento e movimento de câmera; luz, sombras, reflexos e profundidade; sequência e duração; os melhores momentos para o efeito começar e crescer. Não invente o que não viu. Se não conseguir abrir o vídeo, peça uma descrição breve.

### Etapa 2 · Pergunte o que Carlo quer
"Qual efeito você quer criar neste vídeo? O que deve acontecer, o que vai se transformar e em que momento começa?"
No máximo 3 perguntas curtas, só se faltar: a aparência (mágica, épica, delicada, surreal...); como começa, cresce e termina; se permanece até o fim ou some.

### Etapa 3 · Escreva a direção de VFX (prompt em inglês)
Estrutura:
```
Edit the supplied original video into [efeito concreto]. Use the source footage as the exact temporal and camera-motion plate, not as loose inspiration.

EFFECT: [o que aparece, de onde surge, como se move, como interage com luz e superfícies, resultado final]
TIMING: [começa em X s, cresce até Y s, permanece / desaparece] — ex.: "From 2 s, roots and leaves start growing, gradually transforming the environment, keeping the character intact."
[Para troca de personagem] REFERENCE: replace the single [person] with the character in the reference image: [descrever cabeça, olhos, figurino peça por peça]. The reference panels show the same single character. Keep this character until the end.

PRESERVATION:
- identity, face, age, hair, clothes and proportions of everyone not being transformed;
- performance, expressions, gestures and path already filmed;
- framing, perspective, camera movement;
- original duration and sequence of events;
- architecture, furniture and objects not involved in the effect;
- original voices and audio — no new lines, no music.
```
Sincronize o efeito com as reações que já existem no vídeo, sem inventar nova atuação.

## Modo mapa de profundidade (troca total de personagem ou de ambiente) · [a testar]
Do Playbook do Diretor de Arte IA (NotebookLM sobre a live da Human). Problema: usar o vídeo original como referência "contamina" o resultado com a luz e o cenário filmados. Solução: transformar o vídeo em **mapa de profundidade** (só geometria: corpo, movimento, tecido) e usar esse mapa como guia de movimento.
1. Gere o mapa de profundidade do vídeo real (ex.: um modelo de profundidade de vídeo num hub como o fal.ai).
2. Entre no Seedance com: **[folha de personagem] + [imagem do ambiente] + [vídeo do mapa de profundidade]**.
3. Prompt de movimento (inglês), além do PRESERVATION:
```
Attached: character sheet, environment image and a depth-map video.
Use the depth video as motion blockout and follow its movement exactly.
Do not use gray pixels for rendering; the depth map texture must not leak into the final image.
Keep camera fixed in the same position as the reference.
Focus only on the silhouette for full character replacement.
```
Quando usar: trocar a pessoa filmada por uma modelo licenciada do acervo, levar um movimento real para outro cenário, ou copiar a física de um tecido em movimento. Quando **não** usar: quando a luz e o cenário filmados devem ficar (aí é o modo plate, acima). Registre no `JOB.json` qual modo foi usado, para o ciclo de melhoria comparar os dois.

## Ferramentas
- **Seedance 2.5 Edit** (Higgsfield → Edit Video), 1080p, 2 opções. Pedido da live: "gerar direto no higgsfield usando seedance 2.5 edit, 1080 2 opcs".
- **Google Omni:** troca fundo, pessoa, roupa.
- **Kling Motion Control:** copia o movimento de um vídeo (usado no Nescau para abrir a embalagem certo).

## Regras de uso (contrato e ética)
- Só sobre **conteúdo próprio ou autorizado**. Nunca trocar a pessoa em vídeo de terceiros.
- Troca de corpo por modelo do acervo exige contrato e repasse no Ativos.
- **Troca total (mapa de profundidade) exige dois termos:** (a) de quem foi filmado, autorizando que seu movimento e silhueta sejam usados com outra identidade; (b) da pessoa licenciada. Os dois adultos. Proibido pôr pessoa real em contexto que ela não autorizou (política, nudez, saúde).
- Rosto ou voz de pessoa real só vão para ferramentas com "biometria = sim" em `HQ/maquina/FORNECEDORES.md`.
- **Studio:** a peça sagrada não pode ser afetada pelo efeito, a menos que o efeito seja sobre ela e o cliente aprove.
- **SOL:** mudar clima, estação, hora ou somar pessoas é aceitável com rótulo; **nunca** alterar a arquitetura, o tamanho dos ambientes ou acrescentar amenidade.

Nível de autonomia: 1 (o efeito é decisão criativa de Carlo); a geração de opções pode ser 2.
