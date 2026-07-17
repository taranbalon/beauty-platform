import Link from "next/link";

type BackButtonProps = {
  href?: string;
};

export default function BackButton({
  href = "/",
}: BackButtonProps) {
  return (
    <Link
      href={href}
      className="mb-6 inline-flex min-h-11 items-center justify-center rounded-2xl bg-beauty-accent px-5 text-sm font-semibold text-black shadow-beauty-card transition duration-200 hover:bg-beauty-accent-hover active:scale-[0.98]"
    >
      ← Назад
    </Link>
  );
}