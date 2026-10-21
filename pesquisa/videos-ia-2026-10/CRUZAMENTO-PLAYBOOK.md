# Cruzamento: "O Playbook do Diretor de Arte IA" × a máquina

**Data:** 21/10/2026 · **Fonte:** PDF de 15 páginas que o Carlo gerou no NotebookLM a partir da live da Human Academy com o Paulo Aguiar. Todas as páginas foram lidas.

> **Atenção sobre a fonte.** Três pontos do PDF **não aparecem** na transcrição da Live 1 nem nos 73 prints: o fluxo de mapa de profundidade com o fal.ai, a tabela das versões do Nano Banana e o alerta do modelo Pro. Podem ter vindo de outra fonte do seu NotebookLM (outras lives) ou ter sido completados pela própria ferramenta. Entraram na máquina **marcados como "a testar"**, e só viram regra depois de um teste real.

## Página por página

| Pág. | Tema | O que diz | Na máquina | Veredito |
|---|---|---|---|---|
| 1 | Capa | "Processos para controle absoluto, consistência e integração hiper-realista" | — | — |
| 2 | A IA exige um novo processo | A primeira imagem é sorte; executar um briefing real é engenharia. "A IA reduz os obstáculos entre a ideia e a realidade." | Fluxo A–Z, portões, metas | **Já temos**, com mais estrutura |
| 3 | O novo pipeline | 3 fases: Fundação (roteiro com teste de estresse, character sheets), Geração (**blockout de movimento e câmera**, rascunhos 480p), Acabamento (upscale e lipsync, VFX) | Etapas A–R | **Complementa:** a etapa de *blockout* não estava explícita. **Acrescentada** à skill `video-multicena` |
| 4 | Teste de estresse do roteiro | IA para refutar a ideia; roteiros medíocres para forçar o ótimo; pitch Fanta. "A execução virou commodity; a ideia e o roteiro são o funil do talento." | `pitch-e-roteiro`, com 10 ideias descartadas e o conselho de 6 lentes | **Nós temos mais:** eles refutam com uma voz, nós com 6 lentes (jurídico, mídia, plataforma, financeiro…) |
| 5 | Engenharia da consistência | Menos é mais; detalhes isolados; **remoção de fundo para evitar contaminação de luz**; **regra de ouro: o rosto em imagem separada**, para a IA não degradar a resolução do rosto | `folha-de-personagem` (cabeça separada, closes, altura) | **Complementa:** "rosto separado em **toda** geração" e "fundo removido" viraram regras da skill |
| 6 | Multiplicação de ângulos | Imagem base → contra-plongée, plongée, olho de peixe, selfie; prompt "diretor de fotografia experimental" | `angulos-diretor-de-fotografia`, com o prompt completo e as regras de produto e de lugar real | **Nós temos mais:** o prompt inteiro mais as regras de preservação de produto e lugar |
| 7 | Matriz do Nano Banana | 2.0: escala e testes, barato, confunde sobreposições. 2.1: texto e layout. Pro: hiper-realismo; **alerta: muda o ângulo da câmera sozinho** | — | **Novo (a testar):** tabela em `video-multicena` e trava de câmera em `ensaio-por-referencia` |
| 8 | Hubs × motores | Hubs (Higgsfield, Magnific, Flora, fal.ai) são onde se opera; motores (Seedance, Nano Banana, Kling, Omni) geram o pixel. Não ficar preso a assinatura anual | Regra 7: dois fornecedores para tudo | **Já temos**. O fal.ai entra na lista de hubs |
| 9 | Fluxo do mapa de profundidade | Vídeo real → mapa de profundidade (fal.ai) → troca total (Seedance). Copia a física (movimento, tecido) e ignora luz e cenário | `vfx-sobre-video-real` só tinha o modo "plate" | **Novo e forte (a testar):** virou o **modo mapa de profundidade** da skill |
| 10 | Anatomia do prompt de movimento | [Folha] + [Ambiente] + [Vídeo de profundidade]; "use as motion blockout", "do not use gray pixels", "keep camera fixed", "focus only on silhouette" | — | **Novo:** as 4 instruções entraram no modo mapa de profundidade, com teste |
| 11 | O truque do rascunho 480p | Tudo em 480p → editar → escolher → 1080p só do escolhido; a seed fica guardada 7 dias | `video-multicena`, o motor e a trava (prazo de 7 dias em código) | **Nós temos mais:** eles avisam; nós bloqueamos em código |
| 12 | Física do lipsync | Áudio + ambiente + folha; gravar o áudio na condição física da cena (andando, sentado, ofegante) | `video-multicena` (áudio na mesma situação) | **Já temos** |
| 13 | VFX e construção de mundo | Prompt temporal: "a partir dos 2 segundos, raízes e folhas crescem… mantendo o personagem intacto" | `vfx-sobre-video-real` (TIMING + PRESERVATION) | **Já temos.** O exemplo deles entrou como modelo de TIMING |
| 14 | Genjutsu: troca de personagem | Captação caseira → controle de movimento → substituição; dublês virtuais com a imperfeição do movimento humano real | `vfx-sobre-video-real` (troca de personagem) + contrato no Ativos | **Complementa:** "o movimento real vale ouro" entrou no blockout. Nós temos o contrato, que eles não têm |
| 15 | Pós-produção híbrida | Ferramentas ficam obsoletas em meses; o método permanece; o futuro é a fusão de captação física e IA | Pilar Campanha Híbrida; regra dos dois fornecedores | **Já temos**: é o seu posicionamento |

