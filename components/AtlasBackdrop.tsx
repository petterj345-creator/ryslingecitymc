// Faint constellation of map-nodes used behind the hero — a quiet echo of
// the Atlas signature further down the page.
export default function AtlasBackdrop() {
  const nodes = [
    [120, 90], [260, 160], [200, 300], [380, 110], [440, 260],
    [560, 180], [620, 330], [330, 380], [700, 120], [760, 280],
  ];
  const links: [number, number][] = [
    [0, 1], [1, 2], [1, 3], [3, 4], [4, 5], [5, 6], [4, 7], [2, 7],
    [3, 8], [5, 9], [8, 9], [6, 9],
  ];
  return (
    <svg
      className="hero-atlas"
      viewBox="0 0 840 440"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="rgba(138,107,255,0.35)" strokeWidth="1">
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
          />
        ))}
      </g>
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i % 3 === 0 ? 5 : 3} fill="#e0a93b" />
          <circle
            cx={x}
            cy={y}
            r={i % 3 === 0 ? 11 : 7}
            fill="none"
            stroke="rgba(224,169,59,0.4)"
          />
        </g>
      ))}
    </svg>
  );
}
