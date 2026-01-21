"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView, type Variants } from "framer-motion";
import { Play, X } from "lucide-react";
import {
  type PortfolioProject,
  portfolioCategories,
} from "@/data/portfolio";

function getEmbedForVideoUrl(
  videoUrl: string,
): { kind: "youtube" | "vimeo"; src: string } | null {
  if (!videoUrl || !videoUrl.trim()) return null;
  
  const url = videoUrl.trim();

  // YouTube: Handle multiple formats
  let videoId: string | null = null;

  // Short URL: youtu.be/ID
  const shortMatch = url.match(/youtu\.be\/([A-Za-z0-9_-]+)/);
  if (shortMatch && shortMatch[1]) {
    videoId = shortMatch[1];
  }

  // Standard watch URL: youtube.com/watch?v=ID
  if (!videoId) {
    const watchMatch = url.match(/youtube\.com\/watch\?v=([A-Za-z0-9_-]+)/);
    if (watchMatch && watchMatch[1]) {
      videoId = watchMatch[1];
    }
  }

  // Watch URL with additional params: youtube.com/watch?v=ID&other=params
  if (!videoId) {
    const watchMatchWithParams = url.match(/youtube\.com\/watch\?.*[&?]v=([A-Za-z0-9_-]+)/);
    if (watchMatchWithParams && watchMatchWithParams[1]) {
      videoId = watchMatchWithParams[1];
    }
  }

  // Embed URL: youtube.com/embed/ID
  if (!videoId) {
    const embedMatch = url.match(/youtube\.com\/embed\/([A-Za-z0-9_-]+)/);
    if (embedMatch && embedMatch[1]) {
      videoId = embedMatch[1];
    }
  }

  // V URL: youtube.com/v/ID
  if (!videoId) {
    const vMatch = url.match(/youtube\.com\/v\/([A-Za-z0-9_-]+)/);
    if (vMatch && vMatch[1]) {
      videoId = vMatch[1];
    }
  }

  if (videoId) {
    return {
      kind: "youtube",
      src: `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&playsinline=1&rel=0&modestbranding=1`,
    };
  }

  // Vimeo: https://vimeo.com/ID or https://player.vimeo.com/video/ID
  const vimeoMatch = url.match(
    /^(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/,
  );
  if (vimeoMatch && vimeoMatch[1]) {
    const id = vimeoMatch[1];
    return {
      kind: "vimeo",
      src: `https://player.vimeo.com/video/${id}?autoplay=1&muted=1&title=0&byline=0&portrait=0`,
    };
  }

  return null;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.25, 0.8, 0.2, 1] },
  },
};

const cardVariants: Variants = {
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

type WorkSectionProps = {
  onCategoryInView?: (categoryId: string | null) => void;
};

export function WorkSection({ onCategoryInView }: WorkSectionProps) {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  // Basic escape-key handling for closing the modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      <section
        id="work"
        className="relative z-10 border-t border-transparent bg-transparent pb-24 pt-28 text-[#EDEDED] sm:pb-32 sm:pt-32 lg:pb-40 lg:pt-40"
      >
        <div className="mx-auto flex w-full max-w-[95%] flex-col gap-24 px-4 sm:gap-28 sm:px-6 lg:gap-32 lg:px-10">
          {portfolioCategories.map((category) => (
            <CategorySection
              key={category.id}
              categoryId={category.id}
              onInView={onCategoryInView}
            >
              <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.32em] text-[#888888] sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex items-baseline gap-4">
                  <span className="text-[0.65rem] text-[#888888] font-sans">
                    {category.roman}.
                  </span>
                  <h2 className="text-lg tracking-[0.4em] text-[#EDEDED] font-serif sm:text-xl">
                    {category.title}
                  </h2>
                </div>
                <span className="text-[0.65rem] text-[#888888]">
                  {category.projects.length.toString().padStart(2, "0")} PIECES
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.projects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onSelect={setSelectedProject}
                  />
                ))}
              </div>
            </CategorySection>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-30 flex items-center justify-center bg-black/80 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.8, 0.2, 1] }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.25, 0.8, 0.2, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                className="absolute -top-10 right-0 flex h-8 w-8 items-center justify-center text-xs uppercase tracking-[0.32em] text-[#EDEDED] mix-blend-difference"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-4 w-4" />
              </button>

              <div className="aspect-video overflow-hidden bg-black rounded-xl">
                {selectedProject.videoUrl && selectedProject.videoUrl.trim() ? (
                  (() => {
                    const embed = getEmbedForVideoUrl(selectedProject.videoUrl);
                    if (embed) {
                      return (
                        <iframe
                          key={embed.src}
                          title={selectedProject.title}
                          src={embed.src}
                          className="h-full w-full border-0"
                          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                          allowFullScreen
                          frameBorder="0"
                        />
                      );
                    }

                    return (
                      <video
                        src={selectedProject.videoUrl}
                        className="h-full w-full object-cover"
                        controls
                        autoPlay
                      />
                    );
                  })()
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.32em] text-[#888]">
                    Video coming soon
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.32em] text-[#A7A7A7]">
                <span>{selectedProject.title}</span>
                <span>FILM EDITED BY ZHENG HUANG</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

type CategorySectionProps = {
  categoryId: string;
  onInView?: (categoryId: string | null) => void;
  children: React.ReactNode;
};

function CategorySection({
  categoryId,
  onInView,
  children,
}: CategorySectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    amount: 0.4,
    margin: "-20% 0px -40% 0px",
  });

  useEffect(() => {
    if (isInView) {
      onInView?.(categoryId);
    }
  }, [isInView, categoryId, onInView]);

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col gap-8"
    >
      {children}
    </motion.div>
  );
}

