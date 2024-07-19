'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Services } from '../components/Services';
import Image from 'next/image';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen w-full">
      <Image
        src="/backgroundtest.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="fixed inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <motion.main
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative z-20 flex items-center justify-center min-h-screen w-full overflow-y-auto py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-bold mb-8 text-white text-center"
          >
            Nuestros Servicios
          </motion.h1>
          <Services />
        </div>
      </motion.main>
    </div>
  );
}