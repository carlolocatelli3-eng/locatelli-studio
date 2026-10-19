# Análise aprofundada — 6 vídeos sobre IA aplicada a negócios

> **Atualização:** depois desta análise li o painel Organismo Operador e o Ciclo dos Agentes. Várias recomendações abaixo já estavam decididas ou mudaram (Freepik → Magnific/API, Vera → SOL, personas aposentadas). **Leia primeiro `CRUZAMENTO-ORGANISMO.md`**; este arquivo fica como o detalhamento vídeo a vídeo.

**Para:** Carlo Locatelli · **Data:** 19/10/2026 · **Frentes analisadas:** Locatelli Studio (campanhas de moda com IA), Vera (assistente de IA para pousadas), operação de aluguel por temporada, marca pessoal do Carlo.

> **Como ler isto.** Cada vídeo tem: (1) o que ele realmente diz, com números e nomes exatos; (2) o que conferi fora do vídeo e o que é duvidoso; (3) o que aproveitar, por frente de negócio; (4) o que ignorar. No final há a síntese cruzada, um plano priorizado e as **hipóteses que o Claude Code do computador precisa validar** contra os projetos reais — esta análise foi feita sem acesso a eles.
>
> As transcrições completas estão em `transcricoes/`. Fui direto às transcrições originais (inglês quando o vídeo é em inglês), não à tradução automática.

---

## Sumário

