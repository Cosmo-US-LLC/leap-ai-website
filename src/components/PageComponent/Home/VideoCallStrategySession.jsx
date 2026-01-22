import { Check, Lock, Users, Zap, Clock } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function VideoCallStrategySession() {
  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-4 md:px-8">
        <div className="text-center flex flex-col items-center gap-3">
          <p className="text-[14px] font-[800] leading-[20px] uppercase tracking-[0.1em] text-[#3E6DB5]">
            Working Session
          </p>
          <h2 className="text-[30px] font-[800] leading-[36px] text-[#2b2b76] md:text-[44px] md:leading-[48px]">
            Your Video Call Strategy Session
          </h2>
          <p className="md:text-[18px] text-[20px] font-[500] leading-[28px] text-[#475569]">
            This is not a sales pitch. It is a working session.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left card */}
          <div className="rounded-[30px] border border-[#f1f5f9] bg-white p-8 shadow-[0_20px_25px_-5px_rgba(226,232,240,0.5),0_8px_10px_-6px_rgba(226,232,240,0.5)]">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(62,109,181,0.1)] text-[#3e6db5]">
              <Zap className="h-8 w-8" aria-hidden />
            </div>
            <h3 className="mt-6 text-[24px] font-[800] leading-[28px] text-[#2b2b76]">
              What We Will Do
            </h3>
            <ul className="mt-6 space-y-4 text-left">
              <li className="flex gap-3">
                <span className="mt-[6px] inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[rgba(62,109,181,0.2)] text-[#3e6db5]">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                <div className="pt-[2px]">
                  <p className="text-[16px] font-[700] leading-[24px] text-[#2b2b76]">
                    Kill the hype.
                  </p>
                  <p className="text-[16px] font-[500] leading-[24px] text-[#475569]">
                    We explain why 95% of AI projects fail so you can <br className="max-md:hidden"/> avoid them.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-[6px] inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[rgba(62,109,181,0.2)] text-[#3e6db5]">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                <div className="pt-[2px]">
                  <p className="text-[16px] font-[700] leading-[24px] text-[#2b2b76]">
                    Get specific.
                  </p>
                  <p className="text-[16px] font-[500] leading-[24px] text-[#475569]">
                    Personalized advice on your bottlenecks.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-[6px] inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[rgba(62,109,181,0.2)] text-[#3e6db5]">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                <div className="pt-[2px]">
                  <p className="text-[16px] font-bold leading-[24px] text-[#2b2b76]">
                    Show the roadmap.
                  </p>
                  <p className="text-[16px] font-[500] leading-[24px] text-[#475569]">
                    You will see a complete sample report.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right card */}
          <div className="relative overflow-hidden rounded-[30px] bg-[#2b2b76] p-8 text-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#3e6db5] opacity-20 blur-[40px]" />
            <div className="relative">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.1)] text-white">
                <Users className="h-8 w-8" aria-hidden />
              </div>
              <h3 className="mt-6 text-[24px] font-extrabold leading-[28px]">
                Who This Is For
              </h3>
              <ul className="mt-6 space-y-4 text-left">
                <li className="flex gap-3">
                  <span className="mt-[6px] inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#059669]">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  <p className="text-[16px] pt-[4px]  font-[700] leading-[24px] text-[rgba(255,255,255,0.9)]">
                    Companies with 25+ employees.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#059669]">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  <p className="text-[16px] pt-[4px] font-[700] leading-[24px] text-[rgba(255,255,255,0.9)]">
                    Real operational complexity.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#059669]">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  <p className="text-[16px] pt-[4px] font-[700] leading-[24px] text-[rgba(255,255,255,0.9)]">
                    Willing to invest in foundations first.
                  </p>
                </li>
              </ul>

              <div className="mt-8 border-t border-[rgba(255,255,255,0.1)] pt-6">
                <div className="flex items-center gap-3 rounded-[12px] bg-[rgba(5,150,105,0.1)] px-4 py-2">
                  <Clock className="h-4 w-4 text-[#059669]" aria-hidden />
                  <p className="text-[14px] font-bold leading-[20px] text-[#059669]">
                    CURRENT AVAILABILITY
                  </p>
                </div>
                <p className="mt-3 text-[14px] font-[500] leading-[20px] text-[#cbd5e1]">
                  Calendar typically booked 2 weeks in advance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <button className="btn_primary flex  items-center justify-center gap-3">
            <span>Apply for Your Free Consultation</span>
            <ArrowRight className="h-5 w-5" aria-hidden />
          </button>
          <p className="flex items-center gap-2 text-[14px] font-[700] leading-[20px] text-[#94a3b8]">
            <Lock className="h-3.5 w-3.5" aria-hidden />
            <span>We do not take every call. Application required.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

