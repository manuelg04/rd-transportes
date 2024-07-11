'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Briefcase, Clipboard, Truck } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  { 
    name: "John Doe", 
    role: "CEO", 
    image: "/lady.JPG",
    description: "Visionary leader with 15 years of industry experience."
  },
  { 
    name: "Jane Smith", 
    role: "Operations Manager", 
    image: "yilmis.JPG",
    description: "Efficiency expert, streamlining processes for optimal performance."
  },
  { 
    name: "Mike Johnson", 
    role: "Lead Driver", 
    image: "security.JPG",
    description: "Seasoned driver with an impeccable safety record."
  },
  {
    name: "John Doe",
    role: "CEO",
    image: "/white.JPG",
    description: "Visionary leader with 15 years of industry experience."
  },
  {
    name: "Jane Smith",
    role: "Operations Manager",
    image: "recepcion.JPG",
    description: "Efficiency expert, streamlining processes for optimal performance."
  },
  {
    name: "Mike Johnson",
    role: "Lead Driver",
    image: "operations.JPG",
    description: "Seasoned driver with an impeccable safety record."
  },
  {
    name: "John Doe",
    role: "CEO",
    image: "/operations2.JPG",
    description: "Visionary leader with 15 years of industry experience."
  },
  {
    name: "John Doe",
    role: "CEO",
    image: "/gerente2.JPG",
    description: "Visionary leader with 15 years of industry experience."
  },
  {
    name: "John Doe",
    role: "CEO",
    image: "/contable.JPG",
    description: "Visionary leader with 15 years of industry experience."
  },
];

const groupPhoto = "/RDTRANSPORTES-TEAM.JPG";

const roleIcons = {
  CEO: Briefcase,
  "Operations Manager": Clipboard,
  "Lead Driver": Truck,
};

export const OurTeam: React.FC = () => {
  const duplicatedMembers = [...teamMembers, ...teamMembers]; // Duplicate for seamless loop

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-4 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestro Equipo
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-blue-500 mx-auto mb-8"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.p 
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Conoce a nuestro equipo dedicado y experto. Nuestra equipo de expertos y compromisos
          nos impulsa hacia nuestro futuro.
        </motion.p>
        
        <Dialog>
          <DialogTrigger asChild>
            <motion.div 
              className="mb-12 cursor-pointer overflow-hidden rounded-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={groupPhoto} alt="Our Team" className="w-full h-auto" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-2xl font-bold">Click to view our full team</p>
              </div>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <img src={groupPhoto} alt="Our Team" className="w-full h-auto rounded-lg" />
          </DialogContent>
        </Dialog>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedMembers.map((member, index) => {
                const Icon = roleIcons[member.role as keyof typeof roleIcons];
                return (
                  <motion.div 
                    key={index}
                    className="flex-shrink-0 w-64 mx-4 bg-white rounded-lg shadow-lg overflow-hidden"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        {Icon && <Icon className="mr-2" size={20} />}
                        {member.name}
                      </h3>
                      <p className="text-gray-600 mb-2">{member.role}</p>
                      <p className="text-gray-700 text-sm">{member.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}