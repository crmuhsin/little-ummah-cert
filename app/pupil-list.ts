export type Pupil = {
  name: string;
  position?: number;
  ageGroup?: string;
  certificateType?: string;
};

export const prizeWinners: Pupil[] = [
  {
    name: "ADIBA BINTE NOOR",
    position: 1,
    ageGroup: "Bar'am",
  },
  {
    name: "ASJADUL KARIM USAMA",
    position: 2,
    ageGroup: "Bar'am",
  },

  {
    name: "MUS'AB BIN MUHSIN",
    position: 3,
    ageGroup: "Bar'am",
  },
  {
    name: "ANAS BIN MOHSIN",
    position: 1,
    ageGroup: "Mutafattiha",
  },
  {
    name: "KHUBAIB KAZI",
    position: 2,
    ageGroup: "Mutafattiha",
  },
  {
    name: "ASFA BINTE IMTIAZ",
    position: 3,
    ageGroup: "Mutafattiha",
  },

  {
    name: "MUHAMMAD KAZI",
    position: 1,
    ageGroup: "Zahra",
  },
  {
    name: "MIKDAD BIN AHSAN",
    position: 2,
    ageGroup: "Zahra",
  },
  {
    name: "BARIRAH AMIN LAYBA",
    position: 3,
    ageGroup: "Zahra",
  },
];

export const activeParticipants: Pupil[] = [
  {
    name: "MAISOORA MUNTAHA",
  },
  {
    name: "MEHEK MAZAR KHAN",
  },
  {
    name: "MISHOWRA BINTE JABED",
  },
  {
    name: "AN NOOR NIHAN AYAT",
  },
  {
    name: "WANIA KAZI",
  },
  {
    name: "SIDRATUL MUNTAHA",
  },
  {
    name: "FATIMA SUBAITA",
  },
];

export const participants: Pupil[] = [
  { name: "SAMAIRA KHAN SOHA" },
  { name: "MUHAMMAD YARDAN KHAN" },
  { name: "FATIHA RUFAIDA" },
  { name: "ZUNAIRA BINTE JABED" },
  { name: "MAHMUD BIN ISLAM" },
  { name: "MUHAMMAD BIN AHSAN" },
  { name: "AHMAD BIN AHSAN " },
  { name: "MUHAMMAD HUZAIFA" },
];

export const allPupils: Pupil[] = [
  ...prizeWinners.map((a) => {
    a.certificateType = "prize";
    return a
  }),
  ...activeParticipants.map((a) => {
    a.certificateType = "active";
    return a
  }),
  ...participants.map((a) => {
    a.certificateType = "parti";
    return a
  }),
];
