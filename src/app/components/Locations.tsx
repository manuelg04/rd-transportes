// components/Locations.tsx

'use client'
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";

const locations = [
  {
    city: "Bucaramanga",
    address: "Centro Camionero El palenque. Oficina 3.",
    phone: "+57 3162913704",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d872.6397748890964!2d-73.17071000791557!3d7.081392430732343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683e87f96cbbb3%3A0xfa88ca305b7232f4!2sCentro%20Camionero%20El%20Palenque!5e0!3m2!1ses-419!2sco!4v1720065450816!5m2!1ses-419!2sco",
  },
  {
    city: "Barranquilla",
    address: "Av. Circunvalar #43-75 Estación de Servicio Ecos la Arboleda-Soledad Atlántico Oficina 09",
    phone: "CEL 3012111878",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1074.185949906699!2d-74.78588914264849!3d10.928843126499633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5d29ebab70cbf%3A0xae4791cfd74dd878!2sEDS%20Ecos%20La%20Arboleda!5e1!3m2!1ses!2sco!4v1727746406195!5m2!1ses!2sco",
  },
  {
    city: "Cartagena",
    address: "DG 21 # 45A - 111 IN 206 Cartagena - Bolívar, Estación de Servicio La Chinita",
    phone: "CEL 3172595761",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d643.0836019395894!2d-75.52166361151586!3d10.398648213663838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625f3542abcb9%3A0x2d77ab51aa3892eb!2sTexaco%20Punto%20Gas!5e1!3m2!1ses!2sco!4v1727746666407!5m2!1ses!2sco"
  }
];

export function Locations() {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8 text-orange-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestras Sedes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div 
              key={index}
              className="col-span-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6">
                  <CardTitle className="text-2xl font-semibold">{location.city}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <iframe
                    src={location.mapSrc}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                  <div className="p-6">
                    <div className="flex items-start mb-3">
                      <MapPin className="mr-3 text-orange-500 h-5 w-5 mt-1" />
                      <p>{location.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-3 text-orange-500 h-5 w-5" />
                      <p>{location.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
