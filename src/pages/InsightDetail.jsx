import { Link, useParams } from "react-router-dom";
import InsightDetailPage from "../components/PageComponent/Insights/InsightDetailPage.jsx";
import { getInsightBySlug } from "../lib/insightsArticles.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function InsightDetail() {
  const { slug } = useParams();
  const article = getInsightBySlug(slug);

  usePageMeta(
    article
      ? {
          title: `${article.title} | Leap 41`,
          description:
            article.subtitle ??
            (Array.isArray(article.excerpt) ? article.excerpt[0] : article.excerpt),
        }
      : {
          title: "Insight Not Found | Leap 41",
          description: "The requested insight article could not be found.",
        },
  );

  if (!article) {
    return (
      <section className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-5 py-24 text-center">
        <h1 className="text-3xl font-bold text-[#201463]">Article not found</h1>
        <p className="text-[#4e546c]">The insight you are looking for does not exist.</p>
        <Link
          to="/insights"
          className="text-[#18a3e6] underline underline-offset-4"
        >
          View all insights
        </Link>
      </section>
    );
  }

  return <InsightDetailPage article={article} />;
}
