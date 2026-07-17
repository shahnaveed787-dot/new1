type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h2" | "h3";
  id?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  as = "h2",
  id,
  align = "left",
}: SectionHeadingProps) {
  const Heading = as;
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`mb-8 max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-accent-teal">
          {eyebrow}
        </p>
      ) : null}
      <Heading id={id} className="text-balance text-3xl text-ink md:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-3 text-lg text-ink-muted">{description}</p>
      ) : null}
    </div>
  );
}
