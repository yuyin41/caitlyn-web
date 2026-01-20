"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { BackgroundController } from "@/components/BackgroundController";
import { ProfileSection } from "@/components/ProfileSection";
import { ContactSection } from "@/components/ContactSection";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { StaticMouseTrail } from "@/components/StaticMouseTrail";

export default function Home() {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#050505] text-[#EDEDED]">
        <StaticMouseTrail />
        <CustomCursor />
        <BackgroundController activeCategoryId={activeCategoryId} />
        <Header />
        <main>
          <Hero />
          <WorkSection onCategoryInView={setActiveCategoryId} />
          <ProfileSection />
          <ContactSection />
        </main>
      </div>
    </SmoothScroll>
  );
}
