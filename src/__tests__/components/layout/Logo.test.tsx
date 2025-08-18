import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from '@/components/layout/Logo';

jest.unmock('@/components/layout/Logo');

describe('<Logo />', () => {
  test('muestra la imagen y enlaza a la página de inicio', () => {
    render(<Logo />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
    expect(screen.getByAltText(/Planeta Viaje/i)).toBeInTheDocument();
  });
});
