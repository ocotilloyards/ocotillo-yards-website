"use client";

import { useId, useState } from "react";
import { asset } from "@/lib/base-path";

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [pct, setPct] = useState(52);
  const id = useId();

  return (
    <figure className="relative w-full overflow-hidden bg-void">
      <div className="relative aspect-[16/9] w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(afterSrc)} alt={afterAlt} className="absolute inset-0 h-full w-full object-cover" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(beforeSrc)}
          alt={beforeAlt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-bone"
          style={{ left: `${pct}%` }}
          aria-hidden
        >
          <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-bone bg-void/80 font-caps text-xs tracking-widest text-bone">
            ‹ ›
          </span>
        </div>
        <p className="pointer-events-none absolute left-4 top-4 z-10 font-caps text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone">
          Before
        </p>
        <p className="pointer-events-none absolute right-4 top-4 z-10 font-caps text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-ember">
          After · AI Concept
        </p>
        <label htmlFor={id} className="sr-only">
          Drag to compare the existing backyard with the AI concept
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={pct}
          onChange={(e) => setPct(Number(e.target.value))}
          className="absolute inset-0 z-20 m-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
    </figure>
  );
}
