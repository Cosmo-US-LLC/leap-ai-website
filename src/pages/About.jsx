import AboutHeroSection from "../components/PageComponent/About/AboutHeroSection.jsx";
import AboutMissionSection from "../components/PageComponent/About/AboutMissionSection.jsx";
import AboutTrustSection from "../components/PageComponent/About/AboutTrustSection.jsx";
import AboutTeamSection from "../components/PageComponent/About/AboutTeamSection.jsx";
import { usePageMetaI18n } from "../hooks/usePageMetaI18n.js";

export function About() {
  usePageMetaI18n("about");

  return (
    <>
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutTrustSection />
      <AboutTeamSection />
    </>
  );
}
