import { useTranslation } from "react-i18next";

export function useContentLocale() {
  const { i18n } = useTranslation();
  const raw = i18n.resolvedLanguage ?? i18n.language ?? "en";
  const locale = raw.split("-")[0];
  return locale === "fr" || locale === "es" ? locale : "en";
}
