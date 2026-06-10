import { useTranslation } from "react-i18next";
import { useAboutTeam } from "../../../hooks/useAboutTeam.js";
import { useEqualTeamOverlayHeights } from "../../../hooks/useEqualTeamOverlayHeights.js";
import AboutTeamCarousel from "./AboutTeamCarousel.jsx";
import { TeamMemberCard } from "./TeamMemberCard.jsx";

export default function AboutTeamSection() {
  const { t } = useTranslation("about");
  const { teamRowLarge, teamRowMedium, teamRowBottom } = useAboutTeam();
  const sectionRef = useEqualTeamOverlayHeights();

  return (
    <section
      ref={sectionRef}
      id="team"
      className="scroll-mt-28 bg-[#fafcfe] px-5 py-12 lg:px-20 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 lg:gap-12">
        <div className="flex w-full max-w-[768px] flex-col gap-4 text-center lg:gap-5">
          <h2 className="about-team-heading">
            <span className="font-bold">{t("team.headingBold")}</span>
            <span className="font-normal text-[rgba(32,20,99,0.7)]">{t("team.headingMuted")}</span>
          </h2>
          <p className="text-base leading-6 text-[#4e546c]">{t("team.intro")}</p>
        </div>

        <AboutTeamCarousel />

        <div className="hidden w-full flex-col gap-6 lg:flex">
          <div
            data-team-row
            data-team-row-large
            className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:items-start"
          >
            {teamRowLarge.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          <div
            data-team-row
            className="grid w-full grid-cols-1 gap-4 lg:grid-cols-[410.667px_410.667px_1fr] lg:items-stretch"
          >
            {teamRowMedium.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          <div
            data-team-row
            className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center sm:items-stretch"
          >
            {teamRowBottom.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
