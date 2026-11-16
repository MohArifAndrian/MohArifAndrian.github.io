type SectionHeadingProps = {
  kicker: string;
  title: string;
  highlight?: string;
};

export function SectionHeading({ kicker, title, highlight }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center md:mb-14">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
        {kicker}
      </p>
      <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
        {title}
        {highlight ? (
          <>
            {" "}
            <span className="text-gold">{highlight}</span>
          </>
        ) : null}
      </h2>
    </div>
  );
}
