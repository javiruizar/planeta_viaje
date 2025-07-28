// src/components/layout/MobileMenu.tsx
"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

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
    <div className="flex justify-end mr-4" ref={mobileMenuRef}>
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
        </div>
      )}
    </div>
  );
};

export default MobileMenu; 