import { Link } from "react-router-dom";
import { FREE_CONSULTATION_URL } from "../../../lib/newHomeLinks.js";
import { ArrowRightIcon } from "./icons/ArrowRightIcon.jsx";

function isExternalUrl(path) {
  return typeof path === "string" && /^https?:\/\//i.test(path);
}

export function PrimaryCtaButton({
  children,
  to = FREE_CONSULTATION_URL,
  className = "",
  iconBg,
  variant = "primary",
  capitalize = false,
  type = "button",
  disabled = false,
}) {
  const resolvedIconBg =
    iconBg ??
    (variant === "outline"
      ? "bg-[#f2f6fb]"
      : variant === "soft"
        ? "bg-[#201663]"
        : variant === "navy"
          ? "bg-white"
          : "bg-white");
  const iconOnLightBackground =
    resolvedIconBg.includes("white") || resolvedIconBg.includes("#fff");
  const base = `nh-btn inline-flex items-center gap-2 rounded-full px-6 py-3.5 transition hover:opacity-95 ${capitalize ? "nh-btn-cap" : ""}`;
  const styles =
    variant === "primary"
      ? "bg-[#18a3e6] text-[#f2f6fb]"
      : variant === "navy"
        ? "bg-[#201463] text-white nh-btn-bold"
        : variant === "soft"
          ? "bg-[#eef1f8] text-[#201463] nh-btn-cap"
          : "border border-black bg-transparent text-black";

  const content = (
    <>
      <span>{children}</span>
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-xl ${resolvedIconBg} ${variant === "navy" || variant === "soft" ? "text-white" : "text-[#201463]"}`}
      >
        <ArrowRightIcon className="h-3 w-3" dark={iconOnLightBackground} />
      </span>
    </>
  );

  if (to) {
    if (isExternalUrl(to)) {
      return (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${styles} ${className}`}
        >
          {content}
        </a>
      );
    }

    return (
      <Link to={to} className={`${base} ${styles} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${base} ${styles} ${className}`}
    >
      {content}
    </button>
  );
}
