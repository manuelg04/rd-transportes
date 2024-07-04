import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Snowflake, FileCheck, Dog } from 'lucide-react'

const services = [
  {
    title: "Carga Seca",
    description: "Transporte seguro y eficiente de carga seca en todo el territorio nacional.",
    icon: Truck,
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    title: "Carga Refrigerada",
    description: "Especialistas en transporte de carga refrigerada, manteniendo la cadena de frío.",
    icon: Snowflake,
    gradient: "from-orange-500 to-yellow-400"
  },
  {
    title: "Operaciones de ITR",
    description: "Servicios de Inspección, Transporte y Registro para una logística integral.",
    icon: FileCheck,
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    title: "Transporte de Ganado",
    description: "Transporte especializado de ganado en pie, garantizando el bienestar animal.",
    icon: Dog,
    gradient: "from-orange-500 to-yellow-400"
  }
];

export function Services() {
  return (
    <section id="services" className="bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
        <Image
          src="/services_banner.jpg"
          alt="Servicios de Transporte"
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-4">
            Cargue Con Nosotros
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto py-16 px-4">
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Ofrecemos soluciones de transporte integrales y personalizadas para satisfacer las necesidades específicas de cada cliente.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <CardHeader className="pt-8">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                  {React.createElement(service.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <CardTitle className="text-xl font-semibold text-center text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}