// "use client";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-6 md:px-16 py-8">
//       <Link href="/" className="text-xl font-bold tracking-tighter text-white">
//         ANAS <span className="text-zinc-500">.</span>
//       </Link>

//       <div className="hidden md:flex items-center gap-10">
//         {["Works", "Process", "Reviews", "FAQ"].map((item) => (
//           <Link
//             key={item}
//             href={`#${item.toLowerCase()}`}
//             className="text-[11px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
//           >
//             {item}
//           </Link>
//         ))}
//       </div>

//       <Link
//         href="#contact"
//         className="relative group overflow-hidden px-8 py-3 rounded-full border border-white/20 text-[12px] font-bold uppercase tracking-tight text-white transition-all duration-500"
//       >
//         {/* 1. Shine Sweep Effect */}
//         <span className="absolute inset-0 flex justify-center">
//           <span className="relative h-full w-10 bg-white/30 blur-[15px] -skew-x-[45deg] -translate-x-[300%] group-hover:translate-x-[300%] transition-transform duration-700 ease-in-out" />
//         </span>

//         {/* 2. Gradient Hover Background */}
//         <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(83.45deg,#33E2C5_-61.18%,#0681BF_88.98%)]" />

//         {/* 3. Button Text */}
//         <span className="relative z-10 group-hover:text-white transition-colors duration-500">
//           Let&apos;s Talk
//         </span>
//       </Link>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 50px-ൽ കൂടുതൽ സ്ക്രോൾ ചെയ്താൽ ബാക്ക്ഗ്രൗണ്ട് മാറ്റും
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        {["Works", "Process", "Reviews", "FAQ"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[11px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* BUTTON */}
      <a
        href="tel:9645016304"
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
