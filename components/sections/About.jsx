"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { label: "Projects Built", value: 5, suffix: "+" },
  { label: "Years Coding", value: 2, suffix: "+" },
  { label: "Technologies", value: 10, suffix: "+" },
  { label: "Dedication", value: 100, suffix: "%" },
];

export function About() {
  const statsRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !statsRef.current) return;

    const statElements = statsRef.current.querySelectorAll(".stat-number");

    const ctx = gsap.context(() => {
      statElements.forEach((el) => {
        const targetValue = parseInt(el.getAttribute("data-target") || "0", 10);

        ScrollTrigger.create({
          trigger: statsRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.to(el, {
              innerHTML: targetValue,
              duration: 2,
              snap: { innerHTML: 1 },
              ease: "power2.out",
            });
          },
          once: true,
        });
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-24 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">

          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6 text-lg text-text-secondary leading-relaxed"
          >

            <p>
              I&apos;m a passionate web developer from Dhaka, Bangladesh with hands-on experience in the MERN stack.
            </p>
            <p>
              I enjoy building full-stack web applications that are fast, clean, and user-focused. My goal is to create digital experiences that solve real problems.
            </p>
            <p>
              Currently leveling up with Next.js, TypeScript, and modern animation libraries to build even more engaging and performant interfaces.
            </p>
            <p>
              Always learning, always building — I&apos;m looking for opportunities to grow with a great team and contribute to exciting projects.
            </p>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {STATS.map((stat, index) => (
              <GlassCard
                key={index}
                className="flex flex-col items-center justify-center p-8 hover:-translate-y-2 hover:border-accent-primary/30 transition-all group"
              >
                <div className="flex items-baseline gap-1 text-4xl md:text-5xl font-syne font-bold text-accent-primary mb-2 group-hover:scale-110 transition-transform">
                  <span className="stat-number" data-target={stat.value}>0</span>
                  <span className="text-3xl md:text-4xl">{stat.suffix}</span>
                </div>
                <p className="text-text-primary font-medium text-center">{stat.label}</p>
              </GlassCard>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
