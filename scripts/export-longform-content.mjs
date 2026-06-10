import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { INSIGHTS_ARTICLES } from "../src/lib/insightsArticles.js";
import { CASE_STUDIES } from "../src/lib/caseStudyContent.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function pickArticleFields(article) {
  const {
    slug,
    date,
    readTime,
    title,
    subtitle,
    excerpt,
    author,
    authorRole,
    tableOfContents,
    sections,
  } = article;
  return {
    slug,
    date,
    readTime,
    title,
    subtitle,
    excerpt,
    author,
    authorRole,
    tableOfContents,
    sections,
  };
}

function pickCaseStudyFields(study) {
  const {
    slug,
    tag,
    metric,
    metricParts,
    metricLabel,
    title,
    description,
    hero,
    sidebar,
    cta,
    sections,
  } = study;
  return {
    slug,
    tag,
    metric,
    metricParts,
    metricLabel,
    title,
    description,
    hero,
    sidebar,
    cta,
    sections,
  };
}

const articles = INSIGHTS_ARTICLES.map(pickArticleFields);
const studies = CASE_STUDIES.map(pickCaseStudyFields);

const outDir = path.join(root, "scripts/generated");
fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(
  path.join(outDir, "insights-en-template.json"),
  `${JSON.stringify({ articles }, null, 2)}\n`,
);
fs.writeFileSync(
  path.join(outDir, "caseStudies-en-template.json"),
  `${JSON.stringify({ studies }, null, 2)}\n`,
);

console.log(`Exported ${articles.length} articles and ${studies.length} case studies to scripts/generated/`);
