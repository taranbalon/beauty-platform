import Link from "next/link";
import type { Category } from "@/data/categories";
import { getCategoryIcon } from "@/components/category-icons";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

type CategoryCardProps = {
  category: Category;
  href: string;
};

export function CategoryCard({ category, href }: CategoryCardProps) {
  const Icon = getCategoryIcon(category.id);

  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-2xl border border-zinc-200/90 bg-white p-4 md:p-5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-xs active:scale-[0.98]"
    >
      <div className="flex items-center gap-3.5 md:gap-4">
        <div className="flex h-11 w-11 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-200/70 bg-[#faf8f5] text-zinc-800 transition-colors duration-150 group-hover:bg-zinc-900 group-hover:text-white">
          <Icon size={22} weight="duotone" />
        </div>

        <div>
          <span className="block text-sm md:text-base font-semibold tracking-tight text-zinc-900">
            {category.title}
          </span>
          <span className="mt-0.5 block text-[11px] md:text-xs text-zinc-400">
            Направление салона
          </span>
        </div>
      </div>

      <span
        className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-300 transition-colors duration-150 group-hover:text-zinc-800"
        aria-hidden="true"
      >
        <ArrowRight size={16} weight="bold" />
      </span>
    </Link>
  );
}
