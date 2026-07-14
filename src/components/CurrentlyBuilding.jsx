import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const techStack = ['Node.js', 'Playwright', 'Cheerio', 'React.js', 'Vercel', 'Render', 'Docker'];

const currentHighlights = [
  'Automated job aggregation',
  'Multi-source scraping pipeline',
  'Fast search experience',
  'Clean responsive interface',
  'Production deployment on Vercel',
];

const workingOn = [
  'Resume-based job matching',
  'Saved jobs',
  'Personalized recommendations',
  'Job tracking dashboard',
  'Email notifications',
  'Better filtering',
];

export default function CurrentlyBuilding() {
  return (
    <section id="currently-building" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white uppercase">
            Currently Building<span className="text-[#FFD54F]">.</span>
          </h2>
        </motion.div>

        {/* Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="currently-building-card group"
        >
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD54F]/10 border border-[#FFD54F]/25 rounded-full text-[#FFD54F] text-sm font-semibold font-sans tracking-wide">
              🚧 Building in Public
            </span>
          </div>

          {/* Title + Tagline */}
          <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-3 group-hover:text-[#FFD54F] transition-colors duration-300">
            Job Pilot
          </h3>
          <p className="text-[#FFD54F]/70 font-sans font-medium text-base mb-6">
            A modern job discovery platform that aggregates opportunities from multiple job portals into one seamless experience.
          </p>

          {/* Description */}
          <p className="text-zinc-400 font-sans leading-relaxed text-[15px] mb-10 max-w-3xl">
            Job Pilot is a production-focused platform I'm currently building to simplify the internship and job search process. Instead of manually checking multiple websites every day, the platform continuously aggregates listings from different sources and presents them through a clean, searchable interface.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Current Highlights */}
            <div>
              <h4 className="text-sm font-semibold text-[#FFD54F]/80 uppercase tracking-wider font-sans mb-4">
                Current Highlights
              </h4>
              <ul className="space-y-2.5">
                {currentHighlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * i }}
                    className="flex items-center gap-3 text-zinc-300 font-sans text-[15px]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD54F] shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Currently Working On */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider font-sans mb-4">
                Currently Working On
              </h4>
              <ul className="space-y-2.5">
                {workingOn.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * i }}
                    className="flex items-center gap-3 text-zinc-500 font-sans text-[15px]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-10">
            <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider font-sans mb-4">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-[#FFD54F]/10 text-[#FFD54F] border border-[#FFD54F]/15 rounded-full text-xs font-semibold font-sans"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <a
              href="https://job-pilot-delta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#FFD54F] text-black font-heading font-bold text-base rounded-xl hover:bg-[#FFCA28] hover:shadow-[0_0_30px_rgba(255,213,79,0.25)] transition-all duration-300 group/btn"
            >
              Visit Live Project
              <FiExternalLink className="text-lg group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>

          {/* Footer text */}
          <p className="text-zinc-600 font-sans text-sm italic mb-6">
            Actively shipping new features and improvements.
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-5" />

          {/* Status */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-zinc-500 font-sans text-sm font-medium">
              🟢 Active Development
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
