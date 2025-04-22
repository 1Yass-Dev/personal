import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, delay = 0 }) => {
  return (
    <motion.div
      className="glass rounded-xl p-5 flex flex-col items-center justify-center glow-sm hover:glow group"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: delay * 0.1,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="text-primary-400 mb-3 p-3 bg-gray-800 rounded-lg"
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-medium text-gray-200 group-hover:text-primary-400 transition-colors duration-300">
        {name}
      </h3>
    </motion.div>
  );
};

export default SkillCard;