import partnerCtaGrid from "../../../assets/images/new-home/partner-cta-grid.webp";
import partnerAbout from "../../../assets/images/about/trust-photo.webp";
import { PrimaryCtaButton } from "../NewHome/PrimaryCtaButton.jsx";

export default function AboutTrustSection() {
  return (
    <section className="bg-white px-4 py-12 md:px-8 lg:py-12">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-stretch">
        <div className="relative flex w-full shrink-0 grow-0 flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#12174b] px-8 py-12 text-center lg:basis-[870px] lg:px-[72px] lg:py-16">
          <img
            src={partnerCtaGrid}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover object-top"
          />
          <div className="relative flex w-full max-w-[636px] flex-col items-center gap-6">
            <div className="flex w-full flex-col items-center gap-4">
              <h2 className="nh-partner-heading text-center">
                <span className="font-bold">A partner you </span>
                <span className="nh-partner-heading-muted">can trust.</span>
              </h2>
              <p className="nh-partner-body max-w-[636px] text-center">
                We help visionary leaders navigate the AI transformation without the complexity, the risk, or the guesswork. Stop running random pilot projects and start building a business that thinks, learns, and optimizes itself.
              </p>
            </div>
            <PrimaryCtaButton>
              Book a Free Consultation Call
            </PrimaryCtaButton>
          </div>
        </div>

        <div className="relative min-h-[260px] min-w-0 flex-1 overflow-hidden rounded-2xl lg:min-h-0">
          <img
            src={partnerAbout}
            alt="Leap 41 founders consulting with a client"
            className="absolute inset-0 h-full w-full object-contain object-left"
          />
        </div>
      </div>
    </section>
  );
}
