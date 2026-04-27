"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({ title, subtitle, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={cn("mb-12 text-center md:text-left", className)}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-syne text-4xl md:text-5xl font-bold mb-4 relative inline-block"
      >
        {title}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-secondary origin-left rounded-full"
        />
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-text-secondary text-lg mt-6"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
