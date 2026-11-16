export type Locale = "id" | "en";

export const LOCALES: Locale[] = ["id", "en"];
export const STORAGE_KEY = "maa-locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "id" || value === "en";
}

export function readStoredLocale(): Locale | null {
  try {
    return isLocale(localStorage.getItem(STORAGE_KEY))
      ? (localStorage.getItem(STORAGE_KEY) as Locale)
      : null;
  } catch {
    return null;
  }
}

export function writeStoredLocale(locale: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    /* ignore quota / private mode */
  }
}

export function localeFromBrowser(): Locale {
  const languages =
    typeof navigator === "undefined"
      ? []
      : navigator.languages?.length
        ? navigator.languages
        : navigator.language
          ? [navigator.language]
          : [];

  return languages.some((language) => language.toLowerCase().startsWith("id"))
    ? "id"
    : "en";
}

export async function localeFromIp(timeoutMs = 1800): Promise<Locale | null> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch("https://api.country.is/", {
      signal: controller.signal,
    });
    if (!response.ok) return null;
    const data = (await response.json()) as { country?: string };
    if (!data.country) return null;
    return data.country === "ID" ? "id" : "en";
  } catch {
    return null;
  } finally {
    window.clearTimeout(timer);
  }
}

export function applyDocumentLocale(locale: Locale, description: string) {
  document.documentElement.lang = locale;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", description);
}
