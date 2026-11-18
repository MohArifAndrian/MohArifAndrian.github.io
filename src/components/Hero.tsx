import { useCopy } from "../i18n/useCopy";

export function Hero() {
  const { profile, stats } = useCopy();

  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-16 pt-28 md:pt-36 lg:px-8 lg:pb-24"
    >
      <span className="dot left-[8%] top-28 hidden h-2.5 w-2.5 float-y sm:block" />
      <span className="dot right-[18%] top-40 hidden h-3 w-3 float-y sm:block" style={{ animationDelay: "0.6s" }} />
      <span className="dot bottom-16 left-[22%] hidden h-2 w-2 sm:block" />

      <div className="hero-enter mx-auto max-w-5xl text-center">
        <p className="text-sm font-medium text-muted md:text-base">{profile.greeting}</p>
        <h1 className="mt-4 font-extrabold leading-[1.15] tracking-tight">
          <span className="block text-[clamp(1.35rem,4.4vw,2.85rem)]">
            {profile.headline[0]}
            <span className="text-gold"> | </span>
            <br className="sm:hidden" />
            <span className="text-gold">{profile.headline[1]}</span>
          </span>
          <span className="mx-auto mt-4 block max-w-3xl text-[clamp(0.8rem,1.7vw,1.05rem)] font-semibold leading-relaxed tracking-wide text-white/75">
            {profile.headline[2].split(" • ").map((part, index, parts) => (
              <span key={part}>
                <span className="whitespace-nowrap">{part}</span>
                {index < parts.length - 1 ? <span className="text-gold"> • </span> : null}
              </span>
            ))}
          </span>
        </h1>
      </div>

      <div className="hero-enter mx-auto mt-10 max-w-3xl" style={{ animationDelay: "0.12s" }}>
        <div className="flex flex-col items-stretch justify-center gap-3 rounded-[2rem] bg-gold px-4 py-4 text-ink sm:flex-row sm:items-center sm:gap-0 sm:px-2 sm:py-3">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-1 flex-col items-center py-2 ${
                index > 0 ? "sm:border-l sm:border-ink/15" : ""
              }`}
            >
              <p className="text-2xl font-extrabold md:text-3xl">{item.value}</p>
              <p className="mt-1 text-center text-xs font-medium md:text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
