"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { EMAIL } from "@/lib/media";

type Intent = "concept" | "crew";

export function ContactForm({ defaultIntent = "concept" }: { defaultIntent?: Intent }) {
  const [intent, setIntent] = useState<Intent>(defaultIntent);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("intent") === "crew") setIntent("crew");
  }, []);
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [focus, setFocus] = useState("Planting / landscape");
  const [neighborhood, setNeighborhood] = useState("Ocotillo Lakes");
  const [wantIntro, setWantIntro] = useState("N");
  const [roc, setRoc] = useState("");
  const [notes, setNotes] = useState("");

  const mailto = useMemo(() => {
    const subject =
      intent === "concept"
        ? "Two-view request — Ocotillo Yards"
        : "Licensed crew application — Ocotillo Yards";
    const lines = [
      `Intent: ${intent === "concept" ? "Homeowner two-view request" : "Licensed crew application"}`,
      `Name / company: ${name}`,
      `Email: ${fromEmail}`,
    ];
    if (intent === "concept") {
      lines.push(`Focus: ${focus}`);
      lines.push(`Neighborhood: ${neighborhood}`);
      lines.push(`Intro to a licensed crew?: ${wantIntro}`);
    }
    if (intent === "crew") lines.push(`Arizona ROC number: ${roc}`);
    if (notes) lines.push("", notes);
    const body = encodeURIComponent(lines.join("\n"));
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
  }, [intent, name, fromEmail, focus, neighborhood, wantIntro, roc, notes]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    window.location.href = mailto;
  }

  const field =
    "mt-2 w-full border-0 border-b border-bone/25 bg-transparent px-0 py-2 text-bone outline-none transition placeholder:text-ash/50 focus:border-ember";
  const chip = (active: boolean) =>
    `border-b pb-1 font-caps text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition ${
      active ? "border-ember text-ember" : "border-transparent text-ash hover:text-bone"
    }`;

  return (
    <form onSubmit={onSubmit}>
      <fieldset className="mb-8">
        <legend className="kicker">I am</legend>
        <div className="mt-4 flex flex-wrap gap-6">
          <button type="button" className={chip(intent === "concept")} onClick={() => setIntent("concept")}>
            A homeowner requesting two views
          </button>
          <button type="button" className={chip(intent === "crew")} onClick={() => setIntent("crew")}>
            A licensed crew applying to be featured
          </button>
        </div>
      </fieldset>

      <label className="block text-xs uppercase tracking-[0.16em] text-ash">
        Name{intent === "crew" ? " / company" : ""}
        <input
          className={field}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="name"
        />
      </label>

      <label className="mt-6 block text-xs uppercase tracking-[0.16em] text-ash">
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
        <>
          <label className="mt-6 block text-xs uppercase tracking-[0.16em] text-ash">
            Focus
            <select className={`${field} appearance-none bg-void`} value={focus} onChange={(e) => setFocus(e.target.value)}>
              <option>Planting / landscape</option>
              <option>Hardscape</option>
              <option>LED lighting</option>
              <option>Front yard</option>
              <option>Lake-lot edge</option>
              <option>Whole lot</option>
            </select>
          </label>
          <label className="mt-6 block text-xs uppercase tracking-[0.16em] text-ash">
            Neighborhood
            <select
              className={`${field} appearance-none bg-void`}
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
            >
              <option>Ocotillo Lakes</option>
              <option>Chandler other</option>
            </select>
          </label>
          <fieldset className="mt-6">
            <legend className="text-xs uppercase tracking-[0.16em] text-ash">Intro to a licensed crew?</legend>
            <div className="mt-3 flex flex-wrap gap-6">
              <button type="button" className={chip(wantIntro === "Y")} onClick={() => setWantIntro("Y")}>
                Y
              </button>
              <button type="button" className={chip(wantIntro === "N")} onClick={() => setWantIntro("N")}>
                N
              </button>
            </div>
          </fieldset>
        </>
      ) : (
        <label className="mt-6 block text-xs uppercase tracking-[0.16em] text-ash">
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

      <label className="mt-6 block text-xs uppercase tracking-[0.16em] text-ash">
        Notes
        <textarea
          className={`${field} min-h-28 resize-y`}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={
            intent === "concept"
              ? "Lake-lot or interior lot, photos you can attach, and whether you want planting, hardscape, or lighting."
              : "Trades, Ocotillo Lakes experience, and insurance."
          }
        />
      </label>

      <p className="mt-5 text-xs leading-relaxed text-ash/80">
        This opens your email app to {EMAIL}. Nothing is stored on a server. We do not quote
        construction or collect job payments.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          className="inline-flex items-center gap-3 border border-bone/80 px-5 py-3 font-caps text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-bone transition hover:border-ember hover:text-ember"
        >
          {intent === "concept" ? "Request two views" : "Ask about a crew intro"}
          <span aria-hidden>→</span>
        </button>
        <a href={`mailto:${EMAIL}`} className="text-sm text-ash underline-offset-4 hover:text-ember hover:underline">
          Or write {EMAIL} directly
        </a>
      </div>
    </form>
  );
}
