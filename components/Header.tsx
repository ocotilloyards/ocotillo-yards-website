"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/media";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-void/80 to-transparent" />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <Wordmark compact />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-caps text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-bone/80 transition hover:text-ember"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-caps text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ember transition hover:text-bone"
          >
            Request a concept
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="flex flex-col gap-1.5">
            <span className="block h-px w-5 bg-bone" />
            <span className="block h-px w-5 bg-bone" />
            <span className="block h-px w-5 bg-bone" />
          </span>
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-bone/10 bg-void/95 px-5 py-6 backdrop-blur-md md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-4">
            {nav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-caps text-sm font-semibold uppercase tracking-[0.22em] text-bone"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="font-caps text-sm font-semibold uppercase tracking-[0.22em] text-ember"
                onClick={() => setOpen(false)}
              >
                Request a concept
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
