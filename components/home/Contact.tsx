// "use client";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ChevronDown } from "lucide-react";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const countries = [
//   { name: "India", code: "+91", flag: "🇮🇳", currency: "₹" },
//   { name: "United Arab Emirates", code: "+971", flag: "🇦🇪", currency: "AED" },
//   { name: "Canada", code: "+1", flag: "🇨🇦", currency: "$" },
//   { name: "United States", code: "+1", flag: "🇺🇸", currency: "$" },
//   { name: "United Kingdom", code: "+44", flag: "🇬🇧", currency: "£" },
// ];

// const services = [
//   "Bespoke Web Design",
//   "Next.js Development",
//   "UI/UX Design",
//   "Motion Engineering (GSAP)",
//   "Full Digital Solution",
// ];

// const Contact = () => {
//   const [selectedCountry, setSelectedCountry] = useState(countries[0]);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".contact-anim", {
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   // ഡൈനാമിക് ആയി പ്രൈസ് റേഞ്ച് സെറ്റ് ചെയ്യുന്നു
//   const getPriceRanges = () => {
//     const symbol = selectedCountry.currency;
//     if (symbol === "₹") {
//       return ["₹50k - ₹1L", "₹1L - ₹3L", "₹3L+"];
//     } else if (symbol === "AED") {
//       return ["5k - 10k AED", "10k - 25k AED", "25k+ AED"];
//     } else {
//       return ["$2k - $5k", "$5k - $10k", "$10k+"];
//     }
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="contact"
//       className="py-24 md:py-40 bg-[#050505] text-white overflow-hidden border-t border-zinc-900"
//     >
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
//         {/* LEFT SIDE - TEXT */}
//         <div className="contact-anim">
//           <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 block mb-6 italic">
//             Contact
//           </span>
//           <h2 className="text-6xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.85] mb-10">
//             Let&apos;s
//             <span className="text-zinc-700 pl-2 font-light">Talk</span>
//           </h2>
//           <p className="max-w-sm text-zinc-500 text-lg font-light leading-relaxed">
//             Have a project in mind? Let’s collaborate to build something
//             exceptional. I typically respond within 24 hours.
//           </p>

//           <div className="mt-12 space-y-4">
//             {/* EMAIL LINK */}
//             <a
//               href="mailto:anasmanasm459@gmail.com"
//               className="text-sm text-zinc-400 font-mono block hover:text-white transition-colors duration-300"
//             >
//               anasmanasm459@gmail.com
//             </a>

//             {/* PHONE LINK */}
//             <a
//               href="tel:+919645016304"
//               className="text-sm text-zinc-400 font-mono block hover:text-white transition-colors duration-300"
//             >
//               +91 9645 016 304
//             </a>
//           </div>
//         </div>

//         {/* RIGHT SIDE - FORM */}
//         <div className="contact-anim bg-zinc-900/20 p-8 md:p-12 rounded-sm border border-zinc-900">
//           <form className="space-y-10">
//             {/* NAME & EMAIL */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//               <div className="relative group">
//                 <input
//                   type="text"
//                   placeholder="YOUR NAME"
//                   className="w-full bg-transparent border-b border-zinc-800 py-4 text-sm focus:border-white outline-none transition-all placeholder:text-zinc-700"
//                 />
//               </div>
//               <div className="relative group">
//                 <input
//                   type="email"
//                   placeholder="EMAIL ADDRESS"
//                   className="w-full bg-transparent border-b border-zinc-800 py-4 text-sm focus:border-white outline-none transition-all placeholder:text-zinc-700"
//                 />
//               </div>
//             </div>

//             {/* PHONE WITH COUNTRY SELECT */}
//             <div className="flex flex-col md:flex-row gap-10">
//               <div className="relative w-full md:w-1/3">
//                 <select
//                   onChange={(e) =>
//                     setSelectedCountry(
//                       countries.find((c) => c.code === e.target.value) ||
//                         countries[0],
//                     )
//                   }
//                   className="w-full bg-transparent border-b border-zinc-800 py-4 text-sm outline-none appearance-none cursor-pointer focus:border-white transition-all"
//                 >
//                   {countries.map((c) => (
//                     <option
//                       key={c.name}
//                       value={c.code}
//                       className="bg-black text-white"
//                     >
//                       {c.flag} {c.code}
//                     </option>
//                   ))}
//                 </select>
//                 <ChevronDown className="absolute right-0 top-5 w-4 h-4 text-zinc-600 pointer-events-none" />
//               </div>
//               <input
//                 type="tel"
//                 placeholder="PHONE NUMBER"
//                 className="w-full bg-transparent border-b border-zinc-800 py-4 text-sm focus:border-white outline-none transition-all placeholder:text-zinc-700"
//               />
//             </div>

