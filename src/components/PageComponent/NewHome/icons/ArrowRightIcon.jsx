export function ArrowRightIcon({ className = "h-3 w-3", dark = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2.5 6h7M6.5 3l3.5 3-3.5 3"
        stroke={dark ? "#201463" : "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
