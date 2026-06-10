import teamGregory from "../assets/images/about/team-gregory.webp";
import teamGregoryMobile from "../assets/images/about/team-gregory-mobile.webp";
import teamBenjamin from "../assets/images/about/team-benjamin.webp";
import teamBenjaminMobile from "../assets/images/about/team-benjamin-mobile.webp";
import teamJunaid from "../assets/images/about/team-junaid.webp";
import teamAzeem from "../assets/images/about/team-azeem.webp";
import teamAzu from "../assets/images/about/team-azu.webp";
import teamSamuel from "../assets/images/about/team-samuel.webp";
import teamSteven from "../assets/images/about/team-steven.webp";

export const TEAM_ROW_LARGE_IDS = ["gregory", "benjamin"];
export const TEAM_ROW_MEDIUM_IDS = ["junaid", "azeem", "azu"];
export const TEAM_ROW_BOTTOM_IDS = ["samuel", "steven"];
export const ALL_TEAM_MEMBER_IDS = [
  ...TEAM_ROW_LARGE_IDS,
  ...TEAM_ROW_MEDIUM_IDS,
  ...TEAM_ROW_BOTTOM_IDS,
];

export const TEAM_MEMBER_ASSETS = {
  gregory: {
    image: teamGregory,
    mobileImage: teamGregoryMobile,
    variant: "large",
    mobilePaddingTop: 300,
  },
  benjamin: {
    image: teamBenjamin,
    mobileImage: teamBenjaminMobile,
    variant: "large",
    mobilePaddingTop: 300,
  },
  junaid: {
    image: teamJunaid,
    variant: "medium-fixed",
    objectPosition: "50% 20%",
    mobilePaddingTop: 300,
    roleCapitalize: true,
  },
  azeem: {
    image: teamAzeem,
    variant: "medium-fixed",
    objectPosition: "35% 15%",
    mobilePaddingTop: 360,
    mobileImageFrame: {
      height: "99.99%",
      width: "137.93%",
      left: "-18.96%",
      top: "-0.04%",
    },
  },
  azu: {
    image: teamAzu,
    variant: "medium-flex",
    objectPosition: "50% 12%",
    mobilePaddingTop: 360,
    mobileImageFrame: {
      height: "100%",
      width: "145.64%",
      left: "-18.67%",
      top: "0",
    },
  },
  samuel: {
    image: teamSamuel,
    variant: "medium-fixed",
    objectPosition: "42% 12%",
    mobilePaddingTop: 360,
  },
  steven: {
    image: teamSteven,
    variant: "medium-fixed",
    objectPosition: "38% 12%",
    mobilePaddingTop: 360,
  },
};

export const MOBILE_TEAM_CARD_HEIGHT = 590;
export const MOBILE_TEAM_CARD_PB = 12;

export function mobileTeamOverlayMaxHeight(paddingTop) {
  return MOBILE_TEAM_CARD_HEIGHT - paddingTop - MOBILE_TEAM_CARD_PB;
}

export function buildTeamMember(id, t) {
  const assets = TEAM_MEMBER_ASSETS[id];
  if (!assets) return null;

  return {
    id,
    name: t(`team.members.${id}.name`),
    role: t(`team.members.${id}.role`),
    bio: t(`team.members.${id}.bio`),
    ...assets,
    ...(t(`team.members.${id}.roleCapitalize`, { defaultValue: "" }) === "true"
      ? { roleCapitalize: true }
      : assets.roleCapitalize
        ? { roleCapitalize: assets.roleCapitalize }
        : {}),
  };
}

export function buildTeamRow(ids, t) {
  return ids.map((id) => buildTeamMember(id, t)).filter(Boolean);
}
