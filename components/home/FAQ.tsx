"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "A bespoke website usually takes 4 to 8 weeks depending on the complexity. This includes strategy, design, and high-end development with GSAP animations.",
  },
  {
    question: "How do we stay in touch during the project?",
    answer:
      "Communication is key. I primarily use Google Meet for live consultations and professional email or messaging tools for daily updates, ensuring we stay aligned regardless of the time zone.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, I provide 30 days of complimentary support after launch to ensure everything is running smoothly. Longer maintenance retainers are also available.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Every project is unique. I usually work on a fixed-project basis for well-defined scopes or a weekly sprint model for ongoing creative partnerships.",
  },
  {
    question: "Can you work with my existing brand guidelines?",
    answer:
      "Absolutely. I can either build upon your existing brand identity or help you evolve it into a high-end digital experience.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-header",
          start: "top 90%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-32 bg-[#050505] border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="faq-header flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 block mb-4 font-medium">
              Assistance
            </span>
            <h2 className="text-5xl md:text-5xl font-bold tracking-tighter uppercase text-white leading-none">
              Common <span className="text-zinc-700 font-light">Questions</span>
            </h2>
          </div>

          <div className="md:max-w-[250px] md:text-right">
            <p className="text-zinc-500 text-[11px] uppercase tracking-widest leading-relaxed">
              transparent answers to streamline our collaboration process.
            </p>
          </div>
        </div>

        {/* ACCORDION LIST */}
        <div className="border-t border-zinc-900">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-zinc-900 overflow-hidden transition-all duration-500"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-8 md:py-8 flex justify-between items-center text-left group cursor-pointer"
              >
                <div className="flex items-start gap-6 md:gap-12">
                  <span className="text-[10px] font-mono text-zinc-700 mt-2">
                    0{index + 1}
                  </span>
                  <h3
                    className={`text-xl md:text-2xl font-bold tracking-tight uppercase transition-all duration-500 ${openIndex === index ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"}`}
                  >
                    {faq.question}
                  </h3>
                </div>

                {/* Plus/Minus Icon */}
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <div className="absolute w-full h-[1px] bg-zinc-500" />
                  <div
                    className={`absolute w-[1px] h-full bg-zinc-500 transition-transform duration-500 ${openIndex === index ? "rotate-90 opacity-0" : "rotate-0"}`}
                  />
                </div>
              </button>

              <div
                className={`transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden ${openIndex === index ? "max-h-[500px] pb-12" : "max-h-0"}`}
              >
                <div className="pl-16 md:pl-24 max-w-2xl">
                  <p className="text-zinc-500 text-sm md:text-lg leading-relaxed font-light lowercase tracking-tight">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
