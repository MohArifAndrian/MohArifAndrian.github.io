import { experience } from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker="Pengalaman"
            title="Riwayat"
            highlight="pengalaman kerja"
          />
        </Reveal>
        <Reveal className="rounded-[2rem] bg-gold p-6 text-ink md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10">
            {experience.map((job, index) => (
              <article key={job.company} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-sm font-bold text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink/70">
                    {job.period} · {job.type}
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold md:text-xl">{job.role}</h3>
                  <p className="mt-1 text-sm font-medium">{job.company}</p>
                  <p className="mt-0.5 text-xs text-ink/70">{job.location}</p>
                  <ul className="mt-3 space-y-1.5 text-sm leading-6 text-ink/80">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
