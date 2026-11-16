import { ArrowUpRight } from "lucide-react";
import {
  batuProjects,
  glodingMoreProjects,
  glodingProjects,
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
      <h3 className="mt-3 text-2xl font-extrabold text-white md:text-3xl">
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
            company="Dinas Perumahan Kota Surabaya"
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
            {sisiProjects.map((project, index) => (
              <Reveal key={project.name} delay={index * 50}>
                <Card project={project} index={index} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16">
          <CompanyHeading
            kicker="Magang"
            company="Dinas Komunikasi dan Informatika Kota Batu"
            note="Pengembangan media informasi publik."
          />
          <ProjectList projects={batuProjects} />
        </Reveal>
      </div>
    </section>
  );
}

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="divide-y divide-white/10 rounded-[1.5rem] bg-night-2 ring-1 ring-white/5">
      {projects.map((project) => (
        <li
          key={project.name}
          className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <span className="font-bold">{project.name}</span>
            <p className="mt-1 text-sm leading-6 text-muted">{project.description}</p>
          </div>
          <span className="shrink-0 text-sm text-gold/90">
            {project.stack.slice(0, 3).join(" · ")}
          </span>
        </li>
      ))}
    </ul>
  );
}