type ProjectCardProps = {
  project: PortfolioProject;
  index: number;
  onSelect: (project: PortfolioProject) => void;
};

function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (project.previewVideoUrl && videoRef.current) {
      videoRef.current.currentTime = 0;
      void videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.article
      key={project.id}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      whileHover={{
        scale: 1.02,
        y: -5,
        boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 22,
        mass: 1.1,
      }}
      onClick={() => onSelect(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-video-card
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-xl bg-[#111] border border-white/5 backdrop-blur-sm"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl transform-gpu will-change-transform">
        {/* Static thumbnail image */}
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[0.25,0.8,0.2,1] group-hover:scale-[1.03] rounded-xl"
          unoptimized
        />

        {/* Hover video preview */}
        {project.previewVideoUrl && (
          <video
            ref={videoRef}
            src={project.previewVideoUrl}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-400 ease-[0.25,0.8,0.2,1] rounded-xl ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
            muted={true}
            loop={true}
            playsInline={true}
            autoPlay={true}
            preload="metadata"
            onLoadStart={() =>
              console.log("Loading preview video:", project.title, project.previewVideoUrl)
            }
            onLoadedMetadata={() =>
              console.log("Video metadata loaded:", project.title)
            }
            onCanPlay={() =>
              console.log("Video can play:", project.title)
            }
            onError={(e) => {
              const error = e.currentTarget.error;
              if (error) {
                const errorMessages: Record<number, string> = {
                  1: "MEDIA_ERR_ABORTED - Loading aborted",
                  2: "MEDIA_ERR_NETWORK - Network error",
                  3: "MEDIA_ERR_DECODE - Decode error (codec issue)",
                  4: "MEDIA_ERR_SRC_NOT_SUPPORTED - Format not supported",
                };
                console.error(
                  "VIDEO ERROR (preview):",
                  project.title,
                  "\n  Error Code:",
                  error.code,
                  errorMessages[error.code] || "Unknown error",
                  "\n  Error Message:",
                  error.message,
                  "\n  Video URL:",
                  project.previewVideoUrl
                );
              } else {
                console.error("VIDEO ERROR (preview):", project.title, "Unknown error");
              }
            }}
          />
        )}

        {/* Subtle grain overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%224%22 height=%224%22 viewBox=%220 0 4 4%22><path fill=%22%23000000%22 d=%22M0 0h4v4H0z%22/><path fill=%22%23080808%22 d=%22M0 0h2v2H0zM2 2h2v2z%22/></svg>')]" />

        {/* Play icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm opacity-0 transition-all duration-300 ease-[0.25,0.8,0.2,1] group-hover:opacity-100 group-hover:scale-100">
            <Play className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="mt-6 pb-8 flex flex-col gap-1 text-xs relative z-10 px-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="truncate text-[0.7rem] uppercase tracking-[0.28em] text-[#EDEDED] font-sans">
            {project.title}
          </h3>
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-[#888888] font-sans">
            PLAY
          </span>
        </div>
      </div>
    </motion.article>
  );
}
