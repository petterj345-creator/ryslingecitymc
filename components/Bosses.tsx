const bosses = [
  {
    glyph: "🜂",
    name: "The Ash King",
    kicker: "World Boss · Tier 1",
    desc: "A burning colossus in three phases. Survive his firestorm for a chance at his signature weapon.",
  },
  {
    glyph: "🜄",
    name: "Warden of the Deep",
    kicker: "World Boss · Tier 2",
    desc: "Lurking in the flooded depths. Demands a coordinated team and the right gear.",
  },
  {
    glyph: "🜁",
    name: "The Fallen Star",
    kicker: "Pinnacle · Endgame",
    desc: "The server's hardest encounter. Only the best-equipped teams leave the arena alive.",
  },
];

export default function Bosses() {
  return (
    <section className="section" id="bosses">
      <div className="container">
        <span className="eyebrow">Custom · Bosses</span>
        <h2 className="section-title">Fights that demand a plan</h2>
        <p className="section-lead">
          Every boss has its own mechanics, phases and guaranteed drops. Learn
          the patterns, build your team, and take on the strongest enemies on
          the server.
        </p>

        <div className="grid-auto">
          {bosses.map((b) => (
            <article className="tile boss" key={b.name}>
              <div className="tile-glyph" aria-hidden="true">
                {b.glyph}
              </div>
              <div className="tile-kicker">{b.kicker}</div>
              <h3>{b.name}</h3>
              <p>{b.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
