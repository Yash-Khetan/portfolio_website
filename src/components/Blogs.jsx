import { motion } from 'framer-motion';
import { FiExternalLink, FiBookOpen, FiCpu } from 'react-icons/fi';
import { blogs } from '../data/blogs';

const platformIcons = {
  medium: <FiBookOpen />,
  hashnode: <FiCpu />,
};

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="py-24 px-6 md:px-12 bg-gray-50 dark:bg-[#09090b] border-t border-gray-200 dark:border-zinc-800/50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black dark:text-white uppercase transition-colors duration-300">
            Blogs
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-500 dark:text-zinc-500 font-sans text-base md:text-lg max-w-2xl mb-14 leading-relaxed"
        >
          I write to learn and to share. Technical deep-dives, architecture lessons,
          and things I wish I knew earlier.
        </motion.p>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <motion.a
              key={blog.id}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`group relative flex flex-col p-8 rounded-2xl border transition-all duration-300 overflow-hidden hover:scale-[1.02] ${
                blog.icon === 'hashnode'
                  ? 'bg-[#0A0E1A] dark:bg-[#0A0E1A] border-[#2962FF]/20 hover:border-[#2962FF]/50 hover:shadow-[0_0_40px_-12px_rgba(41,98,255,0.3)]'
                  : 'bg-white dark:bg-zinc-900/70 border-gray-200 dark:border-zinc-800/40 hover:border-gray-400 dark:hover:border-zinc-600 hover:shadow-lg'
              }`}
            >
              {/* Glow effect for hashnode */}
              {blog.icon === 'hashnode' && (
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#2962FF]/10 rounded-full blur-3xl group-hover:bg-[#2962FF]/20 transition-all duration-500" />
              )}

              {/* Icon + Platform */}
              <div className="flex items-center gap-3 mb-4 relative">
                <div
                  className={`text-2xl p-2.5 rounded-xl transition-colors duration-300 ${
                    blog.icon === 'hashnode'
                      ? 'bg-[#2962FF]/10 text-[#6C9CFF] group-hover:bg-[#2962FF]/20'
                      : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white'
                  }`}
                >
                  {platformIcons[blog.icon]}
                </div>
                <div>
                  <h3
                    className={`text-lg font-heading font-bold transition-colors duration-200 ${
                      blog.icon === 'hashnode'
                        ? 'text-white group-hover:text-[#6C9CFF]'
                        : 'text-black dark:text-white group-hover:text-accent'
                    }`}
                  >
                    {blog.platform}
                  </h3>
                  {blog.icon === 'hashnode' && (
                    <span className="inline-block px-2 py-0.5 bg-[#2962FF]/15 text-[#6C9CFF] text-[10px] font-bold uppercase tracking-wider rounded-md mt-0.5">
                      System Design
                    </span>
                  )}
                </div>
              </div>

              {/* Tagline */}
              <p
                className={`text-sm font-semibold font-sans mb-3 ${
                  blog.icon === 'hashnode'
                    ? 'text-[#6C9CFF]/70'
                    : 'text-accent/70'
                }`}
              >
                {blog.tagline}
              </p>

              {/* Description */}
              <p
                className={`font-sans text-[15px] leading-relaxed mb-8 flex-1 ${
                  blog.icon === 'hashnode'
                    ? 'text-zinc-400'
                    : 'text-gray-500 dark:text-zinc-400'
                }`}
              >
                {blog.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 mt-auto">
                <span
                  className={`font-sans font-semibold text-sm transition-colors duration-200 ${
                    blog.icon === 'hashnode'
                      ? 'text-[#6C9CFF] group-hover:text-white'
                      : 'text-accent group-hover:text-black dark:group-hover:text-white'
                  }`}
                >
                  Read on {blog.platform}
                </span>
                <FiExternalLink
                  className={`text-sm transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    blog.icon === 'hashnode'
                      ? 'text-[#6C9CFF]'
                      : 'text-accent'
                  }`}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
