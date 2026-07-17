import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/services";
import PageHeader from "@/app/components/page-header";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-beauty-background px-6 py-8 text-beauty-text">
      <div className="mx-auto max-w-md">

        <PageHeader
          title="Услуги"
          subtitle="Выберите интересующее направление"
        />

        <section className="mt-6 space-y-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </section>

      </div>
    </main>
  );
}