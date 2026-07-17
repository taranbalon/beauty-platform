import Link from "next/link";
import { MasterCard } from "@/components/master-card";
import { masters } from "@/data/masters";
import PageHeader from "@/app/components/page-header";

export default function MastersPage() {
  return (
    <main className="min-h-screen bg-beauty-background px-6 py-8 text-beauty-text">
      <div className="mx-auto max-w-md">
        
        <PageHeader
          title="Наши специалисты"
          subtitle="Познакомьтесь с нашей командой"
        />

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