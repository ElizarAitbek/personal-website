"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

    // Animate info section
    if (infoRef.current) {
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top bottom-=100px",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate form
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top bottom-=100px",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-muted py-20 dark:bg-muted/10"
    >
      <div className="container">
        <h2 ref={headingRef} className="section-heading animated-element">
          Get In Touch
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div ref={infoRef} className="animated-element">
            <p className="mb-6 text-lg leading-relaxed opacity-80">
              Interested in working together? Feel free to reach out!
            </p>
            <div className="mt-8">
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:elizar@example.com" className="underline">
                  elizar@aitbek.com
                </a>
              </p>
              <p className="mb-2">
                <strong>Telegram:</strong>{" "}
                <a
                  href="https://t.me/elizaraitbek"
                  target="_blank"
                  className="underline"
                >
                  @elizaraitbek
                </a>
              </p>

              <p className="mb-2">
                <strong>Location: Bishkek, Kyrgyz Republic</strong>
                <br />
                Available Worldwide (Remote)
              </p>
            </div>
          </div>

          <form
            ref={formRef}
            className="animated-element"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-4">
              <input
                type="text"
                className="w-full rounded-md border border-input bg-transparent p-3 text-foreground"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="w-full rounded-md border border-input bg-transparent p-3 text-foreground"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <textarea
                className="w-full rounded-md border border-input bg-transparent p-3 text-foreground"
                rows={5}
                placeholder="Your Message"
              ></textarea>
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
