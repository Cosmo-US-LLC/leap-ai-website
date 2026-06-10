import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import testimonial1 from "../../../assets/images/new-home/laurent-groux.webp";
import testimonial2 from "../../../assets/images/new-home/mikerobillard.webp";
import testimonial3 from "../../../assets/images/new-home/vmorin.webp";
import quoteIcon from "../../../assets/images/new-home/icons/quote.svg";
import arrowIcon from "../../../assets/images/new-home/icons/arrow-right.svg";
import { SectionHeading } from "./SectionHeading.jsx";

const TESTIMONIAL_AVATARS = [testimonial1, testimonial2, testimonial3];

const AUTO_SCROLL_INTERVAL_MS = 5000;

function TestimonialContent({ testimonial, slideKey, variant }) {
  const isDesktop = variant === "desktop";

  return (
    <div
      key={slideKey}
      className={`nh-testimonial-enter flex w-full flex-col gap-12 ${
        isDesktop ? "max-w-[824px]" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        <img src={quoteIcon} alt="" className="h-8 w-10" aria-hidden />
        <blockquote className="nh-quote text-center">{testimonial.quote}</blockquote>
      </div>

      <div
        className={`flex items-center justify-center ${
          isDesktop ? "gap-2.5" : "gap-3.5"
        }`}
      >
        <img
          src={testimonial.avatar}
          alt=""
          className={`shrink-0 rounded-full object-cover ${
            isDesktop ? "h-16 w-16" : "h-14 w-14"
          }`}
        />
        <div className="flex flex-col gap-[3px] text-left">
          <p className="nh-quote-name">{testimonial.name}</p>
          <p className="nh-quote-role">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialNavButton({ onClick, label, rotate, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex shrink-0 items-center cursor-pointer justify-center rounded-2xl border border-black transition hover:bg-[#f2f6fb] max-lg:h-8 max-lg:w-8 lg:h-12 lg:w-12 lg:rounded-3xl ${className}`}
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

function TestimonialDots({ count, index, onSelect, goToLabel, className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-2 lg:gap-2 ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect(i)}
          className={`rounded-full transition-all cursor-pointer ${
            i === index
              ? "bg-[#201463] max-lg:h-2 max-lg:w-6 lg:h-3 lg:w-3"
              : "h-2 w-2 bg-[#dde4f0] lg:h-3 lg:w-3"
          }`}
          aria-label={goToLabel(i + 1)}
          aria-current={i === index ? "true" : undefined}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { t } = useTranslation("home");
  const testimonials = useMemo(
    () =>
      t("testimonials.items", { returnObjects: true }).map((item, index) => ({
        ...item,
        avatar: TESTIMONIAL_AVATARS[index],
      })),
    [t],
  );
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = testimonials[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (paused) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
    }, AUTO_SCROLL_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [paused, index, testimonials.length]);

  return (
    <section
      className="bg-white px-5 py-12 max-lg:px-5 max-lg:py-12 lg:px-8 lg:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          bold={t("testimonials.headingBold")}
          muted={t("testimonials.headingMuted")}
          subtitle={t("testimonials.subtitle")}
          size="large"
          subtitleRelaxed
          className="mb-8 max-lg:mb-0 lg:mb-12"
        />

        <div className="mx-auto flex w-full max-w-[350px] flex-col items-center gap-12 overflow-hidden rounded-[20px] py-12 lg:hidden">
          <TestimonialContent
            testimonial={current}
            slideKey={index}
            variant="mobile"
          />

          <div className="flex items-center gap-6">
            <TestimonialNavButton
              onClick={prev}
              label={t("testimonials.prev")}
              rotate
            />
            <TestimonialDots
              count={testimonials.length}
              index={index}
              onSelect={setIndex}
              goToLabel={(n) => t("testimonials.goTo", { n })}
            />
            <TestimonialNavButton
              onClick={next}
              label={t("testimonials.next")}
              rotate={false}
            />
          </div>
        </div>

        <div className="hidden w-full items-center lg:flex">
          <TestimonialNavButton
            onClick={prev}
            label={t("testimonials.prev")}
            rotate
          />

          <div className="flex min-w-0 flex-1 flex-col items-center gap-14 overflow-hidden rounded-[20px] px-[180px] py-6">
            <TestimonialContent
              testimonial={current}
              slideKey={index}
              variant="desktop"
            />

            <TestimonialDots
              count={testimonials.length}
              index={index}
              onSelect={setIndex}
              goToLabel={(n) => t("testimonials.goTo", { n })}
            />
          </div>

          <TestimonialNavButton
            onClick={next}
            label={t("testimonials.next")}
            rotate={false}
          />
        </div>
      </div>
    </section>
  );
}
