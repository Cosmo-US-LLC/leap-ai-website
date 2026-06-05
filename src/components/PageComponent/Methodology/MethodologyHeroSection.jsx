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
  return (
    <section className="meth-hero-section">
      <div className="meth-hero-gradient" aria-hidden />
      <img
        src={heroGrid}
        alt=""
        aria-hidden
        className="meth-hero-grid"
      />

      <div className="meth-hero-container">
        <div className="meth-hero-content">
          <div className="meth-hero-text-group">
            <h1 className="meth-hero-title">
              Stop guessing.{" "}
              <span className="meth-hero-title-accent">Start leading.</span>
            </h1>
            <p className="meth-hero-body">
              Most companies are buying AI tools and hoping for the best.
              That&apos;s not a strategy, it&apos;s a gamble. We built a proven
              framework that turns AI from an expensive experiment into your
              greatest competitive advantage.
            </p>
          </div>

          <div className="meth-hero-buttons">
            <PrimaryCtaButton className=" justify-center sm:w-auto">
              Schedule Your Free Consultation
            </PrimaryCtaButton>
            <a
              href={reportPdf}
              download
              className="meth-hero-download-btn"
            >
              <DownloadIcon />
              Download report
            </a>
          </div>
        </div>

        <div className="meth-hero-image-wrap">
          <img
            src={heroImage}
            alt="Team collaborating on AI strategy"
            className="meth-hero-image"
          />
        </div>
      </div>
    </section>
  );
}
