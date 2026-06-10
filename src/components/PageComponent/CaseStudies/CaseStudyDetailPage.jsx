import { useTranslation } from "react-i18next";
import {
  AlertTriangle,
  BarChart3,
  Building2,
  Calendar,
  CalendarClock,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Code2,
  DollarSign,
  EyeOff,
  FileAudio,
  FilePlus,
  LayoutDashboard,
  MapPin,
  MessageSquareText,
  MessagesSquare,
  Mic,
  PanelRight,
  PlaneTakeoff,
  Scale,
  ScanSearch,
  SlidersHorizontal,
  TrendingUp,
} from "lucide-react";
import heroGrid from "../../../assets/images/about/hero-grid.webp";
import AboutTrustSection from "../About/AboutTrustSection.jsx";
import CaseStudiesSection from "../NewHome/CaseStudiesSection.jsx";
import { CheckIcon } from "../NewHome/icons/CheckIcon.jsx";
import { PrimaryCtaButton } from "../NewHome/PrimaryCtaButton.jsx";
import { CaseStudyParagraphs } from "./CaseStudyRichText.jsx";

const HIGHLIGHT_ICONS = {
  calendar: Calendar,
  calendarClock: CalendarClock,
  clock: Clock,
  dollar: DollarSign,
  plane: PlaneTakeoff,
  alert: AlertTriangle,
  sliders: SlidersHorizontal,
  barChart: BarChart3,
  eyeOff: EyeOff,
  scale: Scale,
};

const STEP_ICONS = {
  file: FilePlus,
  code: Code2,
  search: ScanSearch,
  deploy: PanelRight,
  clipboardList: ClipboardList,
  messages: MessagesSquare,
  feedback: MessageSquareText,
  trendingUp: TrendingUp,
  mic: Mic,
  fileAudio: FileAudio,
  clipboardCheck: ClipboardCheck,
  layoutDashboard: LayoutDashboard,
};

function CaseStudyHero({ study }) {
  const { t } = useTranslation("caseStudies");
  const { hero } = study;

  return (
    <section className="relative overflow-hidden bg-[#151515] pt-[124px] pb-16 lg:pt-[162px] lg:pb-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(ellipse_55%_45%_at_50%_20%,rgba(61,81,160,0.5)_0%,transparent_65%),radial-gradient(ellipse_40%_40%_at_88%_40%,rgba(143,219,255,0.6)_0%,transparent_60%),linear-gradient(180deg,rgba(61,81,160,0.18)_0%,transparent_70%)]"
        aria-hidden
      />
      <img
        src={heroGrid}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-5 top-0 z-[1] h-auto w-[min(606px,120vw)] max-w-none opacity-90 lg:-left-[171px] lg:-top-[103px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1080px] flex-col items-start gap-5 px-5 text-left lg:items-center lg:px-20 lg:text-center">
        <h1 className="text-[40px] leading-[46px] text-white lg:text-[64px] lg:leading-[66px]">
          {hero.titlePrefix ? (
            <>
              <span className="font-normal">{hero.titlePrefix}</span>
              <span className="font-bold text-[#18a3e6]">{hero.titleHighlight}</span>
            </>
          ) : (
            <span className="font-bold">{hero.titleHighlight}</span>
          )}
        </h1>
        <p className="max-w-[800px] text-base leading-6 text-[#dbdbdb]">{hero.subtitle}</p>
        <PrimaryCtaButton className="shrink-0 self-start lg:self-center">
          {t("detail.bookStrategyCall")}
        </PrimaryCtaButton>
      </div>
    </section>
  );
}

