import type { Lang } from "../i18n/ui";

export interface Artist {
  name: string;
  slug: string;
  tagline?: Record<Lang, string>;
}

export const artists: Artist[] = [
  {
    name: "Owldom",
    slug: "owldom",
    tagline: {
      de: "Wolkenkuckucksheim",
      en: "Fool's Paradise",
    },
  },
];
