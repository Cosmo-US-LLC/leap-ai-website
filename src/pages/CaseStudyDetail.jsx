import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LocaleLink } from "../components/layouts/LocaleLink.jsx";
import CaseStudyDetailPage from "../components/PageComponent/CaseStudies/CaseStudyDetailPage.jsx";
import { useContentLocale } from "../hooks/useContentLocale.js";
import { getCaseStudyBySlug } from "../lib/caseStudyContent.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const locale = useContentLocale();
  const { t } = useTranslation("caseStudies");
  const study = getCaseStudyBySlug(slug, locale);

  usePageMeta(
    study
      ? {
          title: `${study.title} | Leap 41`,
          description: study.description,
        }
      : {
          title: `${t("detail.notFoundTitle")} | Leap 41`,
          description: t("detail.notFoundBody"),
        },
  );

  if (!study) {
    return (
      <section className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-5 py-24 text-center">
        <h1 className="text-3xl font-bold text-[#201463]">{t("detail.notFoundTitle")}</h1>
        <p className="text-[#4e546c]">{t("detail.notFoundBody")}</p>
        <LocaleLink
          to="/case-studies"
          className="text-[#18a3e6] underline underline-offset-4"
        >
          {t("detail.viewAll")}
        </LocaleLink>
      </section>
    );
  }

  return <CaseStudyDetailPage study={study} />;
}
