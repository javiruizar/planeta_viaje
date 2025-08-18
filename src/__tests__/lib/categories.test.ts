/**
 * categories.test.ts
 * Pruebas unitarias para src/lib/categories.ts
 */
import { getAllCategories, getCategoryBySlug, isValidCategorySlug } from '@/lib/categories';

import '@testing-library/jest-dom';

// 1️⃣ – Mock prisma.category
jest.mock('@/lib/prisma', () => {
  const mockCategories = [
    {
      id: 1,
      slug: 'asia',
      name: 'Asia',
      backgroundImage: '/images/asia.jpg',
      mainImage: '/images/asia-main.jpg',
      description: 'Continente asiático',
    },
    {
      id: 2,
      slug: 'europa',
      name: 'Europa',
      backgroundImage: '/images/europe.jpg',
      mainImage: '/images/europe-main.jpg',
      description: 'Continente europeo',
    },
  ];
  return {
    __esModule: true,
    prisma: {
      category: {
        findUnique: jest.fn().mockImplementation(
          ({ where: { slug } }: { where: { slug: string } }) =>
            Promise.resolve(mockCategories.find((c) => c.slug === slug) ?? null),
        ),
        findMany: jest.fn().mockResolvedValue(mockCategories),
      },
    },
  };
});

describe('lib/categories helpers', () => {
  test('getAllCategories devuelve todas las categorías', async () => {
    const cats = await getAllCategories();
    expect(cats).toHaveLength(2);
    expect(cats[0].slug).toBe('asia');
  });

  test('getCategoryBySlug devuelve la categoría correcta', async () => {
    const cat = await getCategoryBySlug('europa');
    expect(cat?.name).toBe('Europa');
  });

  test('isValidCategorySlug funciona correctamente', async () => {
    expect(await isValidCategorySlug('asia')).toBe(true);
    expect(await isValidCategorySlug('oceania')).toBe(false);
  });
});
