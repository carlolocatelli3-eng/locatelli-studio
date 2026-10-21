# METAS · lido pelo Claude Code no começo de toda sessão e de toda rotina

> Copiar para `HQ/METAS.md` no computador. Só o Carlo muda este arquivo. Os números que as travas (motor ou maestro) leem (nível e teto de cada meta) ficam em `HQ/metas.json`; mudou aqui, mude lá também.

## Regras de sempre
1. Antes de qualquer trabalho, ler esta página e o `JOB.json` do projeto.
2. Cada meta tem um **nível**. Nível 1: trabalha sozinho, mas **para na fila de aprovação** antes de entregar, publicar ou gastar.
3. Toda aprovação ou recusa do Carlo é registrada no **placar** da meta (abaixo). Toda recusa vira regra escrita no `JOB.json` (`recusas_viram_regra`).
4. A meta só sobe de nível quando o placar mostra **10 aprovações seguidas sem correção** E o juiz concordou com o Carlo em **pelo menos 90% dos últimos 20 casos**. Quem sobe o nível é o Carlo, nunca a IA.
5. Um erro grave (peça com cor errada entregue, promessa falsa, gasto acima do teto) **desce** a meta um nível na hora.
6. Exceções vão para o "Decidir hoje" do painel, com motivo e ação sugerida. Nenhum outro canal.
7. Nunca sozinho, em nenhum nível: rosto de pessoa real fora de folha aprovada, gastar verba de mídia, primeira mensagem para cliente novo, preço ou disponibilidade fora da tabela.

## Meta de negócio (só o Carlo define) · [PROPOSTA, aguarda o Carlo]
Até 15/12/2026: 5 vendas no Studio, 1 pousada com 30 dias de Vera e relatório de margem recuperada, Piloto 0 publicado.
*A auditoria de 21/10 mostrou que, como está, isso dá 1–2 vendas na Black Friday; as outras dependem de uma oferta de Natal/verão e de definir o que conta como "venda". Ver `HQ/DECISOES-ABERTAS.md`.*

### S0 · Funil até o dinheiro · [PROPOSTA, aguarda o Carlo]
- **Nível:** 1 · **Dono:** Carlo · **Ritmo:** toda sexta, uma linha no "Decidir hoje"
- **Feito quando** (o que vale é o `HQ/VENDAS.json`):
  - 31/10: oferta travada em `HQ/OFERTA.md` + 25 amostras **enviadas**;
  - 07/11: 50 enviadas, ≥ 8 conversas, ≥ 3 propostas;
  - 10/11: ≥ 1 sinal pago na Black Friday;
  - 20/11: oferta de Natal/verão no ar;
  - 15/12: as vendas da meta de negócio, pagas.
- **Skill:** `prospector-e-funil`.
- **Chama o Carlo:** semana com menos de 20 envios, ou conversa parada há mais de 3 dias.

## Metas de operação

### S1 · Toda campanha aprovada chega ao Portão 3 sozinha
- **Nível atual:** 1 · **Começa em:** Piloto 0 (cliente = Carlo)
- **Feito quando:** prancha + rascunhos 480p de todas as cenas na pasta `05-rascunho-480p/`, Guardião aprovado (ΔE < 2 nas áreas da peça), custo ≤ teto do `JOB.json`.
- **Pode sozinha:** rodar as skills das etapas D, F, G (versões), H–L; refazer uma vez o que o Guardião reprovar.
- **Para e chama o Carlo:** Portão 1, Portão 2, Portão 3; reprovação dupla do Guardião; gasto chegando a 80% do teto.
- **Placar:** aprovações seguidas: 0 · concordância do juiz (últimos 20): — · erros graves: 0

### S2 · Sempre 3 ganchos vencedores rodando em cada cliente
- **Nível atual:** 0 (começa na primeira campanha no ar)
- **Feito quando:** ≥ 3 anúncios "VENCEDOR" pelo `vencedor.py` em cada cliente.
- **Placar:** —

### S3 · 25 amostras prontas toda segunda às 8 h · [quantidade em PROPOSTA, aguarda o Carlo]
- **Nível atual:** 1 · **Envio sempre manual.**
- **Feito quando:** 25 amostras aprovadas pelo Guardião, com mensagem rascunhada, na fila de envio.
- **Placar:** aprovações seguidas: 0 · concordância do juiz: —

### C1 · Conteúdo que abre conversa · [PROPOSTA, aguarda o Carlo]
- **Nível atual:** 1 (publicação sempre com o sim) · **Skill:** `gerente-de-conteudo`
- **Feito quando:** toda segunda a semana está embalada na fila (Studio e SOL); toda sexta sai a leitura; pelo menos 60% das peças vêm de material reaproveitado.
- **Métrica que manda:** conversas abertas por semana (direct, WhatsApp com código).
- **Placar:** aprovações seguidas: 0

### V1, V2, V3 (SOL)
Nível 0 até a pousada piloto entrar no ar. Texto completo em `ORQUESTRADOR.md`.