## Resumo: eles são melhores, nós somos melhores, ou se complementam?
**Se complementam.** O playbook é **técnica de produção**. A máquina é **técnica de produção + sistema + negócio**.

**O que eles tinham e nós não (agora acrescentado):**
1. **Mapa de profundidade** para troca total de personagem ou ambiente sem contaminar luz e cenário (págs. 9 e 10). É o maior ganho. Abre a troca de pessoa filmada por modelo licenciada com o movimento real.
2. **Blockout** como etapa explícita de movimento e câmera antes do rascunho (págs. 3 e 14).
3. **Rosto separado em toda geração** e **fundo removido** (pág. 5).
4. **Escolha de modelo por tarefa**, com a trava de câmera no Pro (pág. 7).

**O que nós temos e eles não:**
- metas em vez de tarefas, escada de autonomia e motor;
- portões travados em código (o prazo de 7 dias deles é aviso; o nosso é bloqueio);
- Guardião com número (cor) e Analista com número (vencedor);
- conselho de 6 lentes, inclusive jurídico e plataforma;
- contrato, consentimento e repasse antes de usar rosto de pessoa real;
- cartuchos para qualquer setor;
- ciclo de melhoria diária e testes (agora 48 casos).

## O que mudou no kit
- `vfx-sobre-video-real`: modo mapa de profundidade e exemplo de prompt temporal. +1 teste.
- `video-multicena`: etapa de blockout e tabela de modelos. +1 teste.
- `folha-de-personagem`: rosto separado em toda geração e fundo removido. +1 teste.
- `ensaio-por-referencia`: trava de câmera para o Pro. +1 teste.
- `angulos-diretor-de-fotografia`: nota sobre o modelo.
- Testes: **9 de 9 nas ferramentas, 48 casos nas skills, tudo passou.**

## Para testar no primeiro trabalho real
1. **Mapa de profundidade × modo plate**, no mesmo vídeo. Registrar no `JOB.json` qual saiu melhor; o ciclo de melhoria compara.
2. **Nano Banana Pro com e sem a trava de câmera.** Confirmar se ele de fato muda o ângulo sozinho.
3. **Rosto separado × só a folha.** Medir se o rosto deriva menos.
