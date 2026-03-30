"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";

const experienceData = {
  title: "My Experience",
  description: "7 years of experience in software engineering, specializing in backend development and cloud-native solutions.",
  items: [
    {
      company: "Brain Station 23",
      role: "Software Engineer",
      duration: "MAR 2024 - PRESENT",
    },
    {
      company: "CMED Health",
      role: "Software Engineer",
      duration: "OCT 2023 - FEB 2024",
    },
    {
      company: "NK Group",
      role: "Software Engineer",
      duration: "MAR 2021 - AUG 2023",
    },
    {
      company: "RazinSoft",
      role: "Android Developer",
      duration: "JAN 2020 - FEB 2021",
    },
  ],
};

const educationData = {
  title: "My Education",
  description: "Continuous learning and professional academic background in Computer Science and Engineering.",
  items: [
    {
      institution: "Daffodil International University",
      degree: "B.Sc in Computer Science & Engineering",
      duration: "2016 - 2020",
    },
    {
      institution: "Online Course Platform",
      degree: "Backend Development Specialization",
      duration: "2021",
    },
  ],
};

const skillsData = {
  title: "My Skills",
  description: "A comprehensive toolkit of technologies and frameworks I use to build scalable and efficient systems.",
  items: [
    "Next.js", "React.js", "Node.js", "TypeScript", 
    "PostgreSQL", "MongoDB", "Docker", "Kubernetes",
    "TailwindCSS", "Express", "GraphQL", "Azure"
  ],
};

const aboutData = {
  title: "About me",
  description: "I am a dedicated software engineer with a focus on creating impact through clean code and efficient architectures.",
  info: [
    { label: "Name", value: "Md Zubaer Rahman" },
    { label: "Experience", value: "7+ Years" },
    { label: "Phone", value: "+880 1XXXXXXXXX" },
    { label: "Skype", value: "zubaer.rahman" },
    { label: "Nationality", value: "Bangladeshi" },
    { label: "Email", value: "zubaer.corexlab@gmail.com" },
    { label: "Freelance", value: "Available" },
    { label: "Language", value: "English, Bengali" },
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

      <main className="container max-w-7xl mx-auto px-4 py-12 md:py-24 flex-1">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          
          {/* Sidebar Tabs */}
          <aside className="w-full md:w-[280px] lg:w-[320px] shrink-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">Why hire me?</h2>
            <p className="text-muted-foreground mb-12 leading-relaxed">
              I specialize in high-performance architectures and scalable backend solutions for modern applications.
            </p>
            <div className="flex flex-col gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "w-full py-4 px-6 rounded-xl text-lg font-bold transition-all duration-300 text-left md:text-center",
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
          <div className="flex-1 lg:pl-10">
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
                        <div key={index} className="bg-[#27272c] p-10 rounded-2xl space-y-4 shadow-sm hover:translate-y-[-4px] transition-all duration-300">
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
                        <div key={index} className="bg-[#27272c] p-10 rounded-2xl space-y-4 shadow-sm hover:translate-y-[-4px] transition-all duration-300">
                          <span className="text-primary font-bold text-sm tracking-widest">{item.duration}</span>
                          <h3 className="text-2xl font-bold text-white tracking-tight">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground font-medium">{item.institution}</span>
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
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                      {skillsData.items.map((skill, index) => (
                        <div key={index} className="bg-[#27272c] p-8 rounded-2xl flex items-center justify-center text-center font-bold text-lg hover:text-primary transition-all cursor-default shadow-sm hover:shadow-primary/5">
                          {skill}
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-16 pt-6">
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
