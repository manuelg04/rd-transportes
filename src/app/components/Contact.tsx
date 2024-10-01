'use client'
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send, Truck, Clock, Shield } from "lucide-react";
import { Locations } from "./Locations";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function Contact() {
  return (
    <section className="w-full bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-3 text-orange-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ¡Movemos tu Carga!
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Estamos listos para ser tu socio logístico y ayudarte a alcanzar tus metas. ¡Hablemos y construyamos juntos!
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div className="lg:col-span-2" {...fadeInUp}>
            <Card className="shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-white rounded-2xl overflow-hidden h-full">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6">
                <CardTitle className="text-2xl md:text-3xl font-semibold">Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <Input placeholder="Nombre" className="border-gray-300 rounded-lg" />
                  <Input type="email" placeholder="Correo Electrónico" className="border-gray-300 rounded-lg" />
                  <Input placeholder="Asunto" className="border-gray-300 rounded-lg" />
                  <Textarea placeholder="Mensaje" className="border-gray-300 rounded-lg h-32" />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div className="lg:col-span-3" {...fadeInUp}>
            <Card className="shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-white rounded-2xl overflow-hidden h-full">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6">
                <CardTitle className="text-2xl md:text-3xl font-semibold">Nuestra Ubicación</CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex flex-col h-full">
                <div className="flex-grow">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d872.6397748890964!2d-73.17071000791557!3d7.081392430732343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683e87f96cbbb3%3A0xfa88ca305b7232f4!2sCentro%20Camionero%20El%20Palenque!5e0!3m2!1ses-419!2sco!4v1720065450816!5m2!1ses-419!2sco"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-6 bg-gray-50">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Información de Contacto</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="mr-3 text-orange-500 h-5 w-5" />
                      <p>Centro Camionero El palenque. Oficina 3.</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-3 text-orange-500 h-5 w-5" />
                      <p>+57 (123) 456-7890</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-3 text-orange-500 h-5 w-5" />
                      <p>info@rdtransportes.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-orange-600">¿Por qué elegirnos para tu carga?</h3>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
              <Truck className="h-8 w-8 text-orange-500 mr-3" />
              <span className="font-semibold">Flota moderna y segura</span>
            </div>
            <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
              <Clock className="h-8 w-8 text-orange-500 mr-3" />
              <span className="font-semibold">Entregas puntuales</span>
            </div>
            <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
              <Shield className="h-8 w-8 text-orange-500 mr-3" />
              <span className="font-semibold">Seguridad garantizada</span>
            </div>
          </div>
          <Button
            className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white text-lg py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            ¡Solicita tu cotización ahora!
          </Button>
        </motion.div>
      </div>
      <Locations />
    </section>
  );
}