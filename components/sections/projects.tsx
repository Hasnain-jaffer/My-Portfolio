"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Layers, MapPin, ShoppingCart, Link2, Music, Globe } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projectList = [
    {
    title: "Shopzone",
    description:
      "A production-ready full-stack e-commerce platform built with the MERN stack featuring secure JWT authentication, role-based access control, product catalog, shopping cart, responsive UI, and an admin dashboard for managing products and users.",
    icon: ShoppingCart,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS"
    ],
    features: [
      "Secure JWT authentication & authorization",
      "Role-based admin dashboard",
      "Shopping cart & product management",
      "RESTful API architecture",
      "Responsive modern UI"
    ],
    github: "https://github.com/Hasnain-jaffer/Shopzone",
    live: "https://shopzone-ochre.vercel.app/",
    color: "primary",
    mockup: "grid",
  },

  {
    title: "Retail Flow",
    description:
      "A modern retail management application that streamlines inventory, product management, authentication, and business workflows with a scalable full-stack architecture and responsive dashboard.",
    icon: Layers,
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT"
    ],
    features: [
      "Inventory & product management",
      "Secure authentication system",
      "Responsive admin dashboard",
      "Modern scalable architecture",
      "REST API integration"
    ],
    github: "https://github.com/Hasnain-jaffer/The-Retail-Flow-App",
    live: "https://the-retail-flow-app.vercel.app/",
    color: "secondary",
    mockup: "grid",
  },

  {
    title: "Mehran Fast Food",
    description:
      "A complete restaurant ordering platform that allows customers to browse menus, place food orders, manage carts, and provides an intuitive admin interface for restaurant operations.",
    icon: ShoppingCart,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    features: [
      "Restaurant menu management",
      "Online ordering system",
      "Shopping cart functionality",
      "Admin management panel",
      "Responsive user experience"
    ],
    github: "https://github.com/Hasnain-jaffer/Mehran-Fast-Food",
    live: "https://mehran-fast-food-lake.vercel.app/",
    color: "emerald",
    mockup: "cards",
  },

  {
    title: "Recipe Book",
    description:
      "A recipe discovery application that enables users to search, explore, and save recipes with a clean user interface, category filtering, and responsive design powered by external APIs.",
    icon: Globe,
    technologies: [
      "React",
      "REST API",
      "Tailwind CSS",
      "React Router"
    ],
    features: [
      "Recipe search functionality",
      "Category-based filtering",
      "Recipe detail pages",
      "REST API integration",
      "Responsive interface"
    ],
    github: "https://github.com/Hasnain-jaffer/Recipe-Book",
    live: "https://recipe-book-eosin-kappa.vercel.app/",
    color: "amber",
    mockup: "cards",
  },

  {
    title: "Password Manager",
    description:
      "A secure password management application that allows users to store, organize, and manage credentials efficiently with an elegant interface and modern frontend architecture.",
    icon: Link2,
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Local Storage"
    ],
    features: [
      "Store passwords securely",
      "Copy credentials instantly",
      "Edit & delete saved entries",
      "Responsive modern interface",
      "Fast client-side performance"
    ],
    github: "https://github.com/Hasnain-jaffer/Password-manager",
    live: "https://password-manager-azure-two.vercel.app/",
    color: "violet",
    mockup: "form",
  },
] as const;

