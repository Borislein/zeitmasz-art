export type Lang = "de" | "en";

export const ui = {
  de: {
    "nav.artists": "Künstler",
    "nav.releases": "Veröffentlichungen",
    "nav.kontakt": "Kontakt",
    "hero.tagline": "Label und Agentur für visionäre Künstler.",
    "katalog.heading": "Katalog",
    "kontakt.heading": "Kontakt",
    "footer.tagline": "Zeitmasz — Label und Agentur für visionäre Künstler",
    "theme.bright": "Hell",
    "theme.dark": "Dunkel",
    "rip.text": "Wir trauern um Sensational, der am 2. August 2026 verstorben ist.",
    "rip.linkText": "Lies Spectres Nachruf →",
    "rip.details": "Zeitmasz war die letzte Agentur und das letzte Label Sensationals. Das gemeinsame Album mit Owldom wird in Kürze erscheinen. Ihr seid herzlich eingeladen, eure Gedanken zu teilen.",
  },
  en: {
    "nav.artists": "Artists",
    "nav.releases": "Releases",
    "nav.kontakt": "Contact",
    "hero.tagline": "Label and agency for visionary artists.",
    "katalog.heading": "Catalogue",
    "kontakt.heading": "Contact",
    "footer.tagline": "Zeitmasz — Label and agency for visionary artists",
    "theme.bright": "Bright",
    "theme.dark": "Dark",
    "rip.text": "We mourn Sensational, who passed away on August 2, 2026.",
    "rip.linkText": "Read Spectre's tribute →",
    "rip.details": "Zeitmasz was Sensational's last agency and label. The collaborative album with Owldom will be released shortly. You're welcome to share your thoughts.",
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)["de"]): string {
  return ui[lang][key];
}

export function path(lang: Lang, segment: string = ""): string {
  const base = lang === "de" ? "" : "/en";
  return `${base}${segment}` || "/";
}
