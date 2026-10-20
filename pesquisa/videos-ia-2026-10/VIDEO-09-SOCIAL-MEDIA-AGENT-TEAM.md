# Vídeo 9 — "Build Social Media AI Agent Team Using Claude Code & Next.js" (Tube Guruji, 2h36)

Transcrição completa (legenda automática em inglês) em `transcricoes/09-social-media-agent-team-tube-guruji.txt`. Os horários `[h:mm]` são da transcrição.

**O que é:** um curso de programação passo a passo. O autor (canal Tube Guruji) constrói com o Claude Code um aplicativo, o "Socialix", que funciona como **uma equipe de agentes de redes sociais**: pesquisa tendências, escreve legendas, gera imagens, agenda e publica no Instagram, TikTok e YouTube, e mostra os resultados.

**Viés:** quase todas as ferramentas são patrocinadas ou têm link de afiliado (CodeRabbit, InsForge, ImageKit, Blotato, E2B). O curso vende uma comunidade própria.

---

## 1. O que o aplicativo faz · [0:00–7:12]
- **Agente mestre** recebe um pedido em linguagem comum ("crie dois posts para o lançamento de uma cafeteria às 8h em duas manhãs seguidas"). Ele faz o plano, divide em tarefas e distribui.
- **Quatro agentes por função:** Pesquisa (tendências), Criação (legenda, hashtag, imagem), Agendamento e Análise. O "Publicador" virou "Análise" porque fazia o mesmo que o Agendamento. *"Cada agente não faz o trabalho do outro."*
- **Cada agente tem um computador na nuvem** com navegador, para pesquisar como uma pessoa. **Você pode assistir ou assumir o controle a qualquer momento.** Quando o site pede login, o agente **para e avisa você**.
- **Controle humano o tempo todo:**
  - página de posts com rascunhos;
  - editar e reagendar;
  - **calendário mensal e semanal com arrastar e soltar**;
  - editor de imagem;
  - "desagendar" devolve o post para rascunho.
- Uma tela decorativa com um "escritório" animado mostra os agentes trabalhando. É vitrine, não função.

## 2. Como foi construído
| Peça | O que faz | Equivalente no Organismo |
|---|---|---|
| **Claude Code no VS Code**, uma conversa nova por funcionalidade, uma branch e um pedido de revisão por capítulo | Construção | Você já constrói com o Claude Code |
| **Subagente "quick helper"** (`.claude/agents/`) que manda tarefas simples para o modelo mais barato (Haiku) e deixa o Opus para o difícil · [19:02] | Corta custo de uso | A ideia do painel "Opus planeja, Sonnet executa" |
| **"Planeje antes de programar"** no próprio prompt, e o Claude só executa depois do plano aprovado · [1:28] | Clareza antes de gerar | Portão 1 do Criar |
| **CodeRabbit:** revisa cada mudança de código, explica linha a linha e faz varredura de segurança · [21:19] | Juiz de fora para código | O DeepSec do vídeo 3 faz o mesmo papel |
| **InsForge:** banco de dados, login e armazenamento num lugar só | Infraestrutura | O seu servidor local |
| **OpenAI Agents SDK:** cada agente com instruções e **ferramentas próprias** (busca, ler página, salvar pesquisa, gerar texto, gerar imagem) · [1:06–1:14] | Os agentes de verdade | A Colmeia com as skills |
| **Agente mestre com banco:** plano, tarefas com **dependências**, execuções, mensagens e comunicação entre agentes · [1:14–1:24] | Coordenação | Maestro, jobs e ciclo |
| **Inngest:** roda as tarefas em segundo plano, a cada 15 min; **tenta de novo quando falha**; **impede rodar duas vezes**; limita quantas tarefas rodam ao mesmo tempo (2 por usuário, 10 por agente) · [1:26–1:38] | Rotina que roda sozinha | Degrau 3 (o vídeo 2 citou o Trigger.dev para o mesmo papel) |
| **E2B:** computador na nuvem para o agente, com US$ 100 de crédito grátis; pausa sozinho quando fica parado · [1:38–1:47] | Pesquisa com navegador | A coleta dos Virais |
| **Imagem do Gemini** pelo AI Studio, com modelo gratuito disponível · [1:58] | Geração de imagem | O que o Flow e a Kie.ai cobrem |
| **ImageKit:** edita a imagem **mudando o endereço (URL)**: corta para 16:9, tira fundo, aumenta resolução, põe texto, preto e branco · [2:07–2:17] | Formatos e ajustes rápidos | "Todos os formatos contratados" (9:16, 4:5, 1:1) |
| **Blotato:** conecta 9 redes, **agenda e publica**, puxa **resultados** e lê comentários e mensagens; tem **conexão MCP com o Claude** · [2:18–2:36] | Distribuição e números | Não existe no Organismo |

**Duas regras de agente que valem copiar** · [1:49]
1. *"Quando o usuário mandar informação nova sobre uma tarefa já criada, **atualize a tarefa existente**, não crie outra."*
2. *"O agente de pesquisa e o de criação **usam o navegador para informação recente**, a não ser que já saibam a resposta."* O navegador é caro e lento, então não deve ser usado em tudo.

