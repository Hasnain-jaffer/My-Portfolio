"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/animated-text";

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 bg-background"
    >
      <div className="absolute inset-0 hero-glow" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-5xl mx-auto text-center"
      >
        {/* Availability Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white dark:bg-white/5 border border-emerald-200 dark:border-emerald-500/20 text-sm font-semibold text-emerald-700 dark:text-emerald-400 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>Available for opportunities</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-5"
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="gradient-text">Hasnain Jaffer</span>
        </motion.h1>

        {/* Role with Typewriter */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-4 h-12 flex items-center justify-center"
        >
          <TypewriterText
            texts={roles}
            className="text-amber-600 dark:text-amber-400"
            speed={80}
            pause={2500}
          />
        </motion.div>

        {/* Location */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-1.5 text-muted-foreground text-sm mb-8"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Based in Pakistan · Available Worldwide (Remote)</span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Full Stack Developer specializing in the MERN Stack. I build scalable,
          high-performance web applications using React, Node.js, MongoDB, and
          modern cloud deployment — currently open to full-time and freelance
          opportunities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Button
            size="lg"
            className="group w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:opacity-90 shadow-lg shadow-emerald-500/25 border-0 h-12 px-8 text-base"
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span>View Projects</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </Button>
          <a
            href="/resume/resume.pdf"
            download="Hasnain_Jaffer_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold h-12 px-8 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-foreground hover:border-emerald-300 dark:hover:border-emerald-500/30 hover:shadow-md transition-all w-full sm:w-auto"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3"
        >
          {[
            { href: "https://github.com/Hasnain-Jaffer", icon: Github, label: "GitHub", color: "hover:text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50 dark:hover:text-emerald-400 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-500/10" },
            { href: "https://linkedin.com/in/hasnain-jaffer-dev", icon: Linkedin, label: "LinkedIn", color: "hover:text-amber-600 hover:border-amber-300 hover:bg-amber-50 dark:hover:text-amber-400 dark:hover:border-amber-500/30 dark:hover:bg-amber-500/10" },
            { href: "mailto:hasnainkaim10@gmail.com", icon: Mail, label: "Email", color: "hover:text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50 dark:hover:text-emerald-400 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-500/10" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-muted-foreground ${social.color} transition-all duration-300 shadow-sm`}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground/60"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}