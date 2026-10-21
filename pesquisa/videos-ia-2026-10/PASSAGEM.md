# Passagem para o Claude Code do computador

**Para o Carlo:** você não precisa baixar nada à mão. O Claude Code do computador acessa o GitHub sozinho. Abra o Claude Code na pasta onde está o Organismo e cole o pedido abaixo, inteiro.

---

## O pedido (copiar e colar)

```
Vamos trazer para cá a máquina que construí numa sessão na nuvem.

1. BAIXAR
   O material está no GitHub: repositório carlolocatelli3-eng/locatelli-studio,
   branch claude/admiring-ptolemy-1b8xck, pasta pesquisa/videos-ia-2026-10/.
   Se ainda não existe um clone desse repositório neste computador, clone numa
   pasta separada do Organismo (não misture ainda). Se já existe, faça
   git fetch e git checkout da branch.

2. LER, NESTA ORDEM
   - pesquisa/videos-ia-2026-10/kit-fluxo/ESPECIFICACAO.md  (leia primeiro)
   - pesquisa/videos-ia-2026-10/kit-fluxo/LEIA-ME.md         (mapa)
   - as skills em kit-fluxo/skills/ e os documentos em kit-fluxo/HQ/maquina/
   - pesquisa/videos-ia-2026-10/FLUXO-A-Z.md e CRUZAMENTO-PLAYBOOK.md

3. TESTAR
   Rode: python3 pesquisa/videos-ia-2026-10/kit-fluxo/HQ/testes/rodar.py
   e me diga o resultado.

4. INVENTÁRIO DO QUE JÁ EXISTE AQUI
   O Organismo e o painel (localhost:8790), o Criar maestro com os 8 processos,
   as skills instaladas em ~/.claude/skills, as pastas HQ e de clientes,
   o HyperFrames.

5. TABELA DE SOBREPOSIÇÃO
   Para cada uma das 13 melhorias da ESPECIFICACAO.md (seção 3), diga:
   onde ela entra nos 8 processos, o que já existe parecido aqui e a sua
   proposta (juntar, acrescentar ou deixar de fora), sempre com o porquê.
   Regra: nada duplicado. O maestro continua sendo o executor.

6. NÃO ALTERE NADA AINDA
   Me mostre a tabela e um plano em passos. A primeira mudança proposta deve
   ser: fazer os 8 processos registrarem cada aprovação, correção e recusa
   minha (data, processo, veredito, motivo, tags), no formato "decisoes"
   do kit-fluxo/HQ/modelos/projeto/JOB.json.

7. Sem chaves de API nem senhas em nenhum arquivo do repositório.
```

---

## Depois que o Claude do computador mostrar o plano
1. Você aprova (ou corrige) a tabela.
2. Ele liga o registro de decisões nos 8 processos.
3. Uma melhoria por vez, cada uma com teste e o seu sim. A ordem sugerida:
   - rosto consistente;
   - Guardião com cor medida;
   - pitch com 6 lentes;
   - carteira (Flow, Gemini, HyperFrames);
   - ciclo de melhoria diária.
4. O **Piloto 0** (você como primeiro case) testa tudo de ponta a ponta.

## Para continuar trazendo coisas novas
Pode trazer para o Claude do computador. A regra está no fim da `ESPECIFICACAO.md`:
1. cruzar com o que existe;
2. colocar no lugar certo;
3. criar o teste;
4. registrar a entrada;
5. rodar os testes.

## Onde ver tudo de qualquer lugar
- GitHub: https://github.com/carlolocatelli3-eng/locatelli-studio/tree/claude/admiring-ptolemy-1b8xck/pesquisa/videos-ia-2026-10
- Página da máquina: https://claude.ai/artifact/EcKy23ZgJwpaojW6mEFcUg
