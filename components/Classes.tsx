const classes = [
  {
    glyph: "⚔",
    name: "Warrior",
    kicker: "Melee · Tank",
    desc: "Hold the front line, keep enemies off your team, and hit back hard.",
  },
  {
    glyph: "✦",
    name: "Mage",
    kicker: "Magic · Burst",
    desc: "Control the battlefield with elemental magic and massive single-target damage.",
  },
  {
    glyph: "🛡",
    name: "Paladin",
    kicker: "Melee · Support",
    desc: "A holy frontline that shields allies and smites enemies with divine power.",
  },
  {
    glyph: "🗡",
    name: "Rogue",
    kicker: "Stealth · Crit",
    desc: "Strike from the shadows with high crit and speed, then vanish before they react.",
  },
];

export default function Classes() {
  return (
    <section className="section" id="classes">
      <div className="container">
        <span className="eyebrow">Custom · Classes</span>
        <h2 className="section-title">Choose your role</h2>
        <p className="section-lead">
          Each class has its own abilities and skill trees. Find the playstyle
          that suits you — and respec between seasons if you want to try
          something new.
        </p>

        <div className="grid-auto">
          {classes.map((c) => (
            <article className="tile klass" key={c.name}>
              <div className="tile-glyph" aria-hidden="true">
                {c.glyph}
              </div>
              <div className="tile-kicker">{c.kicker}</div>
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
