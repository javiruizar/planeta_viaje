import './globals.css'
// src/app/layout.tsx

// Se importa 'Metadata' de Next.js para definir los metadatos de la página.
import type { Metadata } from 'next';
// Se importa la fuente 'Inter' de Google Fonts a través de Next.js para optimizar su carga.
import { Inter } from 'next/font/google';
// Se importan los estilos globales de la aplicación.
import { usePathname } from "next/navigation";

// Se importan los componentes de layout que hemos creado.
// El alias '@/' se configura por defecto en Next.js para apuntar a la carpeta 'src'.
import Header from '@/components/layout/Header';
import Logo from '@/components/layout/Logo';
import MainMenu from '@/components/layout/MainMenu';
import Footer from '@/components/layout/Footer';

/**
 * @description
 * Se configura la fuente 'Inter' para ser usada en todo el proyecto.
 * 
 * @explanation
 * - `Inter({ ... })`: Se llama a la función `Inter` importada.
 * - `subsets: ['latin']`: Se especifica que solo necesitamos los caracteres del alfabeto latino.
 * - `variable: '--font-inter'`: Se asigna la fuente a una variable CSS llamada `--font-inter`.
 *   Esto nos permite usar `var(--font-inter)` en nuestros ficheros CSS.
 */


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

/**
 * @description
 * Se definen los metadatos globales para el sitio web.
 * Esta información es crucial para el SEO (Search Engine Optimization) y para cómo
 * se muestra el sitio en la pestaña del navegador o al compartirlo en redes sociales.
 * 
 * @explanation
 * - `export const metadata: Metadata = { ... }`: Se exporta un objeto `metadata` que Next.js
 *   utilizará para generar las etiquetas `<meta>` en el `<head>` del HTML.
 * - `title`: El título que aparecerá en la pestaña del navegador y en los resultados de búsqueda.
 * - `description`: Una breve descripción del sitio, también usada por los motores de búsqueda.
 */
export const metadata: Metadata = {
  title: 'Planeta Viaje - Tu Blog de Aventuras por el Mundo',
  description: 'Explora los destinos más increíbles del mundo a través de nuestras guías de viaje, consejos y experiencias.',
};

/**
 * @description
 * Este es el componente de Layout principal (Root Layout) de la aplicación.
 * Next.js lo utiliza para envolver todas las páginas del sitio.
 * Su función es definir la estructura HTML base (`<html>`, `<body>`) y colocar
 * los componentes comunes como el Header, Footer, etc.
 * 
 * @param {object} props - El objeto de propiedades del componente.
 * @param {React.ReactNode} props.children - 'children' es una prop especial en React.
 *   Representa el contenido de la página específica que se está renderizando en ese momento
 *   (por ejemplo, la página de inicio, un post, etc.). Next.js lo pasa automáticamente.
 * 
 * @returns {JSX.Element} El elemento JSX que representa la estructura completa de la página.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Se define la etiqueta <html> y se establece el idioma principal en español.
    <html lang="es">
      {/*
        Se define la etiqueta <body>.
        - `inter.variable`: Se aplica la clase de la variable de fuente que definimos antes.
        - `font-sans`: Se establece la fuente 'sans-serif' como la fuente por defecto.
        - `bg-gray-50`: Se aplica un color de fondo gris muy claro a toda la página.
        - `text-gray-800`: Se establece un color de texto gris oscuro por defecto.
      */}
      <body className={`${inter.variable} font-sans bg-gray-50 text-gray-800`}>
        {/*
          Este div es el contenedor principal de la aplicación.
          - `flex flex-col`: Lo convierte en un contenedor Flexbox con dirección vertical.
          - `min-h-screen`: Asegura que el contenedor ocupe al menos toda la altura de la pantalla.
            Esto es útil para que el footer se quede abajo incluso en páginas con poco contenido.
        */}
        <div className="flex flex-col min-h-screen">
                   
          {/* Se renderiza el componente del logo. */}
          {/* <Logo /> */}
          
          {/* Se renderiza el menú de navegación principal. */}
            {/* <MainMenu /> */}

          {/*
            La etiqueta <main> es semántica y define el contenido principal de la página.
            - `flex-grow`: Hace que este elemento crezca para ocupar todo el espacio vertical
              disponible, empujando al footer hacia abajo.
            - `container mx-auto`: Centra el contenido y le da un ancho máximo.
            - `px-4 py-8`: Añade padding horizontal y vertical.
          */}
            {/* Aquí es donde Next.js renderizará el contenido de cada página específica. */}
            {children}

          {/* Se renderiza el componente del pie de página. */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
