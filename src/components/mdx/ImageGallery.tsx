"use client";
// src/components/mdx/ImageGallery.tsx
// Componente para mostrar galerías de imágenes en contenido MDX

import React, { useState } from 'react';
import Image from 'next/image';
import { ImageGalleryProps } from '@/types/mdx';

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images, 
  columns = 3
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Mapear columnas a clases de Tailwind
  const getGridCols = (cols: number) => {
    switch (cols) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 sm:grid-cols-2';
      case 3: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    }
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="my-8 w-full overflow-hidden">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">📸 Galería de Imágenes</h3>
        <p className="text-sm text-gray-600">{images.length} imágenes</p>
      </div>
      
      <div className={`grid ${getGridCols(columns)} gap-4 mb-4`}>
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow w-full"
            onClick={() => openLightbox(index)}
          >
            <div className="relative w-full" style={{ paddingBottom: '75%' }}>
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                {image.caption}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl w-full max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-white text-2xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ‹
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ›
            </button>
            
            <div onClick={(e) => e.stopPropagation()} className="w-full h-full flex items-center justify-center">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            {images[selectedImage].caption && (
              <div className="text-white text-center mt-4 px-4">
                {images[selectedImage].caption}
              </div>
            )}
            
            <div className="text-white text-center mt-2">
              {selectedImage + 1} de {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery; 