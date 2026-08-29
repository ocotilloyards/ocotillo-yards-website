import type { Metadata } from "next";
import { asset } from "@/lib/base-path";
import { Cta } from "@/components/Cta";
import { stills } from "@/lib/media";

export const metadata: Metadata = {
  title: "For contractors",
  description:
    "Licensed Arizona crews serving Chandler and Ocotillo Lakes: apply with your ROC number. Ocotillo Yards intros homeowners; you perform the work.",
};

export default function ContractorsPage() {
  return (
    <>
      <section className="grid min-h-svh md:grid-cols-2">
        <div className="relative min-h-[55svh] overflow-hidden md:min-h-svh">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(stills.ocotillo.src)}
            alt={stills.ocotillo.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <p className="absolute bottom-6 left-6 font-caps text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone/80">
            AI Concept · not a completed job
          </p>
        </div>
        <div className="flex flex-col justify-end px-5 py-24 sm:px-12">
          <p className="kicker">For contractors</p>
          <h1 className="mt-4 max-w-lg text-4xl leading-[1.05] text-bone sm:text-6xl">
            We intro the homeowner. You hold the license.
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ash sm:text-base">
            Homeowners see a free two-view concept first. When they want to build, we introduce a
            licensed local crew — not a bid mill, and not us pretending to be the GC.
          </p>
          <div className="mt-10">
            <Cta href="/contact?intent=crew" variant="frame">
              Apply with your ROC
            </Cta>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 md:grid-cols-2">
        <div>
          <p className="kicker">Who should apply</p>
          <ul className="mt-8 space-y-3 text-sm leading-relaxed text-ash">
            <li className="flex gap-3">
              <span className="mt-2 block h-px w-4 shrink-0 bg-ember" aria-hidden />
              Licensed Arizona contractors (ROC number required)
            </li>
            <li className="flex gap-3">
              <span className="mt-2 block h-px w-4 shrink-0 bg-ember" aria-hidden />
              Crews that already work Chandler / Ocotillo Lakes, or want to
            </li>
            <li className="flex gap-3">
              <span className="mt-2 block h-px w-4 shrink-0 bg-ember" aria-hidden />
              Hardscape, landscape, and LED lighting trades — not pool construction
            </li>
          </ul>
        </div>
        <div>
          <p className="kicker">What we will not do</p>
          <p className="mt-8 text-sm leading-relaxed text-ash">
            We will not schedule your crew, quote your work as if it were ours, or collect job
            payments. You contract with the homeowner. You and the homeowner file HOA materials
            with the Ocotillo Community Association Design Review Board.
          </p>
        </div>
      </section>
    </>
  );
}
