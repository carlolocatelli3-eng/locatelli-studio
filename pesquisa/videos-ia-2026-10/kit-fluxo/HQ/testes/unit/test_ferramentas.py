"""Testes das ferramentas numéricas da máquina. Rodar: python3 HQ/testes/rodar.py"""
import importlib.util, json, os, subprocess, sys, tempfile, unittest

AQUI = os.path.dirname(os.path.abspath(__file__))
FERR = os.path.normpath(os.path.join(AQUI, "..", "..", "ferramentas"))


def carregar(nome):
    spec = importlib.util.spec_from_file_location(nome, os.path.join(FERR, nome + ".py"))
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


class DeltaE(unittest.TestCase):
    def setUp(self):
        self.d = carregar("delta_e")

    def test_pares_de_referencia_da_norma(self):
        # pares publicados por Sharma, Wu e Dalal (2005) para validar o CIEDE2000
        for a, b, esperado in [((50, 2.6772, -79.7751), (50, 0, -82.7485), 2.0425),
                               ((50, -1.3802, -84.2814), (50, 0, -82.7485), 1.0000),
                               ((60.2574, -34.0099, 36.2677), (60.4626, -34.1751, 39.4387), 1.2644),
                               ((50, 2.5, 0), (73, 25, -18), 27.1492)]:
            self.assertAlmostEqual(self.d.ciede2000(a, b), esperado, places=3)

    def test_mesma_cor_aprova_e_cor_diferente_reprova(self):
        from PIL import Image
        with tempfile.TemporaryDirectory() as t:
            Image.new("RGB", (50, 50), (180, 40, 40)).save(os.path.join(t, "a.png"))
            Image.new("RGB", (50, 50), (182, 41, 40)).save(os.path.join(t, "b.png"))
            Image.new("RGB", (50, 50), (40, 40, 180)).save(os.path.join(t, "c.png"))
            run = lambda x, y: subprocess.run([sys.executable, "-I", os.path.join(FERR, "delta_e.py"), x, y],
                                              capture_output=True, text=True)
            self.assertEqual(run(os.path.join(t, "a.png"), os.path.join(t, "b.png")).returncode, 0)
            r = run(os.path.join(t, "a.png"), os.path.join(t, "c.png"))
            self.assertEqual(r.returncode, 1)
            self.assertIn("REPROVADO", r.stdout)


class Vencedor(unittest.TestCase):
    def rodar(self, c, v):
        return subprocess.run([sys.executable, "-I", os.path.join(FERR, "vencedor.py"),
                               "--controle", *map(str, c), "--variante", *map(str, v)],
                              capture_output=True, text=True).stdout

    def test_vencedor_claro(self):
        self.assertIn("VEREDITO: VENCEDOR", self.rodar((120, 10000), (165, 10000)))

    def test_pouca_amostra_e_cedo_demais(self):
        self.assertIn("CEDO DEMAIS", self.rodar((10, 800), (18, 800)))

    def test_perdedor(self):
        self.assertIn("PERDEDOR", self.rodar((200, 10000), (120, 10000)))


