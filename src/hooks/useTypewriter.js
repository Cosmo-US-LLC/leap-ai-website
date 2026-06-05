import { useEffect, useState } from "react";

const DEFAULT_OPTIONS = {
  typeSpeed: 80,
  deleteSpeed: 45,
  pauseMs: 2200,
};

export function useTypewriter(phrases, options = {}) {
  const { typeSpeed, deleteSpeed, pauseMs } = { ...DEFAULT_OPTIONS, ...options };
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setEnabled(false);
      setText(phrases[0] ?? "");
      return undefined;
    }

    setEnabled(true);
    return undefined;
  }, [phrases]);

  useEffect(() => {
    if (!enabled || phrases.length === 0) return undefined;

    const current = phrases[phraseIndex];
    let timeoutId;

    if (!isDeleting && text === current) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((index) => (index + 1) % phrases.length);
    } else {
      const speed = isDeleting ? deleteSpeed : typeSpeed;
      timeoutId = window.setTimeout(() => {
        setText(
          isDeleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1),
        );
      }, speed);
    }

    return () => window.clearTimeout(timeoutId);
  }, [text, phraseIndex, isDeleting, enabled, phrases, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}
