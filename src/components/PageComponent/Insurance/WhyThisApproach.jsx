import { Users, Zap, Heart, Database } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function WhyThisApproach() {
  const components = [
    {
      id: "01",
      number: "01",
      icon: Users,
      title: 'Focused on "Outcome-First"',
      description:
        "We don't start with what the technology can do. We start with the P&L—identifying exactly where claims leakage or high Opex is hurting your specific line of business.",
    },
    {
      id: "02",
      number: "02",
      icon: Zap,
      title: "Bias Towards Production",
      description:
        'Most AI advice stops at the "Proof of Concept." Our framework is built to navigate the "Mudra of Scale"—getting through security, compliance, and user adoption.',
    },
    {
      id: "03",
      number: "03",
      icon: Heart,
      title: "Risk-Adjusted Strategy",
      description:
        "AI in insurance isn't just a technical challenge; it's a regulatory one. We prioritize governance and data privacy from day one, not as an afterthought.",
    },
  ];

  return (
    <section className="bg-[#EEF1F8] py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 md:px-8">
        <div className="text-center">
          <p className=" text-[20px] font-[800] uppercase tracking-[2.8px] leading-[20px] text-[#3E79BF] md:text-[14px] md:leading-[20px] transition-colors duration-300">
            Beyond the Toolset
          </p>
          <h2 className="mt-3 text-[30px] font-[800] uppercase leading-[37px] text-[#1A2063] md:text-[48px] md:leading-[57px] transition-all duration-300">
            Why This Approach Is Different
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {components.map((component) => (
            <FrameworkCard key={component.id} {...component} />
          ))}
        </div>

        <div className="flex justify-center">
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
            className="btn_primary_for_insurance mt-4 flex uppercase items-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] group"
          >
            Get Free Access
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

function FrameworkCard({ number, icon: Icon, title, description }) {
  return (
    <div className="relative rounded-[16px] border border-[#DDE4F0] bg-[#FFFFFF] p-8 transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:border-[#cbd5e1] hover:shadow-[0_20px_25px_-5px_rgba(226,232,240,0.5),0_8px_10px_-6px_rgba(226,232,240,0.5)] group cursor-default">
      {/* <div className="absolute right-10 top-10">
        <span className="text-[60px] font-[900] leading-[60px] text-[rgba(226,232,240,0.5)] transition-all duration-300 group-hover:text-[rgba(226,232,240,0.7)]">
          {number}
        </span>
      </div> */}

      <div className="relative z-10">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#f1f5f9] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3e6db5] group-hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
          <Icon
            className="h-8 w-8 text-[#3e6db5] transition-all duration-300 group-hover:text-white group-hover:rotate-3"
            aria-hidden
          />
        </div>

        <h3 className="mb-3 text-[24px] font-[800] leading-[28px] text-[#2b2b76] md:text-[20px] transition-colors duration-300 group-hover:text-[#3e6db5]">
          {title}
        </h3>

        <p className="font-[700] leading-[22px] text-[#4F6590] text-[14px] transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}
