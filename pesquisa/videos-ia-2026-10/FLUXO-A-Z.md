# Fluxo de A a Z: do pedido ao resultado (Studio e SOL Destinos)

**Data:** 21/10/2026 · **Base:**
- o método do Paulo Aguiar e do estúdio Human (vídeo 8, "Da ideia ao projeto", Live 1);
- os portões do Criar no Organismo;
- a escada de autonomia da `DECISOES-URGENTES.md`.

> **Status (21/10):** completo com os **73 prints** enviados pelo Carlo. As transcrições estão em `transcricoes/08-prints-lote1..3.md`, com os prompts literais. **O kit para usar no computador** (7 skills, modelo de pasta de projeto e 3 pilotos) está em `kit-fluxo/`.

## O fluxo original do estúdio Human (slide de 44:49)
| # | Etapa | Quem faz | No nosso Fluxo A–Z |
|---|---|---|---|
| 1 | Briefing + Creative Session | Humano | A–C |
| 2 | Ideia + Direção criativa ("O Caçador de ~~Monstros~~ Latas") | Humano | D–E |
| 3 | Roteiros medíocres | IA | G (versões medianas) |
| 4 | Roteiro bom | Humano | G (Carlo reescreve) + Portão 1 |
| 5 | Criação de personagem & props | IA | H–I + Portão 2 |
| 6 | Criação dos cenários | IA | J |
| 7 | Storyboard | IA | K |
| 8 | Gerar prompts + vídeos | IA | L–M |
| 9 | Select e re-runs | Humano | Portão 3 |
| 10 | Edição, som e cor | Humano | N |
| 11 | Thumb | IA | P |

**O que acrescentamos ao fluxo deles:**
- a métrica de sucesso já no pedido (A);
- a "verdade do lugar" (C);
- a destruição da ideia (F);
- o Guardião separado (O);
- os quatro portões com o cliente;
- a leitura do resultado e a skill Receita (Q–R);
- a escada de autonomia.

**Os 5 fluxos práticos da live, que viraram skills:**
1. Variação de ângulos (FOTO + PROMPT) → `angulos-diretor-de-fotografia`
2. Character sheet (FOTOS + SKILL) → `folha-de-personagem`
3. Ensaio fotográfico (CHARACTER SHEET + REFERÊNCIA + PROMPT) → `ensaio-por-referencia`
4. A pessoa falando em outros lugares (CHARACTER SHEET + ÁUDIO + PROMPT, Seedance 2.5) → `video-multicena`
5. Efeitos visuais sobre vídeo real (VÍDEO GRAVADO + PROMPT, Seedance 2.5 Edit) → `vfx-sobre-video-real`

**Como eles operam:** tudo é comandado de dentro do app Codex, com plugins do Higgsfield, do Magnific e do DaVinci Resolve. A pessoa diz em linguagem simples ("use o seedance 2.5 pra gerar o video, upando os assets e prompt junto", "1080, 9:16", "pode gerar 3 opcs") e o agente sobe os arquivos, gera, entrega o rascunho 480p e depois religa os brutos no editor. **O equivalente no seu sistema é o Claude Code com as conexões do Magnific e do Higgsfield.**

---

## Os 7 princípios por trás do fluxo (valem para qualquer trabalho)

1. **O humano faz a ideia, e a IA faz a execução.** A execução virou commodity; ideia e roteiro valem mais. Descartar as 10 primeiras ideias da IA, porque são as que todo mundo vai fazer.
2. **Ativos antes de cenas.** Personagem, produto e cenário ficam prontos e aprovados antes de qualquer cena.
3. **Protótipo barato antes do caro.** Storyboard desenhado → rascunho de vídeo em 480p (custa 1/3 a 1/5 do final) → só então o 1080p.
4. **Aprovar no barato.** O cliente aprova no storyboard e no 480p. *"Imagina o cliente não gostar da jaqueta depois: teria que refazer todos os vídeos."*
5. **Só se produz caro o que entrou no corte.** Edita-se o filme inteiro em rascunho, e só as cenas usadas vão para 1080p.
6. **Um contexto só por projeto.** O Paulo usa uma conversa com todo o histórico. No Organismo, é uma pasta por campanha com todos os arquivos.
7. **Quem gera não julga.** O controle de qualidade é separado e tem critérios escritos.

---

## O fluxo em 5 fases e 16 etapas

