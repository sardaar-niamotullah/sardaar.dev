"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  containerVariants,
  itemVariants,
  cardVariants,
  Divider,
} from "../utils/animations";

export default function Education() {
  return (
    <section id="education" className="w-full py-24">
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
            Academic Background
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-[var(--textColor_3)] text-4xl font-light mb-4 custom-font"
          >
            Education
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-[var(--themeColor_2)] mx-auto"
          />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="relative"
        >
          <motion.div
            variants={containerVariants}
            // className="relative bg-[var(--themeColor_1)]/10 backdrop-blur-sm p-8 rounded-lg border border-[var(--themeColor_2)]/20 hover:border-[var(--themeColor_2)]/30"
            className="relative p-8"
          >
            {/* Main Degree Info */}
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-[var(--textColor_3)] text-2xl font-light mb-2">
                B.Sc. in Computer Science & Engineering
              </h3>
              <Link
                href="https://www.bracu.ac.bd/"
                target="_blank"
                className="text-[var(--themeColor_2)] hover:text-[var(--textColor_3)] transition-colors text-base flex items-center gap-1"
              >
                <span>BRAC University</span>
              </Link>
            </motion.div>

            {/* CGPA and Session */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <div className="text-[var(--themeColor_2)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[var(--themeColor_3)] text-xs uppercase tracking-wider">
                    CGPA
                  </p>
                  <p className="text-[var(--textColor_3)]">3.26</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <div className="text-[var(--themeColor_2)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[var(--themeColor_3)] text-xs uppercase tracking-wider">
                    Session
                  </p>
                  <p className="text-[var(--textColor_3)]">
                    {/* Summer &apos;19 - Fall &apos;24 */}
                    Class of 2025
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={containerVariants}
              className="text-[var(--themeColor_3)] text-sm leading-relaxed space-y-3"
            >
              <motion.p variants={itemVariants}>
                Comprehensive curriculum covering Algorithms, Computer Networks,{" "}
                <span className="text-[var(--themeColor_2)]">
                  Software Engineering,
                </span>
                &nbsp;Artificial Intelligence,&nbsp;
                <span className="text-[var(--themeColor_2)]">
                  Database Management System,
                </span>
                &nbsp;Compiler Design, Computer Graphics, and many more with
                hands-on project experience.
              </motion.p>
              <motion.p variants={itemVariants}>
                Active participation in research initiatives and complementing
                academic coursework.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom divider */}
        <Divider />
      </div>
    </section>
  );
}
