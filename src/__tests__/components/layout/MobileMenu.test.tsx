import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import MobileMenu from '@/components/layout/MobileMenu';

jest.unmock('@/components/layout/MobileMenu');

describe('<MobileMenu />', () => {
  const menuStyles = {
    container: 'bg-white',
    link: 'text-blue-600',
  };

  test('llama al callback con true al abrirse', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    render(<MobileMenu menuStyles={menuStyles} isOpen={false} onMenuChange={onChange} />);

    const button = screen.getByRole('button', { name: /Abrir menú/i });
    await user.click(button);

    expect(onChange).toHaveBeenCalledWith(true);
  });
});
