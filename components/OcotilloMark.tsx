export function OcotilloMark({ className = "h-10 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 62 C10 40 8 28 7 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16 62 C16 38 17 24 18 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M22 62 C22 42 24 30 27 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M13 62 C13 44 12 32 11 16" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M19 62 C20 46 21 34 23 18" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M7 10 l-3 -4" stroke="#c45c2c" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M7 8 l3 -4" stroke="#c45c2c" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M18 7 l-3 -5" stroke="#d45a3a" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M18 6 l4 -5" stroke="#d45a3a" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M27 11 l-3 -4" stroke="#c45c2c" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M27 10 l4 -4" stroke="#e07a4a" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M11 17 l-2 -3" stroke="#e07a4a" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M23 18 l2 -3" stroke="#e07a4a" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="6" cy="5" r="1.2" fill="#c45c2c" />
      <circle cx="18" cy="2" r="1.4" fill="#c45c2c" />
      <circle cx="31" cy="6" r="1.2" fill="#e07a4a" />
    </svg>
  );
}
