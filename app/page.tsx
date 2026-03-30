"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="container max-w-7xl mx-auto px-4 flex-1 flex flex-col justify-center py-20 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between w-full">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 w-full lg:w-[55%] xl:w-[60%]"
          >
            <h3 className="text-xl md:text-2xl font-medium tracking-wide">Hello I&apos;m</h3>
            <h1 className="text-[42px] sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-primary tracking-tight md:whitespace-nowrap">
              Saad Ahmed
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold opacity-90 tracking-wide">
              Software Engineer
            </h2>
            <p className="max-w-md text-muted-foreground leading-relaxed">
              I am a Backend Developer, the architect of the digital realm, and the guardian of data integrity.
              With a deep passion for coding, I transform complex algorithms and databases into seamless, user-friendly experiences.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Button variant="outline" className="h-12 px-8 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-widest font-semibold group border-2">
                Download CV <Download className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <div className="flex gap-4">
                {[FaGithub, FaLinkedin, FaTwitter, FaFacebook].map((Icon, i) => (
                  <Link 
                    key={i} 
                    href="#" 
                    className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column / Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end h-full min-h-[400px] w-full lg:w-[45%] xl:w-[40%]"
          >
            <div className="relative w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]">
              
              {/* Profile Image - Safely mapped inner circle box exactly blocking overflow past the SVG path. Inner photo explicitly retains full original height proportionally, shifting left inside. */}
              <div className="absolute inset-[0.6%] rounded-full overflow-hidden z-20">
                <Image 
                  src="/profile.png" 
                  alt="Saad Ahmed" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain -translate-x-2 scale-105"
                  priority
                />
                {/* Lighting Effect: Darkens the left side to simulate a light source striking from the right */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Rotating SVG Dashed Circle - Anchored perfectly underneath as the bounding stroke contour */}
              <motion.svg 
                className="absolute inset-0 w-full h-full text-primary z-10 pointer-events-none"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.circle
                  cx="253"
                  cy="253"
                  r="250"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ strokeDasharray: "24 10 0 0" }}
                  animate={{ 
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate: [120, 360],
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    repeatType: "reverse"
                  }}
                />
              </motion.svg>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {[
            { value: "7", label: "Years of experience" },
            { value: "27", label: "Projects completed" },
            { value: "4", label: "Technologies mastered" },
            { value: "7,800", label: "Code commits" }
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-5xl md:text-6xl font-black text-white">{stat.value}</span>
              <span className="text-sm text-muted-foreground font-medium max-w-[100px] leading-tight block">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
