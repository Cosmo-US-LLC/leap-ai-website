import React from "react";
import { Users2, LineChart, ShieldCheck, CheckCircle2 } from "lucide-react";

function WhoIsThisFor() {
  const designedFor = [
    {
      icon: Users2,
      text: "Insurance carriers and mutuals",
    },
    {
      icon: LineChart,
      text: "Brokers, MGAs, and agencies",
    },
    {
      icon: ShieldCheck,
      text: "P&C, Health, Life, and Specialty",
    },
  ];

  const fitIf = [
    "You are tired of AI hype",
    "You care about ROI and governance",
    "You want a practical action plan",
  ];

  return (
    <section className="bg-[#eef1f8] py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 px-4 md:px-8">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-[32px] font-extrabold uppercase tracking-[-1.2px] text-[#12174b] md:text-[48px]">
            Who This Is For
          </h2>
          <p className="text-[12px] font-extrabold uppercase leading-[20px] tracking-[0.196px] text-[#3e79bf] md:text-[14px]">
            Built for operational complexity
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full max-w-[940px] gap-6 md:grid-cols-2 md:gap-12">
          {/* Designed for */}
          <div className="flex flex-col gap-6 rounded-[16px] border border-[#dde4f0] bg-white p-6 shadow-sm md:p-10">
            <div className="w-full border-b border-[#e5e7eb] pb-4">
              <p className="text-[12px] font-extrabold uppercase tracking-[1.2px] text-[#3e79bf] md:text-[12px]">
                Designed for:
              </p>
            </div>

            <ul className="space-y-4">
              {designedFor.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-4 text-[#1a2063]"
                >
                  <span className="flex h-6 w-6 items-center justify-center text-[#3e79bf]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-[16px] font-bold leading-[24px]">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* This is a fit if */}
          <div className="flex flex-col gap-6 rounded-[16px] border border-[#dde4f0] bg-white p-6 shadow-sm md:p-10">
            <div className="w-full border-b border-[#e5e7eb] pb-4">
              <p className="text-[12px] font-extrabold uppercase tracking-[1.2px] text-[#3e79bf] md:text-[12px]">
                This is a fit if:
              </p>
            </div>

            <ul className="space-y-4">
              {fitIf.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-4 text-[#1a2063]"
                >
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full text-[#3e79bf]">
                    <CheckCircle2 className="h-full w-full" aria-hidden />
                  </span>
                  <span className="text-[16px] font-[700] leading-[24px]">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoIsThisFor;
