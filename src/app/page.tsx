// src/app/page.tsx

// Importamos el componente PostCard para mostrar cada artículo.
import PostCard from "@/components/blog/PostCard";
// Importamos la función que obtiene los posts reales desde la base de datos.
import { getAllPosts } from "@/lib/posts";
// Importamos el componente de fondo parallax
import ParallaxBackground from "@/components/layout/ParallaxBackground";

/**
 * @description
 * Componente de la página de inicio (Home). Su función es mostrar una lista con las
 * últimas entradas del blog.
 * 
 * @explanation
 * - **Rol en Next.js**: Como `page.tsx` en la raíz de `app`, este fichero define la ruta principal ('/') de la web.
 * - **Renderizado**: Este componente se inserta en la prop `{children}` del `layout.tsx`.
 * - **Contenido**: Actualmente, muestra una lista de posts de ejemplo (`mockPosts`) y los renderiza
 *   en una rejilla responsiva utilizando el componente `PostCard`.
 * - **Futuro**: Más adelante, los datos de `mockPosts` serán reemplazados por una llamada
 *   a la base de datos para obtener los artículos reales.
 */
/**
 * @description
 * Componente de la página de inicio (Home). Su función es mostrar una lista con las
 * últimas entradas del blog, obtenidas directamente desde la base de datos mediante Prisma.
 *
 * @explanation
 * - Este componente es un Server Component de Next.js (por defecto en la carpeta /app).
 * - Utiliza la función asíncrona getAllPosts para recuperar los posts reales.
 * - Los posts se renderizan en una rejilla responsiva usando el componente PostCard.
 * - Si no hay posts, muestra un mensaje informativo.
 */
export default async function Home() {
  // Llamamos a la función que accede a la base de datos y devuelve los posts reales.
  // Esta función está tipada y documentada en src/lib/posts.ts
  const posts = await getAllPosts();

  return (
    <ParallaxBackground 
      localImage="/images/Nueva-York-City-Hall-Park.jpg"
      // s3Image="https://tu-bucket.s3.region.amazonaws.com/ruta/a/imagen.jpg"
      overlay={true}
      overlayColor="rgba(0, 0, 0, 0.4)"
    >
      <section className="py-16">
        <h1 className="text-4xl font-bold mb-12 text-center text-white">Últimas Entradas del Blog</h1>
      {/*
        Contenedor para la rejilla de posts.
        - `grid`: Activa el layout de rejilla de Tailwind CSS.
        - `gap-8`: Añade un espacio de 8 unidades (2rem) entre cada elemento de la rejilla.
        - `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`: Define el número de columnas según el tamaño de pantalla.
      */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/*
          Si hay posts, los mostramos usando PostCard. Si no, mostramos un mensaje.
          - `key={post.slug}`: React necesita una clave única para cada elemento.
          - `{...post}`: Pasamos todas las props necesarias al componente PostCard.
        */}
        {posts.length > 0 ? (
          posts.slice(0, 3).map((post) => (
            <PostCard key={post.slug} {...post} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-8">
            No hay entradas disponibles por el momento. ¡Pronto habrá nuevas aventuras!
          </div>
        )}
      </div>
    </section>
    </ParallaxBackground>
  );
}

