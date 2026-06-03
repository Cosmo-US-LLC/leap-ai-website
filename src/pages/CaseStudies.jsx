import CaseStudiesSection from "../components/PageComponent/NewHome/CaseStudiesSection.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

const META = {
  title: "Case Studies | Leap 41",
  description:
    "See how organizations use AI to transform their operations with measurable results.",
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
