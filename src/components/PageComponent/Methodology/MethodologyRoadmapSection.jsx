import { useCallback, useEffect, useRef, useState } from "react";
import roadmapCheckIcon from "../../../assets/icons/methodology/roadmap-check.svg";
import step1Image from "../../../assets/images/methodology/roadmap/step-1.webp";
import step2Image from "../../../assets/images/methodology/roadmap/step-2.webp";
import step3Image from "../../../assets/images/methodology/roadmap/step-3.webp";
import step4Image from "../../../assets/images/methodology/roadmap/step-4.webp";
import step5Image from "../../../assets/images/methodology/roadmap/step-5.webp";

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M21 21L16.66 16.66" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M17.5365 1.55694C17.6736 1.61363 17.7909 1.70974 17.8734 1.8331C17.9559 1.95646 17.9999 2.10153 18 2.24994V5.99994H21.75C21.8985 5.99967 22.0438 6.04352 22.1674 6.12591C22.2909 6.2083 22.3873 6.32553 22.4441 6.46275C22.501 6.59996 22.5159 6.75096 22.4868 6.89663C22.4578 7.04229 22.3861 7.17605 22.281 7.28094L19.281 10.2809C19.2112 10.3505 19.1284 10.4057 19.0373 10.4433C18.9462 10.4809 18.8485 10.5001 18.75 10.4999H14.5605L13.4505 11.6114C13.5101 11.8338 13.5177 12.067 13.4728 12.2928C13.4278 12.5186 13.3315 12.731 13.1913 12.9136C13.051 13.0962 12.8706 13.2441 12.664 13.3458C12.4574 13.4474 12.2302 13.5002 12 13.4999C11.6021 13.4999 11.2206 13.3419 10.9393 13.0606C10.658 12.7793 10.5 12.3978 10.5 11.9999L10.5015 11.9309C10.5118 11.7069 10.5722 11.488 10.6782 11.2903C10.7843 11.0927 10.9334 10.9214 11.1144 10.789C11.2955 10.6566 11.5039 10.5664 11.7244 10.5252C11.9449 10.4841 12.1718 10.4928 12.3885 10.5509L13.5 9.43944V5.24994C13.4998 5.15138 13.519 5.05376 13.5566 4.96264C13.5942 4.87153 13.6494 4.78872 13.719 4.71894L16.719 1.71894C16.8239 1.61412 16.9576 1.54278 17.1032 1.51394C17.2487 1.4851 17.3995 1.50007 17.5365 1.55694ZM18.4395 8.99994L19.9395 7.49994H17.25C17.0511 7.49994 16.8603 7.42092 16.7196 7.28027C16.579 7.13962 16.5 6.94885 16.5 6.74994V4.06044L15 5.56044V8.99994H18.4395ZM20.9175 10.7639C20.9735 11.1689 21.0015 11.5814 21.0015 12.0014C21.001 13.8341 20.4411 15.6229 19.3965 17.1287C18.352 18.6345 16.8727 19.7856 15.1563 20.428C13.44 21.0704 11.5684 21.1736 9.79184 20.7236C8.0153 20.2737 6.41845 19.2921 5.21479 17.9102C4.01114 16.5282 3.25805 14.8118 3.05622 12.9903C2.85439 11.1688 3.21343 9.32908 4.08534 7.71715C4.95726 6.10522 6.30048 4.79788 7.93543 3.96993C9.57037 3.14197 11.4191 2.83287 13.2345 3.08394L12.66 3.65844C12.4222 3.89623 12.2408 4.18429 12.129 4.50144L12 4.49994C10.5112 4.50016 9.05611 4.94348 7.8201 5.77343C6.58409 6.60339 5.62306 7.78243 5.05939 9.16041C4.49572 10.5384 4.35492 12.0529 4.65492 13.5112C4.95492 14.9695 5.68215 16.3055 6.74398 17.349C7.80582 18.3926 9.15422 19.0966 10.6175 19.3712C12.0807 19.6459 13.5926 19.4788 14.9606 18.8913C16.3286 18.3038 17.4908 17.3225 18.2992 16.0723C19.1076 14.8221 19.5256 13.3595 19.5 11.8709C19.8159 11.7592 20.1029 11.5783 20.34 11.3414L20.9175 10.7639ZM12 6.74994C10.9616 6.74994 9.94659 7.05785 9.08323 7.63472C8.21987 8.2116 7.54697 9.03154 7.14961 9.99085C6.75225 10.9502 6.64828 12.0058 6.85085 13.0242C7.05342 14.0426 7.55344 14.978 8.28766 15.7122C9.02189 16.4465 9.95735 16.9465 10.9757 17.1491C11.9941 17.3516 13.0497 17.2477 14.0091 16.8503C14.9684 16.4529 15.7883 15.78 16.3652 14.9167C16.9421 14.0533 17.25 13.0383 17.25 11.9999H15.75C15.75 12.7416 15.53 13.4666 15.118 14.0833C14.7059 14.7 14.1203 15.1807 13.435 15.4645C12.7498 15.7483 11.9958 15.8226 11.2684 15.6779C10.541 15.5332 9.87277 15.176 9.34832 14.6516C8.82387 14.1271 8.46672 13.459 8.32203 12.7315C8.17733 12.0041 8.2516 11.2501 8.53542 10.5649C8.81925 9.87965 9.2999 9.29398 9.91658 8.88193C10.5333 8.46987 11.2583 8.24994 12 8.24994V6.74994Z"
        fill="white"
      />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12.0016 22.0004C17.5244 22.0004 22.0016 17.5232 22.0016 12.0004C22.0016 6.47752 17.5244 2.00037 12.0016 2.00037C6.47874 2.00037 2.00159 6.47752 2.00159 12.0004C2.00159 17.5232 6.47874 22.0004 12.0016 22.0004Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.2378 7.76013L14.4338 13.1711C14.3356 13.4657 14.1702 13.7334 13.9506 13.953C13.7311 14.1725 13.4634 14.3379 13.1688 14.4361L7.75781 16.2401L9.56181 10.8291C9.66 10.5345 9.82542 10.2669 10.045 10.0473C10.2646 9.82774 10.5322 9.66231 10.8268 9.56413L16.2378 7.76013Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12.8305 2.18133C12.5699 2.06248 12.2868 2.00098 12.0005 2.00098C11.7141 2.00098 11.431 2.06248 11.1705 2.18133L2.60045 6.08133C2.423 6.15958 2.27213 6.28773 2.16621 6.45019C2.0603 6.61265 2.00391 6.8024 2.00391 6.99633C2.00391 7.19027 2.0603 7.38002 2.16621 7.54248C2.27213 7.70494 2.423 7.83309 2.60045 7.91133L11.1805 11.8213C11.441 11.9402 11.7241 12.0017 12.0105 12.0017C12.2968 12.0017 12.5799 11.9402 12.8405 11.8213L21.4205 7.92133C21.5979 7.84309 21.7488 7.71494 21.8547 7.55248C21.9606 7.39002 22.017 7.20027 22.017 7.00633C22.017 6.8124 21.9606 6.62265 21.8547 6.46019C21.7488 6.29773 21.5979 6.16958 21.4205 6.09133L12.8305 2.18133Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.00391 12C2.00344 12.1913 2.05783 12.3787 2.16063 12.5399C2.26343 12.7012 2.41033 12.8297 2.58391 12.91L11.1839 16.82C11.4431 16.9374 11.7244 16.9981 12.0089 16.9981C12.2934 16.9981 12.5747 16.9374 12.8339 16.82L21.4139 12.92C21.5909 12.8404 21.741 12.7111 21.8457 12.5477C21.9505 12.3844 22.0054 12.1941 22.0039 12"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.00391 17.001C2.00344 17.1922 2.05783 17.3796 2.16063 17.5409C2.26343 17.7022 2.41033 17.8306 2.58391 17.911L11.1839 21.821C11.4431 21.9383 11.7244 21.9991 12.0089 21.9991C12.2934 21.9991 12.5747 21.9383 12.8339 21.821L21.4139 17.921C21.5909 17.8414 21.741 17.7121 21.8457 17.5487C21.9505 17.3854 22.0054 17.195 22.0039 17.001"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21.6467 2.52219C21.6388 2.48372 21.62 2.44833 21.5926 2.42018C21.5652 2.39203 21.5303 2.37229 21.4921 2.36328C18.943 1.73984 13.0545 3.96125 9.86096 7.1525C9.2918 7.71701 8.77282 8.32995 8.30986 8.98438C7.32549 8.89531 6.34111 8.97031 5.50299 9.33594C3.13627 10.3766 2.44767 13.0944 2.25549 14.2611C2.24507 14.325 2.24952 14.3905 2.26849 14.4524C2.28745 14.5144 2.32042 14.5711 2.36484 14.6182C2.40926 14.6654 2.46394 14.7017 2.52464 14.7243C2.58534 14.7469 2.65043 14.7552 2.71486 14.7486L6.51502 14.3314C6.51762 14.618 6.53483 14.9043 6.56658 15.1892C6.58641 15.3861 6.67427 15.5699 6.81502 15.7091L8.28642 17.1805C8.42566 17.3213 8.60967 17.4092 8.80674 17.4289C9.0899 17.4605 9.37449 17.4777 9.65939 17.4805L9.24267 21.2773C9.23617 21.3417 9.24455 21.4067 9.26716 21.4673C9.28978 21.5279 9.32602 21.5825 9.3731 21.6268C9.42017 21.6712 9.47682 21.7041 9.53865 21.7231C9.60048 21.7421 9.66585 21.7466 9.72971 21.7362C10.8969 21.5487 13.6203 20.8602 14.6549 18.4939C15.0205 17.6548 15.0955 16.6756 15.0111 15.6959C15.6675 15.2334 16.2822 14.7144 16.8481 14.1448C20.0535 10.9573 22.2608 5.19828 21.6467 2.52219ZM13.9991 10.0156C13.7191 9.73572 13.5284 9.37908 13.4512 8.9908C13.3739 8.60252 13.4135 8.20005 13.565 7.83429C13.7165 7.46852 13.973 7.15589 14.3022 6.93594C14.6313 6.71598 15.0183 6.59858 15.4142 6.59858C15.8101 6.59858 16.1971 6.71598 16.5263 6.93594C16.8555 7.15589 17.112 7.46852 17.2635 7.83429C17.415 8.20005 17.4546 8.60252 17.3773 8.9908C17.3 9.37908 17.1094 9.73572 16.8294 10.0156C16.6437 10.2017 16.4231 10.3494 16.1803 10.4501C15.9375 10.5508 15.6771 10.6027 15.4142 10.6027C15.1513 10.6027 14.891 10.5508 14.6482 10.4501C14.4054 10.3494 14.1848 10.2017 13.9991 10.0156Z"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.13937 16.5C4.67208 16.5574 4.23735 16.7692 3.90422 17.1019C3.07828 17.9306 3 21 3 21C3 21 6.07125 20.9217 6.89766 20.0948C7.23168 19.7622 7.44387 19.3268 7.5 18.8588"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckMark() {
  return (
    <img
      src={roadmapCheckIcon}
      alt=""
      aria-hidden
      className="h-4 w-4 shrink-0 lg:h-5 lg:w-5"
    />
  );
}

