import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '@/app/not-found';

jest.unmock('@/app/not-found');

describe('<NotFound />', () => {
  test('muestra el código 404 y enlace a inicio', () => {
    render(<NotFound />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Volver al Inicio/i })).toHaveAttribute('href', '/');
  });
});
