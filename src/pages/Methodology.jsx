import { useTranslation } from "react-i18next";
import "../assets/style/methodology.css";
import { usePageMetaI18n } from "../hooks/usePageMetaI18n.js";
import MethodologyHeroSection from "../components/PageComponent/Methodology/MethodologyHeroSection.jsx";
import MethodologyChallengeSection from "../components/PageComponent/Methodology/MethodologyChallengeSection.jsx";
import MethodologyPillarsSection from "../components/PageComponent/Methodology/MethodologyPillarsSection.jsx";
import MethodologyValueSection from "../components/PageComponent/Methodology/MethodologyValueSection.jsx";
import MethodologyRoadmapSection from "../components/PageComponent/Methodology/MethodologyRoadmapSection.jsx";
import MethodologyAuthorsSection from "../components/PageComponent/Methodology/MethodologyAuthorsSection.jsx";
import AboutTrustSection from "../components/PageComponent/About/AboutTrustSection.jsx";
import reportPhoto from "../assets/images/methodology/download-report-section/rectangle_27.webp";
import reportPdf from "../assets/pdf/7 Pillars Report.pdf";

function DownloadReportButton() {
  const { t } = useTranslation("methodology");

  return (
    <a
      href={reportPdf}
      download
      className="inline-flex items-center gap-2 rounded-full bg-[#18a3e6] px-6 py-[14px] text-sm font-semibold text-white no-underline transition-opacity hover:opacity-90"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M8 10V2" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 10V12.6667C14 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.66663 6.66675L7.99996 10.0001L11.3333 6.66675" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {t("trustReport.downloadFullReport")}
    </a>
  );
}

export default function Methodology() {
  usePageMetaI18n("methodology");
  const { t } = useTranslation("methodology");

  return (
    <>
      <MethodologyHeroSection />
      <MethodologyChallengeSection />
      <MethodologyPillarsSection />
      <MethodologyValueSection />
      <AboutTrustSection
        titleBold={t("trustReport.titleBold")}
        titleMuted={t("trustReport.titleMuted")}
        description={t("trustReport.description")}
        photo={reportPhoto}
        photoAlt={t("trustReport.photoAlt")}
        button={<DownloadReportButton />}
        cardClassName="lg:py-[100px]"
      />
      <MethodologyRoadmapSection />
      <MethodologyAuthorsSection />
    </>
  );
}
