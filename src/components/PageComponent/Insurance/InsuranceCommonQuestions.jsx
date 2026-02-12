import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";
import { cn } from "../../../lib/utils.js";

export default function InsuranceCommonQuestions() {
  const questions = [
    {
      id: "free",
      question: "Is this report for technical or business leaders?",
      answer: "Yes. The guide is completely free. No strings attached.",
    },
    {
      id: "sales",
      question: "How long does it take to see ROI from the 7 Pillars?",
      answer:
        "No. The guide provides standalone strategic value. Any consultation is optional and only for companies ready to explore next steps.",
    },
    {
      id: "consultation",
      question: "We already have an AI pilot running. Is this useful?",
      answer:
        "No. The consultation is optional. It is designed for leaders who want personalized AI insights after reading the guide.",
    },
    {
      id: "implementation",
      question: "Is my data shared during the strategy session?",
      answer:
        "Implementation only begins after you have clarity, a validated strategy, and a prioritized roadmap.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 md:px-8">
        <h2 className="text-center tracking-[4.8px] uppercase text-[30px] font-[800] leading-[40px] text-[#12174B] md:text-[48px] md:leading-[58px] transition-all duration-300">
          Common Questions
        </h2>

        <div className="mx-auto w-full max-w-4xl">
          <AccordionPrimitive.Root
            type="single"
            collapsible
            className="flex flex-col gap-4 "
          >
            {questions.map((item) => (
              <AccordionPrimitive.Item
                key={item.id}
                value={item.id}
                className="rounded-[16px] border-1 border-transparent hover:border-[0.5px] hover:border-[#3e6db5] data-[state=open]:border-[0.5px] data-[state=open]:border-[#3e6db5] bg-[#f8fafc] shadow-[0_1px_2px_rgba(0,0,0,0.10)] overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.01]  group"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between hover:cursor-pointer px-6 py-[24px] text-left text-[20px] font-[800] leading-[28px] text-[#12174B] transition-all duration-300 ease-in-out hover:text-[#3e6db5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 group-hover:text-[#3e6db5] active:scale-[0.98] data-[state=open]:text-[#3e6db5] [&[data-state=open]_svg]:rotate-90 [&[data-state=open]_svg]:text-[#3e6db5]",
                    )}
                  >
                    {item.question}
                    <ChevronRight className="h-5 w-5 shrink-0 text-[#2b2b76] transition-all duration-300 ease-in-out group-hover:text-[#3e6db5] group-hover:scale-110" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content
                  className={cn(
                    "overflow-hidden text-[18px] font-[500] leading-[24px] text-[#475569] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down transition-all duration-300 ease-in-out",
                  )}
                >
                  <div className="px-6 pb-6 pt-2">{item.answer}</div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </div>
      </div>
    </section>
  );
}
