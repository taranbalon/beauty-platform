import { notFound } from "next/navigation";

import PageHeader from "@/app/components/page-header";
import { MasterCard } from "@/components/master-card";
import { masters } from "@/data/masters";
import { getPriceCategory } from "@/data/prices";

type Props = {
  params: Promise<{
    category: string;
    service: string;
  }>;
};

export default async function BookingServicePage({ params }: Props) {
  const { category, service } = await params;

  const priceCategory = getPriceCategory(category);

  if (!priceCategory) {
    notFound();
  }

  const serviceItem = priceCategory.items.find(
    (item) => item.id === service
  );

  if (!serviceItem) {
    notFound();
  }

  const filteredMasters = masters.filter((master) =>
    master.services.includes(category)
  );

  return (
    <main className="min-h-screen bg-beauty-background px-6 py-8 text-beauty-text">
      <div className="mx-auto max-w-md">
        <PageHeader
          title={serviceItem.name}
          subtitle="Выберите мастера"
          backHref={`/booking/${category}`}
        />

        <section className="mt-8 space-y-10">
          {filteredMasters.map((master) => (
            <MasterCard
              key={master.id}
              master={master}
            />
          ))}
        </section>
      </div>
    </main>
  );
}