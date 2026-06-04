import { PrimaryCtaButton } from "./PrimaryCtaButton.jsx";

const STATS = [
  { value: "25+", label: "Years of combined C-suite experience" },
  {
    value: "100%",
    label: "Strategy to execution, we build and ship, not just advise",
  },
  { value: "90%", label: "Of clients move to full implementation" },
  { value: "4×", label: "Average ROI vs. industry benchmark" },
];

export default function ArchitectIntelligenceSection() {
  return (
    <section className="px-5 py-12 max-lg:px-5 max-lg:py-12 lg:px-4 lg:py-0">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-2xl bg-[#12174b] px-6 py-12 max-lg:rounded-2xl max-lg:px-6 max-lg:py-12 lg:rounded-3xl lg:px-8 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-[1168px] gap-8 max-lg:gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="text-center max-lg:items-center lg:text-left">
            <h2 className="nh-architect-heading">
              <span className="nh-architect-heading-bold">
                We don&apos;t just implement AI.{" "}
              </span>
              <span className="nh-architect-heading-muted">
                We architect intelligence.
              </span>
            </h2>
            <p className="nh-body-dark mt-4 max-lg:mt-4 lg:mt-6">
              90% of AI transformations fail not because of bad technology, but
              because they treat AI like another software deployment instead of an
              organizational evolution.
            </p>
            <PrimaryCtaButton className="home-section-primary-cta mx-auto mt-6 max-lg:mt-6 lg:mx-0 lg:mt-8">
              Schedule Your Free Consultation
            </PrimaryCtaButton>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] p-4 backdrop-blur-sm max-lg:p-4 lg:p-6"
              >
                <p className="nh-stat-value">{stat.value}</p>
                <p className="nh-stat-label mt-2 max-lg:mt-2 lg:mt-3">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
