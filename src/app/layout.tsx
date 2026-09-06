import type { Metadata } from "next";
import {
  Manrope,
  Cormorant_Garamond,
  Noto_Sans_Arabic,
} from "next/font/google";
import "./globals.css";
const sans = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});
const serif = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const arabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false,
});
export const metadata: Metadata = {
  title: "Juri Maswadi | Information Technology Student",
  description:
    "Juri Maswadi, an Information Technology student at King Abdulaziz University, Software Engineering Intern at Ting, and IEEE KAU SB (Female) Chair. Explore experience, leadership, volunteering, and a curiosity for AI, cloud, and data engineering.",
  authors: [{ name: "Juri Maswadi" }],
  openGraph: {
    title: "Juri Maswadi | Learning, building, leading",
    description:
      "Information Technology student at King Abdulaziz University. Explore my experience, communities, and curiosity for technology.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Juri Maswadi | Information Technology Student",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${arabic.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
