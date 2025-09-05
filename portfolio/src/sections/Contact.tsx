import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "../hooks/useSectionInView";
import { Mail } from "lucide-react";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { ref } = useSectionInView("Contact", 0.5);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 100]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 sm:py-32 text-center overflow-hidden"
      style={{
        // UPDATED: Matched the About section's background color
        backgroundColor: "#F5F5F5",
        color: "#0A0F0F",
      }}
    >
      <motion.img
        src="/images/logos/logo-a.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 m-auto h-[30rem] w-auto"
        style={{
          y,
          opacity: 0.04,
          zIndex: 0,
        }}
      />

      <div
        ref={ref}
        className="relative z-10 container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        {/* The rest of your content remains the same */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-slate-800"
        >
          HAVE A VISION? <br /> LET'S ENGINEER IT.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-6 text-lg text-slate-600"
        >
          I'm currently seeking full-time opportunities where I can contribute
          to building exceptional digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-12"
        >
          <a
            href="mailto:aayushsaini0406@gmail.com"
            className="btn btn-secondary"
          >
            <Mail className="mr-3 h-5 w-5" />
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
