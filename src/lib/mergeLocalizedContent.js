export function mergeLocalizedContent(base, overlay) {
  if (overlay === undefined || overlay === null) return base;

  if (Array.isArray(base) && Array.isArray(overlay)) {
    return base.map((item, index) => mergeLocalizedContent(item, overlay[index]));
  }

  if (
    typeof base === "object" &&
    base !== null &&
    typeof overlay === "object" &&
    overlay !== null &&
    !Array.isArray(base)
  ) {
    const result = { ...base };
    for (const key of Object.keys(overlay)) {
      result[key] = key in base ? mergeLocalizedContent(base[key], overlay[key]) : overlay[key];
    }
    return result;
  }

  return overlay;
}

export function localizeBySlug(items, overlays, slugKey = "slug") {
  if (!Array.isArray(overlays) || overlays.length === 0) return items;

  const bySlug = Object.fromEntries(overlays.map((item) => [item[slugKey], item]));

  return items.map((item) => {
    const overlay = bySlug[item[slugKey]];
    return overlay ? mergeLocalizedContent(item, overlay) : item;
  });
}
