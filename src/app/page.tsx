"use client";

import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { CursorEffect } from "@/components/cursor-effect";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e: Event) => {
      e.preventDefault();

      const anchor = e.currentTarget as HTMLAnchorElement;
      const targetId = anchor.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      window.scrollTo({
        top:
          targetElement.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: "smooth",
      });
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div className="overflow-hidden flex flex-col items-center">
      <CursorEffect />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
