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
    <section className="relative overflow-hidden bg-[#12174b] max-w-[1280px] rounded-3xl mx-auto px-4 py-16 md:px-8 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-[1168px] gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="nh-architect-heading">
            <span className="nh-architect-heading-bold">
              We don&apos;t just implement AI.{" "}
            </span>
            <span className="nh-architect-heading-muted">
              We architect intelligence.
            </span>
          </h2>
          <p className="nh-body-dark mt-6">
            90% of AI transformations fail not because of bad technology, but
            because they treat AI like another software deployment instead of an
            organizational evolution.
          </p>
          <PrimaryCtaButton className="mt-8">Schedule Your Free Consultation</PrimaryCtaButton>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] p-6 backdrop-blur-sm"
            >
              <p className="nh-stat-value">{stat.value}</p>
              <p className="nh-stat-label mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
