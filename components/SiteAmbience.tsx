// Site-wide ambient motion: drifting glow-orbs + rising embers. Rendered once
// in the layout as a fixed, full-viewport layer behind all content, so it stays
// visible while scrolling. Pure CSS, disabled under prefers-reduced-motion.

type Mote = { left: number; size: number; dur: number; delay: number; drift: number; color: string; opacity: number };

const motes: Mote[] = [
  { left: 5, size: 4, dur: 17, delay: 0, drift: 24, color: "#f6cd63", opacity: 0.75 },
  { left: 13, size: 3, dur: 22, delay: 4, drift: -18, color: "#e0a93b", opacity: 0.55 },
  { left: 21, size: 5, dur: 19, delay: 8, drift: 30, color: "#f6cd63", opacity: 0.65 },
  { left: 29, size: 2, dur: 24, delay: 2, drift: -12, color: "#a98cff", opacity: 0.65 },
  { left: 37, size: 4, dur: 18, delay: 11, drift: 20, color: "#e0a93b", opacity: 0.6 },
  { left: 45, size: 3, dur: 23, delay: 6, drift: -26, color: "#f6cd63", opacity: 0.55 },
  { left: 54, size: 5, dur: 16, delay: 3, drift: 16, color: "#a98cff", opacity: 0.55 },
  { left: 62, size: 3, dur: 20, delay: 13, drift: -20, color: "#f6cd63", opacity: 0.65 },
  { left: 70, size: 4, dur: 25, delay: 7, drift: 28, color: "#e0a93b", opacity: 0.55 },
  { left: 78, size: 2, dur: 19, delay: 10, drift: -14, color: "#f6cd63", opacity: 0.65 },
  { left: 86, size: 5, dur: 17, delay: 14, drift: 22, color: "#a98cff", opacity: 0.5 },
  { left: 94, size: 3, dur: 21, delay: 5, drift: -24, color: "#e0a93b", opacity: 0.55 },
];

const orbs = [
  { left: 10, top: 12, size: 300, dx: 50, dy: 40, dur: 24, color: "rgba(224,169,59,0.14)" },
  { left: 72, top: 6, size: 360, dx: -60, dy: 50, dur: 30, color: "rgba(138,107,255,0.16)" },
  { left: 40, top: 34, size: 260, dx: 40, dy: -40, dur: 26, color: "rgba(216,73,46,0.1)" },
  { left: 84, top: 52, size: 320, dx: -45, dy: -50, dur: 32, color: "rgba(224,169,59,0.12)" },
  { left: 8, top: 64, size: 280, dx: 55, dy: 30, dur: 28, color: "rgba(138,107,255,0.13)" },
  { left: 55, top: 82, size: 300, dx: -40, dy: -35, dur: 27, color: "rgba(87,201,201,0.1)" },
];

export default function SiteAmbience() {
  return (
    <div className="site-fx" aria-hidden="true">
      {orbs.map((o, i) => (
        <span
          key={`o${i}`}
          className="orb"
          style={
            {
              left: `${o.left}%`,
              top: `${o.top}%`,
              width: o.size,
              height: o.size,
              background: `radial-gradient(circle, ${o.color}, transparent 70%)`,
              "--dx": `${o.dx}px`,
              "--dy": `${o.dy}px`,
              animationDuration: `${o.dur}s`,
            } as React.CSSProperties
          }
        />
      ))}
      {motes.map((m, i) => (
        <span
          key={`m${i}`}
          className="mote"
          style={
            {
              left: `${m.left}%`,
              width: m.size,
              height: m.size,
              background: m.color,
              boxShadow: `0 0 ${m.size * 2}px ${m.color}`,
              "--x": `${m.drift}px`,
              "--o": m.opacity,
              animationDuration: `${m.dur}s`,
              animationDelay: `${m.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
