import { useState } from "react";
import testimonialAvatar from "../../../assets/images/new-home/testimonial-avatar.webp";
import quoteIcon from "../../../assets/images/new-home/icons/quote.svg";
import arrowIcon from "../../../assets/images/new-home/icons/arrow-right.svg";
import { SectionHeading } from "./SectionHeading.jsx";

const TESTIMONIALS = [
  {
    quote:
      "We finally have a real AI roadmap, sequenced by priority, with KPIs we can defend in the boardroom.",
    name: "David Okafor",
    role: "President - Helio Logistics",
    avatar: testimonialAvatar,
  },
  {
    quote:
      "Leap 41 helped us move from scattered pilots to a single operating model our board could approve in weeks, not quarters.",
    name: "Sarah Mitchell",
    role: "COO - Northline Manufacturing",
    avatar: testimonialAvatar,
  },
  {
    quote:
      "They speak executive language and still ship production systems. That combination is rare.",
    name: "James Chen",
    role: "CEO - Meridian Health Partners",
    avatar: testimonialAvatar,
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          bold="From Followers to"
          muted="Industry Leaders"
          subtitle="Organizations that went from following trends to setting them. Hear what they have to say about Leap AI."
          size="large"
          subtitleRelaxed
          className="mb-12"
        />

        <div className="flex items-center gap-4 md:gap-8">
          <button
            type="button"s
            onClick={prev}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl border border-black transition hover:bg-[#f2f6fb]"
            aria-label="Previous testimonial"
          >
            <img src={arrowIcon} alt="" className="h-6 w-6 rotate-180" aria-hidden />
          </button>

          <div className="flex flex-1 flex-col items-center rounded-[20px] px-4 py-6 md:px-16">
            <img src={quoteIcon} alt="" className="mb-8 h-8 w-10" aria-hidden />
            <blockquote className="nh-quote max-w-[824px] text-center">
              {current.quote}
            </blockquote>
            <div className="mt-12 flex items-center gap-3">
              <img
                src={current.avatar}
                alt=""
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="nh-quote-name">{current.name}</p>
                <p className="nh-quote-role">{current.role}</p>
              </div>
            </div>
            <div className="mt-10 flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-3 w-3 rounded-full transition ${
                    i === index ? "bg-[#201463]" : "bg-[#dde4f0]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl border border-black transition hover:bg-[#f2f6fb]"
            aria-label="Next testimonial"
          >
            <img src={arrowIcon} alt="" className="h-6 w-6" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}
