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
      <svg 
        viewBox="0 0 100 100" 
        width="100%" 
        height="100%" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
          <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F06292" />
            <stop offset="100%" stopColor="#D81B63" />
          </linearGradient>
        </defs>
        
        {/* Cupcake Wrapper */}
        <path 
          d="M30 60 L70 60 L65 85 L35 85 Z" 
          fill="url(#goldGrad)" 
          stroke="#B8860B" 
          strokeWidth="1"
        />
        <path 
          d="M30 60 L35 85 M40 60 L40 85 M50 60 L50 85 M60 60 L60 85 M70 60 L65 85" 
          stroke="#B8860B" 
          strokeWidth="1"
          opacity="0.4"
        />

        {/* Frosting - More organic shapes */}
        <motion.path 
          d="M20 60 Q20 30 35 30 Q40 25 50 30 Q60 25 65 30 Q80 30 80 60 Z" 
          fill="url(#pinkGrad)" 
          animate={{ 
            scaleY: [1, 1.03, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Frosting detail / highlight */}
        <path 
          d="M30 60 Q30 40 50 40 Q70 40 70 60 Z" 
          fill="#FCE4EC" 
          opacity="0.3"
        />

        {/* Cherry */}
        <motion.circle 
          cx="50" cy="22" r="7" 
          fill="#E91E63" 
          animate={{ 
            y: [0, -3, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity 
          }}
        />

        {/* Blushes */}
        <circle cx="35" cy="48" r="3" fill="#FFC1CC" opacity="0.6" />
        <circle cx="65" cy="48" r="3" fill="#FFC1CC" opacity="0.6" />

        {/* Eyes */}
        <g>
          <motion.circle 
            cx="40" cy="45" r="3" 
            fill="var(--text-main)"
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.2] }}
          />
          <motion.circle 
            cx="60" cy="45" r="3" 
            fill="var(--text-main)"
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.2] }}
          />
        </g>

        {/* Smile */}
        <path 
          d="M45 52 Q50 56 55 52" 
          stroke="var(--text-main)" 
          strokeWidth="2.5" 
          fill="none" 
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
};

export default Mascot;
