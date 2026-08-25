"use client";

import { motion } from "framer-motion";
import {
  Code2, Server, Database, Wrench, Layout, Braces, Palette,
  Globe, Layers, Wind, Box, Cpu, Zap, Shield, Container,
  GitBranch, Send, Rocket, Monitor, Map, FileCode, Terminal, FlaskConical,
} from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";

function Train({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="16" rx="2" />
      <path d="M4 11h16" />
      <path d="M12 3v8" />
      <path d="M8 19l-2 3" />
      <path d="M16 19l2 3" />
    </svg>
  );
}

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    accent: "emerald" as const,
    skills: [
      { name: "HTML5", icon: Code2 },
      { name: "CSS3", icon: Palette },
      { name: "JavaScript", icon: Braces },
      { name: "React", icon: Zap },
      { name: "Next.js", icon: Globe },
      { name: "Tailwind CSS", icon: Wind },
      { name: "Bootstrap", icon: Box },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    accent: "amber" as const,
    skills: [
      { name: "Node.js", icon: Cpu },
      { name: "Express.js", icon: Server },
      { name: "Socket.io", icon: Zap },
      { name: "JWT", icon: Shield },
      { name: "Python", icon: Terminal },
      { name: "Flask", icon: FlaskConical },
      { name: "Django", icon: Layers },
    ],
  },
  {
    title: "Database & DevOps",
    icon: Database,
    accent: "emerald" as const,
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "Docker", icon: Container },
      { name: "Nginx", icon: Server },
      { name: "GitHub Actions", icon: GitBranch },
      { name: "Railway", icon: Train },
      { name: "Render", icon: Monitor },
      { name: "Vercel", icon: Rocket },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    accent: "amber" as const,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "Postman", icon: Send },
      { name: "VS Code", icon: FileCode },
      { name: "Leaflet.js", icon: Map },
    ],
  },
];

const accentStyles = {
  emerald: {
    iconText: "text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-50 dark:bg-emerald-400/10",
    iconBorder: "border-emerald-200 dark:border-emerald-400/20",
    leftBorder: "border-l-emerald-400 dark:border-l-emerald-400",
    badgeBg: "bg-emerald-50 dark:bg-emerald-400/10",
    badgeBorder: "border-emerald-200 dark:border-emerald-400/20",
    badgeText: "text-emerald-700 dark:text-emerald-300",
  },
  amber: {
    iconText: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-50 dark:bg-amber-400/10",
    iconBorder: "border-amber-200 dark:border-amber-400/20",
    leftBorder: "border-l-amber-400 dark:border-l-amber-400",
    badgeBg: "bg-amber-50 dark:bg-amber-400/10",
    badgeBorder: "border-amber-200 dark:border-amber-400/20",
    badgeText: "text-amber-700 dark:text-amber-300",
  },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" tone="elevated">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => {
            const style = accentStyles[category.accent];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                whileHover={{ y: -4 }}
                className={`bg-white dark:bg-card rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-sm shadow-slate-200/50 dark:shadow-none hover:shadow-lg hover:shadow-slate-200/60 dark:hover:shadow-2xl dark:hover:shadow-black/20 transition-all duration-300 border-l-4 ${style.leftBorder}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${style.iconBg} border ${style.iconBorder}`}>
                    <category.icon className={`w-5 h-5 ${style.iconText}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-lg ${style.badgeBg} border ${style.badgeBorder} ${style.badgeText}`}
                    >
                      <skill.icon className="w-3.5 h-3.5" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}