import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For contractors",
  description: "Licensed Arizona crews serving Chandler and Ocotillo Lakes: apply with your ROC number. Ocotillo Yards intros homeowners; you perform the work.",
};

export default function ContractorsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="wordmark-yards text-adobe">For contractors</p>
      <h1 className="mt-3 font-display text-4xl text-dusk sm:text-5xl">We intro the homeowner. You hold the license.</h1>
      <p className="mt-5 text-base leading-relaxed text-muted">
        Ocotillo Yards is a visualization and referral service. Homeowners see a free two-view concept first. When they want to build, we introduce a licensed local crew — not a bid mill, and not us pretending to be the GC.
      </p>
      <h2 className="mt-12 font-display text-2xl text-dusk">Who should apply</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
        <li>Licensed Arizona contractors (ROC number required)</li>
        <li>Crews that already work Chandler / Ocotillo Lakes, or want to</li>
        <li>Hardscape, landscape, roof, and related outdoor trades</li>
      </ul>
      <h2 className="mt-12 font-display text-2xl text-dusk">What we will not do</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        We will not schedule your crew, quote your work as if it were ours, or collect job payments. You contract with the homeowner. You and the homeowner file HOA materials with the Ocotillo Community Association Design Review Board.
      </p>
      <Link href="/contact?intent=crew" className="mt-10 inline-flex rounded-full bg-ocotillo px-6 py-3 text-sm font-medium text-paper hover:bg-adobe">Apply with your ROC</Link>
    </article>
  );
}
