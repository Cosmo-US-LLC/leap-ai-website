import heroEarthGrid from "../../../assets/images/new-home/hero-earth-grid.webp";
import heroVideo from "../../../assets/images/new-home/hero-video.webp";
import playIcon from "../../../assets/images/new-home/icons/play.svg";
import { PrimaryCtaButton } from "./PrimaryCtaButton.jsx";

function scrollToCaseStudies() {
  document.getElementById("case-studies")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-[#151515] max-lg:min-h-0 lg:h-[100dvh] lg:min-h-[100dvh]">
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
        className="pointer-events-none absolute left-1/2 z-[1] w-full -translate-x-1/2 object-cover object-bottom mix-blend-screen max-lg:bottom-0 max-lg:h-[213px] max-lg:opacity-50 lg:-bottom-10 lg:opacity-5"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col items-stretch gap-8 px-5 pb-12 pt-[124px] max-lg:justify-start lg:flex-row lg:items-center lg:justify-center lg:gap-20 lg:px-0 lg:pb-12 lg:pt-20">
        <div className="w-full flex-1 max-lg:max-w-none lg:max-w-[600px]">
          <h1 className="nh-hero-title max-lg:break-words">
            We make AI work
            <br className="hidden lg:block" />
            <span className="max-lg:before:content-['_'] lg:before:content-none">
              for{" "}
              <span className="nh-hero-title-accent">cost optimization</span>
            </span>
          </h1>
          <p className="nh-hero-body mt-4 max-w-[600px]">
            We help visionary leaders navigate the AI transformation without the
            complexity, the risk, or the guesswork, even if you feel overwhelmed,
            short on time, or unsure where to start.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 max-lg:gap-4 lg:mt-6">
            <PrimaryCtaButton className="home-hero-primary-cta">
              Schedule Your Free Consultation
            </PrimaryCtaButton>
            <button
              type="button"
              onClick={scrollToCaseStudies}
              className="home-hero-secondary-cta nh-btn nh-btn-cap inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-[rgba(32,20,99,0.2)] bg-white text-[#201463] transition hover:bg-[#f2f6fb]"
            >
              View case studies
            </button>
          </div>
        </div>

        <div className="relative w-full flex-1 max-lg:pt-0 lg:max-w-[600px] lg:pt-4">
          <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_48px_-12px_rgba(20,30,70,0.16)] max-lg:h-[480px] lg:rounded-[32px]">
            <img
              src={heroVideo}
              alt="Professional reviewing AI strategy on laptop"
              className="h-full w-full object-cover max-lg:min-h-[480px] lg:aspect-[750/740]"
            />
            <button
              type="button"
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[rgba(255,255,255,0.24)] bg-[rgba(0,0,0,0.1)] backdrop-blur-[20px] max-lg:h-14 max-lg:w-14 lg:h-[72px] lg:w-[72px]"
              aria-label="Play video"
            >
              <img
                src={playIcon}
                alt=""
                className="max-lg:h-9 max-lg:w-9 lg:h-11 lg:w-11"
                aria-hidden
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
