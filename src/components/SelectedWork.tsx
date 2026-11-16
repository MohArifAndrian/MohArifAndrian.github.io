import { ArrowUpRight } from "lucide-react";
import {
  batuProjects,
  glodingMoreProjects,
  glodingProjects,
  personalProjects,
  sisiProjects,
  surabayaProjects,
  type Project,
} from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Card({ project, index }: { project: Project; index: number }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="text-xs font-bold text-gold">
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.url ? <ArrowUpRight size={16} className="text-gold" /> : null}
      </div>
      <h3 className="mt-5 text-xl font-extrabold">{project.name}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold/90">
        {project.stack.slice(0, 4).join(" · ")}
      </p>
    </>
  );

  const className =
    "lift block h-full rounded-[1.5rem] bg-night-2 p-6 ring-1 ring-white/5 md:p-7";

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return <article className={className}>{inner}</article>;
}

function CompanyHeading({
  kicker,
  company,
  note,
}: {
  kicker: string;
  company: string;
  note: string;
}) {
  return (
    <div className="mb-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
        {kicker}
      </p>
      <h3 className="mx-auto mt-3 max-w-4xl text-2xl font-extrabold leading-snug text-white md:text-3xl">
        {company}
      </h3>
      <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-muted">{note}</p>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker="Proyek"
            title="Karya yang pernah"
            highlight="dikerjakan"
          />
        </Reveal>

        <Reveal>
          <CompanyHeading
            kicker="Gloding Inc."
            company="PT. Global Coding Indonesia"
            note="Pengembangan CMS, e-commerce, CRM, dan integrasi sistem."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {glodingProjects.map((project, index) => (
            <Reveal key={project.name} delay={index * 50}>
              <Card project={project} index={index} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-gold/80">
            Proyek lainnya di Gloding
          </p>
          <ProjectList projects={glodingMoreProjects} />
        </Reveal>

        <Reveal className="mt-16">
          <CompanyHeading
            kicker="Kontrak"
            company="Dinas Perumahan Rakyat dan Kawasan Permukiman, Cipta Karya dan Tata Ruang Kota Surabaya"
            note="Pengembangan aplikasi administrasi dinas."
          />
          <ProjectList projects={surabayaProjects} />
        </Reveal>

        <div className="mt-16">
          <CompanyHeading
            kicker="PT SISI"
            company="PT. Sinergi Informatika Semen Indonesia (SISI)"
            note="Sistem yang dikembangkan untuk Semen Indonesia Group dan perusahaan eksternal."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sisiProjects.slice(0, 3).map((project, index) => (
              <Reveal key={project.name} delay={index * 50}>
                <Card project={project} index={index} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-5">
            <ProjectList projects={sisiProjects.slice(3)} />
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <CompanyHeading
            kicker="Magang"
            company="Dinas Komunikasi dan Informatika Kota Batu"
            note="Pengembangan media informasi publik."
          />
          <ProjectList projects={batuProjects} />
        </Reveal>

        <div className="mt-20 flex items-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-gold" />
          <span className="h-2 w-10 rounded-full bg-gold" />
          <span className="h-px flex-1 bg-gold" />
        </div>

        <Reveal className="mt-14">
          <CompanyHeading
            kicker="Personal"
            company="Personal Project dan Kolaborasi"
            note="Dikembangkan bersama instansi pemerintah, yayasan, dan lembaga pendidikan."
          />
        </Reveal>
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
          {personalProjects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={index * 60}
              className={project.fullWidth ? "md:col-span-2" : ""}
            >
              <article className="border-t-2 border-gold pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                {project.org ? (
                  <p className="mt-2 text-xs leading-5 text-muted">{project.org}</p>
                ) : null}
                <h3 className="mt-2 text-xl font-extrabold md:text-2xl">{project.name}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
                <p className="mt-4 text-[11px] font-medium text-gold/90">
                  {project.stack.join(" · ")}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="divide-y divide-white/10 rounded-[1.5rem] bg-night-2 ring-1 ring-white/5">
      {projects.map((project) => {
        const inner = (
          <>
            <div className="min-w-0 flex-1">
              <span className="inline-flex items-center gap-2 font-bold">
                {project.name}
                {project.url ? <ArrowUpRight size={14} className="text-gold" /> : null}
              </span>
              <p className="mt-1 text-sm leading-6 text-muted">{project.description}</p>
            </div>
            <span className="text-[11px] font-medium leading-5 text-gold/90 sm:w-40 sm:shrink-0 sm:pt-1 sm:text-right">
              {project.stack.join(" · ")}
            </span>
          </>
        );

        const className =
          "flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8";

        return (
          <li key={project.name}>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className={`${className} transition-colors hover:bg-white/5`}
              >
                {inner}
              </a>
            ) : (
              <div className={className}>{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
