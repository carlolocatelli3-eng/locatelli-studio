#!/usr/bin/env python3
"""Guardião numérico de cor: compara a cor de uma área da peça real com a mesma área na imagem gerada.

Uso:
  python3 delta_e.py REFERENCIA.jpg GERADA.jpg --ref-box x,y,w,h --gen-box x,y,w,h
  (sem as caixas, compara a imagem inteira; para peça, recorte sempre a mesma região do tecido)

Saída: cor mediana de cada área (HEX e Lab) e a diferença ΔE2000.
  ΔE < 2  → igual a olho nu            → aprovado
  2 a 5   → diferença visível de perto → ajustar
  > 5     → outra cor                  → reprovar (peça sagrada)
"""
import argparse, math, sys
import numpy as np
from PIL import Image


def crop(path, box):
    im = Image.open(path).convert("RGBA")
    if box:
        x, y, w, h = (int(v) for v in box.split(","))
        if w <= 0 or h <= 0 or x < 0 or y < 0 or x + w > im.width or y + h > im.height:
            sys.exit(f"caixa {box} fora da imagem {path} ({im.width}x{im.height})")
        im = im.crop((x, y, x + w, y + h))
    arr = np.asarray(im, dtype=np.float64) / 255.0
    px = arr.reshape(-1, 4)
    px = px[px[:, 3] > 0.5][:, :3]  # ignora fundo transparente de recortes
    if not len(px):
        sys.exit(f"nenhum pixel opaco na área de {path}")
    return px


def srgb_to_lab(rgb):
    lin = np.where(rgb <= 0.04045, rgb / 12.92, ((rgb + 0.055) / 1.055) ** 2.4)
    m = np.array([[0.4124564, 0.3575761, 0.1804375],
                  [0.2126729, 0.7151522, 0.0721750],
                  [0.0193339, 0.1191920, 0.9503041]])
    xyz = lin @ m.T / np.array([0.95047, 1.0, 1.08883])
    f = np.where(xyz > 216 / 24389, np.cbrt(xyz), (24389 / 27 * xyz + 16) / 116)
    return np.stack([116 * f[..., 1] - 16, 500 * (f[..., 0] - f[..., 1]), 200 * (f[..., 1] - f[..., 2])], -1)


def ciede2000(lab1, lab2):
    L1, a1, b1 = lab1
    L2, a2, b2 = lab2
    C1, C2 = math.hypot(a1, b1), math.hypot(a2, b2)
    Cb = (C1 + C2) / 2
    G = 0.5 * (1 - math.sqrt(Cb ** 7 / (Cb ** 7 + 25 ** 7)))
    a1p, a2p = (1 + G) * a1, (1 + G) * a2
    C1p, C2p = math.hypot(a1p, b1), math.hypot(a2p, b2)
    h1p = math.degrees(math.atan2(b1, a1p)) % 360
    h2p = math.degrees(math.atan2(b2, a2p)) % 360
    dLp, dCp = L2 - L1, C2p - C1p
    if C1p * C2p == 0:
        dhp = 0
    elif abs(h2p - h1p) <= 180:
        dhp = h2p - h1p
    elif h2p - h1p > 180:
        dhp = h2p - h1p - 360
    else:
        dhp = h2p - h1p + 360
    dHp = 2 * math.sqrt(C1p * C2p) * math.sin(math.radians(dhp / 2))
    Lbp, Cbp = (L1 + L2) / 2, (C1p + C2p) / 2
    if C1p * C2p == 0:
        hbp = h1p + h2p
    elif abs(h1p - h2p) <= 180:
        hbp = (h1p + h2p) / 2
    elif h1p + h2p < 360:
        hbp = (h1p + h2p + 360) / 2
    else:
        hbp = (h1p + h2p - 360) / 2
    T = (1 - 0.17 * math.cos(math.radians(hbp - 30)) + 0.24 * math.cos(math.radians(2 * hbp))
         + 0.32 * math.cos(math.radians(3 * hbp + 6)) - 0.20 * math.cos(math.radians(4 * hbp - 63)))
    dtheta = 30 * math.exp(-(((hbp - 275) / 25) ** 2))
    Rc = 2 * math.sqrt(Cbp ** 7 / (Cbp ** 7 + 25 ** 7))
    Sl = 1 + 0.015 * (Lbp - 50) ** 2 / math.sqrt(20 + (Lbp - 50) ** 2)
    Sc, Sh = 1 + 0.045 * Cbp, 1 + 0.015 * Cbp * T
    Rt = -math.sin(math.radians(2 * dtheta)) * Rc
    return math.sqrt((dLp / Sl) ** 2 + (dCp / Sc) ** 2 + (dHp / Sh) ** 2 + Rt * (dCp / Sc) * (dHp / Sh))


def median_color(arr):
    rgb = np.median(arr.reshape(-1, 3), axis=0)
    lab = srgb_to_lab(rgb)
    return "#%02X%02X%02X" % tuple(int(round(v * 255)) for v in rgb), tuple(float(v) for v in lab)


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("referencia"); p.add_argument("gerada")
    p.add_argument("--ref-box"); p.add_argument("--gen-box")
    a = p.parse_args()
    hex1, lab1 = median_color(crop(a.referencia, a.ref_box))
    hex2, lab2 = median_color(crop(a.gerada, a.gen_box))
    de = ciede2000(lab1, lab2)
    veredito = "APROVADO" if de < 2 else ("AJUSTAR" if de <= 5 else "REPROVADO")
    print(f"referência {hex1}  Lab({lab1[0]:.1f}, {lab1[1]:.1f}, {lab1[2]:.1f})")
    print(f"gerada     {hex2}  Lab({lab2[0]:.1f}, {lab2[1]:.1f}, {lab2[2]:.1f})")
    print(f"ΔE2000 = {de:.2f} → {veredito}")
    sys.exit(0 if veredito == "APROVADO" else 1)


if __name__ == "__main__":
    main()
