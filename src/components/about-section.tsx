"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top bottom-=100px",
            toggleActions: "play none none none",
          },
        }
      );
    }

    contentRefs.current.forEach((element, index) => {
      if (!element) return;

      gsap.fromTo(
        element,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=100px",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20">
      <div className="container">
        <h2 ref={headingRef} className="section-heading animated-element">
          About Me
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div
            ref={(el) => {
              contentRefs.current[0] = el;
            }}
            className="animated-element"
          >
            <h3 className="mb-4 text-xl font-semibold">Who am I?</h3>
            <p className="mb-6 text-lg leading-relaxed opacity-80">
              I&apos;m Elizar Aitbek, also known as Chilisten. As a passionate
              Frontend Developer, I specialize in creating responsive,
              accessible, and performant web applications.
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              With a keen eye for design and a strong technical foundation, I
              bridge the gap between design and development to deliver
              exceptional user experiences.
            </p>
          </div>

          <div
            ref={(el) => {
              contentRefs.current[1] = el;
            }}
            className="animated-element"
          >
            <h3 className="mb-4 text-xl font-semibold">My Approach</h3>
            <p className="mb-6 text-lg leading-relaxed opacity-80">
              I believe in clean, maintainable code that scales. My development
              process focuses on performance optimization, accessibility, and
              modern best practices.
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              Every project is an opportunity to push boundaries and explore new
              technologies while ensuring the end product is intuitive and
              enjoyable to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
