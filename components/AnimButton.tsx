import React from 'react';
import { motion } from 'framer-motion';

interface AnimButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'cine' | 'ai';
  children: React.ReactNode;
}

export const AnimButton: React.FC<AnimButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  let baseStyles = "px-6 py-2 rounded-full font-bold transition-all flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/10",
    ghost: "bg-transparent text-gray-300 hover:text-white",
    cine: "bg-cine-gold text-black hover:bg-amber-400 shadow-lg shadow-amber-900/20",
    ai: "bg-ai-cyan text-black hover:bg-cyan-300 shadow-lg shadow-cyan-900/20",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};