'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Snowflake, FileCheck, Dog, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Carga Seca",
    description: "Transporte seguro y eficiente de carga seca en todo el territorio nacional.",
    icon: Truck,
    gradient: "from-yellow-400 to-orange-500",
    image: "/carga-seca.jpg"
  },
  {
    title: "Carga Refrigerada",
    description: "Especialistas en transporte de carga refrigerada, manteniendo la cadena de frío.",
    icon: Snowflake,
    gradient: "from-orange-500 to-yellow-400",
    image: "/carga-refrigerada.jpg"
  },
  {
    title: "Operaciones de ITR",
    description: "Servicios de Inspección, Transporte y Registro para una logística integral.",
    icon: FileCheck,
    gradient: "from-yellow-400 to-orange-500",
    image: "/operaciones-itr.jpg"
  },
  {
    title: "Transporte de Ganado",
    description: "Transporte especializado de ganado en pie, garantizando el bienestar animal.",
    icon: Dog,
    gradient: "from-orange-500 to-yellow-400",
    image: "/transporte-ganado.jpg"
  }
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextService = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevService = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8"
          >
            <div className="w-full lg:w-2/3 relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <Card className="w-full lg:w-1/3 bg-white bg-opacity-90 shadow-xl">
              <div className={`h-2 bg-gradient-to-r ${services[activeIndex].gradient}`}></div>
              <CardContent className="p-6 md:p-8">
                <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-gradient-to-br ${services[activeIndex].gradient} flex items-center justify-center mb-4 md:mb-6`}>
                  {React.createElement(services[activeIndex].icon, { className: "w-8 h-8 md:w-10 md:h-10 text-white" })}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-3 md:mb-4">{services[activeIndex].title}</h3>
                <p className="text-lg md:text-xl text-gray-700 text-center">{services[activeIndex].description}</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
        <div className="relative mt-4">
          <button 
            onClick={prevService} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button 
            onClick={nextService} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        <div className="mt-6 flex justify-center space-x-4">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-orange-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
