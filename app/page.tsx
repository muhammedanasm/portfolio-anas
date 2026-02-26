import Clients from "@/components/home/Clients";
import Contact from "@/components/home/Contact";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Work from "@/components/home/Work";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050505] selection:bg-white/20 selection:text-white">
      {/* The Navbar is already handling the top navigation globally 
        because we placed it in layout.tsx. 
      */}

      <Hero />
      <Work />
      <Process />
      <Clients />
      <FAQ />
      <Contact />

      <Footer />

      {/* Future sections will go here 👇 */}
      {/* <Marquee /> */}
      {/* <Works /> */}
      {/* <Process /> */}
      {/* <Footer /> */}
    </main>
  );
}
