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
import { useCopy } from "../i18n/useCopy";
import type { UiCopy } from "../i18n/ui";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function CaseNotes({ project, labels }: { project: Project; labels: UiCopy["work"] }) {
  if (!project.caseStudy) return null;
  return (
    <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
      <li>
        <span className="font-semibold text-gold">{labels.problem} </span>
        {project.caseStudy.problem}
      </li>
      <li>
        <span className="font-semibold text-gold">{labels.contribution} </span>
        {project.caseStudy.contribution}
      </li>
      <li>
        <span className="font-semibold text-gold">{labels.outcome} </span>
        {project.caseStudy.outcome}
      </li>
    </ul>
  );
}

function Card({
  project,
  index,
  labels,
}: {
  project: Project;
  index: number;
  labels: UiCopy["work"];
}) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="text-xs font-bold text-gold">
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.url ? (
          <ArrowUpRight size={16} className="text-gold" />
        ) : (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">
            {labels.internal}
          </span>
        )}
      </div>
      <h3 className="mt-5 text-xl font-extrabold">{project.name}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
      <CaseNotes project={project} labels={labels} />
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
  const { ui, localizeProject } = useCopy();
  const labels = ui.work;
  const gloding = glodingProjects.map(localizeProject);
  const glodingMore = glodingMoreProjects.map(localizeProject);
  const surabaya = surabayaProjects.map(localizeProject);
  const sisi = sisiProjects.map(localizeProject);
  const batu = batuProjects.map(localizeProject);
  const personal = personalProjects.map(localizeProject);

  return (
    <section id="work" className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker={labels.kicker}
            title={labels.title}
            highlight={labels.highlight}
          />
        </Reveal>

        <Reveal>
          <CompanyHeading
            kicker="Gloding Inc."
            company="PT. Global Coding Indonesia"
            note={labels.glodingNote}
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {gloding.map((project, index) => (
            <Reveal key={project.name} delay={index * 50}>
              <Card project={project} index={index} labels={labels} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-gold/80">
            {labels.glodingMore}
          </p>
          <ProjectList projects={glodingMore} />
        </Reveal>

        <Reveal className="mt-16">
          <CompanyHeading
            kicker={labels.surabayaKicker}
            company="Dinas Perumahan Rakyat dan Kawasan Permukiman, Cipta Karya dan Tata Ruang Kota Surabaya"
            note={labels.surabayaNote}
          />
          <ProjectList projects={surabaya} />
        </Reveal>

        <div className="mt-16">
          <CompanyHeading
            kicker="PT SISI"
            company="PT. Sinergi Informatika Semen Indonesia (SISI)"
            note={labels.sisiNote}
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sisi.slice(0, 3).map((project, index) => (
              <Reveal key={project.name} delay={index * 50}>
                <Card project={project} index={index} labels={labels} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-5">
            <ProjectList projects={sisi.slice(3)} />
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <CompanyHeading
            kicker={labels.batuKicker}
            company="Dinas Komunikasi dan Informatika Kota Batu"
            note={labels.batuNote}
          />
          <ProjectList projects={batu} />
        </Reveal>

        <div className="mt-20 flex items-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-gold" />
          <span className="h-2 w-10 rounded-full bg-gold" />
          <span className="h-px flex-1 bg-gold" />
        </div>

        <Reveal className="mt-14">
          <CompanyHeading
            kicker={labels.personalKicker}
            company={labels.personalTitle}
            note={labels.personalNote}
          />
        </Reveal>
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
          {personal.map((project, index) => (
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
                <CaseNotes project={project} labels={labels} />
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
