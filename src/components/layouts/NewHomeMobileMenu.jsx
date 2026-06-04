import { useEffect } from "react";
import { Link } from "react-router-dom";
import mobileMenuGradient from "../../assets/images/new-home/icons/mobile-menu-gradient.svg";
import globeIcon from "../../assets/images/new-home/icons/globe.svg";
import chevronDown from "../../assets/images/new-home/icons/chevron-down.svg";

export function NewHomeMobileMenu({ open, onClose, navLinks, isLinkActive }) {
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
      aria-label="Mobile menu"
    >
      <button
        type="button"
        className="fixed inset-0 bg-[#151515]"
        aria-label="Close menu"
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
          aria-label="Mobile"
        >
          {navLinks.map((link) => {
            const active = isLinkActive(link.to);

            return (
              <div key={link.label} className="flex w-full flex-col items-center">
                <Link
                  to={link.to}
                  onClick={onClose}
                  className={`nh-mobile-menu-link rounded px-3 py-1 capitalize transition ${
                    active
                      ? "bg-[rgba(43,43,118,0.1)] font-semibold text-[#201463]"
                      : "font-normal text-black hover:text-[#201463]"
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}

          <div className="mt-1 flex w-full justify-center px-[18px] py-0.5">
            <button
              type="button"
              className="nh-nav-lang inline-flex items-center gap-2 rounded-full border border-black px-2 py-2.5 text-black"
              aria-label="Language selector"
            >
              <img src={globeIcon} alt="" className="h-[18px] w-[18px]" aria-hidden />
              <span>English</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
