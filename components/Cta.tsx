import type { ReactNode } from "react";
import Link from "next/link";

export function Cta({
  href,
  children,
  variant = "line",
}: {
  href: string;
  children: ReactNode;
  variant?: "line" | "frame";
}) {
  const cls =
    variant === "frame"
      ? "inline-flex items-center gap-3 border border-bone/80 px-5 py-3 font-caps text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-bone transition hover:border-ember hover:text-ember"
      : "inline-flex items-center gap-3 border-b border-bone/70 pb-1 font-caps text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-bone transition hover:border-ember hover:text-ember";

  return (
    <Link href={href} className={cls}>
      {children}
      <span aria-hidden className="translate-y-px">
        →
      </span>
    </Link>
  );
}
