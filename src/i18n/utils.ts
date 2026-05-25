import { ui, defaultLang } from "./ui";

export const showDefaultLang = false;

// Define un tipo para los idiomas soportados
export type SupportedLang = "es" | "en";

export function getLangFromUrl(url: URL): SupportedLang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as SupportedLang;
  return defaultLang;
}

export function useTranslations(lang: SupportedLang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: SupportedLang) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}
