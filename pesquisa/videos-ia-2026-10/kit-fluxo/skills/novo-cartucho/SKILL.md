---
name: novo-cartucho
description: Cria o cartucho de qualquer setor que dependa de imagem (saúde, beleza, alimentação, bebida, tecnologia, imóveis, serviços locais, produtos em geral…) preenchendo o modelo com pesquisa e fontes — o que é sagrado na imagem, o que não se pode dizer, de onde vêm as dores, a métrica de dinheiro e os testes. Use quando Carlo for atender um setor novo ou quando um cliente chegar de um setor que ainda não tem cartucho.
---

# Novo cartucho (a máquina entra em qualquer setor)

## Entrada
O nome do setor e, se houver, o primeiro cliente.

## Passos
1. Copie `HQ/modelos/cartucho/` para `HQ/cartuchos/<setor>/`.
2. **Pesquise** (com fontes e data em cada número) e preencha as seções 1 a 6 do `CARTUCHO.md`:
   - **Setor em uma tela:** onde a imagem decide a compra, ticket, datas, intermediários.
   - **O que é sagrado:** o que nunca pode sair diferente do real na imagem (produto, cor, texto, forma, lugar, pessoa, resultado). Para cada item, **como conferir** — de preferência com ferramenta que devolve número.
   - **O que não se pode dizer nem mostrar:** regras do conselho ou órgão do setor, CONAR, CDC, LGPD (dados sensíveis, se houver), regras das plataformas.
   - **Fontes de dores reais:** onde os clientes desse setor falam (avaliações, comentários, reclamações, perguntas).
   - **Métrica de dinheiro:** para criativo (o que o Analista lê) e para conversa (a fórmula de R$ recuperados).
   - **Ataques típicos:** 5 a 10 casos que a máquina precisa acertar sempre.
3. Transforme os ataques típicos em arquivos de teste (`testes/CASOS.md`, mesmo formato das skills: **Entrada**, **Deve**, **Reprova se**).
4. Marque **[fraco]** todo número de fonte única ou de fornecedor.
   Saúde, estética e suplementos: **proibido** gerar resultado, corpo ou pele de "antes e depois" (CFM 2.336/2023, ANVISA); revisão jurídica antes do sim.
5. Entregue a Carlo um resumo de 10 linhas: o que é sagrado, o que é proibido, a métrica, os 3 maiores riscos. **O cartucho só é usado com cliente depois do sim do Carlo** (setor com dado sensível ou regra de conselho pede revisão antes).

## Regra de ouro
O núcleo da máquina (fluxo A–Z, skills, metas, placar, ciclo de melhoria) **não muda** por setor. Se algo parecer exigir mudança no núcleo, registre como proposta no "Decidir hoje" em vez de mudar.