//             {/* SERVICE & PRICE SELECT */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//               <div className="relative">
//                 <select className="w-full bg-transparent border-b border-zinc-800 py-4 text-sm outline-none appearance-none cursor-pointer focus:border-white transition-all text-zinc-400">
//                   <option className="bg-black">SELECT SERVICE</option>
//                   {services.map((s) => (
//                     <option key={s} className="bg-black">
//                       {s}
//                     </option>
//                   ))}
//                 </select>
//                 <ChevronDown className="absolute right-0 top-5 w-4 h-4 text-zinc-600 pointer-events-none" />
//               </div>

//               <div className="relative">
//                 <select className="w-full bg-transparent border-b border-zinc-800 py-4 text-sm outline-none appearance-none cursor-pointer focus:border-white transition-all text-zinc-400">
//                   <option className="bg-black">EXPECTED BUDGET</option>
//                   {getPriceRanges().map((p) => (
//                     <option key={p} className="bg-black">
//                       {p}
//                     </option>
//                   ))}
//                 </select>
//                 <ChevronDown className="absolute right-0 top-5 w-4 h-4 text-zinc-600 pointer-events-none" />
//               </div>
//             </div>

//             {/* MESSAGE */}
//             <div className="relative">
//               <textarea
//                 rows={4}
//                 placeholder="TELL ME ABOUT YOUR PROJECT"
//                 className="w-full bg-transparent border-b border-zinc-800 py-4 text-sm focus:border-white outline-none transition-all placeholder:text-zinc-700 resize-none"
//               ></textarea>
//             </div>

