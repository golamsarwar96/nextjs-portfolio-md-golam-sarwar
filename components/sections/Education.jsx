"use client";

import { useEffect, useRef } from "react";
import { GraduationCap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EDUCATION_DATA = [
  {
    degree: "B.Sc in Computer Science & Engineering",
    institution: "[Your University Name]",
    year: "2022 – Present",
    score: "CGPA: [X.XX]",
  },
  {
    degree: "HSC",
    institution: "[Your College Name]",
    year: "[Year]",
    score: "GPA: [X.XX]",
  },
  {
    degree: "SSC",
    institution: "[Your School Name]",
    year: "[Year]",
    score: "GPA: [X.XX]",
  },
];

export function Education() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !containerRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate middle line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: false,
          },
        }
      );

      // Animate cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        const isLeft = index % 2 !== 0;
        
        gsap.fromTo(
          card,
          { opacity: 0, x: isLeft ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              scrub: false,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Education" />

        <div className="relative mt-16 max-w-4xl mx-auto" ref={containerRef}>
          {/* Middle Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
            <div 
              ref={lineRef}
              className="w-full h-full bg-gradient-to-b from-accent to-accent-secondary origin-top"
            />
          </div>

          <div className="flex flex-col gap-12">
            {EDUCATION_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  ref={(el) => { cardsRef.current[index] = el; }}
                  className={`relative flex items-center justify-between md:justify-normal ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  } group pl-12 md:pl-0`}
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-accent-primary z-10">
                    <div className="absolute inset-0 rounded-full bg-accent-primary animate-ping opacity-50" />
                  </div>

                  {/* Spacer for desktop alignment */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Content */}
                  <div className={`w-full md:w-[45%] ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                    <GlassCard className="hover:border-accent-primary/30 group-hover:-translate-y-1 transition-all relative overflow-hidden">
                      {/* Background accent */}
                      <div className="absolute top-0 right-0 p-4 opacity-5">
                        <GraduationCap className="w-24 h-24" />
                      </div>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-full bg-accent-primary/20 text-accent-primary">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-accent-primary border border-accent-primary/20 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      
                      <h3 className="font-syne text-xl md:text-2xl font-bold text-text-primary mb-2">
                        {item.degree}
                      </h3>
                      <p className="text-text-secondary text-lg mb-3">
                        {item.institution}
                      </p>
                      <p className="text-sm font-medium text-text-primary bg-white/5 inline-block px-3 py-1 rounded-md">
                        {item.score}
                      </p>
                    </GlassCard>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
