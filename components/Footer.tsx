import { SERVER_IP, SERVER_NAME } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          © {new Date().getFullYear()} {SERVER_NAME} · Dansk Minecraft-MMORPG
        </div>
        <div style={{ fontFamily: "var(--font-mono)" }}>{SERVER_IP}</div>
      </div>
    </footer>
  );
}
