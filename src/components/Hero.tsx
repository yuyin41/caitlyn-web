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
    <section className="relative flex h-screen min-h-[640px] items-center justify-center bg-[#050505] text-[#EDEDED] py-40">
     
     
      {/* Background video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover -z-20 opacity-50"
  >
    <source src="/videos/hero-showreel.mp4" type="video/mp4" />
  </video>
     
     
     {/* Cinematic dark background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#0a0a0a_45%,_#050505_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex max-w-5xl flex-col items-center px-6 text-center">
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

