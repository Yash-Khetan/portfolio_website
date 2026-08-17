import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Blogs', href: '#blogs' },
  { name: 'Videos', href: '#videos' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, toggleDarkMode }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileMenuOpen(false);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const observers = [];
    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(link.href);
              }
            });
          },
          { threshold: 0.3, rootMargin: "-10% 0px -40% 0px" }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 py-4 px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-zinc-800/50'
          : 'bg-transparent'
      }`}
    >
      <a href="#" className="font-heading font-black text-2xl tracking-tighter text-black dark:text-white">
        YASH.
      </a>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`text-sm font-medium font-sans transition-colors duration-200 ${
              activeSection === link.href
                ? 'text-black dark:text-white'
                : 'text-gray-400 dark:text-zinc-500 hover:text-black dark:hover:text-white'
            }`}
          >
            {link.name}
          </a>
        ))}
        <button
          onClick={toggleDarkMode}
          className="p-2 text-lg text-gray-400 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center gap-3">
        <button onClick={toggleDarkMode} className="p-2 text-lg text-gray-500 dark:text-zinc-400">
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-2xl text-black dark:text-white"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl p-6 flex flex-col gap-4 border-b border-gray-200 dark:border-zinc-800"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-heading font-bold ${
                  activeSection === link.href
                    ? 'text-black dark:text-white'
                    : 'text-gray-500 dark:text-zinc-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
