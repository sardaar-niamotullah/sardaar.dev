"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  containerVariants,
  itemVariants,
  imageVariants,
  Divider,
} from "../utils/animations";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  live?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Verbie",
    description:
      "The all-in-one visual communication suite that grows with your child. Powered by AI, designed for families, and created by people that care.",
    tech: ["Dart", "Flutter", "Firebase", "GetX"],
    github: "",
    demo: "",
    live: "https://verbie.co.uk/",
    image: "/project-snapshots/verbie_web.png",
  },
  {
    title: "Easy English Learning",
    description:
      "Easy English Learning is a simple and practical app designed for Bangla speakers who want to learn English confidently. The app teaches English lesson by lesson, from basic words and sentences to grammar and daily conversation.",
    tech: ["Dart", "Flutter", "GetX"],
    github: "",
    demo: "",
    live: "https://play.google.com/store/apps/details?id=com.easy.english.learning.inshirah&pcampaignid=web_share",
    image: "/project-snapshots/easy_english_learning_app_icon.png",
  },
  {
    title: "Simple Expense Tracker",
    description:
      "The Expense Tracker App is a simple yet powerful tool designed to help you manage your personal finances with ease.",
    tech: ["Dart", "Flutter", "GetX", "SQLite"],
    github: "",
    demo: "",
    live: "https://play.google.com/store/apps/details?id=com.inshirahtech.simple_expense_tracker",
    image: "/project-snapshots/simple_expense_tracker_logo.png",
  },
  {
    title: "Floating Tasbih",
    description:
      "This app gives you the ability to put a floating counter on the screen which lets you do zhikr even when you are browsing other apps.",
    tech: ["Dart", "Flutter", "GetX", "SQLite"],
    github: "",
    demo: "",
    live: "https://play.google.com/store/apps/details?id=com.floating.tasbih.counter.app",
    image: "/project-snapshots/floating_tasbih.png",
  },
  {
    title: "Dllalna",
    description:
      "Dllalna is a real estate app where users can create accounts as buyers, sellers, or brokers. The platform allows users to buy properties, publish ads for their own properties, and even hire brokers seamlessly.",
    tech: ["Dart", "Flutter", "Supabase", "GetX"],
    github: "",
    demo: "",
    live: "",
    image: "/project-snapshots/dllalna.png",
  },
  // {
  //   title: "100 Days of SwiftUI",
  //   description:
  //     "This repository documents my journey of learning SwiftUI by building 19 projects over 100 days, following the 100 Days of SwiftUI challenge.",
  //   tech: ["Swift", "SwiftUI"],
  //   github: "https://github.com/sardaar-niamotullah/100_Days_Of_SwiftUI",
  //   demo: "",
  //   live: "",
  //   image: "/project-snapshots/hdswiftui2.png",
  // },
  {
    title: "Ai Tutor",
    description:
      "Ai Tutor is a Retrieval-Augmented Generation (RAG) system designed to answer user queries by retrieving relevant information from a knowledge base built on document chunks. It supports semantic search over PDF content and generates contextually accurate responses.",
    tech: [
      "RAG",
      "Langchain",
      "LLM",
      "Ollama",
      "LLaMA 3.2",
      "Vector Database",
      "Pgvector",
      "Embedding",
      "Cosine Similarity",
      "Python",
      "Django",
    ],
    github: "https://github.com/sardaar-niamotullah/Ai_Tutor",
    demo: "",
    live: "",
    image: "/project-snapshots/ai_tutor.png",
  },
  {
    title: "Ai ChatBot",
    description:
      "A full-stack AI-powered chatbot platform that serves as a virtual customer service representative. Built with Ollama-Llama3.2 for intelligent responses, it features secure Google OAuth2.0 authentication, real-time chat interface, and persistent conversation storage.",
    tech: [
      "NextJS",
      "ReactJS",
      "Ollama-Llama3.2",
      "ExpressJS",
      "NodeJS",
      "PassportJS",
      "OAuth2",
      "Postgres",
      "Prisma",
    ],
    github: "https://github.com/sardaar-niamotullah/ai_chatbot",
    demo: "",
    live: "",
    image: "/project-snapshots/chatbot.png",
  },
  {
    title: "Team_Task_Management-MobileApp",
    description:
      "Team_Task_Management-MobileApp is a personal mobile app project built using Flutter and Dart. It helps users manage their daily tasks and assign them to others with ease. The backend is powered by ExpressJS, which handles the API endpoints efficiently, and PostgreSQL is used for storing all task-related data reliably. This setup ensures quick response times and a stable data layer for both solo and collaborative task management.",
    tech: ["Flutter", "Dart", "Material UI", "ExpressJS", "NodeJS", "Postgres"],
    github:
      "https://github.com/sardaar-niamotullah/Team_Task_Management-MobileApp",
    demo: "",
    live: "",
    image: "/project-snapshots/teamtaskmanager.png",
  },
  {
    title: "Instant Chat App",
    description:
      "Instant Chat App is one of my favorite pet projects where I explored real-time communication using WebSocket (Socket.IO). It's a fully functional chat application that supports instant messaging and stores all conversations in a PostgreSQL database via Prisma ORM. The backend is built with ExpressJS and includes user authentication using OAuth2 and PassportJS for secure access. This setup ensures both real-time responsiveness and persistent message history across sessions.",
    tech: [
      "NextJS",
      "ReactJS",
      "ExpressJS",
      "NodeJS",
      "Socket.IO",
      "PassportJS",
      "OAuth2",
      "Postgres",
      "Prisma",
    ],
    github: "https://github.com/sardaar-niamotullah/Chat_App",
    demo: "",
    live: "",
    image: "/project-snapshots/chatapp.png",
  },
];

