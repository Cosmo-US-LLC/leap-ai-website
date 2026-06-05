import { useCallback, useEffect, useRef, useState } from "react";
import teamGregory from "../../../assets/images/about/team-gregory.webp";
import teamBenjamin from "../../../assets/images/about/team-benjamin.webp";
import reportPdf from "../../../assets/pdf/7 Pillars Report.pdf";
import { FREE_CONSULTATION_URL } from "../../../lib/newHomeLinks.js";
import { ArrowRightIcon } from "../NewHome/icons/ArrowRightIcon.jsx";

const AUTHORS = [
  {
    name: "Gregory van Duyse",
    role: "CEO & Co-founder",
    bio: "Serial entrepreneur and visionary CEO. Greg leverages deep leadership experience to help businesses gain a decisive strategic advantage, transforming cutting-edge AI capabilities into tangible growth and operational excellence.",
    image: teamGregory,
  },
  {
    name: "Benjamin Gonzalez",
    role: "CTO & Co-founder · M.Sc.",
    bio: "With a Master's in Data Science and seasoned CTO leadership, Ben bridges the gap between deep technical engineering and strategic business goals. He translates complex technology into clear, high-impact value.",
    image: teamBenjamin,
  },
];

function AuthorCard({ author, className = "" }) {
  return (
    <article
      className={`flex shrink-0 flex-col gap-6 rounded-2xl border border-[#eee] bg-[#fafcfe] p-[25px] lg:gap-6 ${className}`}
    >
      <img
        src={author.image}
        alt={author.name}
        className="h-20 w-20 rounded-full object-cover lg:h-24 lg:w-24"
        loading="lazy"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3
            className="text-xl font-extrabold leading-7 tracking-[-0.5px] text-[#201463]"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            {author.name}
          </h3>
          <p className="text-sm font-bold leading-5 text-[#18a3e6]">{author.role}</p>
        </div>
        <p className="text-sm leading-[22.75px] text-[#4e546c]">{author.bio}</p>
      </div>
    </article>
  );
}

export default function MethodologyAuthorsSection() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current;
    const card = track?.children[index];
    if (!card) return;
    const next = Math.max(0, Math.min(index, AUTHORS.length - 1));
    setActiveIndex(next);
    card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const cards = Array.from(track.children);
      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(cardCenter - trackCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-white px-5 py-12 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12">
        {/* About Authors */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-12">
          <div className="flex flex-col gap-4 lg:max-w-[468px] lg:shrink-0 lg:gap-5">
            <h2 className="text-[40px] font-normal leading-[46px] text-[#201463] lg:text-[56px] lg:leading-[58px]">
              <span className="font-bold">About </span>
              <span className="text-[rgba(32,20,99,0.7)]">Authors</span>
            </h2>
            <p className="text-base leading-6 text-[#4e546c]">
              This framework was built by practitioners, not theorists. As former executives, we
              don&apos;t just advise , we&apos;ve sat in your seat.
            </p>
          </div>

          {/* Mobile carousel */}
          <div className="flex flex-col items-center gap-6 lg:hidden">
            <div
              ref={trackRef}
              className="-mx-5 flex w-[calc(100%+40px)] gap-3.5 overflow-x-auto scroll-smooth px-5 [scroll-snap-type:x_mandatory] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {AUTHORS.map((author) => (
                <AuthorCard
                  key={author.name}
                  author={author}
                  className="w-[340px] snap-center"
                />
              ))}
            </div>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => scrollToIndex(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="flex size-8 items-center justify-center rounded-2xl border border-black transition enabled:hover:bg-black/5 disabled:opacity-40"
                aria-label="Previous author"
              >
                <ArrowRightIcon className="h-4 w-4 rotate-180" dark />
              </button>

              <div className="flex items-center gap-2" role="tablist" aria-label="Authors">
                {AUTHORS.map((author, i) => (
                  <button
                    key={author.name}
                    type="button"
                    role="tab"
                    aria-selected={i === activeIndex}
                    aria-label={`View ${author.name}`}
                    onClick={() => scrollToIndex(i)}
                    className={`h-2 rounded-full transition ${
                      i === activeIndex ? "w-6 bg-[#201463]" : "w-2 bg-[#cad1dd]"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollToIndex(activeIndex + 1)}
                disabled={activeIndex === AUTHORS.length - 1}
                className="flex size-8 items-center justify-center rounded-2xl border border-black transition enabled:hover:bg-black/5 disabled:opacity-40"
                aria-label="Next author"
              >
                <ArrowRightIcon className="h-4 w-4" dark />
              </button>
            </div>
          </div>

          {/* Desktop cards */}
          <div className="hidden min-w-0 flex-1 gap-6 lg:flex">
            {AUTHORS.map((author) => (
              <AuthorCard key={author.name} author={author} className="min-w-0 flex-1" />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex w-full flex-col items-center gap-6 rounded-[20px] bg-[#12174b] px-5 py-12 lg:gap-6 lg:px-16 lg:py-16">
          <div className="flex w-full max-w-[1100px] flex-col gap-4 text-center lg:px-[150px]">
            <h2 className="text-[40px] font-normal leading-[46px] text-[#f2f6fb] lg:text-[52px] lg:leading-[58px]">
              <span className="font-bold">Want </span>
              <span className="text-[rgba(242,246,251,0.7)]">the complete framework?</span>
            </h2>
            <p className="text-base leading-6 text-[rgba(242,246,251,0.75)]">
              The full report includes detailed strategic actions for every pillar, the complete
              5-step implementation methodology, ROI stress-testing frameworks, and a roadmap for
              building your AI-enhanced organization.
            </p>
          </div>

          <div className="flex w-full max-w-[600px] flex-col items-stretch gap-3 lg:max-w-none lg:flex-row lg:items-center lg:justify-center lg:gap-3">
            <a
              href={reportPdf}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#18a3e6] bg-[#18a3e6] px-6 py-[15px] text-sm font-semibold capitalize text-white no-underline transition-opacity hover:opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
              >
                <path d="M8 10V2" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M14 10V12.6667C14 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.66663 6.66675L7.99996 10.0001L11.3333 6.66675"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download the 7 Pillars Report
            </a>

            <a
              href={FREE_CONSULTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-[rgba(32,20,99,0.2)] px-6 py-[15px] text-sm font-semibold text-[#f2f6fb] no-underline transition-opacity hover:opacity-90"
            >
              Schedule Your Free Consultation
              <span className="flex h-6 w-6 items-center justify-center rounded-xl bg-white text-[#201463]">
                <ArrowRightIcon className="h-3 w-3" dark />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
