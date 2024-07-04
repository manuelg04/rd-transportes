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
import { Background } from './Background';

const images = [
  "/img27.jpg",
  "/img61.jpg",
  "/img59.jpg",
];

export function EnhancedCarousel() {
  return (
    <Background variant="primary" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-white">Nuestra Flota en Acción</h2>
        <p className="text-center text-gray-100 mb-6">Descubre cómo nuestro equipo y vehículos trabajan juntos para ofrecer un servicio de transporte excepcional</p>
        
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-lg">
                  <CardContent className="flex aspect-[16/9] items-center justify-center p-0 relative overflow-hidden">
                    <Image
                      src={src}
                      alt={`Imagen de nuestra flota ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </Background>
  );
}