"use client";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-10 w-full backdrop-blur-sm transition-all ${
        isScrolled ? "py-4 shadow-sm" : ""
      } ${mobileMenuOpen ? "bg-background" : "bg-background/80"}`}
    >
      <div className="container flex items-center justify-between py-4">
        <a href="#main" className="text-xl font-bold">
          Chilisten
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden md:block">
            <ul className="flex items-center">
              <li>
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <ThemeToggle />

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="container py-4 md:hidden">
          <nav>
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#about"
                  className="block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
