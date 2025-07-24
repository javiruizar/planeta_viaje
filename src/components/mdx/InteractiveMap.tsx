"use client";
// src/components/mdx/InteractiveMap.tsx
// Componente para mostrar mapas interactivos en contenido MDX

import React, { useState, useEffect } from 'react';
import { InteractiveMapProps } from '@/types/mdx';

interface MapData {
  location: string;
  coordinates: { lat: number; lng: number };
  embedUrl: string;
  mapsUrl: string;
  zoom: number;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ 
  localizacion, 
  zoom = 10, 
  height = "400px"
}) => {
  const [mapData, setMapData] = useState<MapData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`/api/maps?location=${encodeURIComponent(localizacion)}&zoom=${zoom}`);
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.error || 'Error fetching map data');
        }
        
        setMapData(result.data);
      } catch (err) {
        console.error('Error fetching map data:', err);
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchMapData();
  }, [localizacion, zoom]);

  if (loading) {
    return (
      <div className="my-8 p-4 bg-gray-100 rounded-lg">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-64 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-8 p-4 bg-red-100 border border-red-300 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-red-800">⚠️ Error al cargar el mapa</h3>
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  if (!mapData) {
    return (
      <div className="my-8 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-yellow-800">⚠️ No se pudo cargar el mapa</h3>
        <p className="text-yellow-700">No se encontraron datos para la ubicación: {localizacion}</p>
      </div>
    );
  }

  return (
    <div className="my-8 w-full overflow-hidden">
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">📍 {mapData.location}</h3>
        <p className="text-sm text-gray-600">
          Coordenadas: {mapData.coordinates.lat.toFixed(4)}, {mapData.coordinates.lng.toFixed(4)}
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg border">
        <div className="relative w-full" style={{ height: height === "100%" ? "400px" : height }}>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={mapData.embedUrl}
            title={`Mapa de ${mapData.location}`}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
      
      <div className="mt-2 text-xs text-gray-500 text-center">
        <a 
          href={mapData.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Ver mapa completo en Google Maps
        </a>
      </div>
    </div>
  );
};

export default InteractiveMap; 