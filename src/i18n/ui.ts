import en from "./langs/en";
import fr from "./langs/fr";

export const languages = {
  en: "English",
  fr: "Français",
};

export const defaultLang = "en";

export const ui = {
  en,
  fr,
} as const;
