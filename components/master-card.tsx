import Image from "next/image";
import Link from "next/link";
import type { Master } from "@/data/masters";
import { Star, ArrowRight } from "@phosphor-icons/react/dist/ssr";

type MasterCardProps = {
  master: Master;
};

export function MasterCard({ master }: MasterCardProps) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-3.5 sm:p-4 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-xs">
      <div>
        {/* Master Avatar / Portrait Container */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-100 ring-1 ring-black/5">
          <Image
            src={master.image}
            alt={master.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
            priority={false}
          />

          {/* Experience badge */}
          {master.experience && (
            <div className="absolute top-2.5 left-2.5 inline-flex items-center rounded-full bg-zinc-950/70 px-2.5 py-0.5 text-[11px] font-medium text-white shadow-2xs backdrop-blur-md">
              <span>{master.experience}</span>
            </div>
          )}

          {/* Rating badge */}
          <div className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 rounded-full border border-white/60 bg-white/90 px-2 py-0.5 text-xs font-semibold text-zinc-900 shadow-2xs backdrop-blur-md">
            <Star size={13} weight="fill" className="text-amber-500" />
            <span className="tabular-nums">{master.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Master info */}
        <div className="mt-3.5">
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900">
            {master.name}
          </h3>

          <div className="mt-1">
            <span className="inline-block rounded-md border border-zinc-200/70 bg-[#faf8f5] px-2 py-0.5 text-[11px] font-medium text-zinc-600 line-clamp-1">
              {master.profession}
            </span>
          </div>

          {master.about && (
            <p className="mt-2 text-xs leading-relaxed text-zinc-400 line-clamp-2">
              {master.about}
            </p>
          )}
        </div>
      </div>

      {/* Action CTA */}
      <Link
        href={`/masters/${master.id}/services`}
        className="mt-4 block w-full"
      >
        <span className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-950 shadow-2xs transition-all duration-150 hover:bg-[#c29b2e] active:scale-[0.98]">
          <span>Выбрать услугу</span>
          <ArrowRight size={14} weight="bold" />
        </span>
      </Link>
    </article>
  );
}