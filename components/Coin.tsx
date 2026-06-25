// A real minted-coin graphic for rewards, instead of an emoji.
export default function Coin({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Coin"
      className="coin"
    >
      <defs>
        <radialGradient id="coinFace" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#fff1c4" />
          <stop offset="45%" stopColor="#f6cd63" />
          <stop offset="100%" stopColor="#c5871b" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="#a8721a" />
      <circle cx="24" cy="24" r="20.5" fill="url(#coinFace)" />
      <circle cx="24" cy="24" r="16.5" fill="none" stroke="#a8721a" strokeWidth="1.6" strokeOpacity="0.55" />
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontSize="19"
        fontWeight="700"
        fontFamily="var(--font-display)"
        fill="#7a5310"
      >
        R
      </text>
    </svg>
  );
}
