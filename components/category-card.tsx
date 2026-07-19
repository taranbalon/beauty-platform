import Link from "next/link";
import type { Category } from "@/data/categories";

type CategoryCardProps = {
  category: Category;
  href: string;
};

export function CategoryCard({ category, href }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-beauty-card bg-beauty-card p-5 shadow-beauty-card transition duration-200 hover:-translate-y-1 active:scale-[0.98]"
    >
      <div className="flex items-center gap-4">
        <span className="text-3xl">{category.icon}</span>

        <span className="text-lg font-semibold">
          {category.title}
        </span>
      </div>

      <span className="text-xl text-beauty-muted" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
