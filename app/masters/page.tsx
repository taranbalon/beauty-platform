import { MasterCard } from "@/components/master-card";
import { masters } from "@/data/masters";
import PageHeader from "@/app/components/page-header";

type Props = {
  searchParams: Promise<{
    service?: string;
  }>;
};

export default async function MastersPage({ searchParams }: Props) {
  const { service } = await searchParams;

  const filteredMasters = service
    ? masters.filter((master) => master.services.includes(service))
    : masters;

  return (
    <main className="min-h-screen px-5 py-6 md:px-8 md:py-10 text-zinc-900">
      <div className="mx-auto w-full max-w-md md:max-w-4xl lg:max-w-6xl">
        <PageHeader
          title="Наши специалисты"
          subtitle={
            service
              ? "Выберите специалиста для выбранной услуги"
              : "Познакомьтесь с командой топ-мастеров салона Мажорка"
          }
          backHref="/"
        />

        <section
          aria-label="Список мастеров"
          className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
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