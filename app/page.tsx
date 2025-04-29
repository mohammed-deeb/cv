"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Bio from "./components/Bio";
import Education from "./components/Education";
import Publications from "./components/Publications";
import TechnicalCapabilities from "./components/TechnicalCapabilities";
import Experience from "./components/Experience";
import Projects from "./components/projects";
import Interests from "./components/Interests";
import FutureDevelopments from "./components/FutureDevelopments";
import Footer from "./components/Footer";
import ChatbotButton from "./components/ChatbotButton";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("bio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "bio",
        "education",
        "publications",
        "technical-capabilities",
        "experience",
        "projects",
        "interests",
        "future-developments",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const navbarHeight = 64; // Height of the navbar
          if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
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
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      {/* Navbar Section */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>

      {/* Main Content Section */}
      <div className="pt-8"> {/* Add padding-top to account for fixed navbar */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section id="bio" className="mb-16 scroll-mt-24">
            <Bio />
          </section>
          <section id="education" className="mb-16 scroll-mt-24">
            <Education />
          </section>
          <section id="publications" className="mb-16 scroll-mt-24">
            <Publications />
          </section>
          <section id="technical-capabilities" className="mb-16 scroll-mt-24">
            <TechnicalCapabilities />
          </section>
          <section id="experience" className="mb-16 scroll-mt-24">
            <Experience />
          </section>
          <section id="projects" className="mb-16 scroll-mt-24">
            <Projects />
          </section>
          <section id="interests" className="mb-16 scroll-mt-24">
            <Interests />
          </section>
          <section id="future-developments" className="mb-16 scroll-mt-24">
            <FutureDevelopments />
          </section>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
      
      {/* Chatbot Button */}
      <ChatbotButton />
    </div>
  );
}
