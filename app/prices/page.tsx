import Link from "next/link";
import { priceCategories } from "@/data/prices/categories";

export default function PricesPage() {
  return (
    <main className="min-h-screen bg-[#F7F2EC] p-4">

      <Link
  href="/"
  className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-beauty-accent px-5 text-sm font-semibold text-black shadow-beauty-card transition duration-200 hover:bg-beauty-accent-hover active:scale-[0.98]"
>
  ← Назад
</Link>

      <h1 className="mb-6 text-center text-3xl font-bold">Прайс</h1>

      <div className="space-y-4">
        {priceCategories.map((category) => (
          <Link
            key={category.id}
            href={`/prices/${category.id}`}
            className="block rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                {category.title}
              </h2>

              <span className="text-2xl">›</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}