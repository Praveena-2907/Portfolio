export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 md:py-28">
      <div className="mb-12 max-w-2xl">
        {eyebrow && (
          <span className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            {eyebrow}
          </span>
        )}
        <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
