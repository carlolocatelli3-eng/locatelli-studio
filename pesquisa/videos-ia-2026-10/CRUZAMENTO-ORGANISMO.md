# Os 6 vídeos contra o Organismo Operador

**Leia este antes do `ANALISE.md`.** A análise anterior foi escrita sem conhecer o seu sistema. Depois li o painel **Organismo Operador** (cópia de 06/10 e o banco ao vivo, que está igual), o artifact **Ciclo dos Agentes Locatelli** (skills atualizadas em 16/10) e o texto completo das skills. Este documento corrige a análise com base no que já existe.

---

## 1. O que entendi do que você está construindo

**Organismo Operador** é um estúdio de moda IA-nativo com **três pilares para o mesmo cliente**:

| Pilar | O que é | Pacotes | Papel |
|---|---|---|---|
| **Campanha híbrida** | Modelo real fotografada uma vez, com contrato de continuidade; a IA leva a mesma pessoa para outros cenários, looks e vídeos | Campanha Híbrida a partir de R$ 14.900 · Continuidade Mensal R$ 4.900/mês | Prestígio e ticket alto |
| **Vídeo UGC** | Criadores reais multiplicados por IA e atores 100% IA, em volume, para testar ganchos toda semana | Teste de Ganchos R$ 1.490 · UGC Mensal R$ 3.900/mês | Volume e recorrência |
| **Modelo 100% IA** | Elenco próprio de modelos IA, sempre declarado, para catálogo e marcas sem verba | Catálogo IA R$ 49/peça · Licença de Modelo IA R$ 2.500 + R$ 1.500/mês | Escala e custo mínimo |

- **Tese:** *"três preços e três velocidades para o mesmo cliente"*, unidos pelo ativo que nasce na campanha (rosto, luz, cenários, memória da marca).
- **Fosso:** um ativo que serve aos três pilares, contratos e consentimento, **direção de moda** e velocidade de 72h.
- **Plano de 13 semanas:** Fundação → vender UGC e a primeira campanha → recorrência e 100% IA → sistema. Metas no dia 45: 5 Testes de Ganchos e 1 Campanha.
- **Escada dos agentes:** degrau 1 = receitas (skills) no Claude; degrau 2 = uma marca parceira real; degrau 3 = automação com código; degrau 4 = "talvez nunca".
- **Regras:** *"só se automatiza o que já funcionou três vezes"*, *"o agente propõe, você decide"*, *"sem cliente, sem agente"*.
- **Ciclo das skills (16/10):** Perfil de Gosto → Pesquisador de Dores → Roteirista de Ganchos → Guardião da Marca → Analista de Ganchos → volta para o Roteirista (80/20). Tudo em **modo estudo** (marca fictícia "Aura Alfaiataria", rodada 2).
- **Decisões já tomadas:**
  - Freepik virou Magnific, e a produção vai **por API** (Higgsfield, fal.ai).
  - **"Personalidade de agente não melhora resultado; Olivier vira a régua"**.
  - Sem e-mail frio em massa nem raspagem de contatos.
  - **Conteúdo para pousadas sai daqui e vai para o SOL/Vera**.

**Situação real hoje:** 38 das 40 tarefas do painel estão "a fazer". Nenhuma marca parceira ainda. As skills foram exercitadas em modo estudo (o painel não registra isso). A skill **Receita** ainda não existe. A Caixa de Jobs só tem o exemplo.

---

## 2. O que muda na minha análise anterior

