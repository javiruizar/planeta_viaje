/**
 * @description
 * Componente que crea un efecto de fondo fijo (parallax) para la página de inicio.
 * Incluye soporte para imágenes locales y remotas (AWS S3).
 * 
 * @example
 * // Uso con imagen local
 * <ParallaxBackground 
 *   localImage="/images/hero-bg.jpg"
 *   // s3Image="https://tu-bucket.s3.region.amazonaws.com/ruta/a/imagen.jpg"
 *   overlay={true}
 *   overlayColor="rgba(0, 0, 0, 0.4)"
 * >
 *   {/* Contenido que se mostrará sobre el fondo */


import React from 'react';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  localImage?: string;       // Ruta a la imagen en la carpeta public
  s3Image?: string;          // URL completa a la imagen en AWS S3
  overlay?: boolean;         // Si se debe mostrar una capa de superposición
  overlayColor?: string;     // Color de la superposición (formato rgba o hex)
  className?: string;        // Clases adicionales para el contenedor
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  children,
  localImage = '/images/Nueva-York-City-Hall-Park.jpg',  // Imagen por defecto (ruta relativa a la carpeta public)
  s3Image = '',
  overlay = true,
  overlayColor = 'rgba(0, 0, 0, 0.4)',
  className = ''
}) => {
  // Determinar la URL de la imagen a usar
  const imageUrl = localImage || s3Image;

  // Estilos para el fondo
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url('${imageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
  };

  // Estilos para móviles
  const mobileStyle: React.CSSProperties = {
    backgroundAttachment: 'scroll',
  };

  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Capa de fondo fijo */}
      <div 
        className="fixed inset-0 -z-10 sm:bg-fixed"
        style={backgroundStyle}
      />

      {/* Capa de superposición opcional */}
      {overlay && (
        <div 
          className="fixed inset-0 -z-10"
          style={{ backgroundColor: overlayColor }}
          aria-hidden="true"
        />
      )}

      {/* Contenido */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
