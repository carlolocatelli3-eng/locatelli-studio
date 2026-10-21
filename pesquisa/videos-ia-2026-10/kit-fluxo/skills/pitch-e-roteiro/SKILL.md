---
name: pitch-e-roteiro
description: Transforma um briefing em pitch de 1 parágrafo e roteiro plano a plano (etapas D a G do Fluxo A–Z). Descarta as 10 ideias óbvias, ajuda Carlo a escrever a ideia, destrói a ideia uma ou duas vezes e entrega roteiros medianos para Carlo reescrever. Use quando Carlo pedir ideia, conceito, pitch ou roteiro de campanha, Reels, vídeo de destino ou de pousada, para o Locatelli Studio ou para a SOL Destinos.
---

# Pitch e roteiro (etapas D–G do Fluxo A–Z)

Base: o método do Paulo Aguiar no case Fanta Halloween (vídeo 8). **A ideia e o roteiro bom são humanos.** Esta skill acelera e testa; não decide.

## Entradas
- `BRIEFING.md` da pasta do projeto (objetivo, público, prazo, verba, **métrica de sucesso**).
- `01-pesquisa/` (dores do Pesquisador de Dores, ficha do produto ou "verdade do lugar").
- Perfil de Gosto da marca ou da pousada.

## Passos

### D · As 10 ideias óbvias (para descartar)
Gere 10 ideias rápidas, de uma linha cada, sobre o briefing. Salve em `02-ideia/OBVIAS.md` com o título "Não fazer". Diga a Carlo: "estas são as que todo mundo faria". Não recomende nenhuma.

### E · O pitch (Carlo escreve; você ajuda)
Peça a Carlo a ideia dele em uma frase. Ajude a transformar em **um parágrafo**, no formato do pitch do Paulo:
- quem é o personagem e o que ele faz;
- o que o público **não** vê (o que fica fora de quadro ou em fragmentos);
- como as partes se costuram (ritmo, deslocamentos, rotina);
- a revelação final e onde o produto ou o lugar aparece inteiro.

Exemplo de referência (Fanta): "Paulo vive um caçador solitário... as latas surgem apenas em fragmentos. Somente no final, na sala de troféus, vemos a coleção completa..."

Pode citar 2 ou 3 referências que todo mundo conhece ("Constantine com The Witcher e a leveza do Pokémon"). Salve em `02-ideia/PITCH.md`.

### F · Destruir a ideia com o conselho de 6 lentes (1 ou 2 rodadas, não mais)
Leia o pitch por 6 lentes, de preferência como 6 sub-agentes separados, cada um só com a sua lente. Cada lente devolve no máximo 2 motivos de fracasso e 1 correção:
1. **Diretor de arte:** tem gosto? é difícil de copiar?
2. **Comprador de mídia** (na SOL, **hóspede**): para o polegar em 1 s? funciona sem som? dá vontade de reservar?
3. **Cliente final:** responde a uma dor real, nas palavras dela?
4. **Jurídico:** rótulo de IA (CONAR), o que é mostrado vincula (CDC), rosto e dados (LGPD), contrato de imagem.
5. **Plataforma:** o Meta vai rotular ou reprovar? Booking e Airbnb aceitam?
6. **Financeiro:** cabe no teto do `JOB.json`? quantas gerações em 1080p?

Junte tudo numa tela só para Carlo (o que bloqueia, o que ajustar, o que está bom). Pare depois da segunda rodada.

### G · Roteiros medianos (para Carlo reescrever)
Escreva 2 versões de roteiro em tabela, no formato do Docs do Paulo:

| Nº | Tipo | Descrição do plano | Quadros (3) |
|---|---|---|---|
| 10 | CAPTURA / CENA | ação, câmera, luz, som, o que fica oculto | 3 frases curtas, uma por quadro |
| 11 | PONTE | deslocamento ou rotina que liga as cenas | ... |

Regras:
- Alterne **cenas principais** e **pontes** para dar ritmo de trailer.
- O produto (peça, lata, quarto) só aparece **inteiro** no final ou no momento de revelação.
- Marque `[ATIVO: nome]` sempre que um plano usar um ativo (personagem, peça, carro, cenário). Essa lista vira a etapa H–J.
- Diga a Carlo: "estas são versões medianas; o roteiro bom é o seu". Salve em `02-ideia/ROTEIRO-v1.md`.

## Adaptação por negócio
- **Locatelli Studio:** o produto é a **peça sagrada**. Nada de alterar cor, estampa ou caimento para servir à história. Ganchos de abertura vêm das frases reais do Pesquisador de Dores. Use a lista negra de alegações do cartucho do setor.
- **SOL Destinos:** o protagonista é o lugar ou a experiência. **Nada de amenidade que não existe** (confira a "verdade do lugar"). Pessoas podem ser hóspedes reais com autorização. O fim mostra o lugar inteiro e uma chamada para o WhatsApp da Vera com o código do anúncio.

## Saída e portão
Entregue `PITCH.md` e `ROTEIRO-v1.md`, com a lista de ativos. **Portão 1:** nada segue para ativos sem o "sim" de Carlo (e do cliente) ao pitch e ao roteiro reescrito.

Nível de autonomia: D, F e G podem rodar sozinhos (nível 2). E é sempre de Carlo.
