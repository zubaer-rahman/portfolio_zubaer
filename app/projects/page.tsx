"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { FaGitlab, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Toffee",
    description: "I improved video streaming quality and app performance by 30% through focused code refactoring and cleanup. I integrated Firebase, Mixpanel, Adjust, and Facebook analytics to gather user insights, and built a Customer Feedback Loop (CFL) to enhance engagement and retention.",
    stack: ["Java", "Kotlin", "XML", "Retrofit", "Dagger-Hilt", "Live Data", "EXO Player", "MVVM", "Gradle"],
    image: "/toffee.png",
    links: { external: "#", repo: "#" },
  },
  {
    num: "02",
    title: "Fintech Wallet",
    description: "Developed a secure, high-performance digital wallet application featuring real-time transaction tracking, multi-currency support, and biometric authentication. Focused on data encryption and seamless banking integrations for a frictionless user experience.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Prisma", "Docker", "Stripe"],
    image: "/toffee.png", // Reusing image as per "dummy" request
    links: { external: "#", repo: "#" },
  }
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const nextProject = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      <Header />

      <main className="container max-w-7xl mx-auto px-4 flex-1 flex items-center justify-center py-20 xl:py-10">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-[80px] items-center w-full">
          
          {/* Left: Project Details */}
          <motion.div 
            key={`details-${index}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full xl:w-[50%] flex flex-col gap-6 order-2 xl:order-1"
          >
            {/* Project Number (Outline text) */}
            <div className="text-8xl md:text-[120px] leading-none font-extrabold text-transparent" style={{ WebkitTextStroke: '1px #f0f0f0' }}>
              {project.num}
            </div>

            {/* Title */}
            <h2 className="text-[44px] sm:text-7xl font-bold text-white transition-all duration-500 capitalize leading-none mb-2">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed text-[16px] xl:max-w-md">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-primary font-semibold text-[15px] mt-2 mb-2 line-height-relaxed">
              {project.stack.map((item, i) => (
                <span key={i} className="flex items-center">
                  {item}
                  {i < project.stack.length - 1 && <span className="text-white/30 ml-3">|</span>}
                </span>
              ))}
            </div>

            {/* Separator Line */}
            <div className="border-b border-white/20 w-full mb-6"></div>

            {/* Links */}
            <div className="flex items-center gap-4">
              <Link 
                href={project.links.external}
                className="w-20 h-20 rounded-full bg-card inline-flex items-center justify-center group hover:bg-primary transition-all duration-300 border border-white/5"
              >
                <ArrowUpRight className="text-white w-10 h-10 group-hover:rotate-45 transition-all duration-300" strokeWidth={2.5} />
              </Link>
              <Link 
                href={project.links.repo}
                className="w-20 h-20 rounded-full bg-card inline-flex items-center justify-center group hover:bg-primary transition-all duration-300 border border-white/5"
              >
                <FaGitlab className="text-white text-[40px] group-hover:scale-110 transition-all duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Project Image & Nav */}
          <div className="w-full xl:w-[50%] flex flex-col gap-6 order-1 xl:order-2">
            <motion.div 
              key={`image-${index}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-[1.3/1] bg-card/40 rounded-2xl overflow-hidden group border border-white/5"
            >
               <Image 
                 src={project.image}
                 alt={project.title}
                 fill
                 className="object-cover group-hover:scale-105 transition-all duration-700"
               />
            </motion.div>

            {/* Slider Nav Buttons */}
            <div className="flex justify-center xl:justify-end gap-3 mt-4">
               <Button 
                onClick={prevProject}
                className="w-[60px] h-[60px] rounded-sm bg-card hover:bg-card/80 transition-all text-white p-0 shadow-xl border border-white/5"
               >
                  <ChevronLeft className="w-8 h-8" />
               </Button>
               <Button 
                onClick={nextProject}
                className="w-[60px] h-[60px] rounded-sm bg-primary hover:bg-primary/90 transition-all text-primary-foreground p-0 shadow-xl border border-white/5"
               >
                  <ChevronRight className="w-8 h-8" />
               </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
