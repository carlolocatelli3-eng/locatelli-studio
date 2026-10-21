# Bíblia visual · [marca]

> Uma por marca, em `HQ/marcas/<marca>/`. Lida por todas as skills de imagem e vídeo, para o filme parecer feito por **uma câmera só**, e não uma colagem de IA. Convive com o Perfil de Gosto (o gosto) e com o cartucho do setor (as regras).

## 1. Câmera e lente
- **Câmera e filme de referência** (vira texto fixo nos prompts): ex.: "shot on ARRI Alexa 35" / "35mm Kodak Portra 400".
- **Lentes permitidas:** ex.: 35, 50 e 85 mm, de f/1.8 a f/2.8. Proibidas: ex.: olho de peixe.
- **Alturas de câmera:** altura dos olhos, quadril, chão (quando).
- **Movimentos:** permitidos (push-in lento, travelling lateral) e proibidos (ex.: drone).
- **3 frames-âncora aprovados** (style frames). Substituem o Pinterest como referência depois de aprovados.

## 2. Roteiro de cor e luz (por cena)
| Cena | Paleta (3 HEX) | Temperatura (K) | Hora | Direção da luz principal | Razão principal/preenchimento |
|---|---|---|---|---|---|
| | | | | | |
- Usar **sempre as mesmas palavras de luz** nos prompts da mesma cena.
- Gerar vídeo em "neutral, flat, low-contrast grade" para ter margem no tratamento de cor.

## 3. Finalização
- **LUT da marca** (.cube) em `HQ/marcas/<marca>/`.
- **Ordem no DaVinci:** balanço de branco → igualar planos → LUT → pele (qualificador) → vinheta leve.
- **Grão de filme uniforme** no filme inteiro (une planos de modelos diferentes).
- **Upscale só do corte.** Depois do upscale, tirar a nitidez artificial.
- **Rodar `delta_e.py` também depois do tratamento de cor** (a peça precisa continuar com ΔE < 2).

## 4. Som
- Trilha: biblioteca licenciada (nº da licença no Ativos, território e prazo) ou original.
- Ferramentas de música e voz (Suno, ElevenLabs): só com termos comerciais conferidos.
- Voz em torno de −14 LUFS para Reels. Aproveitar os efeitos sonoros do vídeo gerado "sem trilha". Som ambiente real quando o lugar for real.

## 5. Texto na tela (HyperFrames)
- **A IA nunca gera texto.** Todo texto entra pelo HyperFrames.
- **Fontes:** 2 licenciadas da marca, com escala fixa (título, legenda, preço).
- **Contraste e animação:** contraste mínimo de 4,5:1; animação discreta (≤ 300 ms).
- **Legenda:** até 2 linhas, até 32 caracteres por linha.

## 6. Formatos e zonas seguras
- **9:16:** deixar livre ~14% do topo, ~35% da base e ~15% da direita (a interface do Reels e do TikTok cobre essas áreas). Produto e rosto no terço central.
- **4:5 e 1:1:** gerar com folga para reenquadrar; nunca esticar.
- **Guia:** sobrepor a guia de zona segura no Portão 3.

## 7. Ritmo e gancho (anúncio)
- **Abertura:** movimento ou contraste no frame 0 (sem fade-in).
- **Primeira aparição:** produto ou rosto até 1,5 s.
- **Duração dos planos:** 0,8 a 1,5 s em anúncio; 2 a 3 s em editorial de luxo.
- **Sem som:** a peça precisa ser legível sem som.
- **Ganchos:** os 5 ganchos trocam só os 3 primeiros segundos.

## 8. Thumb
- **Imagem:** frame-chave do corte (rosto + produto).
- **Texto:** no máximo 3 palavras.
- **Leitura:** testar a leitura em 120 px.
