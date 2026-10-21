# METAS · lido pelo Claude Code no começo de toda sessão e de toda rotina

> Copiar para `HQ/METAS.md` no computador. Só o Carlo muda este arquivo.

## Regras de sempre
1. Antes de qualquer trabalho, ler esta página e o `JOB.json` do projeto.
2. Cada meta tem um **nível**. Nível 1: trabalha sozinho, mas **para na fila de aprovação** antes de entregar, publicar ou gastar.
3. Toda aprovação ou recusa do Carlo é registrada no **placar** da meta (abaixo). Toda recusa vira regra escrita no `JOB.json` (`recusas_viram_regra`).
4. A meta só sobe de nível quando o placar mostra **10 aprovações seguidas sem correção** E o juiz concordou com o Carlo em **pelo menos 90% dos últimos 20 casos**. Quem sobe o nível é o Carlo, nunca a IA.
5. Um erro grave (peça com cor errada entregue, promessa falsa, gasto acima do teto) **desce** a meta um nível na hora.
6. Exceções vão para o "Decidir hoje" do painel, com motivo e ação sugerida. Nenhum outro canal.
7. Nunca sozinho, em nenhum nível: rosto de pessoa real fora de folha aprovada, gastar verba de mídia, primeira mensagem para cliente novo, preço ou disponibilidade fora da tabela.

## Meta de negócio (só o Carlo define)
Até 15/12/2026: 5 vendas no Studio, 1 pousada com 30 dias de Vera e relatório de margem recuperada, Piloto 0 publicado.

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

### S3 · 25 amostras prontas toda segunda às 8 h
- **Nível atual:** 1 · **Envio sempre manual.**
- **Feito quando:** 25 amostras aprovadas pelo Guardião, com mensagem rascunhada, na fila de envio.
- **Placar:** aprovações seguidas: 0 · concordância do juiz: —

### V1, V2, V3 (SOL)
Nível 0 até a pousada piloto entrar no ar. Texto completo em `ORQUESTRADOR.md`.
