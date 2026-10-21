# CARTUCHO · [nome do setor]

> Um cartucho por setor. A máquina não conhece setor nenhum de antemão: tudo o que é específico mora aqui. Para criar um novo, use a skill `novo-cartucho`. Este arquivo cresce sozinho com o ciclo de melhoria (seção "Regras aprendidas").

## 1. O setor em uma tela
- **O que se vende e para quem:**
- **Onde a imagem decide a compra:** (anúncio, vitrine, cardápio, catálogo, perfil, portal, embalagem…)
- **Ticket, sazonalidade e datas fortes:**
- **Quem paga intermediário e quanto:**
- **Fontes:** (link e data de cada número)

## 2. O que é sagrado (fidelidade)
O que **nunca** pode sair diferente do real numa imagem ou vídeo gerado. Cada item tem como ser conferido:

| Item sagrado | Como conferir | Ferramenta |
|---|---|---|
| Cor do produto ou da marca | Mesma área, foto real × gerada | `delta_e.py` (ΔE < 2) |
| Texto (rótulo, logo, preço, placa) | Leitura de texto real × gerado | OCR (a criar) |
| Forma, proporção e medidas | Sobreposição com a foto ou a planta real | conferência visual + medida |
| Lugar ou pessoa real | Folha de lugar / folha de personagem | Guardião |
| [outros do setor] | | |

## 3. O que não se pode dizer nem mostrar
- **Regras do conselho ou órgão do setor** (se houver):
- **CONAR / CDC / LGPD** aplicados ao setor:
- **Regras das plataformas** onde o setor anuncia:
- **Lista negra de palavras e promessas:**

## 4. De onde vêm as dores reais dos clientes
(avaliações, comentários, reclamações, perguntas que chegam por mensagem, buscas)

## 5. A métrica de dinheiro
- **Studio (criativo → venda):** a métrica que o Analista lê.
- **Vera (conversa → receita):** a fórmula de "R$ recuperados".

## 6. Ataques típicos (testes do Destruidor e do Guardião)
Casos que a máquina precisa acertar sempre neste setor. Viram arquivos em `testes/`.

## 7. Regras aprendidas (preenchido pelo ciclo de melhoria)
| Data | Regra | Veio de | Clientes | Status |
|---|---|---|---|---|
