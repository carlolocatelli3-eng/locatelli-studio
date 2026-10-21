#!/usr/bin/env python3
"""Gera pesquisa/videos-ia-2026-10/maquina.html a partir dos arquivos reais do kit. Requer: pip install markdown.
No computador, ajuste BASE para a pasta onde o kit estiver."""
import os, re, html, markdown, json
BASE = "/home/user/locatelli-studio/pesquisa/videos-ia-2026-10"
KIT = BASE + "/kit-fluxo"
md = lambda t: markdown.markdown(t, extensions=["tables", "fenced_code"])

head_src = open(BASE + "/decisoes-urgentes.html", encoding="utf-8").read()
css_end = head_src.index("</style>")
head = head_src[:css_end].replace("<title>Três Decisões Urgentes</title>", "<title>A Máquina Locatelli</title>", 1)
extra = """
/* Machine guide: skill cards grid + full skill text in expandable panels */
.cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0;border:1px solid var(--line);background:var(--surface)}
.card{padding:16px 18px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);min-width:0;display:flex;flex-direction:column;gap:6px}
.card:nth-child(3n){border-right:0}
.card .k{font-family:var(--mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--accent)}
.card h3{font-family:var(--display);font-weight:500;font-size:22px;margin:0}
.card p{font-size:14.5px;margin:0;color:var(--ink)}
.card .meta{display:flex;flex-wrap:wrap;gap:6px;margin-top:auto;padding-top:6px}
.card a{font-size:13px}
.pipe{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));border:1px solid var(--line);background:var(--surface)}
.pipe div{padding:14px;border-right:1px solid var(--line);min-width:0;font-size:14px;line-height:1.45}
.pipe div:last-child{border-right:0}
.pipe b{display:block;font-family:var(--mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--accent);margin-bottom:4px}
.pipe .h{background:var(--accent-soft)}
details.sk{border:1px solid var(--line);background:var(--surface);margin-top:14px}
details.sk>summary{cursor:pointer;padding:14px 18px;display:flex;gap:12px;align-items:baseline;flex-wrap:wrap;list-style:none}
details.sk>summary::-webkit-details-marker{display:none}
details.sk>summary::before{content:"+";font-family:var(--mono);color:var(--accent);width:14px}
details.sk[open]>summary::before{content:"–"}
details.sk>summary b{font-family:var(--display);font-weight:500;font-size:22px}
details.sk>summary span{font-size:13px;color:var(--muted)}
details.sk>summary:focus-visible{outline:2px solid var(--accent);outline-offset:-2px}
.doc{padding:4px 22px 22px;border-top:1px solid var(--line);font-size:15px;max-width:none}
.doc h1{font-size:26px;margin:18px 0 8px}
.doc h2{font-size:22px;margin:22px 0 8px}
.doc h3{font-size:16px;margin:16px 0 6px}
.doc p,.doc li{max-width:75ch}
.doc pre{background:var(--code);padding:12px 14px;overflow-x:auto;font-size:13px;line-height:1.5;border:1px solid var(--line)}
.doc pre code{background:none;padding:0}
.doc table{min-width:0;font-size:13.5px;margin:8px 0}
.doc .tblwrap{overflow-x:auto}
.doc blockquote{margin:10px 0;padding:6px 14px;border-left:3px solid var(--line);color:var(--muted)}
.tests{margin-top:18px;border-top:1px dashed var(--line);padding-top:10px}
.tests h4{font-family:var(--mono);font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);margin:0 0 8px}
.ladder{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border:1px solid var(--line);background:var(--surface)}
.ladder div{padding:16px;border-right:1px solid var(--line);min-width:0}
.ladder div:last-child{border-right:0}
.ladder .lv{font-family:var(--display);font-size:34px;line-height:1;color:var(--accent)}
.ladder h3{font-size:16px;margin:6px 0 4px}
.ladder p{font-size:14px;margin:0;color:var(--muted)}
.out{font-family:var(--mono);font-size:12.5px;background:var(--code);padding:12px 14px;border:1px solid var(--line);white-space:pre-wrap;margin:8px 0 0;overflow-x:auto}
@media (max-width:900px){
  .cards{grid-template-columns:minmax(0,1fr)}
  .card{border-right:0}
  .pipe,.ladder{grid-template-columns:minmax(0,1fr)}
  .pipe div,.ladder div{border-right:0;border-bottom:1px solid var(--line)}
}
</style>
"""

