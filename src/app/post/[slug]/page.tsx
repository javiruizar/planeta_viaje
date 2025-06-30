// src/app/post/[slug]/page.tsx

// Importamos los componentes y datos necesarios.
import Image from 'next/image';
// Importamos la función que obtiene un post real desde la base de datos por su slug.
import { getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';

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
    <article className="max-w-4xl mx-auto py-8">
      {/* Título del post. */}
      <h1 className="text-4xl font-extrabold text-center mb-4">{post.title}</h1>

      {/* Contenedor para la imagen de portada. */}
      <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image src={post.imageUrl} alt={`Imagen de portada para ${post.title}`} layout="fill" objectFit="cover" />
      </div>

      {/* Contenido del post. La clase `prose` de Tailwind aplica estilos de tipografía bonitos. */}
      <div className="prose dark:prose-invert max-w-none">
        <p>{post.content}</p>
      </div>
    </article>
  );
}
