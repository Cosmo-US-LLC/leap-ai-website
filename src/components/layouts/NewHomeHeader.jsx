import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import logoDark from "../../assets/images/new-home/icons/logo-dark.svg";
import globeIcon from "../../assets/images/new-home/icons/globe.svg";
import chevronDown from "../../assets/images/new-home/icons/chevron-down.svg";
import { PrimaryCtaButton } from "../PageComponent/NewHome/PrimaryCtaButton.jsx";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet.jsx";
import { Button } from "../ui/button.jsx";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Methodology", to: "#methodology" },
  { label: "Case studies", to: "#case-studies" },
  { label: "Demos", to: "#demos" },
];

export function NewHomeHeader() {
  const location = useLocation();

  const isLinkActive = (to) => {
    if (to === "/") return location.pathname === "/";
    if (to.startsWith("/")) return location.pathname === to;
    return false;
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 pt-4 lg:px-8 lg:pt-5">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 rounded-[10px] border border-[rgba(32,20,99,0.1)] bg-white/95 px-4 py-3 backdrop-blur-[26px] lg:gap-4 lg:px-6">
        <Link to="/" className="shrink-0" aria-label="Leap 41 home">
          <img src={logoDark} alt="Leap 41" className="h-8 w-[125px]" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`nh-nav-link rounded-lg px-4 py-1.5 transition ${
                isLinkActive(link.to)
                  ? "bg-[rgba(43,43,118,0.1)] text-[#201463]"
                  : "text-[rgba(0,0,0,0.7)] hover:text-[#201463]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="nh-nav-lang hidden items-center gap-2 rounded-full bg-[rgba(196,196,196,0.2)] px-3 py-2 text-black lg:flex"
            aria-label="Language selector"
          >
            <img src={globeIcon} alt="" className="h-[18px] w-[18px]" aria-hidden />
            <span>English</span>
            <img src={chevronDown} alt="" className="h-3 w-3" aria-hidden />
          </button>

          <PrimaryCtaButton
            className="nh-btn-bold hidden !px-4 !py-2 lg:inline-flex"
            variant="navy"
          >
            Book a call
          </PrimaryCtaButton>

          <PrimaryCtaButton className="nh-btn-bold !px-3 !py-2 text-xs lg:hidden" variant="navy">
            Book a call
          </PrimaryCtaButton>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[min(100vw-2rem,320px)] flex-col gap-6">
              <SheetHeader className="text-left">
                <SheetTitle className="text-[#201463]">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <Link
                      to={link.to}
                      className={`nh-nav-link rounded-lg px-3 py-2.5 transition ${
                        isLinkActive(link.to)
                          ? "bg-[rgba(43,43,118,0.1)] text-[#201463]"
                          : "text-[rgba(0,0,0,0.7)] hover:text-[#201463]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <PrimaryCtaButton className="w-full justify-center" variant="navy">
                  Book a call
                </PrimaryCtaButton>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
