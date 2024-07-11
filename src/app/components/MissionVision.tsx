import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye } from 'lucide-react'

export function MissionVision() {
  return (
    <section id="mission-vision" className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Nuestra Esencia</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Descubre los principios que guían nuestro camino y la visión que impulsa nuestro crecimiento.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 flex items-center space-x-4">
              <Target className="text-white w-10 h-10" />
              <CardTitle className="text-white text-3xl">Misión</CardTitle>
            </CardHeader>
            <CardContent className="mt-6 p-6">
              <p className="text-gray-700 leading-relaxed">
                R.D. TRANSPORTES S.A.S es una empresa nacional de transporte
                terrestre de carga seca y refrigerada, reconocida por su
                confiabilidad, excelencia en el servicio y enfoque en la seguridad.
                Contamos con un equipo humano experimentado y comprometido.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-yellow-400 p-6 flex items-center space-x-4">
              <Eye className="text-white w-10 h-10" />
              <CardTitle className="text-white text-3xl">Visión</CardTitle>
            </CardHeader>
            <CardContent className="mt-6 p-6">
              <p className="text-gray-700 leading-relaxed">
                Para 2028, seremos líderes en transporte de carga a nivel nacional
                e internacional, destacándonos en movilización de mercancías de
                importación y exportación, especializados en carga refrigerada.
                Nuestro enfoque en calidad, mejora continua y responsabilidad
                social, respaldado por un equipo experimentado, nos posicionará
                como la opción preferida en el mercado.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}