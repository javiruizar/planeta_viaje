// src/components/layout/MobileMenu.tsx
"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

interface MobileMenuProps {
  menuStyles: {
    container: string;
    link: string;
  };
  isOpen: boolean;
  onMenuChange: (isOpen: boolean) => void;
}

const MobileMenu = ({ menuStyles, isOpen, onMenuChange }: MobileMenuProps) => {
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        onMenuChange(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onMenuChange]);

  return (
    <div className="flex justify-center mr-4" ref={mobileMenuRef}>
      <button
        className="text-white focus:outline-none"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => onMenuChange(!isOpen)}
      >
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>
      {isOpen && (
        <div className={menuStyles.container}>
          <Link href="/descuentos" className={`${menuStyles.link} w-full text-center`} onClick={() => onMenuChange(false)}>
            DESCUENTOS
          </Link>
          <Link href="/sitios-utiles" className={`${menuStyles.link} w-full text-center`} onClick={() => onMenuChange(false)}>
            SITIOS ÚTILES
          </Link>
          <div className="`${menuStyles.link} flex justify-center space-x-4 mt-2 mb-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-600 transition-colors" aria-label="Facebook"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-400 transition-colors" aria-label="Twitter"><FaTwitter size={24} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-600 transition-colors" aria-label="Instagram"><FaInstagram size={24} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-600 transition-colors" aria-label="YouTube"><FaYoutube size={24} /></a>
            </div>
        </div>
        
        
      )}
    </div>
  );
};

export default MobileMenu; 