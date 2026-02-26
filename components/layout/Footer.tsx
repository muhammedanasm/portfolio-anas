"use client";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* LEFT: BRAND & COPYRIGHT */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold tracking-tighter uppercase">
              ANAS<span className="text-zinc-600">.</span>
            </span>
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
              © {currentYear} All Rights Reserved
            </p>
          </div>

          {/* CENTER: SOCIAL LINKS */}
          <div className="flex items-center gap-8">
            <a
              href="https://www.linkedin.com/in/muhammedanasm/"
              target="_blank"
              className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-all duration-300"
            >
              <Linkedin
                size={16}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-[10px] uppercase tracking-widest hidden md:block">
                LinkedIn
              </span>
            </a>

            <a
              href="https://www.instagram.com/anasmk_07/"
              target="_blank"
              className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-all duration-300"
            >
              <Instagram
                size={16}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-[10px] uppercase tracking-widest hidden md:block">
                Instagram
              </span>
            </a>

            <a
              href="https://wa.me/919645016304"
              target="_blank"
              className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-all duration-300"
            >
              <MessageCircle
                size={16}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-[10px] uppercase tracking-widest hidden md:block">
                WhatsApp
              </span>
            </a>
          </div>

          {/* RIGHT: TECH CREDITS */}
          <div className="md:text-right">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest leading-relaxed">
              Based in Kerala, India <br />
              <span className="text-zinc-500">Available Worldwide</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
