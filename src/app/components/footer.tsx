"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="w-full mt-14">
      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        {/* Navigation Links */}
        <motion.nav
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          {navLinks.map((link) => (
            <motion.div key={link.href} variants={itemVariants}>
              <Link
                href={link.href}
                className="text-[var(--textColor_3)] hover:text-[var(--themeColor_2)] transition-colors text-sm uppercase tracking-wider px-1 py-1 border-b border-[var(--textColor_2)] hover:border-transparent"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-[var(--textColor_3)]/70 text-xs">
            &copy; {new Date().getFullYear()} Sardaar Niamotullah. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
