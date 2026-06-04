import { MOBILE_TEAM_OVERLAY } from "../../../lib/mobileTeamOverlayClasses.js";

/** Figma 1958:357 — 340×590, px-3 pb-3, pt-[300px] or pt-[360px] */
const CARD_BASE =
  "relative box-border flex min-h-[590px] w-[340px] max-w-[calc(100vw-40px)] shrink-0 snap-center flex-col justify-end overflow-hidden rounded-[32px] px-3 pb-3";

/** Figma: absolute inset-0 size-full object-cover rounded-[32px] */
const IMG_FIGMA =
  "pointer-events-none absolute inset-0 size-full max-w-none rounded-[32px] object-cover";

/** Mobile team carousel card only — Figma 1958:357+ */
export function MobileTeamMemberCard({ member }) {
  const padTop =
    member.mobilePaddingTop === 360 ? "pt-[360px]" : "pt-[300px]";

  const renderPhoto = () => {
    const src = member.mobileImage ?? member.image;

    if (member.mobileImageFrame) {
      return (
        <img
          src={src}
          alt=""
          className="absolute max-w-none object-cover"
          style={member.mobileImageFrame}
        />
      );
    }

    const objectPosition = member.mobileObjectPosition
      ? { objectPosition: member.mobileObjectPosition }
      : undefined;

    return (
      <img
        src={src}
        alt=""
        className={IMG_FIGMA}
        style={objectPosition}
      />
    );
  };

  return (
    <article className={`${CARD_BASE} ${padTop}`}>
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[32px]"
        aria-hidden
      >
        {renderPhoto()}
      </div>

      <div data-team-mobile-overlay className={MOBILE_TEAM_OVERLAY.overlay}>
        <div className={MOBILE_TEAM_OVERLAY.nameBlock}>
          <h3 className={MOBILE_TEAM_OVERLAY.name}>{member.name}</h3>
          <p
            className={`${MOBILE_TEAM_OVERLAY.role} ${
              member.roleCapitalize ? MOBILE_TEAM_OVERLAY.roleCapitalize : ""
            }`}
          >
            {member.role}
          </p>
        </div>
        <p className={MOBILE_TEAM_OVERLAY.bio}>{member.bio}</p>
      </div>
    </article>
  );
}
