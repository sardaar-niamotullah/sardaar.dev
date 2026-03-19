"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    // { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Effect to control body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      // Disable scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scroll when menu is closed
      document.body.style.overflow = "auto";
    }

    // Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Animation variants for hamburger lines
  const topLineVariants = {
    open: { rotate: 45, y: 3, originX: 0.5, originY: 0.5 },
    closed: { rotate: 0, y: 0, originX: 0.5, originY: 0.5 },
  };

  const bottomLineVariants = {
    open: { rotate: -45, y: -3, originX: 0.5, originY: 0.5 },
    closed: { rotate: 0, y: 0, originX: 0.5, originY: 0.5 },
  };

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 px-16 py-10 lg:px-20 lg:py-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between animate-slideInDown">
          {/* Website Name */}
          <Link
            href="/"
            className="text-[var(--textColor_2)] font-bold text-xl"
          >
            <span className="text-[var(--textColor_3)]">sardaar</span>.dev
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="border-b border-[var(--textColor_2)] hover:border-transparent text-[var(--textColor_3)] hover:text-[var(--textColor_2)] px-1 py-1 font-medium transition-colors text-sm uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="text-[var(--textColor_3)] hover:text-[var(--textColor_2)] focus:outline-none h-5 w-6 relative"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <motion.span
                className="block h-[2px] w-full bg-current absolute top-[6px]"
                variants={topLineVariants}
                initial="closed"
                animate={mobileMenuOpen ? "open" : "closed"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                className="block h-[2px] w-full bg-current absolute bottom-[6px]"
                variants={bottomLineVariants}
                initial="closed"
                animate={mobileMenuOpen ? "open" : "closed"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 overflow-hidden">
          <div
            className="absolute bg-[var(--themeColor_1)] rounded-full animate-circular-overlay"
            style={{
              top: buttonRef.current
                ? buttonRef.current.offsetTop +
                  buttonRef.current.offsetHeight / 2
                : "50%",
              left: buttonRef.current
                ? buttonRef.current.offsetLeft +
                  buttonRef.current.offsetWidth / 2
                : "50%",
              transform: "translate(-50%, -50%) scale(0)",
            }}
          ></div>

          <div className="relative z-50 h-full w-full flex flex-col items-center justify-center opacity-0 animate-fade-in-delay">
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="border-b border-[var(--textColor_2)] px-1 py-1 text-[var(--textColor_3)] hover:text-[var(--textColor_3)] font-medium transition-colors text-sm uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
