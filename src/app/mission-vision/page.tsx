'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { MissionVision } from '../components/MissionVision';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -50
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

export default function MissionVisionPage() {
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-gradient-to-b from-blue-100 to-white"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="relative mb-16"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 rounded-lg"></div>
          <img 
            src="/RDTRANSPORTES-MISSION.JPG" 
            alt="Misión y Visión" 
            className="relative z-10 w-full h-[600px] object-cover rounded-lg shadow-2xl"
          />
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-white text-xl font-semibold text-center">
              Construyendo el futuro del transporte
            </p>
          </motion.div>
        </motion.div>
        <MissionVision />
      </div>
    </motion.main>
  );
}