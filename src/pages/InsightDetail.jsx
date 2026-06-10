import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LocaleLink } from "../components/layouts/LocaleLink.jsx";
import InsightDetailPage from "../components/PageComponent/Insights/InsightDetailPage.jsx";
import { useContentLocale } from "../hooks/useContentLocale.js";
import { getInsightBySlug } from "../lib/insightsArticles.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function InsightDetail() {
  const { slug } = useParams();
  const locale = useContentLocale();
  const { t } = useTranslation("insights");
  const article = getInsightBySlug(slug, locale);

  usePageMeta(
    article
      ? {
          title: `${article.title} | Leap 41`,
          description:
            article.subtitle ??
            (Array.isArray(article.excerpt) ? article.excerpt[0] : article.excerpt),
        }
      : {
          title: `${t("detail.notFoundTitle")} | Leap 41`,
          description: t("detail.notFoundBody"),
        },
  );

  if (!article) {
    return (
      <section className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-5 py-24 text-center">
        <h1 className="text-3xl font-bold text-[#201463]">{t("detail.notFoundTitle")}</h1>
        <p className="text-[#4e546c]">{t("detail.notFoundBody")}</p>
        <LocaleLink
          to="/insights"
          className="text-[#18a3e6] underline underline-offset-4"
        >
          {t("detail.viewAll")}
        </LocaleLink>
      </section>
    );
  }

  return <InsightDetailPage article={article} />;
}
