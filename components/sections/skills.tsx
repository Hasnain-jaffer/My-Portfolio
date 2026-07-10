"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Wrench,
  Layout,
  Braces,
  Palette,
  Globe,
  Layers,
  Wind,
  Box,
  Cpu,
  Zap,
  Shield,
  Container,
  GitBranch,
  Send,
  Rocket,
  Monitor,
  Map,
  FileCode,
  Terminal,
  FlaskConical,
} from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";

// Custom Train icon for Railway — moved above usage for clarity (function
// declarations hoist so it worked before, but this reads cleaner)
function Train({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
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
    color: "primary",
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
    color: "secondary",
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
    color: "emerald",
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
    color: "amber",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "Postman", icon: Send },
      { name: "VS Code", icon: FileCode },
      { name: "Leaflet.js", icon: Map },
    ],
  },
] as const;

const colorMap: Record<string, { bg: string; border: string; text: string; badge: "tech" | "skill" | "success" }> = {
  primary: { bg: "bg-primary/5", border: "border-primary/20", text: "text-primary", badge: "tech" },
  secondary: { bg: "bg-secondary/5", border: "border-secondary/20", text: "text-secondary", badge: "skill" },
  emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", badge: "success" },
  amber: { bg: "bg-amber-500/5", border: "border-amber-500/20", text: "text-amber-400", badge: "skill" },
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
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
<div className="grid md:grid-cols-2 gap-6">          
           {skillCategories.map((category, catIndex) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                whileHover={{ y: -4 }}
                className={`${colors.bg} border ${colors.border} rounded-2xl p-6 backdrop-blur-sm hover:border-opacity-40 transition-all duration-300`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${colors.bg} border ${colors.border}`}>
                    <category.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant={colors.badge}
                      className="text-xs py-1 px-2.5"
                    >
                      <skill.icon className="w-3 h-3 mr-1" />
                      {skill.name}
                    </Badge>
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