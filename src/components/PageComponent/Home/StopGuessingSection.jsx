import { CheckCircle2, AlertTriangle, ArrowRight, Check } from "lucide-react";

export default function StopGuessingSection() {
  const bullets = [
    "Align AI with business objectives",
    "Protect operational stability",
    "Avoid costly missteps",
    "Build team alignment",
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
        <div className="relative overflow-hidden rounded-[40px] bg-[#2b2b76] md:px-8 px-6 py-10 text-white shadow-[0_25px_50px_-12px_rgba(15,23,42,0.6)] md:px-12 md:py-14">
          {/* gradient blobs */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#3e6db5] opacity-30 blur-[40px]" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#059669] opacity-30 blur-[40px]" />

          <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            {/* Left copy */}
            <div className="max-w-xl space-y-6">
              <h2 className="text-[30px] font-[800] leading-[37px] md:text-[44px] md:leading-[48px]">
                <span className="block">Stop Guessing.</span>
                <span className="block">Start Implementing</span>
              </h2>
              <p className="text-[18px] font-[500] max-w-[450px] leading-[29px] text-[#e2e8f0] md:text-[18px] md:leading-[28px]">
                Leap AI’s 7 Pillars framework helps leaders make informed AI decisions before
                committing capital, teams, or credibility.
              </p>

              <ul className="space-y-3">
                {bullets.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#059669] z-10 relative">
                      <Check className="h-3.5 w-3.5 text-[#ffffff]" aria-hidden />
                    </span>
                    <p className="text-[16px] font-[700] leading-[24px] text-[rgba(255,255,255,0.9)]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right card stack */}
            <div className="relative mt-4 flex justify-center md:mt-0 md:justify-end">
              <div className="h-[320px] w-full max-w-[420px] rotate-3 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(15,23,42,0.3)] p-6 backdrop-blur-md">
                {/* Before card */}
                <div className="mb-6 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(15,23,42,0.3)] px-4 py-6">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[rgba(250,204,21,0.15)]">
                      <AlertTriangle className="h-3.5 w-3.5 text-[#facc15]" aria-hidden />
                    </span>
                    <p className="text-[16px] font-[700] leading-[20px] text-white">
                      Before the Framework
                    </p>
                  </div>
                  <p className="text-[12px] font-[500] leading-[16px] text-[#cbd5e1]">
                    “We have 10 different pilots, no governance, and no clear ROI.”
                  </p>
                </div>

                {/* Arrow divider */}
                <div className="mb-6 flex items-center justify-center">
                   
                    <ArrowRight className="h-6 w-8 text-[#cbd5e1]" aria-hidden />
                   
                </div>

                {/* After card */}
                <div className="rounded-xl border border-[rgba(34,197,94,0.4)] bg-[rgba(16,185,129,0.25)] px-4 py-4">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[rgba(16,185,129,0.2)]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-white" aria-hidden />
                    </span>
                    <p className="text-[16px] font-[700] leading-[20px] text-white">
                      After the Framework
                    </p>
                  </div>
                  <p className="text-[12px] font-[500] leading-[16px] text-[#e5f9f0]">
                    “We have a prioritized roadmap, a trained team, and measurable impact.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

