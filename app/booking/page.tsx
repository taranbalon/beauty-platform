import { CategoryCard } from "@/components/category-card";
import PageHeader from "../components/page-header";
import { categories } from "@/data/categories";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-beauty-background text-beauty-text">
      <div className="mx-auto max-w-md px-6 py-6">
        <PageHeader
          title="Онлайн-запись"
          subtitle="Выберите направление"
          backHref="/"
        />

        <div className="mt-6 space-y-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              href={`/booking/${category.id}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}