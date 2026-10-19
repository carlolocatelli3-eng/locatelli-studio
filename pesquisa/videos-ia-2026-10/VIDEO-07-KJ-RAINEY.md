# Vídeo 7 — KJ Rainey no The Calum Johnson Show (1h36)

**"The Creator Who Mastered Claude: The New Way To Use AI To Build Tools & Be Valuable"** · [YouTube](https://www.youtube.com/watch?v=Yt_BULiimg4) · transcrição completa em `transcricoes/07-kj-rainey-calum-johnson.md`

**Quem é:** KJ Rainey ganhava US$ 50 mil/mês vendendo cursos online e largou tudo porque "cansou de vender e queria construir". Aprendeu sozinho a criar ferramentas com o Claude, lançou um app pago (o **Signal**) e automatizou a parte chata do negócio de criador de conteúdo. Patrocinadores do episódio: Zapier e Gamma. Ele vende uma comunidade (Cohort Masterclass).

---

## 1. O que ele diz, na ordem do vídeo

### O diagnóstico: "as pessoas usam o Claude como bobas"
- O agente é feito para **rodar sozinho por muito tempo sem perguntar**. Se o prompt inicial sai um pouco torto, *"20 minutos depois volta uma coisa irreconhecível"*. O prompt de partida decide se sai **"um diamante ou um cocô"**.
- *"Nunca foi tão fácil gerar uma saída. Mas uma saída e uma saída eficaz são coisas muito diferentes."*
- **"Você não consegue fazer com IA algo melhor do que você entende."** A IA não faz de alguém um bom youtuber; ela ajuda um bom youtuber a fazer mais e melhor.
- O risco: montar painéis bonitos e "conversar com o Jarvis" a semana inteira sem ter feito nada.

### Nível 1 — Usar o Claude para aprender (o que ele considera o uso mais valioso)
**Prompt macro (aprender qualquer coisa):**
> "Quero aprender a ______. (1) Me entreviste para entender de onde estou começando e esclarecer meu objetivo. (2) Me explique todas as habilidades que provavelmente vou precisar. (3) **Ordene essas habilidades por importância para esse objetivo.** Depois me ajude a decidir por onde começar, faça um plano e me ajude a executar."

Os passos seguintes da mesma conversa:
1. quebrar cada habilidade em micro-habilidades;
2. listar os **princípios** por trás delas ("não sou caçador de táticas");
3. indicar os melhores livros, vídeos do YouTube e podcasts;
4. indicar ferramentas, começando pelas de R$ 0;
5. montar um **plano de 30 dias**.

*"Trajetória importa mais que velocidade. Há um milhão de coisas boas para fazer, mas geralmente só uma certa."*

**Prompt de entendimento (aprender uma ferramenta):** *"Meu objetivo é ___. Sou totalmente novo. Explique passo a passo, bem simples, **usando analogias com coisas que eu já entendo**. Me dê uma visão geral de cada conceito que preciso para esse objetivo. Me conduza por cada um com visuais e passos de ação. Eu vou repetir com minhas palavras até você achar que entendi."* E insistir nas perguntas, sem fingir que entendeu.

**Destravar problema técnico:** print da tela + *"estou tentando fazer ___ mas acontece ___, me ajude"*. Se for algo recente, mandar **pesquisar na web**, porque a informação interna do modelo pode estar desatualizada.

### A régua "matemática ↔ arte"
- Quanto mais perto de **matemática** (tem resposta certa), melhor a IA. Quanto mais perto de **arte** (subjetivo), pior.
- Não pergunte "o Claude é bom em thumbnails?". **Quebre o processo em etapas** e classifique cada uma. Tirar a foto, compor e sentir a tendência é arte (humano). Achar referências, comparar e montar rascunhos é matemática (Claude).
- Não seja um "macaco de processo": olhe o **resultado**, não o quão bonito é o fluxo. Ele faz os vídeos grandes "à mão, 100 horas no Miro", porque automatizados "ficariam ruins".

### Nível 2 — Automatizar o que é repetitivo
- **Exemplo simples:** um Grok Bot lê as mensagens diretas do Instagram dele todo dia e só avisa o que importa (pedido de mentoria, ideia de recurso para o app, parceria). Ele não abre mais o Instagram. Faz o mesmo com o e-mail.
- **Exemplo completo:** uma skill de **"relatório de embalagem de vídeo"**, já na 10ª versão. Dado o tema do vídeo, ela levanta:
  - palavras-chave e demanda, inclusive no nicho vizinho;
  - concorrência;
  - thumbnails de referência;
  - sugestões de título;
  - tags.
  
  *"É aqui que está a alavanca de verdade: você ensina, dá exemplos, testa, e nunca mais faz aquilo."*

### Como construir uma ferramenta em 10 minutos
1. Partir de um incômodo real.
2. **Sair do computador por 30 minutos** e escrever (ele usa fichas num quadro de cortiça). As perguntas:
   - Por que estou construindo isso?
   - Se eu tivesse uma varinha mágica, o que aconteceria?
   - O que está errado no jeito atual?
   - Qual é o resultado exato, o processo, as funções?
   - **"Como o Claude vai conseguir os dados?"** Ele chama esta de "a pergunta de US$ 10 mil". Se o Claude não souber, pesquisar numa conversa separada qual API usar.
3. Mandar para o Claude no **Cowork** (não no chat, porque o Cowork tem ferramentas, arquivos e conectores) com **o melhor modelo**.
4. **Usar todo dia** e anotar o que incomoda.

**Dicas práticas de ajuste:**
- **juntar todas as correções num prompt só**, porque menos idas e vindas significa resultado melhor e menos uso;
- mandar **print**, até com um círculo no problema;
- mandar **print da referência**: "deixe parecido com o YouTube";
- usar **ditado por voz** pago (Superwhisper), porque o grátis erra palavras e estraga o prompt;
- **ler o que foi transcrito** antes de enviar.

**Conectores × APIs × uso de computador:**
- conectores são "APIs para iniciantes" e **não fazem tudo**: o do Google Drive lê e busca, mas não edita nem cria. Peça ao Claude para dizer o que cada conector consegue fazer;
- API é "um cardápio" que o Claude pede sem precisar ver a tela;
- uso de navegador e de computador serve para o que não tem API, mas é lento.

### A demonstração ao vivo (o que você viu na academia, por volta de 1h17)
Uma **ferramenta de pesquisa do YouTube** feita ao vivo no Cowork, com a **API oficial do YouTube (Data API v3)**:
- busca uma palavra-chave e puxa 200 vídeos (na versão de uso real, 500 a 1.000);
- ordena por visualizações e por **"outlier score"**: visualizações em relação ao tamanho do canal, o que mostra quem foi muito acima do próprio normal;
- filtra pelos últimos 30 dias;
- primeira rodada de correções, num prompt só falado: tirar Shorts (menos de 2 minutos), botão de **destacar** com contorno azul para o time, botão de **esconder**, filtro "só destacados", visualizações mais legíveis, **cores por faixa de outlier** (acima de 5x em roxo);
- fica num arquivo HTML no computador, aberto no Chrome.

E uma segunda, feita no mesmo dia para o time: o **"Outlier Board"**, um site publicado na **Vercel com senha**. Qualquer pessoa do time cola o link de um vídeo que achou bom, com uma nota ("gostei do fundo"). Todos têm o site salvo na tela do celular. *"Feito em 10 minutos."*

E o app dele, o **Signal**: "conversar com o YouTube" para achar só vídeos de aprendizado, sem Shorts e sem distração. *"A IA não sabe tudo que os humanos sabem; humanos têm experiência e julgamento. Mas a IA pode te ajudar a achar o conteúdo humano certo."*

### O primeiro passo que ele recomenda
Abrir o Cowork (ou o Codex), pedir para construir **uma coisa pequena** que incomoda e usar. *"Só preciso que você comece."*

---

## 2. O que conferi

- **Grok Bot** existe: é da **xAI**, agentes sempre ligados num computador na nuvem, beta desde 11/08/2026, vem nos planos pagos do X. O Instagram entra por plugin de terceiros (Postiz); não achei leitura de mensagens diretas nativa. [x.ai](https://x.ai/news/introducing-grok-bot), [Paralect](https://www.paralect.com/stack/grok-bot), [Postiz](https://postiz.com/grok-bot/instagram)
- **API do YouTube:** gratuita, **10.000 unidades por dia**, e cada busca custa **100 unidades**. Na prática, ~100 buscas por dia sem pagar. [Phyllo](https://www.getphyllo.com/post/is-the-youtube-api-free-in-2026-quota-limits-costs-when-to-pay), [OutlierKit](https://outlierkit.com/resources/youtube-api-quota/)
- **Testei daqui:** a API oficial do YouTube **responde neste ambiente na nuvem** (pede só a chave). Então dá para construir a ferramenta aqui mesmo, não só no seu computador.

---

## 3. O que serve para você

### A. "Pesquisa do YouTube" — o que você mesmo está fazendo hoje
Hoje, você escolhe vídeos no YouTube, me manda os links, eu leio e cruzo com o Organismo. É exatamente o fluxo do KJ, só que manual nas duas pontas. Dá para virar um **Radar de Vídeos** do Organismo:

1. **Buscar:** uma lista de temas fixos ("AI fashion campaign", "UGC AI ads", "Nano Banana fashion", "Claude Cowork", "Meta Andromeda creatives", "moda IA"), pela API do YouTube.
2. **Filtrar:**
   - últimos 30 dias;
   - sem Shorts;
   - **outlier score** acima de 3x (vídeo que foi muito além do normal do canal);
   - em inglês e português.
3. **Você escolhe** o que vale, no celular: botões destacar e esconder, como no KJ.
4. **Eu leio** a transcrição dos destacados (o script já existe e funciona) e entrego a análise no formato dos **estudos** do seu painel: lições, o que adotar, o que evitar, cruzamento.
5. Uma vez por semana, junto com o Radar de notícias que você já tem.

Custo: R$ 0 (a API é grátis). Preciso de uma **chave da API do YouTube**: o Claude te guia, leva uns 10 minutos no Google Cloud.

**Cuidado:** isso pode virar mais uma máquina de estudo. A regra do KJ vale para nós: *"trajetória importa mais que velocidade"*. Só vale montar se o Radar **substituir** a pesquisa avulsa (menos tempo seu), e não se somar a ela.

### B. A régua matemática ↔ arte aplicada às 9 etapas do seu painel

| Etapa (do painel) | Lado | Quem faz |
|---|---|---|
| Entrada (ler o pedido) | matemática | IA |
| Briefing | matemática, com uma pitada de julgamento | IA + você confirma |
| Economia (margem) | matemática pura | **código** (nem precisa de IA) |
| Roteamento (qual modelo) | matemática | IA ou tabela fixa |
| Exploração (muitas direções baratas) | meio a meio | IA gera, **você escolhe** |
| Produção | arte com execução técnica | IA executa a **sua** direção |
| QA, a peça sagrada (cor, logo, caimento) | matemática | **Guardião** |
| QA, "parece luxo?" | arte | Guardião filtra, **você decide** |
| Aprovação | arte | **só você** |
| Entrega e memória | matemática | IA + código |

É a mesma conclusão do seu painel ("a IA entra só onde precisa decidir"), agora com um critério simples para cada etapa nova.

### C. Os 30 minutos longe do computador antes de construir
Vale para a skill **Receita** (que falta criar) e para qualquer ferramenta nova do Organismo. As perguntas do KJ, em especial **"como o Claude vai conseguir os dados?"**, evitam construir algo que depois não tem de onde puxar informação. Foi o que aconteceu com o "mapa da Ad Library" (a API não cobre o Brasil).

### D. O prompt de aprendizado para o seu gargalo real
O gargalo do Organismo é **vender** (zero marcas parceiras), não produzir. Rodar o prompt macro do KJ com o objetivo *"conseguir as 5 primeiras marcas de moda brasileiras pagando por criativo com IA"* dá a lista de habilidades **ordenada por importância** e os princípios. Faz sentido como primeira ação da Fase 1.

### E. Mural de referências do time
O "Outlier Board" do KJ (colar link + nota, todo mundo vê no celular) você **já tem**: é a seção **Referências** e **Campanhas** do painel, que é um Artifact com banco de dados. Confirma o caminho. Uma melhoria possível: um botão no celular para colar um link do Instagram ou TikTok direto.

### F. Detalhes práticos que valem já
- **Todas as correções num prompt só** e **print da referência**. Vale para conversar com o Claude e também para pedir ajustes de imagem.
- **Ditado pago** se você costuma falar com o Claude por voz. Ele diz que o ditado grátis troca palavras e estraga o prompt.
- **Conectores têm limites:** o do Google Drive daqui lê e busca, mas **não edita**. Para criar ou alterar arquivos do Google existe outro caminho.

### O que ignorar
- A parte pessoal e religiosa e a história dos cursos: contexto, não método.
- O Grok Bot: exige assinatura do X, e o Claude com tarefas agendadas cobre o mesmo uso.
- Os patrocínios (Zapier e Gamma). Um detalhe útil do Zapier: ele mesmo diz que automação fixa "sai mais barata que agente e funciona sempre", que é o mesmo princípio do Trigger.dev e da sua regra.
