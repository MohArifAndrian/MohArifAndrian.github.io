import { FileDown, Github, Globe, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import type { FormEvent } from "react";
import { profile } from "../data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "Halo");
    const message = String(data.get("message") ?? "");
    const body = encodeURIComponent(`Dari: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  }

  return (
    <section id="contact" className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            kicker="Kontak"
            title="Silakan"
            highlight="menghubungi saya"
          />
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="rounded-[1.6rem] bg-night-2 p-7 ring-1 ring-white/5">
              <p className="text-sm leading-7 text-muted">
                Apabila terdapat keperluan kolaborasi, pertanyaan teknis, atau
                pengembangan sistem, silakan mengirim pesan. Saya akan merespons
                secepatnya.
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-gold" />
                  {profile.location}
                </li>
                <li>
                  <a href={`tel:${profile.phone}`} className="flex items-center gap-3 hover:text-gold">
                    <Phone size={16} className="text-gold" />
                    {profile.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-gold">
                    <Mail size={16} className="text-gold" />
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 hover:text-gold"
                  >
                    <Github size={16} className="text-gold" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 hover:text-gold"
                  >
                    <Linkedin size={16} className="text-gold" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={profile.blog}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 hover:text-gold"
                  >
                    <Globe size={16} className="text-gold" />
                    Blog
                  </a>
                </li>
                <li>
                  <a href={profile.cv} className="flex items-center gap-3 hover:text-gold">
                    <FileDown size={16} className="text-gold" />
                    Unduh CV
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <form onSubmit={onSubmit} className="grid gap-4 rounded-[1.6rem] bg-night-2 p-7 ring-1 ring-white/5">
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" required className="site-input" placeholder="Nama" />
                <input
                  name="email"
                  type="email"
                  required
                  className="site-input"
                  placeholder="Email"
                />
              </div>
              <input name="subject" required className="site-input" placeholder="Subjek" />
              <textarea
                name="message"
                required
                rows={5}
                className="site-input resize-none"
                placeholder="Tuliskan keperluan Anda"
              />
              <button type="submit" className="gold-btn w-full py-3 text-sm sm:w-auto sm:px-6">
                Kirim Pesan
                <Send size={15} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
