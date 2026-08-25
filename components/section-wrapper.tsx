"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
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
        tone === "elevated" && "surface-elevated",
        className
      )}
    >
      {children}
    </motion.section>
  );
}