export const projects = [
  {
    id: 1,
    title: "UPay – Async Payments Backend",
    date: "Jan 2026 – Feb 2026",
    description: "Engineered asynchronous payment processing decoupled from request lifecycle using Redis queues. Implemented idempotent transactions with state transitions (pending → processing → success/failure) and JWT-based role access control.",
    stack: ["Node.js", "Express.js", "MongoDB", "Redis", "BullMQ", "JWT"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "CodeDuels – Real-Time Coding Platform",
    date: "Feb 2026 – Mar 2026",
    description: "Built backend infrastructure supporting real-time matchmaking, session lifecycle management, and live code interaction using WebSockets. REST APIs for submissions, scoring logic, and user management.",
    stack: ["Node.js", "Express.js", "MongoDB", "WebSockets"],
    githubUrl: "#"
  },
  {
    id: 3,
    title: "DocuMind – Intelligent Document Analysis",
    date: "Apr 2026 – Present",
    description: "Full-stack RAG platform for real-time natural language querying over PDFs using semantic search and Gemini LLM. Built PDF parsing, chunking, embedding, and cosine similarity retrieval pipeline with streaming responses.",
    stack: ["Node.js", "PostgreSQL", "Gemini API", "Vercel", "Render", "JWT"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Dev Inspect — AI-Powered GitHub Analyzer",
    date: "2026",
    description: "A CLI tool that analyzes GitHub activity and converts it into actionable insights. Fetches real-time events while using AI to generate recruiter-style summaries. Delivers clean terminal outputs with seamless Gemini AI integration.",
    stack: ["Node.js", "Commander.js", "Axios", "GitHub API", "Gemini AI"],
    githubUrl: "#"
  }
];
