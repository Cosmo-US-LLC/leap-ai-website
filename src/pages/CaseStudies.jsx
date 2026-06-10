import { useTranslation } from "react-i18next";
import CaseStudiesSection from "../components/PageComponent/NewHome/CaseStudiesSection.jsx";
import { usePageMetaI18n } from "../hooks/usePageMetaI18n.js";

export default function CaseStudies() {
  const { t } = useTranslation("caseStudies");
  usePageMetaI18n("caseStudies");

  return (
    <CaseStudiesSection
      subtitle={t("page.subtitle")}
      headingMuted={t("page.headingMuted")}
      showCtaButton={false}
    />
  );
}
