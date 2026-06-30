"use client";

import Link from "next/link";
import { MessageCircle, Twitter, Instagram, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] text-[#8A8A8A] font-mono border-t border-[#1A1A1A]">
      {/* Top Gradient Border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#4ade80] to-[#eab308]" />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 mb-10">
          
          {/* Column 1: Branding */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
            <div className="w-10 h-10 relative flex items-center justify-center mb-2">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full text-teal-400">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 4L4 8.5V15.5L12 20L20 15.5V8.5L12 4Z" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
              </svg>
              <div className="text-[7px] text-teal-400 font-bold tracking-widest z-10 text-center leading-tight">
                TSEC
              </div>
            </div>
            <h3 className="text-white font-bold tracking-[0.2em] text-[13px] uppercase">
              TSEC CODECELL
            </h3>
            <p className="text-[13px] leading-relaxed opacity-60">
              // where tsec students<br />
              ship production code
            </p>
            <div className="text-[#4ade80] text-[11px] font-bold tracking-widest mt-2">
              [ SECURE SHELL V2.0 ]
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="col-span-1 flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-[0.2em] text-[11px] uppercase">
              Explore
            </h4>
            <ul className="space-y-4 text-[13px]">
              <li><Link href="#" className="hover:text-white transition-colors">Events Hub</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Weekly Challenges</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">TSEC Hacks</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="col-span-1 flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-[0.2em] text-[11px] uppercase">
              Connect
            </h4>
            <div className="flex gap-2">
              {[MessageCircle, Twitter, Instagram, FileText].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 border border-[#1A1A1A] bg-[#0A0D10] flex items-center justify-center hover:bg-[#111] hover:border-[#2A2A2A] transition-all">
                  <Icon size={16} className="opacity-70" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Legal */}
          <div className="col-span-1 flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-[0.2em] text-[11px] uppercase">
              Legal
            </h4>
            <ul className="space-y-4 text-[13px]">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Sandbox</Link></li>
            </ul>
            <div className="mt-8 text-[11px] opacity-40 tracking-widest">
              VER: 2026.06.01
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1A1A1A] py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border border-[#2A2A2A] bg-[#0A0D10] flex items-center justify-center">
              <span className="text-white text-xs font-bold">N</span>
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase opacity-50">
              TSEC CODECELL © 2026
            </span>
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase opacity-70 flex items-center gap-2">
            BUILT WITH <span className="text-pink-500 text-sm">♥</span> + {"{}"}
          </div>
        </div>
      </div>
    </footer>
  );
}
