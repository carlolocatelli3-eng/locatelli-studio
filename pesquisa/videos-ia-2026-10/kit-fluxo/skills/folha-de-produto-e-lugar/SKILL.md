---
name: folha-de-produto-e-lugar
description: Monta a folha de produto (peça de roupa, joia, calçado, lata, objeto) ou a folha de lugar (quarto, área comum, fachada de pousada) com todas as vistas e closes, para que imagem e vídeo gerados mantenham o produto ou o lugar idênticos ao real. Use antes de qualquer cena com produto ou locação, e para os props e cenários de campanha.
---

# Folha de produto e folha de lugar (etapas I e J do Fluxo A–Z)

No case Fanta, cada ativo teve sua prancha antes de qualquer cena: a arma, a maleta em 3 ângulos, o carro em estúdio + noite + interior, as 6 latas em fundo branco, **um cenário por personagem (exterior e interior)** e o QG que reúne tudo.

## Folha de produto (qualquer produto: o "produto sagrado")
Fotos reais da peça, em fundo neutro e luz uniforme:
- frente, costas, lateral, peça aberta (se tiver forro ou abertura);
- close de **etiqueta, estampa (com escala), aviamento (botão, zíper), tecido (textura), costura**;
- a peça **vestida** em pelo menos uma foto real, para caimento;
- `FICHA.md`: composição, cores com nome e código (Pantone ou HEX medido), medidas, o que **não pode mudar** (lista da peça sagrada).

Montagem: painel com as vistas e os closes rotulados. Se faltar uma vista, gere só a partir das fotos reais e marque "gerada" na ficha; o Guardião confere.

Frase obrigatória em todo prompt que usar o produto (vale para qualquer produto; o cartucho do setor acrescenta os detalhes):
"Preserve the product exactly: shape, proportions, colors, materials, texture, printed text, logos, labels and every visible detail. Do not redesign, recolor, simplify or resize it."
Para roupa, acrescente: "color, print scale and placement, fabric texture, seams, trims, buttons, labels and fit."

**Verificação numérica de cor (obrigatória no Guardião):** para cada imagem gerada com a peça, rode `HQ/ferramentas/delta_e.py` comparando a mesma área do tecido na foto real e na gerada. ΔE2000 < 2 aprova; de 2 a 5, ajustar; acima de 5, reprovar. Anote o valor na `VERIFICACAO.md` (vai para o relatório do cliente como prova da peça sagrada).

Joias, calçados e outros mercados: use o checklist de fidelidade do cartucho do setor (metal, pedras, fecho, escala; costura, solado).

## Folha de lugar (SOL)
**O lugar é sempre real.** Fotos de cada ambiente, nos mesmos ângulos, de dia e à noite:
- fachada, recepção, cada tipo de quarto, banheiro, área comum, piscina, vista, café da manhã;
- `VERDADE-DO-LUGAR.md`: lista do que existe fisicamente (e do que **não** existe), com a data das fotos.

A IA pode mudar só **pessoas, clima, estação e hora do dia**, e cada mudança é anotada. Frase obrigatória:
"This is a real lodging property. Do not add, remove, enlarge or improve any room, furniture, view, pool, amenity or architectural element."

## Props e cenários de campanha (Studio, campanhas híbridas)
- Objetos inspirados em marcas reais devem ser **descaracterizados**: sem logo, sem nome, sem grade, farol ou detalhe característico, e com a silhueta alterada em pelo menos 2 elementos (como o carro do Paulo). Em dúvida, não usar em anúncio pago (trade dress).
- **Um cenário por cena principal, com exterior e interior**, derivado da paleta da coleção.
- Um **lugar-hub** (o QG do Paulo) que reúne os ativos ajuda na revelação final.
- Cada prancha em 3 vistas (como a maleta) para o vídeo manter o objeto.

## Onde gerar
Vistas faltantes, props e cenários: primeiro no Flow (Nano Banana sem crédito), pela `FILA-GOOGLE.md`. Ver `HQ/maquina/CARTEIRA.md`.

## Saída e portão
Pastas em `03-ativos/produtos-ou-lugar/` e `03-ativos/cenarios/`. **Portão 2 (ficha):** Carlo e o cliente aprovam casting, figurino, produto e locação antes do storyboard.

Nível de autonomia: 1. O Guardião compara cada vista gerada com as fotos reais.
