import Link from "next/link";
import { Wordmark } from "./Wordmark";

const EMAIL = "ocotilloyardsaz@gmail.com";

export function Footer() {
  return (
    <footer className="bg-dusk text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="[&_.wordmark-oco]:text-paper [&_.wordmark-yards]:text-bloom [&_svg]:text-palo">
            <Wordmark />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand">
            Visualization and referral for Chandler&apos;s Ocotillo Lakes. Free two-view AI
            concepts, then an intro to a licensed local crew.
          </p>
        </div>
        <div>
          <p className="wordmark-yards text-stone">Visit</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/how-it-works" className="hover:text-gold">How it works</Link></li>
            <li><Link href="/homeowners" className="hover:text-gold">Homeowners</Link></li>
            <li><Link href="/contractors" className="hover:text-gold">For contractors</Link></li>
            <li><Link href="/work" className="hover:text-gold">Work</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Request a concept</Link></li>
          </ul>
        </div>
        <div>
          <p className="wordmark-yards text-stone">Contact</p>
          <p className="mt-3 text-sm">
            <a href={`mailto:${EMAIL}`} className="hover:text-gold">{EMAIL}</a>
          </p>
          <p className="mt-2 text-sm text-sand">Chandler, Arizona · Ocotillo Lakes</p>
        </div>
      </div>
      <div className="border-t border-creosote">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <p className="text-xs leading-relaxed text-stone">
            Ocotillo Yards is a visualization and referral service, not a licensed contractor.
            Licensed partners perform construction. We do not perform construction, write plans,
            file HOA packets, quote construction, schedule crews, or collect job payments.
            Exterior changes in Ocotillo Lakes may require Ocotillo Community Association Design
            Review Board approval; the homeowner and licensed contractor file.
          </p>
          <p className="mt-3 text-xs text-stone/80">© {new Date().getFullYear()} Ocotillo Yards</p>
        </div>
      </div>
    </footer>
  );
}
