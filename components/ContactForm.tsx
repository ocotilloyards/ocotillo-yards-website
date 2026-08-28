"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

const EMAIL = "ocotilloyardsaz@gmail.com";

type Intent = "concept" | "crew";

export function ContactForm({ defaultIntent = "concept" }: { defaultIntent?: Intent }) {
  const [intent, setIntent] = useState<Intent>(defaultIntent);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("intent") === "crew") setIntent("crew");
  }, []);
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [focus, setFocus] = useState("Backyard");
  const [roc, setRoc] = useState("");
  const [notes, setNotes] = useState("");

  const mailto = useMemo(() => {
    const subject =
      intent === "concept"
        ? "Free concept request — Ocotillo Yards"
        : "Licensed crew application — Ocotillo Yards";
    const lines = [
      `Intent: ${intent === "concept" ? "Homeowner concept request" : "Licensed crew application"}`,
      `Name / company: ${name}`,
      `Email: ${fromEmail}`,
    ];
    if (intent === "concept") lines.push(`Focus: ${focus}`);
    if (intent === "crew") lines.push(`Arizona ROC number: ${roc}`);
    if (notes) lines.push("", notes);
    const body = encodeURIComponent(lines.join("\n"));
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
  }, [intent, name, fromEmail, focus, roc, notes]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    window.location.href = mailto;
  }

  const field =
    "mt-1 w-full rounded-lg border border-stone bg-paper px-3 py-2 text-ink outline-none ring-ocotillo/30 focus:ring-2";
  const chip = (active: boolean) =>
    `rounded-full px-4 py-2 text-sm transition ${
      active ? "bg-ocotillo text-paper" : "border border-stone text-dusk hover:border-adobe"
    }`;

  return (
    <form onSubmit={onSubmit} className="stone-card rounded-2xl p-6 sm:p-8">
      <fieldset className="mb-6">
        <legend className="wordmark-yards text-adobe">I am</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" className={chip(intent === "concept")} onClick={() => setIntent("concept")}>
            A homeowner requesting a free concept
          </button>
          <button type="button" className={chip(intent === "crew")} onClick={() => setIntent("crew")}>
            A licensed crew applying to be featured
          </button>
        </div>
      </fieldset>

      <label className="block text-sm text-muted">
        Name{intent === "crew" ? " / company" : ""}
        <input
          className={field}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="name"
        />
      </label>

      <label className="mt-4 block text-sm text-muted">
        Email
        <input
          type="email"
          className={field}
          value={fromEmail}
          onChange={(e) => setFromEmail(e.target.value)}
          required
          autoComplete="email"
        />
      </label>

      {intent === "concept" ? (
        <label className="mt-4 block text-sm text-muted">
          Focus
          <select className={field} value={focus} onChange={(e) => setFocus(e.target.value)}>
            <option>Backyard</option>
            <option>Front yard</option>
            <option>Roof and shade</option>
            <option>Lake-lot edge</option>
            <option>Whole lot</option>
          </select>
        </label>
      ) : (
        <label className="mt-4 block text-sm text-muted">
          Arizona ROC number
          <input
            className={field}
            value={roc}
            onChange={(e) => setRoc(e.target.value)}
            required
            autoComplete="off"
          />
        </label>
      )}

      <label className="mt-4 block text-sm text-muted">
        Notes
        <textarea
          className={`${field} min-h-28`}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={
            intent === "concept"
              ? "Lake-lot or interior lot, photos you can attach in the email, and what you want to see."
              : "Trades, Ocotillo Lakes experience, and insurance."
          }
        />
      </label>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        This opens your email app to {EMAIL}. Nothing is stored on a server. We do not quote construction or collect
        job payments.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex rounded-full bg-ocotillo px-5 py-2.5 text-sm font-medium text-paper shadow-sm transition hover:bg-adobe"
        >
          {intent === "concept" ? "Open email for a free concept" : "Open email to apply"}
        </button>
        <a href={`mailto:${EMAIL}`} className="text-sm text-lake underline-offset-4 hover:underline">
          Or write {EMAIL} directly
        </a>
      </div>
    </form>
  );
}
