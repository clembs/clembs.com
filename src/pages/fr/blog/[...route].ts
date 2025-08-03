import { useTranslatedPaths } from "@i18n/utils";
import type { APIRoute } from "astro";

export const GET: APIRoute = (context) => {
  const translatePaths = useTranslatedPaths("en");

  return context.redirect(translatePaths(context.url.pathname));
};
