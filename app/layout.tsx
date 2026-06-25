import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryslinge City — Dansk MMORPG",
  description:
    "Dansk Minecraft-MMORPG med endgame-kort, custom bosser, unikke items, klasser og daglige belønninger. Følg udviklingen på vores visionsboard.",
  openGraph: {
    title: "Ryslinge City — Dansk MMORPG",
    description:
      "Endgame-kort, custom bosser, unikke items, klasser og daglige belønninger.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="da"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
