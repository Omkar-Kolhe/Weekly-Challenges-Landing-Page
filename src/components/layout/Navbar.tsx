"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Gold Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-200 via-[#eab308] to-yellow-600 z-[60]" />
      
      <header
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-300 font-mono ${
          isScrolled ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/5 shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-8 h-8 relative flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full text-teal-400">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 4L4 8.5V15.5L12 20L20 15.5V8.5L12 4Z" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
              </svg>
            </div>
            <span className="font-bold text-[15px] tracking-[0.2em] text-white">
              TSEC CODECELL<span className="animate-pulse opacity-80">_</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-[13px] font-bold tracking-[0.15em] text-[#bef264] hover:text-[#bef264]/80 transition-colors"
            >
              HOME
            </Link>
            <div className="relative group flex items-center gap-1 cursor-pointer text-[13px] font-bold tracking-[0.15em] text-[#eab308]">
              <span className="border-b border-[#eab308] pb-1">EVENTS</span>
              <ChevronDown className="w-4 h-4 mb-1" />
            </div>
            <Link
              href="#about"
              className="text-[13px] font-bold tracking-[0.15em] text-white hover:text-white/80 transition-colors"
            >
              ABOUT US
            </Link>
          </nav>

          {/* Right CTA */}
          <div className="hidden md:block">
            <Link href="#login" className="px-6 py-2.5 border border-teal-500/30 bg-teal-500/5 text-teal-400 hover:bg-teal-500/10 transition-all font-bold text-[13px] tracking-widest flex items-center gap-2">
              [ LOGIN ]
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#050505] border-b border-white/10 overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-6">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-[13px] font-bold tracking-[0.15em] text-[#bef264]"
                >
                  HOME
                </Link>
                <div className="text-[13px] font-bold tracking-[0.15em] text-[#eab308] flex items-center gap-1">
                  EVENTS <ChevronDown className="w-4 h-4" />
                </div>
                <Link
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="text-[13px] font-bold tracking-[0.15em] text-white"
                >
                  ABOUT US
                </Link>
                <Link 
                  href="#login" 
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-6 py-3 text-center border border-teal-500/30 bg-teal-500/5 text-teal-400 font-bold text-[13px] tracking-widest"
                >
                  [ LOGIN ]
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
