import { NextResponse } from "next/server";

const GITHUB_USERNAME = "Hasnain-Jaffer"; // confirm exact casing
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // optional but recommended

export const revalidate = 3600; // cache for 1 hour

export async function GET() {
  try {
    const headers: HeadersInit = GITHUB_TOKEN
      ? { Authorization: `Bearer ${GITHUB_TOKEN}` }
      : {};

    const [profileRes, reposRes, contribRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`, { next: { revalidate: 3600 } }),
    ]);

    if (!profileRes.ok) {
      return NextResponse.json({ error: `Profile fetch failed: ${profileRes.status}` }, { status: 502 });
    }
    if (!reposRes.ok) {
      return NextResponse.json({ error: `Repos fetch failed: ${reposRes.status}` }, { status: 502 });
    }
    if (!contribRes.ok) {
      return NextResponse.json({ error: `Contributions fetch failed: ${contribRes.status}` }, { status: 502 });
    }

    const profile = await profileRes.json();
    const repos = await reposRes.json();
    const contribData = await contribRes.json();

    const totalStars = Array.isArray(repos)
      ? repos.reduce((sum: number, r: { stargazers_count: number }) => sum + r.stargazers_count, 0)
      : 0;

    const days = contribData.contributions || [];
    const totalContributions = days.reduce((sum: number, d: { count: number }) => sum + d.count, 0);

    return NextResponse.json({
      publicRepos: profile.public_repos ?? 0,
      followers: profile.followers ?? 0,
      totalStars,
      totalContributions,
      contributions: days,
    });
  } catch (err) {
    console.error("GitHub stats API error:", err);
    return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 });
  }
}