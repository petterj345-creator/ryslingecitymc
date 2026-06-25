// Items rendered as in-game loot tooltips, colour-coded by rarity.
const items = [
  {
    rarity: "Common",
    color: "var(--color-muted)",
    name: "Iron Blade",
    stats: [
      ["Damage", "12 – 18"],
      ["Attack speed", "1.6"],
    ],
  },
  {
    rarity: "Magic",
    color: "var(--color-magic)",
    name: "Tidecaller Staff",
    stats: [
      ["Spell damage", "34 – 51"],
      ["+ Mana", "18%"],
      ["Affix", "Frost"],
    ],
  },
  {
    rarity: "Rare",
    color: "var(--color-gold)",
    name: "Barrow Plate",
    stats: [
      ["Armor", "240"],
      ["+ Life", "+85"],
      ["+ Resist", "All 12%"],
    ],
  },
  {
    rarity: "Unique",
    color: "var(--color-ember)",
    name: "The Fallen Star",
    stats: [
      ["Effect", "Starfall"],
      ["+ Crit", "35%"],
      ["Source", "Pinnacle boss"],
    ],
  },
];

export default function Items() {
  return (
    <section className="section" id="items">
      <div className="container">
        <span className="eyebrow">Custom · Items</span>
        <h2 className="section-title">Loot that changes your build</h2>
        <p className="section-lead">
          A custom item system with rarity tiers, affixes and unique gear. The
          best finds don't just bump your numbers — they change how you play.
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
