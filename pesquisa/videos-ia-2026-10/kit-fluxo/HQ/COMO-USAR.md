# Como usar a máquina no dia a dia (de qualquer computador ou da nuvem)

A máquina mora no repositório `locatelli-studio`. Em qualquer notebook ou numa sessão do Claude Code na nuvem: `git pull`, abrir a pasta onde estão `HQ/` e `CLIENTES/`, e usar os comandos abaixo. Só precisa de Python 3.

## Começar um trabalho
```
cp -R HQ/modelos/projeto CLIENTES/<cliente>/<AAAA-MM>-<projeto>
```
Preencha o `BRIEFING.md` e, no `JOB.json`: cliente, cartucho (setor), meta (ex.: S1) e teto em reais. Setor novo? Peça ao Claude: "use a skill novo-cartucho para <setor>".

## Antes de tudo
`pip3 install numpy pillow markdown` (cor, vencedor, testes e página). Na nuvem, crie `CLIENTES/` dentro de `kit-fluxo/` antes de copiar o modelo de projeto.

## O motor (travas e registro; complementa o Criar maestro)
> O executor do dia a dia é o Criar maestro. O motor cobre o que o maestro não tiver: prazo de 7 dias do 480p, teto por projeto e registro de `decisoes`.
| Comando | O que faz |
|---|---|
| `python3 HQ/ferramentas/motor.py status` | Onde está cada projeto e o que o trava |
| `python3 HQ/ferramentas/motor.py proximo <cliente>/<projeto>` | O que seria feito agora e por quê |
| `python3 HQ/ferramentas/motor.py rodar <cliente>/<projeto> --executar` | Executa a próxima etapa com teto de gasto e para no portão |
| `python3 HQ/ferramentas/motor.py enviou-480 <cliente>/<projeto>` | Marca o envio do corte 480p e começa a contar os 7 dias |
| `python3 HQ/ferramentas/motor.py decidir <cliente>/<projeto> --portao 2 --veredito corrigido --motivo "..." --tags cor --juiz aprovado` | Registra a sua decisão (alimenta o ciclo de melhoria) |

**O motor nunca:**
- passa de um portão sem a sua aprovação;
- gera o final sem o Portão 3 ou depois do prazo de 7 dias;
- passa do teto do projeto;
- roda uma meta que está no nível 0.

## Fim do dia
```
python3 HQ/ferramentas/melhoria.py --clientes CLIENTES --hq HQ
```
Depois peça ao Claude: "rode a skill melhoria-diaria". A resposta chega numa tela só no "Decidir hoje".

## Antes de aceitar qualquer mudança de skill ou ferramenta
```
python3 HQ/testes/rodar.py
```
Se aparecer "HÁ FALHAS", a mudança não entra.

## Medições avulsas
- Cor: `python3 HQ/ferramentas/delta_e.py real.jpg gerada.jpg --ref-box x,y,w,h --gen-box x,y,w,h`
- Vencedor: `python3 HQ/ferramentas/vencedor.py --controle 120 10000 --variante 165 10000`

## Trava dentro do Claude Code
O `HQ/ferramentas/trava_portoes.py` entra como hook (instruções no próprio arquivo). Ele impede que qualquer sessão grave em `06-final/` ou `07-entrega/` sem o portão aprovado.

## Quem muda o quê
- **Só o Carlo:**
  - nível e teto das metas, em `HQ/metas.json`;
  - aprovação dos portões;
  - mudanças de skill;
  - regras gerais.
- **A máquina:**
  - status e custos no `JOB.json`;
  - regras de cliente e de setor;
  - relatórios.
