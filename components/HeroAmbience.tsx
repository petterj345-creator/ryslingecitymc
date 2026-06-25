// Ambient hero motion: slow drifting glow-orbs for depth + rising embers/motes.
// Pure CSS animations, no JS. Disabled under prefers-reduced-motion globally.

type Mote = { left: number; size: number; dur: number; delay: number; drift: number; color: string; opacity: number };

// Hand-tuned so the motion feels organic rather than uniform.
const motes: Mote[] = [
  { left: 6, size: 4, dur: 14, delay: 0, drift: 20, color: "#f6cd63", opacity: 0.8 },
  { left: 14, size: 3, dur: 18, delay: 3, drift: -16, color: "#e0a93b", opacity: 0.6 },
  { left: 22, size: 5, dur: 16, delay: 6, drift: 26, color: "#f6cd63", opacity: 0.7 },
  { left: 31, size: 2, dur: 20, delay: 1, drift: -10, color: "#a98cff", opacity: 0.7 },
  { left: 40, size: 4, dur: 15, delay: 8, drift: 18, color: "#e0a93b", opacity: 0.65 },
  { left: 48, size: 3, dur: 19, delay: 4, drift: -22, color: "#f6cd63", opacity: 0.6 },
  { left: 57, size: 5, dur: 13, delay: 2, drift: 14, color: "#a98cff", opacity: 0.6 },
  { left: 65, size: 3, dur: 17, delay: 9, drift: -18, color: "#f6cd63", opacity: 0.7 },
  { left: 73, size: 4, dur: 21, delay: 5, drift: 24, color: "#e0a93b", opacity: 0.6 },
  { left: 81, size: 2, dur: 16, delay: 7, drift: -12, color: "#f6cd63", opacity: 0.7 },
  { left: 89, size: 5, dur: 14, delay: 10, drift: 20, color: "#a98cff", opacity: 0.55 },
  { left: 95, size: 3, dur: 18, delay: 3, drift: -20, color: "#e0a93b", opacity: 0.6 },
];

const orbs = [
  { left: 12, top: 18, size: 280, dx: 40, dy: 30, dur: 22, color: "rgba(224,169,59,0.16)" },
  { left: 68, top: 8, size: 340, dx: -50, dy: 40, dur: 28, color: "rgba(138,107,255,0.18)" },
  { left: 45, top: 55, size: 240, dx: 30, dy: -36, dur: 25, color: "rgba(216,73,46,0.12)" },
];

export default function HeroAmbience() {
  return (
    <div className="hero-fx" aria-hidden="true">
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
