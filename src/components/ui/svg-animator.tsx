"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const SvgAnimator = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [svgLoaded, setSvgLoaded] = useState(false);

  useEffect(() => {
    fetch("/finger-print.svg")
      .then((res) => res.text())
      .then((svgText) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = svgText;
          setSvgLoaded(true);
        }
      });
  }, []);

  useEffect(() => {
    if (!svgLoaded || !containerRef.current) return;

    const paths = containerRef.current.querySelectorAll<SVGPathElement>("path");

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length.toString();
      path.style.strokeDashoffset = length.toString();
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.4 });

    // Анимация появления
    paths.forEach((path, i) => {
      tl.to(
        path,
        {
          strokeDashoffset: 0,
          duration: 1,
          ease: "power2.out",
        },
        i * 0.15
      );
    });

    // Пауза перед исчезновением
    tl.to({}, { duration: 1 });

    // Анимация исчезновения
    paths.forEach((path, i) => {
      const length = path.getTotalLength();
      tl.to(
        path,
        {
          strokeDashoffset: length,
          duration: 1,
          ease: "power2.in",
        },
        i * 0.1
      );
    });

    return () => {
      tl.kill();
    };
  }, [svgLoaded]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[600px] mx-auto my-8 absolute top-0 left-[50%] bottom-0 z-[-1] rotate-90"
    ></div>
  );
};
