import { prisma } from './prisma';

// Interfaz para el tipo de imagen basada en el modelo Prisma
export interface ImageDTO {
  id: string;
  url: string;
  alt: string;
  tittle: string;
  tags: string[];
  description: string;
}

/**
 * Obtiene una imagen por su ID
 * @param id - El ID único de la imagen
 * @returns La imagen completa o null si no existe
 */
export async function getImageById(id: string): Promise<ImageDTO | null> {
  try {
    const image = await prisma.images.findUnique({
      where: { id }
    });

    return image;
  } catch (error) {
    console.error('Error al obtener imagen por ID:', error);
    return null;
  }
}

/**
 * Obtiene múltiples imágenes por sus IDs
 * @param ids - Array de IDs de imágenes
 * @returns Array de imágenes encontradas
 */
export async function getImagesByIds(ids: string[]): Promise<ImageDTO[]> {
  try {
    const images = await prisma.images.findMany({
      where: {
        id: {
          in: ids
        }
      }
    });

    return images;
  } catch (error) {
    console.error('Error al obtener imágenes por IDs:', error);
    return [];
  }
}

/**
 * Obtiene todas las imágenes de la base de datos
 * @returns Array con todas las imágenes
 */
export async function getAllImages(): Promise<ImageDTO[]> {
  try {
    const images = await prisma.images.findMany({
      orderBy: {
        id: 'asc'
      }
    });

    return images;
  } catch (error) {
    console.error('Error al obtener todas las imágenes:', error);
    return [];
  }
}

/**
 * Busca imágenes por tags
 * @param tags - Array de tags a buscar
 * @returns Array de imágenes que contienen alguno de los tags especificados
 */
export async function getImagesByTags(tags: string[]): Promise<ImageDTO[]> {
  try {
    const images = await prisma.images.findMany({
      where: {
        tags: {
          hasSome: tags
        }
      },
      orderBy: {
        id: 'asc'
      }
    });

    return images;
  } catch (error) {
    console.error('Error al buscar imágenes por tags:', error);
    return [];
  }
}

/**
 * Busca imágenes por título (búsqueda parcial)
 * @param title - Título o parte del título a buscar
 * @returns Array de imágenes que coinciden con el título
 */
export async function getImagesByTitle(title: string): Promise<ImageDTO[]> {
  try {
    const images = await prisma.images.findMany({
      where: {
        tittle: {
          contains: title,
          mode: 'insensitive' // Búsqueda case-insensitive
        }
      },
      orderBy: {
        tittle: 'asc'
      }
    });

    return images;
  } catch (error) {
    console.error('Error al buscar imágenes por título:', error);
    return [];
  }
}

/**
 * Verifica si una imagen existe por su ID
 * @param id - El ID de la imagen a verificar
 * @returns true si existe, false en caso contrario
 */
export async function imageExists(id: string): Promise<boolean> {
  try {
    const image = await prisma.images.findUnique({
      where: { id },
      select: { id: true } // Solo seleccionamos el ID para optimizar
    });

    return !!image;
  } catch (error) {
    console.error('Error al verificar si existe la imagen:', error);
    return false;
  }
}

/**
 * Obtiene el número total de imágenes en la base de datos
 * @returns El número total de imágenes
 */
export async function getImagesCount(): Promise<number> {
  try {
    const count = await prisma.images.count();
    return count;
  } catch (error) {
    console.error('Error al obtener el conteo de imágenes:', error);
    return 0;
  }
} 