//             {/* SUBMIT BUTTON (Premium Style) */}
//             <button className="group relative w-full overflow-hidden border border-zinc-800 py-6 rounded-full transition-all duration-500 hover:border-white">
//               <span className="relative z-10 text-xs font-bold tracking-[0.3em] uppercase transition-colors duration-500 group-hover:text-black">
//                 Send Inquiry
//               </span>
//               <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 1. ZOD SCHEMA DEFINITION
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Valid phone number is required"),
  countryCode: z.string(),
  service: z.string().refine((val) => val !== "SELECT SERVICE", {
    message: "Please select a service",
  }),
  budget: z.string().refine((val) => val !== "EXPECTED BUDGET", {
    message: "Please select a budget range",
  }),
  message: z.string().min(10, "Please provide more details (min 10 chars)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const countries = [
  { name: "India", code: "+91", flag: "🇮🇳", currency: "₹" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪", currency: "AED" },
  { name: "Canada", code: "+1", flag: "🇨🇦", currency: "$" },
  { name: "United States", code: "+1", flag: "🇺🇸", currency: "$" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧", currency: "£" },
];

const services = [
  "Bespoke Web Development",
  "High-End E-commerce Stores",
  "UI/UX & Interaction Design",
  "Brand Identity & Strategy",
  "Performance Optimization",
  "Full Digital Solution",
];

const Contact = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isSuccess, setIsSuccess] = useState(false);
  const sectionRef = useRef(null);

  // 2. REACT HOOK FORM INITIALIZATION
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      countryCode: "+91",
    },
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-anim", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const getPriceRanges = () => {
    const symbol = selectedCountry.currency;
    if (symbol === "₹") {
      return ["₹50k - ₹1L", "₹1L - ₹3L", "₹3L+"];
    } else if (symbol === "AED") {
      return ["5k - 10k AED", "10k - 25k AED", "25k+ AED"];
    } else {
      return ["$2k - $5k", "$5k - $10k", "$10k+"];
    }
  };

  // 3. FORMSPREE SUBMISSION HANDLER
  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("https://formspree.io/f/xreaowbw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-40 bg-[#050505] text-white overflow-hidden border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="contact-anim">
          <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 block mb-6 italic">
            Contact
          </span>
          <h2 className="text-6xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.85] mb-10">
            Let&apos;s
            <span className="text-zinc-700 pl-2 font-light">Talk</span>
          </h2>
          <p className="max-w-sm text-zinc-500 text-lg font-light leading-relaxed">
            Have a project in mind? Let’s collaborate to build something
            exceptional. I typically respond within 24 hours.
          </p>

          <div className="mt-12 space-y-4">
            <a
              href="mailto:anasmanasm459@gmail.com"
              className="text-sm text-zinc-400 font-mono block hover:text-white transition-colors duration-300"
            >
              anasmanasm459@gmail.com
            </a>
            <a
              href="tel:+919645016304"
              className="text-sm text-zinc-400 font-mono block hover:text-white transition-colors duration-300"
            >
              +91 9645 016 304
            </a>
          </div>
        </div>

        <div className="contact-anim bg-zinc-900/20 p-8 md:p-12 rounded-sm border border-zinc-900">
          {isSuccess ? (
            <div className="h-full flex flex-col justify-center items-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center">
                ✓
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter">
                Message Sent
              </h3>
              <p className="text-zinc-500 text-sm italic">
                Thank you for reaching out. I&apos;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              {/* NAME & EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="YOUR NAME"
                    className={`w-full bg-transparent border-b ${errors.name ? "border-red-500/50" : "border-zinc-800"} py-4 text-sm focus:border-white outline-none transition-all placeholder:text-zinc-700`}
                  />
                  {errors.name && (
                    <p className="text-[10px] text-red-500 mt-1 uppercase tracking-widest">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="relative group">
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className={`w-full bg-transparent border-b ${errors.email ? "border-red-500/50" : "border-zinc-800"} py-4 text-sm focus:border-white outline-none transition-all placeholder:text-zinc-700`}
                  />
                  {errors.email && (
                    <p className="text-[10px] text-red-500 mt-1 uppercase tracking-widest">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* PHONE WITH COUNTRY SELECT */}
              <div className="flex flex-col md:flex-row gap-10">
                <div className="relative w-full md:w-1/3">
                  <select
                    {...register("countryCode")}
                    onChange={(e) => {
                      register("countryCode").onChange(e);
                      setSelectedCountry(
                        countries.find((c) => c.code === e.target.value) ||
                          countries[0],
                      );
                    }}
                    className="w-full bg-transparent border-b border-zinc-800 py-4 text-sm outline-none appearance-none cursor-pointer focus:border-white transition-all"
                  >
                    {countries.map((c) => (
                      <option
                        key={c.name}
                        value={c.code}
                        className="bg-black text-white"
                      >
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-0 top-5 w-4 h-4 text-zinc-600 pointer-events-none" />
                </div>
                <div className="relative w-full">
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="PHONE NUMBER"
                    className={`w-full bg-transparent border-b ${errors.phone ? "border-red-500/50" : "border-zinc-800"} py-4 text-sm focus:border-white outline-none transition-all placeholder:text-zinc-700`}
                  />
                  {errors.phone && (
                    <p className="text-[10px] text-red-500 mt-1 uppercase tracking-widest">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* SERVICE & PRICE SELECT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <select
                    {...register("service")}
                    className={`w-full bg-transparent border-b ${errors.service ? "border-red-500/50" : "border-zinc-800"} py-4 text-sm outline-none appearance-none cursor-pointer focus:border-white transition-all text-zinc-400`}
                  >
                    <option value="SELECT SERVICE" className="bg-black">
                      SELECT SERVICE
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-black text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-0 top-5 w-4 h-4 text-zinc-600 pointer-events-none" />
                  {errors.service && (
                    <p className="text-[10px] text-red-500 mt-1 uppercase tracking-widest">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <select
                    {...register("budget")}
                    className={`w-full bg-transparent border-b ${errors.budget ? "border-red-500/50" : "border-zinc-800"} py-4 text-sm outline-none appearance-none cursor-pointer focus:border-white transition-all text-zinc-400`}
                  >
                    <option value="EXPECTED BUDGET" className="bg-black">
                      EXPECTED BUDGET
                    </option>
                    {getPriceRanges().map((p) => (
                      <option key={p} value={p} className="bg-black text-white">
                        {p}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-0 top-5 w-4 h-4 text-zinc-600 pointer-events-none" />
                  {errors.budget && (
                    <p className="text-[10px] text-red-500 mt-1 uppercase tracking-widest">
                      {errors.budget.message}
                    </p>
                  )}
                </div>
              </div>

              {/* MESSAGE */}
              <div className="relative">
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="TELL ME ABOUT YOUR PROJECT"
                  className={`w-full bg-transparent border-b ${errors.message ? "border-red-500/50" : "border-zinc-800"} py-4 text-sm focus:border-white outline-none transition-all placeholder:text-zinc-700 resize-none`}
                ></textarea>
                {errors.message && (
                  <p className="text-[10px] text-red-500 mt-1 uppercase tracking-widest">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden border border-zinc-800 py-6 rounded-full transition-all duration-500 hover:border-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 text-xs font-bold tracking-[0.3em] uppercase transition-colors duration-500 group-hover:text-black flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
