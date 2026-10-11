"use client";

import Link from "next/link";
import { CaretLeft } from "@phosphor-icons/react";

type BackButtonProps = {
  href?: string;
  label?: string;
};

export default function BackButton({
  href = "/",
  label,
}: BackButtonProps) {
  return (
    <Link
      href={href}
      aria-label="Назад"
      className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors duration-150 hover:text-zinc-950 active:scale-95"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/90 bg-white/90 shadow-xs backdrop-blur-sm transition-all duration-150 group-hover:border-zinc-300 group-hover:bg-white group-active:scale-90">
        <CaretLeft
          size={18}
          weight="bold"
          className="text-zinc-700 transition-transform duration-150 group-hover:-translate-x-0.5"
        />
      </span>
      {label && (
        <span className="text-xs font-medium text-zinc-600 transition-colors group-hover:text-zinc-900">
          {label}
        </span>
      )}
    </Link>
  );
}