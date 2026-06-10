import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function writeJson(rel, data) {
  fs.writeFileSync(path.join(root, rel), `${JSON.stringify(data, null, 2)}\n`);
}

async function loadArticles(lang) {
  const dir = path.join(__dirname, "translations", lang, "insights");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  return files.map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));
}

async function loadStudies(lang) {
  const dir = path.join(__dirname, "translations", lang, "caseStudies");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  return files.map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));
}

for (const lang of ["fr", "es"]) {
  const articles = await loadArticles(lang);
  const studies = await loadStudies(lang);
  writeJson(`src/locales/${lang}/insightsContent.json`, { articles });
  writeJson(`src/locales/${lang}/caseStudiesContent.json`, { studies });
  console.log(`${lang}: ${articles.length} insight articles, ${studies.length} case studies`);
}
