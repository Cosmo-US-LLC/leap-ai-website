import { useEffect } from "react";

const DEFAULT_TITLE = "Leap AI: Transform Your Business with Strategic AI Solutions";
const DEFAULT_DESCRIPTION =
  "Discover how Leap AI helps businesses drive growth, streamline operations, and lead with AI. Book your free consultation today to explore AI-powered solutions tailored for your company's success.";

/**
 * Sets document title and meta tags (description, og:*, twitter:*) for the current page.
 * Restores defaults on unmount so other routes get a clean state.
 *
 * @param {{ title: string, description: string }} meta - Page title and meta description
 */
export function usePageMeta(meta) {
  const { title, description } = meta || {};

  useEffect(() => {
    if (!title && !description) return;

    const prevTitle = document.title;
    const prevMetaTitle = document.querySelector('meta[name="title"]')?.getAttribute("content");
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute("content");
    const prevOgTitle = document.querySelector('meta[property="og:title"]')?.getAttribute("content");
    const prevOgDesc = document.querySelector('meta[property="og:description"]')?.getAttribute("content");
    const prevTwTitle = document.querySelector('meta[property="twitter:title"]')?.getAttribute("content");
    const prevTwDesc = document.querySelector('meta[property="twitter:description"]')?.getAttribute("content");

    if (title) {
      document.title = title;
      const metaTitle = document.querySelector('meta[name="title"]');
      if (metaTitle) metaTitle.setAttribute("content", title);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", title);
      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) twTitle.setAttribute("content", title);
    }

    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", description);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", description);
      const twDesc = document.querySelector('meta[property="twitter:description"]');
      if (twDesc) twDesc.setAttribute("content", description);
    }

    return () => {
      document.title = prevTitle || DEFAULT_TITLE;
      const metaTitle = document.querySelector('meta[name="title"]');
      if (metaTitle) metaTitle.setAttribute("content", prevMetaTitle || DEFAULT_TITLE);
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", prevDesc || DEFAULT_DESCRIPTION);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", prevOgTitle || DEFAULT_TITLE);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", prevOgDesc || DEFAULT_DESCRIPTION);
      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) twTitle.setAttribute("content", prevTwTitle || DEFAULT_TITLE);
      const twDesc = document.querySelector('meta[property="twitter:description"]');
      if (twDesc) twDesc.setAttribute("content", prevTwDesc || DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
}
