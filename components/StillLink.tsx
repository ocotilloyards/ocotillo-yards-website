import Link from "next/link";
import { asset } from "@/lib/base-path";

export function StillLink({
  href,
  src,
  alt,
  label,
  title,
  className = "",
}: {
  href: string;
  src: string;
  alt: string;
  label: string;
  title: string;
  className?: string;
}) {
  return (
    <Link href={href} className={`group relative block overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(src)}
        alt={alt}
        className="h-full w-full object-cover motion-safe:transition motion-safe:duration-700 motion-safe:group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
        <p className="kicker">{label}</p>
        <p className="mt-2 font-display text-2xl leading-tight text-bone sm:text-3xl">{title}</p>
      </div>
    </Link>
  );
}
