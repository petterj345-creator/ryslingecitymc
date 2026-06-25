// Items rendered as in-game loot tooltips, colour-coded by rarity.
const items = [
  {
    rarity: "Almindelig",
    color: "var(--color-muted)",
    name: "Jernklinge",
    stats: [
      ["Skade", "12 – 18"],
      ["Angrebshast.", "1.6"],
    ],
  },
  {
    rarity: "Magisk",
    color: "var(--color-magic)",
    name: "Tidevandets Stav",
    stats: [
      ["Magisk skade", "34 – 51"],
      ["+ Mana", "18%"],
      ["Affix", "Kulde"],
    ],
  },
  {
    rarity: "Sjælden",
    color: "var(--color-gold)",
    name: "Gravhøjens Plade",
    stats: [
      ["Rustning", "240"],
      ["+ Liv", "+85"],
      ["+ Modstand", "Alle 12%"],
    ],
  },
  {
    rarity: "Unik",
    color: "var(--color-ember)",
    name: "Den Faldne Stjerne",
    stats: [
      ["Effekt", "Stjernefald"],
      ["+ Krit", "35%"],
      ["Kilde", "Pinnacle-boss"],
    ],
  },
];

export default function Items() {
  return (
    <section className="section" id="items">
      <div className="container">
        <span className="eyebrow">Custom · Items</span>
        <h2 className="section-title">Loot der ændrer din build</h2>
        <p className="section-lead">
          Et eget item-system med sjældenhedsgrader, affixes og unikke
          genstande. De bedste fund definerer ikke bare dine tal — de ændrer
          hvordan du spiller.
        </p>

        <div className="loot-grid">
          {items.map((it) => (
            <article
              className="loot-card"
              key={it.name}
              style={{ "--rarity": it.color } as React.CSSProperties}
            >
              <div className="rarity">{it.rarity}</div>
              <div className="iname">{it.name}</div>
              <div className="stats">
                {it.stats.map(([k, v]) => (
                  <div className="stat" key={k}>
                    <span>{k}</span>
                    <b>{v}</b>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
