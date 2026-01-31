"use client";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { SocialSidebar } from "@/components/SocialSidebar";
import { HeroSection } from "@/components/HeroSection";
import { StreamingSection } from "@/components/StreamingSection";
import { SocialMediaSection } from "@/components/SocialMediaSection";
import { LatestMediaSection } from "@/components/LatestMediaSection";
import { BioSection } from "@/components/BioSection";
import { MerchSection } from "@/components/MerchSection";
import { TourDatesSection } from "@/components/TourDatesSection";
import { NewsSection } from "@/components/NewsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "streaming",
        "social",
        "media",
        "bio",
        "merch",
        "tour",
        "news",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header activeSection={activeSection} />
      <SocialSidebar />
      <main>
        <HeroSection />
        <StreamingSection />
        <SocialMediaSection />
        <LatestMediaSection />
        <BioSection />
        <MerchSection />
        <TourDatesSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
