import { motion } from 'framer-motion';
import { FiPlay, FiFilm } from 'react-icons/fi';
import { videos } from '../data/videos';

export default function VideoEdits() {
  return (
    <section id="videos" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black dark:text-white uppercase transition-colors duration-300">
          Video Edits
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-gray-500 dark:text-zinc-500 font-sans text-base md:text-lg max-w-2xl mb-14 leading-relaxed"
      >
        Beyond code, I love crafting visual stories. Here are some of my favourite
        video edits — transitions, motion, and storytelling through film.
      </motion.p>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-gray-50 dark:bg-zinc-900/70 border border-gray-200 dark:border-zinc-800/40 rounded-2xl overflow-hidden hover:border-gray-400 dark:hover:border-zinc-600 hover:shadow-lg dark:hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)] transition-all duration-300"
          >
            {/* Video Player */}
            <div className="relative aspect-video bg-black">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                playsInline
              >
                <source src={video.src} type={video.src.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
                Your browser does not support the video tag.
              </video>

              {/* Play overlay hint — disappears when video controls are shown */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <FiPlay className="text-white text-xl ml-0.5" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <FiFilm className="text-gray-400 dark:text-zinc-600 text-sm" />
                <span className="text-xs font-sans font-semibold text-gray-400 dark:text-zinc-600 uppercase tracking-wider">
                  Video Edit
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-black dark:text-white mb-2 group-hover:text-accent transition-colors duration-200">
                {video.title}
              </h3>
              <p className="text-gray-500 dark:text-zinc-400 font-sans text-[15px] leading-relaxed">
                {video.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty state */}
      {videos.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-20"
        >
          <FiFilm className="text-5xl text-gray-300 dark:text-zinc-700 mx-auto mb-4" />
          <p className="text-gray-400 dark:text-zinc-600 font-sans">
            Video edits coming soon.
          </p>
        </motion.div>
      )}
    </section>
  );
}
