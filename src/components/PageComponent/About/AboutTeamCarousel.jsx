import { useCallback, useEffect, useRef, useState } from "react";
import { ALL_TEAM_MEMBERS } from "../../../lib/aboutTeam.js";
import { TeamMemberCard } from "./TeamMemberCard.jsx";
import { ArrowRightIcon } from "../NewHome/icons/ArrowRightIcon.jsx";

export default function AboutTeamCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current;
    const card = track?.children[index];
    if (!card) return;
    const next = Math.max(0, Math.min(index, ALL_TEAM_MEMBERS.length - 1));
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
    <div className="flex w-full flex-col items-center gap-6 lg:hidden">
      <div
        ref={trackRef}
        className="about-team-carousel-track -mx-5 flex w-[calc(100%+40px)] gap-3.5 overflow-x-auto scroll-smooth px-5 snap-x snap-mandatory"
      >
        {ALL_TEAM_MEMBERS.map((member) => (
          <TeamMemberCard key={member.name} member={member} layout="mobile" />
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="flex size-8 items-center justify-center rounded-2xl border border-black transition enabled:hover:bg-black/5 disabled:opacity-40"
          aria-label="Previous team member"
        >
          <ArrowRightIcon className="h-4 w-4 rotate-180" dark />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Team members">
          {ALL_TEAM_MEMBERS.map((member, i) => (
            <button
              key={member.name}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`View ${member.name}`}
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
          disabled={activeIndex === ALL_TEAM_MEMBERS.length - 1}
          className="flex size-8 items-center justify-center rounded-2xl border border-black transition enabled:hover:bg-black/5 disabled:opacity-40"
          aria-label="Next team member"
        >
          <ArrowRightIcon className="h-4 w-4" dark />
        </button>
      </div>
    </div>
  );
}
