"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

type Screenshot = { src: string; alt: string };

export function ScreenshotLightbox({ screenshots }: { screenshots: Screenshot[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const showPrev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + screenshots.length) % screenshots.length));
  const showNext = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % screenshots.length));

  useEffect(() => {
    if (openIndex === null) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex, screenshots.length]);

  if (screenshots.length === 0) return null;

  return (
    <>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group overflow-hidden rounded-lg border border-border text-left focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2"
            aria-label={`Открыть на весь экран: ${screenshot.alt}`}
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={1280}
              height={800}
              className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={screenshots[openIndex].alt}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Закрыть"
              className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            {screenshots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  aria-label="Предыдущий скриншот"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:left-6"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  aria-label="Следующий скриншот"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-6"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="relative max-h-full max-w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={screenshots[openIndex].src}
                alt={screenshots[openIndex].alt}
                width={1920}
                height={1200}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
                priority
              />
              <p className="mt-3 text-center text-sm text-white/70">
                {screenshots[openIndex].alt}
                {screenshots.length > 1 && (
                  <span className="ml-2 text-white/40">
                    {openIndex + 1} / {screenshots.length}
                  </span>
                )}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
