import { Check } from "lucide-react";
import { aboutHighlights, profile } from "../data/profile";
import { Monogram } from "./Monogram";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <Monogram className="aspect-[4/5] w-full" />
          <span className="absolute bottom-5 left-5 rounded-full bg-gold px-4 py-2 text-xs font-bold text-ink">
            {profile.location}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Tentang
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
            Saya mengembangkan sistem yang{" "}
            <span className="text-gold">mendukung pekerjaan sehari-hari</span>
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-muted md:text-[15px]">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-gold text-ink">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
