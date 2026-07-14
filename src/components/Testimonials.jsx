import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FiLinkedin, FiStar } from 'react-icons/fi';

const testimonials = [

];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <FiStar key={i} className="w-4 h-4 text-[#FFD54F] fill-[#FFD54F]" />
      ))}
    </div>
  );
}

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase();
}

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="glass-card p-8 w-[340px] md:w-[380px] flex flex-col"
    >
      {/* Header — avatar + info */}
      <div className="flex items-center gap-4 mb-5">
        {/* Avatar / Initials */}
        <div className="w-12 h-12 rounded-full bg-[#FFD54F]/15 border border-[#FFD54F]/20 flex items-center justify-center shrink-0">
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-[#FFD54F] font-heading font-bold text-sm">
              {getInitials(testimonial.name)}
            </span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="text-white font-heading font-bold text-base truncate">
              {testimonial.name}
            </h4>
            {testimonial.linkedin && (
              <a
                href={testimonial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-[#FFD54F] transition-colors shrink-0"
              >
                <FiLinkedin className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <p className="text-zinc-500 text-sm font-sans truncate">
            {testimonial.position} · {testimonial.company}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-4">
        <StarRating count={testimonial.rating} />
      </div>

      {/* Review Text */}
      <p className="text-zinc-400 font-sans text-[14.5px] leading-relaxed flex-1">
        "{testimonial.text}"
      </p>
    </motion.div>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white uppercase">
            What People Say<span className="text-[#FFD54F]">.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-zinc-500 font-sans text-base md:text-lg max-w-2xl mb-14 leading-relaxed"
        >
          Feedback from founders, teammates, mentors, clients, and people I've had the opportunity to work with.
        </motion.p>

        {/* Carousel */}
        <div ref={trackRef} className="testimonials-track mb-16">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>

        {/* Leave a Recommendation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <button
            disabled
            className="px-8 py-3.5 bg-zinc-900 text-zinc-500 font-heading font-bold text-sm rounded-xl border border-zinc-800 cursor-not-allowed mb-4"
          >
            Leave a Recommendation · Coming Soon
          </button>
          <p className="text-zinc-600 font-sans text-sm max-w-lg mx-auto leading-relaxed">
            Recommendations will be collected from collaborators, internship mentors, founders, and clients as I continue building products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
