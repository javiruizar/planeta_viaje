/**
 * Header.test.tsx
 * Pruebas básicas del componente <Header />
 */
import { render, screen } from '@testing-library/react';
import Header from '@/components/layout/Header';
import '@testing-library/jest-dom';

describe('<Header />', () => {
  test('muestra el logo y enlaces de navegación', () => {
    render(<Header />);

    // Enlaces principales (desktop): DESCUENTOS y SITIOS ÚTILES
    expect(screen.getAllByText(/DESCUENTOS/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/SITIOS ÚTILES/i)[0]).toBeInTheDocument();
  });
});
