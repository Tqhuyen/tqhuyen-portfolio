import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";

import { profile } from "@/content/profile";
import "./globals.css";

// "Developer Mono" pairing from ui-ux-pro-max, same as the GitHub README art.
const sans = IBM_Plex_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-mono",
});

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const metadata: Metadata = {
  metadataBase: new URL(productionHost ? `https://${productionHost}` : "http://localhost:3000"),
  title: `${profile.name} · ${profile.role}`,
  description:
    "AI engineer and researcher from Vietnam: computer vision, medical imaging, LLM systems and quantum machine learning. Projects, publications and awards.",
  openGraph: { type: "website", title: `${profile.name} · ${profile.role}` },
};

// Applies a saved theme before first paint; without one the CSS follows the OS.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
