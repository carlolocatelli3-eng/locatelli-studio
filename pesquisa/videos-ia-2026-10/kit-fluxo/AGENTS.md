# AGENTS.md · para o Astra (Codex/ChatGPT) e qualquer agente que não seja o Claude Code

A máquina é a mesma para o Claude Code e para o Astra. As skills são arquivos de texto comuns: qualquer agente lê e segue.

## Antes de qualquer trabalho
0. Leia `ESPECIFICACAO.md`: esta máquina é uma camada de melhoria sobre o Criar maestro, não um substituto.
1. Leia `HQ/METAS.md`, `HQ/REGRAS-GERAIS.md` e, se existir, `HQ/cartuchos/<setor>/CARTUCHO.md` e `CLIENTES/<cliente>/REGRAS.md`.
2. Leia o `JOB.json` e o `BRIEFING.md` do projeto. O `JOB.json` diz em que etapa o projeto está.
3. Use a skill da etapa, em `skills/<nome>/SKILL.md`, como instrução. "Usar esta skill" = ler o arquivo e seguir.
4. Grátis antes do pago: `HQ/maquina/CARTEIRA.md`.

## Nunca
- Passar de um portão (1 pitch e roteiro · 2 ficha · 3 corte 480p · 4 conjunto) sem a aprovação do Carlo registrada no `JOB.json`.
- Gerar o final 1080p sem o Portão 3, ou depois do prazo de 7 dias.
- Passar do teto do projeto.
- Usar rosto de pessoa real sem contrato e consentimento registrados.
- Publicar, enviar mensagem ou gastar verba de mídia.

## Depois de cada etapa
- Atualize o `JOB.json` (status, custo, o que foi gerado).
- Registre cada decisão do Carlo em `decisoes`, com tags e motivo: é o que faz a máquina aprender.
- Para checar o estado e as travas: `python3 HQ/ferramentas/motor.py status`.
