import { motion } from 'framer-motion';

const line = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center max-w-7xl mx-auto">
      <div className="max-w-4xl">
        {/* Name */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.7, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold text-black dark:text-white leading-[0.9] tracking-tighter transition-colors duration-300"
          >
            Yash Khetan
          </motion.h1>
        </div>

        {/* Role */}
        <div className="overflow-hidden mb-8">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.6, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-sans font-medium text-gray-500 dark:text-zinc-500 transition-colors duration-300"
          >
            Backend Developer
          </motion.p>
        </div>

        {/* Bio — one punchy line */}
        <motion.p
          custom={0}
          variants={line}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.3 }}
          className="text-lg md:text-xl text-gray-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-12 font-sans transition-colors duration-300"
        >
          I build backend systems that scale — APIs, async pipelines, and data-heavy platforms. 
          Currently shipping production apps and open to internship & full-time roles.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-medium font-sans hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="bg-transparent text-black dark:text-white border border-gray-300 dark:border-zinc-700 px-8 py-4 rounded-full font-medium font-sans hover:border-black dark:hover:border-zinc-400 transition-colors"
          >
            View Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
