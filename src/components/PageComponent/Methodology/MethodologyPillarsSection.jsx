import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FREE_CONSULTATION_URL } from "../../../lib/newHomeLinks.js";

import arrowActiveIcon from "../../../assets/icons/pillars/arrow-active.svg";
import arrowInactiveIcon from "../../../assets/icons/pillars/arrow-inactive.svg";
import ideaIcon from "../../../assets/icons/pillars/idea.svg";
import usersIcon from "../../../assets/icons/pillars/users.svg";
import dataIcon from "../../../assets/icons/pillars/data.svg";
import goalsIcon from "../../../assets/icons/pillars/goals.svg";
import ratingIcon from "../../../assets/icons/pillars/rating.svg";
import chartIcon from "../../../assets/icons/pillars/chart.svg";
import rocketIcon from "../../../assets/icons/pillars/rocket.svg";
import checkIcon from "../../../assets/icons/pillars/check.svg";
import arrowBlackIcon from "../../../assets/icons/pillars/arrow-black.svg";
import arrowNavyIcon from "../../../assets/icons/pillars/arrow-navy.svg";

import pillar01Img from "../../../assets/images/methodology/pillars/pillar-01.webp";
import pillar02Img from "../../../assets/images/methodology/pillars/pillar-02.webp";
import pillar03Img from "../../../assets/images/methodology/pillars/pillar-03.webp";
import pillar04Img from "../../../assets/images/methodology/pillars/pillar-04.webp";
import pillar05Img from "../../../assets/images/methodology/pillars/pillar-05.webp";
import pillar06Img from "../../../assets/images/methodology/pillars/pillar-06.webp";
import pillar07Img from "../../../assets/images/methodology/pillars/pillar-07.webp";

const PILLAR_IDS = ["01", "02", "03", "04", "05", "06", "07"];

const PILLAR_ASSETS = {
  "01": { icon: ideaIcon, image: pillar01Img },
  "02": { icon: usersIcon, image: pillar02Img },
  "03": { icon: dataIcon, image: pillar03Img },
  "04": { icon: goalsIcon, image: pillar04Img },
  "05": { icon: ratingIcon, image: pillar05Img },
  "06": { icon: chartIcon, image: pillar06Img },
  "07": { icon: rocketIcon, image: pillar07Img },
};

const MOBILE_TAB_TRANSITION =
  "max-lg:transition-all max-lg:duration-300 max-lg:ease-in-out motion-reduce:max-lg:transition-none";

function PillarTabButton({ pillar, isActive, onClick, layout }) {
  const isMobile = layout === "mobile";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive ? "true" : undefined}
      className={[
        "flex shrink-0 cursor-pointer items-center text-left snap-center",
        isMobile
          ? `w-[320px] gap-3.5 rounded-xl p-3 ${MOBILE_TAB_TRANSITION}`
          : "w-full gap-6 rounded-xl px-4 py-3 transition-colors",
        isActive ? "bg-[#12174b]" : "bg-white hover:bg-[#f0f4fa]",
      ].join(" ")}
    >
      <span
        className={[
          "flex h-9 w-9 shrink-0 items-center justify-center text-xs font-bold tracking-[0.6px]",
          isMobile ? MOBILE_TAB_TRANSITION : "",
          isActive
            ? "rounded-[4px] bg-[#18a3e6] text-[#f2f6fb]"
            : "rounded-lg bg-[#f5f8fc] text-[#38393f]",
        ].join(" ")}
      >
        {pillar.id}
      </span>

      <span className={`flex min-w-0 flex-1 flex-col ${isMobile ? "gap-1" : "gap-1"}`}>
        <span
          className={[
            "block font-medium uppercase opacity-70",
            isMobile ? `text-xs ${MOBILE_TAB_TRANSITION}` : "text-[11px] tracking-wide",
            isActive ? "text-[#f2f6fb]" : "text-[rgba(32,20,99,0.8)]",
          ].join(" ")}
        >
          {pillar.category}
        </span>
        <span
          className={[
            "block font-bold leading-[18px]",
            isMobile ? `text-sm ${MOBILE_TAB_TRANSITION}` : "text-[13px]",
            isActive ? "text-[#f2f6fb]" : "text-[#404040]",
          ].join(" ")}
        >
          {pillar.title}
        </span>
      </span>

      {isMobile ? (
        <span className="relative h-5 w-5 shrink-0" aria-hidden>
          <img
            src={arrowInactiveIcon}
            alt=""
            className={[
              "absolute inset-0 h-5 w-5 rotate-90 transition-all duration-300 ease-in-out motion-reduce:transition-none",
              isActive ? "opacity-0 scale-75" : "opacity-100 scale-100",
            ].join(" ")}
          />
          <img
            src={arrowActiveIcon}
            alt=""
            className={[
              "absolute inset-0 h-5 w-5 -rotate-90 transition-all duration-300 ease-in-out motion-reduce:transition-none",
              isActive ? "opacity-100 scale-100" : "opacity-0 scale-75",
            ].join(" ")}
          />
        </span>
      ) : (
        <img
          src={isActive ? arrowActiveIcon : arrowInactiveIcon}
          alt=""
          aria-hidden
          className="h-5 w-5 shrink-0"
        />
      )}
    </button>
  );
}

