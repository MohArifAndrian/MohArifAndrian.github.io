import { Award, BookMarked, Medal } from "lucide-react";
import { awards, certifications, research } from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Highlights() {
  return (
    <section className="px-5 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker="Pencapaian"
            title="Sertifikasi, penelitian,"
            highlight="dan penghargaan"
          />
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          <Reveal>
            <article className="h-full rounded-[1.6rem] bg-night-2 p-7 ring-1 ring-white/5">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-ink">
                <Medal size={22} strokeWidth={1.8} />
              </span>
              <h3 className="mt-6 text-xl font-extrabold">Sertifikasi</h3>
              <ul className="mt-4 space-y-4 text-sm leading-6">
                {certifications.map((item) => (
                  <li key={item.title}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                      {item.year}
                    </p>
                    <p className="mt-1 font-medium">{item.title}</p>
                    <p className="text-muted">{item.org}</p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={70}>
            <article className="h-full rounded-[1.6rem] bg-night-2 p-7 ring-1 ring-white/5">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-ink">
                <Award size={22} strokeWidth={1.8} />
              </span>
              <h3 className="mt-6 text-xl font-extrabold">Penghargaan</h3>
              <ul className="mt-4 space-y-4 text-sm leading-6">
                {awards.map((item) => (
                  <li key={item.title}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                      {item.year}
                    </p>
                    <p className="mt-1 font-medium">{item.title}</p>
                    <p className="text-muted">{item.org}</p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={140}>
            <article className="h-full rounded-[1.6rem] bg-night-2 p-7 ring-1 ring-white/5">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-ink">
                <BookMarked size={22} strokeWidth={1.8} />
              </span>
              <h3 className="mt-6 text-xl font-extrabold">Penelitian</h3>
              <ul className="mt-4 space-y-4 text-sm leading-6">
                {research.map((item) => (
                  <li key={item.title}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                      {item.year}
                    </p>
                    <p className="mt-1 text-muted">{item.title}</p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