function HighlightCards({ cards }) {
  const rowCards = cards.filter((card) => !card.fullWidth);
  const fullWidthCards = cards.filter((card) => card.fullWidth);

  return (
    <div className="flex w-full flex-col gap-4">
      {rowCards.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {rowCards.map((card) => {
            const Icon = HIGHLIGHT_ICONS[card.icon];
            return (
              <div
                key={card.title}
                className="flex flex-col gap-4 rounded-2xl border border-[#f8f8f8] bg-[#fafcfe] p-[17px]"
              >
                {Icon ? <Icon className="h-6 w-6 text-[#201463]" strokeWidth={1.5} /> : null}
                <div className="flex flex-col gap-2">
                  <h3 className="font-extrabold text-lg leading-[26px] text-[#201463]">
                    {card.title}
                  </h3>
                  <p className="text-base leading-6 text-[#4e546c]">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}

      {fullWidthCards.map((card) => {
        const Icon = HIGHLIGHT_ICONS[card.icon];
        return (
          <div
            key={card.title}
            className="flex w-full max-w-full flex-col gap-4 rounded-2xl border border-[#f8f8f8] bg-[#fafcfe] p-[17px] lg:max-w-[358px]"
          >
            {Icon ? <Icon className="h-6 w-6 text-[#201463]" strokeWidth={1.5} /> : null}
            <div className="flex flex-col gap-2">
              <h3 className="font-extrabold text-lg leading-[26px] text-[#201463]">
                {card.title}
              </h3>
              <p className="text-base leading-6 text-[#4e546c]">{card.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ChecklistSection({ intro, items }) {
  return (
    <div className="flex flex-col gap-4">
      {intro ? <p className="text-base leading-6 text-[#4e546c]">{intro}</p> : null}
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-[22px] text-[#373737]">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[10px] bg-[#18a3e6]">
              <CheckIcon />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function HowItWorksSection({ title, steps }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[28px] font-bold leading-9 text-[#201463] lg:text-[32px] lg:leading-10">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {steps.map((step) => {
          const Icon = STEP_ICONS[step.icon];
          return (
            <div
              key={step.title}
              className="flex flex-col gap-4 rounded-2xl border border-[#f8f8f8] bg-[#fafcfe] p-[17px]"
            >
              {Icon ? <Icon className="h-6 w-6 text-[#201463]" strokeWidth={1.5} /> : null}
              <div className="flex flex-col gap-2">
                <h3 className="font-extrabold text-lg leading-[26px] text-[#201463]">
                  {step.title}
                </h3>
                <p className="text-base leading-6 text-[#4e546c]">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CalloutBox({ title, paragraphs }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-[#f8f9fc] p-6">
      <h3 className="text-xl font-bold leading-7 text-[#201463]">{title}</h3>
      <CaseStudyParagraphs paragraphs={paragraphs} />
    </div>
  );
}

function ImpactAtGlance({ metrics }) {
  const { t } = useTranslation("caseStudies");
  const rows = [metrics.slice(0, 2), metrics.slice(2, 4)];

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl leading-[26px] tracking-[0.6px] text-[#1a2063] lg:text-xl lg:leading-7">
        {t("detail.impactTitle")}
      </h2>
      <div className="flex flex-col gap-2 pt-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.map((metric) => (
              <div
                key={metric.label}
                className="flex min-w-0 flex-1 flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center lg:gap-4 lg:px-6 lg:py-8"
              >
                <p className="font-extrabold text-[32px] leading-10 text-[#2b2b76] lg:text-[40px] lg:leading-[48px]">
                  {metric.value}
                </p>
                <p className="text-center text-sm leading-[21px] text-[#4e546c] lg:text-base lg:leading-normal">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseStudySidebar({ sidebar }) {
  const { t } = useTranslation("caseStudies");

  return (
    <aside className="h-fit w-full shrink-0 rounded-[20px] bg-[#f8f9fc] px-4 py-6 lg:sticky lg:top-28 lg:w-[450px] lg:px-6 lg:py-8">
      <div className="flex flex-col gap-6">
        <ImpactAtGlance metrics={sidebar.metrics} />

        <hr className="border-[#e8ecf4]" />

        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-xl leading-7 tracking-[0.6px] text-[#1a2063]">
            {t("detail.deliveredTitle")}
          </h2>
          <ul className="flex flex-col gap-3">
            {sidebar.delivered.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-[22px] text-[#373737]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[10px] bg-[#18a3e6]">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-[#e8ecf4]" />

        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-xl leading-7 tracking-[0.6px] text-[#1a2063]">
            {t("detail.technologiesTitle")}
          </h2>
          <div className="flex flex-wrap gap-3">
            {sidebar.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white px-5 py-2 text-sm leading-[22px] text-[#4e546c]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-[#e8ecf4]" />

        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Building2 className="mt-0.5 h-6 w-6 shrink-0 text-[#201463]" strokeWidth={1.5} />
            <div>
              <p className="font-semibold text-base leading-6 text-black">{t("detail.industryLabel")}</p>
              <p className="text-sm leading-6 text-[#6a707e]">{sidebar.industry}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-[#201463]" strokeWidth={1.5} />
            <div>
              <p className="font-semibold text-base leading-6 text-black">{t("detail.locationLabel")}</p>
              <p className="text-sm leading-6 text-[#6a707e]">{sidebar.location}</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function renderSection(section) {
  switch (section.type) {
    case "content":
      return (
        <div key={section.title} className="flex flex-col gap-4">
          <h2 className="text-[28px] font-bold leading-9 text-[#201463] lg:text-[32px] lg:leading-10">
            {section.title}
          </h2>
          <CaseStudyParagraphs paragraphs={section.paragraphs} />
        </div>
      );
    case "highlightCards":
      return <HighlightCards key="highlight-cards" cards={section.cards} />;
    case "callout":
      return (
        <CalloutBox
          key={section.title}
          title={section.title}
          paragraphs={section.paragraphs}
        />
      );
    case "checklist":
      return (
        <ChecklistSection
          key={section.intro}
          intro={section.intro}
          items={section.items}
        />
      );
    case "howItWorks":
      return (
        <HowItWorksSection key={section.title} title={section.title} steps={section.steps} />
      );
    default:
      return null;
  }
}

export default function CaseStudyDetailPage({ study }) {
  const { t } = useTranslation("caseStudies");
  const { cta, sections } = study;

  return (
    <>
      <CaseStudyHero study={study} />

      <section className="bg-white px-5 py-12 lg:px-20 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
          <div className="flex min-w-0 flex-1 flex-col gap-8">{sections.map(renderSection)}</div>
          <CaseStudySidebar sidebar={study.sidebar} />
        </div>
      </section>

      <AboutTrustSection
        titleBold={cta.titleBold}
        titleMuted={cta.titleMuted}
        description={cta.description}
        photo={cta.image}
        photoAlt={cta.imageAlt}
        button={<PrimaryCtaButton>{t("detail.bookStrategyCall")}</PrimaryCtaButton>}
      />

      <CaseStudiesSection
        headingPrefix={t("detail.relatedHeadingPrefix")}
        headingMuted={t("detail.relatedHeadingMuted")}
        showCtaButton={false}
      />
    </>
  );
}
