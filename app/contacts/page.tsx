import Image from "next/image";
import PageHeader from "@/app/components/page-header";
import {
  MapPin,
  Phone,
  Clock,
  NavigationArrow,
  TelegramLogo,
  WhatsappLogo,
  Compass,
} from "@phosphor-icons/react/dist/ssr";

const mapUrl = "https://yandex.ru/maps/-/CTBhzNjV";
const phone = "+375 44 511-08-80";
const telUrl = "tel:+375445110880";
const telegramUrl = "https://t.me/+375445110880";
const whatsappUrl = "https://wa.me/375445110880";

export default function ContactsPage() {
  return (
    <main className="min-h-screen px-5 py-6 md:px-8 md:py-10 text-zinc-900">
      <div className="mx-auto w-full max-w-md md:max-w-4xl lg:max-w-6xl">
        <PageHeader
          title="Контакты и салон"
          subtitle="Салон красоты Мажорка · ул. Притыцкого, 91"
          backHref="/"
        />

        {/* Structured Info Cards (3 Columns on Desktop) */}
        <section
          className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
          aria-label="Контактная информация"
        >
          {/* Address & Entrance */}
          <article className="flex flex-col justify-between rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-2xs">
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200/70 bg-[#faf8f5] text-zinc-800">
                <MapPin size={22} weight="duotone" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-zinc-900">
                  Адрес салона
                </h2>
                <p className="mt-1 text-sm font-medium text-zinc-800">
                  ул. Притыцкого, 91
                </p>
                <p className="mt-0.5 text-xs text-zinc-400">
                  Минск, Фрунзенский район
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-1.5 rounded-lg border border-zinc-200/60 bg-[#faf8f5] px-3 py-2 text-xs text-zinc-600">
              <Compass size={15} weight="bold" className="shrink-0 text-zinc-500" />
              <span>ст. м. Каменная Горка (3 мин) · Отдельный вход с фасада</span>
            </div>
          </article>

          {/* Working Hours with tabular-nums */}
          <article className="flex flex-col justify-between rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-2xs">
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200/70 bg-[#faf8f5] text-zinc-800">
                <Clock size={22} weight="duotone" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-zinc-900">
                  Режим работы
                </h2>
                <p className="mt-1 text-sm font-semibold text-zinc-800 tabular-nums">
                  09:00 — 21:00
                </p>
                <p className="mt-0.5 text-xs text-zinc-400">
                  Без выходных и перерывов
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-lg border border-emerald-200/70 bg-emerald-50/80 px-3 py-2 text-xs font-medium text-emerald-800">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Открыто сейчас</span>
              </span>
              <span className="text-[11px] font-normal text-emerald-600">
                Онлайн-запись 24/7
              </span>
            </div>
          </article>

          {/* Phone & Instant Booking */}
          <article className="flex flex-col justify-between rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-2xs">
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200/70 bg-[#faf8f5] text-zinc-800">
                <Phone size={22} weight="duotone" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-zinc-900">
                  Связь с салоном
                </h2>
                <a
                  href={telUrl}
                  className="mt-1 block text-sm font-semibold tracking-tight text-zinc-900 tabular-nums hover:underline"
                >
                  {phone}
                </a>
                <p className="mt-0.5 text-xs text-zinc-400">
                  Администратор на связи
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-sky-200/70 bg-sky-50 px-2.5 py-2 text-xs font-medium text-sky-800 transition-transform duration-150 hover:bg-sky-100 active:scale-[0.98]"
              >
                <TelegramLogo size={14} weight="fill" />
                <span>Telegram</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-emerald-200/70 bg-emerald-50 px-2.5 py-2 text-xs font-medium text-emerald-800 transition-transform duration-150 hover:bg-emerald-100 active:scale-[0.98]"
              >
                <WhatsappLogo size={14} weight="fill" />
                <span>WhatsApp</span>
              </a>
            </div>
          </article>
        </section>

        {/* Interactive Action Buttons (4 Buttons Bar) */}
        <section
          aria-label="Быстрые действия"
          className="mt-5 md:mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4"
        >
          <a
            href={telUrl}
            className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-zinc-200/90 bg-white px-4 text-xs sm:text-sm font-semibold text-zinc-900 shadow-2xs transition-all duration-150 hover:bg-zinc-50 active:scale-[0.98]"
          >
            <Phone size={16} weight="bold" />
            <span>Позвонить</span>
          </a>

          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-4 text-xs sm:text-sm font-semibold text-zinc-950 shadow-2xs transition-all duration-150 hover:bg-[#c29b2e] active:scale-[0.98]"
          >
            <NavigationArrow size={16} weight="bold" />
            <span>Маршрут / Карта</span>
          </a>

          <a
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-4 text-xs sm:text-sm font-semibold text-sky-800 shadow-2xs transition-all duration-150 hover:bg-sky-100 active:scale-[0.98]"
          >
            <TelegramLogo size={16} weight="fill" />
            <span>Telegram</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 text-xs sm:text-sm font-semibold text-emerald-800 shadow-2xs transition-all duration-150 hover:bg-emerald-100 active:scale-[0.98]"
          >
            <WhatsappLogo size={16} weight="fill" />
            <span>WhatsApp</span>
          </a>
        </section>

        {/* Map Preview Container with ring-1 ring-black/5 */}
        <section className="mt-6 md:mt-8" aria-label="Карта проезда">
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative block h-72 md:h-96 w-full overflow-hidden rounded-2xl md:rounded-3xl border border-zinc-200/90 ring-1 ring-black/5 shadow-2xs transition-all duration-200 hover:shadow-md"
          >
            <Image
              src="/map-preview.png"
              alt="Схема проезда в салон красоты Мажорка на ул. Притыцкого, 91"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="text-white">
                <div className="flex items-center gap-2 text-sm md:text-base font-bold">
                  <MapPin size={18} weight="fill" className="text-[#d4af37]" />
                  <span>Салон «Мажорка» · ул. Притыцкого, 91</span>
                </div>
                <p className="mt-0.5 text-xs text-zinc-300">
                  Минск · 3 минуты пешком от метро «Каменная Горка»
                </p>
              </div>

              <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-zinc-950 shadow-xs backdrop-blur-md transition-colors group-hover:bg-[#d4af37] active:scale-[0.98]">
                <NavigationArrow size={14} weight="bold" />
                <span>Открыть в навигаторе</span>
              </span>
            </div>
          </a>
        </section>

        <div className="pb-8" />
      </div>
    </main>
  );
}
