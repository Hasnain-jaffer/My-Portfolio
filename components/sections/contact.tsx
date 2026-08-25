"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, ExternalLink, MapPin, Send, CheckCircle2, XCircle, Loader2, Calendar } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "hasnainkaim10@gmail.com",
    href: "mailto:hasnainkaim10@gmail.com",
    isMailto: true,
    accent: "emerald" as const,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Hasnain-Jaffer",
    href: "https://github.com/Hasnain-Jaffer",
    isMailto: false,
    accent: "amber" as const,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/hasnain-jaffer-dev",
    href: "https://linkedin.com/in/hasnain-jaffer-dev",
    isMailto: false,
    accent: "emerald" as const,
  },
];

const accentStyles = {
  emerald: {
    bg: "bg-emerald-50 dark:bg-emerald-400/10",
    border: "border-emerald-200 dark:border-emerald-400/20",
    text: "text-emerald-600 dark:text-emerald-400",
    hover: "hover:bg-emerald-100 hover:border-emerald-300 dark:hover:bg-emerald-400/20 dark:hover:border-emerald-400/40",
  },
  amber: {
    bg: "bg-amber-50 dark:bg-amber-400/10",
    border: "border-amber-200 dark:border-amber-400/20",
    text: "text-amber-600 dark:text-amber-400",
    hover: "hover:bg-amber-100 hover:border-amber-300 dark:hover:bg-amber-400/20 dark:hover:border-amber-400/40",
  },
};

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let&apos;s Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m currently open to MERN Stack, Full Stack, and React Developer internships and junior software engineering roles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 min-w-0"
          >
            {contactLinks.map((link, index) => {
              const style = accentStyles[link.accent];
              const cardContent = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-card border border-slate-200 dark:border-white/10 shadow-sm shadow-slate-200/50 dark:shadow-none ${style.hover} transition-all duration-300 group cursor-pointer min-w-0`}
                >
                  <div className={`p-2.5 rounded-lg ${style.bg} border ${style.border} shrink-0`}>
                    <link.icon className={`w-5 h-5 ${style.text}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-muted-foreground mb-0.5">{link.label}</div>
                    <div className="text-foreground font-semibold truncate">{link.value}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-300 dark:text-muted-foreground/50 group-hover:text-muted-foreground transition-colors shrink-0" />
                </motion.div>
              );

              return link.isMailto ? (
                <a key={link.label} href={link.href} className="block min-w-0">{cardContent}</a>
              ) : (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="block min-w-0">{cardContent}</a>
              );
            })}

            {/* Book a Call */}
            <motion.a
              href="https://calendly.com/hasnainkaim10"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-card border border-slate-200 dark:border-white/10 shadow-sm hover:border-amber-300 dark:hover:border-amber-400/30 transition-all cursor-pointer group"
            >
              <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 dark:bg-amber-400/10 dark:border-amber-400/20 shrink-0">
                <Calendar className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-foreground mb-0.5">Schedule a Call</div>
                <div className="text-foreground font-semibold">Book a 15-min intro</div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-300 dark:text-muted-foreground/50 group-hover:text-muted-foreground transition-colors shrink-0" />
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="/resume/resume.pdf"
                download="Hasnain_Jaffer_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold h-12 px-8 w-full mt-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:opacity-90 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-card rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-sm shadow-slate-200/50 dark:shadow-none"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-muted-foreground mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-muted/40 border border-slate-300 dark:border-white/10 text-foreground placeholder:text-slate-400 dark:placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-muted-foreground mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-muted/40 border border-slate-300 dark:border-white/10 text-foreground placeholder:text-slate-400 dark:placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-muted-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-muted/40 border border-slate-300 dark:border-white/10 text-foreground placeholder:text-slate-400 dark:placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-none disabled:opacity-50"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold h-12 px-8 w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:opacity-90 shadow-lg shadow-emerald-500/20 transition-all disabled:opacity-50 group"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm justify-center font-medium"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-500 text-sm justify-center font-medium"
                >
                  <XCircle className="w-4 h-4" />
                  Something went wrong — please email me directly instead.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

               {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-start gap-2 text-muted-foreground text-sm max-w-xs mx-auto sm:max-w-none">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
            <span className="text-left sm:text-center">Based in Pakistan | Available Worldwide (Remote)</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}