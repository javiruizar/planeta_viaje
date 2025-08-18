import fs from 'fs';
import path from 'path';
import { getMdxFile, getAllMdxFiles, extractMdxMetadata } from '@/lib/mdx-server';

jest.mock('fs');
jest.mock('path');

const fsMock = fs as jest.Mocked<typeof fs>;
const pathMock = path as jest.Mocked<typeof path>;

describe('mdx-server utilities', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    // Simplificar path.join para devolver ruta unida con '/'
    pathMock.join.mockImplementation((...segments: string[]) => segments.join('/'));
  });

  test('getMdxFile devuelve objeto con título y excerpt', () => {
    fsMock.readFileSync.mockReturnValue('# Título\n\nPrimer párrafo.');

    const file = getMdxFile('prueba');
    expect(file?.slug).toBe('prueba');
    expect(file?.title).toBe('Título');
    expect(file?.excerpt).toContain('Primer párrafo');
  });

  test('getAllMdxFiles recorre el directorio drafts', () => {
    fsMock.readdirSync.mockReturnValue(['uno.mdx']);
    fsMock.readFileSync.mockReturnValue('# Uno');

    const files = getAllMdxFiles();
    expect(files).toHaveLength(1);
    expect(files[0].slug).toBe('uno');
  });

  test('extractMdxMetadata lee el frontmatter', () => {
    const content = `---\nauthor: Javier\ndraft: false\n---\nContenido`;
    const meta = extractMdxMetadata(content);
    expect(meta.author).toBe('Javier');
    expect(meta.draft).toBe('false');
  });
});
