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
    metricParts: ["3.2", "×"],
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

function CaseStudyMetric({ metric, metricParts }) {
  if (metricParts) {
    return (
      <p className="nh-metric-case uppercase">
        {metricParts.map((part, i) => (
          <span key={i}>{part}</span>
        ))}
      </p>
    );
  }
  return <p className="nh-metric-case uppercase">{metric}</p>;
}

function CaseStudyCardInner({ study }) {
  return (
    <>
      <div className="relative h-[263px]">
        <img
          src={study.image}
          alt=""
          className="h-full w-full rounded-t-2xl object-cover"
        />
        <span className="nh-tag-pill absolute left-4 top-4 rounded-full bg-[rgba(0,0,0,0.1)] px-3 py-2 text-white backdrop-blur-[30px]">
          {study.tag}
        </span>
      </div>
      <div className="flex flex-col px-5 py-6 max-lg:gap-8 lg:p-6">
        <div className="flex flex-col max-lg:gap-4">
          <div className="flex flex-col max-lg:gap-1">
            <CaseStudyMetric metric={study.metric} metricParts={study.metricParts} />
            <p className="nh-metric-caption capitalize">{study.metricLabel}</p>
          </div>
          <div className="flex flex-col max-lg:gap-3">
            <h3 className="nh-card-title lg:mt-4">{study.title}</h3>
            <p className="nh-body-case line-clamp-3 lg:mt-3">{study.description}</p>
          </div>
        </div>
        <a
          href="#"
          className="nh-link-case inline-flex w-fit self-start items-center gap-1.5 border-b-2 border-[#18a3e6] pb-[3px] lg:mt-6"
        >
          Read case study
          <ArrowRightIcon className="h-4 w-4 -rotate-45" />
        </a>
      </div>
    </>
  );
}

function MobileCaseStudyCard({ study }) {
  return (
    <div className="case-study-mobile-wrap shrink-0 snap-start">
      <article className="case-study-mobile-card w-[320px] overflow-hidden rounded-2xl bg-white">
        <CaseStudyCardInner study={study} />
      </article>
    </div>
  );
}

function DesktopCaseStudyCard({ study }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-[0_0_48px_4px_rgba(43,43,118,0.1)]">
      <CaseStudyCardInner study={study} />
    </article>
  );
}

export default function CaseStudiesSection({
  subtitle,
  headingMuted = "results.",
  showCtaButton,
}) {
  const shouldShowCta = showCtaButton ?? !subtitle;
  const isCentered = !!subtitle;

  return (
    <section
      id="case-studies"
      className={`scroll-mt-28 px-5 py-12 lg:px-8 lg:py-20 ${
        isCentered ? "mt-20 bg-white max-lg:mt-0" : "bg-[#fafcfe]"
      }`}
    >
      <div className="mx-auto max-w-[1280px] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-8">
        <div
          className={`w-full lg:hidden ${isCentered ? "text-center" : "text-left"}`}
        >
          <h2 className="nh-h2 capitalize">
            <span className="nh-h2-bold">Recent </span>
            <span className="nh-h2-muted">{headingMuted}</span>
          </h2>
          {subtitle ? (
            <p className="mx-auto mt-3 max-w-xl text-base text-[#4e546c]">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div
          className={`mb-12 hidden w-full lg:flex ${
            isCentered
              ? "flex-col items-center gap-3 text-center"
              : "items-center justify-between gap-4"
          }`}
        >
          <div
            className={
              isCentered ? "flex flex-col items-center gap-3" : "min-w-0"
            }
          >
            <h2 className="nh-h2 capitalize">
              <span className="nh-h2-bold">Recent </span>
              <span className="nh-h2-muted">{headingMuted}</span>
            </h2>
            {subtitle ? (
              <p className="max-w-xl text-base text-[#4e546c]">{subtitle}</p>
            ) : null}
          </div>
          {shouldShowCta ? (
            <PrimaryCtaButton
              to="/case-studies"
              variant="soft"
              className="shrink-0"
            >
              All case studies
            </PrimaryCtaButton>
          ) : null}
        </div>

        <div className="w-full max-lg:max-w-[350px] lg:max-w-none">
          <div className="case-studies-mobile-track flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [scroll-snap-type:x_mandatory] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:hidden">
            {CASE_STUDIES.map((study) => (
              <MobileCaseStudyCard key={study.title} study={study} />
            ))}
          </div>

          <div className="hidden grid-cols-3 gap-6 lg:grid">
            {CASE_STUDIES.map((study) => (
              <DesktopCaseStudyCard key={study.title} study={study} />
            ))}
          </div>
        </div>

        {shouldShowCta && (
          <PrimaryCtaButton
            to="/case-studies"
            variant="soft"
            className="home-case-studies-cta w-full shrink-0 lg:hidden"
          >
            All case studies
          </PrimaryCtaButton>
        )}
      </div>
    </section>
  );
}
