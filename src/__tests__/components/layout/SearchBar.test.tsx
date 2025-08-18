/**
 * SearchBar.test.tsx
 */
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

// Aseguramos usar el componente real, no el mock global
jest.unmock('@/components/layout/SearchBar');

// Preparamos un mock compartido de router.push
const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  __esModule: true,
  useRouter: () => ({ push: mockPush }),
}));

// Obtener componente real, ignorando mock global definido en jest.setup.js
const { default: SearchBar } = jest.requireActual('@/components/layout/SearchBar');

describe('<SearchBar />', () => {
  test('expande, escribe y navega con term al pulsar Enter', async () => {
    const user = userEvent.setup();
    render(<SearchBar />);

    // Botón lupa
    const button = screen.getByRole('button', { name: /buscar/i });
    await user.click(button);

    // Input debe aparecer
    const input = await screen.findByPlaceholderText(/buscar posts/i);
    await user.type(input, 'playa');
    await user.keyboard('{Enter}');

    // Router push debió llamarse
    expect(mockPush).toHaveBeenCalledWith('/search?q=playa');
  });
});
