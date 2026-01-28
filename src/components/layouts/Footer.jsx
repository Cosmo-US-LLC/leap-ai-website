import { Link } from "react-router-dom";
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#fff] py-12 border-t border-[#e2e8f0]">
      <div className="mx-auto flex w-full max-w-[1280px] px-4 md:px-8 items-center gap-4 text-[#64748b] justify-between md:flex-row flex-col h-full">
        <div className="font-semibold text-foreground flex-1"></div>
        <div className="text-center flex-1 text-[14px] font-[700] leading-[20px] text-[#64748b]">
          © {year} Leap AI. All rights reserved.
        </div>
        <div className="flex flex-1 items-center justify-end gap-4 text-[14px] font-[700] leading-[20px] text-[#64748b]">
          {/* <a className="hover:text-foreground" href="#privacy">
            Privacy Policy
          </a> */}
          <Link to="/privacy-policy" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <Link to="/terms-of-services" className="hover:text-foreground">
            Terms of Service
          </Link>
          {/* <a className="hover:text-foreground" href="#terms">
            Terms of Service
          </a> */}
        </div>
      </div>
    </footer>
  );
}
