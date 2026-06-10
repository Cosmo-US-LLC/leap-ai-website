import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAboutTeam } from "../../../hooks/useAboutTeam.js";
import { useEqualMobileTeamOverlayHeights } from "../../../hooks/useEqualMobileTeamOverlayHeights.js";
import { MobileTeamMemberCard } from "./MobileTeamMemberCard.jsx";
import { ArrowRightIcon } from "../NewHome/icons/ArrowRightIcon.jsx";

/** Mobile-only team carousel — desktop grid is in AboutTeamSection */
export default function AboutTeamCarousel() {
  const { t } = useTranslation("about");
  const { allMembers } = useAboutTeam();
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useEqualMobileTeamOverlayHeights(allMembers);

  const scrollToIndex = useCallback(
    (index) => {
      const track = trackRef.current;
      const card = track?.children[index];
      if (!card) return;
      const next = Math.max(0, Math.min(index, allMembers.length - 1));
      setActiveIndex(next);
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    },
    [allMembers.length, trackRef],
  );

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
  }, [trackRef]);

  return (
    <div className="hidden w-full max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-6">
      <div
        ref={trackRef}
        className="-mx-5 flex w-[calc(100%+40px)] gap-3.5 overflow-x-auto scroll-smooth px-5 [scrollbar-width:none] [-ms-overflow-style:none] [scroll-snap-type:x_mandatory] [&::-webkit-scrollbar]:hidden"
      >
        {allMembers.map((member) => (
          <MobileTeamMemberCard key={member.id} member={member} />
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="flex size-8 items-center justify-center rounded-2xl border border-black transition enabled:hover:bg-black/5 disabled:opacity-40"
          aria-label={t("team.prev")}
        >
          <ArrowRightIcon className="h-4 w-4 rotate-180" dark />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label={t("team.headingMuted")}>
          {allMembers.map((member, i) => (
            <button
              key={member.id}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={t("team.viewMember", { name: member.name })}
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
          disabled={activeIndex === allMembers.length - 1}
          className="flex size-8 items-center justify-center rounded-2xl border border-black transition enabled:hover:bg-black/5 disabled:opacity-40"
          aria-label={t("team.next")}
        >
          <ArrowRightIcon className="h-4 w-4" dark />
        </button>
      </div>
    </div>
  );
}
