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
        className="mb-6"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black dark:text-white uppercase transition-colors duration-300">
          Skills
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-gray-500 dark:text-zinc-500 font-sans text-base max-w-2xl mb-14 leading-relaxed"
      >
        Backend engineering and AI/ML are my primary focus — building systems that
        are reliable, scalable, and solve real problems.
      </motion.p>

      {/* 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skills.map((group, index) => {
          const isPrimary = group.priority === 'primary';

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                isPrimary
                  ? 'bg-gray-50 dark:bg-[#0f1118] border-gray-200 dark:border-zinc-800/60 hover:border-gray-300 dark:hover:border-zinc-700'
                  : 'bg-gray-50/60 dark:bg-[#0c0d12] border-gray-100 dark:border-zinc-800/30 hover:border-gray-200 dark:hover:border-zinc-800'
              }`}
            >
              {/* Category heading */}
              <h3 className={`text-lg font-heading font-bold mb-5 flex items-center gap-2.5 transition-colors duration-300 ${
                isPrimary
                  ? 'text-black dark:text-white'
                  : 'text-gray-600 dark:text-zinc-400'
              }`}>
                <span className="text-xl">{group.emoji}</span>
                {group.category}
              </h3>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] font-semibold font-sans transition-transform duration-200 hover:scale-105"
                      style={{
                        backgroundColor: skill.bg,
                        color: skill.dark ? '#111' : '#fff',
                      }}
                    >
                      <Icon className="text-sm shrink-0" />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
