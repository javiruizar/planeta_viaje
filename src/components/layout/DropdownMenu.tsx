// src/components/layout/DropdownMenu.tsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const continents = [
  { name: 'Europa', slug: 'europa' },
  { name: 'Asia', slug: 'asia' },
  { name: 'América', slug: 'america' },
  { name: 'África', slug: 'africa' },
  { name: 'Oceanía', slug: 'oceania' },
];

interface DropdownMenuProps {
  menuStyles?: {
    container: string;
    link: string;
  };
  isOpen?: boolean;
  onMenuChange?: (isOpen: boolean) => void;
}

const DropdownMenu = ({ menuStyles, isOpen: externalIsOpen }: DropdownMenuProps) => {
  const [internalIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Usar el estado externo si se proporciona, sino usar el interno
  const [isOpen, setIsOpen] = useState(externalIsOpen !== undefined ? externalIsOpen : internalIsOpen);

  // Estilos por defecto si no se proporcionan
  const defaultStyles = {
    container: "absolute left-0 w-48 bg-white rounded-lg shadow-lg py-1 border border-gray-200",
    link: "block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
  };

  const styles = menuStyles || defaultStyles;

  // Función para manejar el cambio de estado del menú
  // const handleMenuChange = (newIsOpen: boolean) => {
  //   if (onMenuChange) {
  //     onMenuChange(newIsOpen);
  //   } else {
  //     setIsOpen(newIsOpen);
  //   }
  // };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div 
      className="relative group"
      // onClick={() => setIsOpen(true)}
    >
      <button 
        ref={buttonRef}
        className="flex items-center gap-1 px-4 py-8 text-white font-bold hover:bg-white/20 rounded-lg transition-colors"
        
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        // aria-expanded={isOpen}
        // aria-haspopup="true"
      >
        DESTINOS
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div 
        ref={dropdownRef}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}  
        onClick={() => setIsOpen(!isOpen)}
        className={styles.container}>
          {continents.map((continent) => (
            <Link
              key={continent.slug}
              href={`/category/${continent.slug}`}
              className={styles.link}
              onClick={() => setIsOpen(false)}
            >
              {continent.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;