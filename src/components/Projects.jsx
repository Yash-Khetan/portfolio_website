import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="text-sm font-medium text-gray-400 dark:text-zinc-500 block mb-2 font-sans tracking-wider">03</span>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black dark:text-white uppercase transition-colors duration-300">Recent Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 hover:shadow-2xl dark:shadow-none transition-all duration-300 group"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-heading font-bold text-black dark:text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-zinc-400 font-sans">{project.date}</p>
              </div>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-zinc-800 rounded-full text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors" title="View Source">
                    <FiGithub className="text-xl" />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-50 dark:bg-zinc-800 rounded-full text-accent dark:text-blue-400 hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white transition-colors" title="Live Demo">
                    <FiExternalLink className="text-xl" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-gray-600 dark:text-zinc-300 leading-relaxed font-sans mb-8 flex-1 transition-colors duration-300">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.stack.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-accent dark:text-blue-400 rounded-full text-xs font-semibold font-sans transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
