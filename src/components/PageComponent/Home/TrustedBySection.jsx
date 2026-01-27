import { ShieldCheck, Zap, Users, FileText } from 'lucide-react';

export default function TrustedBySection() {
  const industries = [
    {
      id: 'insurance',
      icon: ShieldCheck,
      label: 'Insurance',
    },
    {
      id: 'manufacturing',
      icon: Zap,
      label: 'Manufacturing',
    },
    {
      id: 'healthcare',
      icon: Users,
      label: 'Healthcare',
    },
    {
      id: 'finance',
      icon: FileText,
      label: 'Finance',
    },
  ];

  return (
    <section className="border-y border-[#f1f5f9] bg-[rgba(248,250,252,0.5)] py-12">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-7 px-4 md:px-8">
        <p className="md:text-[14px] text-[16px] font-[700] uppercase tracking-[1.2px] text-[#7a94b8] leading-[16px] transition-colors duration-300">
          Trusted by leaders in
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.id}
                className="flex items-center gap-3 opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-110 cursor-default group"
              >
                <Icon className="h-6 w-6 text-[#2b2b76] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" aria-hidden />
                <span className="text-[18px] font-[700] leading-[28px] text-[#2b2b76] transition-colors duration-300 group-hover:text-[#2b2b76]">
                  {industry.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
