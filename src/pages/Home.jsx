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
  title: "Leap 41 | Make AI Work for Cost Optimization",
  description:
    "Leap 41 helps visionary leaders navigate AI transformation with strategic architecture, proven frameworks, and execution that delivers measurable ROI.",
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
