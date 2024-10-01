'use client'
import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Ajusta la velocidad de reproducción si es necesario
    }
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Video de fondo */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videotruck.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      
      {/* Overlay para mejor legibilidad del texto */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      {/* Contenido */}
      <motion.div
        className="relative z-20 text-white px-4 md:px-8 lg:px-16 w-full mt-24"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            RD TRANSPORTES <br /> S.A.S
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            Líder en transporte terrestre de carga en Colombia. Nos destacamos por servicios de alta calidad y seguridad, adaptados a las necesidades del cliente.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <Link href="/services" passHref>
              <Button size="lg" className="text-lg px-8 py-3 bg-blue-700 hover:bg-blue-800">
                Conozca Nuestros Servicios
              </Button>
            </Link>
          </motion.div>
          <motion.div
          className="mt-8 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <Image
            src="/basc-logo.png"
            alt="Certificación BASC"
            width={150}
            height={150}
          />
          <p className="ml-4 text-lg max-w-xl">
            Empresa certificada por BASC, garantizando seguridad y confianza en cada viaje.
          </p>
        </motion.div>
        </div>
        
      </motion.div>
    
      
      
      {/* Elemento decorativo */}
      <motion.div
        className="absolute bottom-0 left-0 w-1/3 h-1/4 bg-yellow-500 opacity-50 transform -skew-x-12 z-10"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.5 }}
        transition={{ duration: 1, delay: 3 }}
      />
    </div>
  );
}