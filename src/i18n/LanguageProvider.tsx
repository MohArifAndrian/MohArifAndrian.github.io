import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ui } from "./ui";
import {
  applyDocumentLocale,
  localeFromBrowser,
  localeFromIp,
  readStoredLocale,
  writeStoredLocale,
  type Locale,
} from "./locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function initialLocale(): Locale {
  return readStoredLocale() ?? localeFromBrowser();
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    applyDocumentLocale(locale, ui[locale].metaDescription);
  }, [locale]);

  useEffect(() => {
    if (readStoredLocale()) return;

    let cancelled = false;
    localeFromIp().then((detected) => {
      if (cancelled || !detected || readStoredLocale()) return;
      setLocaleState(detected);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale(next) {
        writeStoredLocale(next);
        setLocaleState(next);
      },
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
