import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Homeowners",
  description:
    "Free AI backyard, roof, and landscape concepts for Ocotillo Lakes homeowners in Chandler, Arizona, then an intro to a licensed crew.",
};

const fits = [
  {
    title: "Lake-lot edges",
    body: "See plant massing, gravel, and shade before you talk construction at the water.",
  },
  {
    title: "Interior lots",
    body: "Backyards, side yards, and frontage that have to live with HOA character, not fight it.",
  },
  {
    title: "Roof and shade",
    body: "Two views of a shade idea so the family can react before a licensed roofer or builder quotes.",
  },
];

export default function HomeownersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="wordmark-yards text-adobe">Homeowners</p>
      <h1 className="mt-2 max-w-2xl text-4xl text-dusk">A picture you can share — then a licensed intro if you want one.</h1>
      <p className="mt-4 max-w-2xl text-muted">
        For residents of Chandler’s Ocotillo Lakes. The concept is free: two AI views and a one-page idea board.
        No construction contract with us, because we do not construct.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {fits.map((f) => (
          <article key={f.title} className="stone-card rounded-2xl p-6">
            <h2 className="text-xl text-dusk">{f.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
          </article>
        ))}
      </div>

      <section className="mt-16 late-light rounded-3xl px-6 py-12 text-paper sm:px-10">
        <h2 className="text-3xl">What you walk away with</h2>
        <ul className="mt-6 max-w-xl space-y-3 text-sm leading-relaxed text-paper/90">
          <li>Two views of one idea — not a collage of five competing yards.</li>
          <li>A one-page idea board you can send to a spouse, neighbor, or contractor.</li>
          <li>If you ask, an introduction to a featured licensed Arizona crew. They quote. We do not.</li>
        </ul>
      </section>

      <section className="mt-16 max-w-2xl">
        <h2 className="text-2xl text-dusk">HOA packets stay yours</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Ocotillo Community Association Design Review Board rules may apply to exterior work. We do not write
          plan sets or file packets. Visualization is a conversation starter, not an approval.
        </p>
      </section>

      <Link
        href="/contact"
        className="mt-10 inline-flex rounded-full bg-ocotillo px-5 py-2.5 text-sm font-medium text-paper hover:bg-adobe"
      >
        Request a free concept
      </Link>
    </div>
  );
}
