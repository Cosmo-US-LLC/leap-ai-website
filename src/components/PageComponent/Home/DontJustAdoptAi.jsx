import { ArrowRight } from "lucide-react";

function DontJustAdoptAi() {
  return (
    <section className="relative overflow-hidden bg-[#1e255f] px-6 py-16 text-center text-[#fff]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.4),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.4),_transparent_55%)]" />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
        <h2 className="text-[36px] font-[800] leading-[36px] md:text-[44px] md:leading-[48px]">
          Don't Just Adopt AI.
          <span className="block text-[#3e6db5]">Lead the Era.</span>
        </h2>

        <p className="text-[20px] md:text-[18px] font-[500] leading-[28px] text-[#cbd5e1]">
          The smart companies start with understanding.
        </p>

        <button className="btn_primary mt-2">
          Get Your Free Report
          <span className="inline-flex items-center justify-center">
            <ArrowRight className="h-[16px] w-[16px]" aria-hidden />
          </span>
        </button>
      </div>
    </section>
  );
}

export default DontJustAdoptAi;

