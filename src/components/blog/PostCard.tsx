// src/components/blog/PostCard.tsx

// Importamos los componentes necesarios de Next.js.
import Image from 'next/image';
import Link from 'next/link';

/**
 * @description
 * Se definen los tipos de las propiedades (props) que el componente PostCard espera recibir.
 * Usar una interfaz de TypeScript nos ayuda a asegurar que siempre pasamos los datos correctos
 * al componente, evitando errores.
 *
 * @property {string} title - El título del post.
 * @property {string} excerpt - Un resumen o extracto corto del contenido del post.
 * @property {string} imageUrl - La URL de la imagen de portada del post.
 * @property {string} slug - Una cadena de texto única que forma parte de la URL del post (ej: "mi-primer-viaje-a-japon").
 */
interface PostCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  createdAt: string;
}

/**
 * @description
 * El componente PostCard se encarga de renderizar una tarjeta o vista previa de un artículo del blog.
 * Es un componente reutilizable que se mostrará en una lista en la página de inicio y en las páginas de categorías.
 *
 * @param {PostCardProps} props - Las propiedades que recibe el componente, desestructuradas para un uso más fácil.
 * @returns {React.ReactElement} El elemento JSX que representa la tarjeta del post.
 */
const PostCard = ({ title, excerpt, imageUrl, slug, createdAt }: PostCardProps) => {
  return (
    // El contenedor principal de la tarjeta. Es un enlace que lleva al post completo.
    // Las clases de Tailwind le dan un borde, sombra, esquinas redondeadas y un efecto de transición.
    <Link href={`/post/${slug}`} className="block border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      
      {/* Contenedor para la imagen del post. */}
      <div className="relative h-48 w-full">
        {/* 
          El componente Image de Next.js optimiza la carga de la imagen.
          'layout="fill"' y 'objectFit="cover"' hacen que la imagen llene el contenedor sin deformarse.
        */}
        <Image src={imageUrl} alt={`Imagen de portada para ${title}`} layout="fill" objectFit="cover" />
      </div>

      {/* Contenedor para el texto de la tarjeta (título y extracto). */}
      <div className="p-6">
        
        {/* Título del post. */}
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        {/*
          Fecha de publicación del post.
          - Se muestra debajo del título, en un tamaño más pequeño y color suave.
          - Se formatea a "D MMMM YYYY" en español para mayor claridad.
        */}
        <p className="text-sm text-blue-500 mb-2">
          {new Date(createdAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
        
        {/* Extracto o resumen del post. */}
        <p className="text-gray-700 dark:text-gray-300 mb-4">{excerpt}</p>

        {/* Enlace para leer más. Aunque toda la tarjeta es un enlace, este botón 
            proporciona una llamada a la acción clara para el usuario. */}
        <span className="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors">
          Leer más &rarr;
        </span>
      </div>
    </Link>
  );
};

// Exportamos el componente para poder usarlo en otras partes de la aplicación.
export default PostCard;
