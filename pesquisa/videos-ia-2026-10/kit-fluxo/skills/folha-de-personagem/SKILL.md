---
name: folha-de-personagem
description: Monta a folha de personagem (character sheet) de uma pessoa real a partir de fotos — rosto real preservado, corpo gerado, quatro vistas — para reutilizar em todo ensaio e vídeo. Use quando Carlo cadastrar uma modelo, um criador de UGC, um anfitrião ou hóspede (SOL), ou ele mesmo, no acervo do Ativos.
---

# Folha de personagem (Fluxo 2 de 5 do vídeo 8)

"Uma referência visual organizada da pessoa, para reutilizar em tudo que vem depois." A folha **define quem aparece**.

## Antes de começar (obrigatório)
- **Contrato e consentimento** registrados no Ativos: finalidade, prazo, encerramento, repasse por uso. Sem isso, não monte a folha.
- Dado biométrico é sensível pela LGPD: as fotos ficam só na pasta do personagem, nunca em serviço que treina com os dados.

## Captura (checklist da diária)
Peça à pessoa, em luz uniforme e fundo neutro:
- rosto **de frente**, **três quartos** e **perfil**;
- **corpo inteiro** de frente e **de costas** (se não houver, a costa é gerada e isso precisa estar autorizado e anotado);
- **close de cada detalhe único**: tatuagem, pinta, cicatriz, óculos, joia, relógio;
- **altura** em centímetros (anotar no arquivo; sem isso a IA inventa alturas).

Regras do Paulo: **menos é mais** (não 300 poses); **cabeça separada do corpo** na folha; detalhes únicos em close separado e **citados no prompt**.

## Montagem
1. **Rosto real:** recorte os retratos originais (frente, três quartos, perfil) sem gerar nada no rosto.
2. **Corpo gerado:** gere frente e costas do corpo com o figurino de referência, no Nano Banana 2.1, usando os retratos como referência de identidade. Prompt base:
   "Full-body studio reference of the exact adult person in the reference photos, standing neutral A-pose, front view [or back view], plain mid-grey seamless background, soft even lighting, wearing [figurino peça por peça]. Height [X] cm. Preserve face, skin tone, hair, tattoos [descrever], glasses [descrever]. No stylization."
3. **Composição:** painel em fundo cinza com FRENTE · TRÊS QUARTOS · PERFIL · CORPO INTEIRO (frente e costas). Na live, o painel saiu em 4800×1800.
4. **Closes:** uma faixa abaixo com os detalhes únicos, cada um rotulado.

Onde gerar o corpo: primeiro no Flow (Nano Banana sem crédito), pela `FILA-GOOGLE.md`; ver `HQ/maquina/CARTEIRA.md`.

## Pacote de entrega (pasta do personagem)
- `FOLHA.png` (o painel);
- `originais/` (fotos sem alteração);
- `PROMPT.md` (os prompts usados);
- `FICHA.md`: nome, altura, detalhes únicos, figurino de referência, **o que foi gerado e o que é real**, contrato e validade;
- `VERIFICACAO.md`: o Guardião compara folha × fotos originais (rosto, tom de pele, tatuagens, proporções) e marca aprovado ou refazer.

## Duas regras do Playbook que valem em toda geração
- **Rosto separado em toda geração:** além da folha, anexe sempre um close do rosto como imagem própria. Com só o corpo inteiro, a IA reduz a resolução do rosto e ele "deriva".
- **Fundo removido:** a pessoa recortada, sem o fundo da foto, evita que a luz do lugar original contamine a cena nova.

## Uso depois
Em todo ensaio e vídeo, a folha entra como **Image 1, referência única de identidade e figurino, prioridade absoluta**.

## Studio × SOL
- **Studio:** modelos do acervo e criadores de UGC. A folha é o ativo que vira licença (Ativos calcula repasse por uso).
- **SOL:** anfitrião, equipe ou hóspede real, sempre com autorização escrita. **Nunca** criar uma pessoa fictícia apresentada como hóspede real.

Nível de autonomia: 1 (rascunho + aprovação de Carlo). A folha nunca sobe de nível sem decisão explícita, porque envolve o rosto de uma pessoa real.
