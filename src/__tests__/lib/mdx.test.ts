import { compileMdx, validateMdxContent } from '@/lib/mdx';
import { compile } from '@mdx-js/mdx';

// Mock the heavy mdx compiler to avoid processing real MDX during tests
jest.mock('@mdx-js/mdx', () => ({
  __esModule: true,
  compile: jest.fn().mockResolvedValue('<p>hola</p>'),
}));

describe('Utilidades MDX (compileMdx / validateMdxContent)', () => {
  test('compileMdx devuelve el string compilado', async () => {
    const output = await compileMdx('# Hola');
    expect(output).toContain('hola');
    expect(compile).toHaveBeenCalled();
  });

  test('validateMdxContent detecta etiquetas script maliciosas', () => {
    const { isValid, errors } = validateMdxContent('<script>alert(1)</script>');
    expect(isValid).toBe(false);
    expect(errors[0]).toMatch(/script/i);
    });

  test('compileMdx devuelve cadena vacía cuando hay error', async () => {
    (compile as jest.Mock).mockRejectedValueOnce(new Error('fail'));
    const output = await compileMdx('# Falla');
    expect(output).toBe('');
  });

  test('validateMdxContent permite iframes de dominios autorizados', () => {
    const allowed = '<iframe src="https://www.youtube.com/embed/abc"></iframe>';
    const { isValid } = validateMdxContent(allowed);
    expect(isValid).toBe(true);
  });

  test('validateMdxContent rechaza iframe de dominio no autorizado', () => {
    const bad = '<iframe src="https://evil.com/embed"></iframe>';
    const { isValid, errors } = validateMdxContent(bad);
    expect(isValid).toBe(false);
    expect(errors[0]).toMatch(/Iframe no autorizado/);
  });
});
