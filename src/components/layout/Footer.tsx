// src/components/layout/Footer.tsx

// Se importa React para poder definir el componente.
import React from 'react';

/**
 * @description
 * Este componente renderiza el pie de página del sitio.
 * Muestra información de copyright y enlaces a páginas informativas como
 * "Sobre nosotros", "Contacto" y "Política de Privacidad".
 * 
 * @explanation
 * - `const Footer = () => { ... }`: Define el componente funcional `Footer`.
 * - `<footer>`: Etiqueta semántica de HTML para el pie de página.
 * - `{new Date().getFullYear()}`: Es una expresión de JavaScript dentro de JSX.
 *   Crea un objeto `Date` con la fecha actual y obtiene el año con `.getFullYear()`.
 *   Esto asegura que el año del copyright siempre esté actualizado.
 */
const Footer = () => {
  return (
    // La etiqueta <footer> es el contenedor principal. Las clases de Tailwind le dan
    // un fondo gris oscuro, texto blanco, un padding generoso y un margen superior.
    <footer className="bg-agua-claro text-black p-4 mt-2">

      {/* Este div centra el contenido del pie de página. */}
      <div className="container mx-auto text-center">


        {/* Contenedor para los enlaces a páginas secundarias. 'mt-4' añade un margen superior. */}
        <div className="mt-4">

          {/* Enlaces a páginas informativas. 'px-3' les da espaciado horizontal y
              'hover:text-yellow-400' cambia su color al pasar el ratón. */}
          <a href="/about" className="px-3 hover:bg-agua-oscuro hover:text-arena-oscuro transition-colors">Sobre nosotros</a>
          <a href="/contact" className="px-3 hover:bg-agua-oscuro hover:text-arena-oscuro transition-colors">Contacto</a>
          <a href="/privacy" className="px-3 hover:bg-agua-oscuro hover:text-arena-oscuro transition-colors">Política de Privacidad</a>
        </div>

        {/* Párrafo para el texto de copyright. Muestra el año actual dinámicamente. */}

        <p>&copy; {new Date().getFullYear()} Planeta Viaje. Todos los derechos reservados.</p>

      </div>
    </footer>
  );
};

// Se exporta el componente para ser usado en el layout principal.
export default Footer;
