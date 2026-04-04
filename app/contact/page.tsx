"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "sonner";
import { sendEmail } from "@/app/actions/sendEmail";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  const info = [
    {
      icon: <FaPhoneAlt className="text-primary w-5 h-5" />,
      title: "Phone",
      description: "(+880) 1770 288769",
    },
    {
      icon: <FaEnvelope className="text-primary w-5 h-5" />,
      title: "Email",
      description: "zubaer.rahman.cse@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-primary w-5 h-5" />,
      title: "Address",
      description: "Banani, Dhaka, Bangladesh",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    const formData = new FormData(form);
    try {
      const result = await sendEmail(formData);

      if (result.success) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error(result.error || "Failed to send message.");
      }
    } catch (err: any) {
      toast.error("An unexpected error occurred.");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      <Header />

      <main className="container max-w-7xl mx-auto px-4 flex-1 flex flex-col py-20 lg:py-10">
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

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  name="firstname"
                  type="text" 
                  required
                  placeholder="First name" 
                  className="w-full bg-background border-0 outline-none focus:ring-1 focus:ring-primary rounded-lg px-5 py-[14px] text-sm transition-all"
                />
                <input 
                  name="lastname"
                  type="text" 
                  required
                  placeholder="Last name" 
                  className="w-full bg-background border-0 outline-none focus:ring-1 focus:ring-primary rounded-lg px-5 py-[14px] text-sm transition-all"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  name="email"
                  type="email" 
                  required
                  placeholder="Email address" 
                  className="w-full bg-background border-0 outline-none focus:ring-1 focus:ring-primary rounded-lg px-5 py-[14px] text-sm transition-all"
                />
                <input 
                  name="phone"
                  type="tel" 
                  placeholder="Phone number" 
                  className="w-full bg-background border-0 outline-none focus:ring-1 focus:ring-primary rounded-lg px-5 py-[14px] text-sm transition-all"
                />
              </div>
              <textarea 
                name="message"
                required
                placeholder="Type your message here..." 
                rows={7}
                className="w-full bg-background border-0 outline-none focus:ring-1 focus:ring-primary rounded-lg px-5 py-4 text-sm transition-all resize-none"
              ></textarea>
              
              <Button 
                type="submit" 
                disabled={status !== "idle"}
                className="h-[48px] px-10 rounded-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90 mt-2 text-[15px] transition-all disabled:opacity-50"
              >
                {status === "idle" ? "Send Message" : "Sending..."}
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
