"use client";

import { useTheme } from "@/contexts/theme-context";
import { useEffect } from "react";
import gsap from "gsap";

export function CursorEffect() {
  const { theme } = useTheme();

  useEffect(() => {
    // Create cursor elements
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    Object.assign(cursor.style, {
      position: "fixed",
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      backgroundColor: theme === "dark" ? "white" : "black",
      pointerEvents: "none",
      transform: "translate(-50%, -50%)",
      zIndex: "9999",
      opacity: "0.7",
      transition: "transform 0.1s ease",
    });
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement("div");
    cursorFollower.classList.add("cursor-follower");
    Object.assign(cursorFollower.style, {
      position: "fixed",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      border: `1px solid ${theme === "dark" ? "white" : "black"}`,
      pointerEvents: "none",
      transform: "translate(-50%, -50%)",
      zIndex: "9998",
      opacity: "0.3",
    });
    document.body.appendChild(cursorFollower);

    // Define event handlers
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(cursorFollower, { x: e.clientX, y: e.clientY, duration: 0.3 });
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.8, duration: 0.2 });
      gsap.to(cursorFollower, { scale: 0.8, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(cursorFollower, { scale: 1, duration: 0.2 });
    };

    // Add event listeners
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorFollower);
    };
  }, [theme]);

  return null;
}
