"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { 
  FaReact, 
  FaNodeJs, 
  FaDocker,
  FaProjectDiagram 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiPostgresql, 
  SiMongodb, 
  SiExpress, 
  SiGraphql, 
  SiTrpc,
  SiRedux
} from "react-icons/si";

const experienceData = {
  title: "My Experience",
  description: "My professional journey has been defined by a commitment to building high-performance web applications and mastering modern software engineering practices.",
  items: [
    {
      company: "Corexlab",
      role: "Software Engineer",
      duration: "JUL 2023 - PRESENT",
    },
    {
      company: "Corexlab",
      role: "Software Engineer Intern",
      duration: "JAN 2023 - JUN 2023",
    },
    {
      company: "BITM",
      role: "Trainee (Web Development)",
      duration: "OCT 2022 - DEC 2022",
    },
  ],
};

const educationData = {
  title: "My Education",
  description: "My academic background has provided me with a strong foundation in computer science and engineering principles.",
  items: [
    {
      institution: "Green University of Bangladesh (GUB)",
      degree: "B.Sc in Computer Science & Engineering",
      duration: "2019 Completion",
    },
    {
      institution: "Shahid M. Monsur Ali College, Pabna",
      degree: "Higher Secondary School Certificate [H.S.C]",
      duration: "2014 Completion",
    },
    {
      institution: "Chandai High School, Natore",
      degree: "Secondary School Certificate [S.S.C]",
      duration: "2011 Completion",
    },
  ],
};

const skillsData = {
  title: "My Skills",
  description: "A comprehensive toolkit of technologies and frameworks I use to build scalable and efficient systems.",
  items: [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React.js", icon: FaReact },
    { name: "Node.js", icon: FaNodeJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Docker", icon: FaDocker },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Express", icon: SiExpress },
    { name: "tRPC", icon: SiTrpc },
    { name: "Redux", icon: SiRedux },
    { name: "Zustand", icon: FaProjectDiagram },
  ],
};

const aboutData = {
  title: "About me",
  description: "Md Zubaer Rahman, a Bangladeshi software engineer with 3 years of experience. Fluent in English and Bengali. Reach me at zubaer.rahman.cse@gmail.com.",
  info: [
    { label: "Name", value: "Md Zubaer Rahman" },
    { label: "Experience", value: "3 Years" },
    { label: "Phone", value: "(+880) 1770 288769" },
    { label: "Nationality", value: "Bangladeshi" },
    { label: "Email", value: "zubaer.rahman.cse@gmail.com" },
    { label: "Languages", value: "English, Bengali" },
  ],
};

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About me" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Header />

      <main className="container max-w-7xl mx-auto px-4 flex-1 flex flex-col py-20 lg:py-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full items-start">
          
          {/* Sidebar Tabs */}
          <aside className="w-full md:w-[260px] shrink-0 pt-2 md:sticky md:top-[120px] self-start h-fit">
            <div className="flex flex-col gap-5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "w-full py-3 px-6 rounded-lg text-lg font-bold transition-all duration-300 text-left md:text-center",
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(0,255,153,0.3)]"
                      : "bg-[#27272c] hover:bg-[#27272c]/80 text-foreground/80 hover:text-primary"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </aside>

          {/* Content Area */}
          <div className="flex-1 lg:pl-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-10"
              >
                {activeTab === "experience" && (
                  <>
                    <div className="space-y-4">
                      <h2 className="text-4xl font-bold tracking-tight">{experienceData.title}</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">{experienceData.description}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {experienceData.items.map((item, index) => (
                        <div key={index} className="bg-[#27272c] p-10 rounded-xl space-y-4 shadow-sm hover:translate-y-[-4px] transition-all duration-300">
                          <span className="text-primary font-bold text-sm tracking-widest">{item.duration}</span>
                          <h3 className="text-2xl font-bold text-white tracking-tight">{item.role}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground font-medium">{item.company}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {activeTab === "education" && (
                  <>
                    <div className="space-y-4">
                      <h2 className="text-4xl font-bold tracking-tight">{educationData.title}</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">{educationData.description}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {educationData.items.map((item, index) => (
                        <div key={index} className="bg-[#27272c] p-10 rounded-xl space-y-4 shadow-sm hover:translate-y-[-4px] transition-all duration-300">
                          <span className="text-primary font-bold text-sm tracking-widest">{item.duration}</span>
                          <h3 className="text-2xl font-semibold text-white tracking-tight">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground font-normal">{item.institution}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {activeTab === "skills" && (
                  <>
                    <div className="space-y-4">
                      <h2 className="text-4xl font-bold tracking-tight">{skillsData.title}</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">{skillsData.description}</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                      {skillsData.items.map((skill, index) => (
                        <div key={index} className="relative bg-[#27272c] p-8 rounded-xl flex items-center justify-center text-center group transition-all cursor-pointer shadow-sm hover:shadow-primary/10">
                          <skill.icon size={60} className="text-white opacity-70 group-hover:opacity-100 group-hover:text-primary transition-all duration-300" />
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#27272c] text-primary px-3 py-1.5 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-primary/20">
                            {skill.name}
                            <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#27272c] rotate-45 border-r border-b border-primary/20" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {activeTab === "about" && (
                  <>
                    <div className="space-y-4">
                      <h2 className="text-4xl font-bold tracking-tight">{aboutData.title}</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">{aboutData.description}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16">
                      {aboutData.info.map((info, index) => (
                        <div key={index} className="flex gap-4 items-center">
                          <span className="text-muted-foreground w-28 shrink-0 font-medium">{info.label}</span>
                          <span className="text-foreground font-bold text-lg">{info.value}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
