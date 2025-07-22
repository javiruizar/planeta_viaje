// src/lib/mdx-server.ts
// Funciones MDX que solo funcionan en el servidor (usan fs). Usadas para leer los drafts

import fs from 'fs';
import path from 'path';

export interface MdxFile {
  slug: string;
  content: string;
  title?: string;
  excerpt?: string;
}

export interface MdxMetadata {
  [key: string]: string | number | boolean;
}

/**
 * Lee un archivo MDX desde la carpeta drafts (SOLO SERVIDOR)
 */
export function getMdxFile(slug: string): MdxFile | null {
  try {
    const filePath = path.join(process.cwd(), 'drafts', `${slug}.mdx`);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extraer título del primer h1 si existe
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : slug;
    
    // Extraer excerpt (primer párrafo después del título)
    const excerptMatch = content.match(/^#\s+.+?\n\n([\s\S]+?)(?:\n\n|$)/);
    const excerpt = excerptMatch ? excerptMatch[1].replace(/[#*`]/g, '') : '';
    
    return {
      slug,
      content,
      title,
      excerpt
    };
  } catch (error) {
    console.error('Error reading MDX file:', error);
    return null;
  }
}

/**
 * Lista todos los archivos MDX en la carpeta drafts (SOLO SERVIDOR)
 */
export function getAllMdxFiles(): MdxFile[] {
  try {
    const draftsDir = path.join(process.cwd(), 'drafts');
    const files = fs.readdirSync(draftsDir);
    
    return files
      .filter(file => file.endsWith('.mdx'))
      .map(file => {
        const slug = file.replace('.mdx', '');
        return getMdxFile(slug);
      })
      .filter((file): file is MdxFile => file !== null);
  } catch (error) {
    console.error('Error listing MDX files:', error);
    return [];
  }
}

/**
 * Extrae metadatos de un archivo MDX (SOLO SERVIDOR)
 */
export function extractMdxMetadata(content: string): MdxMetadata {
  const metadata: MdxMetadata = {};
  
  // Extraer frontmatter si existe
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (frontmatterMatch) {
    try {
      const frontmatter = frontmatterMatch[1];
      const lines = frontmatter.split('\n');
      lines.forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
          const value = valueParts.join(':').trim();
          metadata[key.trim()] = value;
        }
      });
    } catch (error) {
      console.error('Error parsing frontmatter:', error);
    }
  }
  
  return metadata;
} 