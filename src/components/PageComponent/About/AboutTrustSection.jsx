import partnerCtaGrid from "../../../assets/images/new-home/partner-cta-grid.webp";
import partnerAbout from "../../../assets/images/about/trust-photo.webp";
import { PrimaryCtaButton } from "../NewHome/PrimaryCtaButton.jsx";

export default function AboutTrustSection({
  titleBold = "A partner you ",
  titleMuted = "can trust.",
  description = "We help visionary leaders navigate the AI transformation without the complexity, the risk, or the guesswork. Stop running random pilot projects and start building a business that thinks, learns, and optimizes itself.",
  photo = partnerAbout,
  photoAlt = "Leap 41 team collaborating around a table",
  button = <PrimaryCtaButton>Book a Free Consultation Call</PrimaryCtaButton>,
  cardClassName = "",
}) {
  return (
    <section className="bg-white px-5 py-6 lg:px-20 lg:py-12">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
        <div
          className={`flex w-full shrink-0 flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#12174b] px-6 py-16 text-center lg:basis-[800px] lg:px-[72px] lg:py-0 ${cardClassName}`}
          style={{ backgroundImage: `url(${partnerCtaGrid})`, backgroundSize: "cover", backgroundPosition: "top" }}
        >
          <div className="flex w-full max-w-[636px] flex-col items-center gap-8 lg:gap-6">
            <div className="flex w-full flex-col items-center gap-4">
              <h2 className="about-trust-heading text-center text-[#f2f6fb]">
                <span className="font-bold">{titleBold}</span>
                <span className="font-normal text-[rgba(242,246,251,0.7)]">{titleMuted}</span>
              </h2>
              <p className="max-w-[636px] text-center text-base leading-6 text-[#f2f6fb]">
                {description}
              </p>
            </div>
            {button}
          </div>
        </div>

        <div className="relative h-[340px] w-full shrink-0 overflow-hidden rounded-2xl lg:min-h-0 lg:flex-1">
          <img
            src={photo}
            alt={photoAlt}
            className="absolute inset-0 h-full w-full object-cover lg:object-cover lg:object-left"
          />
        </div>
      </div>
    </section>
  );
}
