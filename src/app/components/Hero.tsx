import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative w-full h-screen flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/banner_main.jpg')" }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white px-4 md:px-8 lg:px-16 w-full mt-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            RD TRANSPORTES
            <br />
            S.A.S
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Líder en transporte terrestre de carga en Colombia. Nos destacamos
            por servicios de alta calidad y seguridad, adaptados a las
            necesidades del cliente.
          </p>
          <Link href="/services" passHref>
            <Button
              size="lg"
              className="text-lg px-8 py-3 bg-blue-700 hover:bg-blue-800"
            >
              Conozca Nuestros Servicios
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/4 bg-yellow-500 opacity-50 transform -skew-x-12 z-10"></div>
    </div>
  );
}