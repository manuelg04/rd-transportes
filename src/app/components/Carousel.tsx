import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/mula1.jpg",
  "/mula2.jpg",
  "/mula3.jpg",
  "/mula4.jpg",
  "/mula6.png",
];

export function EnhancedCarousel() {
  return (
    <div className="max-w-full mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-2 text-gray-700">Nuestra Flota en Acción</h2>
      <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
        Descubre cómo nuestro equipo y vehículos trabajan juntos para ofrecer un servicio de transporte excepcional
      </p>
      
      <Carousel className="w-full max-w-7xl mx-auto">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <Card className="border-none shadow-lg">
                <CardContent className="flex aspect-[16/9] items-center justify-center p-0 relative">
                  <Image
                    src={src}
                    alt={`Imagen de nuestra flota ${index + 1}`}
                    fill
                    style={{ 
                      objectFit: 'contain'  // Cambiado de 'cover' a 'contain'
                    }}
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-orange-500 text-white hover:bg-orange-600" />
        <CarouselNext className="right-4 bg-orange-500 text-white hover:bg-orange-600" />
      </Carousel>
    </div>
  );
}