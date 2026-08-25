"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, GitBranch, Star, Users, Calendar, Loader2 } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";

const GITHUB_USERNAME = "Hasnain-Jaffer";

interface GitHubStats {
  publicRepos: number;
  followers: number;
  totalStars: number;
  totalContributions: number;
}

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

const levelColorsLight = [
  "bg-gray-100",        /* empty — clean light gray, not muddy stone */
  "bg-emerald-200",     /* low */
  "bg-emerald-300",     /* medium-low */
  "bg-emerald-400",     /* medium */
  "bg-emerald-500",     /* high */
];

const levelColorsDark = [
  "bg-stone-800",
  "bg-emerald-900/60",
  "bg-emerald-800/70",
  "bg-emerald-700/80",
  "bg-emerald-500/90",
];

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch("/api/github-stats");
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to fetch");

        setStats({
          publicRepos: data.publicRepos,
          followers: data.followers,
          totalStars: data.totalStars,
          totalContributions: data.totalContributions,
        });
        setContributions(data.contributions);
      } catch (err) {
        console.error("GitHub stats fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  const recentDays = contributions.slice(-84);
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < recentDays.length; i += 7) {
    weeks.push(recentDays.slice(i, i + 7));
  }

  const displayStats = [
    { label: "Public Repos", value: stats?.publicRepos ?? "—", icon: GitBranch },
    { label: "Followers", value: stats?.followers ?? "—", icon: Users },
    { label: "Stars Earned", value: stats?.totalStars ?? "—", icon: Star },
    { label: "Contributions (yr)", value: stats?.totalContributions ?? "—", icon: Calendar },
  ];

  const levelColors = isDark ? levelColorsDark : levelColorsLight;

  return (
    <SectionWrapper id="github" tone="elevated">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
            Open Source
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            GitHub Activity
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Live data pulled directly from my GitHub profile
          </p>
        </motion.div>

        {/* GitHub Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass border border-border rounded-2xl p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
            <img
              src="/images/Profile Pic.png"
              alt="Hasnain-jaffer"
              className="w-24 h-24 rounded-full object-cover border-2 border-emerald-500/30 dark:border-emerald-400/30"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-1">@{GITHUB_USERNAME}</h3>
              <p className="text-muted-foreground mb-4">Full Stack Developer | MERN Stack Enthusiast</p>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium h-10 px-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:opacity-90 shadow-lg shadow-emerald-500/20 transition-all group"
              >
                <Github className="w-4 h-4" />
                View Profile
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>

          {error && (
            <div className="text-center text-sm text-muted-foreground py-6 border border-border rounded-xl mb-8 bg-muted/30">
              Couldn't load live GitHub data right now — check back shortly, or view the profile directly above.
            </div>
          )}

          {loading && !error && (
            <div className="flex items-center justify-center gap-2 text-muted-foreground py-10">
              <Loader2 className="w-5 h-5 animate-spin text-emerald-500" />
              <span className="text-sm">Loading live stats…</span>
            </div>
          )}

          {!loading && !error && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {displayStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass border border-border rounded-xl p-4 text-center hover:border-emerald-500/20 dark:hover:border-emerald-400/20 transition-colors"
                  >
                    <stat.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {typeof stat.value === "number" ? stat.value.toLocaleString() : stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Contribution Graph */}
              <div className="glass border border-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-foreground/80">Contribution Activity</h4>
                  <span className="text-xs text-muted-foreground">Last ~12 weeks</span>
                </div>
                <div className="flex gap-1 overflow-x-auto pb-2">
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {week.map((day, dayIndex) => (
                        <motion.div
                          key={`${weekIndex}-${dayIndex}`}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (weekIndex * 7 + dayIndex) * 0.005 }}
                          className={`w-3 h-3 rounded-sm ${levelColors[day.level] ?? levelColors[0]} hover:ring-2 hover:ring-emerald-400/50 transition-all`}
                          title={`${day.count} contributions on ${day.date}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-end gap-2 mt-3 text-xs text-muted-foreground">
  <span>Less</span>
  {levelColors.map((color, i) => (
    <div key={i} className={`w-3 h-3 rounded-sm ${color} border border-black/5`} />
  ))}
  <span>More</span>
</div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}