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
    <main className="min-h-screen px-5 py-6 md:px-8 md:py-10 text-zinc-900">
      <div className="mx-auto w-full max-w-md md:max-w-2xl">
        <PageHeader
          title={serviceItem.name}
          subtitle={`Специалист: ${master.name} (${master.profession})`}
          backHref={`/masters/${masterId}/services`}
        />

        <section className="mt-6 md:mt-8 rounded-2xl border border-zinc-200/90 bg-white p-5 md:p-7 shadow-2xs">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg md:text-xl font-bold tracking-tight text-zinc-900">
                {serviceItem.name}
              </h2>
              <p className="mt-1 text-xs text-zinc-400">
                Индивидуальная запись к специалисту
              </p>
            </div>

            {serviceItem.price && (
              <div className="text-right shrink-0">
                <span className="text-2xl font-bold tracking-tight text-zinc-900 tabular-nums">
                  {serviceItem.price}
                </span>
                <span className="ml-1 text-xs font-semibold text-zinc-400">
                  BYN
                </span>
              </div>
            )}
          </div>

          {serviceItem.options && serviceItem.options.length > 0 && (
            <div className="mt-5 space-y-2.5 border-t border-zinc-100 pt-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Варианты услуги
              </div>
              {serviceItem.options.map((option) => (
                <div
                  key={option.name}
                  className="flex items-center justify-between gap-3 py-2 border-b border-zinc-100/60 last:border-b-0"
                >
                  <span className="text-xs md:text-sm font-medium text-zinc-700">
                    {option.name}
                  </span>

                  <div className="shrink-0 text-right">
                    <div className="text-sm md:text-base font-bold text-zinc-900 tabular-nums">
                      {option.price}{" "}
                      <span className="text-[11px] font-normal text-zinc-400">BYN</span>
                    </div>

                    {option.vipPrice && (
                      <div className="mt-0.5 inline-flex items-center gap-1 rounded-md border border-amber-200/60 bg-amber-50/80 px-1.5 py-0.5 text-[10px] font-medium text-amber-800 tabular-nums">
                        <span className="uppercase text-[9px] font-bold text-amber-900">VIP</span>
                        <span>{option.vipPrice} BYN</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 pt-2">
            <BookingButton />
          </div>
        </section>
      </div>
    </main>
  );
}
