import Image from "next/image";
import Link from "next/link";
import type { Master } from "@/data/masters";

type MasterCardProps = {
  master: Master;
};

export function MasterCard({ master }: MasterCardProps) {
  return (
    <Link href={`/masters/${master.id}/services`}>
      <button
        type="button"
        className="mx-auto mb-6 block w-full max-w-[340px] transition duration-200 hover:-translate-y-1 active:scale-[0.98]"
      >
        <Image
          src={master.image}
          alt={master.name}
          width={700}
          height={1000}
          className="w-full rounded-2xl shadow-beauty-card"
          priority={false}
        />

        <span className="mt-0 flex min-h-12 w-full items-center justify-center rounded-2xl bg-beauty-accent px-6 font-semibold text-black shadow-beauty-card transition duration-200 hover:bg-beauty-accent-hover">
          Выбрать услугу
        </span>
      </button>
    </Link>
  );
}