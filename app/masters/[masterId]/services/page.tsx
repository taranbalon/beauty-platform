import { notFound } from "next/navigation";
import Link from "next/link";
import BackButton from "@/app/components/back-button";
import { masters } from "@/data/masters";
import { priceCategories } from "@/data/prices";

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
    <main className="min-h-screen bg-beauty-background px-6 py-8 text-beauty-text">
      <div className="mx-auto max-w-md">
        <BackButton href="/masters" />

        <div className="mt-8 text-center">
          <h1 className="text-3xl font-bold">
            {master.name}
          </h1>
          <p className="mt-2 text-gray-500">
            Выберите услугу
          </p>
        </div>

        <section className="mt-8 space-y-4">
          {services.length > 0 ? (
            services.map((service) => (
              <Link
                key={`${service.categoryId}-${service.id}`}
                href={`/masters/${masterId}/${service.categoryId}/${service.id}`}
                className="block rounded-3xl border border-gray-100 bg-white p-6 shadow-beauty-card transition duration-200 hover:-translate-y-1 active:scale-[0.98]"
              >
                <h2 className="text-xl font-bold text-gray-900">
                  {service.name}
                </h2>

                {service.price && (
                  <p className="mt-3 text-2xl font-bold text-gray-900">
                    {service.price} BYN
                  </p>
                )}

                {service.options?.map((option) => (
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
              </Link>
            ))
          ) : (
            <p className="text-gray-500">
              Услуги не найдены
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
