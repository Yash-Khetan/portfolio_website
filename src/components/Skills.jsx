import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="text-sm font-medium text-gray-400 dark:text-zinc-500 block mb-2 font-sans tracking-wider">05</span>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black dark:text-white uppercase transition-colors duration-300">My Skills</h2>
      </motion.div>

      <div className="space-y-12">
        {skills.map((skillGroup, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12"
          >
            <h3 className="text-xl font-heading font-bold text-black dark:text-white min-w-[150px] uppercase pt-2 transition-colors duration-300">
              {skillGroup.category}
            </h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skillGroup.items.map((item, i) => (
                <motion.span
                  key={i}
                  variants={itemVariants}
                  className="px-5 py-2.5 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-zinc-200 rounded-lg text-sm font-semibold font-sans hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
