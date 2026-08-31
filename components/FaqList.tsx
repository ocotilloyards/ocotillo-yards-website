import { FAQS } from "@/lib/seo";

export function FaqList() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <p className="kicker">FAQ</p>
      <h2 className="mt-4 text-4xl text-bone">Questions we get.</h2>
      <dl className="mt-10 max-w-2xl space-y-8">
        {FAQS.map((faq) => (
          <div key={faq.q}>
            <dt className="font-display text-2xl text-bone">{faq.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-ash">{faq.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