const renderActionButtons = (project: Project, isMobile: boolean = false) => {
  const hasGithub = !!project.github;
  const hasDemo = !!project.demo;
  const hasLive = !!project.live;
  const hasAnyLink = hasGithub || hasDemo || hasLive;
  const showBothInRow = hasGithub && hasDemo;

  // If no links are available, show "Client's Project"
  if (!hasAnyLink) {
    return (
      <motion.div
        variants={containerVariants}
        className={`flex flex-col gap-3 ${isMobile ? "w-full" : "w-full"}`}
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[var(--themeColor_2)]/0 border border-[var(--themeColor_2)]/30 text-[var(--textColor_3)] w-full"
        >
          {/* Updated Lock Icon SVG */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8Z"
                fill="white"
              />
            </g>
          </svg>
          <span>Client&apos;s Project</span>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      className={`flex flex-col gap-3 ${isMobile ? "w-full" : "w-full"}`}
    >
      {/* Top Row - GitHub and Demo */}
      {(hasGithub || hasDemo) && (
        <motion.div variants={itemVariants} className="w-full">
          <div
            className={`flex ${
              showBothInRow ? "justify-between" : "justify-center"
            } w-full gap-4`}
          >
            {hasGithub && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={showBothInRow ? "" : "w-full"}
              >
                <Link
                  href={project.github || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--themeColor_2)]/0 border border-[var(--themeColor_2)]/30 text-[var(--textColor_3)] hover:bg-[var(--themeColor_2)]/0 transition-all ${
                    showBothInRow ? "" : "w-full justify-center"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View Code</span>
                </Link>
              </motion.div>
            )}

            {hasDemo && project.demo && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={showBothInRow ? "" : "w-full"}
              >
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--themeColor_2)]/0 border border-[var(--themeColor_2)]/30 text-[var(--textColor_3)] hover:bg-[var(--themeColor_2)]/0 transition-all ${
                    showBothInRow ? "" : "w-full justify-center"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#FF0000"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816z" />
                    <path d="M9 16l8-4-8-4z" fill="white" />
                  </svg>
                  <span>View Project</span>
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}

      {/* Bottom Row - Live Site */}
      {hasLive && project.live && (
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full"
        >
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[var(--themeColor_2)]/0 border border-[var(--themeColor_2)]/30 text-[var(--textColor_3)] hover:bg-[var(--themeColor_2)]/0 transition-all w-full"
          >
            <svg
              fill="#FFFFFF"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.406 13.406l2.5-2.531c0.219-0.219 0.469-0.5 0.719-0.813 0.25-0.281 0.531-0.531 0.813-0.75 0.531-0.469 1.156-0.875 1.938-0.875 0.688 0 1.281 0.313 1.719 0.719s0.688 1 0.688 1.688c0 0.281-0.031 0.594-0.125 0.813-0.219 0.438-0.406 0.75-0.594 1-0.094 0.125-0.188 0.25-0.188 0.375 0 0.094 0 0.188 0.063 0.219 0.344 0.844 0.594 1.563 0.75 2.438 0.094 0.344 0.281 0.5 0.594 0.5 0.125 0 0.25-0.031 0.375-0.125 0.25-0.156 0.469-0.406 0.688-0.656 0.125-0.125 0.219-0.25 0.281-0.313 1.125-1.094 1.781-2.656 1.781-4.25 0-1.688-0.688-3.188-1.781-4.281-1.094-1.063-2.625-1.781-4.25-1.781s-3.188 0.656-4.281 1.813l-4.281 4.25c-1.125 1.156-1.75 2.656-1.75 4.25 0 0.469 0.188 1.438 0.5 2.344 0.313 0.875 0.719 1.656 1.25 1.656 0.281 0 0.875-0.469 1.375-1s1-1.125 1-1.344c0-0.156-0.125-0.344-0.25-0.625-0.156-0.281-0.219-0.625-0.219-1.031 0-0.625 0.25-1.25 0.688-1.688zM10.313 25.406l4.281-4.25c1.125-1.094 1.75-2.688 1.75-4.281 0-0.469-0.188-1.406-0.5-2.313-0.281-0.875-0.719-1.688-1.25-1.688-0.219 0-0.875 0.5-1.344 1.031-0.531 0.531-1.031 1.094-1.031 1.313 0 0.156 0.094 0.406 0.25 0.656 0.156 0.281 0.281 0.594 0.281 1-0.031 0.625-0.281 1.25-0.719 1.75l-2.531 2.5c-0.219 0.25-0.469 0.5-0.719 0.781l-0.781 0.781c-0.531 0.5-1.188 0.844-1.969 0.844-1.313 0-2.375-1.031-2.375-2.375 0-0.313 0.063-0.594 0.156-0.813 0.188-0.438 0.375-0.75 0.594-1 0.094-0.125 0.125-0.25 0.125-0.344 0-0.063-0.031-0.125-0.063-0.25-0.375-0.844-0.594-1.563-0.75-2.438-0.063-0.156-0.094-0.281-0.188-0.344-0.094-0.125-0.25-0.156-0.406-0.156-0.125 0-0.219 0.031-0.344 0.125-0.25 0.156-0.5 0.406-0.719 0.656-0.094 0.125-0.219 0.219-0.281 0.281-1.125 1.125-1.781 2.688-1.781 4.281 0 1.656 0.656 3.188 1.781 4.281 1.094 1.094 2.594 1.75 4.25 1.75 1.625 0 3.188-0.625 4.281-1.781z" />
            </svg>
            <span>Project Link</span>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

const renderMobileView = (project: Project, index: number) => {
  return (
    <motion.div
      key={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      // className="w-full bg-[var(--themeColor_1)]/10 backdrop-blur-sm border border-[var(--themeColor_2)]/20 rounded-xl p-8 hover:border-[var(--themeColor_2)]/30 transition-all"
      className="w-full p-8 transition-all"
    >
      <motion.div
        variants={imageVariants}
        className="relative w-full h-48 rounded-lg overflow-hidden border border-[var(--themeColor_2)]/30 mb-6 group"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-115"
          priority={index === 0}
          loading={index > 0 ? "lazy" : undefined}
        />
        <div className="absolute inset-0 bg-[var(--themeColor_2)]/10"></div>
      </motion.div>
      <motion.h3
        variants={itemVariants}
        className="text-[var(--textColor_3)] text-2xl font-medium mb-4 text-center"
      >
        {project.title}
      </motion.h3>

      <motion.p
        variants={itemVariants}
        className="text-[var(--textColor_3)] text-sm leading-relaxed mb-6"
      >
        {project.description}
      </motion.p>

      <motion.div variants={itemVariants}>
        {renderActionButtons(project, true)}
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div variants={containerVariants} className="mt-6">
        <motion.div variants={itemVariants}>
          <h4 className="text-[var(--textColor_3)] text-sm font-medium uppercase tracking-wider mb-2">
            Tech Stack
          </h4>
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap gap-2"
          >
            {project.tech.map((tech, i) => (
              <motion.span
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-sm px-4 py-2 rounded-lg bg-[var(--themeColor_1)] text-[var(--textColor_3)] border border-[var(--themeColor_2)]/30 hover:border-[var(--themeColor_2)]/50 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const renderDesktopView = (project: Project, index: number) => {
  return (
    <motion.div
      key={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      // className="w-full flex flex-row items-start gap-8 bg-[var(--themeColor_1)]/10 backdrop-blur-sm border border-[var(--themeColor_2)]/20 rounded-xl p-8 hover:border-[var(--themeColor_2)]/30 transition-all"
      className="w-full flex flex-row items-start gap-8 p-8 transition-all"
    >
      <motion.div
        variants={containerVariants}
        className="w-1/2 flex flex-col gap-6"
      >
        <motion.div
          variants={imageVariants}
          className="relative w-full h-100 rounded-lg overflow-hidden border border-[var(--themeColor_2)]/30 group"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-115"
            priority={index === 0}
            loading={index > 0 ? "lazy" : undefined}
          />
          <div className="absolute inset-0 bg-[var(--themeColor_2)]/10"></div>
        </motion.div>
        <motion.div variants={itemVariants}>
          {renderActionButtons(project)}
        </motion.div>
      </motion.div>

      <motion.div variants={containerVariants} className="w-1/2 space-y-6">
        <motion.div variants={itemVariants}>
          <h3 className="text-[var(--textColor_3)] text-2xl font-medium">
            {project.title}
          </h3>
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="text-[var(--textColor_3)] text-sm leading-relaxed"
        >
          {project.description}
        </motion.p>

        {/* Tech Stack Section */}
        <motion.div variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <h4 className="text-[var(--textColor_3)] text-sm font-medium uppercase tracking-wider mb-2">
              Tech Stack
            </h4>
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-2"
            >
              {project.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  // className="text-xs px-3 py-1 rounded-lg bg-[var(--themeColor_2)]/10 text-[var(--textColor_3)] border border-[var(--themeColor_2)]/30 hover:bg-[var(--themeColor_2)]/20 transition-all"
                  className="text-sm px-4 py-2 rounded-lg bg-[var(--themeColor_1)] text-[var(--textColor_3)] border border-[var(--themeColor_2)]/30 hover:border-[var(--themeColor_2)]/50 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-[var(--themeColor_3)] text-lg mb-2 tracking-widest uppercase"
          >
            Browse my recent
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-[var(--textColor_3)] text-4xl font-light mb-4 custom-font"
          >
            Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-[var(--themeColor_2)] mx-auto"
          />
        </motion.div>

        <div className="flex flex-col gap-8">
          <div className="md:hidden space-y-8">
            {projects.map((project, index) => renderMobileView(project, index))}
          </div>
          <div className="hidden md:block space-y-8">
            {projects.map((project, index) =>
              renderDesktopView(project, index),
            )}
          </div>
        </div>

        {/* Bottom divider */}
        <Divider />
      </div>
    </section>
  );
}
