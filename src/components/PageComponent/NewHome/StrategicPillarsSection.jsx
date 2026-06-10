import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import pillarsTeam from "../../../assets/images/new-home/pillars-team.webp";
import pillarsWorkforce from "../../../assets/images/new-home/pillars-workforce.webp";
import pillarsData from "../../../assets/images/new-home/pillars-data.webp";
import pillarsExecution from "../../../assets/images/new-home/pillars-execution.webp";
import { CheckIcon } from "./icons/CheckIcon.jsx";
import { SectionHeading } from "./SectionHeading.jsx";
import { PrimaryCtaButton } from "./PrimaryCtaButton.jsx";

const TAB_IDS = ["architecture", "workforce", "data", "execution"];

const TAB_ASSETS = {
  architecture: { image: pillarsTeam },
  workforce: { image: pillarsWorkforce },
  data: { image: pillarsData, imageClassName: "object-[15%_center]" },
  execution: { image: pillarsExecution },
};

function MobileTabGrid({ tabs, activeTab, onSelect }) {
  const rows = [
    [tabs[0], tabs[1]],
    [tabs[2], tabs[3]],
  ];

  return (
    <div className="mb-6 w-full rounded-xl border border-[#eaeaea] p-2 lg:hidden">
      <div className="flex flex-col gap-2">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelect(tab.id)}
                className={`nh-tab flex flex-1 items-center justify-center rounded-full px-2 py-3 text-center transition ${
                  activeTab === tab.id
                    ? "bg-[#201463] text-[#f6f9fc]"
                    : "bg-[#f1f1f1] text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StrategicPillarsSection() {
  const { t } = useTranslation("home");
  const tabs = useMemo(
    () =>
      TAB_IDS.map((id) => ({
        id,
        label: t(`pillars.tabs.${id}.label`),
        title: t(`pillars.tabs.${id}.title`),
        description: t(`pillars.tabs.${id}.description`),
        benefitsLabel: t(`pillars.tabs.${id}.benefitsLabel`),
        benefits: t(`pillars.tabs.${id}.benefits`, { returnObjects: true }),
        ctaLabel: t(`pillars.tabs.${id}.ctaLabel`),
        imageAlt: t(`pillars.tabs.${id}.imageAlt`),
        ...TAB_ASSETS[id],
      })),
    [t],
  );
  const [activeTab, setActiveTab] = useState(TAB_IDS[0]);
  const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <section
      id="methodology"
      className="bg-white px-5 py-12 max-lg:px-5 max-lg:py-12 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          bold={t("pillars.headingBold")}
          muted={t("pillars.headingMuted")}
          subtitle={t("pillars.headingSubtitle")}
          className="mb-8 max-lg:mb-8 lg:mb-12"
        />

        <MobileTabGrid tabs={tabs} activeTab={activeTab} onSelect={setActiveTab} />

        <div className="mb-6 hidden justify-center overflow-x-auto lg:flex">
          <div className="inline-flex max-w-full gap-1 rounded-full border border-[#cad1dd] p-[5px]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`nh-tab whitespace-nowrap rounded-full px-5 py-3 transition ${
                  activeTab === tab.id
                    ? "bg-[#201463] text-[#f6f9fc]"
                    : "text-[rgba(32,20,99,0.7)] hover:text-[#201463]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-3xl border border-[#e7e7e7] bg-white p-4 max-lg:gap-6 max-lg:py-6 lg:grid lg:grid-cols-2 lg:gap-12 lg:p-12">
          <div className="flex flex-col gap-6 max-lg:gap-6 lg:gap-8">
            <div>
              <h3 className="nh-h3">{active.title}</h3>
              <p className="nh-body mt-4">{active.description}</p>
            </div>
            <div className="rounded-2xl bg-[#f2f6fb] p-4 max-lg:px-4 max-lg:py-5 lg:p-6">
              <p className="nh-label">{active.benefitsLabel}</p>
              <ul className="mt-3.5 flex flex-col gap-3 max-lg:gap-3 lg:mt-4">
                {active.benefits.map((item) => (
                  <li key={item} className="nh-body-sm flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[10px] bg-[#18a3e6]">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <PrimaryCtaButton
                variant="outline"
                className="home-pillars-outline-cta mt-5 !border-black lg:mt-4"
              >
                {active.ctaLabel}
              </PrimaryCtaButton>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[20px] max-lg:h-[318px] lg:rounded-[20px]">
            <img
              src={active.image}
              alt={active.imageAlt}
              className={`h-full w-full object-cover max-lg:min-h-[318px] lg:aspect-square lg:h-[530px] lg:w-[530px] ${active.imageClassName ?? ""}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
