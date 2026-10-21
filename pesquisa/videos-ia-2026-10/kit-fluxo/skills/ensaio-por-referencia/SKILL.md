---
name: ensaio-por-referencia
description: Gera um ensaio fotográfico editorial com a pessoa da folha de personagem e a peça da folha de produto, usando uma referência estética só para luz, textura e clima. Use para campanha, catálogo assinado, conteúdo de Instagram, UGC estático e fotos de hóspedes na pousada.
---

# Ensaio por referência (Fluxo 3 de 5 do vídeo 8)

Fórmula da live: **CHARACTER SHEET + REFERÊNCIA + PROMPT**. Resultado: dezenas de fotos com a mesma identidade e figurino, variando fundo, luz e pose.

## Entradas, sempre nesta ordem
1. **Image 1:** folha de personagem (identidade e figurino, prioridade absoluta).
2. **Image 2:** folha de produto (Studio) ou foto real do ambiente (SOL), se a cena tiver produto ou lugar.
3. **Última imagem:** referência estética (editorial, Pinterest, campanha antiga), **só para luz, textura e clima**.

Até 5 referências estéticas podem ser combinadas: "inspire-se, não copie; a pose de uma, a luz de outra".

## Estrutura do prompt (inglês)
```
Image 1: character sheet — sole identity and wardrobe reference, absolute priority.
Image 2: [product sheet / real location photo] — exact product [or location] reference; do not alter it.
Image 3: aesthetic reference — lighting, texture and mood only, never its model's identity, clothes or composition.

Create ONE original professional editorial photograph of the exact adult [man/woman] in Image 1, wearing [peça descrita peça por peça].
Preserve face, skin tone, hair, tattoos [descrever], glasses [descrever], body proportions and height [X cm].
[Para moda] Preserve the garment exactly: color, print scale and placement, fabric texture, seams, trims, buttons, labels and fit.
[Para pousada] This is a real lodging property; do not add, remove or improve any element.

SCENE: [onde, momento, ação]
CAMERA: [posição, altura, lente, enquadramento]
LIGHT: [direção, qualidade, temperatura — tirado da Image 3]
POSE AND EXPRESSION: [natural, específica]
FORMAT: [3:4 / 4:5 / 9:16], photographic, no text, no watermark.
```

## Alerta de modelo
Com o **Nano Banana Pro**, acrescente "Keep the exact camera angle, height and framing described; do not change the camera position." Sem essa trava, ele tende a mudar o ângulo sozinho. Para testes em massa, use o modelo mais barato e deixe o Pro para os finais.

## Como rodar
- Nano Banana 2.1 (Flow, Higgsfield ou Magnific). Na live: **3:4, 2K, Medium**, 4 por geração.
- Gere em lote (o Paulo gerou 20 prompts em paralelo) e faça a curadoria depois.
- Teste barato primeiro (Flow ou modo ilimitado), 2K/4K só no aprovado.

## Curadoria e Guardião
Cada foto escolhida passa por: identidade igual à folha; peça igual à folha de produto; nenhum elemento da referência estética copiado (rosto, roupa, logo); lugar real intacto (SOL); rótulo de IA definido para o uso.

## Studio × SOL
- **Studio:** Catálogo Assinado, campanha, posts da campanha zero ("um ensaio, três usos").
- **SOL:** a pessoa real autorizada na pousada real, para Instagram e anúncio. Nunca para fotos de OTA se a pessoa ou o clima forem gerados sem rótulo.

Nível de autonomia: 2 na geração em lote; a seleção final é de Carlo (Portão 4 no conjunto).
