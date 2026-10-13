#!/usr/bin/env python3
"""Recorta la fuente de iconos (Material Symbols Outlined) a los que usa la web.

Material Symbols es un único fichero con los ~4.000 pictogramas del set: 315 KiB
que el navegador tiene que descargar antes de poder dibujar el primer icono, y
que compiten con la imagen del hero por el ancho de banda. En la web se usan 37
iconos; con sólo esos, la fuente baja a unos 5 KiB.

No hace falta para construir el sitio: el fichero ya recortado está en
public/fonts/. Sólo hay que volver a ejecutar esto cuando se añada un icono
nuevo, o el nuevo pictograma se dibujará como texto.

Uso (requiere fonttools, sólo para este script, no para el build):

    python3 -m venv .venv-icones && .venv-icones/bin/pip install fonttools brotli
    .venv-icones/bin/python scripts/subset-icons.py

El script comprueba al final que en la fuente recortada está cada uno de los
iconos de la lista, y avisa si se ha añadido alguno que falte.
"""

from __future__ import annotations

import pathlib
import subprocess
import sys
import tempfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
FULL = ROOT / "public" / "fonts" / "material-symbols-outlined.full.woff2"
OUT = ROOT / "public" / "fonts" / "material-symbols-outlined.woff2"

# Debe coincidir con la lista de src/styles/_fonts.scss y con los nombres que
# aparecen en <span class="material-symbols-outlined">. Lo que no esté aquí se
# dibuja como texto.
ICONS = """
add calendar_month call chat check check_circle close devices diversity_3
emoji_people error expand_more family_restroom favorite forum hourglass_empty
info location_on lock mail north_east psychology psychology_alt route schedule
school science self_improvement sentiment_satisfied spa verified videocam
visibility volunteer_activism water_drop work work_history
""".split()

# `clock` y `compass` no están: no existen en el fichero que sirve Google para
# esta combinación de ejes y en la web se dibujan con SVG (DetailIcon.astro).


def download_full(url: str, dest: pathlib.Path) -> None:
    import urllib.request

    print(f"Descargando la fuente completa en {dest}")
    urllib.request.urlretrieve(url, dest)


def subset(full: pathlib.Path, out: pathlib.Path, icons: list[str]) -> None:
    """ poda la tabla GSUB y deja que pyftsubset cierre el resto del fichero."""
    from fontTools.ttLib import TTFont

    font = TTFont(full)
    cmap = font.getBestCmap()
    name_to_char = {name: chr(cp) for cp, name in cmap.items()}
    name_to_char["underscore"] = "_"

    lookup = font["GSUB"].table.LookupList.Lookup[0]
    for extension in lookup.SubTable:
        ligatures = extension.ExtSubTable.ligatures
        for first in list(ligatures):
            survivors = [
                ligature
                for ligature in ligatures[first]
                # En LigatureSubst, Component no incluye el primer glifo (ese es
                # la clave del diccionario), así que hay que anteponerlo.
                if name_to_char.get(first, "")
                + "".join(name_to_char.get(c, "") for c in ligature.Component)
                in icons
            ]
            if survivors:
                ligatures[first] = survivors
            else:
                del ligatures[first]

    with tempfile.NamedTemporaryFile(suffix=".ttf") as pruned:
        font.save(pruned.name)
        subprocess.run(
            [
                "pyftsubset",
                pruned.name,
                f"--output-file={out}",
                "--flavor=woff2",
                # Los nombres de los iconos se pasan como texto para que se
                # conserven los glifos de las letras que los forman.
                "--text=" + " ".join(icons) + " -_",
                "--layout-features=*",
                "--no-hinting",
                "--desubroutinize",
            ],
            check=True,
        )


def verify(out: pathlib.Path, icons: list[str]) -> None:
    from fontTools.ttLib import TTFont

    font = TTFont(out)
    cmap = font.getBestCmap()
    name_to_char = {name: chr(cp) for cp, name in cmap.items()}
    name_to_char["underscore"] = "_"

    ligatures: dict[str, str] = {}
    lookup = font["GSUB"].table.LookupList.Lookup[0]
    for extension in lookup.SubTable:
        for first, group in extension.ExtSubTable.ligatures.items():
            for ligature in group:
                name = name_to_char.get(first, "") + "".join(
                    name_to_char.get(c, "") for c in ligature.Component
                )
                ligatures[name] = ligature.LigGlyph

    glyph_order = set(font.getGlyphOrder())
    sin_ligadura = [i for i in icons if i not in ligatures]
    sin_glifo = [i for i in icons if i in ligatures and ligatures[i] not in glyph_order]

    if sin_ligadura or sin_glifo:
        print("ERROR: la fuente recortada no cubre:", file=sys.stderr)
        for icon in sin_ligadura:
            print(f"  - {icon}: sin ligadura (¿el nombre no existe en el set?)", file=sys.stderr)
        for icon in sin_glifo:
            print(f"  - {icon}: ligadura sin glifo", file=sys.stderr)
        raise SystemExit(1)

    print(f"OK: {len(icons)} iconos presentes en la fuente recortada")


def main() -> None:
    url = (
        "https://fonts.gstatic.com/s/materialsymbolsoutlined/v377/"
        "kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-"
        "jCxv3fzvRNU22ZXGJpEpjC_1v-p_4MrImHCIJIZrDCvHOejbd5zrDAt.woff2"
    )
    if not FULL.exists():
        download_full(url, FULL)

    subset(FULL, OUT, ICONS)
    verify(OUT, ICONS)
    print(
        f"{FULL.stat().st_size // 1024} KiB -> {OUT.stat().st_size // 1024} KiB"
    )


if __name__ == "__main__":
    main()