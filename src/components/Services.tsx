import { Cpu, Server, ServerCog, ShoppingBag } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useCopy } from "../i18n/useCopy";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: LucideIcon[] = [Server, ShoppingBag, Cpu, ServerCog];

export function Services() {
  const { ui, services } = useCopy();

  return (
    <section id="services" className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker={ui.services.kicker}
            title={ui.services.title}
            highlight={ui.services.highlight}
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Server;
            return (
              <Reveal key={service.no} delay={index * 80}>
                <article className="lift flex h-full flex-col rounded-[1.6rem] bg-gold p-5 text-ink md:p-6">
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-gold">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <span className="text-sm font-bold opacity-60">{service.no}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-extrabold leading-snug">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/80">{service.description}</p>
                  <p className="mt-auto pt-4 text-[11px] font-medium leading-5 text-ink/70">
                    {service.stack.join(" · ")}
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
