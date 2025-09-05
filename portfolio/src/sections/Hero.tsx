import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
// Assuming useSectionInView is in the correct path
import { useSectionInView } from "../hooks/useSectionInView";

const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export function Hero() {
  const { ref } = useSectionInView("Hero", 1);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex items-center min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/backgrounds/bg-gradient.svg"
          alt="Background Gradient"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Adjusted max-width for better text flow on all screens */}
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            // RESPONSIVE FONT SIZES
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
          >
            Aayush Saini
          </motion.h1>

          <motion.p
            // RESPONSIVE FONT SIZES AND MARGIN
            className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-300 tracking-wide"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={2}
          >
            Precision-engineering digital experiences, from concept to
            deployment.
          </motion.p>

          <motion.div
            // RESPONSIVE MARGIN
            className="mt-8 md:mt-10 flex justify-center md:justify-start"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={3}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary group"
            >
              View Resume
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
