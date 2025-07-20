"use client";
// src/components/mdx/ImageGallery.tsx
// Componente para mostrar galerías de imágenes en contenido MDX

import React, { useState } from 'react';
import Image from 'next/image';
import { ImageGalleryProps } from '@/types/mdx';

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images, 
  columns = 3, 
  gap = "1rem" 
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap,
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
    <div className="my-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">📸 Galería de Imágenes</h3>
        <p className="text-sm text-gray-600">{images.length} imágenes</p>
      </div>
      
      <div style={gridStyle} className="mb-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
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
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
            >
              ✕
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300 z-10"
            >
              ‹
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300 z-10"
            >
              ›
            </button>
            
            <div onClick={(e) => e.stopPropagation()}>
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
              {images[selectedImage].caption && (
                <div className="text-white text-center mt-4">
                  {images[selectedImage].caption}
                </div>
              )}
            </div>
            
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