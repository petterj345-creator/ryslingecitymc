const bosses = [
  {
    glyph: "🜂",
    name: "Askekongen",
    kicker: "Verdensboss · Tier 1",
    desc: "En brændende kolos i tre faser. Overlev hans ild-storm og få chance for hans signatur-våben.",
  },
  {
    glyph: "🜄",
    name: "Dybets Vogter",
    kicker: "Verdensboss · Tier 2",
    desc: "Lurer i de oversvømmede dybder. Kræver et koordineret hold og det rigtige gear.",
  },
  {
    glyph: "🜁",
    name: "Den Faldne Stjerne",
    kicker: "Pinnacle · Endgame",
    desc: "Serverens hårdeste encounter. Kun de bedst udstyrede holds slipper levende fra arenaen.",
  },
];

export default function Bosses() {
  return (
    <section className="section" id="bosser">
      <div className="container">
        <span className="eyebrow">Custom · Bosser</span>
        <h2 className="section-title">Kampe der kræver en plan</h2>
        <p className="section-lead">
          Hver boss har sine egne mekanikker, faser og garanterede drops. Lær
          mønstrene, byg dit hold, og tag kampen op mod serverens stærkeste
          fjender.
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
