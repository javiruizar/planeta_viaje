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
      
      
      
      <div className="container mx-auto h-full px-4">
        <div className="h-full flex top-1 justify-between">
          {/* Menú de navegación izquierdo */}
          <div className="flex space-x-4 space-y-4">
            <DropdownMenu />
          </div>

          {/* Logo - Centrado por defecto, en la esquina superior derecha en posts en móvil */}
          <div className={`absolute md:left-1/2 md:transform md:-translate-x-1/2 right-4 top-4 md:right-auto md:top-auto`}>
            {/* Logo - Tamaño del logo */}
            <div className={isPost ? 'w-16 h-16 md:w-auto md:h-auto' : ''}>
              <Logo className="w-20 h-20 md:w-30 md:h-30"/>
            </div>
          </div>

          {/* Iconos de redes sociales - Ocultos en móvil, visibles en desktop */}
          <div className="absolute hidden md:flex text-white items-center space-x-4 top-4 right-16 z-10">
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