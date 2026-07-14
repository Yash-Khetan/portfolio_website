import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black dark:text-white uppercase transition-colors duration-300">
          Recent Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex flex-col bg-white dark:bg-zinc-900/70 border border-gray-200 dark:border-zinc-800/40 rounded-2xl p-7 hover:border-gray-400 dark:hover:border-zinc-600 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 group"
          >
            <div className="flex justify-between items-start mb-5">
              <div>
                <h3 className="text-xl font-heading font-bold text-black dark:text-white mb-1.5 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 dark:text-zinc-500 font-sans">
                  {project.date}
                </p>
              </div>
              <div className="flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gray-100 dark:bg-zinc-800 rounded-lg text-gray-600 dark:text-zinc-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                    title="Source Code"
                  >
                    <FiGithub className="text-lg" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-gray-100 dark:bg-zinc-800 rounded-lg text-gray-600 dark:text-zinc-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                    title="Live Demo"
                  >
                    <FiExternalLink className="text-lg" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-gray-500 dark:text-zinc-400 leading-relaxed font-sans text-[15px] mb-6 flex-1 transition-colors duration-300">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-gray-100 dark:bg-zinc-800/60 text-gray-600 dark:text-zinc-400 rounded-md text-xs font-medium font-sans transition-colors duration-300"
                >
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
