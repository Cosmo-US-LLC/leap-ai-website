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

function TestimonialNavButton({ onClick, label, rotate, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex shrink-0 items-center justify-center rounded-2xl border border-black transition hover:bg-[#f2f6fb] max-lg:h-8 max-lg:w-8 lg:h-12 lg:w-12 lg:rounded-3xl ${className}`}
      aria-label={label}
    >
      <img
        src={arrowIcon}
        alt=""
        className={`h-4 w-4 lg:h-6 lg:w-6 ${rotate ? "rotate-180" : ""}`}
        aria-hidden
      />
    </button>
  );
}

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-white px-5 py-12 max-lg:px-5 max-lg:py-12 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          bold="From Followers to"
          muted="Industry Leaders"
          subtitle="Organizations that went from following trends to setting them. Hear what they have to say about Leap AI."
          size="large"
          subtitleRelaxed
          className="mb-8 max-lg:mb-12 lg:mb-12"
        />

        <div className="flex flex-col items-center max-lg:gap-12 lg:flex-row lg:items-center lg:gap-8">
          <TestimonialNavButton
            onClick={prev}
            label="Previous testimonial"
            rotate
            className="hidden lg:flex"
          />

          <div className="flex w-full max-w-[824px] flex-1 flex-col items-center rounded-[20px] px-4 max-lg:max-w-[350px] max-lg:gap-12 max-lg:py-12 lg:px-16 lg:py-6">
            <img src={quoteIcon} alt="" className="h-8 w-10" aria-hidden />
            <blockquote className="nh-quote text-center">{current.quote}</blockquote>
            <div className="flex items-center gap-3.5">
              <img
                src={current.avatar}
                alt=""
                className="h-14 w-14 rounded-full object-cover lg:h-16 lg:w-16"
              />
              <div className="text-left">
                <p className="nh-quote-name">{current.name}</p>
                <p className="nh-quote-role">{current.role}</p>
              </div>
            </div>
            <div className="hidden gap-2 lg:flex lg:mt-10">
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

          <TestimonialNavButton
            onClick={next}
            label="Next testimonial"
            rotate={false}
            className="hidden lg:flex"
          />

          <div className="flex items-center gap-6 max-lg:flex lg:hidden">
            <TestimonialNavButton
              onClick={prev}
              label="Previous testimonial"
              rotate
            />
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full transition ${
                    i === index ? "bg-[#201463] w-6" : "bg-[#dde4f0]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <TestimonialNavButton
              onClick={next}
              label="Next testimonial"
              rotate={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
