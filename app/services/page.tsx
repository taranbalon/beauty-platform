import { CategoryCard } from "@/components/category-card";
import { categories } from "@/data/categories";
import PageHeader from "@/app/components/page-header";

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-5 py-6 md:px-8 md:py-10 text-zinc-900">
      <div className="mx-auto w-full max-w-md md:max-w-4xl lg:max-w-6xl">
        <PageHeader
          title="Каталог услуг"
          subtitle="Выберите интересующее направление для онлайн-записи"
          backHref="/"
        />

        <section
          aria-label="Направления услуг"
          className="mt-6 space-y-3.5 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5"
        >
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