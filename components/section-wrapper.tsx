"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Alternate subtle background tint so consecutive sections aren't visually identical */
  tone?: "base" | "elevated";
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  tone = "base",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "relative py-20 md:py-28 px-4 sm:px-6 lg:px-8",
        tone === "elevated" && "bg-muted/20",
        className
      )}
    >
      {/* subtle top border seam so each section reads as distinct on scroll */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {children}
    </motion.section>
  );
}