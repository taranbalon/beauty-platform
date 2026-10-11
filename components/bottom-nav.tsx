"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Sparkle,
  CalendarDots,
  MapPin,
} from "@phosphor-icons/react";

interface NavItem {
  label: string;
  href: string;
  icon: typeof House;
  isActive: (pathname: string) => boolean;
}

const navItems: NavItem[] = [
  {
    label: "Главная",
    href: "/",
    icon: House,
    isActive: (pathname) => pathname === "/",
  },
  {
    label: "Услуги",
    href: "/services",
    icon: Sparkle,
    isActive: (pathname) => pathname.startsWith("/services"),
  },
  {
    label: "Запись",
    href: "/booking",
    icon: CalendarDots,
    isActive: (pathname) => pathname.startsWith("/booking"),
  },
  {
    label: "Контакты",
    href: "/contacts",
    icon: MapPin,
    isActive: (pathname) => pathname.startsWith("/contacts"),
  },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Основная навигация"
      className="fixed bottom-0 left-1/2 z-50 w-full max-w-[420px] -translate-x-1/2 border-t border-zinc-200/80 bg-[#faf8f5]/90 backdrop-blur-xl shadow-[0_-4px_24px_rgba(0,0,0,0.04)] md:hidden"
      style={{
        paddingBottom: "max(0.6rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
      <div className="grid grid-cols-4 items-center px-2 pt-2 pb-1">
        {navItems.map((item) => {
          const active = item.isActive(pathname);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex flex-col items-center justify-center gap-1 rounded-xl py-1 text-center transition-all duration-150 active:scale-90 ${
                active
                  ? "text-zinc-950 font-medium"
                  : "text-zinc-400 hover:text-zinc-700 font-normal"
              }`}
            >
              <div className="relative flex h-6 w-6 items-center justify-center">
                <Icon
                  size={22}
                  weight={active ? "fill" : "regular"}
                  className={`transition-colors duration-150 ${
                    active ? "text-zinc-900" : "text-zinc-400 group-hover:text-zinc-600"
                  }`}
                />
                {active && (
                  <span className="absolute -bottom-1.5 h-1 w-1 rounded-full bg-zinc-900" />
                )}
              </div>
              <span className="text-[11px] leading-tight tracking-tight">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
