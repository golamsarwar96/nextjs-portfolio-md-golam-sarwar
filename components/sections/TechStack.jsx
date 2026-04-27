"use client";

import { motion } from "framer-motion";
import { 
  SiHtml5, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiGit, 
  SiGithub, 
  SiFigma, 
  SiPostman 
} from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TECH_STACK = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "currentColor" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "currentColor" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Tech Stack" 
          subtitle="Technologies I work with" 
        />

        <motion.div 
          className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {TECH_STACK.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 0 20px rgba(0, 217, 255, 0.2)",
              }}
              className="glass rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-colors hover:border-accent-primary/50 group"
            >
              <tech.icon 
                className="w-10 h-10 text-text-secondary group-hover:text-accent-primary transition-colors" 
                style={{ '--hover-color': tech.color }}
              />
              <span className="text-sm font-medium text-text-primary text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
