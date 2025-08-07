"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

/**
 * @description
 * Componente SearchBar que permite buscar posts por título y extracto.
 * Se expande al hacer click y se contrae al hacer click en X o al presionar Enter.
 */
const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Efecto para enfocar el input cuando se expande
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  // Efecto para cerrar la búsqueda al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isExpanded && !event.target) return;
      
      const target = event.target as HTMLElement;
      const searchBar = target.closest('.search-bar-container');
      
      if (isExpanded && !searchBar) {
        handleClose();
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setSearchTerm('');
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const encodedSearch = encodeURIComponent(searchTerm.trim());
      router.push(`/search?q=${encodedSearch}`);
      handleClose();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    } else if (e.key === 'Escape') {
      handleClose();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar-container relative">
      {/* Icono de lupa (estado inicial) */}
      {!isExpanded && (
        <button
          onClick={handleExpand}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/80 transition-all duration-300 group"
          aria-label="Buscar"
        >
          <FaSearch 
            size={18} 
            className={`transition-colors duration-300 ${
              isHovered ? 'text-green-700' : 'text-white'
            }`}
          />
        </button>
      )}

      {/* Barra de búsqueda expandida */}
      {isExpanded && (
        <div className="flex items-center bg-white rounded-full shadow-lg px-4 py-2 min-w-[300px] max-w-[500px]">
          {/* Input de búsqueda */}
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Buscar posts..."
            className="flex-1 bg-transparent text-gray-800 placeholder-gray-500 outline-none text-sm"
          />
          
          {/* Botón de búsqueda o cerrar */}
          <button
            onClick={searchTerm.trim() ? handleSearch : handleClose}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors duration-200 ml-2"
            aria-label={searchTerm.trim() ? "Buscar" : "Cerrar búsqueda"}
          >
            {searchTerm.trim() ? (
              <FaSearch size={14} className="text-gray-600" />
            ) : (
              <FaTimes size={14} className="text-gray-600" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar; 