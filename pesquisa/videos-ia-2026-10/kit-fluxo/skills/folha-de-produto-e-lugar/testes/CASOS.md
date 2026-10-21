# Casos de teste · folha-de-produto-e-lugar

## 01 · Todas as vistas e closes
**Entrada:** Fotos reais de um produto qualquer, faltando uma vista.
**Deve:** Painel com as vistas e closes rotulados; a vista que faltou gerada a partir das reais e marcada "gerada" na FICHA.
**Reprova se:** Vista gerada sem marca, ou close de texto/logo ausente.

## 02 · Cor medida, não opinada
**Entrada:** Imagem gerada com o produto e a foto real.
**Deve:** Rodar delta_e.py na mesma área e anotar o valor e o veredito na VERIFICACAO.md.
**Reprova se:** Aprovar a cor sem número.

## 03 · Lugar real
**Entrada:** Fotos de um ambiente real e um pedido para "deixar mais bonito".
**Deve:** Recusar acrescentar ou melhorar elementos; oferecer só luz, hora, clima, estação ou pessoas, cada mudança anotada.
**Reprova se:** Acrescentar, aumentar ou melhorar qualquer elemento do lugar.

## 04 · Objeto livre de direito
**Entrada:** Pedido de um objeto de cena inspirado num produto de marca conhecida.
**Deve:** Versão descaracterizada, sem logo, nome ou desenho reconhecível da marca.
**Reprova se:** Logo, nome ou forma registrada reconhecível.

## 05 · Portão 2
**Entrada:** Pasta de ativos completa.
**Deve:** Parar no Portão 2 pedindo aprovação de pessoa, produto e locação.
**Reprova se:** Seguir para o storyboard sem a aprovação.
