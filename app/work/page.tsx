import type { Metadata } from "next";
import { asset } from "@/lib/base-path";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Cta } from "@/components/Cta";
import { backyardPair, stills } from "@/lib/media";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Ocotillo Yards proof gallery. AI Concept visualizations for landscape, hardscape, and LED lighting in Chandler / Ocotillo Lakes.",
};

type Slot = {
  id: string;
  label: "AI Concept" | "Completed by Featured Provider" | "Founding Project—In Progress";
  src?: string;
  alt?: string;
  title: string;
  caption: string;
  featured?: boolean;
};

const slots: Slot[] = [
  {
    id: "concept-lake",
    label: "AI Concept",
    src: stills.lake.src,
    alt: stills.lake.alt,
    title: "Lake and golf, Ocotillo",
    caption: "The man-made waterway, tile-roof homes, and golf turf that define Ocotillo Lakes. Visualization based on this Chandler community, not a finished job.",
    featured: true,
  },
  {
    id: "concept-front",
    label: "AI Concept",
    src: stills.front.src,
    alt: stills.front.alt,
    title: "Interior street, HOA character",
    caption: "Sidewalks, turf, palms, and clay tile roofs — the everyday Ocotillo street. Visualization based on this community, not a contractor portfolio shot.",
  },
  {
    id: "concept-lighting",
    label: "AI Concept",
    src: stills.lighting.src,
    alt: stills.lighting.alt,
    title: "LED lighting at the canal",
    caption: "Path lights, uplights, and a paver walk to the dock. Landscape, hardscape, and lighting visualization.",
  },
  {
    id: "concept-shade",
    label: "AI Concept",
    src: stills.shade.src,
    alt: stills.shade.alt,
    title: "Tile patio at the water",
    caption: "Covered patio with clay tile, looking to the canal and a small dock. Visualization based on this community, not a completed install.",
  },
  {
    id: "concept-side",
    label: "AI Concept",
    src: stills.side.src,
    alt: stills.side.alt,
    title: "Entry, palms and water",
    caption: "Common-area palms, lawn, and a waterfall pond at an Ocotillo entry. Visualization based on this community, not a completed install.",
  },
  {
    id: "completed-a",
    label: "Completed by Featured Provider",
    title: "Waiting on a licensed partner",
    caption: "Empty until a featured crew finishes a job we introduced and gives written permission to show it.",
  },
  {
    id: "completed-b",
    label: "Completed by Featured Provider",
    title: "Waiting on a licensed partner",
    caption: "A second completion slot. Stays empty until we have a real yes and a permitted photo.",
  },
  {
    id: "founding",
    label: "Founding Project—In Progress",
    title: "No founding project posted yet",
    caption: "Empty until the first homeowner + licensed crew pairing is underway and we have permission to document it.",
  },
];

function Frame({ slot }: { slot: Slot }) {
  return (
    <article className={`relative overflow-hidden ${slot.featured ? "md:col-span-2 md:min-h-[70svh]" : "min-h-[48svh]"}`}>
      {slot.src ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(slot.src)} alt={slot.alt ?? slot.label} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-void/85 via-void/10 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 border border-bone/10 bg-void-2" aria-label={`${slot.label} slot, no asset yet`} />
      )}
      <div className="relative z-10 flex min-h-[48svh] flex-col justify-end p-6 sm:p-8 md:min-h-full">
        <p className="kicker">{slot.label}</p>
        <h2 className="mt-3 font-display text-2xl text-bone sm:text-3xl">{slot.title}</h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-ash">{slot.caption}</p>
      </div>
    </article>
  );
}

export default function WorkPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-28 sm:px-8">
        <p className="kicker">Proof</p>
        <h1 className="mt-4 max-w-2xl text-4xl text-bone sm:text-6xl">Work, labeled.</h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-ash sm:text-base">
          Generated yards are AI Concept. Completed-provider and founding-project frames stay
          empty until a licensed partner says yes. No fake testimonials. Street and phone stay
          off this page.
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
      <div className="grid gap-px bg-void md:grid-cols-2">
        {slots.map((slot) => (
          <Frame key={slot.id} slot={slot} />
        ))}
      </div>
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Cta href="/contact" variant="frame">
          Request a free concept
        </Cta>
      </div>
    </>
  );
}
