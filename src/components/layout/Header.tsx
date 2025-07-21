// src/components/layout/Header.tsx
import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from './Logo';
import DropdownMenu from './DropdownMenu';

type HeaderProps = {
  backgroundImage: string;
  isPost?: boolean;
};

const Header = ({ backgroundImage, isPost = false }: HeaderProps) => {
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
      
      <div className="relative h-full w-full px-4 sm:px-6 lg:px-8">
        <div className="h-full flex justify-between items-start pt-4">
          {/* Menú de navegación izquierdo */}
          <div className="flex-shrink-0">
            <DropdownMenu />
          </div>

          {/* Logo - Centrado en desktop, esquina superior derecha en móvil */}
          <div className="absolute right-1/8 md:static md:transform-none md:left-auto">
            <div className={isPost ? 'w-12 h-12 md:w-auto md:h-auto' : ''}>
              <Logo className="w-16 h-16 md:w-24 md:h-24"/>
            </div>
          </div>

          {/* Iconos de redes sociales - Ocultos en móvil, visibles en desktop */}
          <div className="hidden md:flex text-white items-center space-x-4 flex-shrink-0">
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
              className="hover:text-pink-600 transition-colors"
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