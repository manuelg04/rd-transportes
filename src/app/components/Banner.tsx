'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Heart, CheckCircle, Clock, Zap, Award } from 'lucide-react';

const values = [
  { title: "Compromiso", description: "Nos comprometemos con nuestros clientes y su carga.", icon: Shield },
  { title: "Lealtad", description: "Mantenemos relaciones duraderas basadas en la confianza.", icon: Heart },
  { title: "Honestidad", description: "Actuamos con integridad en todas nuestras operaciones.", icon: CheckCircle },
  { title: "Seriedad", description: "Cumplimos con nuestros compromisos y obligaciones.", icon: Clock },
  { title: "Diligencia", description: "Actuamos con rapidez y eficacia en nuestras operaciones.", icon: Zap },
  { title: "Responsabilidad", description: "Asumimos la responsabilidad de nuestras acciones y decisiones.", icon: Award },
];

const ValueCard = ({ title, description, icon: Icon, index }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md backdrop-blur-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="text-blue-600 mb-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon size={40} />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

export const ValuesBanner = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/truck-banner.jpg"
          alt="Fondo de camión"
          fill
          
          quality={100}
        />
        <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-white shadow-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestros Valores
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-yellow-400 mx-auto mb-12"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} index={index} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
};