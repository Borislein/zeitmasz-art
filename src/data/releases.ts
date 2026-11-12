export interface Track {
  title: string;
  duration: string;
}

export interface Credit {
  label: string;
  value: string;
  url?: string;
}

export interface Release {
  catNum: string;
  slug?: string;
  title: string;
  outlineLine?: number;
  info?: string;
  sideA?: Track[];
  sideB?: Track[];
  tracklist?: Track[];
  credits?: Credit[][];
  links?: { label: string; url: string }[];
}

export const releases: Release[] = [
  {
    catNum: "ZTMSZ001",
    slug: "owldom-meets-sensational-in-the-twilight-zone",
    title: "Owldom Meets Sensational\nIn The Twilight Zone",
    info: "Released 3 November 2026 · Cassette & CD: 23 November 2026",
    links: [
      { label: "Listen everywhere", url: "https://push.fm/fl/krzp7acb" },
      { label: "Bandcamp", url: "https://owldom.bandcamp.com" },
      { label: "Press kit", url: "https://owldom.org" },
    ],
    sideA: [
      { title: "No Shade", duration: "3:33" },
      { title: "Pester", duration: "3:58" },
      { title: "Phalanx", duration: "7:31" },
      { title: "Ghosting", duration: "5:14" },
    ],
    sideB: [
      { title: "You", duration: "6:54" },
      { title: "Unsub", duration: "6:01" },
      { title: "Newfangled", duration: "7:00" },
    ],
    credits: [
      [
        { label: "Music", value: "Owldom", url: "/artists/owldom" },
        { label: "Lyrics", value: "Sensational" },
      ],
      [
        {
          label: "Mix-Engineer",
          value: "Martin Maischein @ Kuzurura",
          url: "http://kuzurura.com/",
        },
        {
          label: "Mastering-Engineer",
          value: "Cem Oral @ Jammin Masters",
          url: "https://jamminmasters.de/",
        },
      ],
    ],
  },
  {
    catNum: "ZTMSZ002",
    slug: "owldom-ep",
    title: "Owldom EP",
    info: "Forthcoming",
    tracklist: [
      { title: "Odder", duration: "4:50" },
      { title: "Trapped", duration: "4:30" },
      { title: "Foggiest", duration: "4:00" },
    ],
    credits: [[{ label: "Music", value: "Owldom", url: "/artists/owldom" }]],
  },
  {
    catNum: "ZTMSZ003",
    slug: "twilight-zone-instrumentals",
    title: "Twilight Zone\nInstrumentals",
    outlineLine: 0,
    info: "Forthcoming",
    sideA: [
      { title: "No Shade", duration: "3:33" },
      { title: "Pester", duration: "3:58" },
      { title: "Phalanx", duration: "7:31" },
      { title: "Ghosting", duration: "5:14" },
    ],
    sideB: [
      { title: "You", duration: "6:54" },
      { title: "Unsub", duration: "6:01" },
      { title: "Newfangled", duration: "7:00" },
    ],
    credits: [
      [{ label: "Music", value: "Owldom", url: "/artists/owldom" }],
      [
        {
          label: "Mix-Engineer",
          value: "Martin Maischein @ Kuzurura",
          url: "http://kuzurura.com/",
        },
        {
          label: "Mastering-Engineer",
          value: "Cem Oral @ Jammin Masters",
          url: "https://jamminmasters.de/",
        },
      ],
    ],
  },
];
