import { notFound } from "next/navigation";
import PageHeader from "@/app/components/page-header";
import PriceCard from "@/app/components/price-card";
import { getPriceCategory } from "@/data/prices";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function BookingCategoryPage({ params }: Props) {
  const { category } = await params;

  const priceCategory = getPriceCategory(category);

  if (!priceCategory) {
    notFound();
  }

  return (
    <main className="min-h-screen px-5 py-6 md:px-8 md:py-10 text-zinc-900">
      <div className="mx-auto w-full max-w-md md:max-w-4xl lg:max-w-6xl">
        <PageHeader
          title={priceCategory.title}
          subtitle="Выберите услугу для онлайн-записи"
          backHref="/booking"
        />

        <div className="mt-8 space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {priceCategory.items.map((item) => (
            <PriceCard
              key={item.id}
              item={item}
              bookingHref={`/booking/${category}/${item.id}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}