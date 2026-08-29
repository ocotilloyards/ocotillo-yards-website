import type { Metadata } from "next";
import { asset } from "@/lib/base-path";
import { ContactForm } from "@/components/ContactForm";
import { EMAIL, stills } from "@/lib/media";

export const metadata: Metadata = {
  title: "Request a concept",
  description:
    "Request a free two-view AI concept from Ocotillo Yards, or apply as a licensed Arizona crew with your ROC number. Email ocotilloyardsaz@gmail.com.",
};

export default function ContactPage() {
  return (
    <article className="grid min-h-svh md:grid-cols-2">
      <div className="relative min-h-[42svh] overflow-hidden md:min-h-svh">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(stills.hero.src)}
          alt={stills.hero.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-void/40" />
        <p className="absolute bottom-6 left-6 font-caps text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-bone/80 md:bottom-8 md:left-8">
          AI Concept · not a completed job
        </p>
      </div>
      <div className="flex flex-col justify-center px-5 py-28 sm:px-12">
        <p className="kicker">Contact</p>
        <h1 className="mt-4 text-4xl text-bone sm:text-6xl">Request a free concept.</h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-ash sm:text-base">
          Email is the public door:{" "}
          <a className="text-bone underline decoration-ash/50 underline-offset-4 hover:text-ember" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          . Use the form to open a message, or write us directly. Licensed crews: include your ROC
          number.
        </p>
        <div className="mt-10 max-w-lg">
          <ContactForm />
        </div>
      </div>
    </article>
  );
}
