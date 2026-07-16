import Link from "next/link";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-beauty-background px-6 py-8 text-beauty-text">
      <div className="mx-auto max-w-md">
        <header>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded-beauty-button border border-beauty-border bg-beauty-card px-4 text-sm font-semibold text-beauty-text shadow-beauty-card transition hover:bg-beauty-card-hover"
          >
            ← Назад
          </Link>
          <h1 className="mt-6 text-3xl font-bold">Услуги</h1>
          <p className="mt-2 text-beauty-muted">
            Выберите интересующее направление
          </p>
        </header>

        <section className="mt-6 space-y-4" aria-label="Список услуг">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </section>
      </div>
    </main>
  );
}
