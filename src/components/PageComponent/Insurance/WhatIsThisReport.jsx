import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function WhatIsThisReport() {
  const navigate = useNavigate();

  const items = [
    {
      title: "Separate Signal from Noise",
      description: "Cut through AI hype in conversations.",
    },
    {
      title: "Prioritize Impact",
      description: "Focus on initiatives that hit loss ratios.",
    },
    {
      title: "Strategic Alignment",
      description: "Align leadership, IT, and compliance.",
    },
  ];

  const handleDownloadClick = () => {
    navigate("/your-free-report");
  };

  return (
    <div className="bg-[#12174b] py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 md:flex-row md:items-center md:justify-between md:px-8">
        {/* Left column */}
        <div className="max-w-xl space-y-8 text-left">
          <div className="space-y-1">
            <h1 className="text-[32px] font-extrabold leading-tight text-white md:text-[48px] md:leading-[1.2]">
              <span className="block">What This Report</span>
              <span className="block text-[#a1bfde]">Helps You Do</span>
            </h1>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-[16px] border border-white/10 bg-white/5 px-6 py-5"
              >
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#e0f2fe]/10 text-[#3e79bf]">
                  <CheckCircle2 className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-[18px] font-extrabold leading-normal text-white">
                    {item.title}
                  </p>
                  <p className="text-[14px] font-medium leading-[1.6] text-[#bcc6d9]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div className="w-full max-w-md rounded-[24px] bg-white px-8 py-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <div className="space-y-4">
            <p className="text-[20px] font-extrabold italic uppercase tracking-[-0.04em] text-[#12174b] md:text-[24px]">
              "Clarity before commitment."
            </p>
            <p className="text-[16px] font-bold leading-[1.7] text-[#4f6590]">
              Avoid the costly rework of failed pilots by identifying
              roadblocks before the first line of code is written.
            </p>
          </div>

          <button
            type="button"
            onClick={handleDownloadClick}
            className="mt-8 inline-flex w-full items-center justify-center rounded-[16px] bg-[#059669] py-4 text-[14px] font-black uppercase tracking-[0.14em] text-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-[#04845a] hover:shadow-[0_25px_30px_-8px_rgba(0,0,0,0.18),0_10px_14px_-6px_rgba(0,0,0,0.12)]"
          >
            Download the framework
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhatIsThisReport;
