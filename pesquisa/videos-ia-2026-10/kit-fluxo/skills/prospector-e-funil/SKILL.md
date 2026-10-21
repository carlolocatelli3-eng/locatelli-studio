---
name: prospector-e-funil
description: Leva a máquina até o dinheiro. Para cada marca ou negócio da lista curada pelo Carlo, confere o perfil de cliente, monta a amostra (sem pessoa real), rascunha a mensagem com a oferta travada, registra tudo no funil (HQ/VENDAS.json), lembra os follow-ups do dia 4 e do dia 10, gera a proposta e, quando o sinal é pago, abre a pasta do projeto. O envio é sempre do Carlo. Use todo dia de prospecção e quando Carlo perguntar "como está o funil".
---

# Prospector e funil (amostra → mensagem → conversa → proposta → sinal → projeto)

A máquina produz bem; esta skill garante que ela **venda**. Vale para qualquer setor (o cartucho diz o perfil de cliente e a dor).

## Entradas
- Lista curada pelo Carlo (nunca raspagem em massa; nunca e-mail em massa).
- `HQ/OFERTA.md`: **a oferta travada pelo Carlo** (o que, preço, sinal, prazo, bônus). Se não existir, pare e peça. Não invente preço.
- Cartucho do setor (perfil de cliente, dor, lista negra).

## Passos para cada marca
1. **Perfil:** confere os sinais do perfil de cliente (anúncios ativos, loja própria, dor visível). Fora do perfil → `estagio: descartada`, com motivo.
2. **Amostra:** escolhe 1 produto ou lugar e escreve a `FILA-GOOGLE.md` (4 vistas ou 1 vídeo de 10 s), **sem pessoa real** e com marca d'água. O Guardião rápido roda (e o `delta_e.py` quando houver produto).
3. **Mensagem:** rascunha a mensagem A, B ou C da estratégia, com a oferta do `HQ/OFERTA.md`, no tom do Carlo, curta.
4. **Registro:** grava uma linha em `HQ/VENDAS.json` (modelo em `HQ/modelos/vendas/VENDAS.json`).
5. **Todo dia às 8 h:** lista no "Decidir hoje" os envios e os follow-ups do dia (dia 4 e dia 10), com o texto pronto. Uma linha por marca.
6. **Proposta:** quando o estágio vira `proposta`, gera `PROPOSTA.md` a partir de `HQ/modelos/vendas/PROPOSTA.md`, com escopo, preço, sinal, prazo e **controle definido por escrito** (o melhor anúncio atual da marca, a métrica e a regra do `vencedor.py`).
7. **Sinal pago:** cria a pasta do projeto a partir de `HQ/modelos/projeto/`, com o `JOB.json` preenchido (cliente, cartucho, meta, teto, preço vendido) e o BRIEFING com a métrica.

## Nunca
- Enviar mensagem sozinho (nível 1 sempre; o Carlo envia).
- Usar foto com pessoa real na amostra.
- Mudar preço ou oferta fora do `HQ/OFERTA.md`.

## O que esta skill mede (vai para o placar da S0)
Amostras **enviadas** por semana, taxa de resposta, conversas, propostas, sinais pagos, valor pago, motivo de perda.
