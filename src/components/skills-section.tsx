"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SKILLS = [
  { name: "React", link: "https://reactjs.org/docs/getting-started.html" },
  { name: "TypeScript", link: "https://www.typescriptlang.org/docs/" },
  { name: "Next.js", link: "https://nextjs.org/docs" },
  { name: "Tailwind CSS", link: "https://tailwindcss.com/docs" },
  {
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "HTML5",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  { name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "GSAP", link: "https://gsap.com/docs/" },
  { name: "Redux", link: "https://redux.js.org/introduction/getting-started" },
  { name: "GraphQL", link: "https://graphql.org/learn/" },
  {
    name: "Responsive Design",
    link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
  },
  {
    name: "UI/UX",
    link: "https://www.nngroup.com/articles/definition-user-experience/",
  },
  { name: "Git", link: "https://git-scm.com/doc" },
  { name: "Webpack", link: "https://webpack.js.org/concepts/" },
  { name: "Jest", link: "https://jestjs.io/docs/getting-started" },
  {
    name: "Accessibility",
    link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility",
  },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<(HTMLAnchorElement | null)[]>([]);

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

    const skillElements = skillsRef.current.filter(Boolean);

    skillElements.forEach((element) => {
      if (!element) return;

      gsap.fromTo(
        element,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=50px",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-muted py-20 dark:bg-muted/10"
    >
      <div className="container">
        <h2 ref={headingRef} className="section-heading animated-element">
          Skills & Expertise
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {SKILLS.map((skill, index) => (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-card p-4 text-center transition-colors duration-300 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950"
              ref={(el) => {
                skillsRef.current[index] = el;
              }}
            >
              <p className="font-medium text-foreground">{skill.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
