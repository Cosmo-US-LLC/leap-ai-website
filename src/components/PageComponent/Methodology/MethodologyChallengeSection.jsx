const stats = [
  {
    value: "87%",
    label: "of AI projects fail",
    description: "Not because the tech failed , because the organization wasn't ready.",
  },
  {
    value: "$4.4T",
    label: "market by 2028",
    description: "Companies that wait won't just miss out , they'll pay a premium to catch up.",
  },
  {
    value: "#1",
    label: "reason for AI failure",
    description: "Lack of organizational readiness , not the technology itself.",
  },
];

export default function MethodologyChallengeSection() {
  return (
    <section className="meth-challenge-section">
      <div className="meth-challenge-container">

        {/* Left: text */}
        <div className="meth-challenge-text">
          <h2 className="meth-challenge-heading">
            <span className="meth-challenge-heading-bold">AI isn&apos;t a technology challenge. </span>
            <span className="meth-challenge-heading-muted">It&apos;s a leadership challenge.</span>
          </h2>
          <div className="meth-challenge-body">
            <p>
              Most AI initiatives fail , not because the technology doesn&apos;t
              work, but because companies skip the foundations. They buy tools
              before they&apos;ve aligned their teams. They automate processes
              before they&apos;ve cleaned their data. They chase trends before
              they&apos;ve defined their strategy.
            </p>
            <p>
              The result? Wasted budgets, frustrated teams, and a growing gap
              between you and the competitors who got it right.
            </p>
          </div>
        </div>

        {/* Right: dark card */}
        <div className="meth-challenge-card">
          <p className="meth-challenge-card-heading">
            Companies that wait won&apos;t just miss out , they&apos;ll pay a
            premium to catch up.
          </p>

          <div className="meth-challenge-card-inner">
            <div className="meth-challenge-stats">
              {stats.map((stat, i) => (
                <div key={stat.value}>
                  <div className="meth-challenge-stat">
                    <div className="meth-challenge-stat-top">
                      <p className="meth-challenge-stat-value">{stat.value}</p>
                      <p className="meth-challenge-stat-label">{stat.label}</p>
                    </div>
                    <p className="meth-challenge-stat-desc">{stat.description}</p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="meth-challenge-divider" aria-hidden />
                  )}
                </div>
              ))}
            </div>

            <div className="meth-challenge-callout">
              <p>Lack of organizational readiness, not the technology itself.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
