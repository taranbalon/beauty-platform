import { notFound } from "next/navigation";
import PageHeader from "@/app/components/page-header";
import { getPriceCategory } from "@/data/prices";
import PriceCard from "@/app/components/price-card";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function PriceCategoryPage({ params }: Props) {
  const { category } = await params;

  const priceCategory = getPriceCategory(category);

  if (!priceCategory) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-beauty-background px-6 py-8">
      <div className="mx-auto w-full max-w-[420px]">
        <PageHeader
          title={priceCategory.title}
          subtitle="Прайс-лист"
          backHref="/prices"
        />

        <div className="mt-8 space-y-4">
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