import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Ocotillo Yards work board with honest labels: AI Concept, Completed by Featured Provider, and Founding Project—In Progress.",
};

const slots = [
  {
    label: "AI Concept",
    title: "Lake-lot backyard, late light",
    note: "Placeholder. Two-view studies for Ocotillo Lakes yards will live here, clearly marked as AI concepts — not photographs of finished work.",
  },
  {
    label: "Completed by Featured Provider",
    title: "No featured completions yet",
    note: "When a licensed partner finishes a job we introduced, it will be labeled Completed by Featured Provider. We will not borrow photos or invent a portfolio.",
  },
  {
    label: "Founding Project—In Progress",
    title: "No founding project posted yet",
    note: "The first homeowner + licensed crew pairing will appear here as Founding Project—In Progress until it is truly complete.",
  },
];

export default function WorkPage() {
  return (
    <article className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="wordmark-yards text-adobe">Proof</p>
      <h1 className="mt-3 font-display text-4xl text-dusk sm:text-5xl">Work, labeled.</h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        No fake testimonials. No named crews until they have agreed to be featured. No completed jobs until they are real. Every tile carries its status on its face.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {slots.map((s) => (
          <article key={s.label} className="stone-card flex flex-col rounded-2xl p-5">
            <p className="self-start rounded-full bg-sand px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-dusk">{s.label}</p>
            <h2 className="mt-4 font-display text-xl text-dusk">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.note}</p>
          </article>
        ))}
      </div>
      <Link href="/contact" className="mt-12 inline-flex rounded-full bg-ocotillo px-6 py-3 text-sm font-medium text-paper hover:bg-adobe">Request a free concept</Link>
    </article>
  );
}
