---
name: angulos-diretor-de-fotografia
description: A partir de uma única foto (de celular, do site da marca ou da pousada), escreve 5 prompts em inglês para o Nano Banana 2.1 refazer a mesma cena com posições de câmera inusitadas, preservando pessoa, peça e ambiente. Use para catálogo com vários ângulos, amostra de prospecção, variações de campanha e fotos de pousada sem alterar o lugar.
---

# Ângulos de diretor de fotografia (Fluxo 1 de 5 do vídeo 8)

Adaptado do meta-prompt "Uma foto, outros ângulos" do portal da Human (transcrição literal em `pesquisa/videos-ia-2026-10/transcricoes/08-prints-lote1.md`).

## Quando usar
- **Catálogo:** uma foto boa da peça vira 4 ou 5 vistas diferentes.
- **Amostra de prospecção:** a partir de foto do site da marca, **só com produto ou lugar, sem pessoa real** (se a foto tiver modelo, troque por pessoa gerada). Uso interno e privado; nunca publicar nem apresentar como campanha sem autorização da marca (direito do fotógrafo e da modelo).
- **Campanha:** mais planos a partir de uma foto aprovada.
- **SOL:** novos pontos de vista de uma foto **real** da pousada, sem mudar nada do lugar.

## Como rodar
1. Receba a foto. Se não houver foto, peça.
2. Analise a foto e escreva **5 prompts em inglês**, seguindo as regras abaixo.
3. Gere primeiro no **Flow** (Nano Banana sem gastar crédito; manual, via `FILA-GOOGLE.md`, ver `HQ/maquina/CARTEIRA.md`); Higgsfield ou Magnific só se precisar de lote automático ou 4K. Nano Banana 2.1, com **a foto original como referência em toda geração**. Configuração usada na live: **3:4, 2K, qualidade High ou Medium, 4 por vez**.
4. Passe cada resultado no Guardião antes de mostrar a qualquer cliente.

## Instruções para escrever os 5 prompts
Atue como um diretor de fotografia experimental. Cada imagem deve provocar a sensação "onde colocaram essa câmera?". Não aceite pequenas variações do enquadramento original.

Possibilidades (inspiração, não lista obrigatória): câmera quase no chão entre os pés olhando para cima; câmera diretamente acima; câmera atrás de um objeto existente que ocupa o primeiro plano; câmera muito perto de um objeto, com enorme diferença de escala; câmera atrás do ombro, pela abertura entre braço e corpo; câmera sob um móvel existente; câmera rente a uma superfície, com linhas convergentes.

Para cada prompt:
1. Comece pela posição da câmera: **altura, distância, direção, inclinação e lente** (ex.: "3 cm above the floor, 15 cm from the nearest shoe, 80-degree upward tilt, 14 mm rectilinear lens").
2. Descreva o resultado: o que fica enorme no primeiro plano, o que fica pequeno, o que encobre a pessoa, que superfícies aparecem, o que sai do quadro.
3. Inclua **pelo menos duas evidências visuais** de que a câmera mudou de lugar.
4. **Preserve** identidade, corpo, figurino, acessórios e pose; preserve direção de arte, luz e disposição do ambiente. Só a câmera muda.
5. Libere a composição: cortes ousados, sobreposição, assimetria, perspectiva forte.
6. Não obrigue a pessoa a olhar para a câmera nem a mostrar o rosto inteiro.
7. Trocar só a lente, inclinar ou pôr efeito **não conta** como novo ponto de vista.
8. Nada de alterar o tamanho real dos objetos ou deformar a anatomia. **Não invente objetos** para viabilizar um ângulo.

Antes de entregar, revise: se algum prompt puder virar um retrato convencional, troque por uma posição mais inesperada. Os cinco devem ser bem diferentes entre si.

Formato de cada item: título curto em português; uma frase dizendo onde está a câmera e por que fica inusitado; o prompt completo em inglês num bloco de código.

## Qual modelo
Esta skill **quer** que o ângulo mude, então qualquer versão do Nano Banana serve. Mas o Pro pode mudar também o que devia ficar (luz, objetos): mantenha a frase de preservação.

## Regras extras do Locatelli Studio (peça sagrada)
Acrescente ao final de todo prompt de moda:
"Preserve the garment exactly: color, print scale and placement, fabric texture, seams, trims, buttons, labels and fit. Do not redesign, recolor or simplify any part of the garment."

E evite ângulos que escondam o que a cliente precisa ver para comprar (para catálogo, pelo menos 3 dos 5 devem mostrar a peça inteira).

## Regras extras da SOL (o lugar é real)
Acrescente:
"This is a real lodging property. Do not add, remove, enlarge or improve any room, furniture, view, pool, amenity or architectural element. Only the camera position changes."

E nunca use o resultado em anúncio ou OTA sem conferir com a foto original (CDC; regras do Airbnb e da Booking contra imagem que distorce o imóvel).

## Saída
Salve os prompts em `03-ativos/.../ANGULOS.md` e as imagens aprovadas na pasta do ativo. Nível de autonomia: 2 para gerar prompts; o uso comercial passa pelo Guardião.
