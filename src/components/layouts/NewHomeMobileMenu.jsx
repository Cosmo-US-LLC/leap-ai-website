import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import mobileMenuGradient from "../../assets/images/new-home/icons/mobile-menu-gradient.svg";
import { LocaleLink } from "./LocaleLink.jsx";
import { LanguageSwitcher } from "./LanguageSwitcher.jsx";

export function NewHomeMobileMenu({ open, onClose, navLinks, isLinkActive }) {
  const { t } = useTranslation("common");

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 overflow-y-auto lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label={t("aria.mobileMenu")}
    >
      <button
        type="button"
        className="fixed inset-0 bg-[#151515]"
        aria-label={t("aria.closeMenu")}
        onClick={onClose}
      />

      <img
        src={mobileMenuGradient}
        alt=""
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 h-[378px] w-full max-w-[390px] opacity-30"
      />

      <div
        className="relative mx-auto flex w-full max-w-[390px] justify-center px-4 pb-8 pt-[102px]"
        onClick={(event) => event.stopPropagation()}
      >
        <nav
          className="relative z-10 flex w-full max-w-[358px] flex-col items-center gap-3 rounded-xl border border-[#ddd] bg-white px-4 py-7 shadow-sm"
          aria-label={t("aria.mobileNav")}
        >
          {navLinks.map((link) => {
            const active = isLinkActive(link.to);
            const className = `nh-mobile-menu-link rounded px-3 py-1 capitalize transition ${
              active
                ? "bg-[rgba(43,43,118,0.1)] font-semibold text-[#201463]"
                : "font-normal text-black hover:text-[#201463]"
            }`;

            return (
              <div key={link.labelKey} className="flex w-full flex-col items-center">
                {link.to.startsWith("http") ? (
                  <a
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className={className}
                  >
                    {t(link.labelKey)}
                  </a>
                ) : (
                  <LocaleLink to={link.to} onClick={onClose} className={className}>
                    {t(link.labelKey)}
                  </LocaleLink>
                )}
              </div>
            );
          })}

          <div className="mt-1 flex w-full justify-center px-[18px] py-0.5">
            <LanguageSwitcher variant="mobile" />
          </div>
        </nav>
      </div>
    </div>
  );
}
