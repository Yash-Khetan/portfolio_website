import { motion } from 'framer-motion';
import { FiAward, FiStar } from 'react-icons/fi';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 md:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-gray-400 block mb-2 font-sans tracking-wider">06</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold uppercase">Achievements</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl"
          >
            <FiAward className="text-5xl text-yellow-400 mb-6" />
            <h3 className="text-2xl font-heading font-bold mb-4">Top 10 Finalist — Barclays Hack-O-Hire</h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              Ranked among top teams out of 3000+ teams in a national-level hackathon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl"
          >
            <FiStar className="text-5xl text-yellow-400 mb-6" />
            <h3 className="text-2xl font-heading font-bold mb-4">Hackathon Winner — Bhavans College</h3>
            <p className="text-gray-400 font-sans leading-relaxed">
              Won for building a real-time collaborative coding platform under strict time constraints.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
