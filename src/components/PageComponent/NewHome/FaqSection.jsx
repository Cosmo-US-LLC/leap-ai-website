import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion.jsx";
import chevronFaq from "../../../assets/images/new-home/icons/chevron-faq.svg";
import { SectionHeading } from "./SectionHeading.jsx";

export default function FaqSection() {
  const { t } = useTranslation("home");
  const faqItems = useMemo(
    () => t("faq.items", { returnObjects: true }),
    [t],
  );

  return (
    <section className="bg-white px-5 py-12 max-lg:px-5 max-lg:py-12 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          bold={t("faq.headingBold")}
          muted={t("faq.headingMuted")}
          subtitle={t("faq.subtitle")}
          subtitleRelaxed
          className="mb-8 max-lg:mb-8 lg:mb-12"
        />

        <Accordion
          type="single"
          collapsible
          className="mx-auto max-w-[784px] space-y-[11.6px]"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`item-${index}`}
              className="overflow-hidden rounded-xl border border-[#f0f0f0] bg-[#fafcfe] px-5 max-lg:px-5 lg:px-6 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="group cursor-pointer py-5 hover:no-underline [&>svg]:hidden">
                <span className="nh-faq-question flex-1 text-left">{item.question}</span>
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
