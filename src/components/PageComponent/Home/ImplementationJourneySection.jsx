import { BookOpen, MessagesSquare, ClipboardList, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Read the Guide",
    subtitle: "Understand the 7 Pillars",
    Icon: BookOpen,
  },
  {
    id: 2,
    title: "Consultation",
    subtitle: "Strategic Alignment Call",
    Icon: MessagesSquare,
  },
  {
    id: 3,
    title: "Assessment",
    subtitle: "Identify Opportunities",
    Icon: ClipboardList,
  },
  {
    id: 4,
    title: "Implementation",
    subtitle: "Execute the Roadmap",
    Icon: Rocket,
  },
  {
    id: 5,
    title: "Improve",
    subtitle: "Monitor & Optimize",
    Icon: LineChart,
  },
];

export default function ImplementationJourneySection() {
  return (
    <section className="relative overflow-hidden bg-[#2b2b76] py-16">
      {/* gradient blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-10 top-16 h-64 w-64 rounded-full bg-[#3e6db5] blur-[50px]" />
        <div className="absolute bottom-16 right-10 h-72 w-72 rounded-full bg-[#059669] blur-[50px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 md:px-8">
        <div className="text-center">
          <p className="text-[14px] font-[800] uppercase tracking-[0.1em] text-[#059669]">
            The Path Forward
          </p>
          <h2 className="mt-3 text-[32px] font-[800] leading-[40px] text-white md:text-[44px] md:leading-[48px]">
            Your Implementation Journey
          </h2>
        </div>

        <div className="relative mt-4">
          {/* horizontal line */}
          <div className="absolute left-[10%] right-[10%] top-12 h-px bg-gradient-to-r from-[rgba(148,163,184,0.4)] via-[rgba(226,232,240,0.7)] to-[rgba(148,163,184,0.4)]" />

          <div className="relative grid gap-8 md:grid-cols-5">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center gap-4">
                <div className="relative overflow-hidden flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#3e6db5] bg-[#2b2b76] shadow-[0_20px_25px_-5px_rgba(15,23,42,0.6)]">
                  <step.Icon className="h-8 w-8 text-white" aria-hidden />
                  <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-[#2b2b76] bg-[#059669] text-[14px] font-[700] text-white">
                    {step.id}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[16px] font-[700] leading-[24px] text-white">
                    {step.title}
                  </p>
                  <p className="text-[14px] font-[500] leading-[20px] text-[#cbd5e1]">
                    {step.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

