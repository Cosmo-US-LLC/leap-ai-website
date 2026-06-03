export function SectionHeading({
  bold,
  muted,
  subtitle,
  className = "",
  size = "default",
  subtitleRelaxed = false,
}) {
  const headingClass = size === "large" ? "nh-h2-lg" : "nh-h2";

  return (
    <div className={`mx-auto max-w-[1100px] text-center ${className}`}>
      <h2 className={headingClass}>
        <span className="nh-h2-bold">{bold}</span>
        {muted ? (
          <>
            {" "}
            <span className="nh-h2-muted">{muted}</span>
          </>
        ) : null}
      </h2>
      {subtitle ? (
        <p
          className={`nh-subtitle mt-5 ${subtitleRelaxed ? "nh-subtitle-relaxed" : ""}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