### Fase 1 · Entender (A–C)
| Etapa | O que acontece | Studio (campanha de moda) | SOL Destinos (vídeo de destino ou de pousada) | Autonomia |
|---|---|---|---|---|
| **A · Pedido** | Objetivo, público, prazo, verba, **métrica de sucesso** | `BRIEFING.md`: peça, coleção, onde vai rodar, meta de CTR ou venda | Destino ou pousada, temporada (ex.: Carnaval), canal (Instagram, anúncio, Booking), meta de reservas diretas | 0 |
| **B · Pesquisa** | A IA pesquisa as fontes oficiais e as frases reais dos clientes | Pesquisador de Dores + `PRODUTO.md` (ficha técnica da peça) | O que a casa declara no próprio site (como no Roteiro Sol), avaliações de hóspedes, perguntas que chegam no WhatsApp | 2 |
| **C · Perfil** | O gosto da marca por escrito | Perfil de Gosto | **"Verdade do lugar":** lista do que existe fisicamente (quartos, vista, piscina). A IA nunca inventa amenidade | 1 |

### Fase 2 · Ideia (D–G)
| Etapa | O que acontece | Studio | SOL Destinos | Autonomia |
|---|---|---|---|---|
| **D · 10 ideias descartadas** | Pedir 10 ideias à IA e **jogar todas fora** | Roteirista de Ganchos gera as óbvias; elas viram a lista do que **não** fazer | O mesmo: "praia, pôr do sol, casal" vão para o lixo | 3 |
| **E · Pitch de 1 parágrafo** | A ideia humana em um parágrafo, com referências que todo mundo conhece | Ex.: "a mesma blusa do café da manhã ao jantar, em 3 cidades" | Ex.: "um ano na pousada em 60 segundos, uma foto por mês na mesma janela" (o hyperlapse do caso Messi aplicado ao lugar) | 0 (é você) |
| **F · Destruir a ideia** | "Por que isso floparia?", 1 ou 2 vezes, não mais | O Guardião lê o pitch | O mesmo | 2 |
| **G · Roteiro** | A IA escreve versões medianas e **você escreve o bom** | Roteiro + 5 ganchos | Roteiro + gancho para o anúncio do Carnaval | 1 |
| **🚦 Portão 1** | **O cliente aprova o pitch e o roteiro** | Portão "conceito" do Criar | Dono da pousada ou Eliete | — |

### Fase 3 · Ativos (H–J) 📷
| Etapa | O que acontece | Studio | SOL Destinos | Autonomia |
|---|---|---|---|---|
| **H · Folha de personagem** | **Rosto real com corpo gerado**, sem 300 poses, cabeça separada, close de cada detalhe único (tatuagem, pinta, joia), **altura anotada** | Modelo do acervo (Ativos, com contrato e repasse) | Hóspede ou anfitrião **real com autorização**, ou personagem licenciado. **Nunca gerar o imóvel** | 1 |
| **I · Folha de produto ou de lugar** | Todas as vistas + closes | Peça: frente, costas, lateral, etiqueta, estampa, aviamento, tecido (a "peça sagrada") | **Lugar:** fotos reais de cada ambiente, nos mesmos ângulos, de dia e à noite. A IA entra só em pessoas, clima e estação | 1 |
| **J · Cenários e objetos** | Cenários derivados da paleta; objetos "descaracterizados, livres de direito" | Cenário a partir da cor da coleção | Cenário real + continuidade (verão, chuva, Carnaval) | 2 |
| **🚦 Portão 2** | **Ficha aprovada:** casting, figurino, locação | Portão "ficha" do Criar | Dono aprova as fotos e as pessoas | — |

### Fase 4 · Protótipo e produção (K–N)
| Etapa | O que acontece | Studio | SOL Destinos | Autonomia |
|---|---|---|---|---|
| **K · Storyboard desenhado** | Quadros desenhados (o Paulo fez 60), não realistas, com a pasta de ativos | Prancha do Criar | Prancha com as fotos reais nos quadros | 2 |
| **L · Rascunho 480p do filme inteiro** | Vídeo direto dos ativos (personagem + produto + cenário + ação), sem uma imagem por cena; edição em rascunho | Seedance draft; **teste: vídeo direto dos ativos sem imagem intermediária** | Seedance ou Kling sobre as fotos reais (movimento de câmera, pessoas, clima) | 2 |
| **🚦 Portão 3** | **O cliente aprova em 480p.** O "OK" precisa sair **em até 7 dias**, ou o mesmo vídeo não pode mais virar 1080p | "Nenhum vídeo pago antes do sim" + alerta de vencimento de 7 dias | O mesmo | — |
| **M · Final só do que entrou no corte** | 1080p apenas das cenas usadas; modelos misturados por cena | Seedance no que é difícil, Kling em transição, MiniMax (10–20% do custo) em cena simples | O mesmo | 2 |
| **N · Som** | Pedir o vídeo **"sem trilha"** para aproveitar os efeitos; música licenciada em trabalho comercial | Trilha licenciada | Som ambiente real da pousada (mar, café, passarinho) + trilha licenciada | 1 |

