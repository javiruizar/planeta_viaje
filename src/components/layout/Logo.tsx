// src/components/layout/Logo.tsx

// Se importa React para crear el componente y Link de Next.js para la navegación.
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * @description
 * Componente que muestra el logo del sitio. Actualmente es un texto, pero está
 * preparado para mostrar una imagen. Al hacer clic en él, redirige al usuario
 * a la página de inicio.
 * 
 * @explanation
 * - `const Logo = () => { ... }`: Define el componente funcional `Logo`.
 * - `<Link href="/">`: Este es un componente de Next.js que gestiona la navegación
 *   del lado del cliente. `href="/"` indica que el enlace apunta a la página raíz (Home).
 *   Envuelve al elemento `<a>` para darle la funcionalidad de enlace.
 * - `<a>`: Es la etiqueta de anclaje HTML que se renderizará. Next.js requiere que esté
 *   dentro de un componente `Link`. Las clases de Tailwind le dan el estilo visual.
 * - `NOTA`: La imagen 'planeta_viaje_logo.jpg' no se ha encontrado. Cuando esté disponible,
 *   colócala en la carpeta `public` en la raíz de tu proyecto.
 */
const Logo = () => {
  return (
    // Este div centra el logo en la página y le da espacio vertical (padding).
<div className="flex justify-center py-0 hover:scale-110 transition-transform">
      
      {/* 
        El componente Link de Next.js se encarga de la navegación sin recargar la página.
        'href="/"' especifica que el destino es la página de inicio.
        En las versiones modernas de Next.js, las props de estilo (como className) se aplican
        directamente al componente Link, y ya no se necesita una etiqueta <a> anidada.
      */}
      <Link href="/" className="text-4xl font-bold text-blue-800 hover:text-blue-600 transition-colors">
      <Image src="https://planeta-viaje.s3.eu-west-1.amazonaws.com/planeta-viaje-logo-new-removebg-preview.png" 
      alt="Logo de Planeta Viaje" 
      width={496} 
      height={267} 
      className="w-40 h-40" 
      />
      </Link>
    </div>
  );
};

// Se exporta el componente para poder usarlo en otros ficheros.
export default Logo;
