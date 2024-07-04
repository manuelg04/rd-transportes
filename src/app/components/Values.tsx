import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Heart, Shield, CheckCircle, Zap, Award } from 'lucide-react';
import { Background } from './Background';

const values = [
  { title: "Compromiso", description: "Nos comprometemos con nuestros clientes y su carga.", icon: Handshake },
  { title: "Lealtad", description: "Mantenemos relaciones duraderas basadas en la confianza.", icon: Heart },
  { title: "Honestidad", description: "Actuamos con integridad en todas nuestras operaciones.", icon: Shield },
  { title: "Seriedad", description: "Cumplimos con nuestros compromisos y obligaciones.", icon: CheckCircle },
  { title: "Diligencia", description: "Actuamos con rapidez y eficacia en nuestras operaciones.", icon: Zap },
  { title: "Responsabilidad", description: "Asumimos la responsabilidad de nuestras acciones y decisiones.", icon: Award },
];

export function Values() {
  return (
    <Background variant="secondary" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 bg-white bg-opacity-80">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center mb-4">
                  {React.createElement(value.icon, { size: 32, className: "text-blue-600" })}
                </div>
                <CardTitle className="text-xl font-semibold text-blue-700">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Background>
  );
}