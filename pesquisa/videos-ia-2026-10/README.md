# Pesquisa: 6 vídeos sobre IA aplicada a negócios (outubro/2026)

Pacote preparado numa sessão do Claude Code na nuvem para ser continuado **no Claude Code do computador do Carlo**, onde estão os projetos reais.

## Conteúdo

| Arquivo | O que é |
|---|---|
| `CRUZAMENTO-GERAL.md` | **Comece aqui.** Os 8 vídeos e as pesquisas cruzados: 10 temas em comum, divergências e decisões, o que já existe no Organismo, o que é novo e o que estudar de novo |
| `CRUZAMENTO-ORGANISMO.md` | Os 6 vídeos cruzados com o Organismo Operador e o Ciclo dos Agentes: o que já existe, o que muda, o que é novidade de verdade e o plano revisado |
| `ANALISE.md` | Detalhamento vídeo a vídeo: o que cada um diz, o que foi conferido, o que aproveitar (escrito antes de conhecer o painel) |
| `transcricoes/01…06-*.md` | Descrição e transcrição completa de cada vídeo, no idioma original |
| `ferramentas/yt_transcript.py` | Script que baixa título, descrição e transcrição de um vídeo do YouTube |

## Links dos vídeos

1. https://www.youtube.com/watch?v=wpaR6LhuZWg — *8 github repos that print $$$* (Corey Ganim)
2. https://www.youtube.com/watch?v=hgLI491ajG0 — *I Tried 100+ AI Tools. These 7 Are the Best* (Nate Herk)
3. https://www.youtube.com/watch?v=y2ifUC9_zuU — *Vercel's CEO Just Unveiled The Greatest AI Coding Workflow Ever* (AI LABS)
4. https://www.youtube.com/watch?v=0erYZFxwaNA — *Google's NEW AI Agent Could REPLACE Your Automation Stack* (Paul James)
5. https://www.youtube.com/watch?v=TLbdfaDijbU — *7 negócios de IA que o Vale do Silício já enxerga* (Bruno Okamoto)
6. https://www.youtube.com/watch?v=NarezKh3w4o — *Anthropic just shared how they use Claude differently* (RoboNuggets)
7. https://www.youtube.com/watch?v=Yt_BULiimg4 — *The Creator Who Mastered Claude* (KJ Rainey, The Calum Johnson Show) · análise em `VIDEO-07-KJ-RAINEY.md`
8. *Da ideia ao projeto · Live 1 · Human Academy e PAULO.IA* (transcrição enviada pelo Carlo) · análise em `VIDEO-08-HUMAN-ACADEMY-PAULO-IA.md`
9. *Build Social Media AI Agent Team Using Claude Code & Next.js* (Tube Guruji, transcrição enviada pelo Carlo) · análise em `VIDEO-09-SOCIAL-MEDIA-AGENT-TEAM.md`

Leitura complementar: artigo original do Felix Rieseberg (base do vídeo 6) — https://felixrieseberg.com/how-to-be-more-ambitious-a-tutorial-for-humans-with-models/

## Como usar no Claude Code do computador

1. Copie esta pasta para o projeto principal (ou rode `git pull` na branch `claude/admiring-ptolemy-1b8xck` do repositório `locatelli-studio`).
2. Garanta que o painel do projeto esteja rodando em `http://localhost:8790`.
3. Cole este pedido no Claude Code:

```
Leia pesquisa/videos-ia-2026-10/CRUZAMENTO-ORGANISMO.md por inteiro, depois
ANALISE.md (e as transcrições em pesquisa/videos-ia-2026-10/transcricoes/
quando precisar de detalhe).

Depois, abra o painel em http://localhost:8790 (comece por #campanha.plano e
percorra todas as seções) e leia os arquivos reais deste computador: a pasta HQ,
CLIENTES/, as rodadas da Aura Alfaiataria e as skills instaladas.

Com isso:
1. Responda cada item da seção 5 do CRUZAMENTO ("Para o Claude Code do computador validar").
2. Revise o plano da seção 4 do CRUZAMENTO com o que existe de verdade: o que já
   está feito, o que não se aplica e o que muda de prioridade, sempre dizendo o porquê.
3. Proponha os 3 primeiros passos concretos, com os arquivos que mudariam em cada um.
   Não altere nada antes de eu aprovar.
```

## Como baixar transcrições de novos vídeos (no computador)

No computador o YouTube não está bloqueado, então o mais simples é usar o `yt-dlp`:

```
pip install yt-dlp
yt-dlp --skip-download --write-auto-subs --sub-langs "en,pt" --sub-format vtt -o "video" URL_DO_VIDEO
```

O `ferramentas/yt_transcript.py` também funciona (`python3 yt_transcript.py ID_DO_VIDEO pasta_saida`). Ele foi escrito para contornar o bloqueio do ambiente na nuvem.
