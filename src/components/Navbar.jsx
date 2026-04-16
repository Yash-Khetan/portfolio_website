import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, toggleDarkMode }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
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
          { threshold: 0.5, rootMargin: "-10% 0px -40% 0px" }
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
      className="fixed top-0 inset-x-0 bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-md z-50 py-4 px-6 md:px-12 flex items-center justify-between shadow-sm dark:shadow-none dark:border-b dark:border-zinc-800 transition-colors duration-300"
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
            className={`text-sm font-medium transition-colors ${
              activeSection === link.href ? 'text-accent' : 'text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
            }`}
          >
            {link.name}
          </a>
        ))}
        <button onClick={toggleDarkMode} className="p-2 text-xl text-gray-600 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors">
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center gap-4">
        <button onClick={toggleDarkMode} className="p-2 text-xl text-gray-600 dark:text-zinc-400">
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-2xl text-black dark:text-white">
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 right-0 bg-white dark:bg-[#09090b] p-6 shadow-xl flex flex-col gap-4 border-t dark:border-zinc-800"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-heading font-bold ${
                activeSection === link.href ? 'text-accent' : 'text-black dark:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
