import { Check, XCircle, X } from "lucide-react";

export default function GuideFitSection() {
  const forYouItems = [
    "You manage a team of 25+ people.",
    "You view AI as a strategic imperative, not just a tool.",
    "You need ROI clarity before investing.",
    "You're willing to invest in foundations first.",
  ];

  const notForYouItems = [
    "You are a solopreneur or early-stage startup.",
    "You are focused only on cost-cutting.",
    "You are unwilling to engage department heads.",
    "You are looking for 'get rich quick' shortcuts.",
  ];

  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-[30px] font-[800] leading-[37px] text-[#2b2b76] md:text-[44px] md:leading-[48px]">
            Is This Guide Right For You?
          </h2>
          <p className="mt-3 text-[18px] font-[500] max-w-[600px] mx-auto leading-[24px] text-[#475569] md:text-[18px] md:leading-[28px]">
            We are selective about who this guide is for. It is written for leaders who are ready to make
            AI a strategic advantage.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card
            tone="positive"
            title="This Guide Is For You If.."
            items={forYouItems}
          />
          <Card
            tone="neutral"
            title="Not For You If..."
            items={notForYouItems}
          />
        </div>
      </div>
    </section>
  );
}

function Card({ tone, title, items }) {
  const isPositive = tone === "positive";

  const topBorder =
    isPositive ? "border-t-8 border-[#059669]" : "border-t-8 border-[#cbd5e1]";
  const badgeBg = isPositive ? "bg-[rgba(5,150,105,0.1)]" : "bg-[#f1f5f9]";
  const iconColor = isPositive ? "text-[#059669]" : "text-[#94a3b8]";
  const titleColor = isPositive ? "text-[#2b2b76]" : "text-[#64748b]";

  const Icon = isPositive ? Check : X;

  return (
    <div
      className={`rounded-[32px] bg-white md:px-8 px-5 py-8 shadow-[0_20px_25px_-5px_rgba(226,232,240,0.5),0_8px_10px_-6px_rgba(226,232,240,0.5)] ${topBorder}`}
    >
      <div className="mb-6 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-[8px] ${badgeBg}`}
        >
          <Icon className={`h-5 w-5 ${iconColor}`} aria-hidden />
        </div>
        <h3
          className={`text-[24px] font-[800] leading-[28px] ${titleColor}`}
        >
          {title}
        </h3>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start md:gap-3 gap-2">
            <span
              className={`mt-[4px] inline-flex h-6 w-6 items-center justify-center rounded-full ${
                isPositive ? "bg-[rgba(5,150,105,0.1)]" : "bg-[#f1f5f9]"
              }`}
            >
              <Icon className={`h-3.5 w-3.5 ${iconColor}`} aria-hidden />
            </span>
            <p className="text-[16px] font-[700] leading-[24px] text-[#334155]">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

