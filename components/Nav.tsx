import { SERVER_NAME } from "@/lib/config";

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
        <div className="nav-links">
          <a href="#kort">Kort</a>
          <a href="#bosser">Bosser</a>
          <a href="#items">Items</a>
          <a href="#klasser">Klasser</a>
          <a href="#visionsboard">Visionsboard</a>
        </div>
      </div>
    </nav>
  );
}
