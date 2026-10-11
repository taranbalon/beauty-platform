import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/app/components/page-header";
import { masters } from "@/data/masters";
import { priceCategories } from "@/data/prices";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

type Props = {
  params: Promise<{
    masterId: string;
  }>;
};

export default async function MasterServicesPage({ params }: Props) {
  const { masterId } = await params;

  const master = masters.find((m) => m.id === masterId);

  if (!master) {
    notFound();
  }

  const masterServices = master.services;

  const services = priceCategories
    .flatMap((category) =>
      category.items.map((item) => ({
        ...item,
        categoryId: category.id,
      }))
    )
    .filter((item) => masterServices.includes(item.categoryId));

  return (
    <main className="min-h-screen px-5 py-6 md:px-8 md:py-10 text-zinc-900">
      <div className="mx-auto w-full max-w-md md:max-w-4xl lg:max-w-6xl">
        <PageHeader
          title={master.name}
          subtitle={`${master.profession} · Выберите услугу`}
          backHref="/masters"
        />

        <section
          aria-label="Услуги мастера"
          className="mt-6 md:mt-8 space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6"
        >
          {services.length > 0 ? (
            services.map((service) => (
              <Link
                key={`${service.categoryId}-${service.id}`}
                href={`/masters/${masterId}/${service.categoryId}/${service.id}`}
                className="group flex flex-col justify-between rounded-2xl border border-zinc-200/90 bg-white p-5 md:p-6 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-xs active:scale-[0.98]"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-base md:text-lg font-bold tracking-tight text-zinc-900">
                      {service.name}
                    </h2>

                    {service.price && (
                      <div className="shrink-0 text-right">
                        <span className="text-xl font-bold text-zinc-900 tabular-nums">
                          {service.price}
                        </span>
                        <span className="ml-1 text-xs font-semibold text-zinc-400">
                          BYN
                        </span>
                      </div>
                    )}
                  </div>

                  {service.options && service.options.length > 0 && (
                    <div className="mt-4 space-y-2 border-t border-zinc-100 pt-3">
                      {service.options.map((option) => (
                        <div
                          key={option.name}
                          className="flex items-center justify-between gap-2 py-1 text-xs border-b border-zinc-100/50 last:border-b-0"
                        >
                          <span className="font-medium text-zinc-600">
                            {option.name}
                          </span>
                          <div className="text-right">
                            <span className="font-bold text-zinc-900 tabular-nums">
                              {option.price} BYN
                            </span>
                            {option.vipPrice && (
                              <span className="ml-1.5 text-[10px] text-amber-700 font-semibold tabular-nums">
                                VIP {option.vipPrice}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-3 text-xs font-semibold text-zinc-900">
                  <span>Перейти к оформлению</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 transition-colors group-hover:bg-zinc-900 group-hover:text-white">
                    <ArrowRight size={13} weight="bold" />
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-dashed border-zinc-200 p-8 text-center text-sm text-zinc-400">
              Для этого специалиста пока нет доступных услуг
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
