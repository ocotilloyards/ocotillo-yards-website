import type { ReactNode } from "react";
import { asset } from "@/lib/base-path";

type Height = "screen" | "tall" | "half";

const heights: Record<Height, string> = {
  screen: "min-h-svh",
  tall: "min-h-[78svh]",
  half: "min-h-[58svh]",
};

export function FilmStill({
  id,
  src,
  alt,
  kicker,
  title,
  titleAs: TitleTag = "h2",
  caption = "AI Concept · not a completed job",
  height = "tall",
  veil = "soft",
  priority = false,
  children,
}: {
  id?: string;
  src: string;
  alt: string;
  kicker?: string;
  title?: string;
  titleAs?: "h1" | "h2";
  caption?: string;
  height?: Height;
  veil?: "soft" | "hard";
  priority?: boolean;
  children?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative flex ${heights[height]} flex-col justify-end overflow-hidden${id ? " scroll-mt-24" : ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(src)}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority={priority ? "high" : undefined}
      />
      <div className={`absolute inset-0 ${veil === "hard" ? "veil-hard" : "veil-soft"}`} />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 pt-28 sm:px-8 sm:pb-16">
        {kicker ? <p className="kicker">{kicker}</p> : null}
        {title ? (
          <TitleTag className="mt-4 max-w-3xl text-4xl leading-[1.05] tracking-tight text-bone sm:text-6xl">
            {title}
          </TitleTag>
        ) : null}
        {children}
        {caption ? <p className="mt-8 font-caps text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-ash/80">{caption}</p> : null}
      </div>
    </section>
  );
}
