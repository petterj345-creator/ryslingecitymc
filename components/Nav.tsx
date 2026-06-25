import { SERVER_NAME, DISCORD_URL } from "@/lib/config";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l8 4.5v9L12 22l-8-6.5v-9L12 2z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="M12 7v10M7 9.5l10 5M17 9.5l-10 5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </span>
          {SERVER_NAME}
        </a>
        <div className="nav-right">
          <div className="nav-links">
            <a href="/#towns">Towns</a>
            <a href="/#maps">Maps</a>
            <a href="/#bosses">Bosses</a>
            <a href="/#classes">Classes</a>
            <a href="/store">Store</a>
            <a href="/#vision-board">Vision Board</a>
          </div>
          <a
            className="nav-discord"
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join the Discord"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.3.5c1.7.4 2.9 1 4.1 1.8a13.7 13.7 0 0 0-12.4 0C8 4.5 9.2 3.9 10.9 3.5L10.6 3a19.8 19.8 0 0 0-4.9 1.4C2.4 9 1.5 13.4 1.9 17.8A19.9 19.9 0 0 0 8 20.9l.5-.8c-.8-.3-1.6-.7-2.3-1.2l.6-.4a14.2 14.2 0 0 0 12.4 0l.6.4c-.7.5-1.5.9-2.3 1.2l.5.8a19.9 19.9 0 0 0 6.1-3.1c.5-5-.9-9.4-3.8-13.2ZM8.5 15.3c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm7 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
            </svg>
            <span className="nav-discord-label">Discord</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
