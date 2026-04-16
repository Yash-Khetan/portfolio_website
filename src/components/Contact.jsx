import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight } from 'react-icons/fi';
export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-black text-white rounded-t-[3rem] mt-24">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold mb-8 tracking-tight">
            Let's build something together.
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-sans max-w-2xl mx-auto mb-16 leading-relaxed">
            Open to backend internships, full-time roles, and freelance projects.
          </p>

          <a
            href={`mailto:${import.meta.env.VITE_GMAIL}`}
            className="inline-flex items-center gap-3 text-3xl md:text-5xl font-heading font-bold border-b-4 border-accent hover:text-accent transition-colors pb-2 mb-16 group"
          >
            {import.meta.env.VITE_GMAIL}
            <FiArrowUpRight className="group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform" />
          </a>

          <div className="flex justify-center gap-6">
            <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
              <FiLinkedin className="text-3xl" />
            </a>
            <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
              <FiGithub className="text-3xl" />
            </a>
            <a href={`mailto:${import.meta.env.VITE_GMAIL}`} className="p-4 bg-zinc-900 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
              <FiMail className="text-3xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
