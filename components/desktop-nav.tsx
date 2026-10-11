"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDots, Phone } from "@phosphor-icons/react";

const links = [
  { label: "Главная", href: "/" },
  { label: "Услуги", href: "/services" },
  { label: "Мастера", href: "/masters" },
  { label: "Цены", href: "/prices" },
  { label: "Контакты", href: "/contacts" },
];

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 hidden w-full border-b border-zinc-200/80 bg-[#faf8f5]/90 backdrop-blur-md md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity duration-150 hover:opacity-90"
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-zinc-200/90 bg-white p-0.5 shadow-2xs">
            <img
              src="/logo.jpg"
              alt="Мажорка"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div>
            <div className="text-base font-bold tracking-tight text-zinc-900 group-hover:text-zinc-800">
              Мажорка
            </div>
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400">
              Салон красоты
            </div>
          </div>
        </Link>

        {/* Navigation links */}
        <nav aria-label="Десктопная навигация" className="flex items-center gap-1">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-zinc-900 text-white shadow-2xs"
                    : "text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-950"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action group */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+375445110880"
            className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-zinc-950"
          >
            <Phone size={14} weight="bold" className="text-zinc-500" />
            <span>+375 (44) 511-08-80</span>
          </a>

          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-xl bg-[#d4af37] px-4 py-2 text-xs font-semibold text-zinc-950 shadow-2xs transition-all duration-150 hover:bg-[#c29b2e] active:scale-[0.98]"
          >
            <CalendarDots size={14} weight="bold" />
            <span>Онлайн-запись</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
