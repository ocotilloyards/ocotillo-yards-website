import Link from "next/link";
import { OcotilloMark } from "./OcotilloMark";

export function Wordmark({ href = "/", compact = false }: { href?: string; compact?: boolean }) {
  return (
    <Link href={href} className="group flex items-end gap-2 text-dusk no-underline">
      <OcotilloMark className={compact ? "h-8 w-5 text-creosote" : "h-11 w-6 text-creosote"} />
      <span className="flex items-baseline gap-2 leading-none">
        <span className="wordmark-oco text-[1.65rem] text-dusk sm:text-[1.85rem]">Ocotillo</span>
        <span className="wordmark-yards text-adobe">Yards</span>
      </span>
      <span className="sr-only">Ocotillo Yards home</span>
    </Link>
  );
}
