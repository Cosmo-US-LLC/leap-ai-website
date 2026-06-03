import {
  TEAM_ROW_BOTTOM,
  TEAM_ROW_LARGE,
  TEAM_ROW_MEDIUM,
} from "../../../lib/aboutTeam.js";
import { TeamMemberCard } from "./TeamMemberCard.jsx";

export default function AboutTeamSection() {
  return (
    <section
      id="team"
      className="scroll-mt-28 bg-[#fafcfe] px-4 py-16 md:px-8 lg:px-20 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12">
        <div className="flex w-full max-w-[768px] flex-col gap-5 text-center">
          <h2 className="about-team-heading whitespace-nowrap">
            <span className="font-bold">Meet </span>
            <span className="font-normal text-[rgba(32,20,99,0.7)]">the team</span>
          </h2>
          <p className="text-base leading-6 text-[#4e546c]">
            With backgrounds in executive leadership, we understand the challenges you face
            firsthand. We work alongside you to turn complex problems into lasting, practical
            advantages.
          </p>
        </div>

        <div className="flex w-full flex-col gap-6">
          <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-stretch">
            {TEAM_ROW_LARGE.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>

          <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-stretch">
            {TEAM_ROW_MEDIUM.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row sm:items-stretch">
            {TEAM_ROW_BOTTOM.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
