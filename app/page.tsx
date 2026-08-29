import { BeforeAfter } from "@/components/BeforeAfter";
import { Cta } from "@/components/Cta";
import { FilmStill } from "@/components/FilmStill";
import { StillLink } from "@/components/StillLink";
import { asset } from "@/lib/base-path";
import { backyardPair, stills } from "@/lib/media";

export default function HomePage() {
  return (
    <>
      <FilmStill
        src={stills.hero.src}
        alt={stills.hero.alt}
        kicker="Ocotillo Lakes · Chandler"
        title="See the yard before you hire the crew."
        titleAs="h1"
        height="screen"
        veil="soft"
        priority
      >
        <p className="mt-5 max-w-xl text-base leading-relaxed text-bone/85 sm:text-lg">
          A matchmaker, not a general contractor. Two AI views of landscape, hardscape, or LED
          lighting — then an intro to a licensed local crew if you want to build.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Cta href="/contact" variant="frame">
            Request a free concept
          </Cta>
          <Cta href="/how-it-works">How it works</Cta>
        </div>
      </FilmStill>

      <FilmStill
        src={stills.lake.src}
        alt={stills.lake.alt}
        kicker="Homeowners"
        title="Lake-lot edges, late light."
      >
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/85 sm:text-base">
          Palms, a paver walk, lighting at the canal. See planting and hardscape before anyone
          mobilizes. We visualize. You and a licensed contractor file with the Design Review
          Board, if the change needs it.
        </p>
        <div className="mt-7">
          <Cta href="/homeowners">For homeowners</Cta>
        </div>
      </FilmStill>

      <FilmStill
        src={stills.front.src}
        alt={stills.front.alt}
        kicker="Interior lots"
        title="HOA character, not a fight."
      >
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/85 sm:text-base">
          Frontage, side yards, and backyards that have to live with Ocotillo’s tile roofs,
          palms, and HOA character. One idea. Two views. A board you can send to a spouse or a
          contractor.
        </p>
      </FilmStill>

      <section>
        <BeforeAfter
          beforeSrc={backyardPair.before.src}
          afterSrc={backyardPair.after.src}
          beforeAlt={backyardPair.before.alt}
          afterAlt={backyardPair.after.alt}
        />
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <p className="kicker">Interior lot</p>
          <h2 className="mt-3 max-w-2xl text-4xl text-bone sm:text-5xl">Same patio. One idea.</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ash sm:text-base">
            Same patio, same pool. Drag the line: tired water and a dirt yard on the left;
            waterfall, paver path, planting, and LED lights on the right. Not a completed job,
            and not a specific address.
          </p>
          <div className="mt-8">
            <Cta href="/contact" variant="frame">
              Request a free concept
            </Cta>
          </div>
        </div>
      </section>

      <FilmStill
        src={stills.lighting.src}
        alt={stills.lighting.alt}
        kicker="Hardscape and LED"
        title="Pavers, planting, and LED."
      >
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/85 sm:text-base">
          Landscape, hardscape, and low-voltage lighting so the family can react before a
          licensed crew quotes.
        </p>
      </FilmStill>

      <FilmStill
        src={stills.side.src}
        alt={stills.side.alt}
        kicker="The path"
        title="Visualization first. Construction stays with licensees."
        veil="hard"
      >
        <ol className="mt-8 max-w-lg space-y-5 text-sm leading-relaxed text-bone/85">
          <li>
            <span className="kicker">Send the lot</span>
            <p className="mt-1">Photos and a short note. No site visit required to start.</p>
          </li>
          <li>
            <span className="kicker">Two views and a board</span>
            <p className="mt-1">The same idea, twice, plus a page you can share.</p>
          </li>
          <li>
            <span className="kicker">Meet a licensed crew</span>
            <p className="mt-1">They quote, file, and construct. We do not.</p>
          </li>
        </ol>
        <div className="mt-8">
          <Cta href="/how-it-works">The whole path</Cta>
        </div>
      </FilmStill>

      <section className="grid min-h-[70svh] md:grid-cols-2">
        <div className="relative min-h-[50svh] overflow-hidden md:min-h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(stills.ocotillo.src)}
            alt={stills.ocotillo.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-end bg-void px-5 py-16 sm:px-12">
          <p className="kicker">Licensed crews</p>
          <h2 className="mt-4 max-w-md text-4xl leading-tight text-bone sm:text-5xl">
            Featured providers, not a bid mill.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ash">
            Arizona ROC license required. We introduce homeowners who already have a concept in
            hand. We do not take job payments or run your schedule.
          </p>
          <div className="mt-8">
            <Cta href="/contractors">For contractors</Cta>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="kicker">Work</p>
          <h2 className="mt-3 text-4xl text-bone sm:text-5xl">Labeled honestly.</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ash">
            AI Concept, Completed by Featured Provider, Founding Project—In Progress. No invented
            reviews. Generated yards stay labeled.
          </p>
        </div>
        <div className="grid gap-px bg-void md:grid-cols-3">
          <StillLink
            href="/work"
            src={stills.lake.src}
            alt={stills.lake.alt}
            label="AI Concept"
            title="Lake and golf"
            className="aspect-[4/3]"
          />
          <StillLink
            href="/work"
            src={stills.front.src}
            alt={stills.front.alt}
            label="AI Concept"
            title="Neighborhood street"
            className="aspect-[4/3]"
          />
          <StillLink
            href="/work"
            src={stills.lighting.src}
            alt={stills.lighting.alt}
            label="AI Concept"
            title="LED at the canal"
            className="aspect-[4/3]"
          />
        </div>
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <Cta href="/work">See the work</Cta>
        </div>
      </section>
    </>
  );
}
