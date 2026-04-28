"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const PROJECTS_DATA = [
  {
    title: "OpTrack ",
    description: "OpTrack is a powerful web application designed to streamline employee management within organizations. The platform supports role-based functionalities for Admins, HRs, and Employees, offering tailored experiences to meet their responsibilities. With features like task submissions, salary management, payment handling via Stripe, and performance tracking, OpTrack provides a seamless and efficient solution for organizational operations.",
    tags: ["React", "Node.js", "Express", "MongoDB", "stripe"],
    image: "https://i.ibb.co.com/B2S4zg8D/68747470733a2f2f692e6962622e636f2e636f6d2f393347794b5250462f6f70747261636b73732e706e67.png",
    gradient: "from-[#FF416C] to-[#FF4B2B]",
    featured: true,
    liveUrl: "https://op-track.web.app/",
    githubUrl: "https://github.com/golamsarwar96/op-track-app-client",
  },
  {
    title: "Smart Picks",
    description: "Smart Picks is a Product Recommendation Platform designed to assist users in making informed choices about various products. Users can interact with the system by posting queries, providing recommendations, and sharing insights about alternative products. The platform fosters a collaborative environment where users contribute to a shared knowledge base.",
    tags: ["Next.js", "Tailwind", "MongoDB"],
    image: "https://i.ibb.co.com/R46D5Py5/68747470733a2f2f692e6962622e636f2e636f6d2f4e644671647051592f736d6172747069636b7373732e706e67.png",
    gradient: "from-[#4facfe] to-[#00f2fe]",
    featured: false,
    liveUrl: "https://smart-picks-f7293.web.app/",
    githubUrl: "https://github.com/golamsarwar96/smart-picks-app-client",
  },
  {
    title: "Sport Flex",
    description: "Sport Flex is your ultimate destination for all things sports. Whether you’re an athlete, a coach, or a fitness enthusiast, our website is designed to fuel your passion for sports and fitness. With a sleek and engaging interface, you can explore a variety of sections that make navigation effortless and enjoyable. From discovering top-quality sports gear and accessories tailored for every game to browsing curated categories for Cricket, Football, Hockey, and Tennis, Sport Flex has it all. Be inspired by stories of athletes and their winning moments with our products, while staying informed with insightful blogs. Sport Flex is committed to empowering athletes with premium products and a platform that celebrates the love of sports. Play your best game with Sport Flex!",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://i.ibb.co.com/PZzXKR67/68747470733a2f2f692e6962622e636f2e636f6d2f5137663132545a482f73706f7274666c657873732e706e67.png",
    gradient: "from-[#43e97b] to-[#38f9d7]",
    featured: false,
    liveUrl: "https://sport-flex-51779.web.app/",
    githubUrl: "https://github.com/golamsarwar96/sport-flex-app-client",
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
        />
        <p className="text-center text-text-secondary">Things I've built</p>
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
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60`} />

                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      Featured
                    </div>
                  )}
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
