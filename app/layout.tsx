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
  title: "Muhammed Anas | Best Freelance Web Developer in Kerala & Dubai",

  description:
    "Premium Next.js & GSAP Developer in Kerala. Specializing in high-performance minimalist websites for brands in India and Dubai. Hire Anas for bespoke digital solutions.",

  keywords: [
    "Best web developer in Calicut",
    "Top freelance developer Dubai",
    "Freelance developer Manjeri",
    "Next.js developer Malappuram",
    "React developer Calicut",
    "Premium web design Dubai",
    "Frontend engineer Kerala",
    "Bespoke website developer India",
    "GSAP animation expert Kerala",
  ],
  alternates: {
    canonical: "https://muhammed-anas.vercel.app",
  },
  openGraph: {
    title: "Muhammed Anas | Premium Web Developer",
    description: "Building high-end digital experiences with Next.js and GSAP.",
    url: "https://muhammed-anas.vercel.app",
    siteName: "Anas Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Anas | Web Developer",
    description: "High-performance minimalist websites built with Next.js.",
    images: ["/images/og-image.png"],
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
