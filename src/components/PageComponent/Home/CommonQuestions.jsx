import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../../lib/utils.js';

export default function CommonQuestions() {
  const questions = [
    {
      id: 'free',
      question: "Is the 7 Pillars Guide really free?",
      answer: "Yes. The guide is completely free. No strings attached.",
    },
    {
      id: 'sales',
      question: "Am I being funneled into a sales pitch?",
      answer: "No. The guide provides standalone strategic value. Any consultation is optional and only for companies ready to explore next steps.",
    },
    {
      id: 'consultation',
      question: "Do I have to book a consultation?",
      answer: "No. The consultation is optional. It is designed for leaders who want personalized AI insights after reading the guide.",
    },
    {
      id: 'implementation',
      question: "When does AI implementation happen?",
      answer: "Implementation only begins after you have clarity, a validated strategy, and a prioritized roadmap.",
    },
    {
      id: 'audience',
      question: "Who is this guide for?",
      answer: "Executives managing teams of 25+ employees who want ROI clarity before investing in AI tools or pilots.",
    },
    {
      id: 'quick-tools',
      question: "What if I just want quick AI tools?",
      answer: "This guide is not for those seeking shortcuts or tool-focused solutions. It is designed for strategic, long-term AI adoption.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 md:px-8">
        <h2 className="text-center text-[30px] font-[800] leading-[40px] text-[#2b2b76] md:text-[44px] md:leading-[48px]">
          Common Questions
        </h2>

        <div className="mx-auto w-full max-w-3xl">
          <AccordionPrimitive.Root type="single" collapsible className="flex flex-col gap-4 ">
            {questions.map((item) => (
              <AccordionPrimitive.Item
                key={item.id}
                value={item.id}
                className="rounded-[16px] border-0 bg-[#f8fafc] shadow-[0_1px_2px_rgba(0,0,0,0.10)] overflow-hidden"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      'flex flex-1 items-center justify-between hover:cursor-pointer px-6 py-[24px] text-left text-[18px] font-[700] leading-[28px] text-[#2b2b76] transition-all hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 [&[data-state=open]>svg]:rotate-90',
                    )}
                  >
                    {item.question}
                    <ChevronRight className="h-5 w-5 shrink-0 text-[#2b2b76] transition-transform duration-200" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content
                  className={cn(
                    'overflow-hidden text-[16px] font-[500] leading-[24px] text-[#475569] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
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
