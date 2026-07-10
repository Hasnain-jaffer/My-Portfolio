"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, GraduationCap, Target, Zap } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";

const highlights = [
  {
    icon: GraduationCap,
    title: "Final-Year BSIT",
    description: "Pursuing Bachelor of Science in Information Technology, building a strong foundation in software engineering.",
    accent: "primary",
  },
  {
    icon: Briefcase,
    title: "DevelopersHub Corp",
    description: "Completed internship at DevelopersHub Corporation, recognized with the Best Award for outstanding performance.",
    accent: "secondary",
  },
  {
    icon: Award,
    title: "IBM Certified",
    description: "IBM Full Stack Software Developer Professional Certificate holder, validating expertise across the full stack.",
    accent: "accent",
  },
  {
    icon: Target,
    title: "Passion Driven",
    description: "Passionate about scalable backend systems, cloud technologies, AI integration, and modern web development.",
    accent: "primary",
  },
] as const;

const accentClasses = {
  primary: {
    iconBg: "bg-primary/10 border-primary/20 group-hover:bg-primary/20",
    icon: "text-primary",
    hoverBorder: "hover:border-primary/30",
  },
  secondary: {
    iconBg: "bg-secondary/10 border-secondary/20 group-hover:bg-secondary/20",
    icon: "text-secondary",
    hoverBorder: "hover:border-secondary/30",
  },
  accent: {
    iconBg: "bg-accent/10 border-accent/20 group-hover:bg-accent/20",
    icon: "text-accent",
    hoverBorder: "hover:border-accent/30",
  },
};

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Story
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 space-y-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Who I Am</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                I am a final-year BSIT student and passionate Full Stack Developer with a
                strong focus on the MERN Stack. My journey in software development has been
                driven by a desire to build impactful, scalable applications that solve real-world
                problems.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                During my internship at{" "}
                <span className="text-primary font-medium">DevelopersHub Corporation</span>,
                I was recognized with the{" "}
                <span className="text-emerald-400 font-medium">Best Award</span> for my
                contributions and dedication. This experience solidified my commitment to
                writing clean, production-ready code and collaborating effectively in team
                environments.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I hold the{" "}
                <span className="text-secondary font-medium">
                  IBM Full Stack Software Developer Professional Certificate
                </span>
                , which validates my expertise across frontend, backend, databases, and
                deployment. I am continuously expanding my knowledge in cloud technologies,
                AI integration, and system architecture design.
              </p>

              <div className="flex items-center gap-2 pt-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-foreground/80 text-sm">
                  Currently seeking MERN Stack & Full Stack Developer opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => {
              const colors = accentClasses[item.accent];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`glass border border-border rounded-xl p-6 group transition-all duration-300 ${colors.hoverBorder}`}
                >
                  <div className={`p-2.5 rounded-lg border w-fit mb-4 transition-colors ${colors.iconBg}`}>
                    <item.icon className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <h4 className="text-foreground font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}