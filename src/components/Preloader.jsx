import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let step = 0;

    const counter = setInterval(() => {
      step++;
      // Ease-out curve for the counter
      const progress = 1 - Math.pow(1 - step / steps, 3);
      setCount(Math.min(Math.round(progress * 100), 100));
      if (step >= steps) clearInterval(counter);
    }, interval);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete?.(), 600);
    }, 2200);

    return () => {
      clearInterval(counter);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Name */}
          <div className="flex flex-col items-center gap-6">
            <motion.div className="preloader-text overflow-hidden">
              {['Y', 'A', 'S', 'H', '.'].map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-white/40 via-white to-white/40 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.0, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Counter */}
            <motion.span
              className="text-white/30 font-mono text-sm tracking-[0.3em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {String(count).padStart(3, '0')}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