| Eu tinha dito | O que é verdade no seu sistema | Ajuste |
|---|---|---|
| Testar **Kie.ai × Freepik** | O Freepik já virou Magnific e você já decidiu produzir por API. Kie.ai já está no mapa como "verificar". Há uma tarefa aberta: *"Achar a fonte de Nano Banana Pro via API"* (o Higgsfield não tem). | O teste certo é **Kie.ai × Higgsfield × fal.ai**, e a **Kie.ai pode fechar essa tarefa do Nano Banana Pro**. Também entra no teste dos motores de UGC em português (Seedance 2.5 mais barato). |
| Muitas ações para a **Vera** | Pousadas saíram deste organismo e foram para o SOL. | Tudo sobre a Vera vira **apêndice para o projeto SOL** (seção 6). Não entra no plano do Organismo. |
| "Revisar o **Olivier March**: persona ou método?" | Você já decidiu aposentar personas. Mas a Colmeia ainda lista o **Olivier como "ativo"** (pré-aprovação) e **Yumi, Léa e Marcos como "renovar"**. | O artigo do Felix **confirma a sua decisão**. Falta fechar a incoerência no painel (ver ação 5). |
| **Abordagem com amostra grátis** como novidade | Já está no plano: *"abordar com 1 UGC do próprio produto da marca, privado, com marca d'água"*. | Só confirma. Vale estender ao **Catálogo IA**: refazer 1 foto de produto da loja da marca on-model. |
| **Treg** e e-mail frio para leads | Você já decidiu não usar e-mail frio em massa nem raspagem. | Mantenha a decisão. Do vídeo 1 fica só o formato da amostra. |
| **ComfyUI** para consistência | Você já trocou Character Lock por banco de referências (o Seedance 2.5 aceita até 50). | ComfyUI cai para baixa prioridade. Só volta se uma Licença de Modelo IA exigir modelo próprio treinado (LoRA). |
| Catálogo legível por **agentes de compra** | Já existe: *"ficha da peça pronta para busca por IA"* no Catálogo IA. | Só confirma. Argumento de venda. |
| "**Memória por cliente**" | Já existe: agente **Memória do Cliente** na Colmeia. | Só confirma. |
| "**Gosto é o ativo**" (vídeo 5) | Já é o seu fosso: *"Direção de moda: apps geram imagem; você decide o que vale"*. | Confirma com um argumento novo para a página da oferta (ação 7). |

**Resumo honesto:** a maior parte dos 6 vídeos **confirma decisões que você já tomou**. Seu sistema está à frente da maioria do que os vídeos ensinam. As novidades reais são poucas e estão na seção 3.

---

## 3. O que os vídeos acrescentam de verdade

### A. Calibrar o Guardião como uma prova, não só uma skill (vídeos 3, 5 e 6) — **a mais valiosa**
Juntando três vídeos: *"inegociável sem teste é esquecido"* (Vercel), *"o ativo raro é gosto + avaliações escritas por quem entende"* (Vale do Silício) e *"nunca deixe o modelo julgar o próprio trabalho"* (Felix).

Na prática:
1. **Conjunto-ouro:** separe 20 a 30 peças que **você** já julgou. Metade aprovadas, metade recusadas, com o motivo em uma linha. Podem ser de referências, de campanhas analisadas ou das rodadas da Aura Alfaiataria.
2. **Peças com defeito plantado** (o "agente destruidor" aplicado ao Guardião): cor da peça trocada, logo distorcido, mão com dedo a mais, rosto diferente da âncora, promessa proibida no texto.
3. Rodar o Guardião **em uma conversa separada** de quem gerou (juiz de fora) e medir:
   - quantas vezes ele concorda com você;
   - quantos defeitos plantados ele pega.
4. Cada discordância vira uma regra nova no Perfil de Gosto ou no Guardião.

Isso é o **começo da "régua do seu gosto" (Fase 3)** e de *"aprovar tudo no começo, depois por amostra"*, mas feito agora, sem cliente. Também vira argumento de venda: *"nosso portão de qualidade pega X de 10 defeitos antes de você ver"*.

### B. Uma conta para os modelos de texto e uma para imagem/vídeo (vídeos 2 e 5) → Roteador e Agente de Margem
Você planeja comparar Claude Opus 5.5 × GPT-6 Astra e usar Sonnet 5.5 / GPT-6 Sol / Luna nas etapas simples. O **OpenRouter** faz isso numa conta só:
- **uma chave por cliente ou por job**, o que dá o **custo real por job** que o Agente de Margem precisa;
- **fallback** quando um provedor cai;
- trocar de modelo mudando uma linha.

