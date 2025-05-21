"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROJECTS = [
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce solution with cart functionality, payment processing, and user authentication.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Dashboard UI",
    description:
      "An admin dashboard with data visualization, real-time updates, and responsive design.",
    tech: ["React", "GSAP", "shadcn/ui"],
  },
  {
    title: "Portfolio Website",
    description:
      "A minimalist portfolio website with smooth animations and clean design.",
    tech: ["Next.js", "GSAP", "Tailwind CSS"],
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    // Animate heading
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

    // Animate projects with stagger
    projectRefs.current.forEach((element, index) => {
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
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container">
        <h2 ref={headingRef} className="section-heading animated-element">
          Featured Projects
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              className="project-card"
            >
              <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 opacity-80">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-secondary px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
