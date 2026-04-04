"use client";

import { useState, useRef } from "react";
import { Header } from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";

// Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    num: "01",
    title: "U-Send Fulfillment",
    category: "Professional Project",
    description: "I optimized dashboard usability and system performance by developing high-fidelity interfaces for complex data visualization, tracking, and order management. I streamlined intricate user flows to create a seamless and highly efficient fulfillment experience that improved overall operational efficiency.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Stripe", "Shopify Admin API", "17Track"],
    image: "/projects/u-send_fulfillment.png",
    links: { external: "https://www.u-sendfulfillment.com/", repo: "#" },
  },
  {
    num: "02",
    title: "Kindora",
    category: "Personal Project",
    description: "I developed a high-performance platform connecting socially conscious individuals with impact-driven organizations through algorithmic matching. It streamlines engagement with real-time activity tracking and specialized dashboards, providing a seamless and highly efficient cross-platform experience.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL (Supabase)", "MongoDB", "Redis (Upstash)", "Tailwind CSS", "Prisma", "tRPC", "Zod", "Cloudinary"],
    image: "/projects/kindora.png",
    links: { external: "https://kindora-teal.vercel.app/", repo: "https://github.com/zubaer-rahman/kindora" },
  }
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const project = projects[index];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => setIndex(newIndex),
    draggable: true,
    easing: "ease-in-out",
  };

  const isFirst = index === 0;
  const isLast = index === projects.length - 1;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      <Header />

      <main className="container max-w-7xl mx-auto px-4 flex-1 flex flex-col py-20 lg:py-10">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-[80px] items-start w-full">
          
          {/* Left: Project Details */}
          <div className="w-full xl:w-[50%] flex flex-col order-2 xl:order-1 min-h-[460px]">
            <div className="flex flex-col flex-1 justify-between">
              {/* Static Project Details */}
              <div className="flex flex-col gap-5">
                <div className="text-7xl md:text-[100px] leading-none font-extrabold text-transparent" style={{ WebkitTextStroke: '1px #f0f0f0' }}>
                  {project.num}
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,153,0.8)]" />
                      <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-[36px] sm:text-5xl font-bold text-white transition-all duration-500 capitalize leading-none">
                    {project.title}
                  </h2>
                </div>
                <div className="min-h-[140px]">
                  <p className="text-muted-foreground leading-relaxed text-[16.5px] xl:max-w-md pt-1">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-primary font-bold text-[15.5px] pt-4">
                  {project.stack.map((item, i) => (
                    <span key={i} className="flex items-center">
                      {item}
                      {i < project.stack.length - 1 && <span className="text-white/30 ml-2">|</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* Symmetrical Divider Gaps */}
              <div className="py-8">
                <div className="border-b border-white/20 w-full"></div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <Link 
                  href={project.links.external} 
                  target={project.links.external !== "#" ? "_blank" : undefined}
                  rel={project.links.external !== "#" ? "noopener noreferrer" : undefined}
                  className={`w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group transition-all duration-300 ${project.links.external === "#" ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-white text-3xl group-hover:text-primary transition-all duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </Link>
                <Link 
                  href={project.links.repo} 
                  target={project.links.repo !== "#" ? "_blank" : undefined}
                  rel={project.links.repo !== "#" ? "noopener noreferrer" : undefined}
                  className={`w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group transition-all duration-300 ${project.links.repo === "#" ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-white text-3xl group-hover:text-primary transition-all duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                    <path d="M7 8l0 8"></path>
                    <path d="M9 18h6a2 2 0 0 0 2 -2v-5"></path>
                    <path d="M14 14l3 -3l3 3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Project Image & Nav */}
          <div className="w-full xl:w-[50%] flex flex-col gap-6 order-1 xl:order-2 relative">
            <div className="bg-transparent rounded-2xl relative aspect-[1.3/1] cursor-grab active:cursor-grabbing">
              <Slider ref={sliderRef} {...settings} className="h-full project-slider">
                {projects.map((proj, i) => (
                  <div key={i} className="px-1 focus:outline-none">
                    <div className="relative aspect-[1.3/1] overflow-hidden rounded-2xl border border-white/10">
                      <Image 
                        src={proj.image} 
                        alt={proj.title} 
                        fill 
                        className="object-cover rounded-2xl" 
                        priority={i === 0}
                      />
                    </div>
                  </div>
                ))}
              </Slider>

              {/* Mobile Nav Overlay */}
              <div className="xl:hidden absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10">
                <button 
                  onClick={() => sliderRef.current?.slickPrev()} 
                  disabled={isFirst}
                  className={`bg-primary/80 text-primary-foreground w-11 h-11 rounded-full flex justify-center items-center pointer-events-auto transition-all ${isFirst ? "opacity-30 cursor-not-allowed" : "hover:bg-primary shadow-xl"}`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => sliderRef.current?.slickNext()}
                  disabled={isLast}
                  className={`bg-primary/80 text-primary-foreground w-11 h-11 rounded-full flex justify-center items-center pointer-events-auto transition-all ${isLast ? "opacity-30 cursor-not-allowed" : "hover:bg-primary shadow-xl"}`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Desktop Nav Buttons */}
            <div className="hidden xl:flex justify-center xl:justify-end gap-3 mt-4">
               <button 
                onClick={() => sliderRef.current?.slickPrev()}
                className={`bg-primary text-primary-foreground text-[22px] w-[44px] h-[44px] rounded-[5px] flex justify-center items-center transition-all ${isFirst ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/90 shadow-lg"}`}
               >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path>
                  </svg>
               </button>
               <button 
                onClick={() => sliderRef.current?.slickNext()}
                className={`bg-primary text-primary-foreground text-[22px] w-[44px] h-[44px] rounded-[5px] flex justify-center items-center transition-all ${isLast ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/90 shadow-lg"}`}
               >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
                  </svg>
               </button>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .project-slider .slick-list {
          overflow: hidden;
          margin: 0 -8px;
        }
        .project-slider .slick-slide {
          padding: 0 8px;
        }
        .project-slider .slick-track {
          display: flex !important;
          align-items: center !important;
        }
      `}</style>
    </div>
  );
}
