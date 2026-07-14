import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight } from 'react-icons/fi';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-12 bg-gray-100 dark:bg-black text-black dark:text-white rounded-t-[2.5rem] mt-16 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 tracking-tight">
            Let's work together.
          </h2>
          <p className="text-lg md:text-xl text-gray-500 dark:text-zinc-400 font-sans max-w-xl mx-auto mb-14 leading-relaxed transition-colors duration-300">
            I'm looking for backend internships and full-time roles where I can build real products from day one. Open to freelance projects too.
          </p>

          <a
            href={`mailto:${import.meta.env.VITE_GMAIL}`}
            className="inline-flex items-center gap-3 text-2xl md:text-4xl font-heading font-bold border-b-2 border-accent hover:text-accent transition-colors pb-1 mb-14 group"
          >
            {import.meta.env.VITE_GMAIL}
            <FiArrowUpRight className="text-xl group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex justify-center gap-4 mt-2">
            <a
              href={import.meta.env.VITE_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-gray-400 dark:hover:border-zinc-600 transition-all duration-200"
            >
              <FiLinkedin className="text-2xl" />
            </a>
            <a
              href={import.meta.env.VITE_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-gray-400 dark:hover:border-zinc-600 transition-all duration-200"
            >
              <FiGithub className="text-2xl" />
            </a>
            <a
              href={`mailto:${import.meta.env.VITE_GMAIL}`}
              className="p-3.5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-gray-400 dark:hover:border-zinc-600 transition-all duration-200"
            >
              <FiMail className="text-2xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
