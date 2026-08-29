import Link from "next/link";
import { EMAIL, nav } from "@/lib/media";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="bg-void text-bone">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ash">
            Visualization and referral for Chandler&apos;s Ocotillo Lakes. Landscape, hardscape,
            and LED lighting — then an intro to a licensed local crew.
          </p>
        </div>
        <div>
          <p className="kicker">Visit</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-bone/85 hover:text-ember">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-bone/85 hover:text-ember">
                Request a concept
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="kicker">Contact</p>
          <p className="mt-4 text-sm">
            <a href={`mailto:${EMAIL}`} className="hover:text-ember">
              {EMAIL}
            </a>
          </p>
          <p className="mt-2 text-sm text-ash">Chandler, Arizona · Ocotillo Lakes</p>
        </div>
      </div>
      <div className="border-t border-bone/10">
        <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
          <p className="text-xs leading-relaxed text-ash/80">
            Ocotillo Yards is a visualization and referral service, not a licensed contractor.
            Licensed partners perform construction. We do not perform construction, write plans,
            file HOA packets, quote construction, schedule crews, collect job payments, or
            install pools. Exterior changes in Ocotillo Lakes may require Ocotillo Community
            Association Design Review Board approval; the homeowner and licensed contractor file.
          </p>
          <p className="mt-3 text-xs text-ash/60">© {new Date().getFullYear()} Ocotillo Yards</p>
        </div>
      </div>
    </footer>
  );
}
