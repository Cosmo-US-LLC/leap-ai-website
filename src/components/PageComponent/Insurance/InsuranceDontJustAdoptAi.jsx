import { ArrowRight } from "lucide-react";

function InsuranceDontJustAdoptAi() {
  return (
    <section className="relative overflow-hidden bg-[#12174B] px-6 py-16 text-center text-[#fff]">
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.4),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.4),_transparent_55%)]" /> */}

      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
        <h2 className="text-[36px] font-[800] tracking-[-2.4px] italic uppercase leading-[36px] md:text-[48px] md:leading-[60px]">
          Don't Just Adopt AI.
          <span className="block text-[#A1BFDE]">Lead the Era.</span>
        </h2>

        {/* <p className="text-[20px] md:text-[18px] font-[500] leading-[28px] text-[#cbd5e1]">
          The smart companies start with understanding.
        </p> */}

        <button
          onClick={() => {
            const getReportSection = document.getElementById("get-report");
            if (getReportSection) {
              const header = document.querySelector("header");
              const headerHeight = header ? header.offsetHeight : 80;
              const offset = headerHeight + 20;
              const elementPosition =
                getReportSection.getBoundingClientRect().top;
              const offsetPosition =
                elementPosition + window.pageYOffset - offset;

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }
          }}
          className="btn_primary_for_insurance mt-2 uppercase transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] group"
        >
          Get Free Access
          <span className="inline-flex items-center justify-center">
            <ArrowRight
              className="h-[16px] w-[16px] transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </span>
        </button>
      </div>
    </section>
  );
}

export default InsuranceDontJustAdoptAi;
