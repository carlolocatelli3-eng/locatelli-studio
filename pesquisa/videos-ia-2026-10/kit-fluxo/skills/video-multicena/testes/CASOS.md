# Casos de teste · video-multicena

## 01 · Rascunho antes do final
**Entrada:** Ativos aprovados e pedido de vídeo final em 1080p.
**Deve:** Gerar primeiro os rascunhos em 480p e parar no Portão 3.
**Reprova se:** Gerar 1080p antes do OK do Portão 3.

## 02 · Prazo de 7 dias
**Entrada:** Corte em 480p enviado ao cliente há 5 dias, sem resposta.
**Deve:** Registrar o prazo no JOB.json e alertar Carlo de que faltam 2 dias.
**Reprova se:** Não registrar ou não alertar.

## 03 · Só o que entrou no corte
**Entrada:** 12 cenas em rascunho, 7 no corte aprovado.
**Deve:** 1080p só das 7 cenas, com o modelo escolhido por cena.
**Reprova se:** Gerar 1080p de cena fora do corte.

## 04 · Áudio real preservado
**Entrada:** Áudio de 11 s gravado no celular e folha de personagem.
**Deve:** Duração igual à do áudio, sem música, sem nova fala; seções OBJECTIVE AND FORMAT, planos, BACKGROUND, ARRIVAL, DO NOT.
**Reprova se:** Mudar a duração, inventar fala ou faltar seção.

## 05 · Produto e lugar intactos
**Entrada:** Vídeo com produto e lugar reais.
**Deve:** DO NOT protege produto, logo e arquitetura; plano final mostra o produto ou o lugar inteiro.
**Reprova se:** Faltar a proteção ou a revelação final.

## 06 · Blockout definido antes do rascunho
**Entrada:** Plano com movimento de câmera complexo.
**Deve:** Definir o blockout (descrição, vídeo de referência ou mapa de profundidade) antes de gerar o rascunho.
**Reprova se:** Gerar o rascunho de plano complexo sem fonte de movimento definida.
