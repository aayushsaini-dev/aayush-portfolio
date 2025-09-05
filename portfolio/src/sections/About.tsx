import { motion } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";

export function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 sm:py-32 overflow-hidden"
      style={{
        backgroundColor: "#F5F5F5",
        color: "#0A0F0F",
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* --- MOBILE LAYOUT (Visible below 'md' breakpoint) --- */}
        <div className="md:hidden flex flex-col items-center">
          {/* 1. Typographic Content (Centered for Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              ABOUT ME
            </p>
            <h2 className="mt-4 text-4xl font-extrabold uppercase tracking-tighter leading-tight text-slate-800">
              <span className="block">DELIVERING ON A</span>
              <span className="block mt-1 text-[#14B8A6]">SINGULAR VISION</span>
            </h2>
          </motion.div>

          {/* 2. Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="my-12" // Adds vertical spacing
          >
            <div className="relative p-2 border border-gray-300">
              <img
                src="/images/profile/photo.png"
                alt="Aayush Saini"
                className="w-full max-w-xs h-auto object-cover" // Slightly smaller max-width for mobile
              />
            </div>
          </motion.div>

          {/* 3. Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-lg text-slate-600 leading-relaxed max-w-prose text-center"
          >
            I build web applications that are not just functional, but truly
            engaging. My focus is on performance and precision, transforming
            complex ideas into elegant, memorable digital experiences.
          </motion.p>
        </div>

        {/* --- DESKTOP & TABLET LAYOUT (Hidden below 'md' breakpoint) --- */}
        <div className="hidden md:grid grid-cols-2 gap-16 items-center">
          {/* Image with hover animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center md:justify-start md:order-first"
          >
            <div className="relative p-2 border border-gray-300 transform transition-all duration-300 hover:scale-[1.02] group">
              <img
                src="/images/profile/photo.png"
                alt="Aayush Saini"
                className="w-full max-w-sm h-auto object-cover"
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D5A406] transition-all duration-300"></div>
            </div>
          </motion.div>

          {/* Typographic Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="md:order-last relative pt-12"
          >
            <p className="absolute top-0 right-0 text-sm font-semibold uppercase tracking-widest text-gray-500 bg-brand-gold">
              ABOUT ME
            </p>
            <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter leading-tight text-slate-800 ">
              <span className="block -ml-4 sm:-ml-8">DELIVERING ON A</span>
              <span className="block mt-2 ml-12 sm:ml-20 text-[#14B8A6]">
                SINGULAR VISION
              </span>
            </h2>
            <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-prose">
              I build web applications that are not just functional, but truly
              engaging. My focus is on performance and precision, transforming
              complex ideas into elegant, memorable digital experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
