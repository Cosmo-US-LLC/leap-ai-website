/** Desktop team grid only — mobile uses MobileTeamMemberCard.jsx */
export function TeamMemberCard({ member }) {
  const isLarge = member.variant === "large";

  const widthClass =
    member.variant === "medium-fixed"
      ? "w-full max-w-[410.667px] shrink-0 lg:w-[410.667px]"
      : member.variant === "medium-flex"
        ? "min-w-0 flex-1"
        : "min-w-0 flex-1";

  const paddingClass = isLarge
    ? "px-3 pb-3 pt-3 lg:pt-[400px]"
    : "p-3";

  const minHeightClass = isLarge
    ? "min-h-[480px] sm:min-h-[560px] lg:min-h-0"
    : "min-h-[480px] lg:min-h-[632px]";

  return (
    <article
      className={`relative flex flex-col justify-end overflow-hidden rounded-[32px] ${paddingClass} ${minHeightClass} ${isLarge ? "" : "h-full"} ${widthClass}`}
    >
      <img
        src={member.image}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[32px] object-cover"
        style={member.objectPosition ? { objectPosition: member.objectPosition } : undefined}
      />

      <div
        data-team-overlay
        className="relative flex w-full flex-col gap-2.5 rounded-[20px] border border-[#4E546C]/70 bg-[rgba(0,0,0,0.45)] px-6 py-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-[rgba(0,0,0,0.35)]"
      >
        <div className="flex shrink-0 flex-col gap-2">
          <h3 className="text-2xl font-bold leading-8 text-white">{member.name}</h3>
          <p
            className={`text-lg font-medium leading-[26px] text-[#18a3e6] ${
              member.roleCapitalize ? "capitalize" : ""
            }`}
          >
            {member.role}
          </p>
        </div>
        <p className="flex-1 text-base leading-6 text-[#f0f0f0]">{member.bio}</p>
      </div>
    </article>
  );
}
