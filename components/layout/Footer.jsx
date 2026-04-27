"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-8 border-t border-white/5 relative z-10"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="font-syne text-2xl font-bold text-accent-primary">
          {"<GS />"}
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-text-secondary">
          <a href="#about" className="hover:text-accent-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-accent-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-accent-primary transition-colors">Contact</a>
        </nav>

        {/* Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-sm text-text-secondary">
          <p>© {new Date().getFullYear()} MD. Golam Sarwar — Built with Next.js & ♥</p>
          <button
            onClick={handleScrollToTop}
            className="p-2 rounded-full glass hover:bg-white/10 transition-colors ml-4 md:ml-0"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-accent-primary" />
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
