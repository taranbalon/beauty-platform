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
    <main className="min-h-screen px-5 py-6 md:px-8 md:py-10 text-zinc-900">
      <div className="mx-auto w-full max-w-md md:max-w-4xl lg:max-w-6xl">
        <PageHeader
          title={serviceItem.name}
          subtitle="Выберите мастера для записи"
          backHref={`/booking/${category}`}
        />

        <section
          aria-label="Специалисты по услуге"
          className="mt-8 space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8"
        >
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