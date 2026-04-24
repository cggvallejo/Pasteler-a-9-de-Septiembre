import React from 'react';
import { motion } from 'framer-motion';

const Mascot = ({ size = 60, className = "" }) => {
  return (
    <motion.div 
      className={`relative flex items-center justify-center ${className}`}
      animate={{ 
        y: [0, -8, 0],
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      style={{ width: size, height: size }}
    >
      <img 
        src="/mascot_chef.png" 
        alt="Mascota Pastelería 9 de Septiembre" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain' 
        }} 
      />
    </motion.div>
  );
};

export default Mascot;

