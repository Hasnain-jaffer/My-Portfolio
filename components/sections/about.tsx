"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, GraduationCap, Target, Zap, School } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";

const highlights = [
  {
    icon: GraduationCap,
    title: "Final-Year BSIT",
    description: "Pursuing Bachelor of Science in Information Technology, building a strong foundation in software engineering.",
    accent: "emerald",
  },
  {
    icon: Briefcase,
    title: "DevelopersHub Corp",
    description: "Completed internship at DevelopersHub Corporation, recognized with the Best Award for outstanding performance.",
    accent: "amber",
  },
  {
    icon: Award,
    title: "IBM Certified",
    description: "IBM Full Stack Software Developer Professional Certificate holder, validating expertise across the full stack.",
    accent: "emerald",
  },
  {
    icon: Target,
    title: "Passion Driven",
    description: "Passionate about scalable backend systems, cloud technologies, AI integration, and modern web development.",
    accent: "amber",
  },
] as const;

const accentClasses = {
  emerald: {
    iconBg: "bg-emerald-50 border-emerald-200 group-hover:bg-emerald-100 dark:bg-emerald-400/10 dark:border-emerald-400/20 dark:group-hover:bg-emerald-400/20",
    icon: "text-emerald-600 dark:text-emerald-400",
    hoverBorder: "hover:border-emerald-300 dark:hover:border-emerald-400/30",
    topBorder: "border-t-emerald-400 dark:border-t-emerald-400",
  },
  amber: {
    iconBg: "bg-amber-50 border-amber-200 group-hover:bg-amber-100 dark:bg-amber-400/10 dark:border-amber-400/20 dark:group-hover:bg-amber-400/20",
    icon: "text-amber-600 dark:text-amber-400",
    hoverBorder: "hover:border-amber-300 dark:hover:border-amber-400/30",
    topBorder: "border-t-amber-400 dark:border-t-amber-400",
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
          <span className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Story
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full" />
        </motion.div>

        {/* Education Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-white dark:bg-card border border-slate-200 dark:border-white/10 shadow-sm">
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-400/10 dark:border-emerald-400/20">
              <School className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="text-center sm:text-left">
              <div className="font-bold text-foreground">BS Information Technology (Final Year)</div>
              <div className="text-sm text-muted-foreground">2022 — 2026 · Relevant: Data Structures, DBMS, Software Engineering</div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-card rounded-2xl p-8 space-y-6 border border-slate-200 dark:border-white/10 shadow-sm shadow-slate-200/50 dark:shadow-none border-t-4 border-t-emerald-400 dark:border-t-emerald-400">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-400/10 dark:border-emerald-400/20">
                  <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Who I Am</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                I am a final-year BSIT student and passionate Full Stack Developer with a
                strong focus on the MERN Stack. My journey in software development has been
                driven by a desire to build impactful, scalable applications that solve real-world
                problems.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                During my internship at{" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">DevelopersHub Corporation</span>,
                I was recognized with the{" "}
                <span className="text-amber-600 dark:text-amber-400 font-semibold">Best Award</span> for my
                contributions and dedication. This experience solidified my commitment to
                writing clean, production-ready code.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I hold the{" "}
                <span className="text-amber-600 dark:text-amber-400 font-semibold">
                  IBM Full Stack Software Developer Professional Certificate
                </span>
                , validating my expertise across frontend, backend, databases, and deployment.
              </p>

              <div className="flex items-center gap-2 pt-2">
                <Zap className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                <span className="text-foreground/80 text-sm font-semibold">
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
                  className={`bg-white dark:bg-card border border-slate-200 dark:border-white/10 rounded-xl p-6 group transition-all duration-300 shadow-sm shadow-slate-200/50 dark:shadow-none hover:shadow-lg hover:shadow-slate-200/60 dark:hover:shadow-2xl dark:hover:shadow-black/20 ${colors.hoverBorder} border-t-4 ${colors.topBorder}`}
                >
                  <div className={`p-2.5 rounded-lg border w-fit mb-4 transition-colors ${colors.iconBg}`}>
                    <item.icon className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <h4 className="text-foreground font-bold mb-2">{item.title}</h4>
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