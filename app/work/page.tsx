import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Ocotillo Yards proof gallery. Slots are labeled AI Concept, Completed by Featured Provider, and Founding Project—In Progress. Empty until real assets land.",
};

type Slot = {
  label: "AI Concept" | "Completed by Featured Provider" | "Founding Project—In Progress";
  /** Public path, e.g. /work/ai-concept.jpg. Leave unset for an empty frame. */
  src?: string;
  alt?: string;
  caption: string;
};

const slots: Slot[] = [
  {
    label: "AI Concept",
    caption: "Empty until we have a two-view AI study a homeowner has agreed to show. Never a stand-in photo.",
  },
  {
    label: "Completed by Featured Provider",
    caption: "Empty until a licensed partner finishes a job we introduced and gives written permission to show it.",
  },
  {
    label: "Founding Project—In Progress",
    caption: "Empty until the first homeowner + licensed crew pairing is underway and we have permission to document it.",
  },
];

function Frame({ slot }: { slot: Slot }) {
  return (
    <article className="stone-card flex flex-col overflow-hidden rounded-2xl">
      {slot.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={slot.src} alt={slot.alt ?? slot.label} className="aspect-[4/3] w-full object-cover" />
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
        <p className="mt-3 text-sm leading-relaxed text-muted">{slot.caption}</p>
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
        Three slots, waiting on real assets. No fake photos. No invented reviews. Street and phone stay off this
        page. A contractor license number appears only with a completed featured job, never as a placeholder.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {slots.map((slot) => (
          <Frame key={slot.label} slot={slot} />
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
