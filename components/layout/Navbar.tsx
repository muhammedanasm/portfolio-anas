"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  console.log("test");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "/work" },
    {
      name: "Services",
      href: "#",
      submenu: [
        { name: "Premium Web Design", href: "/services/premium-web-design" },
        // { name: "E-commerce Solutions", href: "/services/ecommerce-solutions" },
        // { name: "SEO Optimization", href: "/services/seo-optimization" },
      ],
    },
    { name: "Process", href: "/#process" },
    { name: "Reviews", href: "/#reviews" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] flex justify-between items-center px-6 md:px-16 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "py-4 bg-black/40 backdrop-blur-lg border-b border-white/5 shadow-2xl"
          : "py-8 bg-transparent border-b border-transparent"
      }`}
    >
      {/* LOGO */}
      <Link href="/" className="text-xl font-bold tracking-tighter text-white">
        ANAS <span className="text-zinc-500">.</span>
      </Link>

      {/* NAV LINKS */}
      <div className="hidden md:flex items-center gap-10">
        {/* {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-[11px] uppercase tracking-widest transition-colors duration-300 ${
              pathname === link.href
                ? "text-white font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {link.name}
          </Link>
        ))} */}
        {navLinks.map((link) => (
          <div
            key={link.name}
            className="relative group"
            onMouseEnter={() => link.submenu && setIsServicesOpen(true)}
            onMouseLeave={() => link.submenu && setIsServicesOpen(false)}
          >
            {link.submenu ? (
              // സർവീസ് Dropdown ലിങ്ക്
              <div className="flex items-center gap-1 cursor-default">
                <span
                  className={`text-[11px] uppercase tracking-widest transition-colors duration-300 ${
                    pathname.includes("/services")
                      ? "text-white font-bold"
                      : "text-zinc-400 group-hover:text-white"
                  }`}
                >
                  {link.name}
                </span>
                <ChevronDown
                  size={12}
                  className={`text-zinc-400 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                />

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full -left-4 pt-4 transition-all duration-300 ${isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}
                >
                  <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 p-2 rounded-lg w-56 shadow-2xl">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // സാധാരണ ലിങ്കുകൾ
              <Link
                href={link.href}
                className={`text-[11px] uppercase tracking-widest transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-white font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <a
        href="tel:+919645016304"
        className="relative group overflow-hidden px-8 py-3 rounded-full border border-white/20 text-[12px] font-bold uppercase tracking-tight text-white transition-all duration-500 cursor-pointer"
      >
        {/* 1. Shine Sweep Effect */}
        <span className="absolute inset-0 flex justify-center">
          <span className="relative h-full w-10 bg-white/30 blur-[15px] -skew-x-[45deg] -translate-x-[300%] group-hover:translate-x-[300%] transition-transform duration-700 ease-in-out" />
        </span>

        {/* 2. Gradient Hover Background */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(83.45deg,#33E2C5_-61.18%,#0681BF_88.98%)]" />

        {/* 3. Button Text */}
        <span className="relative z-10 group-hover:text-white transition-colors duration-500">
          Let&apos;s Talk
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
