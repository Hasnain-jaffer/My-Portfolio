"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle2, Calendar, Building2 } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "IBM Full Stack Software Developer Professional Certificate",
    issuer: "IBM (via Coursera)",
    date: "Dec 2025",
    credentialUrl: "https://coursera.org/verify/professional-cert/64B38USK4045",
    description:
      "A comprehensive professional certificate covering frontend development with React, backend with Node.js & Express, databases with MongoDB & SQL, cloud deployment, DevOps practices, and microservices architecture.",
    skills: [
      "HTML/CSS/JavaScript",
      "React & Redux",
      "Node.js & Express",
      "MongoDB & SQL",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Cloud Deployment",
      "Microservices",
    ],
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" tone="elevated">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Credentials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Certification Cards */}
        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass border border-border rounded-2xl p-8 md:p-10 relative overflow-hidden hover:border-primary/30 transition-colors duration-300"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        {cert.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4" />
                          <span>{cert.issuer}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="gradient"
                    size="sm"
                    className="shrink-0 group"
                    onClick={() => window.open(cert.credentialUrl, "_blank")}
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">{cert.description}</p>

                {/* Skills Covered */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-3">
                    Skills Validated
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {cert.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i + 0.3 }}
                        className="flex items-center gap-2 text-muted-foreground text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}