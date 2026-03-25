export const profile = {
  name: "Shreshth Verma",
  handle: "shreverr",
  tagline: "B.E. CS '26  •  Backend Dev  •  Builder  •  Open Source",
  bio: "I build from zero. Backend-focused Full-Stack Developer with experience building and scaling production systems serving 1K+ users. Improved API latency by up to 60%, processed 20K+ daily tasks, and deployed scalable systems using AWS, Docker, and PostgreSQL.",
  location: "Haridwar, Uttarakhand, India",
  website: "github.com/shreverr",
  availability: true,
}

export const socials = [
  { name: "GitHub",   href: "https://github.com/shreverr",                icon: "gh" },
  { name: "LinkedIn", href: "https://linkedin.com/in/shreshth-verma",     icon: "li" },
  { name: "Email",    href: "mailto:verma2007s@gmail.com",                icon: "at" },
]

export interface Experience {
  id: string
  company: string
  companyIcon: string
  role: string
  period: string
  current?: boolean
  description: string[]
  tags: string[]
  iconBg: [string, string]
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Yes Madam",
    companyIcon: "YM",
    role: "Freelance Backend Engineer",
    period: "Jul 2025 – Aug 2025",
    current: false,
    description: [
      "Engineered a background job processing 20K+ image requests daily for employee compliance verification.",
      "Integrated Inngest for retries, throttling, and queue management.",
      "Dockerized application for scalable deployment.",
    ],
    tags: ["Node.js", "Inngest", "Docker", "TypeScript"],
    iconBg: ["#be185d", "#ec4899"],
  },
  {
    id: "2",
    company: "Pnacademy",
    companyIcon: "PN",
    role: "Freelance Full-Stack Developer",
    period: "Jun 2024 - Dec 2024",
    description: [
      "Built and deployed backend services serving 1,000+ monthly active users.",
      "Reduced search latency from 800ms to 200ms (75%) using PostgreSQL full-text search (tsvector).",
      "Improved API response times by 40-60% using Redis caching, reducing database load.",
      "Implemented JWT authentication and RBAC for 3+ user roles.",
      "Integrated AWS S3 uploads handling 500+ files/day with pre-signed URLs.",
      "Deployed Dockerized services on AWS EC2 with Nginx and SSL — 99%+ uptime.",
      "Built AWS Lambda webhook automation reducing manual work by 90%.",
    ],
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS", "Docker"],
    iconBg: ["#0369a1", "#0ea5e9"],
  },
]

export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  href: string
  gradient: [string, string, string]
  stars: string
}

export const projects: Project[] = [
  {
    id: "1",
    name: "DB Stencil",
    description: "Visual database schema platform with 500+ users — real-time schema design, code generation for Prisma, Drizzle, DBML & SQL DDL.",
    tags: ["TypeScript", "React", "PostgreSQL"],
    href: "https://dbstencil.app",
    gradient: ["#0c1445", "#1a3a6e", "#0d2137"],
    stars: "500+ users",
  },
  {
    id: "2",
    name: "Node Rizz",
    description: "AI-powered backend generator that converts natural language prompts into fully deployable APIs using Node-RED and Python models.",
    tags: ["Node.js", "Python", "Node-RED", "AI"],
    href: "https://github.com/shreverr/node-rizz",
    gradient: ["#1a0533", "#2d0b6b", "#1a0533"],
    stars: "Open Source",
  },
  {
    id: "3",
    name: "HTTP Server",
    description: "HTTP server built from scratch in Go supporting GET, POST, and PUT — handles multiple concurrent client connections.",
    tags: ["Go", "Networking", "Systems"],
    href: "https://github.com/shreverr/http-server-go",
    gradient: ["#0a1a0a", "#0d3b0d", "#133a13"],
    stars: "Open Source",
  },
]

export const achievements = [
  "Winner — Chitkara Sandbox 2.0 Hackathon, March 2024",
  "Winner — Shopclues Smart Cataloging Hackathon, March 2024",
]

export const quote = "Built systems handling 20K+ daily jobs — 1K+ users — Reduced API latency by up to 60%"
