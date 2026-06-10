import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import globeIcon from "../../assets/images/new-home/icons/globe.svg";
import { ChevronDownIcon } from "../PageComponent/NewHome/icons/ChevronDownIcon.jsx";
import {
  getLocaleFromPath,
  localizedPath,
  stripLocaleFromPath,
  SUPPORTED_LOCALES,
} from "../../lib/locale.js";

const LANGUAGE_OPTIONS = [
  { code: "en", labelKey: "language.english" },
  { code: "fr", labelKey: "language.french" },
  { code: "es", labelKey: "language.spanish" },
];

function getLanguageLabel(t, code) {
  const option = LANGUAGE_OPTIONS.find((item) => item.code === code);
  return option ? t(option.labelKey) : code;
}

export function LanguageSwitcher({ variant = "header" }) {
  const { t, i18n } = useTranslation("common");
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const currentLang = getLocaleFromPath(location.pathname);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const switchLanguage = (lang) => {
    const pathWithoutLocale = stripLocaleFromPath(location.pathname);
    i18n.changeLanguage(lang);
    navigate(localizedPath(pathWithoutLocale, lang));
    setOpen(false);
  };

  if (variant === "footer") {
    return (
      <div className="flex flex-wrap gap-5 lg:gap-5">
        {SUPPORTED_LOCALES.filter((code) => code !== "en").map((code) => {
          const isActive = currentLang === code;
          return (
            <button
              key={code}
              type="button"
              onClick={() => switchLanguage(code)}
              className={`nh-footer-legal-link cursor-pointer transition hover:text-white ${
                isActive ? "text-white" : ""
              }`}
              aria-current={isActive ? "true" : undefined}
            >
              {t(`language.short${code === "fr" ? "Fr" : "Es"}`)}
            </button>
          );
        })}
      </div>
    );
  }

  const buttonClass =
    variant === "mobile"
      ? "nh-nav-lang inline-flex cursor-pointer items-center gap-2 rounded-full border border-black px-2 py-2.5 text-black"
      : "nh-nav-lang inline-flex cursor-pointer items-center gap-2 rounded-full bg-[rgba(196,196,196,0.2)] px-3 py-2 text-black";

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        className={buttonClass}
        aria-label={t("language.selector")}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
      >
        <img src={globeIcon} alt="" className="h-[18px] w-[18px]" aria-hidden />
        <span>{getLanguageLabel(t, currentLang)}</span>
        <ChevronDownIcon
          className={`h-3 w-3 shrink-0 text-black transition-transform duration-200 ease-in-out motion-reduce:transition-none ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={t("language.selector")}
          className={`absolute z-50 mt-2 min-w-[140px] overflow-hidden rounded-lg border border-[rgba(32,20,99,0.1)] bg-white py-1 shadow-md ${
            variant === "mobile" ? "left-1/2 -translate-x-1/2" : "right-0"
          }`}
        >
          {LANGUAGE_OPTIONS.map((option) => (
            <li key={option.code} role="option" aria-selected={currentLang === option.code}>
              <button
                type="button"
                className={`block w-full cursor-pointer px-4 py-2 text-left text-sm transition hover:bg-[rgba(43,43,118,0.08)] ${
                  currentLang === option.code ? "font-semibold text-[#201463]" : "text-black"
                }`}
                onClick={() => switchLanguage(option.code)}
              >
                {t(option.labelKey)}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
