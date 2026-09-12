import type { StaticImageData } from "next/image";
import mawhibaLogo from "../../public/logos/mawhiba-logo-cropped.png";
import tingLogo from "../../public/logos/ting-logo-black.webp";

export type ExperienceEntry = {
  organization: string;
  role: string;
  period: string;
  description: string;
  location?: string;
  current?: boolean;
  logo: {
    src: StaticImageData;
    alt: string;
    tone: "pink-tint" | "green-tint";
    format: "wordmark" | "stacked";
  };
};
export type LeadershipEntry = {
  organization: string;
  affiliation?: string;
  role: string;
  period: string;
  current?: boolean;
};
export type VolunteerEntry = {
  title: string;
  hours?: number;
  location?: string;
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
    "First Honors Information Technology student with a gifted-school background and a strong interest in AI, cloud engineering, data engineering, and software development.",
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
    logo: {
      src: tingLogo,
      alt: "Ting logo",
      tone: "pink-tint",
      format: "wordmark",
    },
    description:
      "Currently training in software engineering and full-stack development, connecting academic learning with hands-on experience in a professional environment.",
  },
  {
    organization: "Mawhiba",
    role: "Gifted Student - Mawhiba Program",
    period: "Apr 2020 - Jun 2023",
    logo: {
      src: mawhibaLogo,
      alt: "Mawhiba logo",
      tone: "green-tint",
      format: "stacked",
    },
    description:
      "Advanced learning in STEM, critical thinking, and research through the Mawhiba Program for gifted students. A formative foundation in technology and scientific inquiry.",
  },
];
export const ieeeLeadership: LeadershipEntry[] = [
  {
    organization: "IEEE KAU SB (Female)",
    role: "Research Community Leader",
    period: "Sep 2024 – Sep 2025",
  },
  {
    organization: "IEEE KAU SB (Female)",
    role: "Vice-Chair",
    period: "Sep 2025 – Aug 2026",
  },
  {
    organization: "IEEE KAU SB (Female)",
    role: "Chair",
    period: "Sep 2026 – Present",
    current: true,
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
    affiliation: "Faculty of Computing and Information Technology",
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
    title: "Pilgrims Program Organization",
    location: "Jeddah",
    date: "03 June – 03 June",
    organizer: "Albir Society Jeddah",
  },
  {
    title:
      "Visitor and Event Organization — Robocon Robotics & Inventions Exhibition",
    location: "Jeddah",
    date: "15 June – 17 June",
  },
  {
    title: "Event Organizer",
    location: "Jeddah",
    date: "09 September – 11 September",
    organizer: "Wedad Charity Foundation",
  },
  {
    title: "Al-Ittihad Program for People with Disabilities at KidZania",
    location: "Jeddah",
    date: "25 September – 25 September",
  },
  {
    title: "World Coffee Day Event Organization",
    location: "Jeddah",
    date: "02 October – 02 October",
    organizer: "Albir Society Jeddah",
  },
  {
    title: "National Day Event Coordination — An Hour of Giving",
    location: "Jeddah",
    date: "12 October – 13 October",
  },
  {
    title: "Towards a Promising Future Program Organization",
    location: "Jeddah",
    date: "21 October – 21 October",
    organizer: "Albir Society Jeddah",
  },
  {
    title: "New Year’s Event Preparation",
    date: "December 2022",
    organizer: "Sukoon International Extended Care Center",
    hours: 5,
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