A **Kie.ai** é o equivalente para imagem e vídeo. Hipótese de arquitetura para o degrau 3: **OpenRouter (texto) + Higgsfield e/ou Kie.ai (imagem/vídeo)**, cada chamada registrada no job. *Só faz sentido no degrau 3; até lá, anote apenas.*

### C. Código simples para o que é sempre igual (vídeo 2, Trigger.dev) → confirma "agente = programa + ciclo + dados"
Etapas determinísticas não precisam de agente, só de script:
- registrar a receita de cada peça;
- ler a exportação do Meta toda segunda;
- calcular a margem.

O Trigger.dev (plano grátis com US$5/mês) é uma opção para rodar esses scripts no degrau 3, sem servidor. Hoje basta a tarefa agendada que você já usa no Radar.

### D. Perguntas de profundidade no Roteirista (vídeo 6)
O Roteirista já é forte: 12 ângulos, frases reais, 80/20. Duas melhorias pequenas:
- **Antes dos 10 conceitos**, responder as 4 perguntas do Felix: *o que um diretor de criação de ponta faria aqui que não foi pedido? de qual material bruto ele partiria? que métodos usaria? o que, além de nós, mostraria que está certo?*
- **Verbo, não substantivo**, no topo do brief. Não "anúncio do blazer", e sim *"fazer a executiva de 38 anos se ver indo direto do trabalho ao jantar sem trocar de roupa"*. O ângulo "Ocasião de uso" já vai nessa direção. A troca serve de bússola para os outros 11.

### E. Conferir a direção, não o volume (vídeo 3) — **um alerta sincero**
O CEO da Vercel diz: volume de trabalho mede velocidade, não rumo, e com IA *toda ideia vira tarefa e parece progresso*. O painel tem 5 estudos, 27 itens de radar, 28 ideias, 39 ferramentas e agora 6 vídeos a mais. Do outro lado, 38 tarefas abertas e zero marca parceira. **A sua própria regra diz "sem cliente, sem agente".**

**Recomendação:** desta pesquisa, **entram no máximo 3 tarefas novas** (seção 4). O resto vira estudo arquivado. Uma vez por semana, um "/direção" de 10 minutos: o que eu fiz bate com a fase atual do plano?

### F. Identidade e acesso mínimo (vídeo 4) → degrau 2
O degrau 2 já prevê acesso só de leitura aos anúncios da marca. Somar:
- **identidade do estúdio**: e-mail e conta do Locatelli Studio, nunca a pessoal, para receber acessos de clientes;
- **um escopo por cliente** (`CLIENTES/[marca]/`, que você já usa);
- **primeiro rodar com dados fictícios** (o modo estudo, que você já usa);
- revisar o registro de ações depois da primeira semana real.

A **pasta do Drive como porta de entrada** é como implementar a sua ideia *"Catálogo que se atualiza a cada drop"*: a marca põe a planilha e as fotos e o sistema produz para você aprovar.

### G. Arrumação: duas skills fazendo o mesmo trabalho
`conceitos-anuncio-moda` (a antiga, de plugin) e `roteirista-de-ganchos` (a sua) estão **as duas instaladas**. O próprio rodapé do Ciclo dos Agentes diz que a antiga *"não lê o que os outros agentes entregam"*. Nesta sessão as duas aparecem como disponíveis, então o Claude pode escolher a errada. O painel também ainda lista "Conceitos de anúncio" no degrau 1. **Desativar a antiga** evita confusão.

### H. Pequenos acréscimos
- **Vídeo 5, "se sair um modelo melhor, você fica melhor ou pior?"** O Organismo fica *melhor*, porque o valor está no gosto, nos contratos e na memória da marca, não no prompt. Boa frase para a página da oferta.
- **Vídeo 5, "fundador criador":** reforça a referência **@luxry.ai** (editorial diário como vitrine) e a ideia da aula com influenciadora, que já estão no painel.
- **Vídeo 6, Amplitude ("fazer o trabalho real, não interpretar o personagem"):** o Pesquisador de Dores já faz isso (fontes reais, graus literal/sinal/simulada). Bom modelo para as outras skills.
- **DeepSec** (segurança de código): só quando existir código no degrau 3.

