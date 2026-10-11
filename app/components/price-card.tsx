import Link from "next/link";
import { PriceItem } from "@/data/prices/types";
import BookingButton from "@/app/components/booking-button";

type PriceCardProps = {
  item: PriceItem;
  bookingHref?: string;
};

export default function PriceCard({
  item,
  bookingHref,
}: PriceCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-zinc-200/90 bg-white p-5 md:p-6 shadow-2xs transition-all duration-200 hover:border-zinc-300 hover:shadow-xs">
      <div>
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base md:text-lg font-bold tracking-tight text-zinc-900">
            {item.name}
          </h3>

          {item.price && (
            <div className="shrink-0 text-right">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 tabular-nums">
                {item.price}
              </span>
              <span className="ml-1 text-xs font-semibold text-zinc-400">
                BYN
              </span>
            </div>
          )}
        </div>

        {/* Options list with thin dividers */}
        {item.options && item.options.length > 0 && (
          <div className="mt-4 space-y-2.5 border-t border-zinc-100 pt-3">
            {item.options.map((option) => (
              <div
                key={option.name}
                className="flex items-center justify-between gap-3 py-1.5 border-b border-zinc-100/60 last:border-b-0"
              >
                <span className="text-xs md:text-sm font-medium text-zinc-700">
                  {option.name}
                </span>

                <div className="shrink-0 text-right">
                  <div className="text-sm md:text-base font-bold text-zinc-900 tabular-nums">
                    {option.price}{" "}
                    <span className="text-[11px] font-normal text-zinc-400">BYN</span>
                  </div>

                  {option.vipPrice && (
                    <div className="mt-0.5 inline-flex items-center gap-1 rounded-md border border-amber-200/60 bg-amber-50/80 px-1.5 py-0.5 text-[10px] font-medium text-amber-800 tabular-nums">
                      <span className="uppercase text-[9px] font-bold text-amber-900">VIP</span>
                      <span>{option.vipPrice} BYN</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Booking CTA */}
      <div className="mt-5 pt-2">
        {bookingHref ? (
          <Link href={bookingHref} className="block w-full">
            <BookingButton />
          </Link>
        ) : (
          <BookingButton />
        )}
      </div>
    </article>
  );
}