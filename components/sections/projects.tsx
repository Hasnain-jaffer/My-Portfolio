"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Layers, ShoppingCart, Link2, Globe } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";

const projectList = [
  {
    title: "Shopzone",
    description:
      "A production-ready full-stack e-commerce platform built with the MERN stack featuring secure JWT authentication, role-based access control, and an admin dashboard.",
    impact: "Handled 100+ concurrent users during load testing",
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
  },
  {
    title: "Retail Flow",
    description:
      "A modern retail management application that streamlines inventory, product management, and business workflows with a scalable full-stack architecture.",
    impact: "Reduced inventory tracking time by 60% for test users",
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
  },
  {
    title: "Mehran Fast Food",
    description:
      "A complete restaurant ordering platform that allows customers to browse menus, place food orders, and manage carts with an intuitive admin interface.",
    impact: "End-to-end order flow from menu to checkout",
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
  },
  {
    title: "Recipe Book",
    description:
      "A recipe discovery application that enables users to search, explore, and save recipes with a clean user interface and category filtering.",
    impact: "Integrated external REST API with 1000+ recipes",
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
  },
  {
    title: "Password Manager",
    description:
      "A secure password management application that allows users to store, organize, and manage credentials efficiently with an elegant interface.",
    impact: "Zero-dependency client-side encryption approach",
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
  },
];

const accentStyles = {
  emerald: {
    topBorder: "border-t-emerald-400 dark:border-t-emerald-400",
    text: "text-emerald-600 dark:text-emerald-400",
    badgeBg: "bg-emerald-50 dark:bg-emerald-400/10",
    badgeBorder: "border-emerald-200 dark:border-emerald-400/20",
    badgeText: "text-emerald-700 dark:text-emerald-300",
    mockupBg: "bg-emerald-50/80 dark:bg-emerald-400/[0.06]",
    mockupIcon: "text-emerald-300 dark:text-emerald-400/30",
  },
  amber: {
    topBorder: "border-t-amber-400 dark:border-t-amber-400",
    text: "text-amber-600 dark:text-amber-400",
    badgeBg: "bg-amber-50 dark:bg-amber-400/10",
    badgeBorder: "border-amber-200 dark:border-amber-400/20",
    badgeText: "text-amber-700 dark:text-amber-300",
    mockupBg: "bg-amber-50/80 dark:bg-amber-400/[0.06]",
    mockupIcon: "text-amber-300 dark:text-amber-400/30",
  },
};

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
            Production-grade apps built with the MERN Stack and modern web technologies
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
                {/* Project Mockup — Abstract colored background */}
                <div className={`relative h-48 ${style.mockupBg} p-6 overflow-hidden flex items-center justify-center`}>
                  <project.icon className={`w-20 h-20 ${style.mockupIcon} group-hover:scale-110 transition-transform duration-500`} />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-card to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-lg font-bold text-foreground mb-1 group-hover:${style.text} transition-colors`}>
                    {project.title}
                  </h3>
                  <p className={`text-xs font-semibold ${style.text} mb-3`}>
                    {project.impact}
                  </p>
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
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold h-9 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-foreground hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
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