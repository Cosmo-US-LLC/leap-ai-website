import { useLayoutEffect, useRef } from "react";
import { measureMaxMobileTeamOverlayHeight } from "../lib/measureMobileTeamOverlay.js";

const MOBILE_MQ = "(max-width: 1023px)";

/**
 * Mobile carousel: one overlay height for all slides — tallest bio at card width.
 */
export function useEqualMobileTeamOverlayHeights(members = []) {
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || members.length === 0) return;

    const equalize = () => {
      const overlays = track.querySelectorAll("[data-team-mobile-overlay]");

      overlays.forEach((el) => {
        el.style.height = "";
        el.style.minHeight = "";
      });

      if (!window.matchMedia(MOBILE_MQ).matches) return;

      const maxHeight = measureMaxMobileTeamOverlayHeight(members);

      if (maxHeight > 0) {
        const heightPx = `${maxHeight}px`;
        overlays.forEach((el) => {
          el.style.height = heightPx;
          el.style.minHeight = heightPx;
        });
      }
    };

    const scheduleEqualize = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(equalize);
      });
    };

    scheduleEqualize();

    const resizeObserver = new ResizeObserver(scheduleEqualize);
    resizeObserver.observe(track);

    const mq = window.matchMedia(MOBILE_MQ);
    mq.addEventListener("change", scheduleEqualize);
    window.addEventListener("resize", scheduleEqualize);
    document.fonts?.ready?.then(scheduleEqualize);

    return () => {
      resizeObserver.disconnect();
      mq.removeEventListener("change", scheduleEqualize);
      window.removeEventListener("resize", scheduleEqualize);
    };
  }, [members]);

  return trackRef;
}
