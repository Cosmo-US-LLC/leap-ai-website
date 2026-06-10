import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logoDark from "../../assets/images/new-home/icons/logo-dark.svg";
import menuIcon from "../../assets/images/new-home/icons/menu-icon.svg";
import menuClose from "../../assets/images/new-home/icons/menu-close.svg";
import { DEMOS_URL, FREE_CONSULTATION_URL } from "../../lib/newHomeLinks.js";
import { stripLocaleFromPath } from "../../lib/locale.js";
import { PrimaryCtaButton } from "../PageComponent/NewHome/PrimaryCtaButton.jsx";
import { ArrowRightIcon } from "../PageComponent/NewHome/icons/ArrowRightIcon.jsx";
import { LocaleLink } from "./LocaleLink.jsx";
import { LanguageSwitcher } from "./LanguageSwitcher.jsx";
import { NewHomeMobileMenu } from "./NewHomeMobileMenu.jsx";

function MobileHeaderCta({ label }) {
  return (
    <a
      href={FREE_CONSULTATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="nh-mobile-header-cta inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#201463] text-white transition hover:opacity-95"
    >
      <span>{label}</span>
      <span className="flex size-5 shrink-0 items-center justify-center rounded-[10px] bg-white text-[#201463]">
        <ArrowRightIcon className="h-2.5 w-2.5" dark />
      </span>
    </a>
  );
}

export function NewHomeHeader() {
  const location = useLocation();
  const { t } = useTranslation("common");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { labelKey: "nav.home", to: "/" },
      { labelKey: "nav.about", to: "/about" },
      { labelKey: "nav.methodology", to: "/methodology" },
      { labelKey: "nav.caseStudies", to: "/case-studies" },
      { labelKey: "nav.demos", to: DEMOS_URL },
    ],
    [],
  );

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const activePath = stripLocaleFromPath(location.pathname);

  const isLinkActive = (to) => {
    if (to === "/") return activePath === "/";
    if (to.startsWith("/")) return activePath === to;
    return false;
  };

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 px-4 pt-4 lg:px-8 lg:pt-5">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-2 rounded-[10px] border border-[rgba(32,20,99,0.1)] bg-white/95 px-[25px] py-[13px] backdrop-blur-[26px] lg:gap-4 lg:px-6 lg:py-3">
          <LocaleLink to="/" className="shrink-0" aria-label={t("aria.home")}>
            <img
              src={logoDark}
              alt="Leap 41"
              className="h-6 w-[93px] lg:h-8 lg:w-[125px]"
            />
          </LocaleLink>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex" aria-label={t("aria.mainNav")}>
            {navLinks.map((link) => {
              const className = `nh-nav-link rounded-lg px-4 py-1.5 transition ${
                isLinkActive(link.to)
                  ? "bg-[rgba(43,43,118,0.1)] text-[#201463]"
                  : "text-[rgba(0,0,0,0.7)] hover:text-[#201463]"
              }`;

              if (link.to.startsWith("http")) {
                return (
                  <a
                    key={link.labelKey}
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {t(link.labelKey)}
                  </a>
                );
              }

              return (
                <LocaleLink key={link.labelKey} to={link.to} className={className}>
                  {t(link.labelKey)}
                </LocaleLink>
              );
            })}
          </nav>

          <div className="nh-header-actions-desktop">
            <LanguageSwitcher variant="header" />

            <PrimaryCtaButton
              className="nh-header-desktop-cta"
              variant="navy"
              iconBg="bg-white"
            >
              {t("cta.bookACall")}
            </PrimaryCtaButton>
          </div>

          <div className="nh-header-actions-mobile">
            <MobileHeaderCta label={t("cta.bookACallShort")} />

            <button
              type="button"
              className="flex pl-2 size-8 shrink-0 items-center justify-center"
              aria-label={menuOpen ? t("aria.closeMenu") : t("aria.openMenu")}
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
        navLinks={navLinks}
        isLinkActive={isLinkActive}
      />
    </>
  );
}
