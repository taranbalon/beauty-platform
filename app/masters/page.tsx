import Link from "next/link";
import { MasterCard } from "@/components/master-card";
import { masters } from "@/data/masters";

export default function MastersPage() {
  return (
    <main className="min-h-screen bg-beauty-background px-6 py-8 text-beauty-text">
      <div className="mx-auto max-w-md">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-beauty-accent px-5 text-sm font-semibold text-black shadow-beauty-card transition duration-200 hover:bg-beauty-accent-hover active:scale-[0.98]"
        >
          ← Назад
        </Link>

        <h1 className="mt-6 text-3xl font-bold">
          Наши специалисты
        </h1>

        <p className="mt-2 text-beauty-muted">
          Познакомьтесь с нашей командой
        </p>

        <section className="mt-8 space-y-10">
          {masters.map((master) => (
            <MasterCard
              key={master.id}
              master={master}
            />
          ))}
        </section>
      </div>
    </main>
  );
}