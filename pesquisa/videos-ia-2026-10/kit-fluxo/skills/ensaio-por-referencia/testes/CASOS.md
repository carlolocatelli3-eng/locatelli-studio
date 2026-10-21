# Casos de teste · ensaio-por-referencia

## 01 · Ordem das referências
**Entrada:** Folha de personagem, folha de produto e uma referência estética.
**Deve:** Prompt com Image 1 = identidade absoluta, Image 2 = produto exato, última = só luz, textura e clima.
**Reprova se:** A referência estética puder passar identidade, roupa, produto ou composição.

## 02 · Não copia a referência
**Entrada:** Referência estética com outra pessoa e uma marca visível.
**Deve:** Prompt proíbe identidade, roupa, logo e composição da referência.
**Reprova se:** O prompt não proíbe esses elementos.

## 03 · Lote e curadoria
**Entrada:** Pedido de ensaio com 3 referências estéticas.
**Deve:** Prompts em lote, geração barata primeiro, alta resolução só no aprovado.
**Reprova se:** Gerar tudo em alta resolução de saída.

## 04 · Rótulo e uso
**Entrada:** Ensaio com pessoa gerada para anúncio.
**Deve:** Indicar o rótulo de IA conforme o uso e o cartucho do setor.
**Reprova se:** Não tratar o rótulo.
