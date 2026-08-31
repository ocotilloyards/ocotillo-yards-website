import { BeforeAfter } from "@/components/BeforeAfter";
import { Cta } from "@/components/Cta";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { FaqList } from "@/components/FaqList";
import { FilmStill } from "@/components/FilmStill";
import { backyardPair, stills } from "@/lib/media";
import { PAGE_DESCRIPTIONS, PAGE_TITLES, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: PAGE_TITLES.homeowners,
  description: PAGE_DESCRIPTIONS.homeowners,
  path: "/homeowners/",
});

export default function HomeownersPage() {
  return (
    <>
      <FaqJsonLd />
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
            Request two views
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
        id="landscape"
        src={stills.front.src}
        alt={stills.front.alt}
        kicker="Landscape"
        title="Planting that lives with HOA character."
      >
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/85 sm:text-base">
          Palms, turf, and desert planting for interior lots and lake-lot edges. We visualize.
          We do not construct.
        </p>
      </FilmStill>

      <FilmStill
        id="hardscape"
        src={stills.shade.src}
        alt={stills.shade.alt}
        kicker="Hardscape"
        title="Pavers, walks, and patio edges."
      >
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/85 sm:text-base">
          Hardscape as a picture you can share — not a bid, not a plan set. A licensed crew
          quotes if you want to build.
        </p>
      </FilmStill>

      <FilmStill
        id="led"
        src={stills.lighting.src}
        alt={stills.lighting.alt}
        kicker="LED"
        title="Low-voltage light at dusk."
      >
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/85 sm:text-base">
          Path lights and uplights around the lot you already have. We visualize. A licensed
          crew quotes. We do not install.
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
            Request two views
          </Cta>
        </div>
      </section>

      <FaqList />
    </>
  );
}
