# Auditoria da máquina · 21/10/2026

**Pedido do Carlo:** "faça uma auditoria de tudo que falamos, vá a fundo, use as técnicas que estamos montando, use o processo."

## Como foi feita (o próprio método da máquina)
1. **Conselho de lentes.** Seis auditores separados, cada um com uma lente só, trabalhando em paralelo:
   1. memória e completude (releu as 46 mensagens do Carlo e as respostas);
   2. consistência e organização (conferiu caminhos e números por script);
   3. engenharia (reproduziu cada erro rodando o código);
   4. negócio e dinheiro;
   5. jurídico e plataformas (com pesquisa);
   6. diretor de arte (cruzou com a transcrição de 2 h da live).
2. **Quem gera não julga.** Os auditores só apontaram; não mexeram em nada. Eu conferi cada achado antes de aplicar. Ao revisar as correções de código, achei e corrigi um problema que a própria correção criaria (a trava bloquearia caminhos com espaço, como "My Drive").
3. **Testes.** Toda mudança passou por `HQ/testes/rodar.py`. Antes: 9 testes de ferramenta e 48 casos em 9 skills. **Depois: 10 testes de ferramenta e 60 casos em 11 skills. Tudo passou.**
4. **O que é decisão do Carlo não foi decidido por mim:** está em `kit-fluxo/HQ/DECISOES-ABERTAS.md`.

## O veredito em uma frase por lente
| Lente | Veredito |
|---|---|
| Memória | A máquina cobria a conversa, mas eu tinha registrado **duas metas como decididas sem o Carlo ter aprovado**, e várias pendências ficaram só nos documentos de estratégia |
| Consistência | Coerente por dentro do kit; os problemas estavam nas bordas: **duas numerações de portão**, o motor apresentado como executor, duas "portas de entrada", IDs de fluxo trocados |
| Engenharia | **18 erros reais reproduzidos** (17 no código, 1 no teste), 6 de gravidade alta. O mais sério: o motor avançava o projeto mesmo quando o Claude não conseguia gravar nada |
| Negócio | **A máquina produzia, mas não vendia:** venda não era meta, skill nem registro; preços se contradiziam entre documentos; a meta até 15/12 não fecha como está |
| Jurídico | Regra certa (rosto só com contrato), mas **sem modelo de contrato**, e a carteira mandava gerar corpo de pessoa real no Flow de conta pessoal, sem garantia sobre dados biométricos |
| Diretor de arte | Protege bem rosto, peça e cor; faltava **o que acontece entre os planos e depois da geração**: storyboard, linguagem visual da marca, cor, finalização, texto, zonas seguras, QA além da cor |

## O que foi corrigido e aplicado (verificado e testado)
**Código (`kit-fluxo/HQ/ferramentas/`):**
- **O motor:**
  - roda o Claude com permissão de escrita;
  - só avança se não houver erro nem escrita negada;
  - relê o `JOB.json` antes de gravar, para não apagar o que o Claude escreveu;
  - exige `meta` e teto (o modelo de projeto agora tem `meta` e um aviso).
- **Prazo do Portão 3:** aprovar o portão sem o prazo de 7 dias agora grava o prazo, e sem prazo o final fica bloqueado.
- **Decisões:** o motor não registra decisão de portão fora da hora; projeto com `.DS_Store` ou `JOB.json` quebrado não derruba mais o painel.
- **A trava dos portões:**
  - pega também a cópia por Bash (cp, curl, ffmpeg);
  - normaliza o caminho e ignora maiúsculas (Mac);
  - aceita caminho com espaço (+1 teste).
- **Melhoria:** não perde mais decisões do mesmo dia e ordena pela hora.
- **Cor:** ignora o fundo transparente de PNG recortado e valida a caixa.
- **Vencedor:** valida as entradas.
- **Página:** o gerador encontra a pasta sozinho (funciona no Mac).
- **Ficou como estava, para o Carlo decidir (B2):** no portão, "corrigido" continua devolvendo a etapa.

**Jurídico:**
- `HQ/maquina/FORNECEDORES.md`: tabela de cada ferramenta (país, se treina com os dados, prazo de guarda, uso comercial, biometria). Até ser conferida, **rosto ou voz real não vão para o Flow nem para o Gemini de conta pessoal**. O Portão 4 só aprova peça de ferramenta com uso comercial confirmado.
- `HQ/modelos/contrato/CESSAO-IMAGEM-VOZ.md`: rascunho com 16 cláusulas mínimas, entre elas maioridade, finalidade fechada, fornecedores e países, guarda e apagamento, revogação, uso póstumo, voz, troca de corpo com dois termos e rótulo de IA. **Revisar com advogado.**
- **Regras novas nas skills e no `AGENTS.md`:**
  - nada com menores;
  - nada de clonar voz;
  - troca total exige o termo de quem foi filmado e o da modelo;
  - amostra de prospecção sem pessoa real;
  - referência registrada ("inspirar, não copiar");
  - pelo menos uma imagem real do produto em anúncio de venda;
  - critério de "descaracterizado" para objetos de cena;
  - rótulo de IA padrão;
  - proibido "antes e depois" gerado em saúde e estética;
  - nunca remover C2PA.

