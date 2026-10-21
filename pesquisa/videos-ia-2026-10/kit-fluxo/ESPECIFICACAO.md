# ESPECIFICAÇÃO · leia primeiro (para o Claude Code do computador do Carlo)

> Este arquivo diz **o que é** esta máquina, **o que ela não é** e **como ela entra** no que já roda. Toda vez que algo novo for acrescentado, ele é registrado no fim deste arquivo (seção 8).

## 1. O que já roda (não mexer sem necessidade)
- **O Claude Code é o orquestrador principal** do Carlo. O Astra (Codex/ChatGPT) é secundário e lê as mesmas regras pelo `AGENTS.md`.
- **O Criar maestro v2** roda os **8 processos sozinho**; o Carlo só aprova. Ele tem:
  - 4 portões: ficha, conceito, peça principal e conjunto;
  - a regra "nenhum vídeo pago antes do sim";
  - a recusa que vira proibição;
  - uma pasta por campanha (BRIEFING, PRODUTO, PESQUISA, CONCEITOS, CENAS, REVISÃO).
- **Painel do Organismo** (localhost:8790): Decidir hoje, Colmeia (provas), Ativos (contratos, repasse, banco de referências), Virais, Triagem.
- **HyperFrames** (HeyGen, código aberto) está instalado: o Claude escreve o vídeo em HTML (CSS, GSAP, Three.js) e renderiza em MP4 localmente.
- **Skills que já existem:** Perfil de Gosto, Pesquisador de Dores, Roteirista de Ganchos, Guardião da Marca, Analista de Ganchos (e outras).

## 2. O que esta máquina é
**Uma camada de melhoria sobre o processo que já roda. Não é um sistema novo para substituir o Criar.**

O objetivo é que o Carlo aprove menos, e que o que chega para aprovação venha melhor. O humano cria e dá o olho final; a máquina executa, mede e aprende.

## 3. As melhorias (o que cada uma faz e onde entra)
| # | Melhoria | Onde entra no que já existe | Arquivo | Situação |
|---|---|---|---|---|
| 1 | **Rosto consistente:** folha com rosto real e corpo gerado, rosto separado em toda geração, fundo removido, altura e detalhes únicos | Portão "ficha" do Criar e Ativos | `skills/folha-de-personagem` | pronta |
| 2 | **Produto e lugar fiéis**, com a cor medida em número (ΔE2000) | Guardião da Marca | `skills/folha-de-produto-e-lugar`, `HQ/ferramentas/delta_e.py` | pronta |
| 3 | **Ideia mais forte:** 10 ideias óbvias descartadas, pitch em 1 parágrafo, conselho de 6 lentes, roteiro em tabela | Antes do portão "conceito"; Roteirista de Ganchos | `skills/pitch-e-roteiro` | pronta |
| 4 | **Novas possibilidades do estudo da Human:** ângulos a partir de uma foto, ensaio por referência, vídeo multicena com áudio real, efeitos sobre vídeo real | Processos de geração do Criar | 4 skills | prontas |
| 5 | **Mapa de profundidade e blockout:** troca total de pessoa ou cenário mantendo o movimento real | Vídeo e efeitos | `skills/vfx-sobre-video-real`, `skills/video-multicena` | **a testar** |
| 6 | **Vencedor com número** (95% de chance e 30 eventos) | Analista de Ganchos | `HQ/ferramentas/vencedor.py` | pronta |
| 7 | **Aprendizado:** cada aprovação, correção e recusa vira regra (cliente → setor → geral); placar por processo; até 2 melhorias de skill testadas por dia | Hoje só a recusa vira proibição | `skills/melhoria-diaria`, `HQ/ferramentas/melhoria.py` | pronta |
| 8 | **Aprovar menos:** escada de autonomia 0–3 por processo, subida só com placar | Os 8 processos (hoje todos no nível 1) | `HQ/METAS.md`, `HQ/metas.json` | pronta |
| 9 | **Qualquer setor:** cartuchos | Perfil de Gosto (marca) convive com cartucho (setor) | `skills/novo-cartucho`, `HQ/modelos/cartucho` | pronta |
| 10 | **Grátis antes do pago:** Flow, Gemini e HyperFrames primeiro | Roteador e Agente de Margem | `HQ/maquina/CARTEIRA.md` | pronta |
| 11 | **Travas em código:** prazo de 7 dias do 480p, teto por projeto, nada em `06-final`/`07-entrega` sem portão | Complementa o "nenhum vídeo pago antes do sim" | `HQ/ferramentas/motor.py`, `trava_portoes.py` | pronta; **usar só o que o maestro não tiver** |
| 12 | **Testes:** nada muda se `python3 HQ/testes/rodar.py` falhar | Novo | `HQ/testes/` | pronta |
| 13 | **HyperFrames na montagem:** legendas, cards de produto e preço, versões de gancho, formatos 9:16, 4:5 e 1:1, vitrine em vídeo por peça, thumbs | Depois do Portão 3 (final) e para rascunhos de montagem | seção 5 abaixo | **a ligar** |

