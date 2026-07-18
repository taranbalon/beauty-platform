import Link from "next/link";
import { notFound } from "next/navigation";

import PageHeader from "../../components/page-header";
import { getPriceCategory } from "../../../data/prices";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function BookingCategoryPage({ params }: Props) {
  const { category } = await params;

  const data = getPriceCategory(category);

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-beauty-background text-beauty-text">
      <div className="mx-auto max-w-md px-6 py-6">
        <PageHeader
          title={data.title}
          subtitle="Выберите услугу"
        />

        <div className="mt-6 space-y-4">
          {data.items.map((item) => {
            const minPrice =
              item.price ??
              (item.options
                ? Math.min(...item.options.map((option) => option.price))
                : undefined);

            return (
              <Link
                key={item.id}
                href="#"
                className="flex items-center justify-between rounded-beauty-card bg-beauty-card p-5 shadow-beauty-card transition duration-200 hover:-translate-y-1"
              >
                <div>
                  <div className="text-lg font-semibold">
                    {item.name}
                  </div>

                  {minPrice && (
                    <div className="mt-2 text-sm text-beauty-muted">
                      от {minPrice} BYN
                    </div>
                  )}
                </div>

                <span className="text-xl text-beauty-muted">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}