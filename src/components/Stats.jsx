import { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function Counter({ from, to, duration = 2, decimals = 0, suffix = "" }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Number(value.toFixed(decimals)));
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, decimals, inView]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-heading font-extrabold text-black dark:text-white transition-colors duration-300">
      {count}{suffix}
    </span>
  );
}

const statsData = [
  { value: 10, label: "Projects", suffix: "+" },
  { value: 2, label: "Internships", suffix: "" },
  { value: 8.6, label: "CGPA", suffix: "", decimals: 1 }
];

export default function Stats() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-zinc-900 border-y border-gray-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="flex flex-col items-center md:items-start"
          >
            <Counter from={0} to={stat.value} decimals={stat.decimals || 0} suffix={stat.suffix} />
            <p className="text-gray-600 dark:text-zinc-400 font-medium font-sans mt-3 uppercase tracking-wide text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
