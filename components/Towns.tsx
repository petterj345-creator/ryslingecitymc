const pillars = [
  {
    glyph: "🏰",
    kicker: "Settle",
    name: "Found or join a town",
    desc: "Start your own town or join an existing one, and build a home in the world together.",
  },
  {
    glyph: "🧱",
    kicker: "Protect",
    name: "Claim & defend",
    desc: "Claim land so your builds stay safe. What you build is yours to keep.",
  },
  {
    glyph: "🤝",
    kicker: "Unite",
    name: "Nations & alliances",
    desc: "Towns band together into nations. Forge alliances — or rivalries — across the map.",
  },
  {
    glyph: "💰",
    kicker: "Trade",
    name: "Player economy",
    desc: "Run shops, trade your finds and build wealth in a living, player-driven economy.",
  },
];

export default function Towns() {
  return (
    <section className="section" id="towns">
      <div className="container">
        <span className="eyebrow">Survival · Towns &amp; Nations</span>
        <h2 className="section-title">Build your town, join a nation</h2>
        <p className="section-lead">
          At its heart Ryslinge City is a survival world with Towny. Claim land,
          grow a town, and team up into nations — then take the wealth you build
          into the endgame.
        </p>

        <div className="grid-auto">
          {pillars.map((p) => (
            <article className="tile town" key={p.name}>
              <div className="tile-glyph" aria-hidden="true">
                {p.glyph}
              </div>
              <div className="tile-kicker">{p.kicker}</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