---

## 4. Plano revisado (Organismo Operador)

| # | Ação | Origem | Esforço | Tipo |
|---|---|---|---|---|
| 1 | **Fechar o degrau 1 de verdade:** criar a skill **Receita** e registrar no painel o que já foi testado em modo estudo (rodadas da Aura Alfaiataria) | Painel + vídeo 3 | Horas | Atualiza tarefas a03, a04, a01 |
| 2 | **Conjunto-ouro do Guardião:** 20–30 peças julgadas por você + 5 com defeito plantado, rodar em conversa separada, medir concordância | Vídeos 3, 5, 6 | 2–3 h | **Tarefa nova** |
| 3 | **Incluir Kie.ai e fal.ai nos testes da Fase 0** (motores de UGC em português e Nano Banana Pro via API), anotando o custo real por peça | Vídeo 2 | Já previsto | Amplia tarefas existentes |
| 4 | **Primeira marca parceira:** seguir o plano (30 marcas da Ad Library + amostra privada). É o que destrava tudo. | Seu plano | Semanas | Já existe |
| 5 | **Arrumar a Colmeia e as skills:** aposentar Yumi, Léa e Marcos; Olivier deixa de ser persona e vira a régua; desativar `conceitos-anuncio-moda` | Vídeo 6 + seu painel | 30 min | **Tarefa nova** |
| 6 | **4 perguntas + verbo** no início do Roteirista de Ganchos | Vídeo 6 | 30 min | Melhoria de skill |
| 7 | **Página da oferta:** falar do resultado e do gosto ("modelo melhor deixa a gente melhor"), não de IA | Vídeos 1, 5 | Já previsto | Amplia tarefa existente |
| — | **Degrau 3 (depois):** OpenRouter + Kie.ai/Higgsfield com chave por job; scripts para etapas fixas (Trigger.dev ou tarefa agendada); DeepSec | Vídeos 2, 3 | — | Anotar no degrau 3 |

**Tarefas novas no painel: só 2 (itens 2 e 5).** O resto amplia o que já existe.

---

## 5. Para o Claude Code do computador validar

1. As rodadas da Aura Alfaiataria: o que foi testado, o que falhou, e se o painel deve marcar as tarefas a01, a03 e a04 como feitas ou fazendo.
2. Onde estão as peças que podem formar o conjunto-ouro do Guardião (pastas `CLIENTES/`, referências, campanhas).
3. Se `conceitos-anuncio-moda` ainda está ativa e se algum fluxo depende dela.
4. Preço real da Kie.ai para Nano Banana Pro e Seedance 2.5, e se aceita uso comercial.
5. Se a pasta HQ do Claude Code já está organizada (o painel diz "organizar a pasta HQ antes de escalar").

---

## 6. Apêndice: o que vai para o projeto SOL / Vera

Fica registrado aqui porque veio dos mesmos vídeos, mas **pertence ao SOL**, não ao Organismo:
- **Testes destruidor e primeira visita** da Vera, antes de cada pousada entrar no ar (vídeo 3).
- **Inegociáveis com teste:** nunca confirmar sem disponibilidade, nunca preço fora da tabela, reclamação e reembolso vão para humano, nunca dados de outro hóspede (vídeo 3).
- **Abordagem "mensagem às 22h":** print do tempo de resposta mais o cálculo das reservas perdidas (vídeo 1).
- **Identidade própria e acesso mínimo** por pousada; checklist de onboarding com dados fictícios (vídeo 4).
- **OpenRouter:** chave por pousada, fallback, dois níveis de modelo (vídeo 2).
- **Memória por hóspede**, com cuidado de LGPD (vídeo 5).
- **Docling** para os PDFs da pousada e **reativação de hóspedes** pelo GHL (vídeo 1).
