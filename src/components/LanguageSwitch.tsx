import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import { ui } from "../i18n/ui";
import type { Locale } from "../i18n/locale";

const options: { value: Locale; code: string }[] = [
  { value: "id", code: "ID" },
  { value: "en", code: "EN" },
];

export function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();
  const copy = ui[locale];
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="inline-flex h-10 items-center gap-1 rounded-xl border border-white/10 px-2.5 text-xs font-bold tracking-wider text-white/90 transition-colors hover:border-gold/40 hover:text-gold"
        aria-label={copy.language}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        {locale.toUpperCase()}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <ul
          id={menuId}
          role="listbox"
          aria-label={copy.language}
          className="absolute right-0 z-[60] mt-2 min-w-40 overflow-hidden rounded-xl bg-night-2 py-1 ring-1 ring-white/10"
        >
          {options.map((option) => {
            const selected = option.value === locale;
            const label = option.value === "id" ? copy.indonesia : copy.english;
            return (
              <li key={option.value} role="option" aria-selected={selected}>
                <button
                  type="button"
                  className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm ${
                    selected ? "bg-gold text-ink" : "text-white/90 hover:bg-white/5"
                  }`}
                  onClick={() => {
                    setLocale(option.value);
                    setOpen(false);
                  }}
                >
                  <span>{label}</span>
                  <span className="text-[11px] font-bold tracking-wider">{option.code}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
