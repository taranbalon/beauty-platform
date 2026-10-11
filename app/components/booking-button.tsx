import { CalendarDots } from "@phosphor-icons/react/dist/ssr";

type BookingButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
};

export default function BookingButton({
  onClick,
  children = "Записаться онлайн",
  className = "",
}: BookingButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-4 py-2.5 text-xs md:text-sm font-semibold text-zinc-950 shadow-2xs transition-all duration-150 hover:bg-[#c29b2e] active:scale-[0.98] ${className}`}
    >
      <CalendarDots size={15} weight="bold" />
      <span>{children}</span>
    </button>
  );
}