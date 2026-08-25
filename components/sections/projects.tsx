"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Layers, ShoppingCart, Link2, Globe } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";

const projectList = [
  {
    title: "Shopzone",
    description:
      "A production-ready full-stack e-commerce platform built with the MERN stack featuring secure JWT authentication, role-based access control, product catalog, shopping cart, responsive UI, and an admin dashboard.",
    icon: ShoppingCart,
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    features: [
      "Secure JWT authentication & authorization",
      "Role-based admin dashboard",
      "Shopping cart & product management",
      "RESTful API architecture",
      "Responsive modern UI",
    ],
    github: "https://github.com/Hasnain-jaffer/Shopzone",
    live: "https://shopzone-ochre.vercel.app/",
    accent: "emerald" as const,
    mockup: "grid",
  },
  {
    title: "Retail Flow",
    description:
      "A modern retail management application that streamlines inventory, product management, authentication, and business workflows with a scalable full-stack architecture.",
    icon: Layers,
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    features: [
      "Inventory & product management",
      "Secure authentication system",
      "Responsive admin dashboard",
      "Modern scalable architecture",
      "REST API integration",
    ],
    github: "https://github.com/Hasnain-jaffer/The-Retail-Flow-App",
    live: "https://the-retail-flow-app.vercel.app/",
    accent: "amber" as const,
    mockup: "grid",
  },
  {
    title: "Mehran Fast Food",
    description:
      "A complete restaurant ordering platform that allows customers to browse menus, place food orders, manage carts, and provides an intuitive admin interface.",
    icon: ShoppingCart,
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Restaurant menu management",
      "Online ordering system",
      "Shopping cart functionality",
      "Admin management panel",
      "Responsive user experience",
    ],
    github: "https://github.com/Hasnain-jaffer/Mehran-Fast-Food",
    live: "https://mehran-fast-food-lake.vercel.app/",
    accent: "emerald" as const,
    mockup: "cards",
  },
  {
    title: "Recipe Book",
    description:
      "A recipe discovery application that enables users to search, explore, and save recipes with a clean user interface, category filtering, and responsive design.",
    icon: Globe,
    technologies: ["React", "REST API", "Tailwind CSS", "React Router"],
    features: [
      "Recipe search functionality",
      "Category-based filtering",
      "Recipe detail pages",
      "REST API integration",
      "Responsive interface",
    ],
    github: "https://github.com/Hasnain-jaffer/Recipe-Book",
    live: "https://recipe-book-eosin-kappa.vercel.app/",
    accent: "amber" as const,
    mockup: "cards",
  },
  {
    title: "Password Manager",
    description:
      "A secure password management application that allows users to store, organize, and manage credentials efficiently with an elegant interface.",
    icon: Link2,
    technologies: ["React", "JavaScript", "Tailwind CSS", "Local Storage"],
    features: [
      "Store passwords securely",
      "Copy credentials instantly",
      "Edit & delete saved entries",
      "Responsive modern interface",
      "Fast client-side performance",
    ],
    github: "https://github.com/Hasnain-jaffer/Password-manager",
    live: "https://password-manager-azure-two.vercel.app/",
    accent: "emerald" as const,
    mockup: "form",
  },
];

const accentStyles = {
  emerald: {
    topBorder: "border-t-emerald-400 dark:border-t-emerald-400",
    text: "text-emerald-600 dark:text-emerald-400",
    badgeBg: "bg-emerald-50 dark:bg-emerald-400/10",
    badgeBorder: "border-emerald-200 dark:border-emerald-400/20",
    badgeText: "text-emerald-700 dark:text-emerald-300",
    btnShadow: "shadow-emerald-500/20",
    stroke: "#10b981",
  },
  amber: {
    topBorder: "border-t-amber-400 dark:border-t-amber-400",
    text: "text-amber-600 dark:text-amber-400",
    badgeBg: "bg-amber-50 dark:bg-amber-400/10",
    badgeBorder: "border-amber-200 dark:border-amber-400/20",
    badgeText: "text-amber-700 dark:text-amber-300",
    btnShadow: "shadow-amber-500/20",
    stroke: "#f59e0b",
  },
};

