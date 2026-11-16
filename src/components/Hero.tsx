import { profile, stats } from "../data/profile";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-16 pt-28 md:pt-36 lg:px-8 lg:pb-24"
    >
      <span className="dot left-[8%] top-28 h-2.5 w-2.5 float-y" />
      <span className="dot right-[18%] top-40 h-3 w-3 float-y" style={{ animationDelay: "0.6s" }} />
      <span className="dot bottom-16 left-[22%] h-2 w-2" />

      <div className="hero-enter mx-auto max-w-5xl text-center">
        <p className="text-sm font-medium text-muted md:text-base">{profile.greeting}</p>
        <h1 className="mt-4 font-extrabold leading-[1.2] tracking-tight">
          <span className="block whitespace-nowrap text-[clamp(1.05rem,3.6vw,2.75rem)]">
            {profile.headline[0]}
            <span className="text-gold"> | </span>
            {profile.headline[1]}
          </span>
          <span className="mt-1 block text-[clamp(1.2rem,4vw,3.15rem)] text-gold">
            {profile.headline[2]}
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
