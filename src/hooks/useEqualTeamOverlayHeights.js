import { useLayoutEffect, useRef } from "react";

const DESKTOP_MQ = "(min-width: 1024px)";

/**
 * Desktop only: equalize text overlay heights per row (Figma 1956:135).
 */
export function useEqualTeamOverlayHeights() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const equalize = () => {
      const overlays = section.querySelectorAll("[data-team-overlay]");

      overlays.forEach((el) => {
        el.style.height = "";
        el.style.minHeight = "";
      });

      if (!window.matchMedia(DESKTOP_MQ).matches) return;

      const rows = section.querySelectorAll("[data-team-row]");
      rows.forEach((row) => {
        if (row.hasAttribute("data-team-row-large")) return;

        const rowOverlays = row.querySelectorAll("[data-team-overlay]");
        if (!rowOverlays.length) return;

        rowOverlays.forEach((el) => {
          el.style.height = "";
        });

        const maxHeight = Math.max(
          ...Array.from(rowOverlays, (el) => el.getBoundingClientRect().height)
        );

        if (maxHeight > 0) {
          const heightPx = `${Math.ceil(maxHeight)}px`;
          rowOverlays.forEach((el) => {
            el.style.height = heightPx;
          });
        }
      });
    };

    equalize();

    const resizeObserver = new ResizeObserver(equalize);
    resizeObserver.observe(section);

    const mq = window.matchMedia(DESKTOP_MQ);
    mq.addEventListener("change", equalize);
    window.addEventListener("resize", equalize);
    document.fonts?.ready?.then(equalize);

    return () => {
      resizeObserver.disconnect();
      mq.removeEventListener("change", equalize);
      window.removeEventListener("resize", equalize);
    };
  }, []);

  return sectionRef;
}
