type BookingButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

export default function BookingButton({
  onClick,
  children = "Записаться",
}: BookingButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-2xl bg-beauty-accent px-5 py-3 text-base font-semibold text-black shadow-beauty-card transition duration-200 hover:bg-beauty-accent-hover active:scale-[0.98]"
    >
      {children}
    </button>
  );
}