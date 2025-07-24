// src/lib/mdx-parser.ts
// Parser MDX avanzado que maneja componentes personalizados

export interface ParsedMdxContent {
  type: 'text' | 'component';
  content: string;
  props?: Record<string, string | number | boolean>;
  componentName?: string;
}

/**
 * Parsea contenido MDX y extrae componentes personalizados
 */
export function parseMdxContent(content: string): ParsedMdxContent[] {
  const parsed: ParsedMdxContent[] = [];
  let currentText = '';
  let inCodeBlock = false;
  let codeBlockContent = '';
  let codeLanguage = '';
  
  // Dividir el contenido en líneas
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detectar inicio de bloque de código
    const codeBlockStart = line.match(/^```(\w+)?$/);
    if (codeBlockStart && !inCodeBlock) {
      // Guardar texto acumulado
      if (currentText.trim()) {
        parsed.push({
          type: 'text',
          content: currentText.trim()
        });
        currentText = '';
      }
      
      inCodeBlock = true;
      codeLanguage = codeBlockStart[1] || '';
      codeBlockContent = '';
      continue;
    }
    
    // Detectar fin de bloque de código
    if (line === '```' && inCodeBlock) {
      parsed.push({
        type: 'text',
        content: `<pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code class="language-${codeLanguage}">${codeBlockContent}</code></pre>`
      });
      inCodeBlock = false;
      codeBlockContent = '';
      continue;
    }
    
    // Acumular contenido del bloque de código
    if (inCodeBlock) {
      codeBlockContent += line + '\n';
      continue;
    }
    
    // Detectar componentes personalizados
    const componentMatch = line.match(/<(\w+)([^>]*?)(\/?)>/);
    if (componentMatch) {
      // Guardar texto acumulado
      if (currentText.trim()) {
        parsed.push({
          type: 'text',
          content: currentText.trim()
        });
        currentText = '';
      }
      
      const componentName = componentMatch[1];
      const propsString = componentMatch[2];
      const isSelfClosing = componentMatch[3] === '/';
      
      // Extraer props del componente
      const props: Record<string, string | number | boolean> = {};
      
      // Extraer props con comillas dobles
      const quotedProps = propsString.match(/(\w+)="([^"]*)"/g);
      if (quotedProps) {
        quotedProps.forEach(prop => {
          const [key, value] = prop.split('=');
          if (key) {
            props[key] = value.replace(/"/g, '');
          }
        });
      }
      
      // Extraer props con llaves (para valores JSX)
      const braceProps = propsString.match(/(\w+)=\{([^}]*)\}/g);
      if (braceProps) {
        braceProps.forEach(prop => {
          const [key, value] = prop.split('={');
          if (key) {
            // Intentar convertir a número si es posible
            const numValue = parseFloat(value.replace(/}/g, ''));
            props[key] = isNaN(numValue) ? value.replace(/}/g, '') : numValue;
          }
        });
      }
      
      if (isSelfClosing) {
        // Componente auto-cerrado
        parsed.push({
          type: 'component',
          componentName,
          content: '',
          props
        });
      } else {
        // Componente con contenido - buscar el cierre
        let componentContent = '';
        let j = i + 1;
        let depth = 1;
        
        while (j < lines.length && depth > 0) {
          const nextLine = lines[j];
          
          // Detectar apertura de componente del mismo tipo
          if (nextLine.match(new RegExp(`<${componentName}[^>]*>`))) {
            depth++;
          }
          
          // Detectar cierre de componente
          if (nextLine.match(new RegExp(`</${componentName}>`))) {
            depth--;
          }
          
          if (depth > 0) {
            componentContent += nextLine + '\n';
          }
          j++;
        }
        
        parsed.push({
          type: 'component',
          componentName,
          content: componentContent.trim(),
          props
        });
        
        i = j - 1; // Saltar hasta después del componente
      }
    } else {
      currentText += line + '\n';
    }
  }
  
  // Guardar texto final
  if (currentText.trim()) {
    parsed.push({
      type: 'text',
      content: currentText.trim()
    });
  }
  
  return parsed;
}

/**
 * Convierte texto Markdown a HTML
 */
export function markdownToHtml(text: string): string {
  let html = text;
  
  // Convertir títulos
  html = html.replace(/^# (.*$)/gim, ''); // Tittle is set from database
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mb-4 mt-6 text-gray-800">$1</h2>');
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mb-3 mt-5 text-gray-800">$1</h3>');
  html = html.replace(/^#### (.*$)/gim, '<h4 class="text-lg font-semibold mb-2 mt-4 text-gray-800">$1</h4>');
  
  // Convertir párrafos
  html = html.replace(/^(?!<[h|#])(.*$)/gim, '<p class="mb-4 leading-relaxed text-gray-700">$1</p>');
  
  // Convertir negrita
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
  
  // Convertir cursiva
  html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
  
  // Convertir código inline
  html = html.replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-gray-800">$1</code>');
  
  // Convertir listas no ordenadas
  html = html.replace(/^- (.*$)/gim, '<li class="mb-1">$1</li>');
  html = html.replace(/(<li.*<\/li>)/g, '<ul class="mb-4 pl-6 list-disc text-gray-700">$1</ul>');
  
  // Convertir listas ordenadas
  html = html.replace(/^\d+\. (.*$)/gim, '<li class="mb-1">$1</li>');
  html = html.replace(/(<li.*<\/li>)/g, '<ol class="mb-4 pl-6 list-decimal text-gray-700">$1</ol>');
  
  // Convertir enlaces
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline">$1</a>');
  
  // Convertir imágenes
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="w-full h-auto rounded-lg shadow-md my-6" />');
  
  // Convertir blockquotes
  html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 italic text-gray-700">$1</blockquote>');
  
  // Limpiar párrafos vacíos
  html = html.replace(/<p class="mb-4 leading-relaxed text-gray-700"><\/p>/g, '');
  
  return html;
} 