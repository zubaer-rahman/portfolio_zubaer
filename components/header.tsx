"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Expertise", path: "/expertise" },
  { name: "Resume", path: "/resume" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container max-w-7xl mx-auto px-4 py-12 flex items-center justify-between relative z-50 transition-all">
      <Link href="/" aria-label="Home">
        <div className="text-3xl font-bold tracking-tighter hover:text-primary transition-colors">
          Zubaer<span className="text-primary">.</span>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10">
        <nav className="flex items-center space-x-10 text-[17px] font-medium" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = link.path === pathname;
            return (
              <Link
                href={link.path}
                key={link.name}
                aria-current={isActive ? "page" : undefined}
                className={`${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "hover:text-primary"
                } transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <Link href="/contact" aria-label="Hire Md Zubaer Rahman">
          <Button className="h-12 rounded-full px-8 font-semibold bg-primary text-primary-foreground hover:bg-primary/90 text-[15px] transition-all">
            Hire me
          </Button>
        </Link>
      </div>

      {/* Mobile Nav Toggle */}
      <button 
        className="md:hidden text-primary p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[100px] left-0 right-0 p-6 bg-card/98 border border-white/10 rounded-2xl md:hidden z-50 shadow-2xl backdrop-blur-md mx-4"
          >
            <nav className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => {
                const isActive = link.path === pathname;
                return (
                  <Link
                    href={link.path}
                    key={link.name}
                    onClick={() => setIsOpen(false)}
                    className={`${
                      isActive ? "text-primary font-bold" : "text-foreground"
                    } text-xl font-medium py-3 hover:text-primary transition-all`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full">
                <Button className="w-full h-14 rounded-full font-bold bg-primary text-primary-foreground text-lg shadow-lg">
                  Hire me
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
