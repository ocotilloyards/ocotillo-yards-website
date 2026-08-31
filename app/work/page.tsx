import { BeforeAfter } from "@/components/BeforeAfter";
import { Cta } from "@/components/Cta";
import { WorkGallery } from "@/components/WorkGallery";
import { backyardPair } from "@/lib/media";
import { PAGE_DESCRIPTIONS, PAGE_TITLES, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: PAGE_TITLES.work,
  description: PAGE_DESCRIPTIONS.work,
  path: "/work/",
});

export default function WorkPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-28 sm:px-8">
        <p className="kicker">Proof</p>
        <h1 className="mt-4 max-w-2xl text-4xl text-bone sm:text-6xl">Work, labeled.</h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-ash sm:text-base">
          Generated yards are AI Concept. Completed by Featured Provider and Founding
          Project—In Progress frames stay empty until a licensed partner says yes. No fake
          testimonials. Street and phone stay off this page. Ocotillo Yards is not a contractor.
        </p>
      </section>
      <BeforeAfter
        beforeSrc={backyardPair.before.src}
        afterSrc={backyardPair.after.src}
        beforeAlt={backyardPair.before.alt}
        afterAlt={backyardPair.after.alt}
      />
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <p className="kicker">Interior lot · two views</p>
        <h2 className="mt-3 text-3xl text-bone sm:text-4xl">Typical Pulte backyard, before and after.</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ash">
          Same camera, same pool. Left is tired water and a dirt yard. Right is an AI Concept —
          waterfall, paver path, palo verde, planting, and LED lights. Not a completed job, and
          not a specific address.
        </p>
      </div>
      <WorkGallery />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Cta href="/contact" variant="frame">
          Request two views
        </Cta>
      </div>
    </>
  );
}
