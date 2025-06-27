// src/components/layout/MainMenu.tsx

// Se importa React para crear el componente y Link de Next.js para la navegación.
import React from 'react';
import Link from 'next/link';

/**
 * @description
 * Este componente renderiza el menú de navegación principal del blog.
 * Muestra enlaces a las principales categorías (continentes).
 * 
 * @explanation
 * - `const MainMenu = () => { ... }`: Define el componente funcional `MainMenu`.
 * - `<nav>`: Es la etiqueta semántica de HTML para la navegación principal del sitio.
 * - `<Link href="...">`: Componente de Next.js para la navegación. La ruta `href` apunta
 *   a la página de la categoría correspondiente. Por ejemplo, `/category/europa` llevará
 *   a una página que lista todos los posts de la categoría "europa".
 * - `TODO`: Se ha dejado una nota para implementar la funcionalidad de menús desplegables
 *   en el futuro, para poder navegar a subcategorías (ej. Europa > Francia).
 */
const MainMenu = () => {
  return (
    // La etiqueta <nav> actúa como contenedor del menú. Las clases de Tailwind le dan
    // un fondo azul, texto blanco y una ligera sombra.
    <nav className="bg-blue-800 text-white shadow-md">

      {/* 
        Este div centra el contenido del menú y usa Flexbox para alinear los enlaces.
        'justify-center' coloca los enlaces en el centro del contenedor.
      */}
      <div className="container mx-auto flex justify-center p-4">

        {/* 
          Cada componente Link representa un botón del menú. Las clases de Tailwind para dar estilo
          se aplican directamente al Link. Ya no se necesita una etiqueta <a> dentro.
        */}
        <Link href="/category/europa" className="px-4 py-2 rounded hover:bg-blue-700 transition-colors">Europa</Link>
        <Link href="/category/asia" className="px-4 py-2 rounded hover:bg-blue-700 transition-colors">Asia</Link>
        <Link href="/category/africa" className="px-4 py-2 rounded hover:bg-blue-700 transition-colors">África</Link>
        <Link href="/category/america" className="px-4 py-2 rounded hover:bg-blue-700 transition-colors">América</Link>
        <Link href="/category/oceania" className="px-4 py-2 rounded hover:bg-blue-700 transition-colors">Oceanía</Link>
      </div>
    </nav>
  );
};

// Se exporta el componente para ser utilizado en el layout principal.
export default MainMenu;