const colorMap: Record<string, { bg: string; border: string; text: string; glow: string; stroke: string }> = {
  primary: { bg: "bg-primary/10", border: "border-primary/20", text: "text-primary", glow: "group-hover:shadow-primary/20", stroke: "hsl(var(--primary))" },
  secondary: { bg: "bg-secondary/10", border: "border-secondary/20", text: "text-secondary", glow: "group-hover:shadow-secondary/20", stroke: "hsl(var(--secondary))" },
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400", glow: "group-hover:shadow-emerald-500/20", stroke: "#34d399" },
  violet: { bg: "bg-violet-500/10", border: "border-violet-500/20", text: "text-violet-400", glow: "group-hover:shadow-violet-500/20", stroke: "#a78bfa" },
  amber: { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400", glow: "group-hover:shadow-amber-500/20", stroke: "#fbbf24" },
};

// Abstract browser-window mockups, one per project type. Real screenshots can
// replace these later by swapping <ProjectMockup /> for an <img>.
function ProjectMockup({ type, stroke }: { type: string; stroke: string }) {
  const fill = `${stroke}22`; // low-opacity fill of the same color
  const fillStrong = `${stroke}40`;

  return (
    <svg viewBox="0 0 320 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* window chrome */}
      <rect x="0" y="0" width="320" height="180" rx="8" fill="rgba(255,255,255,0.03)" />
      <rect x="0" y="0" width="320" height="24" rx="8" fill="rgba(255,255,255,0.05)" />
      <circle cx="14" cy="12" r="3" fill="rgba(255,255,255,0.15)" />
      <circle cx="26" cy="12" r="3" fill="rgba(255,255,255,0.15)" />
      <circle cx="38" cy="12" r="3" fill="rgba(255,255,255,0.15)" />
      <rect x="60" y="7" width="200" height="10" rx="5" fill="rgba(255,255,255,0.08)" />

      {type === "map" && (
        <>
          <rect x="16" y="40" width="288" height="120" rx="6" fill={fill} />
          <circle cx="90" cy="90" r="6" fill={stroke} />
          <circle cx="180" cy="60" r="6" fill={stroke} />
          <circle cx="230" cy="120" r="6" fill={stroke} />
          <path d="M90 90 L180 60 L230 120" stroke={stroke} strokeWidth="2" strokeDasharray="4 4" fill="none" opacity="0.6" />
          <rect x="16" y="40" width="288" height="120" rx="6" fill="none" stroke={fillStrong} strokeWidth="1" />
        </>
      )}

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
                stroke={fillStrong}
                strokeWidth="1"
              />
            ))
          )}
        </>
      )}

      {type === "form" && (
        <>
          <rect x="60" y="40" width="200" height="14" rx="4" fill={fill} />
          <rect x="60" y="64" width="200" height="30" rx="6" fill="rgba(255,255,255,0.04)" stroke={fillStrong} strokeWidth="1" />
          <rect x="120" y="104" width="80" height="24" rx="6" fill={stroke} opacity="0.7" />
          <rect x="60" y="140" width="200" height="8" rx="4" fill="rgba(255,255,255,0.06)" />
        </>
      )}

      {type === "player" && (
        <>
          <rect x="16" y="40" width="60" height="60" rx="6" fill={fill} />
          <rect x="86" y="46" width="140" height="10" rx="5" fill="rgba(255,255,255,0.1)" />
          <rect x="86" y="62" width="90" height="8" rx="4" fill="rgba(255,255,255,0.06)" />
          <rect x="16" y="120" width="288" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
          <rect x="16" y="120" width="140" height="4" rx="2" fill={stroke} />
          <circle cx="160" cy="150" r="12" fill={stroke} />
          <circle cx="120" cy="150" r="8" fill="rgba(255,255,255,0.1)" />
          <circle cx="200" cy="150" r="8" fill="rgba(255,255,255,0.1)" />
        </>
      )}

      {type === "cards" && (
        <>
          <rect x="16" y="40" width="130" height="80" rx="6" fill={fill} stroke={fillStrong} strokeWidth="1" />
          <rect x="154" y="40" width="150" height="36" rx="6" fill="rgba(255,255,255,0.04)" />
          <rect x="154" y="84" width="150" height="36" rx="6" fill="rgba(255,255,255,0.04)" />
          <rect x="16" y="130" width="288" height="8" rx="4" fill="rgba(255,255,255,0.06)" />
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
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that demonstrate my full-stack capabilities
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => {
            const colors = colorMap[project.color];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group glass rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl ${colors.glow}`}
              >
                {/* Project Mockup */}
                <div className={`relative h-48 ${colors.bg} p-4 overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  <ProjectMockup type={project.mockup} stroke={colors.stroke} />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />
                  <project.icon className={`absolute bottom-3 right-3 w-6 h-6 ${colors.text} opacity-70 group-hover:scale-110 transition-transform duration-500`} />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1.5 mb-4">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-muted-foreground/80 text-xs">
                        <Layers className="w-3 h-3 mt-0.5 shrink-0 text-muted-foreground/60" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="tech" className="text-[10px] py-0.5 px-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      variant="glass"
                      size="sm"
                      className="flex-1 text-xs group/btn"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-3.5 h-3.5 mr-1.5" />
                      Code
                    </Button>
                    {project.live && (
                      <Button
                        variant="gradient"
                        size="sm"
                        className="flex-1 text-xs group/btn"
                        onClick={() => window.open(project.live, "_blank")}
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        Live Demo
                      </Button>
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