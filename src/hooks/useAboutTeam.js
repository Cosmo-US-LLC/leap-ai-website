import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  ALL_TEAM_MEMBER_IDS,
  TEAM_ROW_BOTTOM_IDS,
  TEAM_ROW_LARGE_IDS,
  TEAM_ROW_MEDIUM_IDS,
  buildTeamMember,
  buildTeamRow,
} from "../lib/aboutTeamAssets.js";

export function useAboutTeam() {
  const { t } = useTranslation("about");

  return useMemo(
    () => ({
      teamRowLarge: buildTeamRow(TEAM_ROW_LARGE_IDS, t),
      teamRowMedium: buildTeamRow(TEAM_ROW_MEDIUM_IDS, t),
      teamRowBottom: buildTeamRow(TEAM_ROW_BOTTOM_IDS, t),
      allMembers: ALL_TEAM_MEMBER_IDS.map((id) => buildTeamMember(id, t)).filter(Boolean),
    }),
    [t],
  );
}
