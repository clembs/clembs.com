import { defaultLocale, type Locale, localeCodes, ui } from ".";

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Locale;
  return defaultLocale;
}

export function useTranslations(locale: Locale) {
  return function t(
    key: keyof (typeof ui)[typeof defaultLocale] | (string & {})
  ) {
    // @ts-ignore
    return ui?.[locale]?.[key] ?? ui?.[defaultLocale]?.[key] ?? "";
  };
}

export function useTranslatedPaths(lang: Locale) {
  return function translatePath(path: string, l: string = lang) {
    const [, pathLang, ...restPath] = path.split("/");

    if (Object.keys(ui).includes(pathLang)) {
      return removeTrailingSlash(`/${l}/${restPath.join("/")}`);
    }

    return removeTrailingSlash(`/${l}${path}`);
  };
}

export function removeTrailingSlash(string: string) {
  return string.replace(/(?:\/+(\?))/, "$1").replace(/\/+$/, "");
}

export function generateLangStaticPaths() {
  return localeCodes.map((l) => ({ params: { lang: l } }));
}
