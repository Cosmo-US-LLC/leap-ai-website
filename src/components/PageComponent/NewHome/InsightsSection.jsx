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

export default function InsightsSection() {
  return (
    <section id="insights" className="bg-white px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 px-0 md:px-10">
          <h2 className="nh-h2 capitalize">
            <span className="nh-h2-bold">Latest </span>
            <span className="nh-h2-muted">insights.</span>
          </h2>
          <PrimaryCtaButton to="#insights" variant="soft">
            All insights
          </PrimaryCtaButton>
        </div>

        <div className="grid gap-6 px-0 md:grid-cols-2 md:px-10">
          {ARTICLES.map((article) => (
            <article
              key={article.title}
              className="rounded-2xl border border-[#e7e7e7] bg-white p-8 transition hover:shadow-md"
            >
              <div className="nh-article-meta flex flex-wrap items-center gap-4">
                <span>{article.date}</span>
                <span className="flex items-center gap-1">
                  <span className="inline-block h-3 w-3 rounded-full bg-[#dde4f0]" aria-hidden />
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
          ))}
        </div>
      </div>
    </section>
  );
}
