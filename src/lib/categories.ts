// src/lib/categories.ts
import { prisma } from './prisma';
import { Prisma } from '@prisma/client';


const fieldsToSelect = {
  id: true,
  slug: true,
  name: true,
  backgroundImage: true,
  mainImage: true,
  description: true,
};
type Category = Prisma.CategoryGetPayload<{ select: typeof fieldsToSelect }>;

export async function getCategoryBySlug(slug: string) {
  const categories = await prisma.category.findUnique({
    where: { slug },
    select: fieldsToSelect,
  });

  return categories;
}

export async function getAllCategories() {
  return prisma.category.findMany({
    orderBy: { id: 'asc' },
    select: fieldsToSelect,
  });
}

export async function isValidCategorySlug(slug: string): Promise<boolean> {
  const categories = await getAllCategories();
  return categories.some((category: Category) => category.slug === slug);
} 