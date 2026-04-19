"use client";

import { motion } from "framer-motion";

import {
  containerVariants,
  itemVariants,
  cardVariants,
  Divider,
} from "../utils/animations";

export default function Experience() {
  // const getDurationInMonths = (startDate: string, endDate?: string): string => {
  //   const start = new Date(startDate);
  //   const end = endDate ? new Date(endDate) : new Date();

  //   const yearDiff = end.getFullYear() - start.getFullYear();
  //   const monthDiff = end.getMonth() - start.getMonth();

  //   const totalMonths = yearDiff * 12 + monthDiff + 1;

  //   if (totalMonths === 1) return "1 month";
  //   return `${totalMonths} months`;
  // };

  // const totalDurationText = getDurationInMonths("2025-07-31");

  return (
    <section id="experience" className="w-full py-24">
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
            Professional Journey
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-[var(--textColor_3)] text-4xl font-light mb-4 custom-font"
          >
            Experience
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-px bg-[var(--themeColor_2)] mx-auto"
          />
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="relative"
        >
          <motion.div
            variants={containerVariants}
            // className="relative bg-[var(--themeColor_1)]/10 backdrop-blur-sm p-8 border rounded-lg border-[var(--themeColor_2)]/20 hover:border-[var(--themeColor_2)]/30"
            className="relative p-8"
          >
            {/* Experience Container */}
            <div className="flex gap-5">
              <div className="flex-1">
                {/* Organization Header with Dates */}
                <motion.div
                  variants={itemVariants}
                  className="relative mb-4 p-4 px-6 border-l border-r border-[var(--themeColor_2)] bg-[var(--themeColor_1)]/5 flex justify-between items-center"
                >
                  {/* Left side - Organization */}
                  <div>
                    <h3 className="text-[var(--textColor_3)] text-lg font-semibold mb-1">
                      Inshirah Tech
                    </h3>
                    <p className="text-[var(--textColor_2)] text-sm">
                      Full Time • Remote
                    </p>
                  </div>

                  {/* Right side - Dates */}
                  <div className="text-right text-sm">
                    <p className="text-[var(--textColor_3)] font-semibold mb-1">
                      Jul 2025 – Mar 2026
                    </p>
                    <p className="text-[var(--textColor_2)] text-xs">
                      9 months
                      {/* {totalDurationText} */}
                    </p>
                  </div>
                </motion.div>

                {/* Timeline Entries */}
                <div className="space-y-0">
                  {/* Current Position */}
                  <motion.div
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    {/* Timeline Bullet + Line */}
                    {/* <div className="flex flex-col items-center mr-4 ml-5">
                      <div className="w-2 h-2 bg-[var(--themeColor_2)] rounded-full mt-2"></div>
                      <div className="w-px flex-1 bg-[var(--themeColor_2)]/30 mt-2"></div>
                    </div> */}
                    {/* Timeline Bullet */}
                    <div className="flex flex-col items-center mr-4 ml-5">
                      <div className="w-2 h-2 bg-[var(--themeColor_2)]/60 rounded-full mt-2"></div>
                    </div>

                    {/* Timeline Content */}
                    <div className="flex-1 pb-6">
                      <h4 className="text-[var(--textColor_3)] text-base font-semibold mb-1">
                        Associate Mobile App Developer
                      </h4>
                      <p className="text-[var(--textColor_3)] text-sm mb-2">
                        Sep 2025 – Mar 2026 • 7 months
                        {/* {getDurationInMonths("2025-09-01")} */}
                      </p>
                      <p className="text-[var(--themeColor_2)] text-sm mb-3">
                        [Dart, Flutter, Firebase, Supabase, APIs, Figma]
                      </p>
                      <ul className="list-disc list-inside text-[var(--textColor_3)] text-sm leading-relaxed space-y-2 ml-4">
                        <li>
                          Building cross-platform mobile and web applications
                          using Flutter, integrating Firebase/Supabase for
                          real-time data, authentication, and storage.
                        </li>
                        <li>
                          Collaborating with the team to design and implement
                          responsive, pixel-perfect UIs from Figma, while
                          integrating REST APIs, and other services.
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  {/* Previous Position */}
                  <motion.div
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    {/* Timeline Bullet */}
                    <div className="flex flex-col items-center mr-4 ml-5">
                      <div className="w-2 h-2 bg-[var(--themeColor_2)]/60 rounded-full mt-2"></div>
                    </div>

                    {/* Timeline Content */}
                    <div className="flex-1 pb-2">
                      <h4 className="text-[var(--textColor_3)] text-base font-semibold mb-1">
                        Trainee Mobile App Developer
                      </h4>
                      <p className="text-[var(--textColor_3)] text-sm">
                        Jul 2025 – Aug 2025 • 2 months
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom divider */}
        <Divider />
      </div>
    </section>
  );
}
