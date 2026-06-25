"use client";

import { useState } from "react";

// Skift denne til din rigtige server-adresse
const SERVER_IP = "play.ryslingecity.dk";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyIp = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard kan fejle i nogle browsere - ignorer stille
    }
  };

  return (
    <main className="page">
      <section className="hero">
        <h1 className="title">Ryslinge City</h1>
        <p className="subtitle">
          En dansk Minecraft-server med quests, bosser og et levende bysamfund.
        </p>

        <div className="ip-box">
          <span className="ip">{SERVER_IP}</span>
          <button className="copy-btn" onClick={copyIp}>
            {copied ? "Kopieret!" : "Kopier IP"}
          </button>
        </div>
      </section>

      <section className="features">
        <article className="card">
          <h2>Quests</h2>
          <p>Gennemfør quests og lås nye områder og belønninger op.</p>
        </article>
        <article className="card">
          <h2>Bosser</h2>
          <p>Tag kampen op mod custom MythicMobs-bosser med unikke drops.</p>
        </article>
        <article className="card">
          <h2>By &amp; Handel</h2>
          <p>Byg, handl og bliv en del af et aktivt fællesskab.</p>
        </article>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Ryslinge City</p>
      </footer>
    </main>
  );
}
