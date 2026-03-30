"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { MoveDownRight, MoveRight } from "lucide-react";
import Link from "next/link";

const serviceList = [
  {
    num: "01",
    title: "Backend Development",
    description: "I build scalable, high-performance backend systems using microservices, ensuring reliability under heavy loads.",
    href: "#",
  },
  {
    num: "02",
    title: "Android Development",
    description: "With five years in Native Android, I've built optimized, high-performance mobile apps using Kotlin.",
    href: "#",
  },
  {
    num: "03",
    title: "DevOps",
    description: "I automate CI/CD, streamline deployments, and optimize cloud infrastructure for scalability and reliability.",
    href: "#",
  },
  {
    num: "04",
    title: "System Administration",
    description: "I manage and optimize cloud/on-prem infrastructure, ensuring security, performance, and high availability.",
    href: "#",
  },
];

export default function Expertise() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      <Header />

      <main className="container max-w-7xl mx-auto px-4 flex-1 flex flex-col justify-center py-20 lg:py-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] xl:gap-[80px]"
        >
          {serviceList.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1 flex flex-col justify-center gap-6 group border-b border-white/20 pb-10"
            >
              {/* Top part / Number & Arrow */}
              <div className="w-full flex justify-between items-center">
                <div 
                  className="text-5xl font-extrabold text-transparent transition-all duration-500 [-webkit-text-stroke:1px_#f0f0f0] group-hover:[-webkit-text-stroke:1px_#00ff99]"
                >
                  {service.num}
                </div>
                <Link 
                  href={service.href} 
                  className="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center transition-all duration-500 group-hover:bg-primary hover:-rotate-45"
                >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-secondary text-3xl transition-all duration-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z"></path>
                  </svg>
                </Link>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-[42px] font-bold leading-none transition-all duration-500 text-white group-hover:text-primary">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-muted-foreground text-[16px] md:text-[17px] leading-relaxed xl:max-w-md">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
