import type { Metadata } from "next";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Cta } from "@/components/Cta";
import { FilmStill } from "@/components/FilmStill";
import { backyardPair, stills } from "@/lib/media";

export const metadata: Metadata = {
  title: "Homeowners",
  description:
    "Free AI concepts for landscape, hardscape, and LED lighting for Ocotillo Lakes homeowners in Chandler, Arizona, then an intro to a licensed crew.",
};

export default function HomeownersPage() {
  return (
    <>
      <FilmStill
        src={stills.lake.src}
        alt={stills.lake.alt}
        kicker="Homeowners"
        title="A picture you can share."
        titleAs="h1"
        height="screen"
        priority
      >
        <p className="mt-5 max-w-xl text-base leading-relaxed text-bone/85 sm:text-lg">
          For residents of Chandler&apos;s Ocotillo Lakes. Two AI views of planting, hardscape,
          or lighting, plus a one-page idea board. Free. No construction contract with us,
          because we do not construct.
        </p>
        <div className="mt-8">
          <Cta href="/contact" variant="frame">
            Request a free concept
          </Cta>
        </div>
      </FilmStill>

      <section>
        <BeforeAfter
          beforeSrc={backyardPair.before.src}
          afterSrc={backyardPair.after.src}
          beforeAlt={backyardPair.before.alt}
          afterAlt={backyardPair.after.alt}
        />
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <p className="kicker">What you walk away with</p>
          <h2 className="mt-3 max-w-2xl text-4xl text-bone sm:text-5xl">Two views of one idea.</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ash sm:text-base">
            Drag the line. Same patio, same pool. Left is tired water and dirt. Right is an AI
            Concept: waterfall, paver path, planting, and LED lights.
          </p>
        </div>
      </section>

      <FilmStill
        src={stills.front.src}
        alt={stills.front.alt}
        kicker="Interior lots"
        title="Backyards, side yards, frontage."
      >
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/85 sm:text-base">
          Lots that have to live with HOA character, not fight it. One idea. Two views.
        </p>
      </FilmStill>

      <FilmStill
        src={stills.side.src}
        alt={stills.side.alt}
        kicker="Lake-lot edges"
        title="See the water before anyone mobilizes."
      >
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/85 sm:text-base">
          Lawn to the water, a dock, palms, the canal — as a conversation starter, not a plan
          set.
        </p>
      </FilmStill>

      <FilmStill
        src={stills.lighting.src}
        alt={stills.lighting.alt}
        kicker="Hardscape and LED"
        title="Hardscape and light at dusk."
      >
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/85 sm:text-base">
          Pavers, planting, and low-voltage lighting around the lot you already have. We
          visualize. A licensed crew quotes.
        </p>
      </FilmStill>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="kicker">What you walk away with</p>
        <h2 className="mt-4 max-w-2xl text-4xl text-bone sm:text-5xl">Two views. One board. A crew if you ask.</h2>
        <ul className="mt-10 max-w-xl space-y-6 text-sm leading-relaxed text-ash">
          <li>Two views of one idea — not a collage of five competing yards.</li>
          <li>A one-page idea board you can send to a spouse, neighbor, or contractor.</li>
          <li>If you ask, an introduction to a featured licensed Arizona crew. They quote. We do not.</li>
        </ul>
        <div className="mt-14 max-w-xl">
          <p className="kicker">HOA packets stay yours</p>
          <p className="mt-4 text-sm leading-relaxed text-ash">
            Ocotillo Community Association Design Review Board rules may apply to exterior work.
            We do not write plan sets or file packets. Visualization is a conversation starter,
            not an approval.
          </p>
        </div>
        <div className="mt-12">
          <Cta href="/contact" variant="frame">
            Request a free concept
          </Cta>
        </div>
      </section>
    </>
  );
}