### Fase 5 · Controle, entrega e resultado (O–R)
| Etapa | O que acontece | Studio | SOL Destinos | Autonomia |
|---|---|---|---|---|
| **O · Guardião** | Juiz separado: **fidelidade** + **conformidade** | Peça igual à real; rótulo de IA; nada de alegação proibida | Imóvel igual ao real (CDC; Airbnb e Booking proíbem IA que distorça o imóvel); rótulo de IA nas pessoas geradas | 2 |
| **🚦 Portão 4** | **Conjunto aprovado** | Portão "conjunto" do Criar | Dono aprova | — |
| **P · Entrega e desdobramento** | Todos os formatos (9:16, 1:1, 16:9), banco de imagens, cortes | Campanha + UGC + catálogo do mesmo ensaio | Reels, anúncio, fotos para Booking e Google, Roteiro Sol | 2 |
| **Q · No ar e leitura** | Anúncio sobe **pausado**; o Analista lê o resultado toda semana | CTR, custo por venda, regra 80/20 | Mensagens recebidas pela Vera com o código do anúncio → reservas diretas → R$ de comissão evitada | 3 |
| **R · Aprender** | O que venceu vira receita registrada; o que foi recusado vira regra | Skill Receita | Receita do destino (que ângulo traz reserva em cada temporada) | 3 |

---

## O mesmo fluxo para vender uma viagem (SOL Destinos, agência)

A lógica "ideia humana → protótipo barato → aprovação → só então o caro" serve também para o orçamento de viagem:

| Etapa | Na agência |
|---|---|
| A · Pedido | O que o viajante quer, datas, orçamento, quem vai |
| B · Pesquisa | O que cada pousada ou passeio declara, com fonte e data (Roteiro Sol) |
| D–E · Ideia | Descartar o roteiro óbvio; montar **uma ideia em 1 parágrafo** ("4 dias na Serra sem carro, com café colonial e um jantar de vinícola") |
| K · Protótipo | **Prancha visual do roteiro**, com as fotos reais dos lugares, dia a dia |
| 🚦 Aprovação | O viajante aprova a prancha **antes** de a Eliete cotar com os fornecedores (o "480p" da viagem) |
| M · Produção | Cotação e reserva só do que foi aprovado |
| Q–R · Resultado | Depois da viagem, fotos e depoimento do viajante (com autorização) viram conteúdo e prova |

**Ganho:** a Eliete deixa de cotar viagens que o cliente não vai fechar. A IA monta o rascunho (nível 1) e ela revisa e envia.

---

## 📷 Prints pedidos (todos recebidos em 21/10; ver `transcricoes/08-prints-lote1..3.md`)

O que falta: a **página 2 de 2** do prompt de VFX e o texto completo dos prompts que ficaram atrás de "See all". Os dois estão no portal do aluno da Human.

| # | Trecho | O que capturar | Entra na etapa |
|---|---|---|---|
| 1 | ~0:35–0:48 · caso Fanta | O pitch de 1 parágrafo, a pasta de ativos (personagem, carro, latas, cenários) e o storyboard de 60 quadros | E, H–J, K |
| 2 | ~1:01–1:10 · ângulos a partir de foto de celular | **O prompt "diretor de fotografia experimental"** inteiro e as 5 imagens geradas | I (catálogo e amostra de prospecção) |
| 3 | ~1:10–1:25 · folha de personagem | A tela da **skill** (o que ela pede), a folha gerada e a folha de produto | H, I |
| 4 | ~1:25–1:40 · Higgsfield e Magnific conectados ao chat | A tela de conexão e o pedido do ensaio com 5 referências do Pinterest | L, M |
| 5 | ~1:40–1:44 · rascunho 480p | A tela do Seedance com a opção draft e o prazo de 7 dias | L, Portão 3 |
| 6 | ~1:45–1:55 · lip sync | O prompt e as configurações (Seedance 2.5, 1080p, 9:16) | L (UGC) |
| 7 | ~2:00–2:15 · efeitos sobre vídeo real | Os prompts de troca de pessoa e do estúdio que vira floresta | L |
| 8 | Portal do aluno (link na descrição) | **As skills e os prompts do portal**, sobretudo a da folha de personagem | H, I, L |

---

## O que muda no Organismo com este fluxo
1. **O Criar ganha a etapa D** ("10 ideias descartadas") e a etapa F ("destruir a ideia") antes do Portão 1.
2. **Etapa H com checklist de captura** na diária: rosto de frente, perfil, corpo inteiro, costas, closes, altura. Já é tarefa no painel.
3. **Alerta de 7 dias** do rascunho 480p, no mesmo modelo dos vencimentos do Ativos.
4. **Teste "vídeo direto dos ativos"** numa campanha de estudo: corta a etapa de imagem por cena, se a peça sagrada aguentar.
5. **O cartucho "hotelaria"** recebe a regra: o lugar é sempre real; IA só em pessoas, clima e estação.
6. **O fluxo da agência** (orçamento por prancha antes da cotação) entra como fluxo V6 do SOL.
