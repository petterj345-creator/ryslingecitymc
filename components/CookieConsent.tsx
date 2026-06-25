"use client";

import { useEffect, useState } from "react";

const KEY = "rc_cookie_consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* localStorage unavailable — just don't show the banner */
    }
  }, []);

  const dismiss = (value: "accepted" | "necessary") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookies">
      <div>
        <strong className="cookie-title">We use cookies</strong>
        <p>
          We use cookies to keep the site working and to remember your admin
          login. No tracking or advertising.
        </p>
      </div>
      <div className="cookie-actions">
        <button className="btn btn-ghost" onClick={() => dismiss("necessary")}>
          Necessary only
        </button>
        <button className="btn btn-primary" onClick={() => dismiss("accepted")}>
          Accept
        </button>
      </div>
    </div>
  );
}
