import { defaultLang, ui } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(
    key: keyof (typeof ui)[typeof defaultLang] | (string & {})
  ) {
    // @ts-ignore
    return ui?.[lang]?.[key] ?? ui?.[defaultLang]?.[key] ?? "";
  };
}

export function useTranslatedPaths(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const [, pathLang, ...restPath] = path.split("/");

    if (Object.keys(ui).includes(pathLang)) {
      return `/${l}/${restPath.join("/")}`;
    }

    return `/${l}${path}`;
  };
}
