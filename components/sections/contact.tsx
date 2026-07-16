"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, ExternalLink, MapPin, Send, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";

const contactLinks = [
  { icon: Mail, label: "Email", value: "hasnainkaim10@gmail.com", href: "mailto:hasnainkaim10@gmail.com", isMailto: true, color: "primary" },
  { icon: Github, label: "GitHub", value: "github.com/Hasnain-Jaffer", href: "https://github.com/Hasnain-Jaffer", isMailto: false, color: "secondary" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/hasnain-jaffer-dev", href: "https://linkedin.com/in/hasnain-jaffer-dev", isMailto: false, color: "emerald" },
] as const;

const colorMap: Record<string, { bg: string; border: string; text: string; hover: string }> = {
  primary: { bg: "bg-primary/10", border: "border-primary/20", text: "text-primary", hover: "hover:bg-primary/20 hover:border-primary/40" },
  secondary: { bg: "bg-secondary/10", border: "border-secondary/20", text: "text-secondary", hover: "hover:bg-secondary/20 hover:border-secondary/40" },
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400", hover: "hover:bg-emerald-500/20 hover:border-emerald-500/40" },
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
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let&apos;s Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
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
              const colors = colorMap[link.color];
              const cardContent = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-4 p-5 rounded-xl ${colors.bg} border ${colors.border} ${colors.hover} transition-all duration-300 group cursor-pointer min-w-0`}
                >
                  <div className={`p-2.5 rounded-lg ${colors.bg} border ${colors.border} shrink-0`}>
                    <link.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-muted-foreground mb-0.5">{link.label}</div>
                    <div className="text-foreground font-medium truncate">{link.value}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors shrink-0" />
                </motion.div>
              );

              return link.isMailto ? (
                <a key={link.label} href={link.href} className="block min-w-0">{cardContent}</a>
              ) : (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="block min-w-0">{cardContent}</a>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="/resume/resume.pdf"
                download="Hasnain_Jaffer_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 w-full mt-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/20"
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
            className="glass border border-border rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 rounded-lg bg-muted/40 border border-input text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 rounded-lg bg-muted/40 border border-input text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  disabled={status === "sending"}
                  className="w-full px-4 py-3 rounded-lg bg-muted/40 border border-input text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none disabled:opacity-50"
                  placeholder="Your message..."
                />
              </div>

              <Button type="submit" disabled={status === "sending"} className="w-full group">
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-0.5 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-emerald-400 text-sm justify-center"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-destructive text-sm justify-center"
                >
                  <XCircle className="w-4 h-4" />
                  Something went wrong — please email me directly instead.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Location - FIXED: icon stays with text, proper wrapping */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-start gap-2 text-muted-foreground text-sm max-w-xs mx-auto sm:max-w-none">  {/* <-- CHANGED: items-center to items-start, added max-w-xs for mobile */}
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" />  {/* <-- ADDED mt-0.5 and shrink-0 */}
           <span className="text-left sm:text-center">Based in Pakistan | Available Worldwide (Remote)</span>          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
