import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useContentLocale } from "../../../hooks/useContentLocale.js";
import { useInsightTocScrollspy } from "../../../hooks/useInsightTocScrollspy.js";
import teamGregory from "../../../assets/images/about/team-gregory.webp";
import { getRelatedInsights } from "../../../lib/insightsArticles.js";
import { scrollToInsightTocSection } from "../../../lib/scrollToInsightTocSection.js";
import { ClockIcon } from "../NewHome/icons/ClockIcon.jsx";
import { ArticleParagraphs, ArticleRichText } from "./ArticleRichText.jsx";
import InsightCard from "./InsightCard.jsx";
import { QuoteIcon } from "./icons/QuoteIcon.jsx";
import { TocChevronIcon } from "./icons/TocChevronIcon.jsx";

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function BottomLineCallout({ text }) {
  const { t } = useTranslation("insights");

  return (
    <div className="flex items-center gap-4 rounded-2xl bg-[#f8f9fc] p-6">
      <QuoteIcon className="h-10 w-10 shrink-0" />
      <p className="text-base leading-6 text-[#4e546c]">
        <span className="font-bold text-[#201463]">{t("detail.bottomLine")}</span>{" "}
        <ArticleRichText text={text} />
      </p>
    </div>
  );
}

function BulletItems({ items }) {
  return (
    <ul className="flex list-disc flex-col gap-3 pl-6 text-base leading-6 text-[#4e546c]">
      {items.map((item) => (
        <li key={item}>
          <ArticleRichText text={item} />
        </li>
      ))}
    </ul>
  );
}

function LabeledBullets({ items }) {
  return (
    <div className="flex flex-col gap-3 text-base leading-6 text-[#4e546c]">
      {items.map((item) => (
        <p key={item.label}>
          <span className="font-bold text-black">{item.label}</span> {item.text}
        </p>
      ))}
    </div>
  );
}

function OrderedItems({ items }) {
  return (
    <ol className="flex list-decimal flex-col gap-3 pl-6 text-base leading-6 text-[#4e546c]">
      {items.map((item) => (
        <li key={item.label ?? item.text}>
          {item.label ? (
            <>
              <span className="font-semibold text-black">{item.label}</span>{" "}
              <ArticleRichText text={item.text} />
            </>
          ) : (
            <ArticleRichText text={item.text} />
          )}
        </li>
      ))}
    </ol>
  );
}

function ArticleSection({ section }) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          id={section.id ?? slugifyHeading(section.text)}
          className="scroll-mt-[124px] text-[28px] font-bold leading-9 text-[#201463] lg:scroll-mt-28 lg:text-[32px] lg:leading-10"
        >
          {section.text}
        </h2>
      );
    case "subheading":
      return (
        <h3 className="text-xl font-bold leading-7 text-[#201463] lg:text-2xl lg:leading-8">
          {section.text}
        </h3>
      );
    case "paragraphs":
      return <ArticleParagraphs paragraphs={section.paragraphs} />;
    case "bottomLine":
      return <BottomLineCallout text={section.text} />;
    case "bullets":
      return <BulletItems items={section.items} />;
    case "labeledBullets":
      return <LabeledBullets items={section.items} />;
    case "orderedList":
      return <OrderedItems items={section.items} />;
    case "blockquote":
      return (
        <blockquote className="border-l-4 border-[#18a3e6] pl-6 text-base italic leading-6 text-[#4e546c]">
          <ArticleRichText text={section.text} />
        </blockquote>
      );
    case "cta":
      return (
        <p className="text-base leading-6 text-[#4e546c]">
          <ArticleRichText text={section.text} />{" "}
          {section.link ? (
            <a
              href={section.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#2b2b76] underline"
            >
              {section.linkLabel}
            </a>
          ) : null}
        </p>
      );
    default:
      return null;
  }
}

