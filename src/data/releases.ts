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
}

export const releases: Release[] = [
  {
    catNum: "ZTMSZ001",
    slug: "owldom-meets-sensational-in-the-twilight-zone",
    title: "Owldom Meets Sensational\nIn The Twilight Zone",
    info: "Release Date: 4. September (tbc)",
    sideA: [
      { title: "No Shade", duration: "3:31" },
      { title: "Pester", duration: "3:56" },
      { title: "Phalanx", duration: "7:26" },
      { title: "Ghosting", duration: "5:11" },
    ],
    sideB: [
      { title: "You", duration: "6:50" },
      { title: "Unsub", duration: "6:06" },
      { title: "Newfangled", duration: "7:10" },
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
      { title: "No Shade", duration: "3:31" },
      { title: "Pester", duration: "3:56" },
      { title: "Phalanx", duration: "7:26" },
      { title: "Ghosting", duration: "5:11" },
    ],
    sideB: [
      { title: "You", duration: "6:50" },
      { title: "Unsub", duration: "6:06" },
      { title: "Newfangled", duration: "7:10" },
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
