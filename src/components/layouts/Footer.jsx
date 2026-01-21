export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#fff] py-12">
      <div className="mx-auto flex w-full max-w-[1280px] px-4 md:px-8 items-center gap-4 text-[#64748b] justify-between md:flex-row flex-col h-full">
        <div className="font-semibold text-foreground"></div>
        <div className="text-center text-[14px] font-[700] leading-[20px] text-[#64748b]">
          © {year} Leap AI. All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-[14px] font-[700] leading-[20px] text-[#64748b]">
          <a className="hover:text-foreground" href="#privacy">
            Privacy Policy
          </a>
          <a className="hover:text-foreground" href="#terms">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
