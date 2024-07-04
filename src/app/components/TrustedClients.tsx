'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ThumbsUp, Award } from 'lucide-react';
import { Background } from './Background';

const clients = [
  { name: "Cliente A", logo: "/distraves.png", feedback: "Excelente servicio, siempre puntuales." },
  { name: "Cliente B", logo: "/zenu.png", feedback: "La mejor opción para carga refrigerada." },
  { name: "Cliente C", logo: "/nutresa.png", feedback: "Profesionales en cada aspecto del transporte." },
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
  return (
    <Background variant="tertiary" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2 text-blue-800">Clientes que Confían en Nosotros</h2>
        <p className="text-center text-gray-600 mb-12">Descubre por qué las mejores empresas eligen RD Transportes</p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {clients.map((client, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="hover:shadow-xl transition-shadow duration-300 bg-white bg-opacity-90">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <img src={client.logo} alt={client.name} className="h-12 w-auto" />
                    <Badge variant="secondary" className="bg-yellow-300 text-blue-800">
                      Cliente Verificado
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-4">{client.feedback}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-700">{client.name}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 mr-1" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-blue-800">¿Por qué nos eligen?</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <ThumbsUp className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-gray-700">98% de satisfacción</span>
            </div>
            <div className="flex items-center">
              <Star className="h-8 w-8 text-yellow-400 mr-2" fill='currentColor' />
              <span className="text-gray-700">Calificación promedio 4.9/5</span>
            </div>
            <div className="flex items-center">
              <Award className="h-8 w-8 text-green-500 mr-2" />
              <span className="text-gray-700">Líder en el sector</span>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}