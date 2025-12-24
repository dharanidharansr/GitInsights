<div align="center">

# 🎬 GitInsights

### *Your Complete Git History — Cinematic Wrapped*

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.x-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.x-FF0055?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

<p align="center">
  <strong>Transform your GitHub contributions into a stunning, Instagram Stories-style cinematic experience.</strong>
</p>

<p align="center">
  <a href="https://gitinsights18.vercel.app/">🌐 Live Demo</a> •
  <a href="#-features">✨ Features</a> •
  <a href="#-quick-start">⚡ Quick Start</a> •
  <a href="#-tech-stack">🛠️ Tech Stack</a>
</p>

---

</div>

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎥 **Cinematic Experience** | 11 beautifully animated slides with Instagram Stories-like navigation |
| 📊 **Live GitHub Data** | Real-time stats fetched from GitHub API — commits, PRs, issues, reviews |
| 🧬 **Smart Archetypes** | AI-determined coding personas: *Night Owl*, *Weekend Warrior*, *Grid Painter*, and more |
| 📈 **Velocity Charts** | Animated contribution charts powered by Recharts |
| 🗓️ **Contribution Grid** | Visual heatmap of your entire coding history |
| 🏆 **Top 5 Repositories** | Showcase your best projects with smart ranking |
| 🎨 **Language Breakdown** | Beautiful visualization of your tech stack (55+ languages!) |
| 📱 **Mobile-First** | Touch gestures: tap left/right to navigate, hold to pause |
| 🔐 **GitHub Token Support** | Optional authentication for private repos & org repos |
| 🖼️ **Poster Export** | Download a shareable movie-poster style summary |
| 🎊 **Confetti Celebration** | End your story with style |
| 🔍 **SEO Optimized** | Built with Next.js for better search engine visibility |

---

## 🆕 What's New

### 🚀 Next.js Migration (v3.0)
- **Migrated from Vite to Next.js 15** for better SEO and performance
- **Server-side metadata** for improved social sharing (Twitter, Facebook, LinkedIn)
- **Optimized fonts** with `next/font/google` for better performance
- **Dynamic sitemap** generation for search engines
- **JSON-LD structured data** for rich search snippets
- **PWA manifest** for mobile app-like experience

### 🚀 Optimized API (v2.0)
- **With Token:** Only **4 API calls** (GraphQL bundles contributions + PR/Issue/Review counts!)
- **Without Token:** 7 API calls (REST fallback)
- **43% fewer API calls** when authenticated!

### Smart Repository Scoring
Projects are now ranked using **12 factors** instead of just stars:
- ⭐ Stars & Forks (logarithmic scale)
- 📅 Recent activity (time-decay bonus)
- ✨ Original work (not forks)
- 📝 Description & Topics
- 💻 Primary language
- 📦 Repository size
- 🐛 Open issues (activity indicator)
- 🆕 Recently created bonus
- 👀 Watchers
- 📦 Archived penalty

### Smart Language Scoring
- 🚫 **Excludes forks** (your own code only)
- 📅 **Recent activity bonus** (recent work counts more)
- 🎯 **Diversity bonus** (3+ repos = extra weight)

### GitHub Token Integration
- 🔐 Optional token input with validation
- ✅ "Connected as @username" badge with avatar
- 🏢 Access to **organization repositories**
- 🔒 **Private contributions** via GraphQL API
- 📈 5000 API calls/hour (vs 60 without token)

### Better Error Handling
- 🟠 Rate limit errors with reset time
- 🟡 User not found suggestions
- 🔴 Authentication error guidance
- 🔄 Retry button for rate limits

---

## 🎬 Slides

Experience your year through **11 cinematic slides**:

| # | Slide | What It Shows |
|---|-------|---------------|
| 1 | **Title** | Your username & avatar with dramatic reveal |
| 2 | **Velocity** | Animated area chart of daily commits |
| 3 | **Grid** | Full-year contribution heatmap |
| 4 | **Composition** | Breakdown: Commits vs PRs vs Issues vs Reviews |
| 5 | **Routine** | Your busiest day of the week |
| 6 | **Productivity** | Peak coding hours & time-of-day persona |
| 7 | **Community** | Followers, stars, and repo count |
| 8 | **Languages** | Top 3 programming languages |
| 9 | **Top 5 Repos** | Your best repositories ranked by score |
| 10 | **Top Repo** | Spotlight on your #1 repository |
| 11 | **Poster** | 🎬 Downloadable movie poster with confetti! |

---

## 🧬 Archetypes

Based on your **behavior patterns**, you'll be assigned one of these personas:

| Archetype | Criteria |
|-----------|----------|
| 🔀 **The Pull Request Pro** | Opens many PRs (>20% of activity) |
| 👀 **The Reviewer** | Frequent code reviewer (>10% of activity) |
| 🌙 **The Night Owl** | Peak activity after 10 PM |
| 🌅 **The Early Bird** | Peak activity before noon |
| 🗓️ **The Weekend Warrior** | >35% commits on weekends |
| 🎨 **The Grid Painter** | 1200+ commits (green squares everywhere!) |
| ⚡ **The Consistent** | 400+ commits, steady contributor |
| 📋 **The Planner** | High issue-to-commit ratio |
| ⭐ **The Community Star** | 500+ followers or 1000+ total stars |
| 🔧 **The Tinkerer** | Default — you're exploring! |

---

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/dharanidharansr/GitInsights.git
cd GitInsights

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **https://gitinsights18.vercel.app** and enter any GitHub username!

