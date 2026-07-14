import { motion } from 'framer-motion';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 bg-gray-50 dark:bg-[#09090b] border-t border-gray-200 dark:border-zinc-800/50 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black dark:text-white uppercase transition-colors duration-300">
            Experience
          </h2>
        </motion.div>

        <div className="relative border-l border-gray-300 dark:border-zinc-800 pl-8 ml-3 space-y-14">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[37px] top-2 w-3 h-3 bg-gray-300 dark:bg-zinc-700 rounded-full transition-colors duration-300" />

              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3 mb-3">
                <h3 className="text-xl font-heading font-bold text-black dark:text-white transition-colors duration-300">
                  {exp.role}
                </h3>
                <span className="text-base font-medium text-accent font-sans">
                  @ {exp.company}
                </span>
              </div>

              <p className="inline-block px-3 py-1 bg-gray-200 dark:bg-zinc-800/60 rounded-md text-xs font-semibold text-gray-600 dark:text-zinc-400 mb-5 font-sans transition-colors duration-300">
                {exp.date}
              </p>

              <ul className="space-y-2.5">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-gray-500 dark:text-zinc-400 font-sans text-[15px] leading-relaxed flex items-start transition-colors duration-300"
                  >
                    <span className="mt-2 mr-3 min-w-[5px] h-[5px] rounded-full bg-gray-400 dark:bg-zinc-600 inline-block shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
