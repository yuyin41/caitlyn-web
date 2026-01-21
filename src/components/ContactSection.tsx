"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 border-t border-transparent bg-transparent pb-24 pt-28 text-[#EDEDED] sm:pb-32 sm:pt-32 lg:pb-40 lg:pt-40"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-4 text-center sm:gap-12 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.25, 0.8, 0.2, 1] }}
          className="text-sm uppercase tracking-[0.32em] text-[#888888] font-sans sm:text-base"
        >
          Open for collaborations on narrative films, documentaries, and creative projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.25, 0.8, 0.2, 1], delay: 0.1 }}
          className="space-y-8"
        >
          <a
            href="mailto:huangzheng0905@gmail.com"
            className="block border-b-2 border-transparent text-3xl font-serif text-[#EDEDED] transition-all duration-300 hover:border-[#EDEDED] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            huangzheng0905@gmail.com
          </a>

          <div className="space-y-2 text-sm text-[#888888] font-sans sm:text-base">
            <p>+44 7778 757 535</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
