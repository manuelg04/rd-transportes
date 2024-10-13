'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, ChevronDown } from 'lucide-react';

export function MissionVision() {
  const [activeTab, setActiveTab] = useState('mission');

  const tabContent = {
    mission: {
      title: "Misión",
      icon: Target,
      content: "R.D. TRANSPORTES S.A.S es una empresa nacional de transporte terrestre de carga seca y refrigerada, reconocida por su confiabilidad, excelencia en el servicio y enfoque en la seguridad. Contamos con un equipo humano experimentado y comprometido.",
      image: "/mision-imagen.jpg"
    },
    vision: {
      title: "Visión",
      icon: Eye,
      content: "Para 2028, seremos líderes en transporte de carga a nivel nacional e internacional, destacándonos en movilización de mercancías de importación y exportación, especializados en carga refrigerada. Nuestro enfoque en calidad, mejora continua y responsabilidad social, respaldado por un equipo experimentado, nos posicionará como la opción preferida en el mercado.",
      image: "/vision-imagen.jpg"
    }
  };

  return (
    <section id="mission-vision" className="py-16 bg-gradient-to-br from-gray-100 to-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-4 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestra Esencia
        </motion.h2>
        <motion.p 
          className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Descubre los principios que guían nuestro camino y la visión que impulsa nuestro crecimiento.
        </motion.p>

        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full shadow-md p-1">
            {['mission', 'vision'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-orange-500 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab === 'mission' ? 'Misión' : 'Visión'}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src={tabContent[activeTab as 'mission' | 'vision'].image}
                  alt={tabContent[activeTab as 'mission' | 'vision'].title}
                  layout="fill"
                  objectFit="cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-75"></div> */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {React.createElement(tabContent[activeTab as keyof typeof tabContent].icon, { className: "text-white w-24 h-24" })}
                  </motion.div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-800">{tabContent[activeTab as keyof typeof tabContent].title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{tabContent[activeTab as keyof typeof tabContent].content}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <ChevronDown className="w-8 h-8 text-orange-500 mx-auto animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}