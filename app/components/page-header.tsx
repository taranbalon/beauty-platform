import BackButton from "./back-button";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  backHref?: string;
};

export default function PageHeader({
  title,
  subtitle,
  backHref,
}: PageHeaderProps) {
  return (
    <div className="mb-8">
      <BackButton href={backHref} />

      <div className="mt-8 text-center">
        <h1 className="text-4xl font-bold">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-2 text-gray-500">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}