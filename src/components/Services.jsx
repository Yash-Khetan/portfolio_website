import { motion } from 'framer-motion';
import { FiServer, FiDatabase, FiLayers, FiCode } from 'react-icons/fi';

const services = [
  {
    title: "Backend APIs",
    description: "Fast, secure RESTful APIs with Node.js and Spring Boot.",
    icon: <FiServer />,
  },
  {
    title: "Database Design",
    description: "Schema architecture and query tuning — PostgreSQL, MongoDB, Redis.",
    icon: <FiDatabase />,
  },
  {
    title: "System Design",
    description: "Scalable architectures with async queues, caching, and fault tolerance.",
    icon: <FiLayers />,
  },
  {
    title: "Full-Stack Apps",
    description: "End-to-end MERN stack with clean frontends and solid backends.",
    icon: <FiCode />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black dark:text-white uppercase transition-colors duration-300">
          What I Do
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="p-7 rounded-2xl bg-gray-50 dark:bg-zinc-900/70 border border-gray-100 dark:border-zinc-800/40 hover:border-gray-300 dark:hover:border-zinc-700 transition-all duration-300 group"
          >
            <div className="text-2xl text-gray-400 dark:text-zinc-600 mb-5 group-hover:text-accent dark:group-hover:text-blue-400 transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-lg font-heading font-bold text-black dark:text-white mb-2 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-500 dark:text-zinc-500 text-[15px] leading-relaxed font-sans transition-colors duration-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
