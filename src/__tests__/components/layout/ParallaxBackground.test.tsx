/**
 * ParallaxBackground.test.tsx
 * Comprueba renderizado y overlay.
 */
import { render } from '@testing-library/react';
import ParallaxBackground from '@/components/layout/ParallaxBackground';
import '@testing-library/jest-dom';

describe('<ParallaxBackground />', () => {
  test('renderiza hijos y aplica overlay', () => {
    const { container } = render(
      <ParallaxBackground overlay overlayColor="rgba(255,0,0,0.5)" localImage="/images/test.jpg">
        <div data-testid="hijos">Contenido</div>
      </ParallaxBackground>
    );

    // El div hijo debe existir
    expect(container.querySelector('[data-testid="hijos"]')).toBeInTheDocument();

    // Comprueba que existe la capa overlay (color rojo con opacidad)
    const overlayDiv = container.querySelector('div.fixed');
    expect(overlayDiv).toBeInTheDocument();
  });
});
