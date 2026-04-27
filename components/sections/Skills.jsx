"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SKILLS_CATEGORIES = [
  {
    title: "Frontend",
    skills: [
      { name: "React", percentage: 90 },
      { name: "Next.js", percentage: 75 },
      { name: "Tailwind CSS", percentage: 88 },
      { name: "JavaScript", percentage: 85 },
      { name: "HTML/CSS", percentage: 92 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", percentage: 78 },
      { name: "Express.js", percentage: 75 },
      { name: "REST APIs", percentage: 80 },
      { name: "MongoDB", percentage: 72 },
      { name: "Mongoose", percentage: 70 },
    ],
  },
  {
    title: "Tools & Learning",
    skills: [
      { name: "Git/GitHub", percentage: 82 },
      { name: "VS Code", percentage: 95 },
      { name: "TypeScript", percentage: 60 },
      { name: "System Design", percentage: 45 },
    ],
  },
];

export function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !containerRef.current) return;

    const bars = containerRef.current.querySelectorAll(".skill-bar-fill");

    const ctx = gsap.context(() => {
      bars.forEach((bar) => {
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Skills" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12" ref={containerRef}>
          {SKILLS_CATEGORIES.map((category, index) => (
            <GlassCard key={index} className={index === 2 ? "lg:col-span-2 lg:w-1/2 lg:mx-auto" : ""}>
              <h3 className="font-syne text-xl font-bold text-accent-primary mb-6">
                {category.title}
              </h3>
              <div className="flex flex-col gap-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                      <span className="text-sm font-medium text-text-secondary">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full bg-gradient-to-r from-accent-secondary to-accent-primary origin-left rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
