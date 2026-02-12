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
        <div className="max-w-[600px] space-y-6 text-left">
          <div className="space-y-1">
            <h2 className="text-[32px] font-extrabold leading-tight text-white md:text-[48px] md:leading-[57px]">
              <span className="block">It’s Not the Technology</span>
              <span className="block text-[#a1bfde]">
                It Is Knowing What to Do First
              </span>
            </h2>
          </div>

          <p className="text-[18px] leading-[32px] text-[#bcc6d9] md:text-[20px]">
            Most AI content focuses on tools, models, or vendors. Successful
            insurers focus on the foundation: preparing people, data, workflows,
            and governance.
          </p>

          <div className="mt-4 w-full rounded-[16px] border border-white/10 bg-white/5 px-5 py-6 backdrop-blur-sm">
            <ul className="space-y-4">
              {bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[#eef1f8]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ef4444]/10 text-[#f97373]">
                    <XCircle className="h-full w-full" aria-hidden />
                  </span>
                  <span className="text-[16px] font-bold leading-[24px] text-[#EEF1F8]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right icon circle */}
        <div className="flex w-full justify-center items-center">
          <div className="flex h-[260px] w-[260px] items-center justify-center rounded-full border border-white/10 bg-white/5 p-px md:h-[320px] md:w-[320px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 128 128"
              fill="none"
            >
              <g opacity="0.4">
                <path
                  d="M68.4252 11.6267C67.0355 10.9928 65.5259 10.6648 63.9985 10.6648C62.4711 10.6648 60.9615 10.9928 59.5718 11.6267L13.8652 32.4267C12.9188 32.844 12.1141 33.5275 11.5492 34.3939C10.9844 35.2604 10.6836 36.2724 10.6836 37.3067C10.6836 38.341 10.9844 39.353 11.5492 40.2195C12.1141 41.0859 12.9188 41.7694 13.8652 42.1867L59.6252 63.04C61.0148 63.6739 62.5244 64.0019 64.0518 64.0019C65.5792 64.0019 67.0888 63.6739 68.4785 63.04L114.239 42.24C115.185 41.8227 115.99 41.1392 116.554 40.2728C117.119 39.4064 117.42 38.3944 117.42 37.36C117.42 36.3257 117.119 35.3137 116.554 34.4473C115.99 33.5808 115.185 32.8973 114.239 32.48L68.4252 11.6267Z"
                  stroke="#7099CB"
                  stroke-width="10.6667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.668 64C10.6655 65.0201 10.9555 66.0195 11.5038 66.8797C12.0521 67.74 12.8356 68.4249 13.7613 68.8533L59.628 89.7067C61.0104 90.3326 62.5105 90.6565 64.028 90.6565C65.5455 90.6565 67.0456 90.3326 68.428 89.7067L114.188 68.9067C115.132 68.4823 115.932 67.7925 116.491 66.9212C117.05 66.05 117.343 65.035 117.335 64"
                  stroke="#7099CB"
                  stroke-width="10.6667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.668 90.6667C10.6655 91.6868 10.9555 92.6863 11.5038 93.5465C12.0521 94.4067 12.8356 95.0916 13.7613 95.5201L59.628 116.373C61.0104 116.999 62.5105 117.323 64.028 117.323C65.5455 117.323 67.0456 116.999 68.428 116.373L114.188 95.5734C115.132 95.1491 115.932 94.4592 116.491 93.588C117.05 92.7167 117.343 91.7017 117.335 90.6667"
                  stroke="#7099CB"
                  stroke-width="10.6667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItsNotTheTechnplogy;
