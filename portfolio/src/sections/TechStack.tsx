"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import {
  Code,
  Component,
  Database,
  TerminalSquare,
  BrainCircuit,
  Spline,
  GitFork,
  ArrowDownUp,
  Timer,
  FileText,
  Eraser,
} from "lucide-react";
import {
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiC,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFramer,
  SiMysql,
  SiGraphql,
  SiPostman,
  SiNodemon,
} from "react-icons/si";
import { BiSolidBasket } from "react-icons/bi";

// UPDATED: Increased icon sizes for a bolder look
const skillCategories = [
  {
    title: "Languages",
    icon: <Code size={24} />,
    skills: [
      { name: "Java", icon: <FaJava size={24} className="text-red-500" /> },
      {
        name: "JavaScript (ES6+)",
        icon: <FaJs size={24} className="text-yellow-400" />,
      },
      { name: "C", icon: <SiC size={24} className="text-blue-600" /> },
    ],
  },
  {
    title: "Data Structures & Algorithms",
    icon: <BrainCircuit size={24} />,
    skills: [
      {
        name: "Arrays & Strings",
        icon: <BiSolidBasket size={20} className="text-cyan-400" />,
      },
      {
        name: "Linked Lists",
        icon: <Spline size={20} className="text-green-400" />,
      },
      {
        name: "Trees & Graphs",
        icon: <GitFork size={20} className="text-fuchsia-400" />,
      },
      {
        name: "Sorting & Searching",
        icon: <ArrowDownUp size={20} className="text-orange-400" />,
      },
      {
        name: "Time & Space Complexity",
        icon: <Timer size={20} className="text-violet-400" />,
      },
    ],
  },
  {
    title: "Frontend",
    icon: <Component size={24} />,
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 size={24} className="text-orange-500" />,
      },
      { name: "CSS3", icon: <FaCss3Alt size={24} className="text-blue-500" /> },
      { name: "React", icon: <FaReact size={24} className="text-cyan-400" /> },
      {
        name: "TypeScript",
        icon: <SiTypescript size={24} className="text-blue-500" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={24} className="text-cyan-500" />,
      },
      {
        name: "Framer Motion",
        icon: <SiFramer size={24} className="text-fuchsia-500" />,
      },
    ],
  },
  {
    title: "Backend",
    icon: <Database size={24} />,
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs size={24} className="text-green-500" />,
      },
      {
        name: "Express",
        icon: <SiExpress size={24} className="text-gray-400" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={24} className="text-green-600" />,
      },
      { name: "SQL", icon: <SiMysql size={24} className="text-blue-400" /> },
      {
        name: "REST APIs",
        icon: <SiGraphql size={24} className="text-pink-500" />,
      },
    ],
  },
  {
    title: "Tools",
    icon: <TerminalSquare size={24} />,
    skills: [
      {
        name: "Git & GitHub",
        icon: <FaGitAlt size={24} className="text-orange-600" />,
      },
      {
        name: "Postman",
        icon: <SiPostman size={24} className="text-orange-500" />,
      },
      {
        name: "Nodemon",
        icon: <SiNodemon size={24} className="text-green-500" />,
      },
      { name: "Eraser", icon: <Eraser size={24} className="text-pink-500" /> },
      {
        name: "Logger",
        icon: <FileText size={24} className="text-gray-500" />,
      },
    ],
  },
];

export function TechStack() {
  const { ref } = useSectionInView("Tech Stack", 0.3);
  const [activeCategory, setActiveCategory] = useState(
    skillCategories[0].title
  );
  const activeSkills =
    skillCategories.find((cat) => cat.title === activeCategory)?.skills || [];

  return (
    <section
      ref={ref}
      id="stack"
      // UPDATED: Section is now full height and content is centered vertically
      className="w-full min-h-screen flex flex-col items-center justify-center py-24 sm:py-32 overflow-hidden"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          // UPDATED: Larger title text
          className="text-5xl sm:text-6xl font-extrabold text-center text-white"
        >
          My Tech Stack
        </motion.h2>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="w-24 h-px bg-[#D5A406] mx-auto my-12"
        />

        {/* --- DESKTOP & TABLET VIEW --- */}
        <div className="hidden md:grid grid-cols-4 gap-16">
          {" "}
          {/* UPDATED: Increased gap */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="md:col-span-1"
          >
            <ul className="space-y-4">
              {" "}
              {/* UPDATED: Increased spacing */}
              {skillCategories.map((category) => (
                <li key={category.title}>
                  <button
                    onClick={() => setActiveCategory(category.title)}
                    // UPDATED: Increased padding and text size
                    className={`w-full text-left p-5 rounded-lg flex items-center gap-4 transition-all duration-300 ${
                      activeCategory === category.title
                        ? "bg-white/10 text-[#D5A406] shadow-lg"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {category.icon}
                    <span className="font-semibold text-lg">
                      {category.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="md:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                // UPDATED: Increased gap between skill icons
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-12 gap-y-14"
              >
                {activeSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center text-center gap-4" // UPDATED: Increased gap
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    {/* UPDATED: Increased icon container size */}
                    <div className="text-6xl text-gray-300">{skill.icon}</div>
                    {/* UPDATED: Increased text size */}
                    <p className="text-base text-gray-400">{skill.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- MOBILE ACCORDION VIEW --- */}
        <div className="block md:hidden space-y-4">
          {/* Mobile view also benefits from the same icon/text size increases */}
          {skillCategories.map((category) => (
            <div key={category.title}>
              <button
                onClick={() =>
                  setActiveCategory(
                    activeCategory === category.title ? "" : category.title
                  )
                }
                className={`w-full text-left p-4 rounded-md flex items-center gap-4 transition-all duration-300 ${
                  activeCategory === category.title
                    ? "bg-white/10 text-[#D5A406] shadow-lg"
                    : "bg-white/5 text-gray-300"
                }`}
              >
                {category.icon}
                <span className="font-semibold text-lg">{category.title}</span>
              </button>
              <AnimatePresence>
                {activeCategory === category.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: "1rem" }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10 pl-4 pb-4 border-l border-white/10">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          className="flex flex-col items-center justify-center text-center gap-4"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * index, duration: 0.3 }}
                        >
                          <div className="text-6xl text-gray-300">
                            {skill.icon}
                          </div>
                          <p className="text-base text-gray-400">
                            {skill.name}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
