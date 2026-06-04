import partnerCtaGrid from "../../../assets/images/new-home/partner-cta-grid.webp";
import partnerAbout from "../../../assets/images/about/trust-photo.webp";
import { PrimaryCtaButton } from "../NewHome/PrimaryCtaButton.jsx";

export default function AboutTrustSection() {
  return (
    <section className="bg-white px-5 py-6 lg:px-20 lg:py-12">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
        <div className="relative flex w-full shrink-0 flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#12174b] px-6 py-16 text-center max-lg:gap-8 max-lg:px-6 max-lg:py-16 lg:basis-[880px] lg:gap-6 lg:px-[72px] lg:py-0">
          <img
            src={partnerCtaGrid}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="relative flex w-full max-w-[636px] flex-col items-center gap-8 lg:gap-6">
            <div className="flex w-full flex-col items-center gap-4">
              <h2 className="about-trust-heading text-center text-[#f2f6fb]">
                <span className="font-bold">A partner you </span>
                <span className="font-normal text-[rgba(242,246,251,0.7)]">can trust.</span>
              </h2>
              <p className="max-w-[636px] text-center text-base leading-6 text-[#f2f6fb]">
                We help visionary leaders navigate the AI transformation without the complexity,
                the risk, or the guesswork. Stop running random pilot projects and start building
                a business that thinks, learns, and optimizes itself.
              </p>
            </div>
            <PrimaryCtaButton className="about-trust-cta shrink-0 lg:!px-6 lg:!py-3.5 lg:text-sm lg:font-semibold lg:[&>span:last-child]:!size-6 lg:[&>span:last-child]:!rounded-xl">
              <span className="lg:hidden">Schedule Your Free Consultation</span>
              <span className="hidden lg:inline">Book a Free Consultation Call</span>
            </PrimaryCtaButton>
          </div>
        </div>

        <div className="relative h-[340px] w-full shrink-0 overflow-hidden rounded-2xl lg:min-h-0 lg:flex-1">
          <img
            src={partnerAbout}
            alt="Leap 41 team collaborating around a table"
            className="absolute inset-0 h-full w-full object-cover lg:object-left"
          />
        </div>
      </div>
    </section>
  );
}
