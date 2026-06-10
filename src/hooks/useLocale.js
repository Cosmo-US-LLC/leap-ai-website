import { useLocation } from "react-router-dom";
import {
  getLocaleFromPath,
  localizedPath,
  stripLocaleFromPath,
} from "../lib/locale.js";

export function useLocale() {
  const location = useLocation();
  const lang = getLocaleFromPath(location.pathname);
  const pathWithoutLocale = stripLocaleFromPath(location.pathname);

  return {
    lang,
    pathWithoutLocale,
    localizedPath: (path) => localizedPath(path, lang),
  };
}
