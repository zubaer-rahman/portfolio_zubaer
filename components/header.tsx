"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Expertise", path: "/expertise" },
  { name: "Resume", path: "/resume" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="container max-w-7xl mx-auto px-4 py-12 flex items-center justify-between">
      <Link href="/">
        <div className="text-3xl font-bold tracking-tighter">
          Saad<span className="text-primary">.</span>
        </div>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <nav className="flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = link.path === pathname;
            return (
              <Link
                href={link.path}
                key={link.name}
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
        <Link href="/contact">
          <Button className="h-12 rounded-full px-8 font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
            Hire me
          </Button>
        </Link>
      </div>
    </header>
  );
}
