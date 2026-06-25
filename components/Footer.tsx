import { SERVER_IP, SERVER_NAME, DISCORD_URL } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          © {new Date().getFullYear()} {SERVER_NAME} · Minecraft MMORPG
        </div>
        <div className="footer-meta">
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
            Discord
          </a>
          <span style={{ fontFamily: "var(--font-mono)" }}>{SERVER_IP}</span>
        </div>
      </div>
    </footer>
  );
}