**Negócio:**
- **Skill nova `prospector-e-funil`:** amostra → mensagem → follow-up dos dias 4 e 10 → proposta com controle por escrito → sinal pago → pasta do projeto. O envio é sempre do Carlo.
- **Modelos:** `HQ/modelos/vendas/VENDAS.json` (funil) e `PROPOSTA.md`.
- **Meta S0 "Funil até o dinheiro"**, com datas (31/10, 07/11, 10/11, 20/11, 15/12), marcada **[PROPOSTA]**. A meta de negócio e a quantidade da S3 também foram marcadas como proposta.
- **Bloco `financeiro` no `JOB.json`:** preço vendido, sinal, bônus, horas do Carlo, custos, margem e reais por hora.

**Ofício (diretor de arte):**
- **Skill nova `storyboard-desenhado`** (etapa K, que estava vazia), com animatic grátis no HyperFrames.
- **`HQ/modelos/marca/BIBLIA-VISUAL.md`:**
  - câmera e lente;
  - roteiro de cor e luz;
  - LUT, grão e upscale só do corte;
  - som licenciado;
  - texto na tela;
  - zonas seguras do 9:16;
  - ritmo do gancho;
  - thumb.
- **`HQ/maquina/QA-ARTEFATOS.md`:** checklist do Guardião além da cor (mãos, olhos, texto, tecido, pele, luz, continuidade, morphing, lipsync, escala, zona segura), cada item como tag. Também tem um bloco anti-"cara de IA" para os prompts e a regra de curadoria por volume.
- **Nas skills:**
  - casting além do rosto e look por cena na folha de personagem;
  - "iterar uma mudança por rodada" no ensaio;
  - finalização, mistura de modelos sem costura e plano B do 480p no vídeo.

**Consistência e memória:**
- Tabela de equivalência dos portões (máquina × Criar) na ESPECIFICACAO.
- O motor descrito como complemento do maestro em todos os documentos.
- Uma porta de entrada só no README; o pedido antigo foi substituído pela PASSAGEM.
- Contagens e IDs alinhados, e caminhos das skills que funcionam depois de instaladas.
- Dependências (`pip3 install numpy pillow markdown`) no COMO-USAR e na PASSAGEM.
- A PASSAGEM agora pede também:
  - o inventário da branch "Caderno A a Z";
  - a conferência da skill `vera-pousadas` contra a C-08;
  - a §5 do CRUZAMENTO-ORGANISMO.
- **Todas as pendências esquecidas foram para a ESPECIFICACAO §7:**
  - ferramenta do YouTube;
  - sprint;
  - Opus × Astra;
  - skill Receita, que é citada mas não existe;
  - Destruidor da Vera;
  - cartuchos de moda e de hospedagem;
  - os textos atrás de "See all".

## O que fica para o Carlo (em ordem de urgência)
1. **Travar a oferta da Black Friday e a definição de "venda"** (DECISOES-ABERTAS A1–A2). Sem isso, a máquina não prospecta. Os pedidos da BF vão até ~10/11.
2. **Escolher a pousada piloto até 25/10** (C1). Sem isso, a meta da Vera até 15/12 não fecha.
3. **Corrigir a skill `vera-pousadas` para a C-08** (C3).
4. **Preencher FORNECEDORES.md e levar o termo de cessão ao advogado.** Antes disso, nada de rosto real fora das ferramentas aprovadas.
5. **O resto da lista** de `HQ/DECISOES-ABERTAS.md`, com uma recomendação para cada item.

## O que a auditoria **não** resolveu (e por quê)
- **Cartuchos de moda e hospedagem e o Destruidor da Vera:** precisam dos dados reais do computador (Perfil de Gosto, base da pousada). Ficaram como primeira tarefa lá.
- **A conta de horas do mês:** a lente de negócio mostrou que a semana 1 já passa de 25 h. É decisão de prioridade: a regra "nada novo antes da 1ª venda" (A8) resolve.
- **O 1080p que chega por download de ferramenta conectada (MCP):** a trava pega gravação e cópia por Bash, mas não um download feito direto pela ferramenta. O motor continua sendo a trava principal.
