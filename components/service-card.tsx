import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  // Здесь позже будет переход к выбору мастера.
  return (
    <button
      type="button"
      className="flex w-full items-center gap-4 rounded-beauty-card bg-beauty-card p-5 text-left shadow-beauty-card transition duration-200 hover:-translate-y-1"
    >
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-beauty-background text-2xl"
        aria-hidden="true"
      >
        {service.icon}
      </span>
      <span className="flex-1 text-lg font-semibold text-beauty-text">
        {service.name}
      </span>
      <span className="text-2xl text-beauty-muted" aria-hidden="true">
        →
      </span>
    </button>
  );
}
