import {
  Banknote,
  BarChart3,
  Braces,
  ClipboardCheck,
  Cloud,
  Code2,
  Component,
  CreditCard,
  Database,
  Figma,
  FileCode,
  GitBranch,
  Hash,
  Kanban,
  Layers,
  LayoutGrid,
  Layout,
  Map,
  Network,
  Palette,
  Server,
  SquareCode,
  Triangle,
  Wallet,
  Webhook,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useCopy } from "../i18n/useCopy";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  "React.js": Code2,
  "Next.js": Layout,
  JavaScript: Braces,
  HTML: FileCode,
  CSS: Palette,
  PrimeFaces: LayoutGrid,
  PHP: Server,
  Java: SquareCode,
  JSF: Component,
  "Node.js": Workflow,
  "C#": Hash,
  MySQL: Database,
  PostgreSQL: Database,
  Oracle: Database,
  DB2: Database,
  Redis: Layers,
  AWS: Cloud,
  Stripe: CreditCard,
  Square: Wallet,
  GMO: Banknote,
  WordPress: Triangle,
  "REST API": Webhook,
  Git: GitBranch,
  Figma: Figma,
  Jira: Kanban,
  GIS: Map,
  "Data Analyst": BarChart3,
  "BA & QA": ClipboardCheck,
  default: Network,
};

export function Skills() {
  const { ui, skillCards } = useCopy();

  return (
    <section id="skills" className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker={ui.skills.kicker}
            title={ui.skills.title}
            highlight={ui.skills.highlight}
          />
        </Reveal>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {skillCards.map((skill, index) => {
            const Icon = icons[skill.name] ?? icons.default;
            return (
              <Reveal key={skill.name} delay={index * 20}>
                <article className="lift rounded-2xl bg-night-2 px-2 py-4 text-center ring-1 ring-white/5">
                  <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-gold text-ink">
                    <Icon size={16} strokeWidth={1.8} />
                  </span>
                  <h3
                    className="mt-3 truncate text-[13px] font-extrabold"
                    title={skill.name === "JSF" ? "JavaServer Faces" : undefined}
                  >
                    {skill.name}
                  </h3>
                  <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-muted">
                    {skill.group}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
