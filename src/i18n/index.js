import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "../locales/en/common.json";
import enMeta from "../locales/en/meta.json";
import enHome from "../locales/en/home.json";
import enAbout from "../locales/en/about.json";
import enContact from "../locales/en/contact.json";
import enInsights from "../locales/en/insights.json";
import enCaseStudies from "../locales/en/caseStudies.json";
import enMethodology from "../locales/en/methodology.json";
import enLegal from "../locales/en/legal.json";

import frCommon from "../locales/fr/common.json";
import frMeta from "../locales/fr/meta.json";
import frHome from "../locales/fr/home.json";
import frAbout from "../locales/fr/about.json";
import frContact from "../locales/fr/contact.json";
import frInsights from "../locales/fr/insights.json";
import frCaseStudies from "../locales/fr/caseStudies.json";
import frMethodology from "../locales/fr/methodology.json";
import frLegal from "../locales/fr/legal.json";

import esCommon from "../locales/es/common.json";
import esMeta from "../locales/es/meta.json";
import esHome from "../locales/es/home.json";
import esAbout from "../locales/es/about.json";
import esContact from "../locales/es/contact.json";
import esInsights from "../locales/es/insights.json";
import esCaseStudies from "../locales/es/caseStudies.json";
import esMethodology from "../locales/es/methodology.json";
import esLegal from "../locales/es/legal.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        meta: enMeta,
        home: enHome,
        about: enAbout,
        contact: enContact,
        insights: enInsights,
        caseStudies: enCaseStudies,
        methodology: enMethodology,
        legal: enLegal,
      },
      fr: {
        common: frCommon,
        meta: frMeta,
        home: frHome,
        about: frAbout,
        contact: frContact,
        insights: frInsights,
        caseStudies: frCaseStudies,
        methodology: frMethodology,
        legal: frLegal,
      },
      es: {
        common: esCommon,
        meta: esMeta,
        home: esHome,
        about: esAbout,
        contact: esContact,
        insights: esInsights,
        caseStudies: esCaseStudies,
        methodology: esMethodology,
        legal: esLegal,
      },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "fr", "es"],
    defaultNS: "common",
    ns: ["common", "meta", "home", "about", "contact", "insights", "caseStudies", "methodology", "legal"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
