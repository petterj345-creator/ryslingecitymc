"use client";

import { useState } from "react";
import { SERVER_IP, DISCORD_URL } from "@/lib/config";
import AtlasBackdrop from "./AtlasBackdrop";
import ServerStatus from "./ServerStatus";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyIp = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard may be blocked — the IP stays visible for manual copying.
    }
  };

  return (
    <header className="hero" id="top">
      <AtlasBackdrop />
      <div className="container hero-inner">
        <div className="hero-toprow">
          <span className="eyebrow">Minecraft MMORPG · Season 1</span>
          <ServerStatus />
        </div>
        <h1>
          Ryslinge <span className="accent">City</span>
        </h1>
        <p className="hero-sub">
          A Minecraft MMORPG built around the endgame: generated maps, custom
          bosses, unique items and classes with real depth. Sharpen your build —
          the world is waiting.
        </p>

        <div className="loot-chip">
          <div>
            <div className="loot-chip-label">Server IP</div>
            <div className="loot-chip-ip">{SERVER_IP}</div>
          </div>
          <button className="copy-btn" onClick={copyIp}>
            {copied ? "Copied ✓" : "Copy IP"}
          </button>
        </div>

        <div className="hero-cta">
          <a className="btn btn-primary" href="#maps">
            Explore the endgame
          </a>
          <a
            className="btn btn-discord"
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.3.5c1.7.4 2.9 1 4.1 1.8a13.7 13.7 0 0 0-12.4 0C8 4.5 9.2 3.9 10.9 3.5L10.6 3a19.8 19.8 0 0 0-4.9 1.4C2.4 9 1.5 13.4 1.9 17.8A19.9 19.9 0 0 0 8 20.9l.5-.8c-.8-.3-1.6-.7-2.3-1.2l.6-.4a14.2 14.2 0 0 0 12.4 0l.6.4c-.7.5-1.5.9-2.3 1.2l.5.8a19.9 19.9 0 0 0 6.1-3.1c.5-5-.9-9.4-3.8-13.2ZM8.5 15.3c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm7 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
            </svg>
            Join the Discord
          </a>
          <a className="btn btn-ghost" href="#vision-board">
            See the vision board
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="num">∞</div>
            <div className="lbl">Generated maps</div>
          </div>
          <div className="hero-stat">
            <div className="num">Custom</div>
            <div className="lbl">Bosses &amp; loot</div>
          </div>
          <div className="hero-stat">
            <div className="num">1.21</div>
            <div className="lbl">Minecraft version</div>
          </div>
        </div>
      </div>
    </header>
  );
}
