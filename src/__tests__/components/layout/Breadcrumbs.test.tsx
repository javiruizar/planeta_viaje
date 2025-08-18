/**
 * Breadcrumbs.test.tsx
 */
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const items = [
  { label: 'Blog', href: '/blog' },
  { label: 'Asia', href: '/category/asia' },
  { label: 'Templo del Buda' }, // último sin href
];

describe('<Breadcrumbs />', () => {
  test('renderiza Inicio y los items proporcionados', () => {
    render(<Breadcrumbs items={items} />);

    // Link Inicio
    const inicio = screen.getByRole('link', { name: /inicio/i });
    expect(inicio).toHaveAttribute('href', '/');

    // Links intermedios
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog');
    expect(screen.getByRole('link', { name: 'Asia' })).toHaveAttribute('href', '/category/asia');

    // Último item sin href debe ser texto simple
    expect(screen.getByText('Templo del Buda')).toBeInTheDocument();
    expect(screen.getByText('Templo del Buda').closest('a')).toBeNull();
  });
});
