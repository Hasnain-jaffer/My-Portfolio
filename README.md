# Premium Developer Portfolio

A modern, recruiter-focused portfolio built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Premium Dark Theme** — Professional dark mode with glassmorphism effects
- **Framer Motion Animations** — Smooth scroll-triggered animations and transitions
- **Responsive Design** — Mobile-first, fully responsive across all devices
- **SEO Optimized** — Complete metadata, Open Graph tags, and semantic HTML
- **TypeScript** — Full type safety throughout the codebase
- **Modular Components** — Clean, reusable component architecture
- **Performance Optimized** — Static export, lazy loading, minimal dependencies

## Sections

1. **Hero** — Animated typewriter roles, CTAs, social links
2. **About** — Professional bio with highlight cards
3. **Technical Skills** — Categorized skill badges (Frontend, Backend, Database, DevOps, Tools)
4. **Experience** — Internship details with responsibilities and skills
5. **Certifications** — IBM certificate with credential link
6. **Featured Projects** — 5 project cards with tech badges, features, and links
7. **GitHub Stats** — Contribution graph and activity stats
8. **Career Timeline** — Visual timeline of milestones
9. **Contact** — Contact form + social links + resume download

## Tech Stack

- Next.js 15 (App Router, Static Export)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- Radix UI (Slot primitive)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or extract the project
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Customization

Replace the placeholder values in the components:

- **Your Name** — Update in `app/layout.tsx` and `components/sections/hero.tsx`
- **Contact Info** — Update in `components/sections/contact.tsx`
- **GitHub/LinkedIn URLs** — Update across all sections
- **Project Details** — Update in `components/sections/projects.tsx`
- **Experience Dates** — Update in `components/sections/experience.tsx`
- **Images** — Add project screenshots to `public/images/`
- **Resume** — Add your resume PDF to `public/resume/resume.pdf`

### Deployment

The project is configured for static export (`output: 'export'` in `next.config.js`).

**Vercel** (Recommended):
```bash
npm i -g vercel
vercel
```

**Other platforms**: Upload the `out/` folder after running `npm run build`.

## Folder Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx      # Root layout with SEO metadata
│   └── page.tsx        # Main page composing all sections
├── components/
│   ├── navbar.tsx      # Fixed navigation with scroll spy
│   ├── footer.tsx
│   ├── section-wrapper.tsx
│   ├── animated-text.tsx
│   ├── ui/
│   │   ├── button.tsx  # Reusable button variants
│   │   └── badge.tsx   # Tech badge component
│   └── sections/
│       ├── hero.tsx
│       ├── about.tsx
│       ├── skills.tsx
│       ├── experience.tsx
│       ├── certifications.tsx
│       ├── projects.tsx
│       ├── github.tsx
│       ├── timeline.tsx
│       └── contact.tsx
├── lib/
│   └── utils.ts        # cn() utility for Tailwind
├── public/
│   ├── images/         # Project screenshots
│   └── resume/         # Resume PDF
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## License

MIT
