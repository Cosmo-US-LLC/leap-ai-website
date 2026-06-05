import { useState } from "react";
import pillarsTeam from "../../../assets/images/new-home/pillars-team.webp";
import pillarsWorkforce from "../../../assets/images/new-home/pillars-workforce.webp";
import pillarsData from "../../../assets/images/new-home/pillars-data.webp";
import pillarsExecution from "../../../assets/images/new-home/pillars-execution.webp";
import { CheckIcon } from "./icons/CheckIcon.jsx";
import { SectionHeading } from "./SectionHeading.jsx";
import { PrimaryCtaButton } from "./PrimaryCtaButton.jsx";

const TABS = [
  {
    id: "architecture",
    label: "Strategic AI Architecture",
    title: "Stop random pilots. Start systematic advantage.",
    description:
      "Our strategic experts guide you through our proven 7-pillar framework to define a clear vision and AI adoption strategy aligned with your business goals. We help you navigate AI's rapid pace with strategic urgency, acting now on foundational work while designing for future adaptability.",
    benefitsLabel: "What you get:",
    benefits: [
      "Real opportunity identification through strategic workshops",
      "Team alignment and buy-in across all departments",
      "Practical governance frameworks that build confidence",
      "Clear direction with well-defined, ready-to-execute projects",
    ],
    ctaLabel: "Talk to an expert",
    image: pillarsTeam,
    imageAlt: "Team collaborating on AI strategy",
  },
  {
    id: "workforce",
    label: "Workforce Intelligence Transformation",
    title: "Turn AI anxiety and fear or replacement into an innovation engine.",
    description:
      "We don't just train people on AI tools. We redesign roles around human-AI collaboration, showing your team how AI makes them more valuable, not replaceable.",
    benefitsLabel: "Our Approach:",
    benefits: [
      "3-5 year evolution map for every role.",
      "Clear AI-augmented future vision for each employee.",
      "Transform fear into competitive enthusiasm.",
      "Build internal innovation champions.",
    ],
    ctaLabel: "Read More",
    image: pillarsWorkforce,
    imageAlt: "Colleagues reviewing work on a laptop together",
  },
  {
    id: "data",
    label: "Data Infrastructure & Intelligence",
    title: "Build the nervous system for autonomous advantage.",
    description:
      "What if your business could think? Not just process data, but actually understand patterns, predict problems, and optimize itself in real-time across every function?",
    benefitsLabel: "Your business can:",
    benefits: [
      "Spot opportunities before they become obvious.",
      "Prevent problems before they become expensive.",
      "Make connections human minds would never see.",
      "Develop institutional intuition that compounds over time.",
    ],
    ctaLabel: "Find Out More",
    image: pillarsData,
    imageAlt: "Professional working on a laptop in a modern office",
    imageClassName: "object-[15%_center]",
  },
  {
    id: "execution",
    label: "AI Implementation & Execution",
    title: "Deploy AI that makes competitors scramble to understand what you did.",
    description:
      "Our Strategic Leverage Projects don't just improve what you do,they fundamentally change what's possible in your industry. We identify the exact moment where AI can create customer value that didn't exist yesterday.",
    benefitsLabel: "The impact:",
    benefits: [
      "Massive market ripples created by small, targeted changes.",
      "Customer experiences that spoil them for competitors.",
      "New market categories emerge around your offerings.",
      "Fundamental shifts in industry possibilities.",
    ],
    ctaLabel: "Read more",
    image: pillarsExecution,
    imageAlt: "Team members reviewing a tablet in the office",
  },
];

function MobileTabGrid({ activeTab, onSelect }) {
  const rows = [
    [TABS[0], TABS[1]],
    [TABS[2], TABS[3]],
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
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const active = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  return (
    <section
      id="methodology"
      className="bg-white px-5 py-12 max-lg:px-5 max-lg:py-12 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          bold="Unrivaled advantage, built by "
          muted="collective intelligence."
          subtitle="As proven former CEOs and CTOs, we have been in your shoes. We are the reliable partners who help you successfully navigate the AI revolution and overcome uncertainty."
          className="mb-8 max-lg:mb-8 lg:mb-12"
        />

        <MobileTabGrid activeTab={activeTab} onSelect={setActiveTab} />

        <div className="mb-6 hidden justify-center overflow-x-auto lg:flex">
          <div className="inline-flex max-w-full gap-1 rounded-full border border-[#cad1dd] p-[5px]">
            {TABS.map((tab) => (
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
