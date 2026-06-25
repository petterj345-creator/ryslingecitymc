const classes = [
  {
    glyph: "⚔",
    name: "Kriger",
    kicker: "Nærkamp · Tank",
    desc: "Stå i frontlinjen, hold fjenderne væk fra holdet og slå hårdt tilbage.",
  },
  {
    glyph: "✦",
    name: "Magiker",
    kicker: "Magi · Burst",
    desc: "Kontrollér slagmarken med elementar-magi og enorm enkelt-mål skade.",
  },
  {
    glyph: "➶",
    name: "Jæger",
    kicker: "Afstand · Mobilitet",
    desc: "Hurtig, mobil og dødelig på afstand. Pluk fjender af, før de når dig.",
  },
  {
    glyph: "❂",
    name: "Helbreder",
    kicker: "Støtte · Sustain",
    desc: "Hold holdet i live gennem de hårdeste encounters med buffs og heals.",
  },
];

export default function Classes() {
  return (
    <section className="section" id="klasser">
      <div className="container">
        <span className="eyebrow">Custom · Klasser</span>
        <h2 className="section-title">Vælg din rolle</h2>
        <p className="section-lead">
          Hver klasse har sine egne evner og skill-træer. Find den spillestil,
          der passer dig — og respec mellem sæsoner, hvis du vil prøve noget
          nyt.
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
