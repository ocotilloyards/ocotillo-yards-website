export function DesertScene({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 560"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Late light over a desert lake community with ocotillo, palo verde, and warm stone"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4d5a0" />
          <stop offset="38%" stopColor="#e8a36a" />
          <stop offset="68%" stopColor="#c56a45" />
          <stop offset="100%" stopColor="#6a5a52" />
        </linearGradient>
        <linearGradient id="lake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5d8a86" />
          <stop offset="55%" stopColor="#3e6e6c" />
          <stop offset="100%" stopColor="#243f3e" />
        </linearGradient>
      </defs>
      <rect width="1200" height="560" fill="url(#sky)" />
      <circle cx="980" cy="128" r="52" fill="#f2c56d" opacity="0.95" />
      <path d="M0 250 C180 210 320 230 480 200 C650 168 780 210 1200 188 L1200 320 L0 340 Z" fill="#7a6a5c" opacity="0.35" />
      <path d="M0 300 C220 268 400 290 620 260 C820 234 980 270 1200 250 L1200 360 L0 380 Z" fill="#5c5348" opacity="0.45" />
      <path d="M0 360 C200 330 420 350 700 328 C900 312 1050 338 1200 322 L1200 430 L0 430 Z" fill="#c9b08a" />
      <path d="M0 410 C260 390 520 418 780 400 C960 388 1100 410 1200 402 L1200 560 L0 560 Z" fill="url(#lake)" />
      <path d="M40 430 L70 430 L82 390 L100 430 L132 430 L148 360 L164 430 L196 430 L180 320 L160 430" fill="#3f5338" />
      <ellipse cx="168" cy="318" rx="42" ry="16" fill="#b7c85a" />
      <ellipse cx="132" cy="328" rx="28" ry="12" fill="#9aaa4a" />
      <g stroke="#2d3b2a" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M250 430 C248 360 246 300 244 250" />
        <path d="M262 430 C264 350 268 290 272 240" />
        <path d="M274 430 C278 370 286 310 294 268" />
        <path d="M256 430 C254 380 252 330 250 290" />
      </g>
      <g stroke="#c94a2c" strokeWidth="2.2" fill="#c94a2c" strokeLinecap="round">
        <path d="M244 250 l-8 -12" />
        <path d="M244 248 l7 -11" />
        <path d="M272 240 l-8 -14" />
        <path d="M272 238 l9 -13" />
        <path d="M294 268 l-7 -10" />
        <path d="M294 266 l8 -10" />
        <circle cx="236" cy="237" r="3" />
        <circle cx="281" cy="225" r="3.2" />
        <circle cx="302" cy="256" r="2.6" />
      </g>
      <rect x="820" y="348" width="220" height="54" rx="2" fill="#d9c4a0" />
      <rect x="828" y="356" width="204" height="6" fill="#c9b08a" />
      <rect x="828" y="372" width="204" height="6" fill="#c9b08a" />
      <rect x="828" y="388" width="204" height="6" fill="#c9b08a" />
      <path d="M900 348 C910 300 930 270 948 230" stroke="#3f5338" strokeWidth="4" fill="none" />
      <ellipse cx="948" cy="228" rx="36" ry="14" fill="#b7c85a" />
      <ellipse cx="972" cy="238" rx="22" ry="10" fill="#c5d46c" />
      <path d="M40 470 C180 458 400 478 640 462 C860 448 1040 470 1160 456" stroke="#7ba8a4" strokeWidth="2" fill="none" opacity="0.5" />
    </svg>
  );
}
