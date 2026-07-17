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
            className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-beauty-accent px-5 text-sm font-semibold text-black shadow-beauty-card transition duration-200 hover:bg-beauty-accent-hover active:scale-[0.98]"
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
