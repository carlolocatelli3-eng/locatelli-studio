# A anatomia da ambição aplicada ao Organismo

**Data:** 21/10/2026 · a partir da imagem "A Anatomia da Ambição" enviada pelo Carlo. A base é o artigo do Felix Rieseberg (vídeo 6), "How to be more ambitious: a tutorial for humans with models".

São 4 eixos. **Velocidade** é o 4º e já é o padrão em 2026, porque todo mundo faz mais rápido. O que diferencia é **como** se opera nos outros três:

| Eixo | O que é | Onde estava fraco no sistema | O que muda agora |
|---|---|---|---|
| **Altitude** | Pedir o resultado, não a tarefa | Pedidos etapa por etapa (esteira) | **Metas** com teste (`ORQUESTRADOR.md`) |
| **Profundidade** | Rigor de especialista, com ferramenta de verdade, não jargão | O Guardião e o Analista julgavam "no olho" | **Duas ferramentas numéricas** (abaixo) |
| **Abrangência** | Várias disciplinas ao mesmo tempo | Cada skill olha só a própria etapa | **Conselho de 6 lentes** antes do Portão 1 e no Guardião |

---

## 1. Altitude: subir um nível acima da meta

O `ORQUESTRADOR.md` já troca tarefas por metas de operação (S1–S3, V1–V3). Um nível acima ficam as **metas de negócio**, as que só você define e que puxam todas as outras:

| Nível | Exemplo | Quem define |
|---|---|---|
| Tarefa | "Faça 5 vídeos de gancho" | (esteira; evitar) |
| Meta de operação | "Sempre 3 ganchos vencedores rodando em cada cliente" | Carlo, uma vez |
| **Meta de negócio** | "5 clientes pagando no Studio e 1 pousada com relatório de R$ até 15/12" | Carlo |

Com a meta de negócio escrita, a IA consegue dizer **qual meta de operação está atrasando o resultado**. Por exemplo: "faltam amostras: a S3 entregou 12 de 25 nesta semana". O "Decidir hoje" passa a mostrar a distância até a meta, não uma lista de tarefas.

**Meta sugerida para escrever no `METAS.md`:** "Até 15/12: 5 vendas no Studio (Black Friday, Teste de Ganchos ou Catálogo), 1 pousada com 30 dias de Vera e relatório de margem recuperada, e o Piloto 0 publicado."

---

## 2. Profundidade: ferramentas de verdade, não só opinião

O artigo diz: em tarefa importante, **nunca deixe o modelo julgar o próprio trabalho**. O ideal é uma ferramenta que o modelo chama e que devolve um número. Por isso o kit ganhou duas, testadas em `kit-fluxo/ferramentas/`.

### `delta_e.py`: o Guardião mede a cor da peça
- Compara a mesma área do tecido na foto real e na imagem gerada, pela fórmula de diferença de cor usada na indústria (ΔE2000, conferida contra os valores de referência da norma).
- Veredito:
  - **ΔE < 2:** igual a olho nu → aprovado.
  - **2 a 5:** ajustar.
  - **acima de 5:** reprovado.
- Uso: `python3 delta_e.py peca-real.jpg gerada.jpg --ref-box 420,610,120,120 --gen-box 380,700,120,120`
- **Por que importa:** "a cor da peça mudou" deixa de ser opinião e vira número que vai no relatório para o cliente. É a prova da "peça sagrada" que você vende.

### `vencedor.py`: o Analista não declara vencedor por sorte
- Calcula a chance de um gancho ser melhor que o controle e o ganho provável, com faixa de incerteza.
- **Só declara vencedor com chance de pelo menos 95% e pelo menos 30 eventos em cada lado.** Abaixo disso, o veredito é "cedo demais".
- Exemplo real da ferramenta:

  | Controle | Variante | Resultado |
  |---|---|---|
  | 120 cliques em 10.000 | 165 em 10.000 | **Vencedor**: 99,6% de chance, ganho de +37% (entre +13% e +67%) |
  | 10 em 800 | 18 em 800 | **Cedo demais**: parece +75%, mas a faixa vai de −5% a +234% |

- **Por que importa:** a taxa por vencedor (Ideia 5) só é justa se "vencedor" for um número que o cliente não contesta.

### Mais três ferramentas para a próxima rodada
1. **Leitura de texto (OCR) em etiqueta e estampa com letras.** Compara o texto da peça real com o da gerada; letra trocada reprova. É o que o VTBench usa.
2. **Escala da estampa.** Mede o tamanho do motivo, em pixels por centímetro, na foto real e na gerada.
3. **Vera, tempo e origem.** Mede a mediana do tempo de resposta e a porcentagem de reservas com código de origem, direto dos registros.

---

## 3. Abrangência: o conselho de 6 lentes

Antes do Portão 1 (na etapa F, "destruir a ideia") e no Guardião, a mesma peça é lida por 6 lentes ao mesmo tempo. Cada uma devolve no máximo 2 problemas e 1 correção:

| Lente | Pergunta | De onde vem o critério |
|---|---|---|
| **Diretor de arte** | Isto tem gosto e é difícil de copiar? | Perfil de Gosto, as 10 ideias descartadas |
| **Comprador de mídia** | Para o polegar em 1 s? Funciona sem som? Cabe no formato? | Analista de Ganchos, Receita |
| **Cliente final** | Responde a uma dor real, nas palavras dela? | Pesquisador de Dores |
| **Jurídico** | CONAR (rótulo de IA, influenciador virtual), CDC (o que é mostrado vincula), LGPD (rosto e dados), contrato de imagem | Cartucho do setor, Ativos |
| **Plataforma** | O Meta vai rotular? Vai reprovar? Booking e Airbnb aceitam? | Regras de cada plataforma |
| **Financeiro** | Cabe no teto? Quantas gerações de 1080p? Qual a margem? | `JOB.json`, custos |

**Como roda:** são 6 sub-agentes em paralelo, cada um com só a sua lente (quem gera não julga). A soma vai para Carlo **em uma tela**: o que bloqueia, o que ajustar e o que está bom.

**Para a SOL**, a lente "comprador de mídia" vira **"hóspede"** (dá vontade de reservar? a informação está certa?) e a lente "plataforma" inclui as regras de OTA.

---

## 4. Velocidade, o 4º eixo
Fazer mais rápido não diferencia ninguém em 2026. Neste sistema, a velocidade vem como consequência:
- das metas (altitude), que eliminam o vai e vem;
- das ferramentas (profundidade), que eliminam a discussão;
- das lentes em paralelo (abrangência), que eliminam o retrabalho no fim.

---

## O que mudou no kit
- `ferramentas/delta_e.py` e `ferramentas/vencedor.py`, testados.
- `skills/pitch-e-roteiro`: a etapa F passa a usar o conselho de 6 lentes.
- `skills/folha-de-produto-e-lugar` e o Guardião: rodar o `delta_e.py` nas áreas de cor de toda peça gerada.
- `ORQUESTRADOR.md`: a meta de negócio fica acima das metas de operação.
