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


