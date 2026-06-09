import { Link } from "react-router-dom";
import { CASE_STUDIES } from "../../../lib/caseStudyContent.js";
import { ArrowRightIcon } from "./icons/ArrowRightIcon.jsx";
import { PrimaryCtaButton } from "./PrimaryCtaButton.jsx";

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
    <div className="flex h-full flex-col">
      <div className="relative h-[263px] shrink-0">
        <img
          src={study.image}
          alt=""
          className="h-full w-full rounded-t-2xl object-cover"
        />
        <span className="nh-tag-pill absolute left-4 top-4 rounded-full bg-[rgba(0,0,0,0.1)] px-3 py-2 text-white backdrop-blur-[30px]">
          {study.tag}
        </span>
      </div>
      <div className="case-study-card-body px-5 py-6 lg:p-6">
        <div className="flex shrink-0 flex-col gap-1">
          <CaseStudyMetric metric={study.metric} metricParts={study.metricParts} />
          <p className="nh-metric-caption capitalize">{study.metricLabel}</p>
        </div>

        <div className="case-study-card-copy">
          <h3 className="case-study-card-title nh-card-title">{study.title}</h3>
          <p className="case-study-card-desc nh-body-case">{study.description}</p>
        </div>

        <span className="case-study-card-link nh-link-case inline-flex w-fit shrink-0 self-start items-center gap-1.5 border-b-2 border-[#18a3e6] pb-[3px]">
          Read case study
          <ArrowRightIcon className="h-4 w-4 -rotate-45" />
        </span>
      </div>
    </div>
  );
}

const caseStudyCardLinkClass =
  "flex h-full flex-col overflow-hidden rounded-2xl bg-white text-inherit no-underline transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18a3e6]";

function MobileCaseStudyCard({ study }) {
  return (
    <div className="case-study-mobile-wrap shrink-0 snap-start self-stretch">
      <Link
        to={`/case-studies/${study.slug}`}
        aria-label={`Read case study: ${study.title}`}
        className={`case-study-mobile-card ${caseStudyCardLinkClass}`}
      >
        <CaseStudyCardInner study={study} />
      </Link>
    </div>
  );
}

function DesktopCaseStudyCard({ study }) {
  return (
    <Link
      to={`/case-studies/${study.slug}`}
      aria-label={`Read case study: ${study.title}`}
      className={`case-study-desktop-card min-w-0 flex-1 ${caseStudyCardLinkClass} shadow-[0_0_48px_4px_rgba(43,43,118,0.1)]`}
    >
      <CaseStudyCardInner study={study} />
    </Link>
  );
}

export default function CaseStudiesSection({
  subtitle,
  headingPrefix = "Recent ",
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
      <div
        className={`mx-auto max-w-[1280px] max-lg:flex max-lg:flex-col max-lg:gap-8 ${
          isCentered ? "max-lg:items-center" : "max-lg:items-stretch"
        }`}
      >
        <div
          className={`w-full lg:hidden ${isCentered ? "text-center" : "text-left"}`}
        >
          <h2 className="nh-h2 capitalize">
            <span className="nh-h2-bold">{headingPrefix}</span>
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
              <span className="nh-h2-bold">{headingPrefix}</span>
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

        <div
          className={`w-full lg:max-w-none ${isCentered ? "max-lg:max-w-[350px]" : ""}`}
        >
          <div className="case-studies-mobile-track flex items-stretch gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory [scroll-snap-type:x_mandatory] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:hidden">
            {CASE_STUDIES.map((study) => (
              <MobileCaseStudyCard key={study.slug} study={study} />
            ))}
          </div>

          <div className="case-studies-desktop-row hidden lg:flex">
            {CASE_STUDIES.map((study) => (
              <DesktopCaseStudyCard key={study.slug} study={study} />
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
