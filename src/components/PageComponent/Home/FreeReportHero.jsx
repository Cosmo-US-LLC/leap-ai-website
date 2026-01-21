import { User, Building2, Mail, Phone, ShieldCheck } from "lucide-react";

export default function FreeReportHero() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.2),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.18),_transparent_55%)]" />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 md:flex-row md:items-start md:justify-between md:px-8">
        {/* Left copy */}
        <div className="max-w-xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white/70 px-3 py-1 text-[12px] font-[700] uppercase tracking-[0.12em] text-[#3e6db5] shadow-sm">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#3e6db5] text-[10px] text-white">
              ★
            </span>
            <span>Free 7 Pillars Report</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-[36px] font-[800] leading-[42px] text-[#2b2b76] md:text-[48px] md:leading-[52px]">
              <span className="block">Make the Right AI</span>
              <span className="block">Decisions</span>
              <span className="block">Before You Spend.</span>
            </h1>
            <p className="text-[14px] font-[800] uppercase tracking-[0.12em] text-[#3e6db5] md:text-[14px]">
              The free 7 pillars of AI implementation written for executive
            </p>
          </div>

          <p className="text-[16px] font-[500] leading-[26px] text-[#475569] md:text-[18px] md:leading-[28px]">
            A practical, business-first framework that shows mid-market leaders where AI actually
            creates ROI before investing in tools, vendors, or pilots.
          </p>

          <div className="flex flex-wrap gap-4 text-[14px] font-[600] leading-[20px] text-[#64748b]">
            <Badge text="No Credit Card Required" />
            <Badge text="Instant PDF Access" />
            <Badge text="Read in 60 Minutes" />
          </div>
        </div>

        {/* Right form card */}
        <div className="w-full max-w-md">
          <div className="overflow-hidden rounded-[24px] border border-[#f1f5f9] bg-white shadow-[0_25px_50px_-12px_rgba(15,23,42,0.35)]">
            <div className="h-2 bg-gradient-to-r from-[#3e6db5] to-[#059669]" />
            <div className="space-y-6 px-6 py-6 md:px-8 md:py-8">
              <div className="space-y-1">
                <h3 className="text-[20px] font-[800] leading-[28px] text-[#2b2b76]">
                  Get the Report
                </h3>
                <p className="text-[14px] font-[500] leading-[20px] text-[#64748b]">
                  Join 2,000+ executives leading the AI era.
                </p>
              </div>

              <div className="space-y-4">
                <Field label="Name" icon={User} placeholder="John Doe" />
                <Field label="Company Name" icon={Building2} placeholder="Acme Corp" />
                <Field label="Work Email" icon={Mail} placeholder="john@company.com" type="email" />

                <div className="space-y-2">
                  <Label icon={Phone} text="Phone Number" />
                  <div className="flex gap-3">
                    <select className="w-32 rounded-[12px] border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2 text-[14px] font-[500] text-[#1e293b] outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                      <option>US/CA (+1)</option>
                      <option>UK (+44)</option>
                      <option>EU (+49)</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="555-0123"
                      className="flex-1 rounded-[12px] border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2 text-[14px] font-[500] text-[#0f172a] outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    />
                  </div>
                </div>

                <button className="btn_primary mt-2 flex w-full items-center justify-center gap-2 rounded-[12px]">
                  <span>Get Your Free Report</span>
                </button>

                <div className="flex items-center justify-center gap-2 pt-1 text-[12px] font-[600] leading-[16px] text-[#3e6db5]">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                  <span>100% secure. No spam.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 text-[12px] font-[700] uppercase tracking-[0.1em] text-[#2b2b76]">
      <Icon className="h-3.5 w-3.5 text-[#3e6db5]" aria-hidden />
      <span>{text}</span>
    </div>
  );
}

function Field({ label, icon, placeholder, type = "text" }) {
  return (
    <div className="space-y-2">
      <Label icon={icon} text={label} />
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-[12px] border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2 text-[14px] font-[500] text-[#0f172a] outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      />
    </div>
  );
}

function Badge({ text }) {
  return (
    <div className="inline-flex items-center gap-2 text-[13px]">
      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#059669]/10">
        <span className="h-2 w-2 rounded-full bg-[#059669]" />
      </span>
      <span className="text-[#64748b]">{text}</span>
    </div>
  );
}

