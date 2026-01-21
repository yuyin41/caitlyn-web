"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const card = target.closest('[data-video-card]');
      const clickable = target.closest("a, button") || target.tagName === "A" || target.tagName === "BUTTON";

      if (card) {
        setIsHoveringCard(true);
        setIsHovering(false);
      } else if (clickable) {
        setIsHovering(true);
        setIsHoveringCard(false);
      } else {
        setIsHovering(false);
        setIsHoveringCard(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHoveringCard ? 1 : isHovering ? 1 : 1,
        rotate: isHoveringCard ? -45 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      {isHoveringCard ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-white"
          style={{ transform: "rotate(-45deg) scaleX(-1)" }}
        >
          <Scissors className="h-5 w-5" strokeWidth={1.5} />
        </motion.div>
      ) : (
        <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#EDEDED] bg-transparent backdrop-blur-sm" />
      )}
    </motion.div>
  );
}
