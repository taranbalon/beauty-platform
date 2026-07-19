import { CategoryCard } from "@/components/category-card";
import PageHeader from "@/app/components/page-header";
import { categories } from "@/data/categories";

export default function PricesPage() {
  return (
    <main className="min-h-screen bg-beauty-background px-6 py-8 text-beauty-text">
      <div className="mx-auto w-full max-w-[420px]">

        <PageHeader
          title="Прайс"
          backHref="/"
        />

        <section className="mt-6 space-y-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              href={`/prices/${category.id}`}
            />
          ))}
        </section>

      </div>
    </main>
  );
}