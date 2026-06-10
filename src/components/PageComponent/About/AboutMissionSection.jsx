import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const STAT_BACKGROUNDS = ["bg-[#f8f9fc]", "bg-[#eef1f8]", "bg-[#dde4f0]"];

export default function AboutMissionSection() {
  const { t } = useTranslation("about");
  const paragraphs = useMemo(() => t("mission.paragraphs", { returnObjects: true }), [t]);
  const stats = useMemo(() => t("mission.stats", { returnObjects: true }), [t]);

  return (
    <section className="bg-white px-5 py-12 shadow-[0_0_17.35px_rgba(0,0,0,0.15)] lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex min-w-0 flex-1 flex-col gap-6 lg:gap-12">
          <h2 className="about-section-title">
            <span className="font-bold">{t("mission.headingBold")}</span>{" "}
            <span className="text-[rgba(32,20,99,0.7)]">{t("mission.headingMuted")}</span>
          </h2>
          <div className="flex flex-col gap-6 text-base leading-6 text-[#4e546c]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-3.5 lg:w-[500px] lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.value}
              className={`flex flex-col items-center gap-4 rounded-lg px-6 py-5 text-center ${STAT_BACKGROUNDS[index]}`}
            >
              <p className="about-mission-stat w-full uppercase">{stat.value}</p>
              <p className="w-full text-sm font-normal leading-5 text-black max-lg:text-sm max-lg:leading-5 lg:max-w-[356px] lg:text-sm lg:leading-[19.25px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
