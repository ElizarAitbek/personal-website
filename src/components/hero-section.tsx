"use client";

import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import gsap from "gsap";
import { useTheme } from "@/contexts/theme-context";
import { SvgAnimator } from "./ui/svg-animator";

export function HeroSection() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLHeadingElement | HTMLDivElement | null)[]>(
    []
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = elementsRef.current.filter(Boolean);

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      id="main"
      ref={sectionRef}
      className="flex min-h-screen items-center py-20"
    >
      <div className="container">
        <h1
          ref={(el) => {
            elementsRef.current[0] = el;
          }}
          className="hero-heading"
        >
          <span
            className={theme === "dark" ? "text-blue-300" : "text-blue-600"}
          >
            Elizar Aitbek
          </span>
        </h1>

        <SvgAnimator />
        <h2
          ref={(el) => {
            elementsRef.current[1] = el;
          }}
          className="hero-subheading"
        >
          Frontend Developer crafting elegant and performant web experiences
        </h2>

        <div
          ref={(el) => {
            elementsRef.current[2] = el;
          }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Button size="lg" asChild>
            <a href="#contact">Get in touch</a>
          </Button>

          <Button variant="outline" size="lg" asChild>
            <a href="#projects">View my work</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
