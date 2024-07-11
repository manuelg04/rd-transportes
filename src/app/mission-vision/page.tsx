import React from 'react';
import { MissionVision } from '../components/MissionVision';

export default function MissionVisionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 rounded-lg"></div>
          <img 
            src="/RDTRANSPORTES-MISSION.jpg" 
            alt="Misión y Visión" 
            className="relative z-10 w-full h-[600px] object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
            <p className="text-white text-xl font-semibold text-center">
              Construyendo el futuro del transporte
            </p>
          </div>
        </div>
        <MissionVision />
      </div>
    </main>
  );
}