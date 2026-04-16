import { motion } from 'framer-motion';
import avatarImg from '../assets/developer_avatar.png';
import { FaReact, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';

export default function Avatar() {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-4">
      {/* Background Glow Effect */}
      <motion.div
        animate={{ scale: [0.9, 1.05, 0.9], rotate: [0, 45, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-full h-full bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-accent/20 rounded-full blur-[60px] -z-10"
      />

      {/* Main Avatar Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 15, stiffness: 100 }}
        className="relative w-[90%] h-[90%] md:w-[85%] md:h-[85%]"
      >
        <div className="absolute inset-0 rounded-[2.5rem] md:rounded-full bg-gradient-to-br from-accent via-purple-500 to-blue-600 p-[3px] shadow-2xl overflow-visible">
          <div className="w-full h-full bg-zinc-950 rounded-[2.3rem] md:rounded-full overflow-hidden shadow-inner relative group">
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
            
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src={avatarImg} 
              alt="Developer Avatar" 
              className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Floating Tech Stack Icons */}
        <FloatingIcon icon={<FaReact className="text-[#61DAFB] text-3xl md:text-4xl" />} delay={0} x="-5%" y="10%" />
        <FloatingIcon icon={<FaNodeJs className="text-[#339933] text-3xl md:text-4xl" />} delay={1.2} x="88%" y="15%" />
        <FloatingIcon icon={<FaPython className="text-[#3776AB] text-3xl md:text-4xl" />} delay={2.5} x="85%" y="75%" />
        <FloatingIcon icon={<FaDocker className="text-[#2496ED] text-3xl md:text-4xl" />} delay={3.8} x="-2%" y="80%" />
      </motion.div>
    </div>
  );
}

function FloatingIcon({ icon, delay, x, y }) {
  return (
    <motion.div
      className="absolute bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-gray-200 dark:border-zinc-700/50 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl z-20 flex items-center justify-center transform-gpu"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
      transition={{ 
        opacity: { duration: 0.5, delay },
        scale: { type: "spring", damping: 10, delay },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay }
      }}
      whileHover={{ scale: 1.15, rotate: 5, zIndex: 30 }}
    >
      {icon}
    </motion.div>
  );
}
