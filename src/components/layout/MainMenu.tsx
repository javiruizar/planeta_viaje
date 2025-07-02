// src/components/layout/MainMenu.tsx

// Se importa React para crear el componente y Link de Next.js para la navegación.
import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

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
    <nav className="bg-agua-claro text-black shadow-md">
      {/*
        Menú principal de navegación
        - bg-agua: fondo azul agua personalizado definido en tailwind.config.js
        - text-white: texto blanco para buen contraste
        - shadow-md: sombra ligera para separar visualmente el menú
      */}
      <div className="container mx-auto flex justify-center p-4">
     
      
        {/*
          Cada componente Link representa un botón del menú de categorías.
          - px-4 py-2 rounded: padding y bordes redondeados
          - hover:bg-arena: al pasar el ratón, el fondo se vuelve amarillo arena (color acento)
          - transition-colors: animación suave
        */}

        <Link href="/category/europa" className="px-4 py-2 bg-agua-claro rounded hover:bg-agua-oscuro transition-colors">Europa</Link>
        <Link href="/category/asia" className="px-4 py-2 bg-agua-claro rounded hover:bg-agua-oscuro transition-colors">Asia</Link>
        <Logo />
        <Link href="/category/africa" className="px-4 py-2 bg-agua-claro rounded hover:bg-agua-oscuro transition-colors">África</Link>
        <Link href="/category/america" className="px-4 py-2 bg-agua-claro rounded hover:bg-agua-oscuro transition-colors">América</Link>
        <Link href="/category/oceania" className="px-4 py-2 bg-agua-claro rounded hover:bg-agua-oscuro transition-colors">Oceanía</Link>
      </div>
    </nav>
  );
};

// Se exporta el componente para ser utilizado en el layout principal.
export default MainMenu;
