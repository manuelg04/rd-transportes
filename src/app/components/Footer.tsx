import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-8 md:col-span-3 lg:col-span-1">
            <h2 className="text-lg font-semibold">RD TRANSPORTES S.A.S</h2>
            <p className="text-gray-300 text-sm max-w-md mx-auto">
              Líder en transporte terrestre de carga en Colombia. Calidad, puntualidad y seguridad en cada viaje.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="md:col-span-3 lg:col-span-2">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                  Servicios
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/services" className="text-base text-gray-300 hover:text-white">
                      Carga Seca
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-base text-gray-300 hover:text-white">
                      Carga Refrigerada
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-base text-gray-300 hover:text-white">
                      Operaciones ITR
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-base text-gray-300 hover:text-white">
                      Transporte de Ganado
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                  Empresa
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/mission-vision" className="text-base text-gray-300 hover:text-white">
                      Misión y Visión
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-base text-gray-300 hover:text-white">
                      Valores
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; 2024 RD TRANSPORTES S.A.S. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}