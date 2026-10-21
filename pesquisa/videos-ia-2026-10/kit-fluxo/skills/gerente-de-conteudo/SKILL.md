---
name: gerente-de-conteudo
description: Gerente de conteúdo de qualquer marca (Locatelli Studio, SOL Destinos ou um cliente): plano editorial por pilares, calendário com as datas do setor, reaproveitamento de tudo o que a produção gera (um ensaio vira muitas peças), embalagem de cada peça (gancho, legenda, capa, horário), fila de aprovação, agendamento só depois do sim e leitura semanal do que trouxe conversa. Use quando Carlo pedir plano de conteúdo, calendário, posts da semana, "o que publicar", ou ao fechar um job com material sobrando.
---

# Gerente de conteúdo (para nós e para o cliente)

**Por que existe:** cada trabalho da máquina gera muito mais material do que a entrega usa: ensaios, ângulos, bastidores, rascunhos, antes e depois da peça sagrada. Sem um gerente, esse material morre na pasta. Com ele, vira presença constante, prova e conversa, para a nossa marca e como produto mensal para o cliente.

Serve a qualquer marca. O que muda vem de três lugares: o Perfil de Gosto (marca), a bíblia visual (como parece) e o cartucho (regras do setor).

## Entradas
- `MARCA/PLANO-EDITORIAL.md` (modelo em `HQ/modelos/conteudo/`): objetivo, pilares, voz, canais, frequência, métrica.
- O que a produção gerou: pastas `03-ativos/`, `05-rascunho-480p/`, `06-final/`, `08-resultado/` dos projetos da marca (com os direitos de uso em ordem).
- As datas do setor (do cartucho) e o "Plano de Datas" (BF, Natal, verão, Carnaval, Dia das Mães…).
- O que já funcionou: regras de vencedor (skill Receita / Analista) e os números da semana anterior.

## Ciclo semanal
1. **Segunda · plano da semana:** 4 a 5 peças por canal, distribuídas pelos pilares. Cada peça diz de que material vem (reaproveitamento antes de gerar algo novo).
2. **Embalagem de cada peça:**
   - gancho dos primeiros 1–2 s (das frases reais do Pesquisador de Dores);
   - legenda na voz da marca;
   - capa (thumb) e formato com zona segura;
   - chamada para ação ligada ao objetivo (direct, WhatsApp da Vera com código, link);
   - rótulo de IA quando houver parte gerada.

   A montagem sai pelo HyperFrames.
3. **Guardião:** a peça e a legenda passam pelo QA de artefatos, pela lista negra do cartucho e pelo rótulo.
4. **Fila de aprovação:** a semana inteira numa tela do "Decidir hoje". Carlo (ou o cliente) aprova, corrige ou recusa por peça. A decisão vai para `decisoes`, com tags (tom, gancho, imagem, legenda…).
5. **Agendamento:** só do que foi aprovado, pelo agendador da marca (Postiz, no computador; Blotato, pago, com conexão ao Claude; ou a ferramenta nativa da plataforma).
6. **Sexta · leitura:** alcance, salvamentos, comentários, **conversas abertas e cliques no WhatsApp/direct**. O que trouxe conversa vira regra (Receita); o que não trouxe sai do plano. Ganchos que vencem no orgânico viram candidatos a anúncio (teste barato antes do pago).

## Reaproveitamento (a regra de ouro)
Antes de gerar, procure no que já existe. Um ensaio aprovado rende, em média:
- 1 carrossel;
- 3 cortes verticais;
- 1 antes e depois da peça sagrada (Studio);
- 1 bastidor do método (prancha → 480p → final);
- 4 stories;
- 1 imagem para catálogo ou Google.

## Pilares de partida (ajustar por marca)
- **Locatelli Studio (diário do método):**
  - um ensaio, três usos;
  - a peça sagrada (o erro que a IA comete e o Guardião pega);
  - bastidor;
  - "real ou IA?" (sempre declarado);
  - gancho da semana.
- **SOL Destinos (destino e confiança):**
  - o lugar real (fotos reais, a IA só no clima, nas pessoas e na estação);
  - o roteiro em 1 parágrafo;
  - perguntas que chegam no WhatsApp, respondidas;
  - datas (Carnaval, réveillon, feriados);
  - "o que cada casa declara" (Roteiro Sol).
- **Cliente:** vem do Perfil de Gosto e do cartucho do setor dele.

## Nunca
- Publicar ou agendar sem o sim (nível 1, mesmo quando a produção estiver no nível 2).
- Usar material de cliente na nossa marca sem autorização escrita.
- Usar rosto de pessoa real fora do termo de cessão.
- Remover rótulo ou C2PA.
- Comprar seguidores, engajamento ou listas.

## Saída
`MARCA/CALENDARIO.json` (modelo em `HQ/modelos/conteudo/`), as peças na pasta da semana e o relatório de sexta. Nível de autonomia: 2 no plano e na embalagem; 1 na publicação.
