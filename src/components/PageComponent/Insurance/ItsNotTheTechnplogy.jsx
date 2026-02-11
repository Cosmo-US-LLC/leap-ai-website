import React from "react";
import { XCircle } from "lucide-react";

function ItsNotTheTechnplogy() {
  const bullets = [
    "AI projects stall without preparation",
    "Compliance teams block late-stage progress",
    "Data issues appear late in the cycle",
  ];

  return (
    <section className="bg-[#12174b] py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 md:flex-row md:items-center md:justify-between md:px-8">
        {/* Left copy */}
        <div className="max-w-xl space-y-6 text-left">
          <div className="space-y-1">
            <h2 className="text-[32px] font-extrabold leading-tight text-white md:text-[48px] md:leading-[1.2]">
              <span className="block">It’s Not the Technology</span>
              <span className="block text-[#a1bfde]">
                It Is Knowing What to Do
              </span>
              <span className="block text-[#a1bfde]">First</span>
            </h2>
          </div>

          <p className="text-[18px] leading-[1.8] text-[#bcc6d9] md:text-[20px]">
            Most AI content focuses on tools, models, or vendors. Successful
            insurers focus on the foundation: preparing people, data, workflows,
            and governance.
          </p>

          <div className="mt-4 w-full rounded-[16px] border border-white/10 bg-white/5 px-5 py-6 backdrop-blur-sm">
            <ul className="space-y-4">
              {bullets.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#eef1f8]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ef4444]/10 text-[#f97373]">
                    <XCircle className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-[16px] font-bold leading-normal">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right icon circle */}
        <div className="flex w-full justify-center md:w-auto">
          <div className="flex h-[260px] w-[260px] items-center justify-center rounded-full border border-white/10 bg-white/5 p-px md:h-[320px] md:w-[320px]">
            <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[#12174b] text-[#4b5d8e] md:h-[128px] md:w-[128px]">
              <div className="space-y-1 text-center text-[32px] font-extrabold leading-none md:text-[36px]">
                <div className="h-[2px] w-10 rounded-full bg-[#4b5d8e]" />
                <div className="h-[2px] w-16 rounded-full bg-[#4b5d8e]" />
                <div className="h-[2px] w-10 rounded-full bg-[#4b5d8e]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItsNotTheTechnplogy;
