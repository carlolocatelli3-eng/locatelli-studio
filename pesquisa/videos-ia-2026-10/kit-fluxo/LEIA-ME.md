# Kit Fluxo A–Z (Locatelli Studio e SOL Destinos)

Feito a partir da transcrição e dos **73 prints** do vídeo 8 (Human Academy e Paulo Aguiar), cruzado com o Organismo, os portões do Criar e a escada de autonomia.

## O que tem aqui
| Item | Para quê |
|---|---|
| `skills/` | 7 skills prontas para o Claude Code do computador |
| `modelo-projeto/` | A pasta que todo projeto copia: BRIEFING, JOB.json e as 8 subpastas das etapas |
| `PILOTOS.md` | 3 pilotos de ponta a ponta: você como primeiro case, Pacote BF, Carnaval da pousada |
| `../FLUXO-A-Z.md` e `../fluxo-a-z.html` | O fluxo completo, etapa por etapa, lado a lado Studio × SOL |
| `../transcricoes/08-prints-lote1..3.md` | O que cada print mostra, com os prompts transcritos |

## As 7 skills
| Skill | Etapa | Origem na live |
|---|---|---|
| `pitch-e-roteiro` | D–G | Case Fanta: pitch de 1 parágrafo, roteiros medíocres → roteiro bom, tabela de planos |
| `angulos-diretor-de-fotografia` | I (e amostra) | Fluxo 1: "Uma foto, outros ângulos" |
| `folha-de-personagem` | H | Fluxo 2: character sheet (rosto real, corpo gerado) |
| `folha-de-produto-e-lugar` | I–J | Pranchas de ativos do case Fanta (arma, maleta, carro, latas, cenários, QG) |
| `ensaio-por-referencia` | Ensaio | Fluxo 3: character sheet + referência + prompt |
| `video-multicena` | K–M | Fluxo 4: character sheet + áudio + prompt; rascunho 480p; 3 opções |
| `vfx-sobre-video-real` | Efeitos | Fluxo 5: Seedance 2.5 Edit, supervisor de VFX |

## Como instalar no computador
1. `git pull` na branch `claude/admiring-ptolemy-1b8xck`.
2. Copie as skills:
   ```
   cp -R pesquisa/videos-ia-2026-10/kit-fluxo/skills/* ~/.claude/skills/
   ```
3. Reinicie o Claude Code. Teste com: "use a skill angulos-diretor-de-fotografia nesta foto".
4. Para cada projeto novo:
   ```
   cp -R pesquisa/videos-ia-2026-10/kit-fluxo/modelo-projeto "CLIENTES/[cliente]/[AAAA-MM]-[projeto]"
   ```

## Conexões que o fluxo usa (conferir no computador)
- **Magnific** conecta ao Claude por MCP usando os créditos do seu plano (pela conexão, até os modelos "ilimitados" gastam crédito).
- **Higgsfield** tem MCP para o Claude (plano pago).
- **Flow** (Google) para imagem barata no Nano Banana.
- **DaVinci Resolve:** na live, o Codex religou os brutos no projeto; vale testar o mesmo com o Claude Code.

Nenhuma chave de API ou senha entra neste repositório.
