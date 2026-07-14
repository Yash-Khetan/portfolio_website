import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black dark:text-white uppercase transition-colors duration-300">
          Education
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 dark:bg-zinc-900/70 border border-gray-200 dark:border-zinc-800/40 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-colors duration-300"
      >
        <div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-black dark:text-white mb-2 transition-colors duration-300">
            Sardar Patel Institute of Technology
          </h3>
          <p className="text-base text-gray-500 dark:text-zinc-400 font-sans mb-1 transition-colors duration-300">
            B.Tech — Electronics and Telecommunication Engineering
          </p>
          <p className="text-gray-400 dark:text-zinc-500 font-sans text-sm">
            Mumbai, India
          </p>
        </div>

        <div className="flex flex-row md:flex-col gap-3 md:gap-2 items-center md:items-end">
          <span className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-heading font-bold text-sm transition-colors duration-300">
            2024 – 2028
          </span>
          <span className="text-accent font-sans font-semibold text-sm px-3 py-1.5 border border-accent/20 rounded-lg">
            CGPA: 8.6
          </span>
        </div>
      </motion.div>
    </section>
  );
}
