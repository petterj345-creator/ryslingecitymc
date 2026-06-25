"use client";

import { useState } from "react";
import { SERVER_IP } from "@/lib/config";
import AtlasBackdrop from "./AtlasBackdrop";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyIp = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard kan være blokeret — så viser vi bare IP'en til manuel kopiering.
    }
  };

  return (
    <header className="hero" id="top">
      <AtlasBackdrop />
      <div className="container hero-inner">
        <span className="eyebrow">Dansk MMORPG · Sæson 1</span>
        <h1>
          Ryslinge <span className="accent">City</span>
        </h1>
        <p className="hero-sub">
          En dansk Minecraft-MMORPG bygget om endgame: generede kort, custom
          bosser, unikke items og klasser med dybde. Slib din build — verden
          venter.
        </p>

        <div className="loot-chip">
          <div>
            <div className="loot-chip-label">Server-IP</div>
            <div className="loot-chip-ip">{SERVER_IP}</div>
          </div>
          <button className="copy-btn" onClick={copyIp}>
            {copied ? "Kopieret ✓" : "Kopier IP"}
          </button>
        </div>

        <div className="hero-cta">
          <a className="btn btn-primary" href="#kort">
            Udforsk endgame
          </a>
          <a className="btn btn-ghost" href="#visionsboard">
            Se visionsboardet
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="num">∞</div>
            <div className="lbl">Genererede kort</div>
          </div>
          <div className="hero-stat">
            <div className="num">Custom</div>
            <div className="lbl">Bosser &amp; loot</div>
          </div>
          <div className="hero-stat">
            <div className="num">1.21</div>
            <div className="lbl">Minecraft-version</div>
          </div>
        </div>
      </div>
    </header>
  );
}
