import { motion } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import ParticleCanvas from './ParticleCanvas';

/* ── Text Scramble Hook ── */
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

function useTextScramble(target, { delay = 1800, duration = 1200 } = {}) {
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let frame;
    const startTime = Date.now() + delay;
    const len = target.length;

    const tick = () => {
      const now = Date.now();
      if (now < startTime) {
        // Still waiting — show random chars progressively
        const revealCount = Math.min(
          len,
          Math.floor(((now - (startTime - delay)) / delay) * len * 0.3)
        );
        let result = '';
        for (let i = 0; i < len; i++) {
          if (target[i] === ' ') {
            result += ' ';
          } else if (i < revealCount) {
            result += chars[Math.floor(Math.random() * chars.length)];
          } else {
            result += ' ';
          }
        }
        setDisplay(result);
        frame = requestAnimationFrame(tick);
        return;
      }

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      let result = '';
      for (let i = 0; i < len; i++) {
        if (target[i] === ' ') {
          result += ' ';
        } else if (progress * len > i) {
          result += target[i];
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplay(result);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(target);
        setDone(true);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, delay, duration]);

  return { display, done };
}

/* ── Roles for typewriter ── */
const roles = [
  'Backend Developer',
  'System Design Enthusiast',
  'API Architect',
  'Open Source Builder',
];

function useTypewriter(words, { typeSpeed = 80, deleteSpeed = 50, pauseTime = 2000 } = {}) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentWord.substring(0, text.length - 1)
              : currentWord.substring(0, text.length + 1)
          );
        },
        isDeleting ? deleteSpeed : typeSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typeSpeed, deleteSpeed, pauseTime]);

  return text;
}

export default function Hero() {
  const { display: scrambledName, done: nameDone } = useTextScramble('Yash Khetan', {
    delay: 1800,
    duration: 1000,
  });
  const typedRole = useTypewriter(roles, { typeSpeed: 70, deleteSpeed: 40, pauseTime: 2200 });
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-[#09090b]/90 pointer-events-none z-[1]" />

      <div className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          {/* Name — Text Scramble */}
          <div className="overflow-hidden mb-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold text-black dark:text-white leading-[0.9] tracking-tighter transition-colors duration-300">
              <span className="inline-block relative">
                {scrambledName}
                {!nameDone && (
                  <span className="absolute -right-1 top-0 bottom-0 w-[3px] bg-accent animate-cursor-blink" />
                )}
              </span>
            </h1>
          </div>

          {/* Role — Typewriter */}
          <div className="overflow-hidden mb-8 h-10 md:h-12">
            <p className="text-xl md:text-2xl font-sans font-medium text-gray-500 dark:text-zinc-500 transition-colors duration-300">
              {typedRole}
              <span className="inline-block w-[2px] h-5 md:h-6 bg-gray-500 dark:bg-zinc-500 ml-1 align-middle animate-cursor-blink" />
            </p>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-gray-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-12 font-sans transition-colors duration-300"
          >
            I obsess over backend architectures — APIs that don't break at scale,
            async pipelines that feel instant, and databases that stay fast at 3AM.
            Currently shipping production apps, writing about system design, and open
            to roles where I can build from day one.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group relative bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-medium font-sans shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
            >
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#projects"
              className="bg-transparent text-black dark:text-white border border-gray-300 dark:border-zinc-700 px-8 py-4 rounded-full font-medium font-sans hover:border-black dark:hover:border-zinc-400 hover:scale-[1.03] transition-all duration-300"
            >
              View Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-sans text-gray-400 dark:text-zinc-600 uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiChevronDown className="text-xl text-gray-400 dark:text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
