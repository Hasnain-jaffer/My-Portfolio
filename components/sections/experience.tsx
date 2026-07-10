"use client";

import { motion } from "framer-motion";
import { Award, Calendar, MapPin, CheckCircle2, Briefcase } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "DevelopersHub Corporation",
    role: "Full Stack Developer Intern",
    location: "Remote",
    period: "Mar 10, 2026 – Apr 25, 2026",
    award: "Best Award Recipient",
    description:
      "Completed a comprehensive internship program where I contributed to real-world projects, collaborated with senior developers, and delivered high-quality code that met production standards.",
    responsibilities: [
      "Developed and maintained full-stack web applications using the MERN Stack",
      "Collaborated with cross-functional teams to design and implement new features",
      "Participated in code reviews and implemented feedback to improve code quality",
      "Assisted in debugging and resolving production issues in a timely manner",
      "Documented technical processes and contributed to team knowledge base",
    ],
    skills: ["React", "Node.js", "Express", "MongoDB", "Git", "REST APIs"],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex gap-6 md:gap-10"
            >
              {/* Timeline rail */}
              <div className="hidden sm:flex flex-col items-center shrink-0 pt-1">
                <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="w-px flex-1 bg-gradient-to-b from-primary/40 to-transparent mt-2" />
              </div>

              {/* Content — no card wrapper, flows in open space */}
              <div className="flex-1 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.company}</h3>
                    <p className="text-lg text-primary font-medium">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium shrink-0 w-fit">
                    <Award className="w-4 h-4" />
                    {exp.award}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  {exp.description}
                </p>

                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i + 0.4 }}
                        className="flex items-start gap-2 text-muted-foreground text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="tech">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}