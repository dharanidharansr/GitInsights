import { GitInsightsData } from "./types";

export const SLIDE_DURATION_MS = 6000; // 6 seconds per slide

const generateYearlyData = () => {
  const data = [];
  const startDate = new Date('2025-01-01');
  
  for (let i = 0; i < 365; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);
    
    const dayOfWeek = currentDate.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    
    let commitCount = 0;
    
    // Simulate realistic commit patterns
    if (isWeekend) {
       // Lower chance of commits on weekends
       commitCount = Math.random() > 0.8 ? Math.floor(Math.random() * 8) + 1 : 0;
    } else {
       // Regular weekday activity
       if (Math.random() > 0.15) {
         commitCount = Math.floor(Math.random() * 15) + 3; 
       }
       // Occasional "crunch time" spikes
       if (Math.random() > 0.96) {
         commitCount += Math.floor(Math.random() * 40) + 15;
       }
    }

    data.push({
      date: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      commits: commitCount,
    });
  }
  return data;
};

const velocityData = generateYearlyData();
const totalCommits = velocityData.reduce((acc, curr) => acc + curr.commits, 0);

// Calculate realistic streak and weekday stats
let currentStreak = 0;
let maxStreak = 0;
const weekdayStats = [0, 0, 0, 0, 0, 0, 0];

velocityData.forEach((day, index) => {
    // Reconstruct date roughly for mock
    const date = new Date('2025-01-01');
    date.setDate(date.getDate() + index);
    
    if (day.commits > 0) {
        weekdayStats[date.getDay()] += day.commits;
        currentStreak++;
        if (currentStreak > maxStreak) maxStreak = currentStreak;
    } else {
        currentStreak = 0;
    }
});

export const MOCK_DATA: GitInsightsData = {
  username: "ronaldo",
  avatarUrl: "https://picsum.photos/200/200",
  year: "2020-2025",
  totalCommits: totalCommits,
  longestStreak: maxStreak || 15,
  busiestDay: "Wednesdays",
  topLanguages: [
    { name: "TypeScript", color: "#3178C6", percentage: 45, count: 45 },
    { name: "JavaScript", color: "#F7DF1E", percentage: 35, count: 35 },
    { name: "Python", color: "#3572A5", percentage: 20, count: 20 },
  ],
  topRepo: {
    name: "GitInsights",
    description: "Transform your GitHub history into a stunning cinematic experience. Your GitHub Wrapped for all time!",
    stars: 150,
    language: "TypeScript",
    topics: ["nextjs", "github", "visualization", "wrapped"],
    url: "https://github.com/ronaldo/GitInsights",
  },
  topRepos: [
    {
      name: "GitInsights",
      description: "Transform your GitHub history into a stunning cinematic experience. Your GitHub Wrapped for all time!",
      stars: 150,
      language: "TypeScript",
      topics: ["nextjs", "github", "visualization", "wrapped"],
      url: "https://github.com/ronaldo/GitInsights",
    },
    {
      name: "portfolio-website",
      description: "Modern portfolio website built with Next.js and Tailwind CSS.",
      stars: 85,
      language: "TypeScript",
      topics: ["nextjs", "portfolio", "tailwind"],
      url: "https://github.com/ronaldo/portfolio-website",
    },
    {
      name: "react-dashboard",
      description: "Analytics dashboard with real-time data visualization.",
      stars: 62,
      language: "JavaScript",
      topics: ["react", "dashboard", "analytics"],
      url: "https://github.com/ronaldo/react-dashboard",
    },
    {
      name: "api-automation",
      description: "Python scripts for API testing and automation.",
      stars: 45,
      language: "Python",
      topics: ["python", "automation", "api"],
      url: "https://github.com/ronaldo/api-automation",
    },
    {
      name: "coding-challenges",
      description: "Solutions to various coding challenges and algorithms.",
      stars: 28,
      language: "JavaScript",
      topics: ["algorithms", "challenges", "learning"],
      url: "https://github.com/ronaldo/coding-challenges",
    },
  ],
  velocityData: velocityData,
  weekdayStats: weekdayStats,
  productivity: {
    timeOfDay: "Evening",
    peakHour: 20,
  },
  archetype: "The Consistent Coder",
  contributionBreakdown: {
    commits: totalCommits,
    prs: 38,
    issues: 15,
    reviews: 22
  },
  community: {
    followers: 320,
    following: 145,
    totalStars: 370,
    publicRepos: 28
  }
};