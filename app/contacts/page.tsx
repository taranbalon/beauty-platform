import Image from "next/image";

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
    <main className="min-h-screen bg-[#f7f6f3] px-6 py-8 text-zinc-900">
      <div className="mx-auto max-w-md">
        <header>
          <h1 className="text-3xl font-bold">Контакты</h1>
          <p className="mt-2 text-zinc-500">Салон красоты Мажорка</p>
        </header>

        <section className="mt-6 space-y-4" aria-label="Контактная информация">
          {contactCards.map((card) => (
            <article
              key={card.title}
              className="flex gap-4 rounded-[28px] bg-white p-5 shadow-md"
            >
              <div className="text-3xl" aria-hidden="true">
                {card.icon}
              </div>
              <div>
                <h2 className="text-lg font-semibold">{card.title}</h2>
                {card.details.map((detail) => (
                  <p key={detail} className="mt-1 text-zinc-500">
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
            className="relative block h-60 w-full overflow-hidden rounded-[24px] shadow-md"
          >
            <Image
              src="/map-preview.png"
              alt="Карта расположения салона Мажорка"
              fill
              sizes="(max-width: 448px) calc(100vw - 48px), 400px"
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-2xl bg-black/70 px-4 py-3 text-sm font-semibold text-white">
              📍 Открыть карту
            </span>
          </a>
        </section>

        <section className="mt-6 grid gap-3 pb-4">
          <a
            href="tel:+375445110880"
            className="flex min-h-14 items-center justify-center rounded-2xl bg-zinc-950 px-5 text-lg font-semibold text-white shadow-lg transition hover:bg-zinc-800"
          >
            📞 Позвонить
          </a>
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-14 items-center justify-center rounded-2xl bg-[#d4af37] px-5 text-lg font-semibold text-black shadow-lg transition hover:bg-[#c29b2e]"
          >
            📍 Построить маршрут
          </a>
        </section>
      </div>
    </main>
  );
}