## 4. Não negociáveis (valem em tudo)
1. Os portões e o olho final são do Carlo.
2. Nenhum vídeo pago antes do sim; nenhum 1080p sem o Portão 3 dentro de 7 dias.
3. Rosto de pessoa real só com contrato e consentimento registrados (Ativos).
4. Lugar real e produto real nunca são "melhorados" pela IA.
5. Nunca publicar, enviar mensagem ou gastar verba de mídia sozinho.
6. Nada duplicado. Se já existe no Organismo, o que é novo vira parte do que existe.
7. Toda mudança passa nos testes e no sim do Carlo.

## 5. HyperFrames na máquina
- **Para que serve aqui:** a montagem que hoje é manual e repetitiva.
  - juntar os clipes gerados com legenda, marca, preço e chamada;
  - fazer as **5 versões de gancho** do Teste de Ganchos trocando só a abertura;
  - exportar **todos os formatos**;
  - montar a **Vitrine em Vídeo por peça** a partir de um modelo HTML (foto/clipe + nome + preço + chamada);
  - gerar thumbs e cards de anúncio.
- **Por que é forte:** o render é local (custo zero, entra na carteira como "grátis") e determinístico. O mesmo HTML com outro texto gera a variação sem nova geração de IA.
- **Regras:**
  - montagem de rascunho pode ir ao Portão 3 junto com o corte 480p;
  - o render final usa só clipes 1080p aprovados;
  - todo texto na tela passa pela lista negra do cartucho do setor e pelo rótulo de IA quando houver pessoa gerada.
- **A fazer no computador:**
  - criar `HQ/modelos/hyperframes/`, com 3 modelos (gancho UGC 9:16, vitrine de produto, card de anúncio);
  - criar um caso de teste por modelo.

## 6. Como integrar (ordem obrigatória)
1. Ler este arquivo, o `LEIA-ME.md` (mapa) e as skills.
2. Fazer o **inventário** do que existe no computador: os 8 processos do maestro, as skills, o painel, o HyperFrames.
3. Montar a **tabela de sobreposição**: para cada melhoria da seção 3, onde ela entra e o que já existe parecido.
4. **Mostrar ao Carlo antes de mudar qualquer coisa.**
5. Primeira mudança (a mais importante): fazer os 8 processos **registrarem cada aprovação, correção e recusa** em `decisoes` (data, processo, veredito, motivo, tags). Sem isso, o placar e o aprendizado não funcionam.
6. Depois, uma melhoria por vez, com teste e o sim do Carlo.

## 7. Pendências conhecidas
- Calibrar o juiz: Carlo marca 50 peças; medir a concordância do Guardião.
- Testar o mapa de profundidade, o Nano Banana Pro com trava de câmera e o rosto separado (ver `../CRUZAMENTO-PLAYBOOK.md`).
- Página 2 do prompt de VFX da Human (portal do aluno).
- Confirmar os termos de uso comercial do Flow e do Gemini para entrega a cliente.

## 8. Registro de entradas (tudo o que entrou na máquina, e de onde veio)
| Data | O que entrou | De onde veio |
|---|---|---|
| 19–20/10 | Estratégia, ideias novas, decisões urgentes, método universal | Os 9 vídeos e cerca de 300 buscas de pesquisa |
| 21/10 | Fluxo A–Z e 7 skills de produção | Vídeo 8 (Human Academy × Paulo Aguiar) e os 73 prints |
| 21/10 | Orquestrador (metas em vez de tarefas) | Imagem "De Esteira para Orquestrador" |
| 21/10 | Ambição: meta de negócio, ferramentas numéricas, 6 lentes | Imagem "A Anatomia da Ambição" (artigo do Felix Rieseberg) |
| 21/10 | Ciclo de melhoria, cartuchos, testes, motor, travas | Construção nesta sessão |
| 21/10 | Mapa de profundidade, blockout, rosto separado, escolha de modelo | PDF "O Playbook do Diretor de Arte IA" (NotebookLM) |
| 21/10 | Carteira (Flow e Gemini primeiro) | Planos do Carlo |
| 21/10 | HyperFrames na montagem | Ferramenta já instalada no computador do Carlo |

**Para acrescentar algo novo:**
1. Cruzar com o que já existe.
2. Colocar no lugar certo (skill, ferramenta, cartucho ou documento da máquina).
3. Criar o teste.
4. Registrar uma linha nesta tabela.
5. Rodar `HQ/testes/rodar.py`.
