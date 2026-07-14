import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black dark:text-white uppercase transition-colors duration-300">
          Skills
        </h2>
      </motion.div>

      <div className="space-y-10">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="flex flex-col md:flex-row md:items-start gap-3 md:gap-10"
          >
            <h3 className="text-sm font-sans font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider min-w-[120px] pt-2 transition-colors duration-300">
              {skillGroup.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-100 dark:bg-zinc-800/60 text-gray-700 dark:text-zinc-300 rounded-lg text-sm font-medium font-sans border border-transparent hover:border-gray-300 dark:hover:border-zinc-600 transition-all duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
