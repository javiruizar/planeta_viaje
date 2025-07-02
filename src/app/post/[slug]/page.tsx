// src/app/post/[slug]/page.tsx

// Importamos los componentes y datos necesarios.
import Image from 'next/image';
// Importamos la función que obtiene un post real desde la base de datos por su slug.
import { getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
// Importamos los componentes de comentarios desde el barril
import { CommentsList, CommentForm } from '@/components/comments';
// Importamos el componente de publicidad
import AdBox from '@/components/ads/AdBox';

/**
 * @description
 * Esta es la página que muestra un único post del blog. Es una "ruta dinámica" en Next.js.
 * La parte `[slug]` en la ruta del fichero significa que Next.js generará una página
 * para cualquier URL que coincida con el patrón `/post/lo-que-sea`.
 *
 * @param {{ params: { slug: string } }} props - Next.js pasa automáticamente un objeto `params`
 *   que contiene los segmentos dinámicos de la URL. En este caso, contiene el `slug` del post.
 * @returns {React.ReactElement | void} El JSX de la página del post o una página 404 si no se encuentra.
 */
/**
 * @description
 * Página dinámica que muestra un post individual, obteniendo los datos reales desde la base de datos.
 *
 * @param {{ params: { slug: string } }} props - Next.js pasa automáticamente un objeto `params` con el slug.
 * @returns {Promise<React.ReactElement | void>} El JSX de la página del post o una página 404 si no se encuentra.
 */
export default async function PostPage({ params }: { params: { slug: string } }) {
  // Obtenemos el slug de los parámetros de la URL.
  const { slug } = params;

  // Buscamos el post real en la base de datos usando la función getPostBySlug.
  // Esta función está tipada y documentada en src/lib/posts.ts
  const post = await getPostBySlug(slug);

  // Si no se encuentra ningún post con ese slug, mostramos la página 404 de Next.js.
  if (!post) {
    notFound();
  }

  // Si encontramos el post, renderizamos su contenido.
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Contenedor principal con grid para escritorio */}
      <div className="lg:grid lg:grid-cols-6 lg:gap-8">
        {/* Columna principal: Contenido del post */}
        <article className="lg:col-span-4">
          {/* Título del post */}
          <h1 className="text-4xl font-extrabold text-center mb-6">{post.title}</h1>

          {/* Contenedor para la imagen de portada */}
          <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src={post.imageUrl} 
              alt={`Imagen de portada para ${post.title}`} 
              layout="fill" 
              objectFit="cover" 
              priority
            />
          </div>

          {/* Contenido del post con estilos de tipografía mejorados */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">{post.content}</p>
          </div>
        </article>

        {/* Columna lateral: Anuncios */}
        <aside className="lg:col-span-2 space-y-6 mt-12 lg:mt-0">
          {/* Espacio para publicidad */}
          {/* Descomentar la siguiente línea para mostrar publicidad */}
          <AdBox />
          
          {/* Se pueden añadir más elementos laterales aquí */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-medium text-gray-900 mb-2">Artículos relacionados</h3>
            <p className="text-sm text-gray-500">Próximamente más contenido...</p>
          </div>
        </aside>
      </div>
      {/* Sección de comentarios - Ocupa todo el ancho */}
      <section className="mt-12 lg:col-span-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Comentarios</h2>
          <div className="space-y-6">
            <CommentsList postId={post.id} />
            <CommentForm postId={post.id} />
          </div>
        </div>
      </section>
    </div>
  );
}
