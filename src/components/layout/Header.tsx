"use client"
// src/components/layout/Header.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa';
import Logo from './Logo';
import DropdownMenu from './DropdownMenu';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';

type HeaderProps = {
  backgroundImage?: string;
  isPost?: boolean;
};

const Header = ({ backgroundImage="/images/valle-del-lago.jpg", isPost = false }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinosMenuOpen, setDestinosMenuOpen] = useState(false);


  // Función para cerrar el menú hamburguesa cuando se abre el menú DESTINOS
  const handleDestinosMenuChange = (isOpen: boolean) => {
    setDestinosMenuOpen(isOpen);
    if (isOpen) {
      setMobileMenuOpen(false);
    }
  };


  // Formato común para ambos menús
  const menuStyles = {
    container: "absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg py-1 z-1 border border-gray-200",
    link: "block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
  };

  // Estilos específicos para el menú hamburguesa móvil - centrado
  const mobileMenuStyles = {
    container: "absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-1 border border-gray-200",
    link: "block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
  };

  return (
    <header className="relative h-96 w-full overflow-visible">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={backgroundImage}
          alt="Fondo del encabezado con vista de Salamanca"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
          className="opacity-100"
        />
        {/* Capa de superposición oscura para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 h-full w-full bg-black/40" />
      </div>
      <div className="relative h-full w-full flex flex-col items-center justify-center">
        {/* Contenedor con el mismo ancho que el contenido de la página */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col items-center justify-center">
          {/* Versión escritorio: grid de 5 columnas */}
          <div className="hidden md:grid w-full h-full grid-cols-5 items-center justify-center" style={{gridTemplateColumns: '1fr 1.2fr 1.6fr 1.2fr 1fr'}}>
            {/* 1. DropdownMenu - alineado a la izquierda */}
            <div className="flex justify-start">
              <DropdownMenu 
                menuStyles={menuStyles} 
                isOpen={destinosMenuOpen}
                onMenuChange={handleDestinosMenuChange}
              />
            </div>
            {/* 2. DESCUENTOS */}
            <div className="flex justify-center">
              <Link href="/descuentos" className="text-white px-4 py-8 hover:bg-white/20 rounded-lg transition-colors font-semibold text-lg uppercase whitespace-nowrap">DESCUENTOS</Link>
            </div>
            {/* 3. LOGO (más ancho) */}
            <div className="flex justify-center">
              <div className={isPost ? 'w-12 h-12 md:w-auto md:h-auto' : ''}>
                <Logo className="w-16 h-16 md:w-24 md:h-24"/>
              </div>
            </div>
            {/* 4. SITIOS ÚTILES */}
            <div className="flex justify-center">
              <Link href="/sitios-utiles" className="text-white px-4 py-8 hover:bg-white/20 rounded-lg transition-colors font-semibold text-lg uppercase whitespace-nowrap">SITIOS ÚTILES</Link>
            </div>
                        {/* 5. Redes sociales y búsqueda */}
            <div className="flex justify-center items-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/80 transition-all duration-300 text-white hover:text-blue-600" aria-label="Facebook"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/80 transition-all duration-300 text-white hover:text-blue-400" aria-label="Twitter"><FaTwitter size={24} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/80 transition-all duration-300 text-white hover:text-pink-600" aria-label="Instagram"><FaInstagram size={24} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/80 transition-all duration-300 text-white hover:text-red-600" aria-label="YouTube"><FaYoutube size={24} /></a>
              <SearchBar />
            </div>
          </div>
          {/* Versión móvil */}
          <div className="flex flex-col md:hidden w-full items-center justify-center pt-8 -mt-52">
            <div className="grid grid-cols-3 w-full max-w-md mx-auto mb-4 items-center relative">
              {/* Izquierda: DropdownMenu */}
              <div className="flex justify-start">
                <DropdownMenu 
                  menuStyles={menuStyles} 
                  isOpen={destinosMenuOpen}
                  onMenuChange={handleDestinosMenuChange}
                />
              </div>
              {/* Centro: Logo */}
              <div className="flex justify-center">
                <Logo className="w-16 h-16"/>
              </div>
              {/* Derecha: Menú hamburguesa */}
              <MobileMenu
                menuStyles={mobileMenuStyles}
                isOpen={mobileMenuOpen}
                onMenuChange={(isOpen) => {
                  setMobileMenuOpen(isOpen);
                  if (isOpen) setDestinosMenuOpen(false);
                }}
              />
            </div>
            {/* Búsqueda móvil */}
            <div className="flex justify-center mt-4">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;