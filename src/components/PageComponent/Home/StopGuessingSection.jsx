import { CheckCircle2, AlertTriangle, ArrowDown, Check } from "lucide-react";
import CheckGreen from '../../../assets/images/home/Leap_hero/check_green.svg';

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
        <div className="relative overflow-hidden rounded-[40px] bg-[#2b2b76] px-6 py-10 text-white shadow-[0_25px_50px_-12px_rgba(15,23,42,0.6)] md:px-12 md:py-14 transition-all duration-400 hover:scale-[1.01]">
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
                  <li key={item} className="flex items-center gap- cursor-default group">
                  <div className="min-w-[34px] w-[100%] max-w-[34px]">
                  <span className=" inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#059669] z-10 relative transition-all duration-300 group-hover:h-7 group-hover:w-7 group-hover:bg-[#10b981]">
                      <Check className="h-3.5 w-3.5 text-[#ffffff]" aria-hidden />
                    </span>
                  </div>
                    <p className="text-[16px] font-[700] leading-[24px] text-[rgba(255,255,255,0.9)]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right card stack */}
            <div className="relative mt-4 flex justify-center md:mt-0 md:justify-end">
              <div className="h-[334px] w-full max-w-[480px] rotate-3 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(15,23,42,0.3)] md:p-6 p-4 backdrop-blur-md transition-all duration-300 hover:rotate-0 hover:scale-[1.02] hover:border-[rgba(255,255,255,0.2)] hover:shadow-lg">
                {/* Before card */}
                <div className="mb-6 flex flex-row gap-2 md:gap-4 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(15,23,42,0.3)] px-4 py-6 transition-all duration-300 hover:border-[rgba(255,255,255,0.1)] ">
                  <span className="inline-flex md:h-10 w-[38px] md:w-10 h-6 md:items-center max-md:mt-[4px] items-start justify-center rounded-md md:bg-[rgba(250,204,21,0.15)] mb-[6px] ">
                      <AlertTriangle className="md:h-5 md:w-5 h-6 w-6 text-[#facc15] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" aria-hidden />
                  </span>
                  <div className="mb-1 flex flex-col gap-2">
                   
                    <p className="text-[16px] font-[700] leading-[20px] text-white transition-colors duration-300">
                      Before the Framework
                    </p>
                    <p className="text-[12px] font-[500] max-w-[320px] leading-[16px] text-[#cbd5e1] transition-colors duration-300 group-hover:text-[#e2e8f0]">
                    "We have 10 different pilots, no governance, and no clear ROI."
                     </p>
                  </div>
                  
                </div>

                {/* Arrow divider */}
                <div className="mb-6 flex items-center justify-center group cursor-default">
                   
                    <ArrowDown className="h-6 w-8 text-[#cbd5e1] transition-all duration-300 group-hover:text-[#e2e8f0] group-hover:translate-y-1" aria-hidden />
                   
                </div>

                {/* After card */}
                <div className="rounded-xl flex flex-row md:gap-4 gap-2 border border-[rgba(34,197,94,0.4)] bg-[rgba(16,185,129,0.25)] px-4 py-4 ">
                <span className="inline-flex h-10 w-[42px] md:w-10 md:items-center items-start justify-center rounded-md md:bg-[rgba(16,185,129,0.2)] ">
                      <img src={CheckGreen} alt="CheckGreen" className="md:h-5 md:w-5 h-7 w-7 text-white " aria-hidden />
                    </span>
                  <div className="mb-1 flex flex-col gap-2">
                   
                    <p className="text-[16px] font-[700] leading-[20px] text-white transition-colors duration-300">
                      After the Framework
                    </p>
                    <p className="text-[12px] font-[500] max-w-[320px] leading-[16px] text-[#e5f9f0] transition-colors duration-300 group-hover:text-white">
                    "We have a prioritized roadmap, a trained team, and measurable impact."
                  </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

