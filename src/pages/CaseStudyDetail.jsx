import { Link, useParams } from "react-router-dom";
import CaseStudyDetailPage from "../components/PageComponent/CaseStudies/CaseStudyDetailPage.jsx";
import { getCaseStudyBySlug } from "../lib/caseStudyContent.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);

  usePageMeta(
    study
      ? {
          title: `${study.title} | Leap 41`,
          description: study.description,
        }
      : {
          title: "Case Study Not Found | Leap 41",
          description: "The requested case study could not be found.",
        },
  );

  if (!study) {
    return (
      <section className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-5 py-24 text-center">
        <h1 className="text-3xl font-bold text-[#201463]">Case study not found</h1>
        <p className="text-[#4e546c]">The case study you are looking for does not exist.</p>
        <Link
          to="/case-studies"
          className="text-[#18a3e6] underline underline-offset-4"
        >
          View all case studies
        </Link>
      </section>
    );
  }

  return <CaseStudyDetailPage study={study} />;
}
