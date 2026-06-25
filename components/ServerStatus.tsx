"use client";

import { useEffect, useState } from "react";

type Status = {
  online: boolean;
  players: { online: number; max: number };
};

export default function ServerStatus() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    let active = true;
    const load = () =>
      fetch("/api/status")
        .then((r) => r.json())
        .then((d: Status) => {
          if (active) setStatus(d);
        })
        .catch(() => {
          /* keep last known state */
        });

    load();
    const id = setInterval(load, 60_000);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, []);

  const state = !status ? "loading" : status.online ? "on" : "off";
  const label =
    state === "loading"
      ? "Checking server…"
      : state === "on"
        ? `${status!.players.online} / ${status!.players.max} players online`
        : "Server offline";

  return (
    <span className={`live-status ${state}`} aria-live="polite">
      <span className="live-dot" aria-hidden="true" />
      {label}
    </span>
  );
}
