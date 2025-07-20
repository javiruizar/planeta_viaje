// src/lib/mdx.ts
// Utilidades MDX que funcionan tanto en cliente como servidor

import { compile } from '@mdx-js/mdx';

/**
 * Compila contenido MDX a JavaScript
 */
export async function compileMdx(content: string): Promise<string> {
  try {
    const result = await compile(content, {
      jsx: true,
      development: process.env.NODE_ENV === 'development',
    });
    return String(result);
  } catch (error) {
    console.error('Error compilando MDX:', error);
    return '';
  }
}

/**
 * Valida que el contenido MDX sea seguro
 */
export function validateMdxContent(content: string): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Verificar que no hay scripts maliciosos
  if (content.includes('<script')) {
    errors.push('No se permiten etiquetas <script>');
  }
  
  // Verificar que no hay iframes externos no autorizados
  const iframeMatch = content.match(/<iframe[^>]*src="([^"]+)"/g);
  if (iframeMatch) {
    const allowedDomains = ['youtube.com', 'vimeo.com', 'openstreetmap.org'];
    iframeMatch.forEach(iframe => {
      const srcMatch = iframe.match(/src="([^"]+)"/);
      if (srcMatch) {
        const url = srcMatch[1];
        const isAllowed = allowedDomains.some(domain => url.includes(domain));
        if (!isAllowed) {
          errors.push(`Iframe no autorizado: ${url}`);
        }
      }
    });
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
} 