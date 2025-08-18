/**
 * posts.test.ts
 *
 * Pruebas unitarias para las funciones de "src/lib/posts.ts".
 * Se utiliza Jest para mockear Prisma Client y evitar acceder a la base de datos real.
 */

import { getAllPosts, getPostBySlug } from '@/lib/posts';

// 1️⃣ – Creamos un mock manual de la exportación "prisma" que usa posts.ts
// --------------------------------------------------------
//  – El path tiene que coincidir exactamente con la ruta relativa en posts.ts
jest.mock('@/lib/prisma', () => {
  // Datos de ejemplo que usaremos en los tests
  const mockPosts = [
    {
      id: '1',
      slug: 'viaje-nueva-york',
      title: 'Viaje a Nueva York',
      excerpt: 'Una aventura urbana inolvidable',
      content: 'Contenido **Markdown**',
      imageUrl: '/images/ny.jpg',
      createdAt: new Date('2025-05-10T10:00:00Z'),
    },
    {
      id: '2',
      slug: 'explorando-kioto',
      title: 'Explorando Kioto',
      excerpt: 'Templos, jardines y cultura milenaria',
      content: 'Contenido **Markdown**',
      imageUrl: '/images/kioto.jpg',
      createdAt: new Date('2025-04-01T09:30:00Z'),
    },
  ];

  // Simulamos solo los métodos que necesitamos de Prisma Client
  return {
    __esModule: true,
    prisma: {
      post: {
        findMany: jest.fn().mockResolvedValue(mockPosts),
        findUnique: jest
          .fn()
          .mockImplementation(({ where: { slug } }: { where: { slug: string } }) => {
            return Promise.resolve(
              mockPosts.find((p) => p.slug === slug) ?? null,
            );
          }),
      },
    },
  };
});

// 2️⃣ – Tests
// --------------------------------------------------------

describe('lib/posts helpers', () => {
  test('getAllPosts devuelve posts ordenados por fecha', async () => {
    const posts = await getAllPosts();
    expect(posts).toHaveLength(2);
    // Debe devolver el post más reciente primero
    expect(posts[0].slug).toBe('viaje-nueva-york');
    // createdAt convertido a string ISO
    expect(typeof posts[0].createdAt).toBe('string');
  });

  test('getPostBySlug devuelve el post correcto', async () => {
    const post = await getPostBySlug('explorando-kioto');
    expect(post).not.toBeNull();
    expect(post?.title).toBe('Explorando Kioto');
  });

  test('getPostBySlug devuelve null para slug inexistente', async () => {
    const post = await getPostBySlug('inexistente');
    expect(post).toBeNull();
  });
});
