import InsightsPageSection from "../components/PageComponent/Insights/InsightsPageSection.jsx";
import { usePageMetaI18n } from "../hooks/usePageMetaI18n.js";

export default function Insights() {
  usePageMetaI18n("insights");

  return <InsightsPageSection />;
}
