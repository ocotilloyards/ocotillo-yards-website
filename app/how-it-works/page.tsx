import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Free two-view AI concept and idea board, then an introduction to a licensed local crew. Ocotillo Yards does not construct, quote, file, or collect job payments.",
};

const steps = [
  {
    title: "Send the lot",
    body: "Email photos and a short note — backyard, front yard, roof and shade, or lake-lot edge. The concept is free. We start from pictures, not a construction walk-through.",
  },
  {
    title: "Receive two views plus an idea board",
    body: "Two AI views of one idea, and a one-page board you can print or forward. This is visualization, not a plan set, not a bid, and not Design Review Board drawings.",
  },
  {
    title: "Keep it, or meet a crew",
    body: "Use the board to think. If you want to build, we introduce a featured licensed provider. They own quoting, permitting, HOA packets, scheduling, and construction.",
  },
];

const notUs = [
  "Construction or construction management",
  "Construction plans or engineered drawings",
  "Construction quotes or allowances",
  "HOA or Design Review Board filing",
  "Crew scheduling",
  "Collecting job payments",
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="wordmark-yards text-adobe">How it works</p>
      <h1 className="mt-2 max-w-2xl text-4xl text-dusk">Three steps. We stop where the license begins.</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Ocotillo Yards is a visualization and referral service for Chandler’s Ocotillo Lakes. Matchmaker, not GC.
      </p>

      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="stone-card rounded-2xl p-6">
            <p className="font-display text-2xl italic text-ocotillo">{String(i + 1).padStart(2, "0")}</p>
            <h2 className="mt-2 text-xl text-dusk">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
          </li>
        ))}
      </ol>

      <section className="mt-16 grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="text-2xl text-dusk">What stays off our plate</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {notUs.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-ocotillo" aria-hidden>
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <aside className="stone-card rounded-2xl p-6">
          <p className="wordmark-yards text-adobe">Design review</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Exterior changes in Ocotillo Lakes may require Ocotillo Community Association Design Review Board
            approval. The homeowner and licensed contractor file. We do not.
          </p>
        </aside>
      </section>

      <Link
        href="/contact"
        className="mt-12 inline-flex rounded-full bg-ocotillo px-5 py-2.5 text-sm font-medium text-paper hover:bg-adobe"
      >
        Request a free concept
      </Link>
    </div>
  );
}
