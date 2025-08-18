/**
 * images.test.ts
 * Pruebas unitarias para src/lib/images.ts
 */
import {
  getImageById, getImagesByIds, getAllImages, getImagesByTags,
  getImagesByTitle, imageExists, getImagesCount,
} from '@/lib/images';
import '@testing-library/jest-dom';

// Mock prisma.images
jest.mock('@/lib/prisma', () => {
  const mockImages = [
    {
      id: 'img1',
      url: '/images/img1.jpg',
      alt: 'Imagen 1',
      tittle: 'Atardecer en Bali',
      tags: ['playa', 'bali'],
      description: 'Descripción 1',
    },
    {
      id: 'img2',
      url: '/images/img2.jpg',
      alt: 'Imagen 2',
      tittle: 'Montañas en Nepal',
      tags: ['montaña', 'nepal'],
      description: 'Descripción 2',
    },
  ];

  return {
    __esModule: true,
    prisma: {
      images: {
        findUnique: jest.fn().mockImplementation(
          ({ where: { id } }: { where: { id: string } }) =>
            Promise.resolve(mockImages.find((img) => img.id === id) ?? null),
        ),
        findMany: jest.fn().mockImplementation((args?: {
          where?: {
            id?: {
              in?: string[];
            };
            tags?: {
              hasSome?: string[];
            };
            tittle?: {
              contains?: string;
            };
          };
        }) => {
          if (!args || Object.keys(args).length === 0) {
            return Promise.resolve(mockImages);
          }
          if (args.where?.id?.in) {
            return Promise.resolve(mockImages.filter((img) => args.where!.id!.in!.includes(img.id)));
          }
          if (args.where?.tags?.hasSome) {
            return Promise.resolve(
              mockImages.filter((img) => img.tags.some((t) => args.where!.tags!.hasSome!.includes(t))),
            );
          }
          if (args.where?.tittle?.contains) {
            const term = args.where.tittle.contains.toLowerCase();
            return Promise.resolve(
              mockImages.filter((img) => img.tittle.toLowerCase().includes(term)),
            );
          }
          return Promise.resolve(mockImages);
        }),
        count: jest.fn().mockResolvedValue(2),
      },
    },
  };
});

describe('lib/images helpers', () => {
  test('getImageById devuelve la imagen correcta', async () => {
    const img = await getImageById('img1');
    expect(img?.alt).toBe('Imagen 1');
  });

  test('getImagesByIds filtra correctamente', async () => {
    const imgs = await getImagesByIds(['img1']);
    expect(imgs).toHaveLength(1);
    expect(imgs[0].id).toBe('img1');
  });

  test('getAllImages devuelve todas', async () => {
    const imgs = await getAllImages();
    expect(imgs).toHaveLength(2);
  });

  test('getImagesByTags funciona', async () => {
    const imgs = await getImagesByTags(['playa']);
    expect(imgs).toHaveLength(1);
    expect(imgs[0].id).toBe('img1');
  });

  test('getImagesByTitle busca por texto', async () => {
    const imgs = await getImagesByTitle('nepal');
    expect(imgs[0].id).toBe('img2');
  });

  test('imageExists devuelve booleano correcto', async () => {
    expect(await imageExists('img2')).toBe(true);
    expect(await imageExists('inexistente')).toBe(false);
  });

  test('getImagesCount devuelve total', async () => {
    expect(await getImagesCount()).toBe(2);
  });
});
