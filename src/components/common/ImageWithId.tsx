"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getImageById, ImageDTO } from '@/lib/images';

interface ImageWithIdProps {
  imageId: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
  fallbackSrc?: string;
  showCaption?: boolean;
}

export default function ImageWithId({
  imageId,
  alt,
  width = 400,
  height = 300,
  className = "",
  priority = false,
  fill = false,
  objectFit = 'cover',
  layout = 'intrinsic',
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError,
  fallbackSrc = "/images/placeholder.jpg",
  showCaption = false
}: ImageWithIdProps) {
  const [image, setImage] = useState<ImageDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadImage() {
      try {
        setLoading(true);
        setError(false);
        const imageData = await getImageById(imageId);
        
        if (imageData) {
          setImage(imageData);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error cargando imagen:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (imageId) {
      loadImage();
    }
  }, [imageId]);

  // Mostrar loading
  if (loading) {
    return (
      <div 
        className={`bg-gray-200 animate-pulse ${className}`}
        style={fill ? { width: '100%', height: '100%' } : { width, height }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-400">Cargando...</div>
        </div>
      </div>
    );
  }

  // Mostrar error o fallback
  if (error || !image) {
    return (
      <div className={className}>
        <Image
          src={fallbackSrc}
          alt={alt || "Imagen no disponible"}
          width={width}
          height={height}
          className={className}
          priority={priority}
          fill={fill}
          objectFit={objectFit}
          layout={layout}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          onLoad={onLoad}
          onError={onError}
        />
        {showCaption && (
          <p className="text-sm text-gray-500 text-center mt-2">
            Imagen no disponible
          </p>
        )}
      </div>
    );
  }

  // Mostrar imagen cargada
  return (
    <div className={className}>
      <Image
        src={image.url}
        alt={alt || image.alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        fill={fill}
        objectFit={objectFit}
        layout={layout}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={onLoad}
        onError={onError}
      />
      {showCaption && image.tittle && (
        <p className="text-sm text-gray-500 text-center mt-2">
          {image.tittle}
        </p>
      )}
    </div>
  );
} 