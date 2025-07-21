"use client";
// src/components/mdx/TourCard.tsx
// Componente para mostrar tarjetas de tours y reservas

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface TourCardProps {
  titulo: string;
  descripcion: string;
  precio: string;
  destino: string;
  imagen?: string;
  duracion?: string;
  rating?: number;
}

const TourCard: React.FC<TourCardProps> = ({ 
  titulo, 
  descripcion, 
  precio, 
  destino, 
  imagen = "/images/tailandia.jpg",
  duracion = "1 AAAdía",
  rating = 4.5
}) => {
  return (
    <div className="my-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        {imagen && (
          <div className="relative h-48 bg-gray-200">
            <Image 
              src={imagen} 
              alt={titulo}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold">
              {precio}
            </div>
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900">{titulo}</h3>
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="text-sm text-gray-600 ml-1">{rating}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">{descripcion}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4">⏱️ {duracion}</span>
              <span>📍 Tour guiado</span>
            </div>
            
            <Link 
              href={destino}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Reservar ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard; 