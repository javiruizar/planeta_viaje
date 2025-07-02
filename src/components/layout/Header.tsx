// src/components/layout/Header.tsx

// Se importa la librería React, que es la base para crear componentes en Next.js.
import React from 'react';

/**
 * @description
 * Este es el componente del encabezado superior del sitio.
 * Su propósito es mostrar una barra fina en la parte más alta de la página
 * con enlaces a secciones destacadas (ej. "Top España") e iconos de redes sociales.
 * 
 * @explanation
 * - `const Header = () => { ... }`: Se define un componente funcional de React llamado `Header`.
 *   Es una función flecha que no recibe parámetros (props) y devuelve código JSX.
 * - `return ( ... )`: El JSX que se devuelve define la estructura HTML del componente.
 * - `<header>`: Es la etiqueta semántica de HTML para un encabezado.
 * - `className`: Se usa en lugar de `class` en JSX para aplicar clases de CSS. Las clases usadas
 *   son de Tailwind CSS para dar estilo al componente.
 * - `<div>`: Se usan para agrupar y estructurar el contenido.
 * - `<a>`: Son enlaces de ejemplo. Más adelante, se reemplazarán por componentes `Link` de Next.js
 *   para una navegación más eficiente.
 */
const Header = () => {
  return (
    // La etiqueta <header> define el contenedor principal del encabezado.
    // Las clases de Tailwind CSS le dan un fondo gris claro, un poco de padding,
    // y centran el texto con un tamaño y color específicos.
    <header className="bg-arena-claro p-2 text-center text-sm text-gray-600">
      
      {/* Este div actúa como un contenedor centrado que se adapta al ancho de la pantalla.
          'flex', 'justify-between' y 'items-center' son clases de Flexbox para alinear
          los elementos hijos (los enlaces y los iconos) en los extremos opuestos. */}
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Contenedor para los enlaces a las secciones destacadas. */}
        <div>
          {/* Cada <a> es un enlace. 'px-2' añade espacio a los lados y 
              'hover:text-blue-600' cambia el color del texto al pasar el ratón por encima. */}
          <a href="#" className="px-2 hover:text-blue-600">Top España</a>
          <a href="#" className="px-2 hover:text-blue-600">Top Europa</a>
          <a href="#" className="px-2 hover:text-blue-600">Top Asia</a>
        </div>

        {/* Contenedor para los futuros iconos de redes sociales. */}
        <div>
          <span>Iconos de Redes Sociales</span>
        </div>
      </div>
    </header>
  );
};

// Se exporta el componente `Header` para que pueda ser importado y utilizado
// en otras partes de la aplicación, como en el layout principal.
export default Header;
