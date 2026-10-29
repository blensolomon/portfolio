export const EMAIL = "blusol845@gmail.com";

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/blensolomon", icon: "instagram" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/blensolomon", icon: "linkedin" },
  { name: "GitHub", href: "https://github.com/blensolomon", icon: "github" },
  { name: "Behance", href: "https://www.behance.net/blensolomon", icon: "behance" },
];

export const services = [
  {
    title: "Web Development",
    description:
      "Fast, responsive websites and web apps built with React and modern tooling — from landing pages to full products.",
    level: 92,
    skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Node.js", "Git & GitHub"],
  },
  {
    title: "Video Editing",
    description:
      "Promos, social cuts and motion graphics edited to hold attention — story, pacing, sound and color all dialed in.",
    level: 88,
    skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics", "Color Grading"],
  },
  {
    title: "AI Automation",
    description:
      "Workflows that connect your tools and remove repetitive work — lead capture, qualification, follow-ups and reporting on autopilot.",
    level: 85,
    skills: ["n8n", "Zapier", "Make", "OpenAI / LLMs", "Chatbots", "Python"],
  },
];

export const projects = [
  {
    client: "ShopLite",
    title: "E-commerce Storefront",
    description:
      "A fast, conversion-focused storefront built with React and Tailwind — product filtering, cart state, and a headless CMS so the client updates inventory without touching code.",
    image: "/projects/shoplite-main.jpg",
    imageA: "/projects/shoplite-a.jpg",
    imageB: "/projects/shoplite-b.jpg",
    link: "https://github.com/blensolomon",
  },
  {
    client: "Launch Promo",
    title: "Brand Video Campaign",
    description:
      "End-to-end edit of a 60-second product launch promo: storyboard, motion graphics, sound design and color grade — delivered in 16:9, 1:1 and 9:16 cuts.",
    image: "/projects/promo-main.jpg",
    imageA: "/projects/promo-a.jpg",
    imageB: "/projects/promo-b.jpg",
    link: "https://youtube.com/@blensolomon",
  },
  {
    client: "LeadFlow",
    title: "AI Lead Automation",
    description:
      "An n8n + LLM pipeline that captures inbound leads, qualifies them with AI, drafts personalized replies and syncs to the CRM — saving ~10 hours a week.",
    image: "/projects/leadflow-main.jpg",
    imageA: "/projects/leadflow-a.jpg",
    imageB: "/projects/leadflow-b.jpg",
    link: "https://github.com/blensolomon",
  },
];

export const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Automations Built" },
];
