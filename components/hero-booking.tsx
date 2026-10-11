"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Sparkle, ArrowRight, Clock } from "@phosphor-icons/react";

export function HeroBooking() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-label="Онлайн-запись в салон" className="mx-5 md:mx-6 lg:mx-8 mt-5 md:mt-8">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-zinc-800/90 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 p-5 md:p-8 lg:p-10 text-white shadow-sm shadow-zinc-950/20"
      >
        {/* Subtle decorative champagne ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#d4af37]/10 blur-3xl md:h-72 md:w-72"
        />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-8">
          {/* Left: Content */}
          <div className="flex flex-col gap-2.5 md:max-w-xl">
            {/* Status strip */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-0.5 text-[10px] md:text-xs font-medium uppercase tracking-wider text-zinc-300">
                <Sparkle size={12} weight="fill" className="text-[#d4af37]" />
                <span>Запись 24/7</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] md:text-xs text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Свободные окна сегодня</span>
              </span>
            </div>

            {/* Heading & Subtext */}
            <div>
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
                Онлайн-запись в салон
              </h2>
              <p className="mt-1 md:mt-2 text-xs md:text-sm leading-relaxed text-zinc-400">
                Выберите направление, любимого мастера и удобное время за 30 секунд без звонков и ожидания
              </p>
            </div>
          </div>

          {/* Right: CTA block */}
          <div className="shrink-0 md:min-w-[260px] lg:min-w-[280px]">
            <Link href="/booking" className="block w-full">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="flex w-full items-center justify-between gap-3 rounded-xl md:rounded-2xl bg-[#d4af37] px-5 py-3.5 md:py-4 text-sm md:text-base font-semibold text-zinc-950 shadow-xs transition-colors duration-150 hover:bg-[#c29b2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 active:scale-[0.98]"
              >
                <span>Записаться на визит</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-950/10 text-zinc-950">
                  <ArrowRight size={15} weight="bold" />
                </span>
              </motion.div>
            </Link>

            <div className="mt-2 hidden md:flex items-center justify-center gap-1.5 text-[11px] text-zinc-400">
              <Clock size={12} weight="regular" />
              <span>Подтверждение за 1 минуту</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
