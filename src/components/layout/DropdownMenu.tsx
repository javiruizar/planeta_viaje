// src/components/layout/DropdownMenu.tsx
"use client";


import React, { useState } from 'react';
import Link from 'next/link';

const continents = [
  { name: 'Europa', slug: 'europa' },
  { name: 'Asia', slug: 'asia' },
  { name: 'América', slug: 'america' },
  { name: 'África', slug: 'africa' },
  { name: 'Oceanía', slug: 'oceania' },
];

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center gap-1 px-4 py-8 text-white font-bold hover:bg-white/20 rounded-lg transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
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
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
          {continents.map((continent) => (
            <Link
              key={continent.slug}
              href={`/category/${continent.slug}`}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
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