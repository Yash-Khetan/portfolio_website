import { motion } from 'framer-motion';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-gray-50 dark:bg-[#09090b] border-t border-gray-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-gray-400 dark:text-zinc-500 block mb-2 font-sans tracking-wider">04</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black dark:text-white uppercase transition-colors duration-300">Experience</h2>
        </motion.div>

        <div className="relative border-l-2 border-accent/20 pl-8 ml-4 space-y-16">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-white dark:bg-zinc-900 border-4 border-accent rounded-full transition-colors duration-300"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
                <h3 className="text-2xl font-heading font-bold text-black dark:text-white transition-colors duration-300">{exp.role}</h3>
                <span className="text-lg font-medium text-accent">@ {exp.company}</span>
              </div>
              <p className="inline-block px-3 py-1 bg-gray-200 dark:bg-zinc-800 rounded-md text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-6 font-sans transition-colors duration-300">
                {exp.date}
              </p>
              
              <ul className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-gray-600 dark:text-zinc-400 font-sans leading-relaxed flex items-start transition-colors duration-300">
                    <span className="text-accent mr-2 mt-1.5 min-w-[8px] h-2 w-2 rounded-full bg-accent/70 inline-block"></span>
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
