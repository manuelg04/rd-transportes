'use client'
import { motion } from 'framer-motion';
import { Contact } from '../components/Contact';

export default function ContactPage() {
  return (
    <motion.main 
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-4xl font-bold text-center py-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Contáctenos
      </motion.h1>
      <div className="flex-grow">
        <Contact />
      </div>
    </motion.main>
  );
}