import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion.jsx";
import chevronFaq from "../../../assets/images/new-home/icons/chevron-faq.svg";
import { SectionHeading } from "./SectionHeading.jsx";

const FAQ_ITEMS = [
  {
    question: "How is this different from typical AI consulting?",
    answer:
      "We combine C-suite experience with hands-on delivery. You get a strategic roadmap and a team that builds, ships, and measures outcomes—not slide decks and disconnected pilots.",
  },
  {
    question: "What if our workforce resists AI transformation?",
    answer:
      "Change management is embedded in every engagement. We map role impacts, train leaders and teams, and tie adoption to incentives so people see AI as an amplifier, not a threat.",
  },
  {
    question: "How do you ensure real business impact, not just impressive demos?",
    answer:
      "Every initiative starts with a business case, executive sponsors, and KPIs. We prototype quickly, validate with real data, and only scale what proves value in production.",
  },
  {
    question: "How do you handle the pace of AI change?",
    answer:
      "Our 7-pillar framework is designed for adaptability. We build foundational capabilities and governance so you can absorb new models and tools without restarting from zero.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-white px-5 py-12 max-lg:px-5 max-lg:py-12 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          bold="Wondering About"
          muted="Something?"
          subtitle="We've gathered all the important info right here. Explore our FAQs and find the answers you need."
          subtitleRelaxed
          className="mb-8 max-lg:mb-8 lg:mb-12"
        />

        <Accordion
          type="single"
          collapsible
          className="mx-auto max-w-[784px] space-y-[11.6px]"
        >
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`item-${index}`}
              className="overflow-hidden rounded-xl border border-[#f0f0f0] bg-[#fafcfe] px-5 max-lg:px-5 lg:px-6 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="group cursor-pointer py-5 hover:no-underline [&>svg]:hidden">
                <span className="nh-faq-question flex-1 text-left">
                  {item.question}
                </span>
                <img
                  src={chevronFaq}
                  alt=""
                  className="ml-4 h-4 w-4 shrink-0 transition-transform group-data-[state=open]:rotate-180"
                  aria-hidden
                />
              </AccordionTrigger>
              <AccordionContent className="nh-body pb-2">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
