import Link from "next/link";

const menuItems = [
  {
    icon: "✂️",
    title: "Услуги",
    subtitle: "Полный каталог",
    href: "/services",
  },
  {
    icon: "👩‍🎨",
    title: "Мастера",
    subtitle: "Наши специалисты",
  },
  {
    icon: "⭐",
    title: "Отзывы",
    subtitle: "Мнения клиентов",
  },
  {
    icon: "📍",
    title: "Контакты",
    subtitle: "Адрес и телефон",
    href: "/contacts",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-beauty-background text-beauty-text">
      <div className="mx-auto flex min-h-screen max-w-md flex-col">

        {/* Header */}

        <header className="px-6 pt-6">

          <div className="flex justify-center">

            <div className="overflow-hidden rounded-full border-4 border-beauty-accent shadow-beauty-card">

              <img
                src="/logo.jpg"
                alt="Мажорка"
                className="h-20 w-20 object-cover"
              />

            </div>

          </div>

          <h1 className="mt-4 text-center text-3xl font-bold text-beauty-text">
            Мажорка
          </h1>

          <p className="mt-2 text-center text-beauty-muted">
            Салон красоты
          </p>

        </header>

        {/* Hero */}

<section className="mx-6 mt-5 rounded-beauty-banner bg-beauty-banner p-5 text-beauty-inverse shadow-beauty-banner">

  <div className="flex items-center justify-between gap-4">

    <div>

      <p className="text-[11px] font-medium uppercase tracking-[3px] text-beauty-accent">
        Добро пожаловать
      </p>

      <h2 className="mt-2 text-xl font-bold">
        Онлайн-запись
      </h2>

      <p className="mt-1 text-sm text-beauty-banner-muted">
        Запишитесь за 30 секунд
      </p>

    </div>

    <button className="rounded-beauty-button bg-beauty-accent px-5 py-3 font-semibold text-beauty-text transition hover:scale-105">
      →
    </button>

  </div>

</section>

        {/* Menu */}

        <section className="mt-5 grid grid-cols-2 gap-4 px-6">

          {menuItems.map((item) =>
            item.href ? (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-beauty-card bg-beauty-card p-5 text-left shadow-beauty-card transition duration-200 hover:-translate-y-1"
              >
                <div className="text-4xl">{item.icon}</div>

                <div className="mt-5 text-lg font-semibold">{item.title}</div>

                <div className="mt-2 text-sm text-beauty-muted">
                  {item.subtitle}
                </div>
              </Link>
            ) : (
              <button
                key={item.title}
                className="rounded-beauty-card bg-beauty-card p-5 text-left shadow-beauty-card transition duration-200 hover:-translate-y-1"
              >
                <div className="text-4xl">{item.icon}</div>

                <div className="mt-5 text-lg font-semibold">{item.title}</div>

                <div className="mt-2 text-sm text-beauty-muted">
                  {item.subtitle}
                </div>
              </button>
            ),
          )}

        </section>

        <button className="mx-6 mt-4 flex items-center justify-between rounded-beauty-card bg-beauty-card p-5 text-left shadow-beauty-card transition duration-200 hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="text-4xl">
              💰
            </div>

            <div>
              <div className="text-lg font-semibold">
                Цены
              </div>

              <div className="mt-2 text-sm text-beauty-muted">
                Полный прайс-лист
              </div>
            </div>
          </div>

          <div className="text-2xl text-beauty-muted">
            →
          </div>
        </button>

              <div className="flex-1" />

        {/* Bottom */}

        <nav className="mt-8 border-t border-beauty-border bg-beauty-card">

          <div className="grid grid-cols-4 py-4">

            <button className="flex flex-col items-center gap-1 text-beauty-text">
              <span>🏠</span>
              <span className="text-xs">Главная</span>
            </button>

            <button className="flex flex-col items-center gap-1 text-beauty-muted">
              <span>✂️</span>
              <span className="text-xs">Услуги</span>
            </button>

            <button className="flex flex-col items-center gap-1 text-beauty-muted">
              <span>📅</span>
              <span className="text-xs">Запись</span>
            </button>

            <button className="flex flex-col items-center gap-1 text-beauty-muted">
              <span>👤</span>
              <span className="text-xs">Профиль</span>
            </button>

          </div>

        </nav>

      </div>
    </main>
  );
}