**Um alerta:** o vídeo ensina a ganhar tokens grátis da OpenAI **autorizando o uso dos seus dados para treino** · [1:07]. **Com dado de cliente, não.** Isso conflita com LGPD e com a confidencialidade das marcas.

---

## 2b. O que conferi
**Blotato:**
- planos de **US$ 29/mês** (20 contas), US$ 97 (40) e US$ 499 (100);
- **a conexão com o Claude (MCP) e a API só existem no plano pago**; gerar a chave da API encerra o teste grátis de 7 dias;
- publica em 9 redes, incluindo o Instagram;
- os resultados (analytics) aparecem como disponíveis numa página e "em breve" em outra. Revisores dizem que são básicos.

[Blotato pricing](https://www.blotato.com/pricing.md), [Blotato alternatives](https://www.blotato.com/blotato-alternatives), [Capterra](https://www.capterra.com/p/10053855/Blotato/)

---

## 3. O que serve para o Organismo — pensando em venda e crescimento

### A. A ideia mais forte: o seu Instagram como "campanha zero"
A regra do painel é *"sem cliente, sem agente"*: sem dados reais, nenhum agente aprende. Este vídeo mostra o laço completo: **pesquisar, criar, você aprovar, publicar, medir e ajustar**. Esse laço pode rodar **na sua própria conta (Locatelli Studio) antes de ter a primeira marca**.
1. Pesquisador de Dores e Roteirista criam a semana de conteúdo.
2. O Guardião filtra e **você aprova** (Portão 4).
3. O Blotato (ou o Postiz, gratuito, do vídeo 1) agenda e publica.
4. O **Analista de Ganchos recebe números reais** e devolve a regra 80/20.

Isso resolve três coisas de uma vez:
- **dados reais** para as skills, hoje só testadas em modo estudo;
- **vitrine e prova de venda**, os temas 10 e 1 do cruzamento ("fundador criador", "o que é difícil de fazer viraliza", editorial diário como o @luxry.ai);
- um **caso para mostrar às marcas**: "este perfil é operado pelo sistema que vamos usar para vocês".

Custo: Blotato a partir de US$ 29/mês, ou Postiz grátis rodando no seu computador. Nada é publicado sem a sua aprovação.

### B. Publicação para clientes: só depois, e com cuidado
O painel diz que *"nós entregamos os criativos, eles cuidam da mídia"*. Publicar para o cliente aumenta o escopo e a responsabilidade (conta do cliente, horário, erro público). **Fica fora agora.** Se um cliente pedir, a peça já existe: depois do Portão 4, o post vai agendado para o calendário dele.

### C. Regras e peças técnicas para quando o Organismo for para o degrau 3
- **Tarefa com dependência, nova tentativa quando falha, nada rodando duas vezes e limite de tarefas simultâneas** (o Inngest faz isso pronto). Vale conferir se o ciclo atual já tem as quatro coisas.
- **"Atualize a tarefa, não crie outra"** e **"navegador só quando precisa"** como regras do Maestro.
- **Subagente barato** (Haiku ou Sonnet) para tarefas simples, como já planejado no radar do painel.
- **Revisão automática do código** (CodeRabbit ou DeepSec) quando o servidor do Organismo crescer.
- **Corte de formato por endereço** (ImageKit): uma imagem aprovada vira 9:16, 4:5 e 1:1 sem gerar de novo. Barato e sem risco para a peça sagrada.

### D. Pesquisa com navegador para os Virais e a Ad Library
O agente com computador próprio, que **para e chama você quando aparece login**, resolve a coleta de reels e o mapa da Ad Library feito "à mão" (a API não cobre o Brasil). Cuidado com os termos de uso das redes: usar com moderação e com a sua conta.

### O que ignorar
- Transformar o Organismo num software para vender (SaaS). A revisão do painel já decidiu: *"software para vender só depois de clientes pagando"*.
- O escritório animado.
- Os tokens grátis da OpenAI em troca de dados.

---

## 4. Onde ele entra no cruzamento geral

| Tema do cruzamento | O que o vídeo 9 acrescenta |
|---|---|
| T2 · humano nos portões | Calendário com arrastar e soltar, rascunhos, "desagendar"; o agente para no login e chama você |
| T3 · provar antes de confiar | Revisão automática de cada mudança de código (CodeRabbit) |
| T5 · barato primeiro | Subagente que manda o simples para o modelo barato; navegador só quando precisa |
| T6 · um agente que comanda ferramentas | Blotato pela conexão MCP; ferramentas próprias por agente |
| T7 · código para o que repete | Inngest: rotina com nova tentativa, sem rodar duas vezes, com limite |
| T8 · memória | Banco com plano, tarefas, execuções e mensagens entre agentes |
| T10 · vender e distribuir | **Publicar e medir**: o elo que faltava entre criar e o Analista de Ganchos |

**Novo candidato à sprint:** *"Instagram do Locatelli Studio como campanha zero do ciclo"* (seção 3A).
