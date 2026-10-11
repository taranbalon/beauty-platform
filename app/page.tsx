import Link from "next/link";
import { HeroBooking } from "@/components/hero-booking";
import {
  Sparkle,
  Users,
  Star,
  MapPin,
  CurrencyCircleDollar,
  ArrowRight,
  Phone,
  NavigationArrow,
  Gift,
} from "@phosphor-icons/react/dist/ssr";

const mainSections = [
  {
    icon: Sparkle,
    title: "Услуги",
    subtitle: "Полный каталог и направления",
    href: "/services",
    isExternal: false,
  },
  {
    icon: Users,
    title: "Мастера",
    subtitle: "Наша команда специалистов",
    href: "/masters",
    isExternal: false,
  },
  {
    icon: CurrencyCircleDollar,
    title: "Цены",
    subtitle: "Прозрачный прайс-лист",
    href: "/prices",
    isExternal: false,
  },
  {
    icon: Star,
    title: "Отзывы",
    subtitle: "Рейтинг 4.9 · Яндекс.Карты",
    href: "https://yandex.ru/maps/-/CTBhzNjV",
    isExternal: true,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-zinc-900">
      <div className="flex w-full flex-col">
        {/* Header (Branding & Live Status) */}
        <header className="px-5 pt-6 text-center md:px-8 md:pt-10">
          <div className="flex justify-center">
            <div className="relative">
              <div className="h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-full border border-zinc-200/90 bg-white p-0.5 shadow-xs">
                <img
                  src="/logo.jpg"
                  alt="Мажорка"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 whitespace-nowrap rounded-full border border-emerald-200/80 bg-emerald-50/90 px-2.5 py-0.5 text-[10px] md:text-xs font-medium text-emerald-700 shadow-2xs backdrop-blur-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Открыто до 21:00</span>
              </div>
            </div>
          </div>

          <h1 className="mt-5 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl md:text-4xl">
            Мажорка
          </h1>

          <p className="mt-1 text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
            Салон красоты · ул. Притыцкого, 91
          </p>
        </header>

        {/* Hero Booking Banner */}
        <HeroBooking />

        {/* 4 Primary Navigation Cards (2x2 on Mobile, 1x4 on Desktop) */}
        <section
          aria-label="Разделы салона"
          className="mt-6 md:mt-10 px-5 md:px-6 lg:px-8"
        >
          <div className="mb-3 md:mb-4 flex items-center justify-between">
            <h2 className="text-base md:text-lg font-bold tracking-tight text-zinc-900">
              Разделы
            </h2>
            <span className="text-xs text-zinc-400">
              Быстрый доступ к каталогу
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
            {mainSections.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="group flex h-full flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-4 md:p-6 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-xs active:scale-[0.98]">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-xl border border-zinc-200/70 bg-[#faf8f5] text-zinc-800 transition-colors duration-150 group-hover:bg-zinc-900 group-hover:text-white">
                      <Icon size={22} weight="duotone" />
                    </div>
                    <span className="text-zinc-300 transition-colors duration-150 group-hover:text-zinc-700">
                      <ArrowRight size={16} weight="bold" />
                    </span>
                  </div>

                  <div className="mt-4 md:mt-6">
                    <div className="text-base md:text-lg font-semibold tracking-tight text-zinc-900">
                      {item.title}
                    </div>
                    <div className="mt-1 text-xs text-zinc-400 line-clamp-1">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              );

              return item.isExternal ? (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full"
                >
                  {content}
                </a>
              ) : (
                <Link key={item.title} href={item.href} className="block h-full">
                  {content}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Full-width Harmonious Location & Contacts Banner */}
        <section
          aria-label="Локация и контакты"
          className="mt-5 md:mt-6 px-5 md:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 rounded-2xl md:rounded-3xl border border-zinc-200/90 bg-white p-5 md:p-7 shadow-2xs">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-zinc-200/70 bg-[#faf8f5] text-zinc-800">
                <MapPin size={24} weight="duotone" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base md:text-lg font-bold tracking-tight text-zinc-900">
                    Салон красоты «Мажорка»
                  </h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-medium text-emerald-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Открыто сейчас</span>
                  </span>
                </div>

                <p className="mt-1 text-xs md:text-sm text-zinc-500">
                  ул. Притыцкого, 91 · ст. м. Каменная Горка (3 мин) · Отдельный вход
                </p>

                <div className="mt-2.5 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                  <span>
                    Режим: <strong className="font-semibold text-zinc-800 tabular-nums">09:00 — 21:00</strong> ежедневно
                  </span>
                  <span className="text-zinc-300">•</span>
                  <span className="inline-flex items-center gap-1 text-amber-700 font-medium">
                    <Gift size={13} weight="fill" />
                    <span>Подарочные сертификаты в наличии</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-zinc-100">
              <a
                href="tel:+375445110880"
                className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-200/90 bg-white px-3.5 py-2.5 text-xs font-semibold text-zinc-900 shadow-2xs transition-all duration-150 hover:bg-zinc-50 active:scale-[0.98]"
              >
                <Phone size={14} weight="bold" />
                <span className="tabular-nums">+375 (44) 511-08-80</span>
              </a>

              <a
                href="https://yandex.ru/maps/-/CTBhzNjV"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-zinc-900 px-3.5 py-2.5 text-xs font-semibold text-white shadow-2xs transition-all duration-150 hover:bg-zinc-800 active:scale-[0.98]"
              >
                <NavigationArrow size={14} weight="bold" />
                <span>Маршрут</span>
              </a>

              <Link
                href="/contacts"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#d4af37] px-4 py-2.5 text-xs font-semibold text-zinc-950 shadow-2xs transition-all duration-150 hover:bg-[#c29b2e] active:scale-[0.98]"
              >
                <span>Контакты</span>
                <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </section>

        <div className="pb-8" />
      </div>
    </main>
  );
}