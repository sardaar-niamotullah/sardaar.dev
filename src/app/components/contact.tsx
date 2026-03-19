"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  containerVariants,
  itemVariants,
  cardVariants,
  Divider,
} from "../utils/animations";

const contactInfo = [
  {
    title: "Contact Information",
    items: [
      {
        label: "Primary Email",
        value: "sardaar.niamotullah@gmail.com",
        href: "mailto:sardaar.niamotullah@gmail.com",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        ),
      },
      {
        label: "Academic Email",
        value: "niamotullah.ratul@g.bracu.ac.bd",
        href: "mailto:niamotullah.ratul@g.bracu.ac.bd",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8"
          >
            <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
            <path d="M1.5 9.589v-.745a3 3 0 011.578-2.642l7.5-4.038a3 3 0 012.844 0l7.5 4.038A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
          </svg>
        ),
      },
      {
        label: "Phone Number",
        value: "+880 1754 298659",
        href: "tel:+8801754298659",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        label: "WhatsApp",
        value: "+880 1754 298659",
        href: "https://wa.me/qr/MLUDAPGN45MKK1",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 308 308"
            fill="white"
            className="w-8 h-8"
          >
            <path d="M227.9 176.98c-.6-.29-23.05-11.34-27.04-12.78-1.63-.59-3.37-1.16-5.23-1.16-3.03 0-5.58 1.51-7.56 4.48-2.24 3.33-9.03 11.27-11.13 13.64-.27.31-.65.69-.87.69-.2 0-3.68-1.43-4.73-1.89-24.09-10.46-42.37-35.62-44.88-39.87-.36-.61-.37-.89-.38-.89.09-.32.9-1.13 1.32-1.55 1.22-1.21 2.55-2.8 3.83-4.35.6-.73 1.21-1.46 1.81-2.16 1.86-2.16 2.69-3.84 3.65-5.79l.5-1.01c2.34-4.66.34-8.59-.31-9.86-.53-1.06-10.01-23.94-11.02-26.35-2.42-5.8-5.63-8.5-10.08-8.5-.41 0 0 0-1.73.07-2.11.09-13.6 1.6-18.67 4.8-5.39 3.39-14.5 14.22-14.5 33.25 0 17.13 10.87 33.3 15.54 39.45.11.16.33.47.64.92 17.87 26.1 40.15 45.45 62.74 54.47 21.74 8.69 32.04 9.69 37.89 9.69 2.46 0 4.43-.19 6.17-.36l1.1-.11c7.51-.66 24.02-9.22 27.78-19.65 2.96-8.22 3.74-17.2 1.77-20.46-1.24-2.01-3.57-3.13-6.5-4.52z" />
            <path d="M156.73 0C73.32 0 5.45 67.35 5.45 150.14c0 26.78 7.17 52.99 20.74 75.93L.21 302.72c-.48 1.43-.12 3.01.93 4.08.76.78 1.8 1.2 2.86 1.2.41 0 .81-.06 1.21-.19l79.92-25.4c21.87 11.69 46.59 17.86 71.6 17.86 83.41 0 151.27-67.35 151.27-150.13C308 67.35 240.14 0 156.73 0zm0 268.99c-23.54 0-46.34-6.8-65.94-19.66-.66-.43-1.42-.65-2.19-.65-.41 0-.82.06-1.21.19l-40.03 12.73 12.92-38.13c.42-1.23.21-2.6-.56-3.65-14.92-20.39-22.81-44.48-22.81-69.67 0-65.54 53.75-118.87 119.83-118.87 66.06 0 119.81 53.33 119.81 118.87 0 65.53-53.75 118.87-119.82 118.87z" />
          </svg>
        ),
      },
    ],
  },
];

const socialLinks = [
  {
    name: "LeetCode",
    username: "sardaar_niamotullah",
    url: "https://leetcode.com/u/sardaar_niamotullah/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 32 32"
        fill="white"
        className="transition-transform"
      >
        <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    username: "sardaar-niamotullah",
    url: "https://www.linkedin.com/in/sardaar-niamotullah/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="white"
        className="transition-transform"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    username: "sardaar-niamotullah",
    url: "https://github.com/sardaar-niamotullah",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="white"
        className="transition-transform"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="w-full py-24">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-[var(--themeColor_3)] text-lg mb-2 tracking-widest uppercase"
          >
            Let&apos;s Get In Touch
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-[var(--textColor_3)] text-4xl font-light mb-4 custom-font"
          >
            Contact Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-[var(--themeColor_2)] mx-auto"
          />
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col gap-8 mb-16"
        >
          {contactInfo.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // className="w-full bg-[var(--themeColor_1)]/10 backdrop-blur-sm border border-[var(--themeColor_2)]/20 rounded-xl p-8 hover:border-[var(--themeColor_2)]/30 transition-all"
              className="w-full p-8 transition-all"
            >
              <motion.h3
                variants={itemVariants}
                className="text-[var(--textColor_3)] text-2xl font-medium mb-8"
              >
                {category.title}
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    variants={itemVariants}
                    whileHover={{ y: 0 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[var(--themeColor_1)]/0 border border-[var(--themeColor_2)]/0 hover:bg-[var(--themeColor_2)]/1 transition-all"
                  >
                    <Link
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center w-full gap-4"
                      prefetch={false}
                    >
                      <div className="text-[var(--themeColor_2)] p-2">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[var(--textColor_3)] text-sm mb-1">
                          {item.label}
                        </p>
                        <p className="text-[var(--textColor_2)] hover:text-[var(--themeColor_2)] transition-colors text-sm">
                          {item.value}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          // className="w-full bg-[var(--themeColor_1)]/10 backdrop-blur-sm border border-[var(--themeColor_2)]/20 rounded-xl p-8 hover:border-[var(--themeColor_2)]/30 transition-all"
          className="w-full p-8 transition-all"
        >
          <motion.h3
            variants={itemVariants}
            className="text-[var(--textColor_3)] text-2xl font-medium mb-8"
          >
            Connect With Me
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: 0 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-[var(--themeColor_1)]/0 border border-[var(--themeColor_2)]/0 hover:bg-[var(--themeColor_2)]/1 transition-all"
              >
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-full gap-4"
                  prefetch={false}
                >
                  <div className="text-[var(--themeColor_2)] p-2">
                    {social.icon}
                  </div>
                  <div>
                    <p className="text-[var(--textColor_3)] transition-colors text-lg font-medium">
                      {social.name}
                    </p>
                    <p className="text-[var(--textColor_2)] hover:text-[var(--themeColor_2)] text-sm">
                      {social.username}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom divider */}
        <Divider />
      </div>
    </section>
  );
}
