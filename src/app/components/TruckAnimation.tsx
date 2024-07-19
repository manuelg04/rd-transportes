'use client';
import React from 'react';
import { motion } from 'framer-motion';

const TruckAnimation: React.FC = () => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: '100%' }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 10,
        ease: 'linear'
      }}
      className="fixed bottom-0 left-0 w-1/4 h-auto z-20"
    >
      <img src="/truck.png" alt="Truck" />
    </motion.div>
  );
};

export default TruckAnimation;
