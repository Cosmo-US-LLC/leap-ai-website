import HeroSection from "../components/PageComponent/NewHome/HeroSection.jsx";
import StrategicPillarsSection from "../components/PageComponent/NewHome/StrategicPillarsSection.jsx";
import ArchitectIntelligenceSection from "../components/PageComponent/NewHome/ArchitectIntelligenceSection.jsx";
import TestimonialsSection from "../components/PageComponent/NewHome/TestimonialsSection.jsx";
import PartnerCtaSection from "../components/PageComponent/NewHome/PartnerCtaSection.jsx";
import FaqSection from "../components/PageComponent/NewHome/FaqSection.jsx";
import CaseStudiesSection from "../components/PageComponent/NewHome/CaseStudiesSection.jsx";
import InsightsSection from "../components/PageComponent/NewHome/InsightsSection.jsx";
import { usePageMetaI18n } from "../hooks/usePageMetaI18n.js";

export function Home() {
  usePageMetaI18n("home");

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