SK = [
 ("pitch-e-roteiro","D–G","Transforma o pedido em ideia e roteiro. Mostra as 10 ideias óbvias para descartar, ajuda você a escrever o pitch em um parágrafo, testa a ideia com 6 lentes e entrega roteiros medianos em tabela para você reescrever.","Portão 1","2 (o pitch é sempre seu)"),
 ("angulos-diretor-de-fotografia","I e amostras","De uma única foto, cria 5 pontos de vista inusitados sem mudar pessoa, produto ou lugar. Serve para catálogo, variação de campanha e amostra para prospectar cliente.","Guardião","2"),
 ("folha-de-personagem","H","Monta a ficha visual de uma pessoa real: rosto real preservado, corpo gerado, quatro vistas, closes dos detalhes e altura. Só com contrato e consentimento.","Portão 2","1 (rosto real nunca sobe)"),
 ("folha-de-produto-e-lugar","I–J","Monta a ficha do produto (todas as vistas e closes) ou do lugar real, mais cenários e objetos de cena. Mede a cor real × gerada com número.","Portão 2","1"),
 ("ensaio-por-referencia","Ensaio","Gera um ensaio com a pessoa da ficha e o produto da ficha, usando uma referência só para luz e clima, nunca para copiar.","Portão 4","2"),
 ("video-multicena","K–M","Escreve o prompt de vídeo a partir das fichas e do áudio real, gera rascunhos baratos em 480p, controla o prazo de 7 dias e só faz 1080p do que entrou no corte.","Portão 3","2"),
 ("vfx-sobre-video-real","Efeitos","Sobre um vídeo real gravado, dirige um efeito (trocar ambiente, transformar personagem, mudar clima) preservando pessoa, câmera e áudio.","Portão 3","1"),
 ("melhoria-diaria","Ciclo","Todo dia lê seus sim, corrige e não; atualiza o placar; transforma correções em regras no nível certo; propõe até 2 melhorias testadas.","Decidir hoje","regras 2 · skills 1"),
 ("novo-cartucho","Setor novo","Faz a máquina entrar em qualquer setor que dependa de imagem: pesquisa e preenche o que é sagrado, o que é proibido, as dores, a métrica e os testes.","Seu sim antes do uso","1"),
]

def read(p): return open(p, encoding="utf-8").read()
def body_of_skill(t):
    parts = t.split("---", 2)
    return parts[2] if len(parts) == 3 else t
def wrap_tables(h): return h.replace("<table>", '<div class="tblwrap"><table>').replace("</table>", "</table></div>")
def ncasos(name): return len(re.findall(r"^## ", read(f"{KIT}/skills/{name}/testes/CASOS.md"), re.M))

cards, details = [], []
for name, etapa, desc, portao, nivel in SK:
    n = ncasos(name)
    cards.append(f'<div class="card"><span class="k">Etapa {etapa}</span><h3>{name}</h3><p>{desc}</p>'
                 f'<div class="meta"><span class="chip warn">{portao}</span><span class="chip info">nível {nivel}</span><span class="chip ok">{n} testes</span></div>'
                 f'<a href="#sk-{name}">Ler a skill inteira</a></div>')
    skill = wrap_tables(md(body_of_skill(read(f"{KIT}/skills/{name}/SKILL.md"))))
    testes = wrap_tables(md(read(f"{KIT}/skills/{name}/testes/CASOS.md").split("\n",1)[1]))
    details.append(f'<details class="sk" id="sk-{name}"><summary><b>{name}</b><span>Etapa {etapa} · {portao} · {n} testes</span></summary>'
                   f'<div class="doc">{skill}<div class="tests"><h4>Os testes desta skill</h4>{testes}</div></div></details>')

docs = {}
for key, path in [("metas","HQ/METAS.md"),("orq","HQ/maquina/ORQUESTRADOR.md"),("amb","HQ/maquina/AMBICAO.md"),("ciclo","HQ/maquina/CICLO.md"),("pil","HQ/maquina/PILOTOS.md"),("cart","HQ/modelos/cartucho/CARTUCHO.md"),("proj","HQ/modelos/projeto/LEIA-ME.md"),("brief","HQ/modelos/projeto/BRIEFING.md"),("usar","HQ/COMO-USAR.md"),("cart2","HQ/maquina/CARTEIRA.md"),("espec","ESPECIFICACAO.md")]:
    docs[key] = wrap_tables(md(read(f"{KIT}/{path}")))

