import { MOBILE_TEAM_OVERLAY } from "./mobileTeamOverlayClasses.js";

/** Figma mobile card 340px − horizontal padding 24px */
export const MOBILE_TEAM_OVERLAY_WIDTH = 316;

export function measureMobileTeamOverlayHeight(member, host) {
  const overlay = document.createElement("div");
  overlay.className = MOBILE_TEAM_OVERLAY.overlay;
  overlay.style.width = `${MOBILE_TEAM_OVERLAY_WIDTH}px`;

  const nameBlock = document.createElement("div");
  nameBlock.className = MOBILE_TEAM_OVERLAY.nameBlock;

  const name = document.createElement("h3");
  name.className = MOBILE_TEAM_OVERLAY.name;
  name.textContent = member.name;

  const role = document.createElement("p");
  role.className = `${MOBILE_TEAM_OVERLAY.role}${
    member.roleCapitalize ? ` ${MOBILE_TEAM_OVERLAY.roleCapitalize}` : ""
  }`;
  role.textContent = member.role;

  const bio = document.createElement("p");
  bio.className = MOBILE_TEAM_OVERLAY.bio;
  bio.textContent = member.bio;

  nameBlock.append(name, role);
  overlay.append(nameBlock, bio);
  host.appendChild(overlay);

  const height = overlay.offsetHeight;
  host.removeChild(overlay);
  return height;
}

export function measureMaxMobileTeamOverlayHeight(members) {
  const host = document.createElement("div");
  host.className = "new-home";
  host.setAttribute("aria-hidden", "true");
  host.style.cssText =
    "position:fixed;left:-9999px;top:0;visibility:hidden;pointer-events:none;";
  document.body.appendChild(host);

  const maxHeight = Math.max(
    0,
    ...members.map((member) => measureMobileTeamOverlayHeight(member, host))
  );

  document.body.removeChild(host);
  return maxHeight;
}
