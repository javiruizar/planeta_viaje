// src/lib/data.ts

/**
 * @description
 * Se definen los tipos para un Post. Usar una interfaz de TypeScript nos ayuda
 * a asegurar la consistencia de los datos en toda la aplicación.
 */
export interface Post {
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  content?: string; // El contenido completo del post es opcional aquí.
}

/**
 * @description
 * Datos de ejemplo para los posts. En una aplicación real, estos datos vendrían
 * de una base de datos. Por ahora, usamos un array de objetos para simular
 * esta información y poder construir la interfaz.
 * 
 * @type {Post[]}
 */
// [Eliminado] mockPosts: Los datos de ejemplo han sido retirados. Ahora los posts reales vienen de la base de datos mediante Prisma y las funciones de src/lib/posts.ts.
// Si necesitas datos de ejemplo para pruebas, usa la base de datos y el script de seeding.
//
// ⚠️ IMPORTANTE: No usar más mockPosts en producción ni en el frontend. Usa siempre la base de datos para mantener la coherencia de la aplicación.

  {
    title: "Aventura en las Montañas de Kioto",
    excerpt: "Descubre los templos ocultos y los senderos serenos en las afueras de la antigua capital de Japón.",
    imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2094&auto=format&fit=crop",
    slug: "aventura-montanas-kioto",
    content: "El viaje a través de las montañas de Kioto fue una experiencia inolvidable... (contenido completo del post iría aquí)",
  },
  {
    title: "Los Sabores de la Toscana",
    excerpt: "Un viaje gastronómico por el corazón de Italia, probando vinos, pastas y aceites de oliva locales.",
    imageUrl: "https://images.unsplash.com/photo-1528114039593-4366cc08227d?q=80&w=687&auto=format&fit=crop",
    slug: "sabores-de-la-toscana",
    content: "La Toscana no es solo un lugar, es un festín para los sentidos... (contenido completo del post iría aquí)",
  },
  {
    title: "Explorando los Fiordos Noruegos",
    excerpt: "Navega por aguas cristalinas entre majestuosas montañas y cascadas impresionantes en Noruega.",
    imageUrl: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=1974&auto=format&fit=crop",
    slug: "explorando-fiordos-noruegos",
    content: "Los fiordos de Noruega son una maravilla de la naturaleza que te deja sin aliento... (contenido completo del post iría aquí)",
  },
];
