"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const phrases = [
  "Full Stack Software Engineer",
  "Dart, Flutter, TypeScript, NestJS",
  "SQL, NoSQL, Supabase, Firebase",
];

export default function Hero() {
  const [typingText, setTypingText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const typingSpeed = 50;
  const deletingSpeed = 20;
  const pauseBetweenPhrases = 1500;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const typeText = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isTyping) {
        if (typingText.length < currentPhrase.length) {
          timeout = setTimeout(() => {
            setTypingText(currentPhrase.substring(0, typingText.length + 1));
          }, typingSpeed);
        } else {
          timeout = setTimeout(() => {
            setIsTyping(false);
          }, pauseBetweenPhrases);
        }
      } else {
        if (typingText.length > 0) {
          timeout = setTimeout(() => {
            setTypingText(typingText.substring(0, typingText.length - 1));
          }, deletingSpeed);
        } else {
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          setIsTyping(true);
        }
      }
    };

    timeout = setTimeout(typeText, isTyping ? typingSpeed : deletingSpeed);

    return () => clearTimeout(timeout);
  }, [typingText, isTyping, currentPhraseIndex]);

  return (
    <>
      {/* Mobile View */}
      <section className="md:hidden w-screen h-screen relative flex flex-col items-center justify-center p-4 pt-20">
        {/* Profile Image - Top */}
        <div className="relative w-48 h-48 rounded-lg overflow-hidden border-2 border-[var(--themeColor_2)] mb-8 z-10 animate-slideInRight-m">
          <Image
            src="/pictures/sardaar_withNoteBook.jpg"
            alt="Sardaar Niamotullah"
            fill
            className="object-cover scale-125"
            style={{ objectPosition: "50% 25%" }}
            priority
          />
          <div className="absolute inset-0 bg-[var(--themeColor_2)]/10"></div>
        </div>

        {/* Content - Bottom */}
        <div className="text-center z-10 animate-slideInLeft-m">
          <div className="text-[var(--textColor_3)] text-base mb-2">
            Hi, I&apos;m
          </div>
          <h1 className="text-[var(--textColor_2)] text-4xl font-bold mb-4">
            <span className="font-light text-[var(--textColor_3)]">
              Sardaar
            </span>{" "}
            Niamotullah
          </h1>

          <div className="text-[var(--textColor_3)] text-xl mb-6 h-8">
            {typingText}
            <span className="animate-blink text-[var(--textColor_2)] font-bold">
              _
            </span>
          </div>

          <div className="text-[var(--textColor_3)] text-base mb-2">
            Assoc. Mobile App Developer,{" "}
            <Link
              href="https://www.linkedin.com/company/inshirah-tech/posts/?feedView=all"
              target="_blank"
              className="pb-1 transition-colors border-b border-[var(--themeColor_2)] hover:text-[var(--themeColor_2)] hover:border-transparent"
            >
              Inshirah Tech
            </Link>
          </div>

          <div className="text-[var(--textColor_3)] text-base mb-6">
            B.Sc. in Computer Science,{" "}
            <Link
              href="https://www.bracu.ac.bd/"
              target="_blank"
              className="pb-1 transition-colors border-b border-[var(--themeColor_2)] hover:text-[var(--themeColor_2)] hover:border-transparent"
            >
              BRAC University
            </Link>
          </div>

          <div className="flex gap-4 mb-8 justify-center">
            {/* Download CV Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--themeColor_2)] text-[var(--textColor_4)] px-3 py-2 rounded hover:bg-[var(--themeColor_2_light)] transition-colors cursor-pointer text-sm"
              onClick={() => {
                const cvUrl = "/resume/sardaar_niamotullah-CV.pdf";
                const link = document.createElement("a");
                link.href = cvUrl;
                link.download = "Sardaar_Niamotullah-CV.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download CV
            </motion.button>

            {/* Contact Info Button */}
            <Link
              href="#contact"
              className="border border-[var(--themeColor_2)] text-[var(--textColor_3)] px-3 py-2 rounded hover:bg-[var(--themeColor_2)] hover:text-[var(--textColor_4)] active:scale-95 transition-all cursor-pointer inline-block text-sm"
            >
              Contact Info
            </Link>
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/sardaar-niamotullah/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--themeColor_3)] hover:text-[var(--textColor_2)] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hover:scale-110 transition-transform"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/sardaarNiamotullah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--themeColor_3)] hover:text-[var(--textColor_2)] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hover:scale-110 transition-transform"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Desktop/Tablet View */}
      <section className="hidden md:flex w-screen h-screen relative items-center justify-center pt-16">
        {/* Content Container - Now with max-w-4xl (1024px) on lg screens */}
        <div className="w-full h-1/2 z-1 flex justify-center -mt-16">
          <div className="w-full max-w-3xl h-full flex">
            {/* Image div */}
            <div className="w-1/3 h-full flex items-center justify-center animate-slideInRight pl-8">
              <div className="relative w-full h-full max-w-md max-h-[400px] rounded-xl overflow-hidden border-2 border-[var(--themeColor_2)]">
                <Image
                  src="/pictures/sardaar_withNoteBook.jpg"
                  alt="Sardaar Niamotullah"
                  fill
                  className="object-cover scale-145"
                  style={{ objectPosition: "50% 20%" }}
                  priority
                />
                {/* Added overlay for desktop view */}
                <div className="absolute inset-0 bg-[var(--themeColor_2)]/10"></div>
              </div>
            </div>

            {/* Intro div */}
            <div className="w-2/3 h-full flex flex-col justify-center pl-8 animate-slideInLeft">
              <div className="text-[var(--textColor_3)] text-base mb-2">
                Hi, I&apos;m
              </div>
              <h1 className="text-[var(--textColor_2)] text-5xl font-bold mb-6">
                <span className="font-thin text-[var(--textColor_3)]">
                  Sardaar
                </span>{" "}
                Niamotullah
              </h1>

              <div className="text-[var(--textColor_3)] text-xl mb-6 h-8">
                {typingText}
                <span className="animate-blink text-[var(--textColor_2)] font-bold">
                  _
                </span>
              </div>

              <div className="text-[var(--textColor_3)] text-base mb-2">
                Assoc. Mobile App Developer,{" "}
                <Link
                  href="https://www.linkedin.com/company/inshirah-tech/posts/?feedView=all"
                  target="_blank"
                  className="pb-1 transition-colors border-b border-[var(--themeColor_2)] hover:text-[var(--themeColor_2)] hover:border-transparent"
                >
                  Inshirah Tech
                </Link>
              </div>

              <div className="text-[var(--textColor_3)] text-base mb-6">
                B.Sc. in Computer Science,{" "}
                <Link
                  href="https://www.bracu.ac.bd/"
                  target="_blank"
                  className="pb-1 transition-colors border-b border-[var(--themeColor_2)] hover:text-[var(--themeColor_2)] hover:border-transparent"
                >
                  BRAC University
                </Link>
              </div>

              <div className="flex gap-4 mb-8">
                {/* Download CV Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="bg-[var(--themeColor_2)] text-[var(--textColor_4)] px-4 py-2 rounded hover:bg-[var(--themeColor_2_light)] transition-colors cursor-pointer text-sm"
                  onClick={() => {
                    const cvUrl = "/resume/sardaar_niamotullah-CV.pdf";
                    const link = document.createElement("a");
                    link.href = cvUrl;
                    link.download = "Sardaar_Niamotullah-CV.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Download CV
                </motion.button>

                {/* Contact Info Button */}
                <Link
                  href="#contact"
                  className="border border-[var(--themeColor_2)] text-[var(--textColor_3)] px-4 py-2 rounded hover:bg-[var(--themeColor_2)] hover:text-[var(--textColor_4)] active:scale-95 transition-all cursor-pointer inline-block text-sm"
                >
                  Contact Info
                </Link>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/sardaar-niamotullah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--themeColor_3)] hover:text-[var(--textColor_2)] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="hover:scale-110 transition-transform"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/sardaarNiamotullah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--themeColor_3)] hover:text-[var(--textColor_2)] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="hover:scale-110 transition-transform"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