> 💡 **Tip:** Type `demo` to see a full experience with mock data.

---

## 🔐 Authentication (Optional)

For enhanced features, add a GitHub Personal Access Token:

1. Click **"Add GitHub Token (Optional)"** on the home page
2. Paste your token (starts with `ghp_`)
3. See "Connected as @username" confirmation

### Benefits with Token:
| Feature | Without Token | With Token |
|---------|---------------|------------|
| Rate Limit | 60/hour | **5000/hour** |
| Private Repos | ❌ | ✅ |
| Org Repos | ❌ | ✅ |
| Private Contributions | ❌ | ✅ |

[Create a token with correct scopes →](https://github.com/settings/tokens/new?scopes=repo,read:org,read:user&description=GitInsights%202025)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router for SEO & performance |
| **React 19** | UI Components with latest features |
| **TypeScript** | Type-safe development |
| **Tailwind CSS 4** | Utility-first styling with `@theme` config |
| **Framer Motion** | Buttery-smooth animations |
| **Recharts** | Beautiful, responsive charts |
| **Lucide React** | Consistent icon system |
| **html-to-image** | Poster PNG export |
| **canvas-confetti** | Celebration effects 🎊 |
| **Vercel Analytics** | Privacy-friendly analytics |

---

## 📡 API Usage

### With Token (Optimized - 4 calls)
| # | Endpoint | Purpose |
|---|----------|---------|
| 1 | `/users/{username}` | Basic profile info |
| 2 | `/user/repos` | All repos (org + private) |
| 3 | **GraphQL** | Contributions + PRs + Issues + Reviews (4-in-1!) |
| 4 | `/users/{username}/events` | Time-of-day patterns |

### Without Token (7 calls)
| # | Endpoint | Purpose |
|---|----------|---------|
| 1 | `/users/{username}` | Basic profile info |
| 2 | `/users/{username}/repos` | Repository list |
| 3 | `github-contributions-api` | Contribution heatmap |
| 4 | `/users/{username}/events` | Time-of-day patterns |
| 5 | `/search/issues?q=type:pr` | PR count for 2025 |
| 6 | `/search/issues?q=type:issue` | Issue count for 2025 |
| 7 | `/search/issues?q=reviewed-by:` | Review count for 2025 |

### Rate Limits

| Type | Limit | API Efficiency |
|------|-------|----------------|
| Without Token | 60/hour | ~8 users/hour |
| With Token | **5000/hour** | **~1250 users/hour** |

---

## 📱 Controls

### Touch Gestures (Mobile)
| Action | Effect |
|--------|--------|
| **Tap right 2/3** | Next slide |
| **Tap left 1/3** | Previous slide |
| **Hold anywhere** | Pause timer |
| **Release** | Resume timer |

### Keyboard Controls (Desktop)
| Key | Effect |
|-----|--------|
| **→** or **D** | Next slide |
| **←** or **A** | Previous slide |
| **Space** | Pause/Resume |
| **Escape** | Exit story |

---

## 🏗️ Project Structure

```
gitinsights-2025/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata & fonts
│   ├── page.tsx            # Main page (landing + token input)
│   ├── globals.css         # Tailwind + custom styles
│   └── sitemap.ts          # Dynamic sitemap generation
├── public/
│   ├── card.png            # OG image for social sharing
│   ├── favicon.ico         # Site favicon
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # Search engine directives
├── components/
│   ├── StoryContainer.tsx  # Slide navigation & gestures
│   ├── SlideLayout.tsx     # Reusable slide wrapper
│   ├── TextReveal.tsx      # Animated text component
│   └── slides/
│       ├── TitleSlide.tsx
│       ├── VelocitySlide.tsx
│       ├── GridSlide.tsx
│       ├── CompositionSlide.tsx
│       ├── RoutineSlide.tsx
│       ├── ProductivitySlide.tsx
│       ├── CommunitySlide.tsx
│       ├── LanguagesSlide.tsx
│       ├── TopReposSlide.tsx
│       ├── RepoSlide.tsx
│       └── PosterSlide.tsx
├── services/
│   ├── githubService.ts      # GitHub API + GraphQL integration
│   └── scoringAlgorithms.ts  # Modular scoring logic
├── types.ts                  # TypeScript interfaces
├── constants.ts              # Mock data & configuration
├── next.config.ts            # Next.js configuration
├── postcss.config.mjs        # PostCSS for Tailwind
└── tsconfig.json             # TypeScript configuration
```

---

## 🚀 Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start

# Or preview locally
npm run dev
```

Deploy to any platform that supports Next.js:
- **Vercel** (recommended - zero config)
- **Netlify**
- **Railway**
- **Cloudflare Pages**

---

## 🔍 SEO Features

GitInsights 2025 is optimized for search engines:

- ✅ **40+ SEO keywords** including "GitHub Wrapped", "Git Story", etc.
- ✅ **OpenGraph tags** for Facebook/LinkedIn sharing
- ✅ **Twitter Cards** for beautiful Twitter previews
- ✅ **JSON-LD structured data** for rich search snippets
- ✅ **Dynamic sitemap** at `/sitemap.xml`
- ✅ **robots.txt** for search engine crawlers
- ✅ **PWA manifest** for mobile app-like experience

---

## 📄 License

MIT © 2025

---

<div align="center">

**Made with 💜 for developers who ship**

*Star ⭐ this repo if you found it useful!*

[🌐 Try GitInsights 2025](https://gitinsights18.vercel.app/)

</div>
