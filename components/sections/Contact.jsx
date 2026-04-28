"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Wire up to EmailJS or Formspree
    // Example: https://formspree.io/
    // fetch("https://formspree.io/f/your_endpoint", { method: "POST", body: new FormData(e.currentTarget) })

    setTimeout(() => {
      setIsSubmitting(false);
      e.target.reset();
      alert("Message sent successfully! (Demo)");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Get In Touch"
        />
        <p className="text-center mt-6 text-text-secondary mb-10">I'm currently open to opportunities — let's talk!</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">

          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col h-full"
          >
            <GlassCard className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-syne text-2xl font-bold text-text-primary mb-8">
                  Contact Information
                </h3>

                <div className="flex flex-col gap-6 mb-12">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary mb-1">Email</p>
                      <a href="mailto:golamsarwar@email.com" className="text-lg font-medium text-text-primary hover:text-accent-primary transition-colors">
                        sarwartasin1896@email.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary mb-1">Location</p>
                      <p className="text-lg font-medium text-text-primary">
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-text-secondary mb-4 italic">
                  I typically reply within 24 hours.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://bd.linkedin.com/in/md-golamsarwar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center rounded-full glass text-text-primary hover:text-accent-primary hover:bg-white/10 hover:-translate-y-1 transition-all"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/golamsarwar96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center rounded-full glass text-text-primary hover:text-accent-primary hover:bg-white/10 hover:-translate-y-1 transition-all"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <GlassCard>
              <h3 className="font-syne text-2xl font-bold text-text-primary mb-8">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-text-primary">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all placeholder:text-text-secondary/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-text-primary">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all placeholder:text-text-secondary/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-text-primary">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all placeholder:text-text-secondary/50"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-text-primary">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all placeholder:text-text-secondary/50 resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full flex items-center justify-center gap-2 py-4 rounded-lg bg-gradient-to-r from-accent to-accent-secondary text-white font-medium hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(0,217,255,0.2)] disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="w-4 h-4 ml-1" />}
                </button>
              </form>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
