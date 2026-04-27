"use client";

import { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const TYPING_WORDS = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Next.js Developer",
  "Problem Solver",
];

export function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setCurrentText(TYPING_WORDS[0]);
      return;
    }

    const typeSpeed = isDeleting ? 50 : 100;
    const currentWord = TYPING_WORDS[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
      } else {
        setCurrentText(
          currentWord.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  // GSAP animations
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !containerRef.current || !titleRef.current || !leftContentRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Title character splitting for animation
      if (titleRef.current) {
        const text = titleRef.current.innerText;
        titleRef.current.innerHTML = "";
        text.split("").forEach((char) => {
          const span = document.createElement("span");
          span.innerText = char === " " ? "\u00A0" : char;
          span.style.opacity = "0";
          span.style.display = "inline-block";
          span.style.transform = "translateY(20px)";
          titleRef.current?.appendChild(span);
        });
      }

      // Timeline sequence
      const elements = leftContentRef.current.children;
      const titleChars = titleRef.current.children;

      tl.fromTo(
        elements[0], // Eyebrow
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
      .to(
        titleChars, // H1
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.05 },
        "-=0.4"
      )
      .fromTo(
        [elements[2], elements[3], elements[4], elements[5]], // Typing, Tagline, CTAs, Socials
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        "-=0.2"
      )
      .fromTo(
        rightContentRef.current, // Image
        { opacity: 0, scale: 0.8, rotate: -10 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: "back.out(1.5)" },
        "-=0.8"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="top" 
      ref={containerRef} 
      className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column */}
        <div ref={leftContentRef} className="flex flex-col items-start gap-6 z-10">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-primary/30 text-accent-primary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
            </span>
            [ Available for Work ]
          </div>

          {/* H1 */}
          <h1 ref={titleRef} className="font-syne text-5xl md:text-7xl font-bold text-text-primary leading-tight">
            MD. Golam Sarwar
          </h1>

          {/* Typing Effect */}
          <div className="text-2xl md:text-3xl font-medium text-accent-primary h-10 flex items-center">
            {currentText}
            <span className="w-[3px] h-8 bg-accent-primary ml-1 animate-blink"></span>
          </div>

          {/* Tagline */}
          <p className="text-text-secondary text-lg md:text-xl max-w-lg leading-relaxed">
            Building fast, scalable web apps with clean code and modern tech.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-accent to-accent-secondary text-white font-medium hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,217,255,0.3)]"
            >
              View My Work
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full glass text-text-primary hover:bg-white/10 hover:text-accent-primary transition-all font-medium border border-white/20"
            >
              Download Resume
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5 mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-white/10 hover:text-accent-primary hover:-translate-y-1 transition-all">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-white/10 hover:text-accent-primary hover:-translate-y-1 transition-all">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="mailto:golamsarwar@email.com" className="p-3 rounded-full glass hover:bg-white/10 hover:text-accent-primary hover:-translate-y-1 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Right Column */}
        <div ref={rightContentRef} className="flex justify-center lg:justify-end z-10 opacity-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
            {/* Animated Ring */}
            <div className="absolute inset-[-10px] rounded-full overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl z-0">
              <div className="absolute inset-0 rounded-full" 
                   style={{ background: 'conic-gradient(from 0deg, transparent, var(--accent-primary), transparent)', animation: 'spin 4s linear infinite' }} 
              />
              <div className="absolute inset-[2px] rounded-full bg-primary" />
            </div>
            
            {/* Image Container / Placeholder */}
            {/* TODO: Replace with public/profile.jpg using next/image */}
            <div className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent-secondary/20 border-4 border-primary z-10 shadow-inner">
              <span className="font-syne text-6xl font-bold text-accent-primary opacity-50">GS</span>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute top-10 -right-4 w-8 h-8 rounded-full bg-accent-primary/20 backdrop-blur-md border border-accent-primary/30 z-20 animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-10 -left-6 w-12 h-12 rounded-full bg-accent-secondary/20 backdrop-blur-md border border-accent-secondary/30 z-20 animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-xs uppercase tracking-widest text-text-secondary">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-text-secondary to-transparent" />
      </div>
    </section>
  );
}
