import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center md:text-left"
      >
        <span className="text-sm font-medium text-gray-400 dark:text-zinc-500 block mb-2 font-sans tracking-wider">07</span>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black dark:text-white uppercase transition-colors duration-300">Education</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800/50 p-10 md:p-14 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-8 transition-colors duration-300"
      >
        <div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-black dark:text-white mb-2 transition-colors duration-300">Sardar Patel Institute of Technology</h3>
          <p className="text-lg text-gray-600 dark:text-zinc-400 font-sans mb-4 transition-colors duration-300">B.Tech — Electronics and Telecommunication Engineering</p>
          <p className="text-gray-500 dark:text-zinc-500 font-sans font-medium text-sm mt-4">Mumbai, India</p>
        </div>
        
        <div className="text-left md:text-right flex flex-row md:flex-col gap-4 md:gap-2 items-center md:items-end">
          <span className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-heading font-bold text-lg select-none transition-colors duration-300">
            2024 – 2028
          </span>
          <span className="text-accent font-sans font-semibold p-2 border-2 border-accent/20 rounded-lg">
            CGPA: 8.6
          </span>
        </div>
      </motion.div>
    </section>
  );
}
