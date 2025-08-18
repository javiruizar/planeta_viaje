/**
 * PostCard.test.tsx
 */
import PostCard from '@/components/blog/PostCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockProps = {
  title: 'Explorando Tailandia',
  excerpt: 'Un breve recorrido por los templos y playas...',
  imageUrl: '/images/thailand.jpg',
  slug: 'explorando-tailandia',
  createdAt: '2024-05-20T00:00:00.000Z',
};

describe('<PostCard />', () => {
  test('renderiza título, fecha, extracto y link', () => {
    render(<PostCard {...mockProps} />);

    // Título
    expect(screen.getByRole('heading', { name: mockProps.title })).toBeInTheDocument();

    // Fecha formateada en español
    const fechaFormateada = new Date(mockProps.createdAt).toLocaleDateString('es-ES', {
      day: 'numeric', month: 'long', year: 'numeric',
    });
    expect(screen.getByText(fechaFormateada)).toBeInTheDocument();

    // Extracto
    expect(screen.getByText(mockProps.excerpt)).toBeInTheDocument();

    // Link al post
    const link = screen.getByRole('link', { name: /leer más/i });
    expect(link).toHaveAttribute('href', `/post/${mockProps.slug}`);
  });
});
