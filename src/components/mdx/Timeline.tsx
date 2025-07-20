// src/components/mdx/Timeline.tsx
// Componente para mostrar cronologías de viajes en contenido MDX

import React from 'react';
import Image from 'next/image';
import { TimelineProps } from '@/types/mdx';

const Timeline: React.FC<TimelineProps> = ({ 
  events, 
  orientation = 'vertical' 
}) => {
  if (orientation === 'horizontal') {
    return (
      <div className="my-8">
        <h3 className="text-lg font-semibold mb-4">📅 Cronología del Viaje</h3>
        <div className="flex overflow-x-auto pb-4 space-x-4">
          {events.map((event, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500"
            >
              <div className="text-sm text-blue-600 font-semibold mb-2">
                {event.date}
              </div>
              <h4 className="font-semibold mb-2">{event.title}</h4>
              <p className="text-gray-600 text-sm mb-2">{event.description}</p>
              {event.location && (
                <div className="text-xs text-gray-500">📍 {event.location}</div>
              )}
              {event.image && (
                <div className="mt-3">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="my-8">
      <h3 className="text-lg font-semibold mb-4">📅 Cronología del Viaje</h3>
      <div className="relative">
        {/* Línea vertical */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="relative flex items-start">
              {/* Punto en la línea */}
              <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
              
              {/* Contenido del evento */}
              <div className="ml-8 bg-white rounded-lg shadow-md p-4 flex-1 border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-blue-600 font-semibold">
                    {event.date}
                  </div>
                  {event.location && (
                    <div className="text-xs text-gray-500">📍 {event.location}</div>
                  )}
                </div>
                
                <h4 className="font-semibold mb-2">{event.title}</h4>
                <p className="text-gray-600 text-sm">{event.description}</p>
                
                {event.image && (
                  <div className="mt-3">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline; 