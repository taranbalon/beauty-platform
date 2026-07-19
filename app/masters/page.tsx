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
    <main className="min-h-screen bg-beauty-background px-6 py-8 text-beauty-text">
      <div className="mx-auto max-w-md">
        <PageHeader
          title="Наши специалисты"
          subtitle={
            service
              ? "Выберите специалиста"
              : "Познакомьтесь с нашей командой"
          }
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