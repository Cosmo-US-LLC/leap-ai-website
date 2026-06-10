import { useTranslation } from "react-i18next";
import { LocaleLink } from "../layouts/LocaleLink.jsx";

function LegalParagraphs({ paragraphs }) {
  if (!paragraphs?.length) return null;

  return paragraphs.map((paragraph, index) => (
    <p key={paragraph} className={index > 0 ? "mt-6" : undefined}>
      {paragraph}
    </p>
  ));
}

function LegalList({ items, ordered = false }) {
  if (!items?.length) return null;

  const Tag = ordered ? "ol" : "ul";
  const className = ordered
    ? "mt-3 list-decimal space-y-4 pl-6"
    : "mt-3 list-disc space-y-4 pl-6";

  return (
    <Tag className={className}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </Tag>
  );
}

function LegalSectionContent({ section }) {
  const { t } = useTranslation("legal");

  if (section.privacyLink) {
    return (
      <p>
        {section.paragraphs?.[0]}{" "}
        <LocaleLink to="/privacy-policy" className="font-medium text-[#2b2b76] underline">
          {t("privacy.linkText")}
        </LocaleLink>
        {section.paragraphs?.[1] ? section.paragraphs[1] : "."}
      </p>
    );
  }

  if (section.emailLink) {
    return (
      <p>
        {section.paragraphs?.[0]}{" "}
        <a href="mailto:info@leap41.ca" className="font-medium text-[#2b2b76] underline">
          info@leap41.ca
        </a>
        {section.paragraphs?.[1] ?? "."}
      </p>
    );
  }

  if (section.gaOptOutLink) {
    const paragraphs = section.paragraphs ?? [];
    return (
      <>
        {paragraphs[0] ? <p>{paragraphs[0]}</p> : null}
        {paragraphs[1] ? <p className="mt-6">{paragraphs[1]}</p> : null}
        {paragraphs[2] ? (
          <p className="mt-6">
            {paragraphs[2]}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#2b2b76] underline"
            >
              {t("privacy.gaOptOutLabel")}
            </a>
          </p>
        ) : null}
      </>
    );
  }

  return (
    <>
      <LegalParagraphs paragraphs={section.paragraphs} />
      <LegalList items={section.list} ordered={section.ordered} />
    </>
  );
}

export function LegalDocument({ namespace }) {
  const { t } = useTranslation("legal");
  const sections = t(`${namespace}.sections`, { returnObjects: true });
  const intro = t(`${namespace}.intro`, { returnObjects: true, defaultValue: [] });

  return (
    <section className="mt-20 bg-white px-4 py-10 md:px-15 md:py-20">
      <div className="mx-auto max-w-200">
        <h1 className="mb-6 text-[40px] leading-11.5 text-[#201463] md:text-[56px] md:leading-14.5">
          <span className="font-bold">{t(`${namespace}.headingBold`)}</span>
          <span className="font-normal text-[rgba(32,20,99,0.7)]">
            {t(`${namespace}.headingMuted`)}
          </span>
        </h1>

        <div className="flex flex-col gap-6 md:gap-8">
          {Array.isArray(intro) && intro.length > 0 ? (
            <div className="text-base leading-6 text-[#373737]">
              {intro.map((paragraph, index) => (
                <p key={paragraph} className={index > 0 ? "mt-6" : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}

          {Array.isArray(sections)
            ? sections.map((section) => (
                <div key={section.heading} className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold leading-7 text-[#0f172a]">{section.heading}</h2>
                  <div className="text-base leading-6 text-[#373737]">
                    <LegalSectionContent section={section} />
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
