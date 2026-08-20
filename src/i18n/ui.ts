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
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)["de"]): string {
  return ui[lang][key];
}

export function path(lang: Lang, segment: string = ""): string {
  const base = lang === "de" ? "" : "/en";
  return `${base}${segment}` || "/";
}
