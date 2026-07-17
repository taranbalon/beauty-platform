import Link from "next/link";
import { MasterCard } from "@/components/master-card";
import { masters } from "@/data/masters";
import { services } from "@/data/services";

type Props = {
  params: Promise<{
    service: string;
  }>;
};

export default async function MastersPage({ params }: Props) {
  const { service } = await params;

  const currentService = services.find((item) => item.id === service);

  const filteredMasters = masters.filter((master) =>
    master.services.includes(service)
  );

  return (
    <main className="min-h-screen bg-beauty-background px-6 py-8 text-beauty-text">
      <div className="mx-auto max-w-md">
        <Link
          href="/services"
          className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-beauty-accent px-5 text-sm font-semibold text-black shadow-beauty-card transition duration-200 hover:bg-beauty-accent-hover active:scale-[0.98]"
        >
          ← Назад
        </Link>

        <h1 className="mt-6 text-3xl font-bold">
          {currentService?.name ?? "Мастера"}
        </h1>

        <p className="mt-2 text-beauty-muted">
          Выберите мастера
        </p>

        <section className="mt-6 space-y-4">
          {filteredMasters.map((master) => (
  <MasterCard
    key={master.id}
    master={master}
  />
))}

          {filteredMasters.length === 0 && (
            <p className="text-beauty-muted">
              Для этой услуги пока нет мастеров.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}