import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://github.com/aayushsaini-dev",
    icon: "/images/icons/github.svg",
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/aayushsaini-dev/",
    icon: "/images/icons/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://x.com/aayushsaini_dev",
    icon: "/images/icons/x.svg",
    alt: "X",
  },
  {
    href: "mailto:aayushsaini0406@gmail.com",
    icon: "/images/icons/mail.svg",
    alt: "Email",
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative pt-16 pb-8"
      style={{
        // UPDATED: Matched the About section's background color
        backgroundColor: "#F5F5F5",
        color: "#0A0F0F",
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-gray-200" />

        <div className="flex flex-col items-center text-center pt-12">
          <a href="#hero" className="mb-8">
            <img
              src="/images/logos/logo-a.svg"
              alt="Aayush Logo"
              className="h-8 w-auto"
            />
          </a>

          <nav className="flex items-center space-x-6 md:space-x-8 order-1 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer-link-underline font-medium text-slate-700 hover:text-slate-900 text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-8 mb-8 order-2">
            {socialLinks.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110"
              >
                <img src={social.icon} alt={social.alt} className="h-6 w-6" />
              </a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="w-full pt-8 order-3"
          >
            <p className="font-semibold text-lg text-slate-800">
              Engineered by Aayush Saini
            </p>
            <p className="text-sm text-slate-500 mt-2">
              &copy; {currentYear}. All Rights Reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
