import {
  BarChart3,
  Boxes,
  Braces,
  ClipboardCheck,
  Cloud,
  Code2,
  CreditCard,
  Database,
  GitBranch,
  Hash,
  Layers,
  Layout,
  Map,
  Network,
  Server,
  SquareCode,
  Triangle,
  Wallet,
  Webhook,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillCards } from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  "React.js": Code2,
  "Next.js": Layout,
  JavaScript: Braces,
  PHP: Server,
  Java: SquareCode,
  "Node.js": Workflow,
  "C#": Hash,
  MySQL: Database,
  PostgreSQL: Database,
  Oracle: Database,
  SAP: Boxes,
  DB2: Database,
  Redis: Layers,
  AWS: Cloud,
  Stripe: CreditCard,
  Square: Wallet,
  WordPress: Triangle,
  "REST API": Webhook,
  Git: GitBranch,
  GIS: Map,
  "Data Analyst": BarChart3,
  "BA & QA": ClipboardCheck,
  default: Network,
};

export function Skills() {
  return (
    <section id="skills" className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker="Skill"
            title="Teknologi yang"
            highlight="dikuasai"
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
                  <h3 className="mt-3 truncate text-[13px] font-extrabold">{skill.name}</h3>
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
