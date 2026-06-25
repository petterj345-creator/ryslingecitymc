// Signature element: the endgame "Atlas" drawn as a branching node-graph of
// escalating map tiers. Nodes warm from bone -> gold -> ember as tiers climb.
type Node = { id: number; x: number; y: number; tier: number; label?: string };

const nodes: Node[] = [
  { id: 0, x: 70, y: 200, tier: 1, label: "Start" },
  { id: 1, x: 190, y: 130, tier: 3 },
  { id: 2, x: 190, y: 270, tier: 3 },
  { id: 3, x: 320, y: 90, tier: 5 },
  { id: 4, x: 330, y: 210, tier: 6 },
  { id: 5, x: 320, y: 320, tier: 5 },
  { id: 6, x: 470, y: 150, tier: 9 },
  { id: 7, x: 480, y: 280, tier: 8 },
  { id: 8, x: 620, y: 110, tier: 12 },
  { id: 9, x: 630, y: 240, tier: 11 },
  { id: 10, x: 770, y: 180, tier: 16, label: "Pinacle" },
];

const links: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5], [3, 6], [4, 6],
  [4, 7], [5, 7], [6, 8], [6, 9], [7, 9], [8, 10], [9, 10],
];

function tierColor(tier: number): string {
  if (tier >= 14) return "#d8492e"; // ember — pinnacle
  if (tier >= 9) return "#f6cd63"; // bright gold
  if (tier >= 5) return "#e0a93b"; // gold
  return "#9a93a8"; // muted — early tiers
}

export default function AtlasMaps() {
  return (
    <section className="section" id="kort">
      <div className="container">
        <span className="eyebrow">Endgame · Kort</span>
        <h2 className="section-title">Et atlas der bliver ved at vokse</h2>
        <p className="section-lead">
          Kort er kernen i endgame. Hvert kort er sin egen instans med
          modifiers, der skruer op for både fare og belønning. Kæd dem sammen,
          opgrader dem, og pres dig vej mod de højeste tiers — hvor de bedste
          drops gemmer sig.
        </p>

        <div className="atlas-wrap">
          <svg
            viewBox="0 0 840 400"
            width="100%"
            role="img"
            aria-label="Kort-atlas med stigende tiers fra start til pinnacle"
          >
            <g stroke="var(--color-line-strong)" strokeWidth="1.5">
              {links.map(([a, b], i) => (
                <line
                  key={i}
                  x1={nodes[a].x}
                  y1={nodes[a].y}
                  x2={nodes[b].x}
                  y2={nodes[b].y}
                />
              ))}
            </g>
            {nodes.map((n) => {
              const c = tierColor(n.tier);
              const r = n.tier >= 14 ? 13 : n.tier >= 9 ? 10 : 8;
              return (
                <g key={n.id}>
                  <circle cx={n.x} cy={n.y} r={r + 7} fill="none" stroke={c} strokeOpacity={0.3} />
                  <circle cx={n.x} cy={n.y} r={r} fill={c} />
                  <text
                    x={n.x}
                    y={n.y - r - 12}
                    textAnchor="middle"
                    fontSize="12"
                    fontFamily="var(--font-mono)"
                    fill={c}
                  >
                    T{n.tier}
                  </text>
                  {n.label && (
                    <text
                      x={n.x}
                      y={n.y + r + 22}
                      textAnchor="middle"
                      fontSize="11"
                      fontFamily="var(--font-mono)"
                      fill="var(--color-muted)"
                    >
                      {n.label}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        <div className="grid-auto">
          <div className="atlas-node-card">
            <div className="tier-badge" style={{ color: "var(--color-gold)" }}>
              MODIFIERS
            </div>
            <h3 style={{ marginTop: "0.7rem", fontSize: "1.2rem" }}>
              Skru op for indsatsen
            </h3>
            <p style={{ marginTop: "0.5rem", color: "var(--color-muted)", fontSize: "0.95rem" }}>
              Hvert kort kan rulles med modifiers. Mere fare betyder bedre loot
              — du bestemmer selv risikoen.
            </p>
          </div>
          <div className="atlas-node-card">
            <div className="tier-badge" style={{ color: "var(--color-arcane-bright)" }}>
              OPGRADERING
            </div>
            <h3 style={{ marginTop: "0.7rem", fontSize: "1.2rem" }}>
              Form dit atlas
            </h3>
            <p style={{ marginTop: "0.5rem", color: "var(--color-muted)", fontSize: "0.95rem" }}>
              Brug fund til at hæve tier og forbedre dropraterne på de kort, du
              vil køre igen og igen.
            </p>
          </div>
          <div className="atlas-node-card">
            <div className="tier-badge" style={{ color: "var(--color-ember)" }}>
              PINNACLE
            </div>
            <h3 style={{ marginTop: "0.7rem", fontSize: "1.2rem" }}>
              De højeste tiers
            </h3>
            <p style={{ marginTop: "0.5rem", color: "var(--color-muted)", fontSize: "0.95rem" }}>
              Når du når toppen venter de hårdeste encounters og de mest
              eftertragtede unikke drops på serveren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
