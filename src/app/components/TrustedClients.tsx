'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ThumbsUp, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const clients = [
  { name: "Distraves", logo: "/distraves.png", feedback: "Excelente servicio, siempre puntuales.", rating: 5 },
  { name: "Zenu", logo: "/zenu.png", feedback: "La mejor opción para carga refrigerada.", rating: 4 },
  { name: "Nutresa", logo: "/nutresa.png", feedback: "Profesionales en cada aspecto del transporte.", rating: 5 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export function TrustedClients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clients.length) % clients.length);
  };

  return (
    <div className="relative py-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/RDTRANSPORTES-TEAM.jpg"
          alt="Equipo RD Transportes"
          fill
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-2 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Clientes que Confían en Nosotros
        </motion.h2>
        <motion.p 
          className="text-center text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Descubre por qué las mejores empresas eligen RD Transportes
        </motion.p>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <Card className="w-full max-w-2xl hover:shadow-xl transition-shadow duration-300 bg-white bg-opacity-90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <img src={clients[currentIndex].logo} alt={clients[currentIndex].name} className="h-16 w-auto" />
                    <Badge variant="secondary" className="bg-orange-500 text-white">
                      Cliente Verificado
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-4 text-lg italic">"{clients[currentIndex].feedback}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-800">{clients[currentIndex].name}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < clients[currentIndex].rating ? 'text-orange-500' : 'text-gray-300'} mr-1`} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <button 
            onClick={prevTestimonial} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <motion.div 
          className="mt-16 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">¿Por qué nos eligen?</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div className="flex items-center" variants={itemVariants}>
              <ThumbsUp className="h-8 w-8 text-orange-500 mr-2" />
              <span className="text-gray-200">98% de satisfacción</span>
            </motion.div>
            <motion.div className="flex items-center" variants={itemVariants}>
              <Star className="h-8 w-8 text-orange-500 mr-2" fill='currentColor' />
              <span className="text-gray-200">Calificación promedio 4.9/5</span>
            </motion.div>
            <motion.div className="flex items-center" variants={itemVariants}>
              <Award className="h-8 w-8 text-orange-500 mr-2" />
              <span className="text-gray-200">Líder en el sector</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}