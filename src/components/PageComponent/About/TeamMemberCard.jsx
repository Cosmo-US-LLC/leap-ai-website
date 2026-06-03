export function TeamMemberCard({ member, layout = "desktop" }) {
  const isMobile = layout === "mobile";
  const isLarge = member.variant === "large";

  if (isMobile) {
    return (
      <article className="relative flex h-[590px] w-[340px] max-w-[calc(100vw-40px)] shrink-0 snap-center flex-col justify-end overflow-hidden rounded-[32px] p-3">
        <img
          src={member.image}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 size-full rounded-[32px] object-cover"
          style={member.objectPosition ? { objectPosition: member.objectPosition } : undefined}
        />

        <div className="relative flex w-full flex-col gap-2 rounded-[20px] border border-[#4E546C]/70 bg-[rgba(0,0,0,0.4)] p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-[rgba(0,0,0,0.35)]">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xl font-bold leading-[26px] text-white">{member.name}</h3>
            <p
              className={`text-base font-medium leading-6 text-[#18a3e6] ${
                member.roleCapitalize ? "capitalize" : ""
              }`}
            >
              {member.role}
            </p>
          </div>
          <p className="text-sm leading-[22px] text-[#f0f0f0]">{member.bio}</p>
        </div>
      </article>
    );
  }

  const widthClass =
    member.variant === "medium-fixed"
      ? "w-full max-w-[410.667px] shrink-0 lg:w-[410.667px]"
      : member.variant === "medium-flex"
        ? "min-w-0 flex-1"
        : "min-w-0 flex-1";

  const minHeightClass = isLarge
    ? "min-h-[480px] sm:min-h-[560px]"
    : "min-h-[480px] lg:min-h-[632px]";

  return (
    <article
      className={`relative flex h-full flex-col justify-end overflow-hidden rounded-[32px] p-3 ${minHeightClass} ${widthClass}`}
    >
      <img
        src={member.image}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full rounded-[32px] object-cover"
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
