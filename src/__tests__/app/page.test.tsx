/**
 * page.test.tsx
 * Prueba del Server Component Home (app/page.tsx).
 *
 * Se mockea getAllPosts para aislar la base de datos.
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock de la función de datos
jest.mock('@/lib/posts', () => ({
  getAllPosts: jest.fn().mockResolvedValue([
    {
      id: '1',
      slug: 'post-prueba',
      title: 'Post de prueba',
      excerpt: 'Extracto',
      content: 'Contenido',
      imageUrl: '/images/ejemplo.jpg',
      createdAt: new Date('2025-01-01T00:00:00Z').toISOString(),
    },
  ]),
}));

// Importar después de mockear
import Home from '@/app/page';

describe('Página Home', () => {
  test('muestra el título de sección y la tarjeta de post', async () => {
    // Home es un Server Component que devuelve un ReactNode
    const Page = await Home();
    render(Page);

    expect(screen.getByText(/Últimas Entradas del Blog/i)).toBeInTheDocument();
    const links = screen.getAllByRole('link');
    expect(links.some((l) => l.getAttribute('href') === '/post/post-prueba')).toBe(true);
  });
});
