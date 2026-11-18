import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useCopy } from "../i18n/useCopy";
import { LanguageSwitch } from "./LanguageSwitch";

type HeaderProps = {
  active: string;
};

export function Header({ active }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const { ui, navItems, profile } = useCopy();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-night/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="grid h-10 min-w-10 place-items-center rounded-xl bg-gold px-1.5 text-[11px] font-extrabold tracking-tight text-ink">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-5 text-[12px] font-semibold uppercase tracking-[0.14em] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-colors ${
                active === item.id ? "text-gold" : "text-white/80 hover:text-gold"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center justify-end gap-2">
          <a
            href={profile.cv}
            download={profile.cvFileName}
            className="hidden whitespace-nowrap rounded-full border border-gold/40 px-3 py-1.5 text-xs font-bold text-gold transition-colors hover:bg-gold hover:text-ink lg:inline-flex"
          >
            {ui.downloadCv}
          </a>
          <a
            href="#contact"
            className="gold-btn hidden whitespace-nowrap px-3.5 py-1.5 text-xs sm:inline-flex"
          >
            {ui.contactMe}
          </a>
          <LanguageSwitch />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 lg:hidden"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-white/5 bg-night px-5 py-4 lg:hidden">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                    active === item.id ? "bg-gold text-ink" : "text-white/85 hover:bg-white/5"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.cv}
                download={profile.cvFileName}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gold"
                onClick={() => setOpen(false)}
              >
                {ui.downloadCv}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
