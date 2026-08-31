import { Cta } from "@/components/Cta";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { FaqList } from "@/components/FaqList";
import { FilmStill } from "@/components/FilmStill";
import { stills } from "@/lib/media";
import { PAGE_DESCRIPTIONS, PAGE_TITLES, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: PAGE_TITLES.howItWorks,
  description: PAGE_DESCRIPTIONS.howItWorks,
  path: "/how-it-works/",
});

const steps = [
  {
    n: "01",
    title: "Send photos + notes",
    body: "What you like / HOA constraints you already know.",
  },
  {
    n: "02",
    title: "Get two AI views + an idea board",
    body: "Labeled AI Concept.",
  },
  {
    n: "03",
    title: "If you want to build, we intro an Arizona ROC crew",
    body: "They quote. They contract. They pull permits if needed.",
  },
  {
    n: "04",
    title: "We are not in the payment, HOA packet, or install",
    body: "Construction stays with the licensee. Visualization stays with us.",
  },
];

const notUs = [
  "Construct or manage construction",
  "File with the HOA or Design Review Board",
  "Quote the job",
  "Collect payment",
  "Install pools",
  "Write construction plans or engineered drawings",
  "Schedule crews",
];

export default function HowItWorksPage() {
  return (
    <>
      <FaqJsonLd />
      <FilmStill
        src={stills.hero.src}
        alt={stills.hero.alt}
        kicker="How it works"
        title="Four steps. We stop where the license begins."
        titleAs="h1"
        height="screen"
        priority
      >
        <p className="mt-5 max-w-xl text-base leading-relaxed text-bone/85 sm:text-lg">
          Visualization and referral for Chandler&apos;s Ocotillo Lakes. Matchmaker, not GC.
          Ocotillo Yards is not a contractor.
        </p>
        <div className="mt-8">
          <Cta href="/contact" variant="frame">
            Request two views
          </Cta>
        </div>
      </FilmStill>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="kicker">The path</p>
        <h2 className="mt-4 text-4xl text-bone">Numbered, in order.</h2>
        <ol className="mt-10 max-w-2xl space-y-8">
          {steps.map((step) => (
            <li key={step.n} className="flex gap-5">
              <span className="kicker mt-1 w-8 shrink-0">{step.n}</span>
              <div>
                <p className="font-display text-2xl text-bone">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ash">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <FilmStill
        id="send"
        src={stills.front.src}
        alt={stills.front.alt}
        kicker="01 · Send the lot"
        title="Photos and a short note."
      >
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/85 sm:text-base">
          Planting, hardscape, LED lighting, frontage, or a lake-lot edge. The concept is free.
          We start from pictures.
        </p>
      </FilmStill>

      <FilmStill
        id="views"
        src={stills.lake.src}
        alt={stills.lake.alt}
        kicker="02 · Two views plus a board"
        title="One idea. Twice. On a page you can forward."
      >
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-bone/85 sm:text-base">
          Visualization, not a plan set, not a bid, and not Design Review Board drawings. Labeled
          AI Concept.
        </p>
      </FilmStill>

      <FilmStill
        id="intro"
        src={stills.lighting.src}
        alt={stills.lighting.alt}
        kicker="03 · Keep it, or meet a crew"
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
          <ul className="mt-8 space-y-3 text-sm text-ash">
            <li>
              <Cta href="/homeowners">For homeowners</Cta>
            </li>
            <li>
              <Cta href="/contractors">For licensed crews</Cta>
            </li>
            <li>
              <Cta href="/contact">Request two views</Cta>
            </li>
          </ul>
          <div className="mt-10">
            <Cta href="/contact" variant="frame">
              Request two views
            </Cta>
          </div>
        </div>
      </section>

      <FaqList />
    </>
  );
}
