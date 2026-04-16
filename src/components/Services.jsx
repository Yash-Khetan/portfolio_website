import { motion } from 'framer-motion';
import { FiServer, FiDatabase, FiLayers, FiCode } from 'react-icons/fi';

const services = [
  {
    title: "Backend APIs",
    description: "Design and build fast, secure RESTful APIs using Node.js or Spring Boot.",
    icon: <FiServer className="text-3xl text-accent" />
  },
  {
    title: "Database Architecture",
    description: "Schema design, query optimization with PostgreSQL, MongoDB & Redis.",
    icon: <FiDatabase className="text-3xl text-accent" />
  },
  {
    title: "System Design",
    description: "Scalable, fault-tolerant architectures with async queues and caching layers.",
    icon: <FiLayers className="text-3xl text-accent" />
  },
  {
    title: "Full-Stack Development",
    description: "End-to-end MERN stack apps with clean frontend and robust backend.",
    icon: <FiCode className="text-3xl text-accent" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="text-sm font-medium text-gray-400 dark:text-zinc-500 block mb-2 font-sans tracking-wider">01</span>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black dark:text-white uppercase transition-colors duration-300">What I Can Help You With</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-100/50 dark:bg-blue-900/20 flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-heading font-bold text-black dark:text-white mb-3 transition-colors duration-300">{service.title}</h3>
            <p className="text-gray-600 dark:text-zinc-400 leading-relaxed font-sans transition-colors duration-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
