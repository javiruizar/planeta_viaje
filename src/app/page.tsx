// src/app/page.tsx

/**
 * @description
 * Esta es la función que define el componente de la página de inicio (Home).
 * En Next.js, cualquier fichero `page.tsx` dentro de la carpeta `app` se convierte
 * en una ruta. `app/page.tsx` es la ruta raíz, es decir, la página principal del sitio.
 * 
 * @explanation
 * - `export default function Home()`: Se define y exporta por defecto el componente `Home`.
 *   Next.js lo renderizará como el contenido principal cuando un usuario visite la raíz del sitio.
 *   Este componente se inserta en la prop `{children}` del fichero `layout.tsx`.
 * - `return ( ... )`: Devuelve el código JSX que conforma el contenido de la página.
 * - Hemos eliminado el código de ejemplo de Next.js y lo hemos reemplazado por un
 *   marcador de posición simple para nuestro futuro contenido.
 */
export default function Home() {
  return (
    // La etiqueta <section> actúa como un contenedor semántico para el contenido de la página de inicio.
    <section>
      <h1 className="text-3xl font-bold mb-4">Últimas Entradas del Blog</h1>
      <p>Bienvenido a Planeta Viaje. Aquí se mostrará una lista con las últimas publicaciones.</p>
      {/* 
        Más adelante, aquí realizaremos una llamada a nuestra base de datos para obtener
        los posts y los mostraremos utilizando el componente PostCard que crearemos a continuación.
      */}
    </section>
  );
}

