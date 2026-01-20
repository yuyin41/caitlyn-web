"use client";

import { motion } from "framer-motion";

const links = ["Work", "Profile", "Contact"];

export function Header() {
  const handleScroll = (label: string) => {
    const targetId = label.toLowerCase();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-20 flex justify-center bg-gradient-to-b from-[#050505]/95 via-[#050505]/85 to-transparent py-6 text-xs uppercase tracking-[0.32em]">
      <div className="flex w-full max-w-7xl items-center justify-between px-8 text-[#EDEDED]">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.8, 0.2, 1], delay: 0.4 }}
          className="pointer-events-auto select-none text-[0.7rem] tracking-[0.4em]"
        >
          ZH
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.8, 0.2, 1], delay: 0.55 }}
          className="pointer-events-auto"
        >
          <ul className="flex items-center gap-8 text-[0.65rem] sm:text-[0.7rem]">
            {links.map((label) => (
              <li key={label}>
                <button
                  type="button"
                  onClick={() => handleScroll(label)}
                  className="relative overflow-hidden text-[0.65rem] uppercase tracking-[0.32em] text-[#888888] transition-colors duration-500 hover:text-[#EDEDED]"
                >
                  <span className="inline-block translate-y-0 transform transition-transform duration-500 ease-[0.25,0.8,0.2,1] hover:-translate-y-[0.06em]">
                    {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </header>
  );
}

