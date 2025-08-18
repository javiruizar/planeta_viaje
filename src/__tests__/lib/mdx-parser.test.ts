import { parseMdxContent, markdownToHtml } from '@/lib/mdx-parser';

describe('parseMdxContent', () => {
  test('extrae componentes personalizados y texto', () => {
    const mdx = 'Hola mundo\n<MyComp prop="x" />\nAdios';
    const result = parseMdxContent(mdx);

    const comp = result.find((item) => item.type === 'component');
    expect(comp?.componentName).toBe('MyComp');
    expect(result).toHaveLength(3); // texto, componente, texto
  });

  test('extrae bloques de código', () => {
    const mdx = '```js\nconsole.log(1);\n```';
    const result = parseMdxContent(mdx);
    expect(result.some(r => r.content.includes('<pre'))).toBe(true);
  });
});

describe('markdownToHtml', () => {
  test('convierte **negrita** a <strong>', () => {
    const html = markdownToHtml('**negrita**');
    expect(html).toContain('<strong');
  });

  test('convierte lista no ordenada a párrafo si no hay salto de línea final', () => {
    const html = markdownToHtml('- item');
    expect(html).toContain('<p');
  
  });

  // Fin de pruebas existentes
});

// 🔄 Pruebas añadidas al fusionar mdx-parser-extra.test.ts y casos adicionales

describe('parseMdxContent - componente multilínea y props numéricas', () => {
  test('extrae componente multilínea', () => {
    const mdx = `<Alert tipo=\"info\">\nLínea 1\nLínea 2\n</Alert>`;
    const result = parseMdxContent(mdx);
    const comp = result.find((r) => r.componentName === 'Alert');
    expect(comp?.content).toContain('Línea 2');
  });

  test('detecta props numéricas', () => {
    const mdx = '<Chart width={300} height={200} />';
    const result = parseMdxContent(mdx);
    const chart = result.find((r) => r.componentName === 'Chart');
    expect(chart?.props?.width).toBe(300);
    expect(chart?.props?.height).toBe(200);
  });
});

describe('markdownToHtml - conversiones adicionales', () => {
  test('cabeceras ## y ###', () => {
    const html = markdownToHtml('## Subtitulo\n### Titulo3');
    expect(html).toContain('<h2');
    expect(html).toContain('<h3');
  });

  test('renderiza texto de listas ordenadas (sin conversión de <ol>)', () => {
    const html = markdownToHtml('1. Primero\n2. Segundo');
    expect(html).toContain('1. Primero');
    expect(html).toContain('2. Segundo');
  });

  test('enlaces markdown', () => {
    const html = markdownToHtml('[link](https://example.com)');
    expect(html).toContain('<a href="https://example.com"');
  });

  test('blockquotes', () => {
    const html = markdownToHtml('> Cita');
    expect(html).toContain('<p');
  });

  test('imágenes markdown', () => {
    const html = markdownToHtml('![alt](foto.jpg)');
    expect(html).toMatch(/<img|<a/);
  });
});
