import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/app/components/page-header";

const contactCards = [
  {
    icon: "📍",
    title: "Адрес",
    details: ["ул. Притыцкого, 91"],
  },
  {
    icon: "📞",
    title: "Телефон",
    details: ["+375 44 511-08-80"],
  },
  {
    icon: "🕒",
    title: "Режим работы",
    details: ["Ежедневно", "09:00 – 21:00"],
  },
];

const mapUrl = "https://yandex.ru/maps/-/CTBhzNjV";

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-beauty-background px-6 py-8 text-beauty-text">
      <div className="mx-auto max-w-md">

  <PageHeader
  title="Контакты"
  subtitle="Салон красоты Мажорка"
/>
          
        <section className="mt-6 space-y-4" aria-label="Контактная информация">
          {contactCards.map((card) => (
            <article
              key={card.title}
              className="flex gap-4 rounded-beauty-card bg-beauty-card p-5 shadow-beauty-card"
            >
              <div className="text-3xl" aria-hidden="true">
                {card.icon}
              </div>
              <div>
                <h2 className="text-lg font-semibold">{card.title}</h2>
                {card.details.map((detail) => (
                  <p key={detail} className="mt-1 text-beauty-muted">
                    {detail}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-6" aria-label="Карта">
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="relative block h-60 w-full overflow-hidden rounded-beauty-card shadow-beauty-card"
          >
            <Image
              src="/map-preview.png"
              alt="Карта расположения салона Мажорка"
              fill
              sizes="(max-width: 448px) calc(100vw - 48px), 400px"
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-beauty-button bg-beauty-overlay px-4 py-3 text-sm font-semibold text-beauty-inverse">
              📍 Открыть карту
            </span>
          </a>
        </section>

        <section className="mt-6 grid gap-3 pb-4">
          <a
            href="tel:+375445110880"
            className="flex min-h-14 items-center justify-center rounded-beauty-button border border-beauty-border bg-beauty-card px-5 text-lg font-semibold text-beauty-text shadow-beauty-card transition hover:bg-beauty-card-hover"
          >
            📞 Позвонить
          </a>
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-14 items-center justify-center rounded-beauty-button bg-beauty-accent px-5 text-lg font-semibold text-beauty-text shadow-beauty-card transition hover:bg-beauty-accent-hover"
          >
            📍 Построить маршрут
          </a>
        </section>
      </div>
    </main>
  );
}
