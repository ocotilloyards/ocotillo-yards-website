import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { FilmStill } from "@/components/FilmStill";
import { stills } from "@/lib/media";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Free two-view AI concept for landscape, hardscape, and LED lighting, then an introduction to a licensed local crew. Ocotillo Yards does not construct, quote, file, or collect job payments.",
};

const notUs = [
  "Construction or construction management",
  "Pool construction or pool installation",
  "Construction plans or engineered drawings",
  "Construction quotes or allowances",
  "HOA or Design Review Board filing",
  "Crew scheduling",
  "Collecting job payments",
];

export default function HowItWorksPage() {
  return (
    <>
      <FilmStill
        src={stills.hero.src}
        alt={stills.hero.alt}
        kicker="How it works"
        title="Three steps. We stop where the license begins."
        titleAs="h1"
        height="screen"
        priority
      >
        <p className="mt-5 max-w-xl text-base leading-relaxed text-bone/85 sm:text-lg">
          Visualization and referral for Chandler&apos;s Ocotillo Lakes. Matchmaker, not GC.
        </p>
      </FilmStill>

      <FilmStill
        src={stills.front.src}
        alt={stills.front.alt}
        kicker="Send the lot"
        title="Photos and a short note."
      >
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/85 sm:text-base">
          Planting, hardscape, LED lighting, frontage, or a lake-lot edge. The concept is free.
          We start from pictures.
        </p>
      </FilmStill>

      <FilmStill
        src={stills.lake.src}
        alt={stills.lake.alt}
        kicker="Two views plus a board"
        title="One idea. Twice. On a page you can forward."
      >
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/85 sm:text-base">
          Visualization, not a plan set, not a bid, and not Design Review Board drawings.
        </p>
      </FilmStill>

      <FilmStill
        src={stills.lighting.src}
        alt={stills.lighting.alt}
        kicker="Keep it, or meet a crew"
        title="If you want to build, we introduce a licensee."
      >
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/85 sm:text-base">
          They own quoting, permitting, HOA packets, scheduling, and construction.
        </p>
      </FilmStill>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2">
        <div>
          <p className="kicker">Off our plate</p>
          <h2 className="mt-4 text-4xl text-bone">What we will not do.</h2>
          <ul className="mt-8 space-y-3 text-sm text-ash">
            {notUs.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 block h-px w-4 shrink-0 bg-ember" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-bone/10 pt-10 md:border-l md:border-t-0 md:pl-12 md:pt-0">
          <p className="kicker">Design review</p>
          <p className="mt-4 text-sm leading-relaxed text-ash">
            Exterior changes in Ocotillo Lakes may require Ocotillo Community Association Design
            Review Board approval. The homeowner and licensed contractor file. We do not.
          </p>
          <div className="mt-10">
            <Cta href="/contact" variant="frame">
              Request a free concept
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}
