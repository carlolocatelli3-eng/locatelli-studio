# Agentes do Locatelli Studio e da SOL

Quatro agentes que rodam dentro do Claude Code, neste repositório, e fecham o ciclo de anúncios: pesquisar, escrever, conferir e aprender. Servem para moda (Locatelli Studio) e para pousadas (SOL + Vera).

A regra de sempre: **o agente propõe, o Carlo decide.** Nenhum agente publica, pausa anúncio, mexe em verba ou manda nada ao cliente.

## Os agentes

| Agente | Quando usar | O que entrega |
|---|---|---|
| `pesquisador-de-dores` | Cliente novo, coleção ou temporada nova, ou quando precisa de DNA novo | Frases reais do comprador ou hóspede, matriz de personas, mapa da Ad Library |
| `roteirista-de-ganchos` | Depois da pesquisa e toda semana | 10 conceitos com roteiro, gancho e receita |
| `guardiao-da-marca` | Antes de qualquer peça sair | APROVADO, AJUSTAR ou REPROVAR, e o registro das suas decisões |
| `analista-de-ganchos` | Toda segunda-feira | O que funcionou, o que pausar e os próximos 10 pela regra 80/20 |

Skills que eles usam, em `.claude/skills/`:
- `conceitos-anuncio-moda`
- `conceitos-anuncio-pousada`
- `portao-da-marca` (com o modelo de Perfil de gosto)

## Como começar um cliente

1. Copie `clientes/_modelo/` para `clientes/<nome-do-cliente>/`.
2. Preencha `perfil-de-gosto.md`. Pode pedir: "use o guardiao-da-marca para montar o perfil de gosto da pousada X a partir do Instagram e do site".
3. Peça: "use o pesquisador-de-dores para o cliente <nome>".
4. Peça: "use o roteirista-de-ganchos para o cliente <nome>".
5. Escolha os conceitos, produza as peças e salve na pasta do cliente.
6. Peça: "use o guardiao-da-marca para conferir as peças do cliente <nome>".

## Ciclo semanal

Toda segunda-feira:
1. Exporte os números da semana (Meta, Google e, na pousada, as conversas da Vera por código) para `clientes/<nome>/resultados.csv`.
2. Rode `/ciclo-semanal <nome>`.

## Arquivos de cada cliente

```
clientes/<nome>/
  perfil-de-gosto.md   identidade, regras e registro de decisões
  receitas.csv         um criativo por linha, com código e status
  resultados.csv       números por código e por semana
  pesquisa/            saída do pesquisador-de-dores
  conceitos/           saída do roteirista-de-ganchos
  portao/              saída do guardiao-da-marca
  relatorios/          saída do analista-de-ganchos
```

O código de cada criativo liga tudo: a receita, o anúncio, a conversa na Vera e o resultado.

## Status de uma receita

`proposto` → `aprovado-portao` / `ajustar` / `reprovado` → `aprovado-carlo` / `recusado-carlo` → `no-ar` → `pausado`

## Próximo degrau (quando houver 3 a 5 clientes pagando)

Geração direto pela API (Higgsfield ou Kie.ai + ElevenLabs), portão automático com modelo de visão e subida na Meta sempre como rascunho. Só se automatiza o que já funcionou três vezes à mão.
