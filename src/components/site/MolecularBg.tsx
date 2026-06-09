export function MolecularBg({ intensity = 1 }: { intensity?: number }) {
  // Deterministic pseudo-random nodes for SSR consistency
  const nodes = Array.from({ length: 28 }, (_, i) => {
    const seed = i * 9301 + 49297;
    const x = (seed % 1000) / 10;
    const y = ((seed * 7) % 1000) / 10;
    const r = 1 + ((seed * 3) % 30) / 10;
    const d = 6 + ((seed * 11) % 80) / 10;
    return { x, y, r, d };
  });
  const links: Array<[number, number]> = [
    [0, 3], [1, 4], [2, 5], [3, 7], [4, 8], [6, 9], [7, 11], [10, 12],
    [11, 14], [13, 15], [14, 17], [16, 18], [17, 20], [19, 21], [20, 23],
    [22, 24], [23, 26], [25, 27], [5, 12], [8, 16], [15, 22], [9, 19],
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        style={{ opacity: 0.5 * intensity }}
      >
        <defs>
          <radialGradient id="node-grad">
            <stop offset="0%" stopColor="oklch(0.92 0.16 195)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.82 0.16 200)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="link-grad" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.82 0.16 200)" stopOpacity="0.0" />
            <stop offset="50%" stopColor="oklch(0.82 0.16 200)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.70 0.20 290)" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke="url(#link-grad)"
            strokeWidth="0.12"
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i} style={{ animation: `float-y ${n.d}s ease-in-out infinite`, transformOrigin: `${n.x}% ${n.y}%` }}>
            <circle cx={n.x} cy={n.y} r={n.r * 0.5} fill="oklch(0.85 0.18 195)" opacity="0.9" />
            <circle cx={n.x} cy={n.y} r={n.r * 2} fill="url(#node-grad)" opacity="0.5" />
          </g>
        ))}
      </svg>
      {/* DNA ribbon */}
      <svg viewBox="0 0 1200 400" className="absolute -bottom-10 left-0 w-full opacity-30" aria-hidden>
        <path
          d="M0 200 C 200 50 400 350 600 200 S 1000 50 1200 200"
          fill="none"
          stroke="oklch(0.82 0.16 200)"
          strokeWidth="1.2"
          strokeDasharray="6 8"
        />
        <path
          d="M0 220 C 200 70 400 370 600 220 S 1000 70 1200 220"
          fill="none"
          stroke="oklch(0.70 0.20 290)"
          strokeWidth="1.2"
          strokeDasharray="6 8"
        />
      </svg>
    </div>
  );
}
