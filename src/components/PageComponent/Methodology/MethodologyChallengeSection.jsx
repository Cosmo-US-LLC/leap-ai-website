import { useTranslation } from "react-i18next";

export default function MethodologyChallengeSection() {
  const { t } = useTranslation("methodology");
  const stats = t("challenge.stats", { returnObjects: true });
  const bodyParagraphs = t("challenge.body", { returnObjects: true });

  return (
    <section className="meth-challenge-section">
      <div className="meth-challenge-container">
        <div className="meth-challenge-text">
          <h2 className="meth-challenge-heading">
            <span className="meth-challenge-heading-bold">{t("challenge.headingBold")}</span>
            <span className="meth-challenge-heading-muted">{t("challenge.headingMuted")}</span>
          </h2>
          <div className="meth-challenge-body">
            {Array.isArray(bodyParagraphs)
              ? bodyParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
              : null}
          </div>
        </div>

        <div className="meth-challenge-card">
          <p className="meth-challenge-card-heading">{t("challenge.cardHeading")}</p>

          <div className="meth-challenge-card-inner">
            <div className="meth-challenge-stats">
              {Array.isArray(stats)
                ? stats.map((stat, i) => (
                    <div key={stat.value}>
                      <div className="meth-challenge-stat">
                        <div className="meth-challenge-stat-top">
                          <p className="meth-challenge-stat-value">{stat.value}</p>
                          <p className="meth-challenge-stat-label">{stat.label}</p>
                        </div>
                        <p className="meth-challenge-stat-desc">{stat.description}</p>
                      </div>
                      {i < stats.length - 1 && <div className="meth-challenge-divider" aria-hidden />}
                    </div>
                  ))
                : null}
            </div>

            <div className="meth-challenge-callout">
              <p>{t("challenge.callout")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