leia = read(f"{KIT}/LEIA-ME.md")
tree = re.search(r"```\n(kit-fluxo/.*?)```", leia, re.S).group(1)
integ = wrap_tables(md(leia.split("## Antes de instalar: cruzar com o Organismo v2",1)[1].split("O pedido pronto",1)[0]))

def doc_panel(id_, title, sub, key):
    return f'<details class="sk" id="{id_}"><summary><b>{title}</b><span>{sub}</span></summary><div class="doc">{docs[key]}</div></details>'

body = f"""
<div class="wrap">
<nav class="side" aria-label="Seções">
  <p>A máquina</p>
  <a href="#topo"><span class="n">00</span>O que é</a>
  <a href="#trabalho"><span class="n">01</span>Um trabalho, do início ao fim</a>
  <a href="#skills"><span class="n">02</span>As 9 skills</a>
  <a href="#metas"><span class="n">03</span>Metas e autonomia</a>
  <a href="#ferramentas"><span class="n">04</span>Ferramentas de conta</a>
  <a href="#melhoria"><span class="n">05</span>Como ela melhora</a>
  <a href="#setores"><span class="n">06</span>Qualquer setor</a>
  <a href="#testes"><span class="n">07</span>Testes</a>
  <a href="#usar"><span class="n">↗</span>Como usar</a>
  <a href="#organizacao"><span class="n">08</span>Organização</a>
  <a href="#organismo"><span class="n">09</span>Fusão com o Organismo</a>
  <a href="#falta"><span class="n">10</span>O que falta</a>
</nav>
<main>

<header id="topo">
  <p class="eb">21/10/2026 · Locatelli Studio, SOL Destinos e qualquer negócio que dependa de imagem</p>
  <h1>A máquina: <em>o humano cria, ela executa e melhora</em></h1>
  <p class="lede">Tudo o que construímos na nuvem, em linguagem simples: as 9 skills por inteiro, as metas, a escada de autonomia, as ferramentas que medem, o ciclo que faz a máquina melhorar todo dia, os testes e como ela vai se fundir ao Organismo Operador no seu computador.</p>
  <div class="verdict">
    <div><b>Você cria e decide.</b><span>A ideia, o roteiro bom, os 4 portões e o olho final são seus. É isso que vale na entrega.</span></div>
    <div><b>Ela executa sozinha.</b><span>Persegue metas, não tarefas. Só te chama nos portões e nas exceções, num lugar só: o “Decidir hoje”.</span></div>
    <div><b>Ela melhora todo dia.</b><span>Cada sim, corrige e não seu vira regra. Uma melhoria só entra se passar nos testes e tiver o seu sim.</span></div>
  </div>
</header>

<section id="trabalho">
  <p class="eb"><span class="n">01</span>O caminho de qualquer trabalho</p>
  <h2>Um trabalho, do início ao fim</h2>
  <p class="intro">Vale para uma campanha, um catálogo, um vídeo de pousada ou o lançamento de qualquer produto. Os quadros verdes são seus.</p>
  <div class="pipe">
    <div class="h"><b>Você · A</b>Pedido com a métrica de sucesso e o que não pode mudar.</div>
    <div><b>Máquina · B–G</b>Pesquisa, 10 ideias óbvias descartadas, 6 lentes, roteiros medianos.</div>
    <div class="h"><b>Você · Portões 1 e 2</b>Escreve o pitch e o roteiro bom; aprova pessoa, produto e lugar.</div>
    <div><b>Máquina · H–L</b>Fichas, ângulos, ensaio, storyboard e rascunhos baratos em 480p.</div>
    <div class="h"><b>Você · Portões 3 e 4</b>Aprova o corte em até 7 dias e o conjunto final.</div>
    <div><b>Máquina · M–R</b>Final só do que entrou, Guardião, entrega, leitura do resultado, aprendizado.</div>
  </div>
  <p class="source">O mapa completo de 18 etapas está na página “Fluxo de A a Z”. Cada projeto vive numa pasta com um <code>JOB.json</code> que diz onde ele está, quanto custou e o que você decidiu.</p>
</section>

<section id="skills">
  <p class="eb"><span class="n">02</span>Tudo o que a máquina sabe fazer</p>
  <h2>As 9 skills</h2>
  <p class="intro">Sete de produção, que vieram do método do estúdio Human (vídeo 8) somado às suas regras, e duas que fazem a máquina crescer. Abaixo dos cartões, cada skill está por inteiro, com os testes que ela precisa passar.</p>
  <div class="cards">{''.join(cards)}</div>
  {''.join(details)}
</section>

<section id="metas">
  <p class="eb"><span class="n">03</span>De esteira para orquestrador</p>
  <h2>Metas e autonomia</h2>
  <p class="intro">Em vez de pedir etapa por etapa, você escreve uma meta com um teste (“toda campanha aprovada chega ao Portão 3 sozinha”). A máquina persegue a meta e só ganha mais liberdade quando prova que acerta.</p>
  <div class="ladder">
    <div><span class="lv">0</span><h3>Manual</h3><p>Você pede, ela faz.</p></div>
    <div><span class="lv">1</span><h3>Rascunho + seu sim</h3><p>Trabalha sozinha e para na fila antes de entregar, publicar ou gastar.</p></div>
    <div><span class="lv">2</span><h3>Com amostragem</h3><p>Segue sozinha; 20% sorteados e tudo com nota baixa vão para você.</p></div>
    <div><span class="lv">3</span><h3>Com auditoria</h3><p>Segue sozinha com resumo diário. Desce no primeiro erro grave.</p></div>
  </div>
  <p class="source">Sobe de nível só com 10 aprovações seguidas sem correção e o juiz concordando com você em pelo menos 90% de 20 casos. Quem sobe é você. Nunca sozinha, em nenhum nível: rosto de pessoa real fora de ficha aprovada, verba de mídia, primeira mensagem a cliente novo, preço ou disponibilidade fora da tabela.</p>
  {doc_panel("doc-metas","METAS.md","o arquivo que a máquina lê antes de tudo","metas")}
  {doc_panel("doc-orq","ORQUESTRADOR.md","modelo de meta e as 6 metas prontas","orq")}
  {doc_panel("doc-amb","AMBICAO.md","altitude, profundidade, abrangência","amb")}
  {doc_panel("doc-cart2","CARTEIRA.md","grátis antes do pago: Flow, Gemini e quando pagar","cart2")}
</section>

<section id="ferramentas">
  <p class="eb"><span class="n">04</span>Profundidade</p>
  <h2>Ferramentas de conta, não de opinião</h2>
  <p class="intro">Quem gera não julga. Onde dá para medir, a máquina mede.</p>
  <div class="finds">
    <div><span class="l">delta_e.py · Guardião</span><h3>A cor do produto, em número</h3><p>Compara a mesma área na foto real e na gerada pela fórmula da indústria (ΔE2000). Abaixo de 2 aprova, de 2 a 5 ajusta, acima de 5 reprova. Vira prova no relatório do cliente.</p>
      <div class="out">referência #B42828  Lab(40.2, 55.0, 35.5)
gerada     #B02E2C  Lab(40.2, 51.9, 32.9)
ΔE2000 = 1.07 → APROVADO</div></div>
    <div><span class="l">vencedor.py · Analista</span><h3>Venceu de verdade ou foi sorte?</h3><p>Só declara vencedor com 95% de chance e pelo menos 30 eventos de cada lado. É o que torna justa a cobrança por criativo vencedor.</p>
      <div class="out">controle : 10/800 = 1.25%
variante : 18/800 = 2.25%
chance de a variante ser melhor: 93.4%
ganho provável: +75% (90% entre -5% e +234%)
VEREDITO: CEDO DEMAIS (menos de 30 eventos num dos lados)</div></div>
    <div><span class="l">motor.py · Orquestrador</span><h3>O projeto anda sozinho até o portão</h3><p>Um comando faz a próxima etapa com teto de gasto e para em cada portão. Você responde com um comando de decisão, que libera ou devolve a etapa e alimenta o ciclo de melhoria.</p>
      <div class="out">OK: Rascunhos 480p e corte (L) · custo US$ 0.80
PAROU no PORTÃO 3 · corte em 480p: aguardando o Carlo
NÃO RODOU: final 1080p bloqueado: prazo de 7 dias venceu</div></div>
    <div><span class="l">trava_portoes.py · Dentro do Claude Code</span><h3>Ninguém grava o final sem o seu sim</h3><p>Qualquer sessão que tente gravar na pasta do final ou da entrega sem o portão aprovado é bloqueada na hora.</p></div>
    <div><span class="l">melhoria.py · Ciclo</span><h3>O placar e as regras</h3><p>Lê todas as suas decisões em todos os projetos, calcula o placar de cada meta, agrupa as correções em regras e avisa de gasto alto e de rascunho perto de vencer.</p></div>
    <div><span class="l">Conselho de 6 lentes · Abrangência</span><h3>Seis olhares ao mesmo tempo</h3><p>Diretor de arte, mídia, cliente final, jurídico, plataforma e financeiro leem a ideia antes do Portão 1 e as peças no Guardião. Você recebe tudo numa tela.</p></div>
  </div>
</section>

<section id="melhoria">
  <p class="eb"><span class="n">05</span>O dia 30 melhor que o dia 1</p>
  <h2>Como ela melhora sozinha</h2>
  <div class="plan">
    <div class="step"><span class="i">1</span><div><h3>Você decide</h3><p>Cada sim, corrige ou não vira uma linha no projeto, com o motivo e uma etiqueta curta (cor, texto, forma, lugar, pessoa, promessa).</p></div><div class="r"><span class="chip ok">segundos</span></div></div>
    <div class="step"><span class="i">2</span><div><h3>O script conta</h3><p>Placar das metas, regras candidatas, alertas. Sem IA.</p></div><div class="r"><span class="chip info">todo fim de dia</span></div></div>
    <div class="step"><span class="i">3</span><div><h3>A IA escreve e propõe</h3><p>Regras no nível certo e até 2 melhorias de skill com antes e depois, já testadas.</p></div><div class="r"><span class="chip info">skill melhoria-diaria</span></div></div>
    <div class="step"><span class="i">4</span><div><h3>Você aprova numa tela</h3><p>No “Decidir hoje”. Nada muda em skill sem o seu sim.</p></div><div class="r"><span class="chip warn">~5 minutos</span></div></div>
  </div>
  <div class="tw" style="margin-top:20px"><table>
    <thead><tr><th>Quando o erro aparece</th><th>A regra passa a valer para</th></tr></thead>
    <tbody>
      <tr><td>Num cliente</td><td>Aquele cliente</td></tr>
      <tr><td>Em 3 clientes do mesmo setor</td><td>O setor inteiro</td></tr>
      <tr><td>Em 3 setores</td><td>A máquina toda</td></tr>
    </tbody>
  </table></div>
  <p class="source">Toda segunda: aprovação de primeira, correções por entrega, custo por entrega, tempo até o Portão 3 e concordância do juiz. Se algum piorar, ela aponta qual mudança da semana pode ter causado.</p>
  {doc_panel("doc-ciclo","CICLO.md","o ciclo de melhoria por inteiro","ciclo")}
</section>

<section id="setores">
  <p class="eb"><span class="n">06</span>Um núcleo, qualquer mercado</p>
  <h2>Qualquer setor que dependa de imagem</h2>
  <p class="intro">O núcleo não muda. O que é de cada setor mora num cartucho, criado pela skill <code>novo-cartucho</code> quando um setor novo aparece: o que é sagrado na imagem e como conferir, o que não se pode dizer, onde estão as dores, a métrica de dinheiro e os testes.</p>
  {doc_panel("doc-cart","Modelo de cartucho","o que todo setor preenche","cart")}
  {doc_panel("doc-proj","Modelo de projeto","a pasta que todo trabalho copia","proj")}
  {doc_panel("doc-brief","BRIEFING.md","o pedido, com métrica e portões","brief")}
  {doc_panel("doc-pil","PILOTOS.md","os 3 primeiros trabalhos de ponta a ponta","pil")}
</section>

<section id="testes">
  <p class="eb"><span class="n">07</span>Nada piora sem você saber</p>
  <h2>Testes</h2>
  <div class="finds">
    <div><span class="l">Ferramentas</span><span class="big">9 de 9</span><p>O motor leva um projeto de ponta a ponta e respeita todas as travas; a cor bate com os pares oficiais da norma CIEDE2000; vencedor, perdedor e “cedo demais” saem certos; a melhoria promove regras e emite alertas.</p></div>
    <div><span class="l">Skills</span><span class="big">48 casos</span><p>Nas 9 skills, todos genéricos. Exemplos: sem contrato não monta a ficha de pessoa; não gera 1080p antes do OK; nada muda em skill sem o seu sim.</p></div>
  </div>
  <p class="source">Comando único: <code>python3 HQ/testes/rodar.py</code>. Os casos que precisam de IA rodam no computador, cada um julgado por um juiz separado. Uma melhoria só chega até você se nenhum teste que passava começar a falhar.</p>
</section>

<section id="usar">
  <p class="eb"><span class="n">↗</span>De qualquer lugar</p>
  <h2>Como usar no dia a dia</h2>
  <p class="intro">A máquina mora no repositório, não num computador: funciona no notebook, no computador ou numa sessão na nuvem. Só precisa de Python.</p>
  {doc_panel("doc-usar","COMO-USAR.md","os comandos do dia a dia","usar")}
</section>

<section id="organizacao">
  <p class="eb"><span class="n">08</span>Cada coisa no seu lugar</p>
  <h2>Organização</h2>
  <p class="intro">O kit já está organizado como vai ficar no seu computador: <code>skills/</code> vai para a pasta de skills do Claude Code e <code>HQ/</code> se junta ao HQ que você já tem.</p>
  <pre class="tree">{html.escape(tree)}</pre>
</section>

<section id="organismo">
  <p class="eb"><span class="n">09</span>Um único organismo</p>
  <h2>Fusão com o Organismo Operador</h2>
  <p class="intro">No computador, o Claude compara antes de copiar. Onde a máquina repete algo que o Organismo já tem, as duas partes viram uma só.</p>
  {doc_panel("doc-espec","ESPECIFICACAO.md","leia primeiro: o que é, o que não é, como integrar e o registro de tudo o que entrou","espec")}
  <div class="doc" style="padding:0;border:0">{integ}</div>
</section>

<section id="falta">
  <p class="eb"><span class="n">10</span>Para terminar na nuvem</p>
  <h2>O que falta construir</h2>
  <div class="plan">
    <div class="step"><span class="i">1</span><div><h3>Ciclo de melhoria diária</h3><p>Script, skill, regras por nível, modelo de cartucho.</p></div><div class="r"><span class="chip ok">pronto</span></div></div>
    <div class="step"><span class="i">2</span><div><h3>Testes de cada skill</h3><p>48 casos e as ferramentas testadas.</p></div><div class="r"><span class="chip ok">pronto</span></div></div>
    <div class="step"><span class="i">3</span><div><h3>Motor das metas</h3><p>Leva cada projeto até o próximo portão com teto de gasto, registra custo e decisões. Testado de ponta a ponta.</p></div><div class="r"><span class="chip ok">pronto</span></div></div>
    <div class="step"><span class="i">4</span><div><h3>Portões em código</h3><p>No motor e como trava dentro do Claude Code: sem final sem Portão 3, sem passar do prazo de 7 dias, sem passar do teto, sem entrega sem Portão 4.</p></div><div class="r"><span class="chip ok">pronto</span></div></div>
    <div class="step"><span class="i">5</span><div><h3>Calibragem do juiz</h3><p>Você marca 50 peças e a máquina mede quanto o Guardião concorda com você.</p></div><div class="r"><span class="chip warn">próximo</span></div></div>
    <div class="step"><span class="i">6</span><div><h3>Pacote de passagem</h3><p>Um arquivo com o pedido pronto para o Claude do computador cruzar tudo com o Organismo.</p></div><div class="r"><span class="chip info">por último</span></div></div>
  </div>
</section>

<footer>Gerado a partir dos arquivos reais do kit (skills, testes, metas, modelos e documentos da máquina) no repositório locatelli-studio, branch claude/admiring-ptolemy-1b8xck, pasta pesquisa/videos-ia-2026-10/kit-fluxo. Quando o kit mudar, esta página é gerada de novo.</footer>
</main>
</div>
"""
open(BASE + "/maquina.html", "w", encoding="utf-8").write(head + extra + body)
print("ok", len(head + extra + body))
