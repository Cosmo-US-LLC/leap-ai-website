import { useTranslation } from "react-i18next";
import { usePageMeta } from "./usePageMeta.js";

export function usePageMetaI18n(key) {
  const { t } = useTranslation("meta");

  usePageMeta({
    title: t(`${key}.title`),
    description: t(`${key}.description`),
  });
}
