
#!/usr/bin/env python3
"""
Generates city landing pages for the InyeonAI blog from a JSON data file.

Usage:
    python3 generate_city_pages.py

Reads:
    cities.json                    -- one object per city page
    city-page.template.html        -- the shared template

Writes:
    ../blog/city/<slug>.html       -- one file per entry in cities.json

Also prints a ready-to-paste HTML snippet you can drop into blog/index.html
to link each new page (newest first).

Notes:
    - Do NOT put fabricated statistics (fake user counts, fake percentages,
      fake "verified singles near X" claims) into cities.json. Keep every
      claim either (a) true and evergreen about the app, or (b) genuine,
      checkable local color about the city itself.
    - Re-run this any time you add a new entry to cities.json; it will not
      touch pages you've hand-edited unless you re-run it for that slug.
"""

import json
import pathlib

SCRIPT_DIR = pathlib.Path(__file__).parent
TEMPLATE_PATH = SCRIPT_DIR / "city-page.template.html"
DATA_PATH = SCRIPT_DIR / "cities.json"
OUTPUT_DIR = SCRIPT_DIR.parent / "blog" / "city"


def render(template: str, data: dict) -> str:
    city = data["city"]
    region = data["region"]
    slug = data["slug"]

    replacements = {
        "{{CITY}}": city,
        "{{REGION}}": region,
        "{{SLUG}}": slug,
        "{{UPDATED_DATE}}": data.get("updated_date", ""),
        "{{TITLE}}": f"Best AI Dating App in {city} {region and '(' + region + ')' or ''} 2026 | InyeonAI".replace("  ", " "),
        "{{META_DESCRIPTION}}": (
            f"Looking for meaningful connections in {city}? InyeonAI matches by "
            f"personality, mood, and intent — free psychology tests, private "
            f"on-device chat, no fake stats."
        ),
        "{{INTRO_PARAGRAPH}}": data["intro_paragraph"],
        "{{LOCAL_NOTE}}": data["local_note"],
        "{{FAQ_ANSWER_BEST_APP}}": data["faq_best_app"],
    }

    out = template
    for placeholder, value in replacements.items():
        out = out.replace(placeholder, value)
    return out


def main():
    template = TEMPLATE_PATH.read_text(encoding="utf-8")
    entries = json.loads(DATA_PATH.read_text(encoding="utf-8"))

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    index_snippets = []

    for entry in entries:
        html = render(template, entry)
        out_path = OUTPUT_DIR / f"{entry['slug']}.html"
        out_path.write_text(html, encoding="utf-8")
        print(f"Wrote {out_path.relative_to(SCRIPT_DIR.parent)}")

        index_snippets.append(
            '<div class="post-row">\n'
            "  <div>\n"
            f'    <h3><a href="city/{entry["slug"]}.html" class="text-link">'
            f'Best AI dating app in {entry["city"]} 2026</a></h3>\n'
            f'    <p class="text-muted">{entry["intro_paragraph"][:120]}...</p>\n'
            "  </div>\n"
            f'  <span class="post-date">{entry.get("updated_date", "")}</span>\n'
            "</div>"
        )

    print("\n--- Paste into blog/index.html inside .post-list (newest first) ---\n")
    print("\n\n".join(index_snippets))


if __name__ == "__main__":
    main()
