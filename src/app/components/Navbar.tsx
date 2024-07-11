'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/services' },
  { name: 'Misión y Visión', path: '/mission-vision' },
  { name: 'Contacto', path: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarBgClass = scrolled || !isHomePage
    ? 'bg-white shadow-lg'
    : 'bg-black/30';

  const linkClass = (isActive: boolean) =>
    `relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
      isActive
        ? 'text-blue-600'
        : scrolled || !isHomePage
        ? 'text-gray-800 hover:text-blue-600'
        : 'text-white hover:text-blue-200'
    }`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.jpg"
              alt="RD TRANSPORTES S.A.S Logo"
              width={60}
              height={60}
              className="h-16 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={linkClass(pathname === item.path)}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                scrolled || !isHomePage ? 'text-gray-800 hover:bg-gray-200' : 'text-white hover:bg-gray-700'
              }`}
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    pathname === item.path
                      ? 'bg-blue-100 text-blue-900'
                      : 'text-gray-800 hover:bg-gray-100 hover:text-blue-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}