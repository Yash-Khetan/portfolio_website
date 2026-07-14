import { motion } from 'framer-motion';
import { FiAward, FiStar } from 'react-icons/fi';

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 px-6 md:px-12 bg-gray-50 dark:bg-black text-black dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black dark:text-white uppercase transition-colors duration-300">
            Achievements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-white dark:bg-zinc-900/70 border border-gray-200 dark:border-zinc-800/40 p-8 rounded-2xl hover:border-gray-300 dark:hover:border-zinc-700 transition-all duration-300"
          >
            <FiAward className="text-4xl text-amber-400/80 mb-5" />
            <h3 className="text-xl font-heading font-bold mb-3 text-black dark:text-white">
              Top 10 Finalist — Barclays Hack-O-Hire
            </h3>
            <p className="text-gray-500 dark:text-zinc-400 font-sans text-[15px] leading-relaxed">
              Ranked among top teams out of 3000+ teams in a national-level hackathon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="bg-white dark:bg-zinc-900/70 border border-gray-200 dark:border-zinc-800/40 p-8 rounded-2xl hover:border-gray-300 dark:hover:border-zinc-700 transition-all duration-300"
          >
            <FiStar className="text-4xl text-amber-400/80 mb-5" />
            <h3 className="text-xl font-heading font-bold mb-3 text-black dark:text-white">
              Hackathon Winner — Bhavans College
            </h3>
            <p className="text-gray-500 dark:text-zinc-400 font-sans text-[15px] leading-relaxed">
              Won for building a real-time collaborative coding platform under strict time constraints.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
