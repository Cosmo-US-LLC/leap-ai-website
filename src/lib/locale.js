export const SUPPORTED_LOCALES = ["en", "fr", "es"];
export const PREFIXED_LOCALES = ["fr", "es"];

const LOCALE_PREFIX_RE = /^\/(fr|es)(?=\/|$)/;

export function getLocaleFromPath(pathname) {
  const match = pathname.match(LOCALE_PREFIX_RE);
  return match ? match[1] : "en";
}

export function stripLocaleFromPath(pathname) {
  const stripped = pathname.replace(LOCALE_PREFIX_RE, "");
  return stripped === "" ? "/" : stripped;
}

export function localizedPath(path, locale) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return normalized;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

export function isPrefixedLocale(value) {
  return PREFIXED_LOCALES.includes(value);
}