function getCenteredTabIndex(track) {
  const tabs = Array.from(track.children);
  const trackCenter = track.scrollLeft + track.clientWidth / 2;
  let closest = 0;
  let minDist = Infinity;

  tabs.forEach((tab, index) => {
    const tabCenter = tab.offsetLeft + tab.offsetWidth / 2;
    const dist = Math.abs(tabCenter - trackCenter);
    if (dist < minDist) {
      minDist = dist;
      closest = index;
    }
  });

  return closest;
}

function scrollMobileTabToIndex(track, index) {
  const tab = track.children[index];
  if (!tab) return;

  const scrollLeft = tab.offsetLeft - (track.clientWidth - tab.offsetWidth) / 2;
  track.scrollTo({ left: scrollLeft, behavior: "smooth" });
}

export default function MethodologyPillarsSection() {
  const { t } = useTranslation("methodology");
  const pillars = useMemo(
    () =>
      PILLAR_IDS.map((id) => {
        const item = t(`pillars.items.${id}`, { returnObjects: true });
        return { id, ...item, ...PILLAR_ASSETS[id] };
      }),
    [t],
  );

  const [active, setActive] = useState(0);
  const mobileTabTrackRef = useRef(null);
  const isProgrammaticScrollRef = useRef(false);
  const scrollEndTimerRef = useRef(null);
  const pillar = pillars[active];

  const setActivePillar = (index) => {
    setActive(index);

    const track = mobileTabTrackRef.current;
    if (!track || window.matchMedia("(min-width: 1024px)").matches) return;

    isProgrammaticScrollRef.current = true;
    requestAnimationFrame(() => scrollMobileTabToIndex(track, index));
  };

  const handleNext = () =>
    setActivePillar(active === pillars.length - 1 ? 0 : active + 1);

  useEffect(() => {
    const track = mobileTabTrackRef.current;
    if (!track) return undefined;

    const finishProgrammaticScroll = () => {
      if (scrollEndTimerRef.current) {
        window.clearTimeout(scrollEndTimerRef.current);
        scrollEndTimerRef.current = null;
      }
      isProgrammaticScrollRef.current = false;
    };

    const onScroll = () => {
      if (isProgrammaticScrollRef.current) {
        scrollEndTimerRef.current = window.setTimeout(finishProgrammaticScroll, 120);
        return;
      }

      setActive(getCenteredTabIndex(track));
    };

    const onScrollEnd = () => {
      if (isProgrammaticScrollRef.current) {
        finishProgrammaticScroll();
      } else {
        setActive(getCenteredTabIndex(track));
      }
    };

    const onUserScrollIntent = () => {
      isProgrammaticScrollRef.current = false;
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("scrollend", onScrollEnd);
    track.addEventListener("touchstart", onUserScrollIntent, { passive: true });
    track.addEventListener("pointerdown", onUserScrollIntent);

    return () => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("scrollend", onScrollEnd);
      track.removeEventListener("touchstart", onUserScrollIntent);
      track.removeEventListener("pointerdown", onUserScrollIntent);
      if (scrollEndTimerRef.current) {
        window.clearTimeout(scrollEndTimerRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-[#e7edf6] px-5 py-12 lg:p-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 lg:gap-14 ">

        {/* ── Header ── */}
        <div className="flex w-full flex-col items-center gap-4 text-center max-lg:gap-4 lg:max-w-[800px] lg:gap-5">
          <h2 className="w-full text-[40px] font-normal leading-[46px] text-[#201463] lg:text-[56px] lg:leading-[58px]">
            <span className="font-bold">{t("pillars.headingBold")}</span>
            <span className="font-normal text-[rgba(32,20,99,0.7)]">{t("pillars.headingMuted")}</span>
          </h2>
          <p className="text-base leading-6 text-[#4e546c] lg:leading-[26px]">{t("pillars.intro")}</p>
        </div>

        {/* Mobile: horizontal tab carousel (Figma 2108:1413) */}
        <nav
          ref={mobileTabTrackRef}
          className="-mx-5 flex w-[calc(100%+40px)] gap-3 overflow-x-auto scroll-smooth px-5 [scroll-snap-type:x_mandatory] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:hidden"
          aria-label={t("pillars.navAria")}
        >
          {pillars.map((p, i) => (
            <PillarTabButton
              key={p.id}
              pillar={p}
              isActive={active === i}
              onClick={() => setActivePillar(i)}
              layout="mobile"
            />
          ))}
        </nav>

        {/* ── Main Card ── */}
        <div className="w-full overflow-hidden rounded-[20px] border border-[#cad1dd] bg-[#fafcfe] p-px">
          <div className="flex w-full flex-col lg:flex-row">

            {/* Desktop: vertical tab list */}
            <nav
              className="hidden flex-col bg-[rgba(242,246,251,0.6)] p-3 lg:flex lg:w-[360px] lg:self-stretch"
              aria-label={t("pillars.navAria")}
            >
              <div className="flex flex-1 flex-col gap-y-2 sm:justify-between lg:h-full">
                {pillars.map((p, i) => (
                  <PillarTabButton
                    key={p.id}
                    pillar={p}
                    isActive={active === i}
                    onClick={() => setActive(i)}
                    layout="desktop"
                  />
                ))}
              </div>
            </nav>

            {/* Content panel */}
            <div className="flex min-w-0 flex-1 flex-col px-5 py-6 lg:p-12">
              <div className="flex w-full flex-col gap-5 lg:gap-6">

                {/* Progress row */}
                <div className="flex items-center gap-4 lg:gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#12174b] lg:h-12 lg:w-12 lg:rounded-xl">
                    <img
                      src={pillar.icon}
                      alt=""
                      aria-hidden
                      className="h-6 w-6 shrink-0"
                    />
                  </span>
                  <span className="text-sm font-semibold text-[#4e546c]">
                    {t("pillars.progress", { current: active + 1 })}
                  </span>
                </div>

                {/* Body — stacked mobile, side-by-side desktop */}
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">

                  {/* Text column */}
                  <div className="flex min-w-0 flex-1 flex-col gap-3">
                    <h3
                      className="text-xl font-bold leading-7 text-[#201463] lg:text-2xl lg:leading-8"
                      style={{ fontFamily: "var(--font-nunito)" }}
                    >
                      {pillar.title}
                    </h3>

                    <div className="flex flex-col gap-6 lg:gap-4">
                      <p className="text-base leading-6 text-black">{pillar.description}</p>

                      <ul className="flex flex-col gap-2 lg:gap-3">
                        {pillar.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2 lg:items-start lg:gap-3">
                            <img
                              src={checkIcon}
                              alt=""
                              aria-hidden
                              className="h-4 w-4 shrink-0 lg:mt-0.5 lg:h-5 lg:w-5"
                            />
                            <span className="text-xs leading-5 text-[#4e546c] lg:text-sm lg:leading-[22px]">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stat box */}
                    <div className="flex flex-col items-center gap-3 rounded-2xl bg-[#12174b] px-6 py-4 text-center text-white lg:gap-4 lg:p-6">
                      <p
                        className="text-[40px] font-extrabold uppercase leading-[48px] tracking-[-1.2px] lg:text-5xl"
                        style={{ fontFamily: "var(--font-nunito)" }}
                      >
                        {pillar.stat.value}
                      </p>
                      <p className="text-sm font-semibold leading-[22px] lg:text-base lg:leading-6">
                        {pillar.stat.label}
                      </p>
                    </div>
                  </div>

                  {/* Image — desktop only in row */}
                  <div className="hidden min-w-0 flex-1 lg:flex">
                    <img
                      key={pillar.id}
                      src={pillar.image}
                      alt={pillar.title}
                      className="h-[393px] w-full rounded-3xl object-cover"
                    />
                  </div>
                </div>

                {/* Image — mobile below content (Figma 2108:1522) */}
                <img
                  key={`${pillar.id}-mobile`}
                  src={pillar.image}
                  alt={pillar.title}
                  className="mt-3 h-[280px] w-full rounded-3xl object-cover lg:hidden"
                />

                {/* Footer */}
                <div className="flex flex-col gap-2 max-lg:pt-0 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:border-t lg:border-[#cad1dd] lg:pt-6">
                  <a
                    href={FREE_CONSULTATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-black no-underline hover:underline"
                  >
                    {t("pillars.talkToExpert")}
                    <img src={arrowBlackIcon} alt="" aria-hidden className="h-4 w-4 shrink-0" />
                  </a>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex cursor-pointer items-center gap-2 self-start rounded-full border border-[#cad1dd] bg-transparent px-6 py-2 text-sm font-semibold text-[#201463] transition-colors hover:bg-[#f0f4fa]"
                  >
                    {active === pillars.length - 1 ? t("pillars.backToFirst") : t("pillars.nextPillar")}
                    <img src={arrowNavyIcon} alt="" aria-hidden className="h-3 w-3 shrink-0" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
