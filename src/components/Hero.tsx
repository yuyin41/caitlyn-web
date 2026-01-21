"use client";

import { motion, type Variants } from "framer-motion";

const nameLetters = Array.from("ZHENG HUANG");

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.4,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.8, 0.2, 1],
    },
  },
};

export function Hero() {
  const year = 2026;

  return (
    <section className="relative flex h-screen min-h-[640px] items-center justify-center bg-[#050505] text-[#EDEDED] py-28 sm:py-32 lg:py-40 overflow-hidden">
      {/* Cinematic spotlight background */}
      <div
        className="absolute inset-0 z-[-1] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% -20%, rgba(120, 120, 120, 0.4) 0%, rgba(0, 0, 0, 1) 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-nowrap justify-center gap-x-2 text-4xl tracking-[0.3em] text-[#EDEDED] font-serif sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          {nameLetters.map((char, index) =>
            char === " " ? (
              <span key={index} className="w-6 sm:w-8 md:w-10" />
            ) : (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block font-medium"
              >
                {char}
              </motion.span>
            ),
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.4,
            duration: 1.1,
            ease: [0.25, 0.8, 0.2, 1],
          }}
          className="mt-8 text-xs font-normal tracking-[0.32em] text-[#888888] sm:text-sm"
        >
          <span className="font-mono">FILM EDITOR &amp; VISUALIST</span>
          <span className="mx-4 text-[#666666]">/</span>
          <span className="font-mono">©{year}</span>
        </motion.p>
      </div>
    </section>
  );
}