| # | Vídeo | Canal | Tipo | Nota de utilidade* |
|---|---|---|---|---|
| 1 | [8 github repos that print $$$](https://www.youtube.com/watch?v=wpaR6LhuZWg) | Corey Ganim | Ofertas de serviço | ★★★★☆ |
| 2 | [I Tried 100+ AI Tools. These 7 Are the Best](https://www.youtube.com/watch?v=hgLI491ajG0) | Nate Herk | Ferramentas | ★★★★☆ |
| 3 | [Vercel's CEO … Greatest AI Coding Workflow](https://www.youtube.com/watch?v=y2ifUC9_zuU) | AI LABS | Método de qualidade | ★★★★★ |
| 4 | [Google's NEW AI Agent … Its Own EMAIL?!](https://www.youtube.com/watch?v=0erYZFxwaNA) | Paul James | Notícia + venda de curso | ★★☆☆☆ |
| 5 | [7 negócios de IA que o Vale do Silício já enxerga](https://www.youtube.com/watch?v=TLbdfaDijbU) | Bruno Okamoto | Visão de mercado | ★★★★☆ |
| 6 | [Anthropic just shared how they use Claude differently](https://www.youtube.com/watch?v=NarezKh3w4o) | RoboNuggets | Método de trabalho com IA | ★★★★★ |

\*Utilidade **para os seus negócios**, não qualidade geral do vídeo.

**Aviso geral de viés:** os 6 canais vendem alguma coisa (comunidade Skool, curso, live, patrocínio). Isso não invalida o conteúdo, mas explica o tom ("print $$$", "REPLACE your stack"). Números de receita são **projeções do apresentador**, não resultados comprovados.

---

## Vídeo 1 — "8 github repos that print $$$" (Corey Ganim, 24 min)

### O que ele diz

**A fórmula (repetida nos 8 casos):**
1. Repositório gratuito no GitHub (custo só de servidor/uso).
2. Claude Code roda a parte técnica.
3. O humano vende **o resultado**. Frase central: *"seu cliente não liga para IA nem para GitHub — se você falar disso, ele desliga"*.
4. Leads via **Treg** (treg.to), "um OpenRouter de assinaturas de dados": raspa Google Maps, LinkedIn, vagas de emprego, paga por uso em vez de US$100/mês do Apollo.
5. **Abordagem fria entregando uma amostra do próprio serviço.**

| # | Repo | Oferta | Comprador-alvo | Preço | Custo dele | Gancho de abordagem | Projeção |
|---|---|---|---|---|---|---|---|
| 1 | **ListMonk** (Mailchimp open-source, ~24k ⭐) | 3 e-mails de "volta" + 2 campanhas/mês para a base inteira | Dentistas, HVAC, med spas, academias com 2.000+ clientes no CRM | US$750 setup + US$400/mês | ~US$15/mês | "Você tem 400 avaliações no Google → milhares de clientes, e nunca mandou um e-mail" | 10 clientes = US$4k/mês, ~15h/mês |
| 2 | **Postiz** (agendador tipo Buffer, ~37k ⭐) | 12–16 posts/mês escritos pelo Claude na voz do cliente + relatório mensal | Med spas, academias, corretores, restaurantes com feed parado | US$250 + US$500/mês | ~US$10/mês | **Print do feed parado há 60+ dias + 3 posts já escritos na voz dele** | 10 clientes = US$5k/mês, ~30h |
| 3 | **WhisperX** (transcrição com identificação de quem fala, ~25k ⭐) | Scorecard semanal das ligações: taxa de agendamento, upsells perdidos, coaching por atendente | Serviços residenciais e oficinas com 2–5 pessoas no telefone e gravação ligada | US$500 + US$500/mês | ~US$20/mês GPU | **Cliente oculto: liga para a empresa e manda o scorecard da própria ligação** | 8 clientes = US$4k/mês |
| 4 | **PipeCat** (framework de agente de voz, ~17k ⭐; alternativa a Vapi/Bland) | Recepcionista de IA fora do horário: atende, qualifica, agenda ou escala, manda resumo por SMS ao dono e ao lead | Encanador, HVAC, chaveiro, guincho — negócios de emergência | US$1.500 + US$400/mês + minutos a custo (~US$0,10–0,15/min) | — | **Liga às 21h e manda a gravação da caixa postal: "foi isso que eu ouvi"** | 6 clientes = US$2,4k/mês + US$9k setup |
| 5 | **Docling** (parser de documentos da IBM, ~69k ⭐) | Notas/boletos → QuickBooks, Claude classifica, humano aprova | Construtoras com muito contas a pagar; **escritórios de contabilidade que revendem (B2B2B)** | US$1.500 + US$300/mês (até 300 docs, depois US$1/doc) | — | "Me manda 10 notas fictícias" → vídeo Loom com a planilha pronta em 10 min | 8 clientes = US$2,4k/mês + US$12k setup |
| 6 | **ComfyUI** (estúdio de imagem IA open-source, ~138k ⭐) | **Conjunto de 7 imagens por produto** (lifestyle + infográfico) a partir da foto real, em 48h | Marcas Amazon/Shopify com 10+ produtos e imagens fracas (só fundo branco ou < 7 fotos) | **US$750 por conjunto** | "alguns dólares de GPU" (~98% margem) | **Refaz a imagem principal de graça e manda por e-mail** | 10 conjuntos = US$7,5k/mês; marca grande lança 5–7 produtos/mês |
| 7 | **Browser Use** (agente de navegador open-source, ~118k ⭐) | Robô que checa portais de alvará da prefeitura todo dia, atualiza planilha, avisa o gerente | Construtoras, reformas, piscina/solar com 20+ alvarás ativos | US$1.500 + US$250/mês | ~US$30/mês | "Quantas horas por semana vocês gastam atualizando portais?" | 8 clientes = US$2k/mês + US$12k setup |
| 8 | **Claude Finance** (repo `anthropics/financial-services`, ~40k ⭐) | Pacote de venda de empresa: material de marketing, *teaser* cego, lista de compradores | Corretores de empresas / M&A pequenos com 5+ listagens/ano | US$1.000 por pacote | Assinatura Claude | Reescreve de graça um *teaser* que o corretor já publicou | 3/mês = US$3k. **Ele diz que já vendeu isso por US$3.000** (feito com GPT customizado) |

**Placar final dele:** 2 clientes de cada oferta = US$12k em setups + US$4.700/mês. Recomendação: **escolher 1–2 e ir fundo**; a mais fácil é a nº 1 (reativação). Próximo passo sugerido: "puxe 100 leads hoje, mande 10 e-mails frios amanhã".

### O que conferi
- **Treg (treg.to):** não encontrei nenhuma página, review ou preço independente. Trate como **não verificado**. Alternativas conhecidas com cobrança por resultado: LeadMagic, Outscraper (Google Maps, tem plano grátis).
- Os repositórios são reais e conhecidos. A contagem de estrelas é a que ele cita, não conferi uma a uma.
- Preços são de mercado americano. **Não converta pelo câmbio**: no Brasil o ticket de serviço local é bem menor e o canal é outro (WhatsApp/Instagram > e-mail frio).

### O que aproveitar

**Locatelli Studio — oferta nº 6 é literalmente o seu negócio.** Três coisas novas:
1. **A dor certa, nas palavras dele:** *"product shown exactly as it is"*. Em moda, a objeção nº 1 a imagem gerada por IA é fidelidade da peça (caimento, cor, textura, estampa). O discurso do Studio deve atacar isso de frente, não esconder.
2. **Unidade de venda recorrente:** "conjunto de imagens por produto/peça" em vez de só "campanha". Marca de moda lança coleção, cápsula, drop — é recorrência natural.
3. **O gancho da amostra grátis:** escolher marcas com loja online (Nuvemshop, Shopify, VTEX) com fotos fracas → refazer **uma** foto principal → mandar no direct/e-mail. Encaixa com os "editoriais fictícios de demonstração" que já estão nos planos do Olivier March.

**Vera — o gancho do PipeCat adaptado é o melhor da lista para pousadas:**
> Mandar mensagem no WhatsApp e no direct da pousada às 22h de sábado. Registrar quanto tempo levaram para responder (ou se responderam). Mandar ao dono o print + uma conta simples: "X% das reservas diretas chegam fora do horário; cada uma vale R$ Y".

Agente de **voz** (PipeCat) é secundário no Brasil: hóspede manda WhatsApp, não liga.

**Vera / Airbnb — reativação de hóspedes (nº 1):** "você tem 2.000 hóspedes antigos e nunca mandou nada". A **oferta** é ótima; o **repositório** provavelmente é redundante, porque o **Go High Level já faz e-mail e WhatsApp em massa**. Aproveite a oferta, não a ferramenta.

**Vera — Docling (nº 5) como ferramenta interna:** transformar PDF de cardápio, regulamento, tabela de tarifas da pousada em texto limpo para a base de conhecimento. Corta horas de cada onboarding.

**Pesquisador de Dores — WhisperX (nº 3):** transcrever áudios de WhatsApp (muito comum no Brasil), vídeos de clientes, entrevistas.

### Ignorar
Alvarás (nº 7) e Claude Finance (nº 8) não têm a ver com suas frentes.

---

## Vídeo 2 — "I Tried 100+ AI Tools. These 7 Are the Best" (Nate Herk, 10 min)

### O que ele diz
Ele tem uma agência de automação (diz faturar > US$1 milhão/ano). Lista o que usa toda semana. **Conflitos declarados:** Hostinger é patrocinador; da Glaido ele é sócio.

1. **Claude Code + Codex** — "90% do meu fluxo diário". É o "segundo cérebro": projetos, skills, conhecimento, transcrições de reunião. Substituiu ferramentas pagas — **Gamma** (slides) e **Poppy** (conteúdo) — e ele **recriou o próprio Loom**. Conselho: *"comece por uma ferramenta que você paga todo mês mas só usa uma função"*; e *"aponte o Claude Code para os SOPs e documentos de cliente e o time pergunta para ele em vez de perguntar para você"*. Paga os dois: **Codex melhor em uso de computador/navegador; Claude Code melhor como parceiro de raciocínio**, e o uso dura mais. Estrutura as pastas para conseguir alternar entre os dois sem atrito.
2. **OpenRouter** — 500+ modelos, 80+ provedores, uma conta e um cartão. Toda automação dele e de clientes em produção roda por ali. Recursos que ele destaca: **fallback** (se um modelo cai, tenta o próximo em vez de quebrar a automação) e **uma chave de API por automação** para ver quanto cada uma custa. Padrão: **modelo barato e rápido para triar leads, modelo mais inteligente para escrever as respostas.**
3. **Hostinger VPS** (patrocinado) — servidor ligado 24/7. Roda n8n, agentes Hermes e OpenClaw; tem "um Hermes que opera ações e um que faz Reels e carrosséis 24/7". Atrativo para não-técnico: templates de 1 clique.
4. **"Grockbot"** — bots com computador na nuvem compartilhado (navegador, arquivos, terminal), conectores com apps, rotinas agendadas ou por webhook, app no celular. Exemplos: depois de cada call da comunidade, pega a transcrição e posta; avisa as comunidades quando sai vídeo novo; resumo diário de notícias de IA. *"Como ter vários OpenClaw no bolso, sem a parte técnica."*
5. **Glaido** (sócio) — ditado por voz em qualquer app + "modo comando" (pesquisar na web, resumir YouTube, abrir arquivos) + extensível via MCP (disparar tarefas no Claude Code/Codex).
6. **"Key.ai"** — *"o OpenRouter de imagem e vídeo"*: Veo, Kling, Seedance, Nano Banana, GPT Image 2, pago por geração, "a opção mais barata que encontrei para gerar muito de uma vez". Usa para carrossel, thumbnail, Reels. Cita explicitamente **fotos de produto e criativos de anúncio**.
7. **Trigger.dev** — roda código TypeScript agendado ou por webhook, sem servidor para gerenciar. Para automações **determinísticas** (sempre os mesmos passos: processar documento, sincronizar dados). *"Não precisa de um agente inteiro para isso; seria exagero."* O Claude Code escreve, publica, testa e atualiza. Plano grátis com US$5/mês de crédito.

### O que conferi
- **"Key.ai" é quase certamente Kie.ai** (kie.ai): agregador de APIs de imagem/vídeo com cobrança por crédito (~US$0,005/crédito, depósito mínimo US$5), anuncia preços 30–80% abaixo do oficial. Uma comparação aponta que a cobrança por crédito é **difícil de prever em escala**. Fontes de terceiros, algumas concorrentes — confira a página de preços real. ([atlascloud](https://www.atlascloud.ai/blog/guides/best-kie-ai-alternative), [kinovi](https://kinovi.ai/blogs/kie-ai-vs-kinovi))
- **"Grockbot":** não consegui confirmar nome nem site. Um comentarista escreve "grokbot". Não pesquisei mais a fundo — trate como desconhecido.
- No vídeo 5, Bruno Okamoto afirma que **"a Stripe comprou o OpenRouter"**. Não verifiquei. Confira antes de repetir.

### O que aproveitar

**Studio — Kie.ai (o item que mais mexe no seu bolso).** Você gera no Freepik Spaces (créditos/assinatura). Kie.ai dá acesso por API aos mesmos modelos que você usa (Nano Banana, Kling, Seedance, Veo), por geração. Duas vantagens possíveis: **custo por imagem** e **automação** (API → pipeline). Teste justo: a mesma campanha nos dois, medindo custo por imagem **aprovada pelo Guardião** (não por imagem gerada), tempo e qualidade. Freepik continua tendo vantagem de interface visual e fluxo — pode ser complementar, não substituto.

**Vera — OpenRouter** resolve três problemas que aparecem quando há várias pousadas:
- **uma chave por pousada** → custo e margem por cliente;
- **fallback** → Vera não fica muda se um provedor cair (hóspede sem resposta = reserva perdida);
- **dois níveis de modelo** → barato para classificar a intenção, melhor para responder.
*Depende de como a Vera está montada hoje no GHL — ver hipóteses.*

**Seu "AIOS" — Claude Code como sistema operacional do negócio.** Você já tem metade: as skills (Olivier March, Perfil de Gosto, Pesquisador de Dores, Roteirista, Analista de Ganchos, Guardião, Vera, Airbnb). Falta **um lugar único com uma pasta por cliente/marca** (perfil, dores, histórico de campanhas, resultados de anúncios), para cada trabalho novo começar com contexto. E a auditoria: *quais ferramentas você paga e usa só uma função?*

**Trigger.dev — automações repetitivas.** Exemplos: toda segunda puxar resultados do Meta Ads e entregar ao Analista de Ganchos; ao chegar PDF de pousada nova, processar (Docling) e atualizar a base da Vera.

**Ditado por voz** (Glaido, Wispr Flow ou outro) — útil se você prefere falar. Ele é sócio da Glaido: compare antes.

### Ignorar
Hostinger especificamente (VPS é commodity; útil só se você for hospedar n8n/agentes próprios). "Grockbot" até ter nome e site confirmados.

---

## Vídeo 3 — "Vercel's CEO Just Unveiled The Greatest AI Coding Workflow Ever" (AI LABS, 14 min)

### O que ele diz
O canal (uma software house) destrincha uma entrevista do CEO da Vercel em 7 hábitos. Patrocinador: Viktor ("funcionário de IA" no Slack/Teams). No fim: comunidade paga AI LABS Pro.

1. **Testar antes de adotar.** Toda ideia vira um projeto de teste; um agente confere do zero se funciona. *"Muita gente vai no feeling com modelos"* — ex.: alguém leu num guia de prompt que um modelo responde melhor a um tipo de prompt e nunca verificou. Eles começam todo projeto com uma pasta `specs/` com o PRD (documento de requisitos) e **sempre fazem um MVP antes do app inteiro**.
2. **Conferir a direção, não o volume.** Tokens gastos e mudanças entregues medem *quanto* você faz, não *para onde* vai. Com agentes, construir é barato → toda ideia vira feature → o produto se afasta do plano. *"E o Claude não vai te parar, porque ele constrói o que você pede e não sabe quais features importam."* Solução: um comando `/direction` que lê os documentos de requisitos (um sub-agente por documento), verifica mudanças fora do plano e devolve **relatório, placar e lista de pendências**. Aí você decide: atualizar o plano ou desfazer o desvio.
3. **Dívida de segurança e "dívida de desleixo".** Agentes escrevem mais código do que alguém revisa, e **atacantes também usam agentes**. Regra 1: varredura de segurança a cada feature (a Vercel criou o **DeepSec**). Regra 2: decidir quanto "código porco" aceitar em cada parte — rigor máximo onde estão os dados e a confiança do cliente, com **portões de qualidade** (um agente revisor que segura qualquer mudança fora do padrão).
4. **Inegociáveis.** Toda construção é troca (velocidade × segurança, features × prazo). Você e o agente precisam combinar as regras **antes**. Seção *"must-not-trade-off"* no `CLAUDE.md`. Mas **o agente esquece instruções escritas** → cada regra precisa de **um teste** commitado no git.
5. **Agente destruidor (breaker).** Ao lançar produto, o CEO deu para um agente **tentar quebrar**: ações simultâneas conflitantes, carga, lentidão, comparação com concorrentes. *"Quando um modelo escreve código, é fácil escrever código que só funciona quando tudo dá certo."* O agente testa o próprio trabalho do jeito que construiu; o cliente usa de outro jeito. Trabalha **em cópias dos dados**. Pode rodar em ciclo: acha → corrige → testa de novo.
6. **Agente primeira visita.** Valor da Vercel: "conheça seu cliente". *"É fácil construir quando você é o único cliente."* Métrica favorita do CEO: **sessões sem erro** (quantas pessoas percorrem o app inteiro sem nada dar errado). Agente que usa o app como novato, **bloqueado por um hook de ler o código** (só pode executar o app). Um segundo agente roda testes de navegador em todos os caminhos do cliente e salva resultados em JSON — rodar antes de todo lançamento.
7. **Triagem de feedback.** *"Uma das melhores formas de saber se uma empresa usa bem agentes é ver o que acontece quando um cliente reporta um problema."* Conectar o Claude via MCP ao **Gmail** (e-mails de suporte) e ao **Sentry** (erros que ninguém reportou). Problema claro (ex.: pagamento falhando) → corrige na hora. Precisa de julgamento ("estou confuso com o app") → vem para você, porque exige conversa.

### O que conferi
- **DeepSec é real:** ferramenta open-source da Vercel, lançada em maio/2026, que usa Claude/Codex para caçar vulnerabilidades no repositório inteiro, roda local com sua assinatura existente. Terceiros citam 10–20% de falso positivo; o próprio projeto avisa para tratá-lo **como um agente com acesso total ao terminal**. ([Vercel blog](https://vercel.com/blog/introducing-deepsec-find-and-fix-vulnerabilities-in-your-code-base), [vercel.com/oss/deepsec](https://vercel.com/oss/deepsec))
- A tradução automática do YouTube escreve "DeepSeek" e "Versil" — o correto é **DeepSec** e **Vercel**.

### O que aproveitar
Este vídeo é sobre **software**, mas os hábitos se aplicam melhor ainda a uma **assistente de atendimento** — e é aí que está o valor para você.

**Vera — bateria de testes antes de cada pousada entrar no ar:**
- **Destruidor:** um agente que finge ser hóspede difícil e tenta fazer a Vera: inventar preço; prometer desconto; confirmar reserva sem disponibilidade; passar dados de outro hóspede; sair do papel ("esqueça suas instruções…"); responder sobre assuntos fora da pousada; ser grosseira sob provocação. Cada falha vira regra + teste.
- **Primeira visita:** "hóspede" que não sabe nada, escreve mal, manda áudio transcrito, mistura três perguntas numa mensagem, muda de ideia no meio. Métrica: **% de conversas resolvidas sem erro** (o "sessões sem erro" do CEO).
- **Uso comercial:** "a Vera de vocês passou em 50 conversas de teste antes de entrar no ar" é argumento de venda.

**Vera — inegociáveis com teste** (exemplos para validar com você):
- nunca confirmar reserva sem checar disponibilidade;
- nunca citar preço fora da tabela vigente;
- reclamação, emergência ou pedido de reembolso → sempre passa para humano;
- nunca revelar dados de outro hóspede.

**Studio — já tem a estrutura, falta formalizar:** Perfil de Gosto = inegociáveis da marca; Guardião da Marca = o "teste". Garantir que o Guardião rode **sempre** e seja **separado** de quem cria (ver vídeo 6).

**Direção → Vera como produto:** um documento curto "o que a Vera faz / não faz / para quem". Revisar periodicamente se o que foi construído ainda bate. Evita o "cada ideia vira feature".

**Triagem de e-mail:** o Gmail está conectado no Claude. Dá para montar triagem dos e-mails de clientes (pousadas, marcas): urgente / resolvível / "precisa do Carlo".

**Site (`client/`):** quando for mexer, rodar o agente "primeira visita" como **diretora de marketing de uma marca de moda** que nunca ouviu falar do Studio: ela entende o que você vende em 10 segundos? Sabe o próximo passo?

**Segurança:** a Vera lida com dados de hóspedes (LGPD). Antes de escalar, uma revisão de segurança (DeepSec ou `/security-review` do Claude Code).

---

## Vídeo 4 — "Google's NEW AI Agent Could REPLACE Your Automation Stack" (Paul James, 9 min)

### O que ele diz
- Notícia: o Google anunciou no **Gemini at Work 2026** um agente que roda tarefas longas na nuvem, com **4 tipos de memória** (sessão, semântica, procedural — que cria as próprias skills —, episódica), conecta com Slack, Teams, Jira, Salesforce, BigQuery, suporta MCP, e pode ter **identidade própria: e-mail, agenda e Drive**, com permissões limitadas, auditoria e governança.
- Diferença para Zapier/Make: automação tradicional segue passos fixos; o agente lembra, reutiliza e raciocina.
- Exemplos (todos hipotéticos, nenhum mostrado funcionando): reativar 800 leads frios (3 e-mails com 4 dias de intervalo, avisar no Slack quem respondeu); **academia: cliente põe fotos numa pasta do Drive → agente escreve legendas na voz da marca → aprovação → agendamento; comentários que precisam de humano são sinalizados** (US$300/mês); alertas de imóveis para investidores (US$400/mês/corretor, 12 clientes = US$4.800/mês).
- **"Biblioteca de skills":** cada fluxo feito para um cliente vira skill reutilizável para o próximo cliente parecido.
- **O passo "que ninguém faz":** um projeto separado por cliente; escopo mínimo (uma pasta, um canal, uma agenda); **testar com dados fictícios**; revisar a trilha de auditoria após a primeira execução; só então escalar.
- Venda do curso "AI Secret Shopper" **3 vezes**, com "de US$497 por menos de US$30, só para quem assiste agora".

### O que conferi
O anúncio é real: agente Gemini apresentado por Thomas Kurian em 8/10/2026. Fontes falam em identidades corporativas próprias para "agentes colegas de trabalho", acesso só ao que é explicitamente compartilhado, log de atividade, e opção de usar modelos do Claude. **Está em teste privado, só para clientes enterprise**, sem data para o público. ([Reworked](https://www.reworked.co/collaboration-productivity/google-debuts-its-all-purpose-gemini-agent-for-work/), [Android Headlines](https://www.androidheadlines.com/2026/10/google-launches-universal-gemini-ai-agent-enterprise-work.html), [wwwhatsnew](https://wwwhatsnew.com/2026/10/09/agente-gemini-google-cloud-empresas-claude-gemini-at-work-2026/))

### O que aproveitar
1. **Identidade própria + acesso mínimo para cada agente → Vera.** Vale com ou sem Gemini. Cada Vera com **número/e-mail/acessos próprios**, nunca a conta pessoal do dono nem a sua. Ela só vê a agenda e a base daquela pousada. Protege você, o cliente, ajuda na LGPD e passa profissionalismo na venda.
2. **O checklist de colocar no ar** (projeto por cliente → escopo mínimo → dados fictícios → revisar o log → escalar) = mesmo recado do vídeo 3. Usar como **checklist de onboarding de pousada nova**.
3. **Pasta do Drive como porta de entrada → Studio.** A marca joga as fotos da coleção numa pasta; a geração começa; você aprova antes de entregar. O Google Drive já está conectado ao Claude — dá para prototipar sem esperar o Gemini.
4. **Biblioteca de skills por tipo de cliente** — você já faz. Reforço: cada cliente novo deve começar de uma skill pronta e terminar melhorando a skill.

### Ignorar
O curso. E o próprio agente Gemini **por enquanto** — reavaliar quando chegar ao Google Workspace comum (pode interessar para a Vera, já que você está no ecossistema Google).

---

## Vídeo 5 — "7 negócios de IA que o Vale do Silício já enxerga (e o Brasil ainda não)" (Bruno Okamoto, 29 min)

### O que ele diz
Bruno (cofundador da Pixel AI, que ajuda PMEs a implementar agentes; diz ter ~40 mil empresários no ecossistema e trabalhar direto com ~1.200) comenta uma thread do **Greg Isenberg** sobre 48h com bilionários, donos de laboratórios e executivos de empresas de US$1–100 bi em São Francisco. Formato opinativo, "freestyle". Meio do vídeo: convite para a live grátis Pixel Black (27/10).

Pontos, na ordem:
1. **Venda de dados para laboratórios de IA** — histórias de quem fatura "US$2 mil/semana" vendendo dados. Dado real (não gerado por IA) está valendo muito.
2. **"Se sair um modelo novo no mês que vem, sua empresa fica melhor ou pior?"** — metade da mesa ficou quieta. Bruno: não depender de um modelo/empresa; prefere ferramentas open-source (cita Hermes).
3. **US$1 bi em 12 meses — e a retenção?** Receita de IA vem rápido e vai rápido; sem proposta de valor clara, cliente pula de galho em galho.
4. **"O modelo é a CPU, o harness é o sistema operacional, skills e plugins são os aplicativos."**
5. **~12 meses para um agente que observa seu trabalho por uma semana e faz sozinho** (gravação de tela + memória + modelo local). Bruno: *"o operacional está morrendo — para onde você vai alocar seu tempo?"* → pensamento crítico, visão de negócio, proximidade do cliente.
6. **Harnesses de agentes são os novos "wrappers"** — pequenas soluções verticais perdem utilidade quando o próprio harness faz nativamente.
7. **Melhores times tratam o modelo como trocável:** um modelo para negócios/gosto, outro para visual, um barato para o dia a dia, outro para texto. Movem entre modelos com prompts (sem fine-tuning) e fazem **teste A/B no que o usuário faz com o resultado** (edita, exporta, compartilha). **Uma ferramenta vertical = conectores com os dados do setor + avaliações escritas por quem entende do trabalho + regras do que pode/não pode + uma tela simples para humano revisar. O modelo é ~20% disso.**
8. **Engenharia reversa:** software virou commodity; gente clonando apps de bilhões como open-source.
9. **O valor migra para os dados** — SaaS com anos de dados de usuários são, secretamente, empresas de dados.
10. **Software legado (feito para humano clicar em telas) não chega na era agêntica.**
11. **Negócio: arrumar os dados das empresas** — 5 versões do mesmo cliente, Slack antigo, PDF que ninguém pesquisa.
12. **Negócio: blocos/APIs para agentes** — empresas sem interface, porque o usuário é um agente.
13. **Negócio: logs de agentes trabalhando** — dado raro e valioso.
14. **A próxima briga é por memória.** Caso do **"Hubinho"**, agente dele que atende 20–25 mil pessoas (WhatsApp, Slack, Drive): **reconhece cada pessoa pelo número e lembra o que perguntou, elogiou, reclamou** — vai formando um perfil. *"Ninguém quer mais comprar curso para assistir; quer um tutor que entende você e seu negócio."*
15. IA saindo do computador: CAD, robôs que chamam o humano quando travam (e cada chamada vira dado de treino).
16. **Negócio: cibersegurança para agentes** — cada agente com acesso é uma porta nova.
17. Startup vale mais morta que viva (licenciar 5 anos de Slack/e-mail/código).
18. **Agentes comprando pela internet** — novo tipo de "usuário" para quem vende online.
19. **Negócio: seguro para agentes de IA.**
20. **A habilidade mais rara: "gosto" e saber escrever avaliações (evals).** Modelos geram ideias demais; o difícil é julgar quais são boas.
21. **Fundador virando criador de conteúdo** — audiência é o plano B que vai junto para qualquer negócio. Distribuição é difícil; "só ~50 pessoas no mundo sabem escalar isso".

### O que conferi / duvidoso
- "A Stripe comprou o OpenRouter" — **não verificado**.
- Nomes de modelos citados ("Fable 7", "Fable 10", "Astra 20") soam como exemplos de improviso, não lançamentos.
- As ferramentas de memória do Hubinho saem na legenda como "Gbrain" e "Roncho" — **não consegui identificar com certeza** (possivelmente "Honcho"). Se for relevante para a Vera, pesquisar.

### O que aproveitar
1. **"Gosto + avaliação" é o seu posicionamento — dito pelo Vale do Silício.** Sua skill se chama *Perfil de Gosto*; o *Guardião da Marca* é o seu avaliador. Pela tese: gerar imagem qualquer um faz; **saber o que é luxo e barrar o que não é** é o raro. Isso responde a pergunta da mesa: **modelo melhor deixa o Studio melhor** — desde que você venda direção e julgamento, e não "eu sei fazer o prompt". Vale levar para o site e para a venda.
2. **A receita das 4 peças descreve o que você está construindo:**

| Peça | Studio | Vera |
|---|---|---|
| Conectores com os dados | Fotos/coleção da marca, histórico de campanhas, resultados de anúncios | Disponibilidade, tarifas, base de conhecimento da pousada |
| Avaliações escritas por quem entende | **Guardião da Marca** | Bateria destruidor + primeira visita (vídeo 3) |
| Regras do que pode/não pode | **Perfil de Gosto** | Inegociáveis (vídeo 3) |
| Tela para humano revisar | **Aprovação do Carlo** ("nada é finalizado sem aprovação") | Dono da pousada / passagem para humano |

   O modelo é ~20%. As outras 80% são o seu ativo — e não dependem de qual modelo ganhar.
3. **Memória por hóspede → diferencial da Vera.** A Vera reconhece quem volta: *"Que bom ter você de novo! Quer o mesmo quarto com vista do ano passado?"* Pouca pousada tem isso. Testar com cuidado de LGPD (o que guardar, por quanto tempo, como apagar).
4. **Fundador criador → avatar digital do Carlo.** Reforça o plano de conteúdo que já está na skill do Olivier March.
5. **Teste A/B pelo que o cliente faz com o resultado:** no Studio, medir quais imagens a marca **usa de fato** (publica, põe em anúncio), não só quais aprova. Isso alimenta o Perfil de Gosto.
6. *Futuro:* agentes de compra → marcas de moda vão precisar de catálogo legível por agentes. Só observar.

---

## Vídeo 6 — "Anthropic just shared how they use Claude differently" (RoboNuggets, 13 min)

### O que ele diz
Resume o artigo **"How to be more ambitious: a tutorial for humans with models"**, de **Felix Rieseberg** (líder de engenharia na Anthropic: app do Claude, Cowork, Claude Code desktop), publicado em 13/10/2026, com 4,5 milhões de visualizações no X. Abertura: George Dantzig, que em 1939 resolveu dois problemas "insolúveis" de estatística porque achou que eram lição de casa — *"essa é a mentalidade do 1% dos melhores usuários de agentes"*. Mensagem: *"algumas pessoas estão voando com IA; outras ainda lutam para fazer as asas funcionarem."* Solução: **ser mais ambicioso**, dividido em tipos.

**Altitude — peça o resultado, não a tarefa.**
- Pergunta: *"O que você realmente quer que aconteça a seguir? Qual é o objetivo por trás do objetivo?"*
- Exemplo do Felix: corrigia crashes um por um → passou a pedir *"mantenha os apps sem crashes"*. Resultado: um **fluxo durável**, que tira o humano do circuito.
- Exemplo do vídeo: pitch para cliente — em vez de "preencha os slides", "impressione o cliente" → o Claude pode propor um tour 3D do local ou slides HTML interativos.
- **Limite:** funciona melhor com resultado definível; **pior em trabalho criativo aberto** ("ganhe dinheiro sem errar" não funciona em 2026).

**Profundidade — trabalhar como especialista, não só falar como um.**
- Armadilha: *"mande o modelo agir como profissional e ele só muda o vocabulário — usa o jargão sem mudar os métodos."*
- Técnica 1: **insistir nas ferramentas que os melhores usam** (no exemplo de churn da "Acme": não uma tabela no chat, mas o que um analista de dados/estrategista de preço usaria). Você não precisa saber quais são — o modelo geralmente sabe.
- Técnica 2: **metas ambiciosas.** Precisa carregar em 5s? Peça 200ms. Se o Claude disser que é impossível, diga que é possível e que continue tentando.
- Técnica 3: **juiz de fora — nunca deixe o modelo julgar o próprio trabalho** nas tarefas importantes (modelos são "concordantes"). Ideal: uma ferramenta que o modelo chama (ex.: teste de velocidade após cada mudança); em trabalho criativo, **um sub-agente que atua como juiz**.
- **O prompt das 4 perguntas** (o Claude responde antes de começar e reescreve o pedido):
  1. *O que um profissional de ponta faria aqui que você não está pedindo?*
  2. *Qual é o material mais bruto de onde ele partiria?*
  3. *Que métodos e ferramentas ele usaria?*
  4. *O que — além de você ou do Claude — mostraria que o resultado está certo?*

**Amplitude (Range) — ver o trabalho pelo olhar de outras áreas.**
- Achar os "desconhecidos desconhecidos". Exemplo do Felix: só pensou em usar o Claude para criar ambientes 3D no site depois de ver um colega usando o Blender para renderizar interiores.
- Técnica 1 (do livro *A Arte da Inovação*): **trocar substantivo por verbo.** Revisão trimestral não é "um PowerPoint"; é *"fazer pessoas ocupadas acreditarem numa história de causa e efeito e decidirem sob incerteza em 30 minutos"*.
- Técnica 2: **montar o time** — analista, gerente de vendas, designer, e um **red team** (advogado do diabo). Gasta tokens: use só no trabalho mais importante.
- Exemplo: anúncio de imóvel (substantivo) → *"ajudar uma família a se imaginar vivendo ali antes da visita"* (verbo) → time: designer de interiores, artista 3D, morador local que conhece os restaurantes.

**Autoeficácia** (fechamento): acreditar que é possível (Dantzig), ver alguém fazer (Bannister e a milha em 4 min), se permitir errar e entregar. Contraponto do apresentador: ambição precisa de um porquê; saiba pausar.

### O que conferi — e o que o vídeo deixou de fora
- **O artigo tem 4 tipos, não 3:** Velocidade, Altitude, Profundidade e Amplitude. O próprio Felix deixa **Velocidade** de lado porque é o uso que todo mundo já faz (fazer mais rápido). O vídeo pulou sem avisar.
- **Nuance importante (dos resumos do artigo original):** em Amplitude, o Felix diz para a IA **fazer o que esses especialistas realmente fazem, não interpretar a personalidade deles**. Ex.: montar um jornalista, um editor e um vendedor a descoberto, *cada um fazendo seu trabalho real*. O artigo também diz que essas abordagens exigem que o modelo tenha **um computador onde instalar software e acessar dados**.
- A skill "be-ambitious" que o vídeo oferece na comunidade Skool **é pública no GitHub**: `github.com/robonuggets/be-ambitious`. Não precisa entrar na comunidade.
- Não consegui abrir o artigo original nem a skill daqui (bloqueio de rede). **No seu computador, leia o original:** https://felixrieseberg.com/how-to-be-more-ambitious-a-tutorial-for-humans-with-models/

### O que aproveitar — o método para a parte criativa

**1. Verbo no lugar de substantivo → conceitos de campanha.**
"Campanha da coleção de inverno" é substantivo. O verbo:
> *"Fazer a mulher de 35+ se ver chegando ao jantar de sexta com a peça — antes de entrar na loja."*

O verbo define o time: stylist, diretor de fotografia, redator, **a própria cliente** (com as frases reais do Pesquisador de Dores), e o **Guardião como red team**.

**2. Atenção à nuance "fazer o trabalho, não interpretar o personagem" → Olivier March.**
Sua skill `creative-director` é uma **persona**. O alerta do Felix é exatamente esse: persona sozinha muda o vocabulário, não o método. Vale checar se o Olivier tem **métodos concretos** de diretor criativo (ex.: decupagem de referência por luz/cor/composição, moodboard com critérios, grade de avaliação) e não só a voz.

**3. As 4 perguntas antes de cada brief e cada Perfil de Gosto.**
Ex.: *"De qual material bruto um diretor criativo de ponta partiria?"* → talvez do **arquivo de campanhas da própria marca** e das peças físicas, não de referências genéricas do Pinterest.

**4. Juiz de fora → confirma a arquitetura.** O Guardião precisa ser **um agente separado** de quem gera, com critérios explícitos, nunca o mesmo agente se avaliando.

**5. Altitude → Vera.** Em vez de "responda o hóspede": *"nenhuma reserva perdida e nenhuma pergunta sem resposta em 5 minutos"* — e a Vera (ou quem a opera) organiza o resto. Lembrar o limite: altitude funciona melhor quando o resultado é mensurável, que é o caso da Vera.

**6. Metas ambiciosas → Studio.** Em vez de "gere boas imagens", "imagem que o Guardião aprova na primeira rodada em 8 de 10 casos" — e medir.

---

## Síntese cruzada — os 6 temas que se repetem

| Tema | Vídeos | O que significa para você |
|---|---|---|
| **1. Vender o resultado, não a IA** | 1, 5 | Site e propostas falam de "campanha de nível editorial sem sessão de fotos" e "nenhuma reserva perdida", não de "IA". |
| **2. Abordagem com amostra pronta** | 1 (todos os 8), 4 | Studio: imagem principal refeita grátis. Vera: print do tempo de resposta fora do horário. |
| **3. Gosto e avaliação são o ativo** | 5, 6, 3 | Perfil de Gosto + Guardião separado = o que não vira commodity quando o modelo melhora. |
| **4. Testar antes de acreditar** | 3, 6, 2 | Kie.ai/ComfyUI × Freepik medido com seus números. Vale também para estes vídeos. |
| **5. Qualidade e segurança de agentes** | 3, 4, 5 | Vera: destruidor + primeira visita + inegociáveis com teste + identidade e acesso mínimo. |
| **6. Não depender de um modelo** | 2, 5 | OpenRouter (texto) e Kie.ai (imagem/vídeo); a camada de valor fica nas suas skills e dados. |

---

## Plano priorizado

Esforço: P = horas, M = dias, G = semanas. Impacto estimado — **a validar no computador**.

| Prioridade | Ação | Frente | Esforço | Por quê |
|---|---|---|---|---|
| 1 | **Teste Kie.ai (e ComfyUI) × Freepik** numa mesma campanha: custo por imagem *aprovada*, tempo, fidelidade da peça | Studio | M | Mexe direto na margem; base para escalar |
| 2 | **Prospecção com amostra grátis**: critérios de marca-alvo + imagem principal refeita + mensagem de abordagem; 5 marcas | Studio | M | Gera cliente; usa o que você já sabe fazer |
| 3 | **Bateria de testes da Vera** (destruidor + primeira visita) + lista de inegociáveis com teste | Vera | M | Qualidade antes de escalar + argumento de venda |
| 4 | **4 perguntas + verbo/substantivo + "trabalho real, não persona"** dentro das skills `conceitos-anuncio-moda`, `roteirista-de-ganchos`, `creative-director` | Studio | P | Melhora todo conceito daqui para frente, custo baixo |
| 5 | **Abordagem "mensagem às 22h"** para pousadas + cálculo de reservas perdidas | Vera | P | Gancho de venda forte e barato |
| 6 | **Checklist de onboarding de pousada** (identidade própria, acesso mínimo, dados fictícios, revisar log, Docling para os PDFs) | Vera | P | Segurança + LGPD + escala |
| 7 | **OpenRouter na Vera** (chave por pousada, fallback, 2 níveis de modelo) | Vera | M | Margem por cliente + confiabilidade; depende da arquitetura atual |
| 8 | **Revisar texto do site** com foco no resultado e em "gosto" | Studio | P | Posicionamento |
| 9 | **Pasta do Drive como entrada de cliente** no Studio | Studio | M | Operação mais fluida |
| 10 | **Memória por hóspede** na Vera | Vera | G | Diferencial, mas exige cuidado de LGPD |
| — | Observar: agente Gemini no Workspace comum; agentes de compra para moda | — | — | Ainda não disponível / cedo |

---

## Hipóteses para o Claude Code do computador validar

Esta análise foi feita **sem acesso aos seus projetos reais**. Antes de agir, verificar:

1. **Vera:** como está montada hoje (GHL? n8n? chamada direta a qual modelo?). Isso decide se OpenRouter faz sentido e onde entram os testes.
2. **Vera:** já existe alguma lista de regras/inegociáveis ou testes de conversa? Já usa número/e-mail próprio por pousada?
3. **Studio:** qual é o custo real atual por imagem no Freepik (créditos/mês ÷ imagens aprovadas)? Sem esse número o teste da Kie.ai não tem comparação.
4. **Studio:** o Guardião da Marca roda como agente separado de quem gera, ou é o mesmo contexto?
5. **Skill do Olivier March:** tem métodos concretos ou é principalmente persona e tom?
6. **Ferramentas pagas:** quais assinaturas você mantém e usa só uma função (auditoria do vídeo 2)?
7. **Site (`client/`):** o texto atual fala mais de "IA/skill" ou de resultado? (Na nuvem contei 3 menções a "IA" e 1 a "skill" em `client/src/pages/Home.tsx`; o `ideas.md` chama o projeto de "Fashion AI Campaign Skill Showcase".)
8. **Kie.ai:** conferir preços reais por modelo no site e se aceita pagamento do Brasil.
9. **Treg:** existe, funciona com dados do Brasil, quanto custa? Se não, comparar com Outscraper/LeadMagic.

---

## Perguntas para você (Carlo)

1. Qual frente é prioridade **agora**: Studio (fechar clientes) ou Vera (qualidade/escala)?
2. A Vera já tem pousadas em produção ou ainda está em demo?
3. Quanto você gasta por mês hoje com Freepik e outras ferramentas de geração?
4. Topa começar pelo item 4 do plano (melhorar as skills criativas)? É o mais barato e melhora todo o resto.
