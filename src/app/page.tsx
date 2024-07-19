'use client'
import React from "react";
import { motion } from 'framer-motion';
import { Hero } from "./components/Hero";
import { EnhancedCarousel } from "./components/Carousel";
import { ValuesBanner } from "./components/Banner";
import { TrustedClients } from "./components/TrustedClients";
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedSection = ({ children, className }: AnimatedSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />

      <AnimatedSection className="w-full py-4 bg-gray-50">
        <ValuesBanner />
      </AnimatedSection>

      <AnimatedSection className="w-full py-4 bg-white">
        <TrustedClients />
      </AnimatedSection>

      <AnimatedSection className="w-full py-4 bg-white">
        <EnhancedCarousel />
      </AnimatedSection>
    </main>
  );
}