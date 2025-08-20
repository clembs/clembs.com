import en from "./langs/en";
import fr from "./langs/fr";

export const ui = {
  en,
  fr,
} as const;

export const locales = {
  en: "English",
  fr: "Français",
} as const;

export type Locale = keyof typeof locales;

export const localeCodes = Object.keys(locales);

export const defaultLocale: Locale = "en";

export * from "./utils";
