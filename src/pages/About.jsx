import AboutHeroSection from "../components/PageComponent/About/AboutHeroSection.jsx";
import AboutMissionSection from "../components/PageComponent/About/AboutMissionSection.jsx";
import AboutTrustSection from "../components/PageComponent/About/AboutTrustSection.jsx";
import AboutTeamSection from "../components/PageComponent/About/AboutTeamSection.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

const ABOUT_META = {
  title: "About Us | Leap 41 AI Solutions",
  description:
    "Meet the Leap 41 team and learn how we help businesses build Adaptive Organizations—bridging AI innovation with operational reality through strategy, implementation, and trust.",
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
