/**
 * posts.ts
 *
 * Funciones para acceder a los posts de la base de datos usando Prisma Client.
 * Se utiliza un DTO (Data Transfer Object) para exponer solo los campos necesarios al frontend.
 *
 * Ejemplo de uso:
 * import { getAllPosts, getPostBySlug } from './posts';
 * const posts = await getAllPosts();
 * const post = await getPostBySlug('aventura-montanas-kioto');
 */
import { prisma } from './prisma';

/**
 * Data Transfer Object (DTO) para un post.
 * Solo expone los campos necesarios para el frontend.
 */
export interface PostDTO {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  content: string;
  createdAt: string; // ISO string para facilitar el formateo en el frontend
}

/**
 * Obtiene todos los posts ordenados por fecha de creación descendente.
 * @returns {Promise<PostDTO[]>} Array de posts para mostrar en la página principal o de categorías.
 *
 * Ejemplo:
 * const posts = await getAllPosts();
 */
export async function getAllPosts(): Promise<PostDTO[]> {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      slug: true,
      title: true,
      excerpt: true,
      imageUrl: true,
      content: true,
      createdAt: true,
    },
  });
  // Convertimos createdAt a string ISO para facilitar el formateo en el frontend
  return posts.map(post => ({ ...post, createdAt: post.createdAt.toISOString() }));
}

/**
 * Obtiene un post por su slug único.
 * @param {string} slug - El identificador único del post en la URL.
 * @returns {Promise<PostDTO | null>} El post encontrado o null si no existe.
 *
 * Ejemplo:
 * const post = await getPostBySlug('aventura-montanas-kioto');
 */
export async function getPostBySlug(slug: string): Promise<PostDTO | null> {
  const post = await prisma.post.findUnique({
    where: { slug },
    select: {
      slug: true,
      title: true,
      excerpt: true,
      imageUrl: true,
      content: true,
      createdAt: true,
    },
  });
  if (!post) return null;
  return { ...post, createdAt: post.createdAt.toISOString() };
}

/**
 * Nota:
 * Si en el futuro necesitas añadir más campos (categoría, comentarios, etc.),
 * amplía el DTO y los métodos de acceso aquí, sin modificar el frontend directamente.
 */
