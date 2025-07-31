// src/lib/categories.ts

export interface Category {
  name: string;
  slug: string;
  description: string;
  imageUrl?: string;
}

export const categories: Category[] = [
  {
    name: 'Europa',
    slug: 'europa',
    description: 'Descubre los destinos más fascinantes de Europa',
    imageUrl: '/images/salamanca.jpg'
  },
  {
    name: 'Asia',
    slug: 'asia',
    description: 'Explora la diversidad cultural y natural de Asia',
    imageUrl: '/images/Nueva-York-City-Hall-Park.jpg'
  },
  {
    name: 'América',
    slug: 'america',
    description: 'Aventuras inolvidables en el continente americano',
    imageUrl: '/images/IMG_9881.jpg'
  },
  {
    name: 'África',
    slug: 'africa',
    description: 'Sumérgete en la riqueza natural y cultural de África',
    imageUrl: '/images/salamanca.jpg'
  },
  {
    name: 'Oceanía',
    slug: 'oceania',
    description: 'Descubre las maravillas del Pacífico Sur',
    imageUrl: '/images/Nueva-York-City-Hall-Park.jpg'
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}

export function getAllCategories(): Category[] {
  return categories;
}

export function isValidCategorySlug(slug: string): boolean {
  return categories.some(category => category.slug === slug);
} 