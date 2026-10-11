import Link from "next/link";
import type { Service } from "@/data/services";
import { getCategoryIcon } from "@/components/category-icons";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = getCategoryIcon(service.id);

  return (
    <Link
      href={`/booking/${service.id}`}
      className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-zinc-200/90 bg-white p-4 md:p-5 text-left shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-xs active:scale-[0.98]"
    >
      <div className="flex items-center gap-3.5 md:gap-4 min-w-0">
        <div className="flex h-11 w-11 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-200/70 bg-[#faf8f5] text-zinc-800 transition-colors duration-150 group-hover:bg-zinc-900 group-hover:text-white">
          <Icon size={22} weight="duotone" />
        </div>

        <div className="min-w-0">
          <span className="block truncate text-sm md:text-base font-semibold tracking-tight text-zinc-900">
            {service.name}
          </span>

          {service.description ? (
            <span className="mt-0.5 block truncate text-xs text-zinc-400">
              {service.description}
            </span>
          ) : (
            <span className="mt-0.5 block text-[11px] text-zinc-400">
              Онлайн-бронирование
            </span>
          )}
        </div>
      </div>

      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-zinc-300 transition-colors duration-150 group-hover:text-zinc-800"
        aria-hidden="true"
      >
        <ArrowRight size={16} weight="bold" />
      </span>
    </Link>
  );
}