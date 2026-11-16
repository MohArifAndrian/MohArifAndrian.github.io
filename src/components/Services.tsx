import { Cpu, Server, ShoppingBag } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: LucideIcon[] = [Server, ShoppingBag, Cpu];

export function Services() {
  return (
    <section id="services" className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker="Layanan"
            title="Lingkup"
            highlight="pekerjaan"
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Server;
            return (
              <Reveal key={service.no} delay={index * 80}>
                <article className="lift flex h-full flex-col rounded-[1.6rem] bg-gold p-6 text-ink md:p-7">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-gold">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <span className="text-sm font-bold opacity-60">{service.no}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-extrabold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/80">{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
