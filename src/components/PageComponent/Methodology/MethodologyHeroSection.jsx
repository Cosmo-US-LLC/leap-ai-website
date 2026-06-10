import { useTranslation } from "react-i18next";
import heroGrid from "../../../assets/images/about/hero-grid.webp";
import heroImage from "../../../assets/images/methodology/methodology-hero.webp";
import { PrimaryCtaButton } from "../NewHome/PrimaryCtaButton.jsx";
import reportPdf from "../../../assets/pdf/7 Pillars Report.pdf";

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M8 10.667L4.667 7.333M8 10.667L11.333 7.333M8 10.667V2.667M13.333 10.667v2A.667.667 0 0 1 12.666 14H3.333a.667.667 0 0 1-.666-.667v-2"
        stroke="#201463"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MethodologyHeroSection() {
  const { t } = useTranslation(["methodology", "common"]);

  return (
    <section className="meth-hero-section">
      <div className="meth-hero-gradient" aria-hidden />
      <img src={heroGrid} alt="" aria-hidden className="meth-hero-grid" />

      <div className="meth-hero-container">
        <div className="meth-hero-content">
          <div className="meth-hero-text-group">
            <h1 className="meth-hero-title">
              {t("methodology:hero.title")}{" "}
              <span className="meth-hero-title-accent">{t("methodology:hero.titleAccent")}</span>
            </h1>
            <p className="meth-hero-body">{t("methodology:hero.body")}</p>
          </div>

          <div className="meth-hero-buttons">
            <PrimaryCtaButton className=" justify-center sm:w-auto">
              {t("common:cta.scheduleConsultation")}
            </PrimaryCtaButton>
            <a href={reportPdf} download className="meth-hero-download-btn">
              <DownloadIcon />
              {t("methodology:hero.downloadReport")}
            </a>
          </div>
        </div>

        <div className="meth-hero-image-wrap">
          <img
            src={heroImage}
            alt={t("methodology:hero.imageAlt")}
            className="meth-hero-image"
          />
        </div>
      </div>
    </section>
  );
}
