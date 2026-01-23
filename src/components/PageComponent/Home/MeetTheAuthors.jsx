export default function MeetTheAuthors() {
  return (
    <section className="bg-[#f8fafc] border-t border-[#e2e8f0] py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-4 md:px-8">
        <h2 className="text-center text-[30px] font-[800] leading-[36px] text-[#2b2b76] md:text-[44px] md:leading-[40px]">
          Meet the Authors
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <AuthorCard
            initials="BG"
            name="Benjamin Gonzalez"
            role="Co-Founder, Leap AI"
            description="Specializing in AI development and marketing management, bridging the gap between technical complexity and market needs."
          />
          <AuthorCard
            initials="GvD"
            name="Gregory van Duyse"
            role="Co-Founder, Leap AI"
            description="Focused on strategic integration and high-level business transformation for companies scaling beyond 50 employees."
          />
        </div>
      </div>
    </section>
  );
}

function AuthorCard({ initials, name, role, description }) {
  return (
    <div className="flex items-center gap-6 rounded-[24px] border border-[#f1f5f9] bg-white px-6 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.05)] md:px-8 md:py-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3e6db51a]">
        <span className="text-[20px] font-[800] leading-[28px] text-[#3e6db5]">{initials}</span>
      </div>
      <div className="space-y-1 text-left">
        <p className="text-[20px] font-[700] leading-[28px] text-[#2b2b76]">{name}</p>
        <p className="text-[14px] font-[800] leading-[20px] uppercase tracking-[0.025em] text-[#3e6db5]">
          {role}
        </p>
        <p className="text-[14px] max-w-[350px] font-[500] leading-[20px] text-[#475569]">{description}</p>
      </div>
    </div>
  );
}

