/**
 * BrightPostCard.test.tsx
 * Pruebas del componente <BrightPostCard />
 *
 * Demuestra cómo comprobar que la tarjeta muestra correctamente
 * la información básica (título, imagen, enlace).
 */

import { render, screen } from '@testing-library/react';
import BrightPostCard from '@/components/blog/BrighPostCard';
import '@testing-library/jest-dom';

// Datos de ejemplo
const mockPost = {
  title: 'Título de prueba',
  excerpt: 'Extracto de prueba',
  imageUrl: '/images/test.jpg',
  slug: 'titulo-de-prueba',
  createdAt: new Date('2025-01-01T00:00:00Z').toISOString(),
};

describe('<BrightPostCard />', () => {
  test('renderiza el título, la imagen y el enlace correctos', () => {
    render(<BrightPostCard {...mockPost} />);

    // Comprueba que el título está en el documento
    expect(screen.getByText(mockPost.title)).toBeInTheDocument();

    // Comprueba que existe un enlace que apunta a la URL del post
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/post/${mockPost.slug}`);

    // El alt de la imagen incluye el título del post.
    const img = screen.getByAltText(new RegExp(mockPost.title, 'i')) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(mockPost.imageUrl);
  });
});
