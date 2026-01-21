"use client";

import { motion } from "framer-motion";

const skills = [
  "Avid Media Composer (Certified Specialist)",
  "Adobe Premiere Pro",
  "Final Cut Pro",
  "DaVinci Resolve",
  "Narrative Storytelling",
  "2D & 3D Design (Blender, Figma)",
];

export function ProfileSection() {
  return (
    <section
      id="profile"
      className="relative z-10 border-t border-transparent bg-transparent pb-24 pt-28 text-[#EDEDED] sm:pb-32 sm:pt-32 lg:pb-40 lg:pt-40"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.8, 0.2, 1] }}
          className="space-y-2"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-[#888888] font-sans">
            PROFILE
          </p>
        </motion.header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-3">
          {/* Box 1: Large Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.2, 1], delay: 0.1 }}
            className="rounded-3xl bg-[#111] border border-white/5 p-8 md:col-span-8 md:row-span-2"
          >
            <h2 className="mb-4 font-serif text-2xl font-medium text-[#EDEDED] sm:text-3xl">
              About Me
            </h2>
            <p className="text-sm leading-relaxed text-[#EDEDED] font-serif sm:text-base">
              Motivated video editor with professional training in narrative
              editing and hands-on experience in student film projects.
              Currently pursuing a Master of Filmmaking (Editing) at Goldsmiths
              University, following a Bachelor&apos;s in Media and Culture from
              the University of Amsterdam.
            </p>
          </motion.div>

          {/* Box 2: Medium Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.2, 1], delay: 0.15 }}
            className="rounded-3xl bg-[#111] border border-white/5 p-8 md:col-span-4"
          >
            <h3 className="mb-4 font-serif text-xl font-medium text-[#EDEDED]">
              Education
            </h3>
            <div className="space-y-3 text-sm text-[#EDEDED] font-sans">
              <div>
                <p className="font-medium text-[#EDEDED]">Goldsmiths University</p>
                <p className="text-xs text-[#888888]">Master of Filmmaking (Editing)</p>
              </div>
              <div>
                <p className="font-medium text-[#EDEDED]">University of Amsterdam</p>
                <p className="text-xs text-[#888888]">Bachelor&apos;s in Media and Culture</p>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Language Card - Below Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.2, 1], delay: 0.2 }}
            className="rounded-3xl bg-[#111] border border-white/5 p-8 md:col-span-4"
          >
            <h3 className="mb-4 font-serif text-xl font-medium text-[#EDEDED]">
              Language
            </h3>
            <p className="text-sm text-[#EDEDED] font-sans leading-relaxed">
              English (Fluent), Chinese (Fluent), Japanese (Intermediate)
            </p>
          </motion.div>

          {/* Box 4: Wide Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.2, 1], delay: 0.25 }}
            className="rounded-3xl bg-[#111] border border-white/5 p-8 md:col-span-12"
          >
            <h3 className="mb-6 font-serif text-xl font-medium text-[#EDEDED] sm:text-2xl">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#1a1a1a] border border-white/10 px-4 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-[#EDEDED] font-sans"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
