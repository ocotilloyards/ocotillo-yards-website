"use client";

import Link from "next/link";
import { useState } from "react";
import { Wordmark } from "./Wordmark";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/homeowners", label: "Homeowners" },
  { href: "/contractors", label: "For contractors" },
  { href: "/work", label: "Work" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stone/60 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Wordmark compact />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-muted transition hover:text-dusk">
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-ocotillo px-4 py-2 text-sm font-medium text-paper shadow-sm transition hover:bg-adobe"
          >
            Request a free concept
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-stone md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-dusk" />
            <span className="block h-0.5 w-5 bg-dusk" />
            <span className="block h-0.5 w-5 bg-dusk" />
          </span>
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-stone/60 px-4 py-3 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block py-1 text-dusk" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="mt-1 inline-flex rounded-full bg-ocotillo px-4 py-2 text-sm font-medium text-paper"
                onClick={() => setOpen(false)}
              >
                Request a free concept
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
