import { notFound } from "next/navigation";
import PageHeader from "@/app/components/page-header";
import BookingButton from "@/app/components/booking-button";
import { masters } from "@/data/masters";
import { getPriceCategory } from "@/data/prices";

type Props = {
  params: Promise<{
    masterId: string;
    categoryId: string;
    serviceId: string;
  }>;
};

export default async function MasterServicePage({ params }: Props) {
  const { masterId, categoryId, serviceId } = await params;

  const master = masters.find((m) => m.id === masterId);

  if (!master) {
    notFound();
  }

  const priceCategory = getPriceCategory(categoryId);

  if (!priceCategory) {
    notFound();
  }

  const serviceItem = priceCategory.items.find(
    (item) => item.id === serviceId
  );

  if (!serviceItem) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-beauty-background px-6 py-8 text-beauty-text">
      <div className="mx-auto max-w-md">
        <PageHeader
          title={serviceItem.name}
          subtitle={`Мастер: ${master.name}`}
          backHref={`/masters/${masterId}/services`}
        />

        <section className="mt-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-beauty-card">
          <h2 className="text-xl font-bold text-gray-900">
            {serviceItem.name}
          </h2>

          {serviceItem.price && (
            <p className="mt-3 text-2xl font-bold text-gray-900">
              {serviceItem.price} BYN
            </p>
          )}

          {serviceItem.options?.map((option) => (
            <div
              key={option.name}
              className="mt-5 border-t border-gray-100 pt-5"
            >
              <div className="text-lg font-medium">
                {option.name}
              </div>

              <div className="mt-2 text-xl font-bold">
                {option.price} BYN
              </div>

              {option.vipPrice && (
                <div className="mt-1 text-sm text-gray-500">
                  VIP {option.vipPrice} BYN
                </div>
              )}
            </div>
          ))}

          <div className="mt-8">
            <BookingButton />
          </div>
        </section>
      </div>
    </main>
  );
}
