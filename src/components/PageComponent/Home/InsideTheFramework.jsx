import { Users, Zap, Heart, Database } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function InsideTheFramework() {
  const components = [
    {
      id: '01',
      number: '01',
      icon: Users,
      title: 'People & Workforce Enablement',
      description:
        'Activate your team to drive innovation, build AI literacy, and create a culture of experimentation. Use AI to support and empower employees, not replace them, while establishing career growth and trust.',
    },
    {
      id: '02',
      number: '02',
      icon: Zap,
      title: 'Strategy & Operational Impact',
      description:
        'Define purpose and outcomes before selecting technology. Focus on initiatives that deliver immediate ROI, reduce friction, and align AI adoption with your top business priorities.',
    },
    {
      id: '03',
      number: '03',
      icon: Heart,
      title: 'Customer-Centered Design',
      description:
        'Center every initiative on the customer experience. Ensure AI projects enhance satisfaction, loyalty, and revenue while avoiding disruption to operations.',
    },
    {
      id: '04',
      number: '04',
      icon: Database,
      title: 'Data, Governance & Improvement',
      description:
        'Build a unified data foundation, track actionable KPIs, and implement governance frameworks that ensure trust, security, and compliance. Create feedback loops that drive ongoing learning and scalable value.',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-[30px] font-[800] leading-[37px] text-[#2b2b76] md:text-[44px] md:leading-[48px]">
            Inside the Framework
          </h2>
          <p className="mt-3 text-[20px] font-[500] leading-[28px] text-[#475569] md:text-[18px] md:leading-[28px]">
            The 4 essential components of a successful AI strategy.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {components.map((component) => (
            <FrameworkCard key={component.id} {...component} />
          ))}
        </div>

        <div className="flex justify-center">
          <button className="btn_primary mt-4 flex items-center gap-2">
            Get Your Free Report
            <span className="inline-flex h-[20px] w-[20px] items-center justify-center">
              <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function FrameworkCard({ number, icon: Icon, title, description }) {
  return (
    <div className="relative rounded-[32px] border border-[#e2e8f0] bg-[#f8fafc] p-10">
      <div className="absolute right-10 top-10">
        <span className="text-[60px] font-[900] leading-[60px] text-[rgba(226,232,240,0.5)]">
          {number}
        </span>
      </div>

      <div className="relative z-10">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#f1f5f9] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
          <Icon className="h-8 w-8 text-[#3e6db5]" aria-hidden />
        </div>

        <h3 className="mb-4 text-[24px] font-[800] leading-[32px] text-[#2b2b76] md:text-[24px]">
          {title}
        </h3>

        <p className="font-[700] leading-[24px] text-[#475569] text-[16px]">
          {description}
        </p>
      </div>
    </div>
  );
}
