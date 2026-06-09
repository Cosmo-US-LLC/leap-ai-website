import AboutHeroSection from "../components/PageComponent/About/AboutHeroSection.jsx";
import AboutMissionSection from "../components/PageComponent/About/AboutMissionSection.jsx";
import AboutTrustSection from "../components/PageComponent/About/AboutTrustSection.jsx";
import AboutTeamSection from "../components/PageComponent/About/AboutTeamSection.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

const ABOUT_META = {
  title: "About Leap AI | AI Transformation Experts & Former C-Suite Leaders",
  description:
    "Learn how Leap AI helps organizations navigate AI transformation with proven frameworks, hands-on execution.",
};

export function About() {
  usePageMeta(ABOUT_META);

  return (
    <>
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutTrustSection />
      <AboutTeamSection />
    </>
  );
}
