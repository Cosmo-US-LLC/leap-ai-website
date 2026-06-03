import { Link } from "react-router-dom";
import heroEarthGrid from "../../../assets/images/new-home/hero-earth-grid.webp";
import heroVideo from "../../../assets/images/new-home/hero-video.webp";
import playIcon from "../../../assets/images/new-home/icons/play.svg";
import { PrimaryCtaButton } from "./PrimaryCtaButton.jsx";

export default function HeroSection() {
  return (
    <section className="relative flex h-[100dvh] min-h-[100dvh] flex-col overflow-hidden bg-[#151515]">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(61,81,160,0.5) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 88% 40%, rgba(143,219,255,0.4) 0%, transparent 60%), linear-gradient(180deg, rgba(61,81,160,0.18) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <img
        src={heroEarthGrid}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 z-[1] w-full  -translate-x-1/2 opacity-5 object-cover object-bottom mix-blend-screen"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col items-center justify-center gap-10 px-4 pb-10 pt-20 md:flex-row md:gap-20 md:px-0 md:pb-12">
        <div className="w-full flex-1 md:max-w-[600px]">
          <h1 className="nh-hero-title">
            We make AI work
            <br />
            for <span className="nh-hero-title-accent">cost optimization</span>
          </h1>
          <p className="nh-hero-body mt-4 max-w-[600px]">
            We help visionary leaders navigate the AI transformation without the
            complexity, the risk, or the guesswork, even if you feel overwhelmed,
            short on time, or unsure where to start.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <PrimaryCtaButton>Schedule Your Free Consultation</PrimaryCtaButton>
            <Link
              to="#case-studies"
              className="nh-btn nh-btn-cap inline-flex items-center rounded-full border border-[rgba(32,20,99,0.2)] bg-white px-[24.8px] py-[15px] text-[#201463] transition hover:bg-[#f2f6fb]"
            >
              View case studies
            </Link>
          </div>
        </div>

        <div className="relative w-full flex-1 md:max-w-[600px] pt-4">
          <div className="relative overflow-hidden rounded-[32px] shadow-[0_24px_48px_-12px_rgba(20,30,70,0.16)]">
            <img
              src={heroVideo}
              alt="Professional reviewing AI strategy on laptop"
              className="aspect-[750/740] w-full object-cover"
            />
            <button
              type="button"
              className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[rgba(255,255,255,0.24)] bg-[rgba(0,0,0,0.1)] backdrop-blur-[20px]"
              aria-label="Play video"
            >
              <img src={playIcon} alt="" className="h-11 w-11" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
