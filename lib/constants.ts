import { Project, Skill, WorkExperience, Certification } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: 8,
    img: "/portfolio_images/crm.png",
    title: "Productivity CRM",
    description: "A CRM dashboard for engineering teams.",
    isTeamProject: false,
    link: "https://project-jc.vercel.app",
    github: "https://github.com/SimpleX-T/product_JC",
    technologies: ["ReactJS", "Tailwind CSS", "Motion"],
  },
  {
    id: 1,
    img: "/portfolio_images/terasus.png",
    title: "Terasus",
    description:
      "Save yourself the hassle of managing events with Terasus - fast, simple and reliable.",
    isTeamProject: false,
    link: "https://event-ticketer.vercel.app",
    github: "https://github.com/SimpleX-T/event-ticketer",
    technologies: [
      "ReactJS",
      "Tanstack Query",
      "Tailwind CSS",
      "Supabase",
      "Motion",
      "React Form Hook",
      "Context API",
    ],
  },
  {
    id: 2,
    img: "/portfolio_images/seekeroracle.png",
    title: "Seeker Oracle",
    description:
      "Truth Verified - Leverage decentralized AI agents to access verified, unbiased information in real-time.",
    isTeamProject: false,
    link: "https://www.seekeroracle.com/",
    github: "https://github.com/SimpleX-T/seekeroracle",
    technologies: [
      "ReactJS",
      "TailwindCSS",
      "HeadlessUI",
      "Motion",
      "Typescript",
    ],
  },
  {
    id: 3,
    img: "/portfolio_images/tetmart.png",
    title: "Tetmart Nigeria",
    description:
      "Tetmart is an E-Commerce platform built to provide visibility for students and small medium enterprise businesses within and outside campus.",
    link: "https://tetmart.ng",
    isTeamProject: false,
    github: "https://github.com/SimpleX-T/tetmart",
    technologies: [
      "ReactJS",
      "Tailwind CSS",
      "Zustand",
      "React Query",
      "React Form Hook",
      "Shadcn UI",
    ],
  },
  {
    id: 4,
    img: "/portfolio_images/tarioty.png",
    title: "Tarioty",
    description:
      "Tarioty is a dynamic creative studio that crafts engaging content across industries and borders, including 3D animation, gaming experiences, visual solutions, short films, series, architectural visualizations, and brand designs.",
    isTeamProject: true,
    teamMembers: [
      {
        name: "Devtochukwu",
        pfp: "https://github.com/SimpleX-T.png",
        github: "https://github.com/SimpleX-T",
      },
      {
        name: "0xSolenoid",
        pfp: "https://github.com/solomonadzape95.png",
        github: "https://github.com/solomonadzape95",
      },
      {
        name: "Code Monkey",
        pfp: "https://github.com/OtieteAyebanua.png",
        github: "https://github.com/OtieteAyebanua",
      },
    ],
    link: "https://tarioty.vercel.app",
    github: "https://github.com/OtieteAyebanua/tarioty",
    technologies: ["ReactJS", "TypeScript", "Material UI", "Motion"],
  },
  {
    id: 5,
    img: "/portfolio_images/2077.png",
    title: "2077 Collective",
    description: `An information webpage made for the 2077 Collective campaign - "Let's make Ethereum cool again".`,
    isTeamProject: false,
    link: "https://2077collectiveframemaker.vercel.app",
    github: "https://github.com/SimpleX-T/2077-collective",
    technologies: [
      "ReactJS",
      "TypeScript",
      "NextJS",
      "Motion",
      "Shadcn UI",
      "Tailwind CSS",
    ],
  },
  {
    id: 6,
    img: "/portfolio_images/bookam.png",
    title: "BOOKam",
    description: `A proposed terminal management system, and a ticket booking system for the Enugu State Government's terminal project.`,
    isTeamProject: true,
    link: "https://bookam-frontend.vercel.app",
    github: "https://github.com/BOOKam",
    teamMembers: [
      {
        name: "Devtochukwu",
        pfp: "https://github.com/SimpleX-T.png",
        github: "https://github.com/SimpleX-T",
      },
      {
        name: "0xSolenoid",
        pfp: "https://github.com/solomonadzape95.png",
        github: "https://github.com/solomonadzape95",
      },
      {
        name: "Cyberdude",
        pfp: "https://github.com/engr-Godswillochi.png",
        github: "https://github.com/engr-Godswillochi",
      },
    ],
    technologies: [
      "TypeScript",
      "NextJS",
      "Motion",
      "Shadcn UI",
      "Tailwind CSS",
      "React Query",
      "React Form Hook",
      "Zod",
    ],
  },
  {
    id: 9,
    img: "/portfolio_images/rank_forge.png",
    title: "Rank Forge",
    description: `RankForge is a contributor platform for devs that gamifies open-source contributions. Create your profile, log contributions, and get evaluated by admins to earn your rank.`,
    isTeamProject: false,
    link: "https://rage-forge.vercel.app",
    github: "https://github.com/SimpleX-T/RageForge",
    technologies: [
      "TypeScript",
      "NextJS",
      "Motion",
      "Shadcn UI",
      "Tailwind CSS",
      "React Query",
      "React Form Hook",
      "Zod",
    ],
  },
];

