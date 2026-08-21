export const profile = {
  name: "Shreshth Verma",
  handle: "shreverr",
  tagline: "Full-Stack & AI Engineer  •  B.E. CS '26",
  bio: "I build from zero. Started programming at 12, founded a software agency in college that shipped for clients across India and Israel, and now co-found Olange — an AI-native operating system for real estate teams. Past few years focused on AI systems, browser automation, scalable backend infrastructure, and developer tooling — Python, Playwright, LLMs, and modern cloud.",
  location: "Bengaluru, Karnataka, India",
  website: "github.com/shreverr",
  availability: true,
}

export const socials = [
  { name: "GitHub",   href: "https://github.com/shreverr",                icon: "gh" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/shreshth-verma", icon: "li" },
  { name: "Email",    href: "mailto:verma2007s@gmail.com",                icon: "at" },
]

export interface Experience {
  id: string
  company: string
  companyIcon: string
  role: string
  period: string
  href?: string
  current?: boolean
  description: string[]
  tags: string[]
  iconBg: [string, string]
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Olange",
    companyIcon: "OL",
    role: "Co-Founder",
    period: "Apr 2026 – Present",
    href: "https://olange.app",
    description: [
      "Building an AI-native operating system for real estate teams — unifying WhatsApp CRM, lead management, listings, site-visit scheduling, and AI workflows into one platform.",
      "Architected the platform end to end on modern cloud infrastructure with a scalable, multi-tenant backend and real-time collaboration.",
      "Built AI-powered features including lead qualification, WhatsApp automation, document intelligence, and property image enhancement (AI staging).",
      "Lead product strategy, engineering, customer discovery, and go-to-market, working directly with real estate developers and brokerages.",
    ],
    tags: ["AI", "Multi-tenant", "WhatsApp API", "Cloud"],
    iconBg: ["#c2410c", "#f97316"],
  },
  {
    id: "2",
    company: "DB Stencil",
    companyIcon: "DB",
    role: "Co-Founder",
    period: "Nov 2025 – Mar 2026",
    href: "https://dbstencil.app",
    description: [
      "Founded and built a visual database modeling platform, growing to 500+ users with real-time collaborative schema design and instant code generation.",
      "Architected a schema engine supporting 50+ database operations — tables, relationships, indexes, constraints, and advanced modeling features.",
      "Built multi-framework code generation for DBML, Prisma, Drizzle ORM, and SQL DDL.",
      "Designed a robust state-synchronization and persistence system for complex diagrams, enabling seamless editing, versioning, and project management.",
    ],
    tags: ["TypeScript", "React", "PostgreSQL", "Prisma", "Drizzle"],
    iconBg: ["#4338ca", "#6366f1"],
  },
  {
    id: "3",
    company: "YesMadam",
    companyIcon: "YM",
    role: "AI Automation Engineer",
    period: "Jul 2025 – Aug 2025",
    description: [
      "Built a high-throughput background processing system handling 600K+ image verification requests per month for employee compliance workflows.",
      "Designed resilient asynchronous pipelines using Inngest with automatic retries, rate limiting, and queue orchestration.",
      "Optimized processing reliability and throughput while reducing operational overhead; containerized services with Docker for consistent, scalable deployments.",
    ],
    tags: ["Node.js", "Inngest", "Docker", "TypeScript"],
    iconBg: ["#be185d", "#ec4899"],
  },
  {
    id: "4",
    company: "Pnacademy",
    companyIcon: "PN",
    role: "Freelance Backend Developer",
    period: "Jun 2024 – Dec 2024",
    description: [
      "Built and deployed backend services serving 1,000+ monthly active users using Node.js, TypeScript, PostgreSQL, and Redis.",
      "Reduced search latency from 800ms to 200ms (75%) using PostgreSQL full-text search (tsvector); improved API response times 40–60% with Redis caching.",
      "Implemented JWT authentication and RBAC (3+ roles) and AWS S3 uploads (500+ files/day) via pre-signed URLs.",
      "Deployed Dockerized services on AWS EC2 with Nginx and SSL at 99%+ uptime.",
    ],
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS", "Docker"],
    iconBg: ["#0369a1", "#0ea5e9"],
  },
  {
    id: "5",
    company: "The Software Venture",
    companyIcon: "SV",
    role: "Founder",
    period: "Jan 2023 – Jun 2024",
    description: [
      "Built and scaled a software development agency, delivering custom web and mobile solutions for 10+ clients across India and Israel.",
      "Led projects end to end — discovery, architecture, development, and deployment.",
    ],
    tags: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    iconBg: ["#065f46", "#10b981"],
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
    id: "0",
    name: "Autonomous Browser Agent",
    description: "AI agent that executes plain-English tasks by driving a real anti-detect Firefox browser end-to-end — shopping, research, form-filling, checkout — with a narrating REPL and human confirmation before consequential actions.",
    tags: ["Python", "Playwright", "Camoufox", "LLM"],
    href: "https://www.youtube.com/watch?v=tQ6L_3TpozA",
    gradient: ["#0a0a1f", "#1e1b4b", "#312e81"],
    stars: "Demo",
  },
  {
    id: "1",
    name: "Timbre",
    description: "Voice AI platform that turns one line of script into a website voice agent — sub-500ms voice-to-voice via WebRTC, Deepgram STT, OpenRouter LLM, Cartesia TTS, pgvector RAG, MCP & HTTP tools.",
    tags: ["Hono", "Bun", "LiveKit", "Supabase"],
    href: "https://timbre.shrever.tech",
    gradient: ["#2e0a0a", "#7c2d12", "#451a03"],
    stars: "Live",
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
  "B.E. Computer Science, Chitkara University — 2022–2026",
  "Winner — Chitkara Sandbox 2.0 Hackathon, March 2024",
  "Winner — ShopClues Smart Cataloging Hackathon, March 2024",
]

export const quote = "600K+ image jobs/month — 500+ users on DB Stencil — sub-500ms voice AI"
