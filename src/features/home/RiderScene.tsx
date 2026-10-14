export function RiderScene({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 460"
      role="img"
      aria-label="Two friends riding bicycles along a country lane at sunset"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(35 85% 88%)" />
          <stop offset="55%" stopColor="hsl(28 90% 82%)" />
          <stop offset="100%" stopColor="hsl(18 80% 76%)" />
        </linearGradient>
        <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(28 35% 60%)" />
          <stop offset="100%" stopColor="hsl(24 30% 48%)" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(30 45% 72%)" />
          <stop offset="100%" stopColor="hsl(26 40% 62%)" />
        </linearGradient>
      </defs>

      <rect width="640" height="460" fill="url(#sky)" />
      <circle cx="500" cy="120" r="52" fill="hsl(42 95% 72%)" opacity="0.9" />

      <path d="M0 300 Q160 240 320 290 T640 268 L640 460 L0 460 Z" fill="url(#ground)" />
      <path d="M0 360 Q180 330 360 356 T640 344 L640 460 L0 460 Z" fill="url(#road)" />

      {/* Riders */}
      <g stroke="hsl(20 25% 16%)" strokeWidth="4" fill="none" strokeLinecap="round">
        {/* Bike one */}
        <circle cx="180" cy="368" r="34" />
        <circle cx="292" cy="368" r="34" />
        <path d="M180 368 L232 322 L292 368 M232 322 L236 368 M232 322 L268 320" />
        {/* Bike two */}
        <circle cx="392" cy="378" r="30" />
        <circle cx="496" cy="378" r="30" />
        <path d="M392 378 L438 336 L496 378 M438 336 L442 378 M438 336 L470 334" />
      </g>

      {/* Rider one */}
      <g>
        <path
          d="M226 318 L246 268 L268 300 M246 268 L236 322"
          stroke="hsl(20 25% 16%)"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="252" cy="252" r="16" fill="hsl(20 25% 16%)" />
        <path d="M232 316 L272 316" stroke="hsl(20 88% 50%)" strokeWidth="7" strokeLinecap="round" />
      </g>

      {/* Rider two */}
      <g>
        <path
          d="M432 332 L450 286 L470 314 M450 286 L442 336"
          stroke="hsl(20 25% 20%)"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="456" cy="272" r="14" fill="hsl(20 25% 20%)" />
        <path d="M438 330 L472 330" stroke="hsl(24 92% 58%)" strokeWidth="7" strokeLinecap="round" />
      </g>

      {/* Birds */}
      <g stroke="hsl(20 25% 30%)" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M96 96 q10 -8 20 0 q10 -8 20 0" />
        <path d="M150 68 q8 -6 16 0 q8 -6 16 0" />
      </g>
    </svg>
  );
}