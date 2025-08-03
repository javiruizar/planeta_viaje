// src/components/blog/CategoryPostCard.tsx

import Image from 'next/image';
import Link from 'next/link';

/**
 * @description
 * Se definen los tipos de las propiedades (props) que el componente CategoryPostCard espera recibir.
 * Similar a PostCard pero optimizado para páginas de categorías.
 */
interface CategoryPostCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  createdAt: string;
}

/**
 * @description
 * El componente CategoryPostCard se encarga de renderizar una tarjeta de post optimizada para páginas de categorías.
 * Tiene un diseño diferente al PostCard estándar: fondo completo de imagen con cuadro negro translúcido
 * en la parte inferior que contiene el título en blanco.
 * 
 * NUEVO: Efecto de sombra de imagen en hover - una versión difuminada de la misma imagen
 * aparece como sombra al pasar el cursor, creando un efecto visual atractivo.
 *
 * @param {CategoryPostCardProps} props - Las propiedades que recibe el componente, desestructuradas para un uso más fácil.
 * @returns {React.ReactElement} El elemento JSX que representa la tarjeta del post.
 */
const CategoryPostCard = ({ title, imageUrl, slug, createdAt }: CategoryPostCardProps) => {
  return (
    // El contenedor principal de la tarjeta. Es un enlace que lleva al post completo.
    // Las clases de Tailwind le dan bordes redondeados, sombra y efectos de hover.
    <Link href={`/post/${slug}`} 
    className="block relative h-80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
      
      {/* Sombra difuminada de la imagen (aparece en hover) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src={imageUrl} 
          alt="" 
          fill 
          className="object-cover blur-lg scale-105 opacity-0 group-hover:opacity-80 transition-all duration-500"
          />
      </div>
      
      {/* Contenedor para la imagen de fondo completa */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-1">
        {/* 
          El componente Image de Next.js optimiza la carga de la imagen.
          'fill' y 'object-cover' hacen que la imagen llene todo el contenedor sin deformarse.
        */}
        <Image 
          src={imageUrl} 
          alt={`Imagen de portada para ${title}`} 
          fill 
          className="object-cover transition-all duration-500 group-hover:scale-105 brightness-75 group-hover:brightness-100"
          />
        
        {/* Overlay gradiente para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      {/* Contenedor para el contenido (título y fecha) */}
      <div className="absolute -bottom-2 left-0 right-0 p-6 overflow-hidden">
        
        {/* Fecha de publicación del post */}
        <p className="text-sm text-white/80 mb-2">
          {new Date(createdAt).toLocaleDateString('es-ES', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
          })}
        </p>
        
        {/* Título del post */}
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
          {title}
        </h3>
        
        {/* Extracto del post (opcional, se puede mostrar en hover) */}
        {/* <p className="text-sm text-white/90 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {excerpt}
        </p> */}
        
        {/* Indicador de "Leer más" */}
        {/* <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white/90 text-sm font-semibold">
            Leer más →
          </span>
        </div> */}
      </div>
    </Link>
  );
};

// Exportamos el componente para poder usarlo en otras partes de la aplicación.
export default CategoryPostCard; 