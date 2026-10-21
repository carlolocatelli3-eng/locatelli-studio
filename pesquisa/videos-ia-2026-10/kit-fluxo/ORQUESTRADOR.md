# De esteira para orquestrador: metas em vez de tarefas

**Data:** 21/10/2026 · a partir da imagem "A Mudança de Paradigma: De Esteira para Orquestrador" enviada pelo Carlo, cruzada com o Kit Fluxo A–Z e a escada de autonomia (`DECISOES-URGENTES.md`).

## A diferença em uma frase
- **Esteira:** você coleta, digita o prompt, a IA gera, você testa, repete. **Você é o gargalo.**
- **Orquestrador:** você define **uma meta**. A IA acessa a pasta, os registros e as ferramentas, executa, testa sozinha e resolve. **Você só volta quando a meta pede uma decisão sua.**

Isso responde ao pedido de "fluxos que eliminam a intervenção humana, sem precisar alimentar o modelo com tarefas sucessivas". O que faz isso funcionar é:
- **uma meta escrita como teste:** dá para medir se ela está sendo cumprida;
- **acesso ao que a IA precisa ver:** pasta, `JOB.json`, resultados, ferramentas;
- **um verificador separado:** Guardião e Destruidor;
- **limites claros:** gasto, o que nunca faz sozinho e quando chama você.

Sem os quatro, o orquestrador vira uma esteira mais rápida que erra em volume. Em testes, um agente que acerta 61% das tarefas numa tentativa acerta menos de 25% quando precisa acertar 8 vezes seguidas.

## Onde o seu sistema está hoje
| Parte | Hoje | Orquestrador |
|---|---|---|
| Criar (campanha) | Você pede cada etapa e aprova cada uma | A meta "campanha X pronta para o Portão 3 até sexta" e a IA percorre A–L sozinha, parando só nos portões |
| Guardião | Você chama | Roda sozinho em toda saída e só manda para você o que reprovar 2 vezes |
| Analista de Ganchos | Você manda os resultados | Toda segunda lê a conta, pausa pela regra da Meta e propõe a próxima rodada |
| Vera | Ainda não está no ar | A meta "nenhuma pergunta sem resposta em 5 min dentro da base", e o Destruidor testa toda noite |

## O formato de uma meta (modelo)
```
META: [o que precisa ser verdade, medível]
ACESSO: [pastas, arquivos, conexões que pode usar]
COMO SABER SE CUMPRIU: [o teste: número, verificador, prazo]
PODE FAZER SOZINHO: [ações permitidas]
NUNCA SOZINHO: [o que sempre chama o Carlo]
TETO: [R$ por dia ou por execução, passos máximos]
QUANDO CHAMAR O CARLO: [exceções, com motivo e ação sugerida]
RITMO: [gatilho ou agenda]
```

## Seis metas prontas

### Locatelli Studio
**S1 · "Toda campanha aprovada chega ao Portão 3 sem eu empurrar"**
- **Acesso:** a pasta do projeto (BRIEFING, `03-ativos`), as 7 skills, as conexões do Magnific, do Higgsfield e do Flow.
- **Teste:** prancha + rascunho 480p de todas as cenas, Guardião aprovado em 100% dos quadros com a peça, custo dentro do teto do `JOB.json`.
- **Sozinho:** gerar ângulos, ensaios, prancha e rascunhos; refazer o que o Guardião reprovar uma vez.
- **Nunca sozinho:** 1080p, rosto de pessoa real fora da folha aprovada, gastar além do teto.
- **Chama o Carlo:** Portão 3; reprovação dupla do Guardião; 5 dias sem o "OK" do rascunho (o prazo é de 7).

**S2 · "Sempre 3 ganchos vencedores rodando em cada cliente"**
- **Acesso:** os resultados da conta de anúncios (leitura), a skill Receita, as skills de roteiro e vídeo.
- **Teste:** 3 ou mais anúncios dentro da meta de custo por resultado, por 2 períodos seguidos.
- **Sozinho:** ler, aplicar as regras automáticas de pausa da Meta, propor e gerar substitutos em rascunho.
- **Nunca sozinho:** subir anúncio ativo, mudar verba.
- **Chama o Carlo:** quando há menos de 3 vencedores, com 3 substitutos prontos para aprovar.

**S3 · "Toda semana, 25 amostras prontas para eu só enviar"**
- **Acesso:** a lista de marcas curada por você, a skill de ângulos, os modelos de mensagem A, B e C.
- **Teste:** 25 amostras aprovadas pelo Guardião com mensagem rascunhada, toda segunda às 8 h.
- **Nunca sozinho:** enviar mensagem (veto a envio em massa).
- **Chama o Carlo:** só a fila de envio.

### SOL Destinos e Vera
**V1 · "Nenhuma pergunta de hóspede fica sem resposta em 5 minutos, dentro da base"**
- **Acesso:** a base validada da pousada e o histórico das conversas.
- **Teste:** tempo de resposta e taxa de passagem para humano; o Destruidor passa 100% toda noite.
- **Nunca sozinho:** preço fora da tabela, confirmar reserva sem disponibilidade, negar que é IA.
- **Chama a Eliete ou o dono:** toda exceção, com o resumo da conversa.

**V2 · "O dono recebe todo dia 1 quanto a Vera recuperou"**
- **Acesso:** as reservas com o código de origem e as comissões das OTAs.
- **Teste:** relatório entregue no dia 1, com cada reserva rastreável.
- **Sozinho:** tudo (nível 3).
- **Chama o Carlo:** quando há reserva sem origem clara.

**V3 · "Todo pedido de viagem recebe uma prancha em 24 h"**
- **Acesso:** o Roteiro Sol (o que cada casa declara) e a skill `pitch-e-roteiro`.
- **Teste:** prancha com fotos reais e fonte de cada informação, entregue à Eliete em 24 h.
- **Nunca sozinho:** enviar ao cliente ou cotar com fornecedor.
- **Chama a Eliete:** sempre, para revisar e enviar.

## Como passar de esteira para orquestrador sem quebrar nada
1. **Escreva a meta antes de construir.** Se não der para escrever o teste, ainda não é meta.
2. **Comece no nível 1:** a IA persegue a meta, mas para numa fila de aprovação.
3. **Suba de nível com número:** 10 acertos seguidos e um juiz que concorda com você em 90% ou mais dos casos.
4. **Uma meta nova por vez.** A primeira deve ser **S1 no Piloto 0**, porque o cliente é você e o risco é zero.

## Onde isso mora no seu computador
- **As metas:** um arquivo `METAS.md` na raiz de `HQ/`, lido pelo Claude Code no começo de toda sessão e de toda rotina agendada.
- **O estado:** o `JOB.json` de cada projeto.
- **As exceções:** o "Decidir hoje" do painel. É o único lugar onde a IA chama você.
