import { CategoryCard } from "@/components/category-card";
import PageHeader from "@/app/components/page-header";
import { categories } from "@/data/categories";

export default function PricesPage() {
  return (
    <main className="min-h-screen px-5 py-6 md:px-8 md:py-10 text-zinc-900">
      <div className="mx-auto w-full max-w-md md:max-w-4xl lg:max-w-6xl">
        <PageHeader
          title="Цены на услуги"
          subtitle="Выберите направление для просмотра подробного прайс-листа"
          backHref="/"
        />

        <section
          aria-label="Категории цен"
          className="mt-6 space-y-3.5 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5"
        >
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