class Melhoria(unittest.TestCase):
    def test_placar_regras_e_alertas_em_varios_setores(self):
        with tempfile.TemporaryDirectory() as t:
            def job(cli, cart, decs, teto=250, gasto=0, prazo=None):
                d = os.path.join(t, "CLIENTES", cli, "p1"); os.makedirs(d)
                json.dump({"id": cli + "-p1", "cliente": cli, "cartucho": cart,
                           "custos": {"teto_reais": teto, "gasto_reais": gasto},
                           "portoes": {"3_corte_480p": {"aprovado": False, "prazo_1080p": prazo}},
                           "decisoes": decs}, open(os.path.join(d, "JOB.json"), "w"))
            dec = lambda dia, v, j, tags=(): {"data": f"2026-10-{dia:02d}", "meta": "S1", "etapa": "I",
                                              "veredito_carlo": v, "veredito_juiz": j, "tags": list(tags), "motivo": "x"}
            job("a", "setor1", [dec(1, "corrigido", "aprovado", ["cor"])])
            job("b", "setor2", [dec(2, "corrigido", "aprovado", ["cor"]), dec(3, "recusado", "reprovado", ["texto"])])
            job("c", "setor3", [dec(4, "corrigido", "reprovado", ["cor"])], teto=100, gasto=90)
            job("d", "setor2", [dec(5, "recusado", "reprovado", ["texto"])], prazo="2026-10-22")
            job("e", "setor2", [dec(6, "recusado", "reprovado", ["texto"])] +
                [dec(7 + i, "aprovado", "aprovado") for i in range(12)])
            hq = os.path.join(t, "HQ")
            subprocess.run([sys.executable, "-I", os.path.join(FERR, "melhoria.py"), "--clientes",
                            os.path.join(t, "CLIENTES"), "--hq", hq, "--desde", "2026-09-30", "--hoje", "2026-10-21"],
                           check=True, capture_output=True)
            rel = open(os.path.join(hq, "melhoria", "MELHORIA-2026-10-21.md"), encoding="utf-8").read()
            self.assertIn("**cor** → nível sugerido: GERAL", rel)
            self.assertIn("**texto** → nível sugerido: CARTUCHO setor2", rel)
            self.assertIn("90% do teto", rel)
            self.assertIn("vence em 1 dia", rel)
            placar = json.load(open(os.path.join(hq, "PLACAR.json")))["metas"]["S1"]
            self.assertEqual(placar["sequencia"], 12)
            self.assertEqual(placar["ultima_execucao"] if "ultima_execucao" in placar else "ok", "ok")



class Motor(unittest.TestCase):
    def test_projeto_de_ponta_a_ponta_com_travas(self):
        with tempfile.TemporaryDirectory() as t:
            os.makedirs(os.path.join(t, "HQ")); proj = os.path.join(t, "CLIENTES", "c", "p")
            os.makedirs(proj)
            json.dump({"metas": {"S1": {"nivel": 1, "teto_por_execucao_usd": 1}}}, open(os.path.join(t, "HQ", "metas.json"), "w"))
            json.dump({"id": "p", "cliente": "c", "cartucho": "x", "meta": "S1", "status": "pendente",
                       "custos": {"teto_reais": 100, "gasto_reais": 0}, "portoes": {}}, open(os.path.join(proj, "JOB.json"), "w"))
            fake = os.path.join(t, "fake"); open(fake, "w").write('#!/bin/sh\necho \'{"total_cost_usd": 1.0}\'\n'); os.chmod(fake, 0o755)
            env = dict(os.environ, MAQUINA_RAIZ=t, MAQUINA_CLAUDE=fake, MAQUINA_HOJE="2026-10-21")
            m = lambda *a, **kw: subprocess.run([sys.executable, "-I", os.path.join(FERR, "motor.py"), *a],
                                                capture_output=True, text=True, env=dict(env, **kw))
            self.assertEqual(m("rodar", "c/p", "--executar").returncode, 0)
            self.assertEqual(m("rodar", "c/p", "--executar").returncode, 0)
            r = m("rodar", "c/p", "--executar")
            self.assertEqual(r.returncode, 2); self.assertIn("PORTÃO 1", r.stdout)
            m("decidir", "c/p", "--portao", "1", "--veredito", "recusado", "--motivo", "fraco", "--tags", "tom")
            job = json.load(open(os.path.join(proj, "JOB.json")))
            self.assertEqual(job["status"], "pesquisa")
            self.assertEqual(job["decisoes"][-1]["tags"], ["tom"])
            # teto: R$ 11 gastos + até R$ 5,5 por execução; com teto de R$ 12 deve bloquear
            job["custos"]["teto_reais"] = 12; json.dump(job, open(os.path.join(proj, "JOB.json"), "w"))
            r = m("rodar", "c/p", "--executar")
            self.assertEqual(r.returncode, 2); self.assertIn("teto do projeto", r.stdout)
            # prazo do 480p vencido bloqueia o final
            job.update({"status": "portao3", "custos": {"teto_reais": 1000, "gasto_reais": 0},
                        "portoes": {"3_corte_480p": {"aprovado": True, "prazo_1080p": "2026-10-20"}}})
            json.dump(job, open(os.path.join(proj, "JOB.json"), "w"))
            r = m("rodar", "c/p", "--executar")
            self.assertEqual(r.returncode, 2); self.assertIn("venceu", r.stdout)

    def test_nivel_zero_nao_roda(self):
        with tempfile.TemporaryDirectory() as t:
            os.makedirs(os.path.join(t, "HQ")); proj = os.path.join(t, "CLIENTES", "c", "p"); os.makedirs(proj)
            json.dump({"metas": {"V1": {"nivel": 0, "teto_por_execucao_usd": 1}}}, open(os.path.join(t, "HQ", "metas.json"), "w"))
            json.dump({"id": "p", "meta": "V1", "status": "pendente", "custos": {"teto_reais": 100}, "portoes": {}}, open(os.path.join(proj, "JOB.json"), "w"))
            r = subprocess.run([sys.executable, "-I", os.path.join(FERR, "motor.py"), "rodar", "c/p", "--executar"],
                               capture_output=True, text=True, env=dict(os.environ, MAQUINA_RAIZ=t))
            self.assertEqual(r.returncode, 2); self.assertIn("nível 0", r.stdout)


