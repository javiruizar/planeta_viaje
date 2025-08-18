/**
 * DropdownMenu.test.tsx
 */
// Obtener implementación real ignorando mock global
const { default: DropdownMenu } = jest.requireActual('@/components/layout/DropdownMenu');
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('<DropdownMenu />', () => {
  test('muestra continentes al hacer click y los oculta después', async () => {
    const user = userEvent.setup();
    render(<DropdownMenu isOpen />);

    // Botón DESTINOS
    const button = screen.getByRole('button', { name: /destinos/i });

    // Menu visible inicialmente (isOpen=true)
    const europa = screen.getByRole('link', { name: 'Europa' });
    expect(europa).toHaveAttribute('href', '/category/europa');

    // Cerrar menú
    await user.click(button);
    expect(screen.queryByRole('link', { name: 'Europa' })).not.toBeInTheDocument();
  });
});
