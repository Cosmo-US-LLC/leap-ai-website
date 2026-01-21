import { BookOpen, FileSpreadsheet, Headphones, Presentation } from "lucide-react";

export default function DeliverablesSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-4 md:px-8">
        <div className="text-center">
          <p className="text-[14px] font-[800] leading-[20px] uppercase tracking-[0.1em] text-[#059669]">
            Deliverables
          </p>
          <h2 className="mt-3 text-[32px] font-[800] leading-[40px] text-[#2b2b76] md:text-[44px] md:leading-[48px]">
            What You Get Inside
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <DeliverableCard
            iconBg="bg-[#3E6DB51A]"
            Icon={BookOpen}
            title="The 60-Page Strategic Guide"
            description="The complete 7 Pillars framework with actionable implementation steps."
          />
          <DeliverableCard
            iconBg="bg-[#0596691A]"
            Icon={Presentation}
            title="Executive Summary Deck"
            description="A 5-slide presentation to align your stakeholders and board members."
          />
          <DeliverableCard
            iconBg="bg-[#2B2B761A]"
            Icon={FileSpreadsheet}
            title="AI Readiness Checklist"
            description="An interactive Excel tool to score your organization's current maturity."
          />
          <DeliverableCard
            iconBg="bg-[#F973161A]"
            Icon={Headphones}
            title="Audio Version"
            description="Listen to the full guide on your commute. Narrated by the authors."
          />
        </div>
      </div>
    </section>
  );
}

function DeliverableCard({ iconBg, Icon, title, description }) {
  return (
    <div className="flex gap-4 rounded-[32px] border border-[#f1f5f9] bg-white p-6 md:p-8 shadow-[0_20px_25px_-5px_rgba(226,232,240,0.5),0_8px_10px_-6px_rgba(226,232,240,0.5)]">
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-[12px] ${iconBg} text-[#3e6db5]`}
      >
        <Icon className="h-8 w-8" aria-hidden />
      </div>
      <div className="space-y-2 text-left">
        <h3 className="text-[20px] font-[800] leading-[28px] text-[#2b2b76] md:text-[24px] md:leading-[28px]">
          {title}
        </h3>
        <p className="text-[16px] leading-[26px] text-[#475569] font-[500] md:text-[16px] md:leading-[24px]">
          {description}
        </p>
      </div>
    </div>
  );
}

