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
    <div className="bg-[#12174B] py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 md:flex-row md:items-center md:justify-between md:px-8">
        {/* Left column */}
        <div className="max-w-[500px] w-full space-y-8 text-left">
          <div className="space-y-1">
            <h1 className="text-[32px] font-extrabold leading-tight text-white md:text-[48px] md:leading-[57.6px]">
              <span className="block">What This Report</span>
              <span className="block text-[#A1BFDE]">Helps You Do</span>
            </h1>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-[16px] border border-white/10 bg-white/5 px-6 py-5"
              >
                <span className="mt-[2px] flex h-6 w-6 items-center justify-center rounded-full text-[#3e79bf]">
                  <CheckCircle2 className="h-full w-full" aria-hidden />
                </span>
                <div className="flex flex-col gap-2">
                  <p className="text-[20px] font-extrabold leading-[28px] text-white">
                    {item.title}
                  </p>
                  <p className="text-[16px] font-medium leading-[20px] text-[#bcc6d9]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div className="w-full max-w-[550px] rounded-[16px] bg-white px-8 py-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <div className="space-y-4">
            <p className="text-[20px] font-extrabold italic uppercase leading-[31px] tracking-[-0.6px] text-[#12174b] md:text-[24px]">
              "Clarity before commitment."
            </p>
            <p className="text-[18px] font-bold leading-[29.25px] text-[#4f6590]">
              Avoid the costly rework of failed pilots by identifying roadblocks
              before the first line of code is written.
            </p>
          </div>

          <button
            type="button"
            onClick={handleDownloadClick}
            className="mt-8 inline-flex w-full  btn_primary_for_insurance uppercase"
          >
            Download the framework
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhatIsThisReport;
