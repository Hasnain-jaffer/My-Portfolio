"use client";

import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Github, href: "https://github.com/Hasnain-Jaffer", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/hasnain-jaffer-dev", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hasnainkaim10@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <div className="flex items-center gap-2 text-foreground font-bold text-lg">
              <Code2 className="w-5 h-5 text-primary" />
              <span>Portfolio</span>
            </div>
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Hasnain Jaffer. All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socials.map((social) => (
              <a
              
                key={social.label}
                href={social.href}
                {...(social.label === "Email" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="p-2.5 rounded-lg glass border border-border text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          {/* Name Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm"
          >
            <span className="gradient-text font-semibold">Hasnain Jaffer</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}