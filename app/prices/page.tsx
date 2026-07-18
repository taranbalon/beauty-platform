import Link from "next/link";
import PageHeader from "@/app/components/page-header";
import { priceCategories } from "@/data/prices/categories";

export default function PricesPage() {
  return (
    <main className="min-h-screen bg-beauty-background px-6 py-8 text-beauty-text">
      <div className="mx-auto w-full max-w-[420px]">

        <PageHeader title="Прайс" />

        <section className="mt-6 space-y-4">
          {priceCategories.map((category) => (
            <Link
              key={category.id}
              href={`/prices/${category.id}`}
              className="block rounded-beauty-card bg-beauty-card p-5 shadow-beauty-card transition duration-200 hover:scale-[1.01]"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  {category.title}
                </h2>

                <span className="text-2xl">›</span>
              </div>
            </Link>
          ))}
        </section>

      </div>
    </main>
  );
}