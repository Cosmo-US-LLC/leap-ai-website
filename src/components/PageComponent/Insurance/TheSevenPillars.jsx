import { Users, Zap, Heart, Database } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function TheSevenPillars() {
  const components = [
    {
      id: "01",
      number: "01",
      icon: Users,
      title: "Business Value",
      description:
        "Where AI actually delivers in claims, underwriting, operations, and CX.",
    },
    {
      id: "02",
      number: "02",
      icon: Zap,
      title: "Internal Readiness",
      description:
        "What must be true inside your organization before automation.",
    },
    {
      id: "03",
      number: "03",
      icon: Heart,
      title: "Governance",
      description: "How to avoid compliance and data privacy mistakes.",
    },
    {
      id: "04",
      number: "04",
      icon: Database,
      title: "Scaling Success",
      description: "Why most AI pilots fail and how to move beyond them.",
    },
    {
      id: "05",
      number: "05",
      icon: Database,
      title: "Strategy",
      description: "How to decide what to act on now versus what to wait on.",
    },
    {
      id: "06",
      number: "06",
      icon: Database,
      title: "Executive Framework",
      description:
        "A decision framework for executives in regulated, risk-driven organizations.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-[30px] uppercase font-[800] leading-[37px] text-[#12174B] md:text-[44px] md:leading-[48px] transition-all duration-300">
            The 7 Pillars Framework
          </h2>
          <p className="mt-3 text-[20px] uppercase font-[700] tracking-[0.28px] leading-[28px] text-[#3E79BF] md:text-[20px] md:leading-[28px] transition-colors duration-300">
            A Strategic Blueprint for Executives
          </p>
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
            className="btn_primary mt-4 flex items-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] group"
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

function FrameworkCard({ number, icon: Icon, title, description }) {
  return (
    <div className="relative rounded-[16px] border border-[#e2e8f0] bg-[#f8fafc] p-10 transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:border-[#cbd5e1] hover:shadow-[0_20px_25px_-5px_rgba(226,232,240,0.5),0_8px_10px_-6px_rgba(226,232,240,0.5)] group cursor-default">
      <div className="absolute right-10 top-10">
        <span className="text-[60px] font-[900] leading-[60px] text-[rgba(226,232,240,0.5)] transition-all duration-300 group-hover:text-[rgba(226,232,240,0.7)]">
          {number}
        </span>
      </div>

      <div className="relative z-10">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#f1f5f9] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3e6db5] group-hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
          <Icon
            className="h-8 w-8 text-[#3e6db5] transition-all duration-300 group-hover:text-white group-hover:rotate-3"
            aria-hidden
          />
        </div>

        <h3 className="mb-4 text-[24px] font-[800] leading-[32px] text-[#2b2b76] md:text-[24px] transition-colors duration-300 group-hover:text-[#3e6db5]">
          {title}
        </h3>

        <p className="font-[700] leading-[24px] text-[#475569] text-[16px] transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}
