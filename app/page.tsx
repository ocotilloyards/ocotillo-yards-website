import Link from "next/link";
import { DesertScene } from "@/components/DesertScene";

const steps = [
  {
    n: "01",
    title: "Request a free concept",
    body: "Tell us the lot and what you want to see. Attach a couple of photos in email. No site visit required to start.",
  },
  {
    n: "02",
    title: "Two views and an idea board",
    body: "You get two AI views of the same idea plus a one-page board you can share with family or a contractor.",
  },
  {
    n: "03",
    title: "Meet a licensed crew",
    body: "If you want to build, we introduce a featured Arizona-licensed provider. They quote, file, and construct. We do not.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <DesertScene className="h-[min(78vh,620px)] w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-dusk via-dusk/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-10 sm:px-6 sm:pb-14">
          <p className="wordmark-yards text-gold">Chandler · Ocotillo Lakes</p>
          <h1 className="mt-3 max-w-2xl text-4xl leading-tight text-paper sm:text-5xl">
            See the yard before you hire the crew.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-sand sm:text-lg">
            Ocotillo Yards is a matchmaker, not a general contractor. A free two-view AI concept and idea board,
            then an intro to a licensed local crew.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-ocotillo px-5 py-2.5 text-sm font-medium text-paper shadow-sm transition hover:bg-adobe"
            >
              Request a free concept
            </Link>
            <Link
              href="/contact?intent=crew"
              className="rounded-full border border-sand/40 bg-dusk/40 px-5 py-2.5 text-sm text-paper backdrop-blur-sm hover:border-gold"
            >
              Licensed crews apply
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="wordmark-yards text-adobe">The path</p>
        <h2 className="mt-2 text-3xl text-dusk">Visualization first. Construction stays with licensees.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <article key={s.n} className="stone-card rounded-2xl p-6">
              <p className="font-display text-2xl italic text-ocotillo">{s.n}</p>
              <h3 className="mt-2 text-xl text-dusk">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-dusk text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <p className="wordmark-yards text-bloom">Homeowners</p>
            <h2 className="mt-2 text-3xl">Ocotillo Lakes lots, late light, honest pictures.</h2>
            <p className="mt-4 text-sm leading-relaxed text-sand">
              We visualize backyard, frontage, roof, and lake-lot edges so you can decide before anyone mobilizes.
              We do not file with the Ocotillo Community Association Design Review Board — you and a licensed
              contractor do, if the change needs it.
            </p>
            <Link href="/homeowners" className="mt-6 inline-block text-sm text-gold hover:underline">
              For homeowners
            </Link>
          </div>
          <div>
            <p className="wordmark-yards text-palo">Licensed crews</p>
            <h2 className="mt-2 text-3xl">Featured providers, not a bid mill.</h2>
            <p className="mt-4 text-sm leading-relaxed text-sand">
              Arizona ROC license required. We introduce homeowners who already have a concept in hand. We do not
              take job payments or run your schedule.
            </p>
            <Link href="/contractors" className="mt-6 inline-block text-sm text-gold hover:underline">
              For contractors
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="wordmark-yards text-adobe">Work</p>
        <h2 className="mt-2 text-3xl text-dusk">Labeled honestly. No invented reviews.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Portfolio items use three labels only: AI Concept, Completed by Featured Provider, and Founding
          Project—In Progress. We do not publish fake testimonials.
        </p>
        <Link
          href="/work"
          className="mt-6 inline-flex rounded-full border border-stone px-5 py-2.5 text-sm text-dusk hover:border-adobe"
        >
          See the work
        </Link>
      </section>
    </>
  );
}
