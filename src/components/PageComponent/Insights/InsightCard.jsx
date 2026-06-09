import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../NewHome/icons/ArrowRightIcon.jsx";
import { ClockIcon } from "../NewHome/icons/ClockIcon.jsx";

function ArticleMeta({ article }) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm leading-[22px] text-[#4e546c]">
      <span>{article.date}</span>
      <span className="flex items-center gap-1">
        <ClockIcon className="h-4 w-4 shrink-0" />
        {article.readTime}
      </span>
    </div>
  );
}

const insightCardBaseClass =
  "group flex h-full w-full cursor-pointer flex-col rounded-2xl bg-[#fafcfe] p-[25px] text-inherit no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cad1dd] hover:shadow-[0_12px_40px_rgba(32,20,99,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18a3e6] active:translate-y-0 active:shadow-[0_6px_24px_rgba(32,20,99,0.08)]";

const insightCardVariantClass = {
  default: "border border-[#e7e7e7]",
  detail: "border border-[#e7e7e7] shadow-[0_0_24px_rgba(32,20,99,0.04)]",
};

export default function InsightCard({ article, className = "", variant = "default" }) {
  const excerpt = article.excerpt;

  return (
    <Link
      to={`/insights/${article.slug}`}
      aria-label={`Read article: ${article.title}`}
      className={`${insightCardBaseClass} ${insightCardVariantClass[variant] ?? insightCardVariantClass.default} ${className}`}
    >
      <ArticleMeta article={article} />
      <h3 className="pt-5 text-2xl font-bold leading-8 text-[#201463] transition-colors duration-300 group-hover:text-[#18a3e6]">
        {article.title}
      </h3>
      <div className="flex-1 pt-4 text-base leading-6 text-[#4e546c]">
        {Array.isArray(excerpt) ? (
          excerpt.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
        ) : (
          <p>{excerpt}</p>
        )}
      </div>
      <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#cad1dd] pt-[17px] transition-colors duration-300 group-hover:border-[#b8c4d6]">
        <span className="text-sm font-bold leading-5 text-[#201463]">{article.author}</span>
        <span className="inline-flex shrink-0 items-center gap-1.5 border-b-2 border-[#18a3e6] pb-[3px] text-sm font-bold capitalize leading-5 text-[#18a3e6] transition-colors duration-300 group-hover:border-[#201463] group-hover:text-[#201463]">
          Read Article
          <ArrowRightIcon className="h-4 w-4 -rotate-45 text-current transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
