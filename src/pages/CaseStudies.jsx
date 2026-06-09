import CaseStudiesSection from "../components/PageComponent/NewHome/CaseStudiesSection.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

const META = {
  title: "Case Studies & Results | Real Business Impact | Leap AI",
  description:
    "Explore real case studies from Leap AI, see how organizations reduce costs, improve efficiency, and achieve measurable results through practical AI implementation.",
};

export default function CaseStudies() {
  usePageMeta(META);

  return (
    <CaseStudiesSection
      subtitle="See how organizations use AI to transform their operations."
      headingMuted="Results"
      showCtaButton={false}
    />
  );
}
