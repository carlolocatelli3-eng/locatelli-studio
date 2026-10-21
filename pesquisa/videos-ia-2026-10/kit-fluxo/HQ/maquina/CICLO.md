# O ciclo de melhoria diária

**Para que serve:** fazer a máquina melhorar sozinha a cada dia, em qualquer setor, com o mínimo de tempo do Carlo. O humano cria e dá o olho final; a máquina executa e aprende com cada "sim", "corrige" e "não".

## O laço
```
Carlo aprova / corrige / recusa na fila
        │  (vira uma linha em "decisoes" do JOB.json, com tags e motivo)
        ▼
melhoria.py (todo dia, sem IA, só conta)
        │  placar das metas · regras candidatas por nível · alertas
        ▼
skill melhoria-diaria (IA)
        │  escreve as regras no nível certo · propõe até 2 melhorias de skill
        │  roda os testes · descarta o que piora
        ▼
"Decidir hoje" (1 tela, ~5 minutos do Carlo)
        │  aprova a melhoria · decide subida de nível
        ▼
skills e regras atualizadas → o próximo trabalho já sai melhor
```

## Três níveis de regra, o mesmo para qualquer setor
| Nível | Quando | Onde fica |
|---|---|---|
| Cliente | O erro apareceu num cliente | `CLIENTES/<cliente>/REGRAS.md` |
| Setor | Apareceu em 3 clientes do mesmo setor | `HQ/cartuchos/<setor>/CARTUCHO.md`, seção 7 |
| Geral | Apareceu em 3 setores | `HQ/REGRAS-GERAIS.md` |

É assim que um erro corrigido num cliente protege o setor inteiro, e um erro visto em três setores protege a máquina toda.

**Exemplo (com dados de teste):**
- A tag "cor" apareceu em 3 setores e virou regra geral.
- A tag "rótulo" apareceu em 3 clientes do mesmo setor e virou regra do setor.
- A tag "planta" apareceu num cliente só e ficou como regra dele.

## Como sabemos que a máquina está melhorando (5 números, toda segunda)
1. **Aprovação de primeira:** % do que o Carlo aprova sem corrigir. Deve subir.
2. **Correções por entrega:** deve cair.
3. **Custo por entrega:** deve cair ou ficar estável.
4. **Tempo até o Portão 3:** deve cair.
5. **Concordância juiz × Carlo:** deve subir. É o que libera a subida de nível.

## Agenda
- **Todo dia, ao fim do expediente:** `melhoria.py` + skill `melhoria-diaria`. Vira uma rotina agendada no computador.
- **Toda segunda:** retrospectiva da semana (os 5 números).
- **Quando o placar disser "pode subir":** só o Carlo sobe o nível da meta.

## Testado
O `melhoria.py` foi rodado com 6 projetos de teste em 5 setores e 25 decisões, e funcionou:
- calculou o placar;
- promoveu as regras ao nível certo;
- avisou do gasto a 90% do teto;
- avisou do rascunho 480p vencendo em 1 dia;
- marcou "pode subir" quando a sequência chegou a 12 com concordância de 95%.
