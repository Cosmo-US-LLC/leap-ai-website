import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../../lib/utils.js';

export default function CommonQuestions() {
  const questions = [
    {
      id: 'free',
      question: "Is the 7 Pillars Guide really free?",
      answer: "Yes, the 7 Pillars Guide is completely free. We believe in providing value upfront to help companies make informed decisions about AI implementation.",
    },
    {
      id: 'sales',
      question: "Am I being funneled into a sales pitch?",
      answer: "No, this is not a sales pitch. Our working sessions are designed to provide genuine value and strategic guidance, regardless of whether you choose to work with us further.",
    },
    {
      id: 'consultation',
      question: "Do I have to book a consultation?",
      answer: "Booking a consultation is optional but recommended. It allows us to provide personalized advice tailored to your specific situation and bottlenecks.",
    },
    {
      id: 'implementation',
      question: "When does AI implementation happen?",
      answer: "AI implementation timing depends on your organization's readiness and strategic planning. Our guide helps you assess this and create a roadmap that fits your timeline.",
    },
    {
      id: 'audience',
      question: "Who is this guide for?",
      answer: "This guide is designed for companies with 25+ employees who have real operational complexity and are willing to invest in foundations first before jumping into quick AI tools.",
    },
    {
      id: 'quick-tools',
      question: "What if I just want quick AI tools?",
      answer: "While quick AI tools can provide immediate benefits, our guide focuses on building a solid foundation for long-term success. We help you understand when and how to integrate AI strategically.",
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
