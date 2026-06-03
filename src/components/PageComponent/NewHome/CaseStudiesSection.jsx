import caseStudyAirport from "../../../assets/images/new-home/case-study-airport.webp";
import caseStudyFinance from "../../../assets/images/new-home/case-study-finance.webp";
import caseStudyInsurance from "../../../assets/images/new-home/case-study-insurance.webp";
import { ArrowRightIcon } from "./icons/ArrowRightIcon.jsx";
import { PrimaryCtaButton } from "./PrimaryCtaButton.jsx";

const CASE_STUDIES = [
  {
    tag: "Aviation / Airport Operations",
    image: caseStudyAirport,
    metric: "47%",
    metricLabel: "cost reduction",
    title: "How a Regional Airport Cut Ground Crew Costs by 47%",
    description:
      "They spent weeks trying to solve it with ChatGPT and spreadsheets. The real answer was a constraint optimization model, built in 4 days, saving $800K per quarter.",
  },
  {
    tag: "Financial Services",
    image: caseStudyFinance,
    metric: "3.2×",
    metricLabel: "advisor confidence",
    title: "AI-Powered Roleplay That Actually Improves Sales Performance",
    description:
      "How a financial services firm replaced outdated training with interactive AI roleplay, and saw a measurable lift in advisor confidence and close rates within 60 days.",
  },
  {
    tag: "Insurance",
    image: caseStudyInsurance,
    metric: "100%",
    metricLabel: "call coverage",
    title:
      "How a Canadian Insurance Agency Gained Control of Every Sales Conversation in 30 Days",
    description:
      "They were reviewing just 5% of calls. Within 30 days, they had full oversight of every meaningful sales conversation, without adding a single headcount.",
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="bg-[#fafcfe] px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
          <h2 className="nh-h2 capitalize">
            <span className="nh-h2-bold">Recent </span>
            <span className="nh-h2-muted">results.</span>
          </h2>
          <PrimaryCtaButton to="#case-studies" variant="soft">
            All case studies
          </PrimaryCtaButton>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.title}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_0_48px_4px_rgba(43,43,118,0.1)]"
            >
              <div className="relative h-[263px]">
                <img
                  src={study.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <span className="nh-tag-pill absolute left-4 top-4 rounded-full bg-[rgba(0,0,0,0.1)] px-3 py-2 text-white backdrop-blur-[30px]">
                  {study.tag}
                </span>
              </div>
              <div className="p-6">
                <p className="nh-metric-case">{study.metric}</p>
                <p className="nh-metric-caption mt-1">{study.metricLabel}</p>
                <h3 className="nh-card-title mt-4">{study.title}</h3>
                <p className="nh-body-case mt-3 line-clamp-3">
                  {study.description}
                </p>
                <a
                  href="#"
                  className="nh-link-case mt-6 inline-flex items-center gap-1.5 border-b-2 border-[#18a3e6] pb-1"
                >
                  Read case study
                  <ArrowRightIcon className="h-4 w-4 -rotate-45" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
