import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Ocotillo Yards proof gallery. Three AI Concept yard visualizations for Chandler / Ocotillo Lakes, plus empty slots for completed featured work and founding projects.",
};

type Slot = {
  id: string;
  label: "AI Concept" | "Completed by Featured Provider" | "Founding Project—In Progress";
  src?: string;
  alt?: string;
  title: string;
  caption: string;
};

const slots: Slot[] = [
  {
    id: "concept-lake",
    label: "AI Concept",
    src: asset("/work/ai-concept-lake-lot.png"),
    alt: "AI Concept of an Ocotillo Lakes dusk backyard facing the lake, with desert planting and uplighting. Not a completed job.",
    title: "Lake-lot backyard, late light",
    caption: "Two-view study of a lake-edge lot. Generated visualization, not a photograph of finished work.",
  },
  {
    id: "concept-front",
    label: "AI Concept",
    src: asset("/work/ai-concept-front-xeri.png"),
    alt: "AI Concept of a Chandler front xeriscape with palo verde, boulders, and decomposed granite. Not a completed job.",
    title: "Front xeriscape, morning sun",
    caption: "Street-side desert planting with no lawn. Generated visualization, not a contractor portfolio shot.",
  },
  {
    id: "concept-pool",
    label: "AI Concept",
    src: asset("/work/ai-concept-pool-deck.png"),
    alt: "AI Concept of a Chandler pool deck with desert planters and late-afternoon light. Not a completed job.",
    title: "Pool deck and desert beds",
    caption: "Cool-deck and planting idea around an existing pool. Generated visualization, not a completed install.",
  },
  {
    id: "completed-a",
    label: "Completed by Featured Provider",
    title: "Waiting on a licensed partner",
    caption: "Empty until a featured crew finishes a job we introduced and gives written permission to show it.",
  },
  {
    id: "completed-b",
    label: "Completed by Featured Provider",
    title: "Waiting on a licensed partner",
    caption: "A second completion slot. Stays empty until we have a real yes and a permitted photo.",
  },
  {
    id: "founding",
    label: "Founding Project—In Progress",
    title: "No founding project posted yet",
    caption: "Empty until the first homeowner + licensed crew pairing is underway and we have permission to document it.",
  },
];

function Frame({ slot }: { slot: Slot }) {
  return (
    <article className="stone-card flex flex-col overflow-hidden rounded-2xl">
      {slot.src ? (
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={slot.src} alt={slot.alt ?? slot.label} className="aspect-[4/3] w-full object-cover" />
          <p className="absolute left-3 top-3 rounded-full bg-dusk/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur-sm">
            AI Concept
          </p>
        </div>
      ) : (
        <div
          className="flex aspect-[4/3] w-full items-center justify-center border-b border-stone/40 bg-sand/40"
          aria-label={`${slot.label} slot, no asset yet`}
        >
          <p className="px-4 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">No asset yet</p>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <p className="self-start rounded-full bg-sand px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-dusk">
          {slot.label}
        </p>
        <h2 className="mt-3 font-display text-xl text-dusk">{slot.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{slot.caption}</p>
      </div>
    </article>
  );
}

export default function WorkPage() {
  return (
    <article className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="wordmark-yards text-adobe">Proof</p>
      <h1 className="mt-3 font-display text-4xl text-dusk sm:text-5xl">Work, labeled.</h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        Three AI Concept yards for Chandler / Ocotillo Lakes. Completed-provider and founding-project slots stay empty
        until a licensed partner says yes. No fake testimonials. Street and phone stay off this page.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {slots.map((slot) => (
          <Frame key={slot.id} slot={slot} />
        ))}
      </div>
      <Link
        href="/contact"
        className="mt-12 inline-flex rounded-full bg-ocotillo px-6 py-3 text-sm font-medium text-paper hover:bg-adobe"
      >
        Request a free concept
      </Link>
    </article>
  );
}
