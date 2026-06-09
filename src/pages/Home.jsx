import HeroSection from "../components/PageComponent/NewHome/HeroSection.jsx";
import StrategicPillarsSection from "../components/PageComponent/NewHome/StrategicPillarsSection.jsx";
import ArchitectIntelligenceSection from "../components/PageComponent/NewHome/ArchitectIntelligenceSection.jsx";
import TestimonialsSection from "../components/PageComponent/NewHome/TestimonialsSection.jsx";
import PartnerCtaSection from "../components/PageComponent/NewHome/PartnerCtaSection.jsx";
import FaqSection from "../components/PageComponent/NewHome/FaqSection.jsx";
import CaseStudiesSection from "../components/PageComponent/NewHome/CaseStudiesSection.jsx";
import InsightsSection from "../components/PageComponent/NewHome/InsightsSection.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

const HOME_META = {
  title: "AI Consulting & Transformation Experts | Leap AI",
  description:
    "We help visionary leaders implement AI without complexity or risk. Drive efficiency, reduce costs, and unlock measurable results with Leap AI's proven 7-pillar framework.",
};

export function Home() {
  usePageMeta(HOME_META);

  return (
    <>
      <HeroSection />
      <StrategicPillarsSection />
      <ArchitectIntelligenceSection />
      <TestimonialsSection />
      <PartnerCtaSection />
      <FaqSection />
      <CaseStudiesSection />
      <InsightsSection />
    </>
  );
}
