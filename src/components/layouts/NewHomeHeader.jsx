import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoDark from "../../assets/images/new-home/icons/logo-dark.svg";
import globeIcon from "../../assets/images/new-home/icons/globe.svg";
import chevronDown from "../../assets/images/new-home/icons/chevron-down.svg";
import menuIcon from "../../assets/images/new-home/icons/menu-icon.svg";
import menuClose from "../../assets/images/new-home/icons/menu-close.svg";
import { DEMOS_URL, FREE_CONSULTATION_URL } from "../../lib/newHomeLinks.js";
import { PrimaryCtaButton } from "../PageComponent/NewHome/PrimaryCtaButton.jsx";
import { ArrowRightIcon } from "../PageComponent/NewHome/icons/ArrowRightIcon.jsx";
import { NewHomeMobileMenu } from "./NewHomeMobileMenu.jsx";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Methodology", to: "/methodology" },
  { label: "Case studies", to: "/case-studies" },
  { label: "Demos", to: DEMOS_URL },
];

function MobileHeaderCta() {
  return (
    <a
      href={FREE_CONSULTATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="nh-mobile-header-cta inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#201463] text-white transition hover:opacity-95"
    >
      <span>Book a call</span>
      <span className="flex size-5 shrink-0 items-center justify-center rounded-[10px] bg-white text-[#201463]">
        <ArrowRightIcon className="h-2.5 w-2.5" dark />
      </span>
    </a>
  );
}

export function NewHomeHeader() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isLinkActive = (to) => {
    if (to === "/") return location.pathname === "/";
    if (to.startsWith("/")) return location.pathname === to;
    return false;
  };

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 px-4 pt-4 lg:px-8 lg:pt-5">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-2 rounded-[10px] border border-[rgba(32,20,99,0.1)] bg-white/95 px-[25px] py-[13px] backdrop-blur-[26px] lg:gap-4 lg:px-6 lg:py-3">
          <Link to="/" className="shrink-0" aria-label="Leap 41 home">
            <img
              src={logoDark}
              alt="Leap 41"
              className="h-6 w-[93px] lg:h-8 lg:w-[125px]"
            />
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex" aria-label="Main">
            {NAV_LINKS.map((link) => {
              const className = `nh-nav-link rounded-lg px-4 py-1.5 transition ${
                isLinkActive(link.to)
                  ? "bg-[rgba(43,43,118,0.1)] text-[#201463]"
                  : "text-[rgba(0,0,0,0.7)] hover:text-[#201463]"
              }`;

              if (link.to.startsWith("http")) {
                return (
                  <a
                    key={link.label}
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link key={link.label} to={link.to} className={className}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="nh-header-actions-desktop">
            <button
              type="button"
              className="nh-nav-lang inline-flex items-center gap-2 rounded-full bg-[rgba(196,196,196,0.2)] px-3 py-2 text-black"
              aria-label="Language selector"
            >
              <img src={globeIcon} alt="" className="h-[18px] w-[18px]" aria-hidden />
              <span>English</span>
            </button>

            <PrimaryCtaButton
              className="nh-header-desktop-cta"
              variant="navy"
              iconBg="bg-white"
            >
              Book a Call
            </PrimaryCtaButton>
          </div>

          <div className="nh-header-actions-mobile">
            <MobileHeaderCta />

            <button
              type="button"
              className="flex pl-2 size-8 shrink-0 items-center justify-center"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <img
                src={menuOpen ? menuClose : menuIcon}
                alt=""
                width={menuOpen ? 12 : 24}
                height={menuOpen ? 12 : 24}
                className={`block shrink-0 ${menuOpen ? "size-6" : "size-6"}`}
                aria-hidden
              />
            </button>
          </div>
        </div>
      </header>

      <NewHomeMobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        navLinks={NAV_LINKS}
        isLinkActive={isLinkActive}
      />
    </>
  );
}
