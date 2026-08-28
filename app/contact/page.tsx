import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Request a concept",
  description: "Request a free two-view AI concept from Ocotillo Yards, or apply as a licensed Arizona crew with your ROC number. Email ocotilloyardsaz@gmail.com.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const sp = await searchParams;
  const defaultIntent = sp.intent === "crew" ? "crew" : "concept";

  return (
    <article className="mx-auto max-w-xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="wordmark-yards text-adobe">Contact</p>
      <h1 className="mt-3 font-display text-4xl text-dusk sm:text-5xl">Request a free concept.</h1>
      <p className="mt-5 text-base leading-relaxed text-muted">
        Email is the public door: <a className="underline decoration-stone underline-offset-4" href="mailto:ocotilloyardsaz@gmail.com">ocotilloyardsaz@gmail.com</a>.
        Use the form to open a message, or write us directly. Licensed crews: include your ROC number.
      </p>
      <div className="mt-10">
        <ContactForm defaultIntent={defaultIntent} />
      </div>
    </article>
  );
}
