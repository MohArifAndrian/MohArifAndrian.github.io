import { BookOpen, GraduationCap } from "lucide-react";
import { education, teaching } from "../data/profile";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section className="px-5 py-8 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-[1.6rem] bg-night-2 p-7 ring-1 ring-white/5">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-ink">
              <GraduationCap size={22} strokeWidth={1.8} />
            </span>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Pendidikan
            </p>
            <h3 className="mt-2 text-2xl font-extrabold">{education.institution}</h3>
            <p className="mt-2 text-sm text-muted">{education.faculty}</p>
            <p className="mt-1 text-sm">{education.program}</p>
            <p className="mt-5 text-sm font-semibold text-gold">
              {education.years} · IPK {education.gpa} · {education.predicate}
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">{education.note}</p>
          </article>
        </Reveal>
        <Reveal delay={80}>
          <article className="h-full rounded-[1.6rem] bg-night-2 p-7 ring-1 ring-white/5">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-ink">
              <BookOpen size={22} strokeWidth={1.8} />
            </span>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Mengajar
            </p>
            <h3 className="mt-2 text-2xl font-extrabold">Pendampingan dan pengajaran</h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
              {teaching.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
