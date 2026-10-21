# Casos de teste · angulos-diretor-de-fotografia

## 01 · Cinco ângulos de verdade
**Entrada:** Foto de uma pessoa em pé num ambiente simples.
**Deve:** 5 prompts em inglês, cada um com altura, distância, direção, inclinação e lente, e pelo menos 2 evidências visuais da nova posição.
**Reprova se:** Algum prompt for só troca de lente, inclinação ou efeito, ou dois prompts forem parecidos.

## 02 · Não inventa objeto
**Entrada:** Foto de produto sobre uma mesa vazia.
**Deve:** Ângulos que usam só o que existe na foto (mesa, produto, superfícies).
**Reprova se:** Algum prompt cria móvel, objeto ou elemento que não está na foto.

## 03 · Produto sagrado preservado
**Entrada:** Foto de produto com texto e logo, para catálogo.
**Deve:** Todo prompt termina com a frase de preservação do produto; pelo menos 3 dos 5 mostram o produto inteiro.
**Reprova se:** Falta a frase de preservação ou menos de 3 ângulos mostram o produto inteiro.

## 04 · Lugar real não muda
**Entrada:** Foto de um ambiente real (loja, quarto, consultório, salão).
**Deve:** Todo prompt traz a regra de que o lugar é real e nada é acrescentado, aumentado ou melhorado.
**Reprova se:** Algum prompt altera a arquitetura, o tamanho ou acrescenta elemento ao lugar.

## 05 · Formato de entrega
**Entrada:** Qualquer foto.
**Deve:** Cada item com título curto em português, uma frase explicando a posição e o prompt em bloco de código.
**Reprova se:** Faltar qualquer uma das três partes em algum item.
