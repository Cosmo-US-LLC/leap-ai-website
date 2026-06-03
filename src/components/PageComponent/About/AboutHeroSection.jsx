import heroGrid from "../../../assets/images/about/hero-grid.webp";
import heroImage from "../../../assets/images/about/hero-image.webp";
import { PrimaryCtaButton } from "../NewHome/PrimaryCtaButton.jsx";

function scrollToTeam() {
  document.getElementById("team")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#151515] pt-28 lg:pt-[162px]">
      <div className="about-hero-gradient" aria-hidden />
      <img
        src={heroGrid}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-[171px] -top-[103px] z-[1] h-auto w-[min(606px,80vw)] max-w-none opacity-90"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 px-4 pb-16 md:px-0 lg:flex-row lg:gap-20 lg:pb-20">
        <div className="flex w-full flex-1 flex-col gap-5">
          <div className="flex flex-col gap-4">
            <h1 className="about-hero-title">
              The technology
              <br />
              <span>
                is ready.{" "}
                <span className="about-hero-title-accent">Is your business?</span>
              </span>
            </h1>
            <p className="max-w-[600px] text-base leading-6 text-[#dbdbdb]">
              The world doesn&apos;t need another chatbot. It needs businesses that can think,
              learn, and adapt. At Leap AI, we don&apos;t just deploy software; we build Adaptive
              Organizations. We bridge the gap between the exponential speed of AI and the
              operational reality of your company, ensuring you don&apos;t just survive the
              transition—you lead it.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <PrimaryCtaButton>Schedule Your Free Consultation</PrimaryCtaButton>
            <button
              type="button"
              onClick={scrollToTeam}
              className="nh-btn inline-flex cursor-pointer items-center rounded-full border border-[rgba(32,20,99,0.2)] bg-white px-[24.8px] py-[15px] text-[#201463] transition hover:bg-[#f2f6fb]"
            >
              Meet the Team
            </button>
          </div>
        </div>

        <div className="relative h-[360px] w-full shrink-0 overflow-hidden rounded-[32px] shadow-[0_2px_4px_0px_rgba(20,30,70,0.06),0_24px_48px_-12px_rgba(20,30,70,0.16)] sm:h-[440px] lg:h-[500px] lg:w-[533px]">
          <img
            src={heroImage}
            alt="Professional leader reviewing strategy outdoors"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
