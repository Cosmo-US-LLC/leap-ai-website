import React from "react";
import { Target, ShieldCheck, Activity, Rocket } from "lucide-react";
import { ArrowRight } from "lucide-react";

function TheReality() {
  const handleCtaClick = () => {
    const target = document.getElementById("get-report");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const items = [
    {
      icon: Target,
      title: "ROI Location: Where it creates value",
    },
    {
      icon: ShieldCheck,
      title: "Risk Management: Regulatory/privacy",
    },
    {
      icon: Activity,
      title: "Prioritization: What to ignore",
    },
    {
      icon: Rocket,
      title: "Production: Moving beyond pilots",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex w-full max-w-[896px] flex-col items-center gap-8 px-4 text-center md:px-0">
        {/* Heading */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-[36px] font-[800] leading-[57px] tracking-[-0.03em] text-[#3e79bf] md:text-[48px]">
            The Reality?
          </p>
          <h2 className="text-[32px] font-extrabold uppercase leading-[57px] tracking-[-0.03em] text-[#1a2063] md:text-[48px]">
            AI Is No Longer Optional
          </h2>
          <p className="text-[20px] font-[900] uppercase tracking-[-1.5px] text-[#3e79bf] md:text-[30px]">
            But Guessing Is Dangerous
          </p>
        </div>

        {/* Card */}
        <div className="w-full rounded-[24px] border border-[#eef1f8] bg-[#f8f9fc] px-6 py-10 text-left shadow-sm md:px-12">
          <p className="mb-6 text-[16px] font-[700] leading-[29.25px] text-[#4f6590] md:text-[18px]">
            Most insurance leaders already know AI matters. What remains unclear
            is:
          </p>

          <div className="grid gap-y-5 gap-x-10 md:grid-cols-2">
            {items.map(({ icon: Icon, title }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="flex mt-[3px] h-7 w-7 items-center justify-center text-[#3e79bf]">
                  <Icon className="h-full w-full" aria-hidden />
                </div>
                <p className="text-[16px] font-extrabold leading-[29.25px] text-[#1a2063] md:text-[18px]">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center w-full max-w-[896px]">
          <button
            onClick={() => {
              const getReportSection = document.getElementById("get-report");
              if (getReportSection) {
                const header = document.querySelector("header");
                const headerHeight = header ? header.offsetHeight : 80;
                const offset = headerHeight + 20; // Add 20px extra spacing
                const elementPosition =
                  getReportSection.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
            className="btn_primary w-full uppercase flex items-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] group"
          >
            Get Your Free Report
            <span className="inline-flex h-[20px] w-[20px] items-center justify-center">
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default TheReality;