function TocNavList({ items, activeIndex, trackRef, linkRefs, fillHeight, onItemClick }) {
  return (
    <div className="flex items-stretch gap-4">
      <div
        ref={trackRef}
        className="relative w-1 shrink-0 self-stretch rounded-full bg-[#eef1f8]"
      >
        <div
          className="absolute left-0 top-0 w-1 rounded-full bg-[#18a3e6] transition-[height] duration-300 ease-out"
          style={{ height: fillHeight }}
        />
      </div>
      <nav className="flex min-w-0 flex-1 flex-col">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <div key={item.id}>
              <a
                ref={(element) => {
                  linkRefs.current[index] = element;
                }}
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={(event) => onItemClick(event, item.id)}
                className={`block py-2.5 text-sm leading-[22px] transition hover:text-[#18a3e6] ${
                  isActive ? "font-semibold text-[#18a3e6]" : "text-[#0b0f19]"
                }`}
              >
                {item.label}
              </a>
              {index < items.length - 1 ? <hr className="border-[#e8ecf4]" /> : null}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

function useTocProgress(activeIndex, isVisible = true) {
  const trackRef = useRef(null);
  const linkRefs = useRef([]);
  const [fillHeight, setFillHeight] = useState(28);

  const updateFillHeight = useCallback(() => {
    const track = trackRef.current;
    const activeLink = linkRefs.current[activeIndex];

    if (!track || !activeLink) return;

    const trackTop = track.getBoundingClientRect().top;
    const linkBottom = activeLink.getBoundingClientRect().bottom;
    setFillHeight(Math.max(28, linkBottom - trackTop));
  }, [activeIndex]);

  useEffect(() => {
    if (!isVisible) return undefined;

    updateFillHeight();
    window.addEventListener("resize", updateFillHeight);

    const nav = trackRef.current?.parentElement?.querySelector("nav");
    const resizeObserver =
      typeof ResizeObserver !== "undefined" && nav
        ? new ResizeObserver(updateFillHeight)
        : null;

    if (resizeObserver && nav) {
      resizeObserver.observe(nav);
    }

    return () => {
      window.removeEventListener("resize", updateFillHeight);
      resizeObserver?.disconnect();
    };
  }, [updateFillHeight, isVisible]);

  return { trackRef, linkRefs, fillHeight };
}

function TableOfContents({ items, variant = "desktop" }) {
  const { t } = useTranslation("insights");
  const activeIndex = useInsightTocScrollspy(items);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = variant === "mobile";
  const { trackRef, linkRefs, fillHeight } = useTocProgress(activeIndex, !isMobile || isOpen);

  const handleTocClick = (event, id) => {
    event.preventDefault();

    if (isMobile) {
      setIsOpen(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToInsightTocSection(id);
        });
      });
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navList = (
    <TocNavList
      items={items}
      activeIndex={activeIndex}
      trackRef={trackRef}
      linkRefs={linkRefs}
      fillHeight={fillHeight}
      onItemClick={handleTocClick}
    />
  );

  if (isMobile) {
    return (
      <div className="lg:hidden">
        <aside className="w-full rounded-2xl bg-[#f8f9fc] p-5">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="font-bold text-[18px] leading-[27px] tracking-[0.6px] text-[#1a2063]">
              {t("detail.tableOfContents")}
            </span>
            <TocChevronIcon
              className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isOpen ? <div className="mt-4">{navList}</div> : null}
        </aside>
      </div>
    );
  }

  return (
    <aside className="w-full rounded-[20px] bg-[#f8f9fc] px-6 py-8">
      <h2 className="mb-4 font-bold text-xl leading-7 tracking-[0.6px] text-[#1a2063]">
        {t("detail.tableOfContents")}
      </h2>
      {navList}
    </aside>
  );
}

function MoreInsightsSection({ currentSlug }) {
  const { t } = useTranslation("insights");
  const locale = useContentLocale();
  const related = getRelatedInsights(currentSlug, 2, locale);

  return (
    <section className="bg-[#fafcfe] px-5 py-12 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12">
        <h2 className="text-center text-[40px] capitalize leading-[46px] text-[#201463] lg:text-[52px] lg:leading-[58px]">
          <span className="font-bold">{t("detail.moreHeadingBold")}</span>
          <span className="text-[rgba(32,20,99,0.7)]">{t("detail.moreHeadingMuted")}</span>
        </h2>
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-6">
          {related.map((article) => (
            <InsightCard key={article.slug} article={article} variant="detail" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function InsightDetailPage({ article }) {
  const authorImage = article.authorImage ?? teamGregory;

  return (
    <>
      <section className="bg-white px-5 pb-12 pt-[124px] lg:px-20 lg:pb-20 lg:pt-[162px]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
          <article className="flex min-w-0 flex-1 flex-col gap-8">
            <header className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={authorImage}
                  alt={article.author}
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                />
                <p className="text-sm font-bold leading-5 text-[#201463]">{article.author}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm leading-[22px] text-[#4e546c]">
                <span>{article.date}</span>
                <span className="flex items-center gap-1">
                  <ClockIcon className="h-4 w-4 shrink-0" />
                  {article.readTime}
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-[32px] font-bold leading-[38px] text-[#201463] lg:text-[42px] lg:leading-[50px]">
                  {article.title}
                </h1>
                {article.subtitle ? (
                  <p className="text-lg leading-[26px] text-[#4e546c]">{article.subtitle}</p>
                ) : null}
              </div>
            </header>

            <TableOfContents items={article.tableOfContents} variant="mobile" />

            <div className="flex flex-col gap-6">
              <img
                src={article.heroImage}
                alt=""
                className="aspect-[680/430] w-full rounded-2xl object-cover"
              />
              <span
                id="introduction"
                className="scroll-mt-[124px] block h-0 w-full lg:scroll-mt-28"
                aria-hidden="true"
              />
              {article.sections.map((section, index) => (
                <ArticleSection key={`${section.type}-${index}`} section={section} />
              ))}
            </div>
          </article>

          <div className="hidden shrink-0 lg:block lg:w-[450px] lg:self-stretch">
            <div className="sticky top-24 lg:top-28">
              <TableOfContents items={article.tableOfContents} />
            </div>
          </div>
        </div>
      </section>

      <MoreInsightsSection currentSlug={article.slug} />
    </>
  );
}
