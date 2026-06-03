import heroGrid from "../../../assets/images/about/hero-grid.webp";
import heroImage from "../../../assets/images/about/hero-image.webp";
import { PrimaryCtaButton } from "../NewHome/PrimaryCtaButton.jsx";

function scrollToTeam() {
  document.getElementById("team")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#151515] pt-[124px] pb-12 lg:pt-[162px] lg:pb-20">
      <div className="about-hero-gradient" aria-hidden />
      <img
        src={heroGrid}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-5 top-0 z-[1] h-auto w-[min(606px,120vw)] max-w-none opacity-90 lg:-left-[171px] lg:-top-[103px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-5 lg:flex-row lg:items-center lg:gap-20 lg:px-0">
        <div className="flex w-full flex-1 flex-col gap-5">
          <div className="flex flex-col gap-4 lg:gap-4">
            <h1 className="about-hero-title">
              The technology
              <br className="hidden sm:block" />
              <span>
                {" "}
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
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center lg:gap-4">
            <PrimaryCtaButton className="w-full justify-center sm:w-auto">
              Schedule Your Free Consultation
            </PrimaryCtaButton>
            <button
              type="button"
              onClick={scrollToTeam}
              className="nh-btn inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-[rgba(32,20,99,0.2)] bg-white px-[21px] py-[15px] text-[#201463] transition hover:bg-[#f2f6fb] sm:w-auto lg:px-[24.8px]"
            >
              Meet the Team
            </button>
          </div>
        </div>

        <div className="relative h-[340px] w-full shrink-0 overflow-hidden rounded-[24px] shadow-[0_2px_4px_0px_rgba(20,30,70,0.06),0_24px_48px_-12px_rgba(20,30,70,0.16)] lg:h-[500px] lg:w-[533px] lg:rounded-[32px]">
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
