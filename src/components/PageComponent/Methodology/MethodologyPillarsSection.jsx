import { useState } from "react";
import { FREE_CONSULTATION_URL } from "../../../lib/newHomeLinks.js";

// Figma SVG icons (downloaded from design)
import arrowActiveIcon  from "../../../assets/icons/pillars/arrow-active.svg";
import arrowInactiveIcon from "../../../assets/icons/pillars/arrow-inactive.svg";
import ideaIcon         from "../../../assets/icons/pillars/idea.svg";
import checkIcon        from "../../../assets/icons/pillars/check.svg";
import arrowBlackIcon   from "../../../assets/icons/pillars/arrow-black.svg";
import arrowNavyIcon    from "../../../assets/icons/pillars/arrow-navy.svg";

// Pillar images
import heroVideoImg      from "../../../assets/images/new-home/hero-video.webp";
import pillarsTeamImg    from "../../../assets/images/new-home/pillars-team.webp";
import pillarsDataImg    from "../../../assets/images/new-home/pillars-data.webp";
import pillarsExecImg    from "../../../assets/images/new-home/pillars-execution.webp";
import pillarsWorkImg    from "../../../assets/images/new-home/pillars-workforce.webp";
import partnerCtaImg     from "../../../assets/images/new-home/partner-cta-photo.webp";
import aboutHeroImg      from "../../../assets/images/about/hero-image.webp";

const PILLARS = [
  {
    id: "01", category: "Innovation",
    title: "Build a Guided Innovation Engine",
    description: "Create a structured environment where every employee can safely experiment with AI and surface real-world use cases. The result: a continuous pipeline of practical innovations from the people who know your operations best.",
    bullets: ["Sandbox environments with safety guardrails", "Monthly idea pipelines from every department", "Lightweight evaluation rubric for new use cases"],
    stat: { value: "3×", label: "More qualified use cases per quarter" },
    image: heroVideoImg,
  },
  {
    id: "02", category: "People",
    title: "Put People at the Center of Transformation",
    description: "AI transformation fails when people are left behind. Build the capabilities, confidence, and culture your workforce needs to become AI-ready — from frontline employees to the C-suite.",
    bullets: ["Role-specific AI upskilling programs", "Change management playbooks for every team", "AI champions embedded across departments"],
    stat: { value: "4×", label: "Higher adoption when teams are enabled first" },
    image: pillarsTeamImg,
  },
  {
    id: "03", category: "Data",
    title: "Centralize Your Data & Define Actionable KPIs",
    description: "AI is only as powerful as the data behind it. Consolidate your data sources into a trusted, accessible foundation — then define the metrics that will actually tell you if your AI investments are working.",
    bullets: ["Unified data architecture across business units", "KPI frameworks tied to strategic outcomes", "Data quality protocols for AI readiness"],
    stat: { value: "60%", label: "Reduction in decision latency with clean data" },
    image: pillarsDataImg,
  },
  {
    id: "04", category: "Strategy",
    title: "Create Strategic Urgency Without Panic",
    description: "The risk isn't moving too fast — it's moving without direction. Build an AI roadmap that creates competitive urgency while keeping your operations stable, your team aligned, and your investments focused.",
    bullets: ["Prioritized AI use case roadmap", "Risk-adjusted implementation sequencing", "Executive alignment workshops"],
    stat: { value: "2.5×", label: "Faster time-to-value with a structured roadmap" },
    image: pillarsExecImg,
  },
  {
    id: "05", category: "CX",
    title: "Make Customer Experience Your North Star",
    description: "The companies winning with AI aren't just cutting costs — they're creating experiences their customers can't get anywhere else. Every AI initiative should trace back to a measurable improvement in how customers feel about you.",
    bullets: ["Customer journey AI opportunity mapping", "Personalization engines at scale", "Real-time feedback loops from customer data"],
    stat: { value: "35%", label: "Average increase in customer satisfaction scores" },
    image: pillarsWorkImg,
  },
  {
    id: "06", category: "Compounding",
    title: "Engineer Recursive Self-Improvement",
    description: "The most powerful AI programs don't just run — they learn. Build feedback loops into every initiative so your systems get smarter, your processes get leaner, and your competitive advantage compounds over time.",
    bullets: ["Automated performance monitoring for AI models", "Continuous improvement sprints every 90 days", "Knowledge management systems that capture learnings"],
    stat: { value: "10×", label: "Value multiplier from compounding AI improvements" },
    image: partnerCtaImg,
  },
  {
    id: "07", category: "Governance",
    title: "Establish AI Governance & Build Trust",
    description: "Speed without governance is a liability. Build the policies, oversight structures, and ethical frameworks that let you move fast with AI while maintaining the trust of your employees, your customers, and your regulators.",
    bullets: ["AI ethics and accountability frameworks", "Bias detection and mitigation protocols", "Regulatory compliance checkpoints built in"],
    stat: { value: "100%", label: "Audit-ready AI processes from day one" },
    image: aboutHeroImg,
  },
];