function ProjectMockup({ type, stroke }: { type: string; stroke: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch — render placeholder on server, real SVG on client
  if (!mounted) {
    return (
      <div className="w-full h-full rounded-lg bg-slate-100 dark:bg-white/[0.02]" />
    );
  }

  const isLight = !document.documentElement.classList.contains("dark");
  const bgRect = isLight ? "#f1f5f9" : "rgba(255,255,255,0.03)";
  const topBar = isLight ? "#e2e8f0" : "rgba(255,255,255,0.05)";
  const dot = isLight ? "#cbd5e1" : "rgba(255,255,255,0.15)";
  const search = isLight ? "#e2e8f0" : "rgba(255,255,255,0.08)";
  const fill = `${stroke}20`;
  const fillStrong = `${stroke}40`;

  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="320" height="180" rx="8" fill={bgRect} />
      <rect x="0" y="0" width="320" height="24" rx="8" fill={topBar} />
      <circle cx="14" cy="12" r="3" fill={dot} />
      <circle cx="26" cy="12" r="3" fill={dot} />
      <circle cx="38" cy="12" r="3" fill={dot} />
      <rect x="60" y="7" width="200" height="10" rx="5" fill={search} />

      {type === "grid" && (
        <>
          {[0, 1, 2].map((col) =>
            [0, 1].map((row) => (
              <rect
                key={`${col}-${row}`}
                x={16 + col * 100}
                y={40 + row * 65}
                width="88"
                height="55"
                rx="4"
                fill={fill}
                stroke={stroke}
                strokeWidth="1.5"
                strokeOpacity="0.3"
              />
            ))
          )}
        </>
      )}

      {type === "form" && (
        <>
          <rect x="60" y="40" width="200" height="14" rx="4" fill={fill} stroke={stroke} strokeWidth="1" strokeOpacity="0.3" />
          <rect x="60" y="64" width="200" height="30" rx="6" fill="rgba(255,255,255,0.04)" stroke={stroke} strokeWidth="1" strokeOpacity="0.3" />
          <rect x="120" y="104" width="80" height="24" rx="6" fill={stroke} opacity="0.5" />
          <rect x="60" y="140" width="200" height="8" rx="4" fill={search} />
        </>
      )}

      {type === "cards" && (
        <>
          <rect x="16" y="40" width="130" height="80" rx="6" fill={fill} stroke={stroke} strokeWidth="1.5" strokeOpacity="0.3" />
          <rect x="154" y="40" width="150" height="36" rx="6" fill={bgRect} stroke={stroke} strokeWidth="1" strokeOpacity="0.2" />
          <rect x="154" y="84" width="150" height="36" rx="6" fill={bgRect} stroke={stroke} strokeWidth="1" strokeOpacity="0.2" />
          <rect x="16" y="130" width="288" height="8" rx="4" fill={search} />
        </>
      )}
    </svg>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that demonstrate my full-stack capabilities
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => {
            const style = accentStyles[project.accent];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group bg-white dark:bg-card rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm shadow-slate-200/50 dark:shadow-none hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-2xl dark:hover:shadow-black/20 transition-all duration-500 border-t-4 ${style.topBorder}`}
              >
                {/* Project Mockup */}
                <div className="relative h-48 bg-slate-50 dark:bg-white/[0.02] p-4 overflow-hidden">
                  <ProjectMockup type={project.mockup} stroke={style.stroke} />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-card to-transparent" />
                  <project.icon className={`absolute bottom-3 right-3 w-6 h-6 ${style.text} opacity-60 group-hover:scale-110 transition-transform duration-500`} />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-lg font-bold text-foreground mb-2 group-hover:${style.text} transition-colors`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1.5 mb-4">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-muted-foreground/80 text-xs">
                        <Layers className="w-3 h-3 mt-0.5 shrink-0 text-slate-400 dark:text-muted-foreground/60" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`inline-flex items-center text-[10px] font-semibold py-1 px-2.5 rounded-md ${style.badgeBg} border ${style.badgeBorder} ${style.badgeText}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold h-9 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-foreground hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold h-9 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:opacity-90 shadow-lg shadow-emerald-500/20 transition-all group/btn"
                      >
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}