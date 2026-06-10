import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NewHomeHeader } from "./NewHomeHeader.jsx";
import { NewHomeFooter } from "./NewHomeFooter.jsx";
import { getLocaleFromPath } from "../../lib/locale.js";
import "../../assets/style/new-home.css";
import "../../assets/style/about.css";

export function NewHomeLayout() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const lang = getLocaleFromPath(location.pathname);

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang;
  }, [lang, i18n]);

  return (
    <div className="new-home min-h-screen bg-white">
      <NewHomeHeader />
      <main>
        <Outlet />
      </main>
      <NewHomeFooter />
    </div>
  );
}
