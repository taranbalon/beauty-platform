import Link from "next/link";
import PageHeader from "../components/page-header";

const categories = [
  {
    title: "Парикмахерские услуги",
    icon: "💇",
    href: "/booking/hair",
  },
  {
    title: "Маникюр",
    icon: "💅",
    href: "/booking/manicure",
  },
  {
    title: "Педикюр",
    icon: "🦶",
    href: "/booking/pedicure",
  },
  {
    title: "Ресницы",
    icon: "👁️",
    href: "/booking/lashes",
  },
  {
    title: "Брови",
    icon: "✨",
    href: "/booking/brows",
  },
  {
    title: "Макияж",
    icon: "💄",
    href: "/booking/makeup",
  },
  {
    title: "Перманентный макияж",
    icon: "✒️",
    href: "/booking/pmu",
  },
  {
    title: "Массаж",
    icon: "💆",
    href: "/booking/massage",
  },
  {
    title: "Косметология",
    icon: "🧴",
    href: "/booking/cosmetology",
  },
  {
    title: "Депиляция",
    icon: "🪒",
    href: "/booking/depilation",
  },
];

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-beauty-background text-beauty-text">
      <div className="mx-auto max-w-md px-6 py-6">
            <PageHeader
          title="Онлайн-запись"
          subtitle="Выберите направление"
        />

        <div className="mt-6 space-y-4">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="flex items-center justify-between rounded-beauty-card bg-beauty-card p-5 shadow-beauty-card transition duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{category.icon}</span>

                <span className="text-lg font-semibold">
                  {category.title}
                </span>
              </div>

              <span className="text-xl text-beauty-muted">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}