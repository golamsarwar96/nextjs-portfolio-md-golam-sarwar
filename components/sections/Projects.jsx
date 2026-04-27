"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const PROJECTS_DATA = [
  {
    title: "TaskFlow App",
    description: "MERN stack task management app with authentication, real-time updates, and team collaboration features.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    gradient: "from-[#FF416C] to-[#FF4B2B]",
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "DevBlog Platform",
    description: "A modern blogging platform built with Next.js featuring markdown support, SEO optimization, and dark mode.",
    tags: ["Next.js", "Tailwind", "MongoDB"],
    gradient: "from-[#4facfe] to-[#00f2fe]",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Shop",
    description: "Full-stack e-commerce application with shopping cart, Stripe payment integration, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-[#43e97b] to-[#38f9d7]",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Projects" 
          subtitle="Things I've built" 
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PROJECTS_DATA.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <GlassCard className="p-0 h-full flex flex-col group overflow-hidden border-white/10 hover:border-accent-primary/50 transition-colors">
                
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:scale-110 transition-transform duration-500`}
                  />
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      Featured
                    </div>
                  )}
                  
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                    <div className="w-24 h-24 rounded-full border-2 border-white border-dashed animate-spin-slow" style={{ animationDuration: '10s' }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-syne text-2xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-medium text-text-primary bg-white/5 border border-white/10 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 mt-auto">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-accent-primary/10 text-accent-primary hover:bg-accent-primary hover:text-white transition-all font-medium text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg glass text-text-primary hover:text-accent-primary hover:bg-white/10 transition-all font-medium text-sm"
                    >
                      <FaGithub className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
