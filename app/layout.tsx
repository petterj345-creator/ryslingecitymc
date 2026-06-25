import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryslinge City",
  description: "Den officielle hjemmeside for Ryslinge City Minecraft-serveren.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
