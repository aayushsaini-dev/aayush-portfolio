"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // Github icon removed from here

// ---- Brand Color Palette ----
const ACCENT = "#6C63FF";
const TEXT_LIGHT = "#FFFFFF";
const TEXT_MUTED = "#CCCCCC";
const BG_DARK = "#0A0A0A";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/backgrounds/carbon-texture.svg')",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 tracking-wide"
        style={{ color: TEXT_LIGHT }}
      >
        Projects
      </motion.h2>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-y-12 md:gap-y-16">
        {/* Vividly Project */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="w-full flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Mockup Image */}
          <div className="flex-1 flex justify-center">
            <div
              className="rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 ease-in-out"
              style={{ backgroundColor: BG_DARK }}
            >
              <img
                src="images/projectassets/vividly.jpg"
                alt="Vividly on Macbook Air"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 text-center md:text-left">
            <h3
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: TEXT_LIGHT }}
            >
              Vividly 🚀
            </h3>
            <p
              className="text-base md:text-lg leading-relaxed mb-5"
              style={{ color: TEXT_MUTED }}
            >
              An AI-powered SaaS platform for instant photo transformation,
              video compression, and user authentication.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://vividly-rbre.vercel.app/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105"
                style={{ backgroundColor: ACCENT, color: TEXT_LIGHT }}
              >
                See Live <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://github.com/aayushsaini-dev/vividly"
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub Repository"
                className="p-3 rounded-lg transition-transform transform hover:scale-110"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                {/* --- UPDATED ICON --- */}
                <img
                  src="/images/icons/github.svg"
                  alt="GitHub"
                  className="h-6 w-6 [filter:brightness(0)_invert(1)]" // Inverts the color to white
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RTT Project (unchanged) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          className="w-full flex flex-col md:flex-row-reverse items-center justify-between gap-8"
        >
          {/* Mockup Image */}
          <div className="flex-1 flex justify-center">
            <div
              className="rounded-xl overflow-hidden shadow-xl hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 ease-in-out"
              style={{ backgroundColor: BG_DARK }}
            >
              <img
                src="images/projectassets/rtt.png"
                alt="Ronak Tours & Travels on iPhone"
                className="w-full max-w-xs object-contain"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 text-center md:text-left">
            <h3
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: TEXT_LIGHT }}
            >
              Ronak Tours & Travels 🏰
            </h3>
            <p
              className="text-base md:text-lg leading-relaxed mb-5"
              style={{ color: TEXT_MUTED }}
            >
              A responsive portfolio website for a travel business, optimized
              for a mobile-first experience.
            </p>
            <a
              href="https://ronaktours.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105"
              style={{ backgroundColor: ACCENT, color: TEXT_LIGHT }}
            >
              See Live <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
            <p
              className="text-sm mt-3"
              style={{ color: TEXT_MUTED, opacity: 0.7 }}
            >
              GitHub repository is private due to this being a client project.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