function TimelineNode({ isActive }) {
  return (
    <div
      className={`relative z-10 hidden h-16 w-16 shrink-0 items-center justify-center rounded-full transition-colors duration-300 lg:flex ${
        isActive ? "bg-[#12174b] ring-4 ring-[#fafcfe]" : "bg-[#ececec] ring-4 ring-[#fafcfe]"
      }`}
      aria-hidden
    >
      <div
        className={`h-6 w-6 rounded-full transition-colors duration-300 ${
          isActive ? "bg-[#18a3e6]" : "bg-white"
        }`}
      />
    </div>
  );
}

function MobileTimelineNode({ isActive, top }) {
  return (
    <div
      className={`absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ${
        isActive ? "bg-[#12174b] ring-4 ring-[#fafcfe]" : "bg-[#ececec] ring-4 ring-[#fafcfe]"
      }`}
      style={{ top }}
      aria-hidden
    >
      <div
        className={`h-5 w-5 rounded-full transition-colors duration-300 ${
          isActive ? "bg-[#18a3e6]" : "bg-white"
        }`}
      />
    </div>
  );
}

function RoadmapStepCard({ step }) {
  return (
    <div className="flex w-full flex-col gap-8 rounded-2xl bg-[#12174b] px-4 py-6 lg:flex-1 lg:gap-8 lg:rounded-3xl lg:px-6 lg:py-8">
      <div className="flex flex-col gap-4 lg:gap-6">
        <div className="flex items-start gap-3 lg:items-center">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[6.4px] bg-[#18a3e6] lg:h-10 lg:w-10 lg:rounded-lg">
            <div className="flex h-[19px] w-[19px] items-center justify-center lg:h-6 lg:w-6 [&>svg]:h-full [&>svg]:w-full">
              {step.icon}
            </div>
          </div>
          <h3 className="meth-roadmap-step-title">{step.title}</h3>
        </div>
        <p className="text-base leading-6 text-white">{step.description}</p>
      </div>

      <div className="flex flex-col gap-3 lg:gap-4">
        <p className="meth-roadmap-includes-label">What is included</p>
        <ul className="flex flex-col gap-2">
          {step.includes.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckMark />
              <span className="text-sm font-medium leading-[22px] text-white lg:text-base lg:leading-6">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function RoadmapStepImage({ src, alt }) {
  return (
    <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-2xl lg:min-h-[386px] lg:flex-1 lg:rounded-3xl">
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
}

const STEPS = [
  {
    title: "The Operational Diagnosis",
    description:
      "You can't prescribe a cure without a diagnosis. We interview every department leader, map their value engine, and find the key opportunities hiding behind your biggest problems. No strategy survives without an honest understanding of the current reality.",
    includes: ["Value-stream map", "Friction inventory", "Quick-win shortlist"],
    image: step1Image,
    imageAlt: "Team conducting operational diagnosis workshop",
    imagePosition: "left",
    icon: <SearchIcon />,
  },
  {
    title: "Define the Target",
    description:
      "What do you want to achieve? We work with the CEO to get crystal clear on business goals, current strategy, and what's standing in the way. The goal isn't to start from scratch , it's to create an AI-driven strategy that accelerates and exceeds your existing ambitions.",
    includes: ["Strategic intent doc", "Constraint register", "Success criteria"],
    image: step2Image,
    imageAlt: "Executive defining strategic targets",
    imagePosition: "right",
    icon: <TargetIcon />,
  },
  {
    title: "Strategic Alignment",
    description:
      'With a clear grasp of problems, targets, and constraints, we create a new AI-driven strategy anchored to a single "North Star" KPI that determines the progress of your AI transition. Validated with your leadership to ensure total alignment.',
    includes: ["North Star KPI", "Leadership alignment memo", "Tradeoff log"],
    image: step3Image,
    imageAlt: "Leadership team aligning on strategy",
    imagePosition: "left",
    icon: <SettingsIcon />,
  },
  {
    title: "Portfolio of AI Projects",
    description:
      "The heart of the strategy. We define 12–20 specific AI projects: what needs to be done, why, how we'll implement it, the cost, and the impact on your North Star KPI. Each project is sequenced for maximum compounding effect.",
    includes: ["Scored project portfolio", "Sequencing roadmap", "Capability gaps"],
    image: step4Image,
    imageAlt: "Team reviewing AI project portfolio",
    imagePosition: "right",
    icon: <LayersIcon />,
  },
  {
    title: "Stress-Test Your ROI",
    description:
      "Financial validation using the Prudence Principle: divide expected positive impact by two, double the projected costs. Your investment model includes scaling, continuous improvement, and a new-project factor. The plan must be realistic and bankable.",
    includes: ["Bankable business case", "Risk-adjusted ROI", "Go / no-go recommendation"],
    image: step5Image,
    imageAlt: "Financial ROI stress-testing session",
    imagePosition: "left",
    icon: <RocketIcon />,
  },
];

function useRoadmapTimelineProgress(timelineRef, desktopStepRefs, mobileStepRefs, mobileStepsColRef) {
  const [fillPercent, setFillPercent] = useState(0);
  const [activeSteps, setActiveSteps] = useState(() => STEPS.map(() => false));
  const [mobileNodeTops, setMobileNodeTops] = useState(() => STEPS.map(() => 0));

  const updateProgress = useCallback(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const stepElements = isDesktop ? desktopStepRefs.current : mobileStepRefs.current;

    const timelineRect = timeline.getBoundingClientRect();
    const timelineHeight = isDesktop
      ? timelineRect.height
      : (mobileStepsColRef.current?.offsetHeight ?? timelineRect.height);
    if (timelineHeight <= 0) return;

    const viewportHeight = window.innerHeight;
    const scrollAnchor = viewportHeight * 0.42;
    const endOffset = timelineHeight + viewportHeight * 0.35;

    const scrolled = scrollAnchor - timelineRect.top;
    const progress = prefersReducedMotion
      ? timelineRect.top < scrollAnchor
        ? 1
        : 0
      : Math.min(1, Math.max(0, scrolled / endOffset));

    const fillHeight = progress * timelineHeight;
    setFillPercent(progress * 100);

    const nextActive = stepElements.map((stepEl) => {
      if (!stepEl) return false;

      if (isDesktop) {
        const stepRect = stepEl.getBoundingClientRect();
        const nodeCenter = stepRect.top - timelineRect.top + 32;
        return fillHeight >= nodeCenter;
      }

      const nodeCenter = stepEl.offsetTop + 20;
      return fillHeight >= nodeCenter;
    });
    setActiveSteps(nextActive);

    if (!isDesktop) {
      setMobileNodeTops(
        mobileStepRefs.current.map((stepEl) => (stepEl ? stepEl.offsetTop : 0)),
      );
    }
  }, [timelineRef, desktopStepRefs, mobileStepRefs, mobileStepsColRef]);

  useEffect(() => {
    let frame = 0;

    const onScrollOrResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    desktopQuery.addEventListener("change", onScrollOrResize);

    const timeline = timelineRef.current;
    const mobileStepsCol = mobileStepsColRef.current;
    const resizeObserver =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(onScrollOrResize) : null;
    if (timeline && resizeObserver) resizeObserver.observe(timeline);
    if (mobileStepsCol && resizeObserver) resizeObserver.observe(mobileStepsCol);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      desktopQuery.removeEventListener("change", onScrollOrResize);
      resizeObserver?.disconnect();
    };
  }, [updateProgress, timelineRef, mobileStepsColRef]);

  return { fillPercent, activeSteps, mobileNodeTops };
}

export default function MethodologyRoadmapSection() {
  const timelineRef = useRef(null);
  const desktopStepRefs = useRef([]);
  const mobileStepRefs = useRef([]);
  const mobileStepsColRef = useRef(null);
  const { fillPercent, activeSteps, mobileNodeTops } = useRoadmapTimelineProgress(
    timelineRef,
    desktopStepRefs,
    mobileStepRefs,
    mobileStepsColRef,
  );

  return (
    <section className="relative overflow-hidden bg-[#fafcfe] px-5 py-12 lg:px-20 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 50% 0%, rgba(242,246,251,1) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 lg:gap-14">
        <div className="flex w-full max-w-[800px] flex-col items-center gap-4 text-center lg:gap-5">
          <h2 className="meth-roadmap-heading">
            <span className="meth-roadmap-heading-bold">How we build your </span>
            <span className="meth-roadmap-heading-muted">AI roadmap</span>
          </h2>
          <p className="text-base leading-6 text-[#4e546c]">
            Principles are clean, but your business is messy. You can&apos;t copy-paste a generic
            strategy. Here&apos;s the methodology we use to translate these pillars into a plan
            that fits your reality, your constraints, and your ambition.
          </p>
        </div>

        <div ref={timelineRef} className="relative w-full">
          {/* Mobile — Figma 1888:8623 */}
          <div className="flex gap-6 lg:hidden">
            <div className="relative w-10 shrink-0 self-stretch">
              <div
                className="pointer-events-none absolute bottom-0 left-1/2 top-[22px] w-7 -translate-x-1/2"
                aria-hidden
              >
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 rounded-full bg-[#ececec]" />
                  <div
                    className="absolute left-0 top-0 w-full rounded-full bg-[#12174b] will-change-[height]"
                    style={{ height: `${fillPercent}%` }}
                  />
                </div>
              </div>
              {STEPS.map((step, index) => (
                <MobileTimelineNode
                  key={step.title}
                  isActive={activeSteps[index]}
                  top={mobileNodeTops[index]}
                />
              ))}
            </div>

            <div ref={mobileStepsColRef} className="flex min-w-0 flex-1 flex-col gap-8">
              {STEPS.map((step, index) => (
                <div
                  key={step.title}
                  ref={(el) => {
                    mobileStepRefs.current[index] = el;
                  }}
                  className="flex flex-col gap-3.5"
                >
                  <RoadmapStepCard step={step} />
                  <RoadmapStepImage src={step.image} alt={step.imageAlt} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop — unchanged */}
          <div className="relative hidden lg:block">
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-full w-8 -translate-x-1/2"
              aria-hidden
            >
              <div className="relative h-full w-full">
                <div className="absolute inset-0 rounded-full bg-[#ececec]" />
                <div
                  className="absolute left-0 top-0 w-full rounded-full bg-[#12174b] will-change-[height]"
                  style={{ height: `${fillPercent}%` }}
                />
              </div>
            </div>

            <div className="relative flex flex-col gap-16">
              {STEPS.map((step, index) => {
                const image = <RoadmapStepImage src={step.image} alt={step.imageAlt} />;
                const card = <RoadmapStepCard step={step} />;
                const node = <TimelineNode isActive={activeSteps[index]} />;

                return (
                  <div
                    key={step.title}
                    ref={(el) => {
                      desktopStepRefs.current[index] = el;
                    }}
                    className="flex items-stretch gap-8"
                  >
                    {step.imagePosition === "left" ? (
                      <>
                        <div className="flex flex-1 flex-col">{image}</div>
                        {node}
                        <div className="flex flex-1 flex-col">{card}</div>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-1 flex-col">{card}</div>
                        {node}
                        <div className="flex flex-1 flex-col">{image}</div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
