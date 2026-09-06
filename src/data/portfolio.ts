export type ExperienceEntry = {
  organization: string;
  role: string;
  period: string;
  description: string;
  location?: string;
  current?: boolean;
};
export type LeadershipEntry = {
  organization: string;
  role: string;
  period: string;
  current?: boolean;
};
export type VolunteerEntry = {
  title: string;
  location: string;
  date: string;
  organizer?: string;
};
export type CertificationEntry = {
  title: string;
  issuer: string;
  issued?: string;
};
export type SkillGroup = { title: string; note: string; items: string[] };

export const profile = {
  name: "Juri Maswadi",
  headline: "Information Technology student at King Abdulaziz University",
  email: "jurimaswadi@gmail.com",
  linkedin: "https://www.linkedin.com/in/jurimaswadi/",
  github: "https://github.com/jurimaswadi",
  summary:
    "An A+ and first-honor student with a gifted-school background, passionate about AI, cloud engineering, data engineering, and building impactful technology.",
};
export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "leadership", label: "Leadership & Memberships" },
  { id: "volunteering", label: "Volunteering" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;
export const experience: ExperienceEntry[] = [
  {
    organization: "Ting",
    role: "Software Engineering Intern",
    period: "Jun 2026 - Present",
    location: "Jeddah, Makkah, Saudi Arabia · On-site",
    current: true,
    description:
      "Currently training in software engineering and full-stack development, connecting academic learning with hands-on experience in a professional environment.",
  },
  {
    organization: "Mawhiba",
    role: "Gifted Student - Mawhiba Program",
    period: "Apr 2020 - Jun 2023",
    description:
      "Advanced learning in STEM, critical thinking, and research through the Mawhiba Program for gifted students. A formative foundation in technology and scientific inquiry.",
  },
];
export const ieeeLeadership: LeadershipEntry[] = [
  {
    organization: "IEEE KAU SB (Female)",
    role: "Chair",
    period: "Sep 2026 - Present",
    current: true,
  },
  {
    organization: "IEEE KAU SB (Female)",
    role: "Vice-Chair",
    period: "Sep 2025 - Aug 2026",
  },
  {
    organization: "IEEE KAU SB (Female)",
    role: "Research Community Leader",
    period: "Sep 2024 - Sep 2025",
  },
];
export const memberships: LeadershipEntry[] = [
  {
    organization: "Bashosh Volunteer Team",
    role: "HR Department Leader",
    period: "Aug 2025 - Nov 2025",
  },
  {
    organization: "Google Developer Group | KAU",
    role: "HR Analyst",
    period: "Jun 2025 - May 2026",
  },
  {
    organization: "Culture and Art Committee",
    role: "Planning and Execution Department Member",
    period: "Sep 2025 - Jun 2026",
  },
  {
    organization: "DRAG KAU",
    role: "Robotics Unit: Active Member",
    period: "Sep 2024 - Sep 2025",
  },
  {
    organization: "Mawhiba Alumni",
    role: "Member",
    period: "Current member",
    current: true,
  },
];
// TODO: Add volunteering years and verified event URLs when supplied. Do not infer them.
export const volunteering: VolunteerEntry[] = [
  {
    title: "تنظيم برنامج للحجاج",
    location: "Jeddah",
    date: "03 June - 03 June",
    organizer: "albir society jeddah",
  },
  {
    title: "تنظيم زوار وفعاليات معرض الروبوتات والاختراعات -- روبوكون",
    location: "Jeddah",
    date: "15 June - 17 June",
  },
  {
    title: "منظم فعالية",
    location: "Jeddah",
    date: "09 September - 11 September",
    organizer: "wedad charity foundation",
  },
  {
    title: "دورة الاتحاد لذوي الإعاقة في كيدزانيا",
    location: "Jeddah",
    date: "25 September - 25 September",
  },
  {
    title: "تنظيم يوم القهوة العالمي",
    location: "Jeddah",
    date: "02 October - 02 October",
    organizer: "albir society jeddah",
  },
  {
    title: "تنسيق فعالية اليوم الوطني ساعة عطاء",
    location: "Jeddah",
    date: "12 October - 13 October",
  },
  {
    title: "تنظيم برنامج نحو مستقبل واعد",
    location: "Jeddah",
    date: "21 October - 21 October",
    organizer: "albir society jeddah",
  },
];
export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    note: "Languages I work with",
    items: ["Java", "Python"],
  },
  {
    title: "Currently exploring",
    note: "Interests and areas of growth",
    items: [
      "Artificial intelligence",
      "Cloud engineering",
      "Data engineering",
      "Full-stack development",
    ],
  },
  {
    title: "Tools & practice",
    note: "Creative and technical tools",
    items: [
      "Blender",
      "AI-assisted / vibe coding",
      "Research",
      "Technical communication",
    ],
  },
  {
    title: "Working with people",
    note: "Skills developed through leadership",
    items: [
      "Leadership",
      "Teamwork",
      "Communication",
      "Interpersonal skills",
      "Collaboration",
      "Problem solving",
      "Research skills",
      "Strategic planning",
      "Project planning",
      "Professional writing",
    ],
  },
];
// TODO: Add verified credential URLs and missing issue dates when available.
export const certifications: CertificationEntry[] = [
  {
    title: "McKinsey.org Forward Program",
    issuer: "McKinsey & Company",
    issued: "Jun 2026",
  },
  { title: "Mawhoob Competition", issuer: "Mawhiba" },
  {
    title: "Mawhiba Academic Enrichment Program",
    issuer: "Mawhiba",
    issued: "Jul 2020",
  },
  {
    title: "Mawhiba Academic Enrichment Program",
    issuer: "Mawhiba",
    issued: "Jul 2021",
  },
  { title: "Bebras Mawhiba", issuer: "Mawhiba" },
];