export default function MethodologyPillarsSection() {
  const [active, setActive] = useState(0);
  const pillar = PILLARS[active];

  const handleNext = () => setActive((prev) => (prev + 1) % PILLARS.length);

  return (
    <section className="bg-[#e7edf6] px-5 py-12 lg:p-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 lg:gap-14 ">

        {/* ── Header ── */}
        <div className="flex w-full flex-col items-center gap-4 text-center lg:max-w-[800px] lg:gap-5">
          <h2 className="w-full text-[40px] font-normal leading-[46px] text-[#201463] lg:text-[56px] lg:leading-[58px]">
            <span className="font-bold">The 7 </span>
            <span className="font-normal text-[rgba(32,20,99,0.7)]">Strategic Pillars</span>
          </h2>
          <p className="text-base leading-[26px] text-[#4e546c]">
            If the problem is organizational readiness, the solution isn&apos;t
            more tools , it&apos;s a complete framework. These seven pillars
            address every dimension of AI transformation: your people, your
            data, your strategy, and the governance to tie it all together.
          </p>
        </div>

        {/* ── Main Card ── */}
        <div className="w-full overflow-hidden rounded-[20px] border border-[#cad1dd] bg-[#fafcfe] p-px">
          <div className="flex w-full flex-col lg:flex-row">

            {/* Left: Tab list */}
            <nav
              className="flex flex-col bg-[rgba(242,246,251,0.6)] p-3 lg:w-[360px] lg:self-stretch"
              aria-label="Strategic pillars"
            >
              {/* justify-between distributes tabs to fill the full sidebar height */}
              <div className="flex flex-1 flex-col sm:justify-between gap-y-2 lg:h-full">
                {PILLARS.map((p, i) => {
                  const isActive = active === i;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-current={isActive ? "true" : undefined}
                      className={[
                        "flex w-full shrink-0 cursor-pointer items-center gap-6 rounded-xl px-4 py-3 text-left transition-colors",
                        isActive ? "bg-[#12174b]" : "bg-white hover:bg-[#f0f4fa]",
                      ].join(" ")}
                    >
                      {/* Number badge */}
                      <span className={[
                        "flex h-9 w-9 shrink-0 items-center justify-center text-xs font-bold tracking-[0.6px]",
                        isActive
                          ? "rounded-[4px] bg-[#18a3e6] text-[#f2f6fb]"
                          : "rounded-lg bg-[#f5f8fc] text-[#38393f]",
                      ].join(" ")}>
                        {p.id}
                      </span>

                      {/* Category + title */}
                      <span className="flex min-w-0 flex-1 flex-col gap-1">
                        <span className={[
                          "block text-[11px] font-medium uppercase tracking-wide opacity-70",
                          isActive ? "text-[#f2f6fb]" : "text-[rgba(32,20,99,0.8)]",
                        ].join(" ")}>
                          {p.category}
                        </span>
                        <span className={[
                          "block text-[13px] font-bold leading-[18px]",
                          isActive ? "text-[#f2f6fb]" : "text-[#404040]",
                        ].join(" ")}>
                          {p.title}
                        </span>
                      </span>

                      {/* Arrow icon from Figma */}
                      <img
                        src={isActive ? arrowActiveIcon : arrowInactiveIcon}
                        alt=""
                        aria-hidden
                        className="h-5 w-5 shrink-0"
                      />
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Right: Content panel */}
            <div className="flex min-w-0 flex-1 flex-col p-5 lg:p-12">
              <div className="flex flex-col gap-6 w-full">

                {/* Progress row */}
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#12174b]">
                    <img src={ideaIcon} alt="" aria-hidden className="h-[22px] w-[22px]" />
                  </span>
                  <span className="text-sm font-semibold text-[#4e546c]">{active + 1} of 7</span>
                </div>

                {/* Body — stacked mobile, side-by-side desktop */}
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">

                  {/* Text column */}
                  <div className="flex flex-1 min-w-0 flex-col gap-3">
                    <h3 className="text-xl font-bold leading-7 text-[#201463] lg:text-2xl lg:leading-8 h-[56px]"
                        style={{ fontFamily: "var(--font-nunito)" }}>
                      {pillar.title}
                    </h3>

                    <div className="flex flex-col gap-4">
                      <p className="text-base leading-6 text-black">{pillar.description}</p>

                      {/* Bullet list */}
                      <ul className="flex flex-col gap-3">
                        {pillar.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <img
                              src={checkIcon}
                              alt=""
                              aria-hidden
                              className="mt-0.5 h-5 w-5 shrink-0"
                            />
                            <span className="text-sm leading-[22px] text-[#4e546c]">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stat box */}
                    <div className="flex flex-col items-center gap-4 rounded-2xl bg-[#12174b] p-6 text-center text-white">
                      <p className="text-5xl font-extrabold uppercase tracking-[-1.2px] leading-[48px]"
                         style={{ fontFamily: "var(--font-nunito)" }}>
                        {pillar.stat.value}
                      </p>
                      <p className="text-base font-semibold leading-6">{pillar.stat.label}</p>
                    </div>
                  </div>

                  {/* Image column */}
                  <div className="flex flex-1 min-w-0">
                    <img
                      key={pillar.id}
                      src={pillar.image}
                      alt={pillar.title}
                      className="h-[340px] w-full rounded-3xl object-cover lg:h-[393px]"
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col gap-4 border-t border-[#cad1dd] pt-6 lg:flex-row lg:items-center lg:justify-between">
                  <a
                    href={FREE_CONSULTATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-black no-underline hover:underline"
                  >
                    Talk to an expert about this pillar
                    <img src={arrowBlackIcon} alt="" aria-hidden className="h-4 w-4 shrink-0" />
                  </a>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex cursor-pointer items-center gap-2 self-start rounded-full border border-[#cad1dd] bg-transparent px-6 py-2 text-sm font-semibold text-[#201463] transition-colors hover:bg-[#f0f4fa]"
                  >
                    {active === PILLARS.length - 1 ? "Back to first" : "Next pillar"}
                    <img src={arrowNavyIcon} alt="" aria-hidden className="h-3 w-3 shrink-0" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
