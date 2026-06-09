import InsightsPageSection from "../components/PageComponent/Insights/InsightsPageSection.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

const INSIGHTS_META = {
  title: "Insights & Strategy Resources | Leap AI",
  description:
    "Explore insights on AI strategy, leadership, and transformation. Learn how to align AI with business goals and drive measurable results",
};

export default function Insights() {
  usePageMeta(INSIGHTS_META);

  return <InsightsPageSection />;
}
