import { CategoryCard } from "@/components/category-card";
import { categories } from "@/data/categories";
import PageHeader from "@/app/components/page-header";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-beauty-background px-6 py-8 text-beauty-text">
      <div className="mx-auto max-w-md">

        <PageHeader
          title="Услуги"
          subtitle="Выберите интересующее направление"
          backHref="/"
        />

        <section className="mt-6 space-y-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              href={`/booking/${category.id}`}
            />
          ))}
        </section>

      </div>
    </main>
  );
}