import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScrolling from "@/components/layout/SmoothScrolling";

// Importing the premium font
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Anas | Best Freelance Web Developer in Calicut, Manjeri & Malappuram",
  description:
    "Premium Web Design & Development services in Kerala. Specialized in Next.js, React, and GSAP for high-performance minimalist websites. Hire the best freelance developer in Calicut.",
  keywords: [
    "Best web developer in Calicut",
    "Freelance developer Manjeri",
    "Web Designer Malappuram",
    "Next.js developer Kerala",
    "Freelance React developer Calicut",
    "Anas developer",
    "Premium website maker Kerala",
  ],
  alternates: {
    canonical: "https://muhammed-anas.vercel.app", // നിന്റെ വെബ്സൈറ്റ് ലിങ്ക് ഇവിടെ നൽകുക
  },
  openGraph: {
    title: "Anas | Premium Web Developer in Kerala",
    description: "Building high-end digital experiences with Next.js and GSAP.",
    url: "https://muhammed-anas.vercel.app",
    siteName: "Anas Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.className} bg-[#050505] text-white antialiased`}
      >
        <SmoothScrolling>
          <Navbar />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
