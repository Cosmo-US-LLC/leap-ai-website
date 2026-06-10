import { useTranslation } from "react-i18next";
import { useContentLocale } from "../../../hooks/useContentLocale.js";
import { getInsights } from "../../../lib/insightsArticles.js";
import InsightCard from "../Insights/InsightCard.jsx";
import { PrimaryCtaButton } from "./PrimaryCtaButton.jsx";

const MOBILE_CAROUSEL_TRACK =
  "insights-mobile-track flex w-full gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [scroll-snap-type:x_mandatory] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";

function InsightsMobile({ articles }) {
  const { t } = useTranslation(["home", "insights"]);

  return (
    <div className="flex w-full flex-col gap-8 lg:hidden">
      <h2 className="nh-h2 w-full text-left capitalize">
        <span className="nh-h2-bold">{t("insightsSection.headingBold", { ns: "home" })}</span>{" "}
        <span className="nh-h2-muted">{t("insightsSection.headingMuted", { ns: "home" })}</span>
      </h2>

      <div className="w-full">
        <div className={MOBILE_CAROUSEL_TRACK}>
          {articles.map((article) => (
            <div
              key={article.slug}
              className="insights-mobile-card-wrap shrink-0 snap-start self-stretch"
            >
              <InsightCard
                article={article}
                className="insights-mobile-card h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <PrimaryCtaButton
        to="/insights"
        variant="soft"
        capitalize
        className="home-insights-cta w-full"
      >
        {t("insightsSection.allInsights", { ns: "home" })}
      </PrimaryCtaButton>
    </div>
  );
}

export default function InsightsSection() {
  const locale = useContentLocale();
  const articles = getInsights(locale);
  const { t } = useTranslation("home");

  return (
    <section
      id="insights"
      className="bg-white px-5 py-12 lg:px-20 lg:py-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <InsightsMobile articles={articles} />

        <div className="hidden flex-col gap-12 lg:flex">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="nh-h2 capitalize">
              <span className="nh-h2-bold">{t("insightsSection.headingBold")} </span>
              <span className="nh-h2-muted">{t("insightsSection.headingMuted")}</span>
            </h2>
            <PrimaryCtaButton
              to="/insights"
              variant="soft"
              capitalize
              className="px-6 py-3.5 text-sm font-semibold leading-5"
            >
              {t("insightsSection.allInsights")}
            </PrimaryCtaButton>
          </div>

          <div className="grid grid-cols-3 items-stretch gap-4">
            {articles.map((article) => (
              <InsightCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
