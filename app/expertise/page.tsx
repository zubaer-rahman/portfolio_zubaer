"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const serviceList = [
  {
    num: "01",
    title: "Frontend Development",
    description: "I specialize in building visually stunning, high-performance user interfaces with a focus on seamless interactions and responsive design across all devices.",
    href: "#",
  },
  {
    num: "02",
    title: "Backend Development",
    description: "I design and implement robust, scalable server-side architectures and efficient database systems that power modern web applications with speed and security.",
    href: "#",
  },
];

export default function Expertise() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      <Header />

      <main className="container max-w-7xl mx-auto px-4 flex-1 flex flex-col py-20 lg:py-10">
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
                  className="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center group/arrow transition-all duration-500 hover:bg-primary"
                >
                  <ArrowUpRight className="text-secondary text-4xl transform transition-transform duration-500 group-hover/arrow:rotate-45" />
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
