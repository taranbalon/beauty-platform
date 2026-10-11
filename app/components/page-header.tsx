import BackButton from "./back-button";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  backHref?: string;
  rightAction?: React.ReactNode;
};

export default function PageHeader({
  title,
  subtitle,
  backHref = "/",
  rightAction,
}: PageHeaderProps) {
  return (
    <header className="mb-6">
      <div className="flex items-center justify-between">
        <BackButton href={backHref} />
        {rightAction && <div>{rightAction}</div>}
      </div>

      <div className="mt-4">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-1 text-sm text-zinc-500 font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}