// jest.setup.js
// Se ejecuta antes de cada test. Añade matchers personalizados para Testing Library.
import '@testing-library/jest-dom';

// Mocks globales para Next.js y componentes pesados
import React from 'react';

// Mock simple para `next/image` que devuelve una etiqueta <img>
jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line react/display-name
  default: (props) => {
    // Al ignorar optimizaciones, simplificamos las pruebas.
    const { src, alt, ...rest } = props;
    return <img src={src} alt={alt} {...rest} />;
  },
}));

// Mock simple para `next/link` que renderiza un <a>
jest.mock('next/link', () => ({
  __esModule: true,
  // eslint-disable-next-line react/display-name
  default: ({ href, children, ...rest }) => (
    <a href={href} {...rest}>{children}</a>
  ),
}));

// Mock de next/navigation para usar useRouter en componentes client-side
jest.mock('next/navigation', () => ({
  __esModule: true,
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

// Mocks de componentes internos que no son relevantes para la lógica de las pruebas
jest.mock('@/components/layout/Logo', () => () => <div data-testid="logo" />);
jest.mock('@/components/layout/DropdownMenu', () => () => <div data-testid="dropdown-menu" />);
jest.mock('@/components/layout/MobileMenu', () => () => <div data-testid="mobile-menu" />);
jest.mock('@/components/layout/SearchBar', () => () => <input data-testid="search-bar" />);

