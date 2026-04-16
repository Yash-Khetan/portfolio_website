import { motion } from 'framer-motion';
import Avatar from './Avatar';

export default function Hero() {
  const title = "I AM YASH KHETAN";
  const words = title.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-start"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 mb-8 shadow-sm transition-colors duration-300">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-gray-800 dark:text-zinc-200">Available for new opportunities</span>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="overflow-hidden flex flex-wrap"
        >
          {words.map((word, index) => (
            <motion.span
              variants={child}
              key={index}
              className="mr-4 text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-black dark:text-white leading-tight tracking-tighter transition-colors duration-300"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <h2 className="text-2xl md:text-3xl font-heading font-bold text-accent mt-4 mb-6 transition-colors duration-300">
          BACKEND DEVELOPER
        </h2>

        <p className="text-lg text-gray-600 dark:text-zinc-400 max-w-xl leading-relaxed mb-10 transition-colors duration-300">
          Specialized in Node.js, Spring Boot, scalable APIs, and system design. Currently building real-world backend systems and open to internship/full-time opportunities.
        </p>

        <div className="flex gap-4">
          <a href="#contact" className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg">
            Let's Talk
          </a>
          <a href="#projects" className="bg-white dark:bg-[#09090b] text-black dark:text-white border border-gray-300 dark:border-zinc-700 px-8 py-4 rounded-full font-medium hover:border-gray-800 dark:hover:border-zinc-500 transition-colors">
            View Work
          </a>
        </div>
      </motion.div>

      {/* Hero Avatar */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full max-w-md lg:max-w-xl flex justify-center lg:justify-end"
      >
        <div className="w-full aspect-square bg-blue-50/50 dark:bg-accent/5 rounded-[3rem] p-8 relative flex items-center justify-center transition-colors duration-300">
          <Avatar />
        </div>
      </motion.div>
    </section>
  );
}
