"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/app/theme/theme-toggle";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items array
  const navItems = [
    { name: "Bio", href: "bio" },
    { 
      name: "Academic ⌵", 
      href: "#",
      dropdown: [
        { name: "Education", href: "education" },
        { name: "Publications", href: "publications" }
      ]
    },
    { name: "Technical Capabilities", href: "technical-capabilities" },
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
    { 
      name: "Goals ⌵", 
      href: "#",
      dropdown: [
        { name: "Interests", href: "interests" },
    { name: "Future Developments", href: "future-developments" }
      ]
    }
  
  ];

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      const navbarHeight = 64; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="w-full max-w-5xl px-4 py-3 mx-auto bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-900 shadow-lg lg:px-8">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4 w-full">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                onClick={() => handleSectionChange("bio")}
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  MD
                </span>
              </Link>
              {isMainPage && (
                <ul className="flex items-center space-x-4">
                  {navItems.map((item, index) => (
                    <li key={index} className="relative group">
                      {item.dropdown ? (
                        <div className="relative">
                          <button
                            className={`text-white hover:text-white/80 font-medium transition-colors duration-200 text-sm hover:bg-white/20 px-3 py-2 rounded-md ${
                              activeSection === item.href ? "bg-white/20" : ""
                            }`}
                          >
                            {item.name}
                          </button>
                          <div className="absolute left-0 mt-2 w-48 bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            {item.dropdown.map((subItem, subIndex) => (
                              <button
                                key={subIndex}
                                onClick={() => handleSectionChange(subItem.href)}
                                className={`block w-full text-left px-4 py-2 text-white hover:bg-white/20 transition-colors duration-200 ${
                                  activeSection === subItem.href ? "bg-white/20" : ""
                                }`}
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleSectionChange(item.href)}
                          className={`text-white hover:text-white/80 font-medium transition-colors duration-200 text-sm hover:bg-white/20 px-3 py-2 rounded-md ${
                            activeSection === item.href ? "bg-white/20" : ""
                          }`}
                        >
                          {item.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="ml-auto pr-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center w-full">
            <Link
              href="/"
              onClick={() => handleSectionChange("bio")}
              className="flex items-center space-x-3 rtl:space-x-reverse mr-4"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                MD
              </span>
            </Link>
            <div className="ml-auto flex items-center space-x-4 pr-4">
              <ThemeToggle />
              {isMainPage && (
                <button
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMainPage && (
            <div
              className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-blue-800 via-purple-800 to-indigo-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              } lg:hidden z-50`}
            >
              <div className="flex items-center justify-between p-4 border-b border-white/20">
                <span className="text-xl font-semibold text-white">Menu</span>
                <button
                  onClick={toggleMobileMenu}
                  className="text-white hover:text-white/80"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className="p-4 space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    {item.dropdown ? (
                      <div className="space-y-2">
                        <div className="text-white font-medium px-4 py-2">
                          {item.name}
                        </div>
                        <ul className="pl-4 space-y-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <button
                                onClick={() => handleSectionChange(subItem.href)}
                                className={`block w-full text-left px-4 py-2 text-white hover:bg-white/20 rounded-md transition-colors duration-200 ${
                                  activeSection === subItem.href ? "bg-white/20" : ""
                                }`}
                              >
                                {subItem.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleSectionChange(item.href)}
                        className={`block w-full text-left px-4 py-3 text-white hover:bg-white/20 rounded-md transition-colors duration-200 font-medium ${
                          activeSection === item.href ? "bg-white/20" : ""
                        }`}
                      >
                        {item.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
