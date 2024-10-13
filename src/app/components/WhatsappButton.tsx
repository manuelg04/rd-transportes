'use client'
import React from 'react';
import { Phone } from 'lucide-react';

export function WhatsAppFloatButton() {
  const phoneNumber = '+573162913704'; // Reemplaza con tu número de WhatsApp
  const message = 'Hola, me gustaría obtener más información sobre sus servicios.'; // Mensaje predeterminado

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </button>
  );
}