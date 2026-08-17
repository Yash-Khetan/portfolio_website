export const blogs = [
  {
    id: 1,
    platform: "Medium",
    tagline: "Tech articles, dev insights & lessons learned",
    description:
      "I write about backend engineering, development workflows, and things I learn while building real products. From debugging war stories to architecture decisions — it's all here.",
    url: import.meta.env.VITE_MEDIUM_URL || "https://medium.com/@yash.khetan24",
    icon: "medium",
    accentColor: "#000000",
    darkAccentColor: "#FFFFFF",
  },
  {
    id: 2,
    platform: "Hashnode",
    tagline: "System Design — deep dives only",
    description:
      "Dedicated to breaking down system design concepts — load balancers, message queues, database sharding, caching strategies, and real-world architecture case studies.",
    url: import.meta.env.VITE_HASHNODE_URL || "https://systemdesign101.hashnode.dev",
    icon: "hashnode",
    accentColor: "#2962FF",
    darkAccentColor: "#6C9CFF",
  },
];
