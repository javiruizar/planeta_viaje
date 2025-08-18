/**
 * Footer.test.tsx
 */
import Footer from '@/components/layout/Footer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('<Footer />', () => {
  test('muestra enlaces legales y año actual', () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /planeta viaje/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /política de privacidad/i })).toHaveAttribute('href', '/politica-de-privacidad');
    expect(screen.getByRole('link', { name: /aviso legal/i })).toHaveAttribute('href', '/aviso-legal');
  });
});