class TravaPortoes(unittest.TestCase):
    def test_bloqueia_final_sem_portao_e_libera_com(self):
        with tempfile.TemporaryDirectory() as t:
            proj = os.path.join(t, "CLIENTES", "c", "p"); os.makedirs(proj)
            def job(portoes): json.dump({"portoes": portoes}, open(os.path.join(proj, "JOB.json"), "w"))
            def tenta(pasta):
                return subprocess.run([sys.executable, "-I", os.path.join(FERR, "trava_portoes.py")],
                                      input=json.dumps({"tool_input": {"file_path": os.path.join(proj, pasta, "a.mp4")}}),
                                      capture_output=True, text=True, env=dict(os.environ, MAQUINA_HOJE="2026-10-21")).returncode
            job({})
            self.assertEqual(tenta("06-final"), 2)
            self.assertEqual(tenta("07-entrega"), 2)
            self.assertEqual(tenta("05-rascunho-480p"), 0)
            job({"3_corte_480p": {"aprovado": True, "prazo_1080p": "2026-10-25"}, "4_conjunto": {"aprovado": True}})
            self.assertEqual(tenta("06-final"), 0)
            self.assertEqual(tenta("07-entrega"), 0)



class TravaBash(unittest.TestCase):
    def test_bloqueia_copia_por_bash_para_o_final(self):
        with tempfile.TemporaryDirectory() as t:
            proj = os.path.join(t, "CLIENTES", "c", "p"); os.makedirs(proj)
            json.dump({"portoes": {}}, open(os.path.join(proj, "JOB.json"), "w"))
            cmd = f"cp /tmp/x.mp4 {os.path.join(proj, '06-final', 'x.mp4')}"
            r = subprocess.run([sys.executable, "-I", os.path.join(FERR, "trava_portoes.py")],
                               input=json.dumps({"tool_input": {"command": cmd}}), capture_output=True, text=True)
            self.assertEqual(r.returncode, 2)
            r = subprocess.run([sys.executable, "-I", os.path.join(FERR, "trava_portoes.py")],
                               input=json.dumps({"tool_input": {"command": "ls -la"}}), capture_output=True, text=True)
            self.assertEqual(r.returncode, 0)

if __name__ == "__main__":
    unittest.main()
