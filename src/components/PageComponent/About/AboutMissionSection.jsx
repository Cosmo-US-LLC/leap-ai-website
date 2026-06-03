const STATS = [
  {
    value: "37%",
    label: "Average productivity gain identified per assessment",
    bg: "bg-[#f8f9fc]",
  },
  {
    value: "50+",
    label: "Hours of deep-dive interviews per engagement",
    bg: "bg-[#eef1f8]",
  },
  {
    value: "92%",
    label: "Of clients move to full implementation",
    bg: "bg-[#dde4f0]",
  },
];

export default function AboutMissionSection() {
  return (
    <section className="bg-white px-4 py-16 shadow-[0_0_17.35px_rgba(0,0,0,0.15)] md:px-8 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:flex-row lg:gap-20 items-center">
        <div className="flex min-w-0 flex-1 flex-col gap-12">
          <h2 className="nh-h2">
            <span className="font-bold">Our</span>{" "}
            <span className="text-[rgba(32,20,99,0.7)]">mission</span>
          </h2>
          <div className="flex flex-col gap-6 text-base leading-6 text-[#4e546c]">
            <p>
              AI is advancing at an exponential pace, but most businesses are still operating
              linearly. Our mission is to close that gap. We partner with forward-thinking
              leadership teams to build Adaptive Organizations—companies that don&apos;t just adopt
              AI tools, but fundamentally evolve how they think, decide, and compete.
            </p>
            <p>
              Every engagement begins with a deep-dive strategic assessment: structured interviews
              with department heads and executives, industry-specific AI analysis, and
              collaborative validation sessions. We don&apos;t hand you a generic report and walk
              away. We co-author your AI roadmap, prioritize the initiatives that will move the
              needle on your KPIs, and stay with you through implementation. The result is a clear,
              actionable strategy backed by the trust and expertise of a team that has been in
              your shoes.
            </p>
          </div>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-6 lg:w-[500px]">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className={`flex flex-col items-center gap-4 rounded-lg px-6 py-5 ${stat.bg}`}
            >
              <p className="about-mission-stat uppercase">{stat.value}</p>
              <p className="max-w-[356px] text-center text-sm leading-[19.25px] text-black">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
