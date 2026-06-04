import { ArrowRightIcon } from "./icons/ArrowRightIcon.jsx";
import { PrimaryCtaButton } from "./PrimaryCtaButton.jsx";

const ARTICLES = [
  {
    date: "Apr 08, 2026",
    readTime: "12 min read",
    title:
      "The Hidden Cost of AI Pilots: Why Most Enterprises Never Scale Past the Demo",
    excerpt:
      "Most organizations run impressive AI demos that never reach production. The gap isn't technology—it's operating model, data readiness, and executive alignment.",
    author: "Gregory van Duyse",
  },
  {
    date: "Apr 07, 2026",
    readTime: "8 min read",
    title:
      "RSI in Business: Why the Companies Winning at AI Aren't Ahead on Technology",
    excerpt:
      "The AI race is really a data race. Companies winning aren't ahead on technology, they're ahead on data and feedback loops.",
    author: "Gregory van Duyse",
  },
];

const MOBILE_CAROUSEL_TRACK =
  "insights-mobile-track flex w-full gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [scroll-snap-type:x_mandatory] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";

/** Figma 1987:95 — mobile insight card (320px so next card peeks in 350px track) */
function MobileInsightCard({ article }) {
  return (
    <article className="w-[320px] shrink-0 snap-start rounded-2xl border border-[#cad1dd] bg-[#fafcfe] px-[21px] py-[25px]">
      <div className="nh-article-meta-mobile flex items-center gap-4">
        <span>{article.date}</span>
        <span className="flex items-center gap-1">
          <span
            className="inline-block size-3 rounded-full bg-[#dde4f0]"
            aria-hidden
          />
          {article.readTime}
        </span>
      </div>
      <h3 className="nh-article-title-mobile pt-5">{article.title}</h3>
      <p className="nh-article-body pt-4 line-clamp-3">{article.excerpt}</p>
      <div className="flex flex-col gap-6 border-t border-[#cad1dd] pt-4 mt-8">
        <span className="nh-article-author-mobile">{article.author}</span>
        <a
          href="#"
          className="nh-article-link inline-flex w-fit items-center gap-1.5 border-b-2 border-[#18a3e6] pb-[3px]"
        >
          Read Article
          <ArrowRightIcon className="h-4 w-4 -rotate-45 text-[#18a3e6]" />
        </a>
      </div>
    </article>
  );
}

function DesktopInsightCard({ article }) {
  return (
    <article className="rounded-2xl border border-[#e7e7e7] bg-white p-8 transition hover:shadow-md">
      <div className="nh-article-meta flex flex-wrap items-center gap-4">
        <span>{article.date}</span>
        <span className="flex items-center gap-1">
          <span
            className="inline-block h-3 w-3 rounded-full bg-[#dde4f0]"
            aria-hidden
          />
          {article.readTime}
        </span>
      </div>
      <h3 className="nh-article-title mt-4">{article.title}</h3>
      <p className="nh-article-body mt-4">{article.excerpt}</p>
      <div className="mt-6 flex items-center justify-between border-t border-[#f0f0f0] pt-6">
        <span className="nh-article-author">{article.author}</span>
        <a href="#" className="nh-article-link inline-flex items-center gap-1">
          Read Article
          <ArrowRightIcon className="h-4 w-4 -rotate-45 text-[#18a3e6]" />
        </a>
      </div>
    </article>
  );
}

/** Figma 1987:92 — mobile-only layout */
function InsightsMobile() {
  return (
    <div className="flex w-full flex-col gap-8 lg:hidden">
      <h2 className="nh-insights-title w-full text-left capitalize">
        <span className="nh-h2-bold">Latest</span>{" "}
        <span className="nh-h2-muted">insights.</span>
      </h2>

      <div className="w-full max-w-[350px] self-start">
        <div className={MOBILE_CAROUSEL_TRACK}>
          {ARTICLES.map((article) => (
            <MobileInsightCard key={article.title} article={article} />
          ))}
        </div>
      </div>

      <PrimaryCtaButton
        to="#insights"
        variant="soft"
        capitalize
        className="home-insights-cta w-full"
      >
        All insights
      </PrimaryCtaButton>
    </div>
  );
}

export default function InsightsSection() {
  return (
    <section
      id="insights"
      className="bg-[#fafcfe] px-5 py-12 lg:bg-white lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <InsightsMobile />

        <div className="hidden lg:block">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4 px-10">
            <h2 className="nh-h2 capitalize">
              <span className="nh-h2-bold">Latest </span>
              <span className="nh-h2-muted">insights.</span>
            </h2>
            <PrimaryCtaButton to="#insights" variant="soft">
              All insights
            </PrimaryCtaButton>
          </div>

          <div className="grid grid-cols-2 gap-6 px-10">
            {ARTICLES.map((article) => (
              <DesktopInsightCard key={article.title} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
