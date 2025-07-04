// src/components/layout/Header.tsx
import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from './Logo';
import DropdownMenu from './DropdownMenu';

type HeaderProps = {
  backgroundImage: string;
};

const Header = ({ backgroundImage }: HeaderProps) => {
  return (
    <header className="relative h-96 w-full overflow-hidden">
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
      
      
      
      <div className="container mx-auto h-full px-4">
        <div className="h-full flex top-1 justify-between">
          {/* Menú de navegación izquierdo */}
          <div className="flex space-x-4 space-y-4">
            <DropdownMenu />
          </div>

          {/* Logo centrado */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Logo />
          </div>

          {/* Iconos de redes sociales */}
          <div className="absolute flex text-white items-center space-x-4 top-4 right-16 z-10">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className=" hover:text-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;