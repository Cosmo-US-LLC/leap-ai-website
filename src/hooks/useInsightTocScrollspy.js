import { useEffect, useState } from "react";

const HEADER_OFFSET = 120;

export function useInsightTocScrollspy(items) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sectionIds = items.map((item) => item.id);

    const updateActive = () => {
      let nextActive = 0;

      for (let index = 0; index < sectionIds.length; index += 1) {
        const element = document.getElementById(sectionIds[index]);
        if (!element) continue;

        if (element.getBoundingClientRect().top <= HEADER_OFFSET) {
          nextActive = index;
        }
      }

      setActiveIndex((current) => (current === nextActive ? current : nextActive));
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [items]);

  return activeIndex;
}
