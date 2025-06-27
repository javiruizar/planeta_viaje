// src/app/page.tsx

// Importamos el componente PostCard para mostrar cada artículo.
import PostCard from "@/components/blog/PostCard";
// Importamos nuestros datos de ejemplo desde el fichero centralizado.
import { mockPosts } from "@/lib/data";

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
export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-8 text-center">Últimas Entradas del Blog</h1>
      
      {/* 
        Contenedor para la rejilla de posts. 
        - `grid`: Activa el layout de rejilla de Tailwind CSS.
        - `gap-8`: Añade un espacio de 8 unidades (2rem) entre cada elemento de la rejilla.
        - `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`: Define el número de columnas.
          - En pantallas pequeñas (por defecto), hay 1 columna.
          - En pantallas medianas (`md`) y superiores, hay 2 columnas.
          - En pantallas grandes (`lg`) y superiores, hay 3 columnas.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 
          Usamos el método `map` para iterar sobre nuestro array `mockPosts`.
          Por cada objeto `post` en el array, renderizamos un componente `PostCard`.
          - `key={post.slug}`: React necesita una `key` única para cada elemento de una lista.
            Usamos el `slug` porque es un identificador único para cada post.
          - `{...post}`: Usamos el "spread operator" para pasar todas las propiedades del
            objeto `post` (title, excerpt, etc.) como props al componente `PostCard`.
        */}
        {mockPosts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
}

