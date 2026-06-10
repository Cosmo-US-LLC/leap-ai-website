import { useTranslation } from "react-i18next";
import { useContentLocale } from "../../../hooks/useContentLocale.js";
import { getInsights } from "../../../lib/insightsArticles.js";
import InsightCard from "./InsightCard.jsx";

export default function InsightsPageSection() {
  const { t } = useTranslation("insights");
  const locale = useContentLocale();
  const articles = getInsights(locale);

  return (
    <section className="bg-white px-5 pb-12 pt-[124px] lg:px-20 lg:pb-20 lg:pt-[162px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 lg:gap-12">
        <div className="flex w-full max-w-[800px] flex-col gap-5 text-center">
          <h1 className="text-[40px] capitalize leading-[46px] text-[#201463] lg:text-[56px] lg:leading-[58px]">
            <span className="font-bold">{t("page.headingBold")}</span>
            <span className="font-normal text-[rgba(32,20,99,0.7)]">{t("page.headingMuted")}</span>
          </h1>
          <p className="text-base leading-[26px] text-[#4e546c]">{t("page.intro")}</p>
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-4">
          {articles.map((article) => (
            <InsightCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
