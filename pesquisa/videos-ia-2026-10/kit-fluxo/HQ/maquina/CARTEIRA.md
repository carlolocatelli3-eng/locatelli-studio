# Carteira: grátis antes do pago

**Regra da máquina:** toda geração usa primeiro o que o Carlo já tem de graça ou já pagou. O crédito pago só entra quando o grátis não serve (qualidade, prazo, termos comerciais ou automação).

## O que o Carlo tem (informado por ele em 21/10/2026; conferir se mudar)
| Recurso | O que dá | Renova | Automação |
|---|---|---|---|
| **Google Flow** | Imagens **Nano Banana sem gastar crédito** + **50 créditos por dia** (gastam em vídeo Veo e upscale) | Todo dia, sem acumular | **Manual** (sem API) |
| **Google Gemini (plano)** | **2 vídeos por dia de 10 s** | Todo dia | **Manual** (no app) |
| Magnific (plano pago) | Créditos do plano; conecta ao Claude por MCP | Mensal | Automatizável (MCP) |
| Higgsfield (se assinar) | Seedance, Kling, Nano Banana; MCP para o Claude | Mensal | Automatizável (MCP) |
| APIs (Google em lote, Kie.ai, fal.ai) | Por uso | — | Automatizável |
| **HyperFrames** (no computador) | Montagem em HTML → MP4: legendas, cards, preço, versões de gancho, formatos | Ilimitado (render local) | Automatizável (o Claude escreve e renderiza) |

## Ordem de uso por etapa
| Etapa | 1º (grátis) | 2º (pago, se precisar) |
|---|---|---|
| Exploração, moodboard, testes de gosto | Flow · Nano Banana | — |
| Amostras de prospecção (S3) | Flow · Nano Banana | — |
| Ângulos, fichas de produto e lugar, ensaio com pessoa **gerada** | Flow · Nano Banana | Magnific/Higgsfield (Pro em 4K, lote automático) |
| Qualquer coisa com **rosto ou voz de pessoa real** | — (nunca Flow/Gemini pessoal) | Só ferramenta com "biometria = sim" em `FORNECEDORES.md` |
| Quadros do storyboard (prancha) | Flow · Nano Banana | — |
| Blockout e testes de movimento | **Gemini · 2 vídeos/dia** | Seedance 480p |
| Rascunhos 480p do filme | Gemini (planos simples) + Flow (créditos do dia) | Seedance 480p (planos com pessoa, produto ou fala) |
| Final 1080p (depois do Portão 3) | — | Seedance/Kling/MiniMax pelo hub |
| Montagem, legendas, versões de gancho, formatos, vitrine por peça, thumbs | **HyperFrames (render local)** | — |
| Conteúdo próprio (Piloto 0, Diário do Organismo) | Gemini + Flow | — |

**Conta de um dia típico:**
- **Imagens:** de graça no Flow, dentro do limite diário.
- **Vídeos:** 2 vídeos de 10 s no Gemini.
- **Créditos do Flow:** 50 para vídeo ou upscale.

Isso cobre o Piloto 0, as amostras e os testes de movimento **sem gastar nada além dos planos**.

## Como a máquina usa o que é manual (Flow e Gemini não têm API)
1. O motor ou a skill escreve no projeto um arquivo **`FILA-GOOGLE.md`**, com os prompts prontos, as imagens de referência a anexar (caminho de cada arquivo), a ferramenta (Flow ou Gemini) e a configuração.
2. Carlo (ou o Claude no Chrome, no computador dele) roda a fila. São 5 a 10 minutos por dia, e os resultados vão para a subpasta da etapa.
3. O Guardião confere como qualquer outra geração.
4. Itens da fila não gastam teto do `JOB.json`; ficam registrados como `custo: 0 (plano)`.

Se a fila do dia passar dos limites (imagens, 50 créditos, 2 vídeos), o excedente fica para o dia seguinte ou sobe para o pago. **A decisão é do Carlo.**

## Atenção para entrega a cliente
- **Trava:** o Portão 4 não aprova peça final que veio de ferramenta sem "uso comercial = sim" em `HQ/maquina/FORNECEDORES.md`.
- **Créditos da Black Friday:** decidir até 11/11 se compra pacote anual/grande de Magnific ou hub (decisão do Carlo, ver `HQ/DECISOES-ABERTAS.md`).
- **Termos comerciais:** os termos do Flow e do app Gemini para uso comercial não dão garantia explícita (pesquisa de 19/10). Para trabalho interno, amostra e portfólio: livre. Para **entrega final a cliente premium** (Campanha Híbrida, Licença de Modelo): ler os termos atuais ou passar o final por uma API com termos comerciais claros.
- **Marca e rótulo:** toda imagem do Google leva SynthID e C2PA. Isso conversa com o rótulo de IA do Meta (teste da Ideia 4).
