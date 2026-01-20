"use client";

import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioCategories } from "@/data/portfolio";

type BackgroundControllerProps = {
  activeCategoryId: string | null;
};

export function BackgroundController({
  activeCategoryId,
}: BackgroundControllerProps) {
  const currentVideoUrl = useMemo(() => {
    const category =
      portfolioCategories.find((c) => c.id === activeCategoryId) ?? null;
    return category?.backgroundVideoUrl ?? null;
  }, [activeCategoryId]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[#050505]">
      <AnimatePresence mode="popLayout">
        {currentVideoUrl && (
          <motion.video
            key={currentVideoUrl}
            src={currentVideoUrl}
            className="h-full w-full object-cover opacity-30 mix-blend-soft-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.25, 0.8, 0.2, 1] }}
            autoPlay
            muted
            loop
            playsInline
          />
        )}
      </AnimatePresence>
    </div>
  );
}

