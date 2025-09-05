import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useActiveSection } from "../contexts/ActiveSectionContext";

const navLinks = [
  { id: "about", label: "About", href: "#about" },
  { id: "stack", label: "Stack", href: "#stack" },

  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const desktopLinkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const { activeSection } = useActiveSection();

  // Hooks and logic remain the same
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setIsHidden(true);
      setIsMenuOpen(false);
    } else {
      setIsHidden(false);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
          ${
            activeSection !== "Hero" || isMenuOpen
              ? "bg-[#697B7C]/90 backdrop-blur-md"
              : "bg-transparent"
          }`}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <a
            href="#hero"
            className="flex items-center gap-3"
            aria-label="Go to top of page"
          >
            {/* UPDATED: Changed 'invert' to a filter that forces pure white */}
            <img
              src="/images/logos/logo-a.svg"
              alt="Aayush Logo"
              className="h-8 w-auto [filter:brightness(0)_invert(1)]"
            />
            <span className="text-white font-semibold text-lg hidden sm:block">
              Portfolio
            </span>
          </a>

          {/* ... Rest of the navbar is unchanged ... */}
          <div className="hidden md:flex items-center gap-4">
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  key="desktop-links"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="flex items-center gap-6 mr-4"
                >
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      variants={desktopLinkVariants}
                      className={`relative font-medium text-sm nav-link-underline transition-colors duration-300
                                  ${
                                    activeSection === link.id
                                      ? "text-[#D5A406]"
                                      : "text-white"
                                  }`}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-[#D5A406] transition-colors duration-200 z-50"
              aria-label="Toggle navigation menu"
            >
              <div className="flex flex-col space-y-1.5">
                <span className="w-7 h-0.5 bg-current"></span>
                <span className="w-7 h-0.5 bg-current"></span>
              </div>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-[#D5A406] transition-colors duration-200 z-50"
              aria-label="Toggle navigation menu"
            >
              <div className="flex flex-col space-y-1.5">
                <span className="w-7 h-0.5 bg-current"></span>
                <span className="w-7 h-0.5 bg-current"></span>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay is unchanged */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-[#0A0F0F] z-[49] flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center space-y-8"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="text-white text-4xl font-bold hover:text-[#D5A406] transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
