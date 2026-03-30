"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const info = [
    {
      icon: <FaPhoneAlt className="text-primary w-5 h-5" />,
      title: "Phone",
      description: "TBA",
    },
    {
      icon: <FaEnvelope className="text-primary w-5 h-5" />,
      title: "Email",
      description: "contact@zubaer.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-primary w-5 h-5" />,
      title: "Address",
      description: "Dhaka, Bangladesh",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      <Header />

      <main className="container max-w-7xl mx-auto px-4 flex-1 flex items-center justify-center py-20 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[100px] items-center w-full">
          
          {/* Left Column / Form Box */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 md:p-12 rounded-3xl w-full lg:w-[55%] xl:w-[60%] order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-[44px] tracking-tight font-bold text-primary mb-6">
              Let&apos;s work together
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md text-[15px]">
              Send your message, and I&apos;ll get back to you as soon as possible. Looking forward to connecting!
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="First name" 
                  className="w-full bg-background border-0 outline-none focus:ring-1 focus:ring-primary rounded-lg px-5 py-[14px] text-sm transition-all"
                />
                <input 
                  type="text" 
                  placeholder="Last name" 
                  className="w-full bg-background border-0 outline-none focus:ring-1 focus:ring-primary rounded-lg px-5 py-[14px] text-sm transition-all"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-background border-0 outline-none focus:ring-1 focus:ring-primary rounded-lg px-5 py-[14px] text-sm transition-all"
                />
                <input 
                  type="tel" 
                  placeholder="Phone number" 
                  className="w-full bg-background border-0 outline-none focus:ring-1 focus:ring-primary rounded-lg px-5 py-[14px] text-sm transition-all"
                />
              </div>
              <textarea 
                placeholder="Type your message here..." 
                rows={7}
                className="w-full bg-background border-0 outline-none focus:ring-1 focus:ring-primary rounded-lg px-5 py-4 text-sm transition-all resize-none"
              ></textarea>
              
              <Button type="submit" className="h-[48px] px-8 rounded-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90 mt-2 text-[15px]">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Right Column / Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-10 lg:pl-4 w-full lg:w-[45%] xl:w-[40%] order-1 lg:order-2"
          >
            {info.map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="w-[72px] h-[72px] rounded-md bg-card flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-muted-foreground text-[14px] font-medium mb-1">
                    {item.title}
                  </p>
                  <p className="text-lg md:text-xl font-medium tracking-wide">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </main>
    </div>
  );
}