export const skills: Skill[] = [
  { label: "HTML", icon: "https://img.icons8.com/color/48/000000/html-5.png" },
  { label: "CSS", icon: "https://img.icons8.com/color/48/000000/css3.png" },
  {
    label: "Tailwind CSS",
    icon: "https://img.icons8.com/color/48/000000/tailwindcss.png",
  },
  {
    label: "JavaScript",
    icon: "https://img.icons8.com/color/48/000000/javascript.png",
  },
  {
    label: "Responsive Web Design",
    icon: "https://img.icons8.com/?size=100&id=KjPwn6Tz1iuz&format=png&color=000000",
  },
  {
    label: "React",
    icon: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
  },
  {
    label: "TypeScript",
    icon: "https://img.icons8.com/color/48/000000/typescript.png",
  },
  {
    label: "NextJS",
    icon: "https://img.icons8.com/color/48/000000/nextjs.png",
  },
  { label: "Git", icon: "https://img.icons8.com/color/48/000000/git.png" },
  {
    label: "Java",
    icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
  },
  {
    label: "Solidity",
    icon: "https://img.icons8.com/color/48/000000/solidity.png",
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Fundamentals of Deep Learning",
    issuer: "Nvidia Deep Learning Institute",
    year: "2025",
    icon: "/nvidia_icon.svg",
  },
  {
    id: 2,
    title: "Arit Developer Circle Hackathon",
    issuer: "Arit Developer Circle",
    year: "2025",
    icon: "/adc_icon.png",
  },
  {
    id: 3,
    title: "Certificate of Appreciation",
    issuer: "OpenSourceNest",
    year: "2025",
    icon: "/osn.webp",
  },
];

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    role: "Frontend Developer",
    link: "https://tetmart.ng",
    company: "Tetmart Nigeria",
    period: "Aug 2024 - Jan 2025",
    description:
      "Developed a specialized e-commerce platform for higher education institutions using React, featuring secure payments, user authentication, an intuitive product catalog with advanced filtering, real-time inventory management, and a responsive, high-performance shopping experience optimized for Nigerian students.",
  },
  {
    id: 2,
    role: "Backend Developer",
    link: "https://husridge.com",
    company: "Husridge",
    period: "Aug 2025 - Present",
    description:
      "Built a full subscription billing platform (Node.js/Express, MongoDB) with Paystack integration, secure card tokenization, and HMAC‑verified webhooks for recurring invoices and trials.\n\nImplemented anti‑gaming “peak‑in‑cycle” seat billing for usage‑based fairness, with clear monthly invoice labeling and idempotent\nprocessing.\nDelivered production‑ready payment APIs (card setup, status, invoices, cancel), automated billing via cron, and pre‑charge reminder\nnotifications to improve collections.\nWrote comprehensive technical documentation and rollout plan; added robust error handling, observability, and secure payment\nflows.",
  },
];
