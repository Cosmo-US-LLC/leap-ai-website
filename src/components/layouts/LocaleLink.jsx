import { Link } from "react-router-dom";
import { useLocale } from "../../hooks/useLocale.js";
import { localizedPath } from "../../lib/locale.js";

export function LocaleLink({ to, children, ...props }) {
  const { lang } = useLocale();
  const resolvedTo = typeof to === "string" && !to.startsWith("http") ? localizedPath(to, lang) : to;

  if (typeof resolvedTo === "string" && resolvedTo.startsWith("http")) {
    return (
      <a href={resolvedTo} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={resolvedTo} {...props}>
      {children}
    </Link>
  );
}
