import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-3 text-orange-600">
          ¡Movemos tu Carga!
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
        Estamos listos para ser tu socio logistico y ayudarte a alcanzar tus metas. ¡Hablemos y construyamos juntos!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <Card className="lg:col-span-2 shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-white rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6">
              <CardTitle className="text-3xl font-semibold">
                Envíanos un Mensaje
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input placeholder="Nombre" className="border-gray-300 rounded-lg text-lg py-3" />
                  <Input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="border-gray-300 rounded-lg text-lg py-3"
                  />
                </div>
                <Input placeholder="Asunto" className="border-gray-300 rounded-lg text-lg py-3" />
                <Textarea
                  placeholder="Mensaje"
                  className="border-gray-300 rounded-lg text-lg py-3 h-40"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white text-lg py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-3 h-5 w-5" /> Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6">
                <CardTitle className="text-2xl font-semibold">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <MapPin className="mr-4 text-orange-500 h-6 w-6" />
                    <p className="text-lg">Centro Camionero El palenque. Oficina 3.</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-4 text-orange-500 h-6 w-6" />
                    <p className="text-lg">+57 (123) 456-7890</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-4 text-orange-500 h-6 w-6" />
                    <p className="text-lg">info@rdtransportes.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6">
                <CardTitle className="text-2xl font-semibold">
                  Nuestra Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video w-full rounded-b-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d872.6397748890964!2d-73.17071000791557!3d7.081392430732343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683e87f96cbbb3%3A0xfa88ca305b7232f4!2sCentro%20Camionero%20El%20Palenque!5e0!3m2!1ses-419!2sco!4v1720065450816!5m2!1ses-419!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}