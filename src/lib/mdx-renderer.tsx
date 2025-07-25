"use client";
// src/lib/mdx-renderer.tsx
// Función para renderizar contenido MDX desde la base de datos

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { useMemo } from 'react';
import mdxComponents from './mdx-components';
import { markdownToHtml } from './mdx-parser';
import { 
  InteractiveMap, 
  CalloutBox, 
  TourCard, 
  ImageGallery, 
  Timeline, 
  VideoEmbed 
} from '@/components/mdx';

interface MdxRendererProps {
  content: string;
  className?: string;
}

// type ImageItem = { src: string; alt: string; caption?: string };

// export function parseImages(text: string): ImageItem[] {
//   const match = text.match(/images=\[([\s\S]*)\]/);
//   if (!match) return [];

//   const arrayText = `[${match[1]}]`;

//   try {
//     // Evalúa el array como si fuera código JS
//     const fn = new Function(`return ${arrayText}`);
//     return fn() as ImageItem[];
//   } catch (e) {
//     console.error("Error evaluando el array:", e);
//     return [];
//   }
// }

const getFullChunk = (currentLine: number, fullText: string[]): [string, number] => {
  let chunk : string = fullText[currentLine]
  let j = currentLine
  while (j <= fullText.length && !fullText[j].includes('/>') ) {
    chunk = chunk.concat(" ", fullText[j])
    j++;
  }
  chunk = chunk.concat(" ", fullText[j+1])
  chunk = chunk.replaceAll('\n', ' ')
  return [chunk,j+1]
}

function parseImagesFromChunk(chunk: string): 
Array<{ src: string; alt: string; caption?: string }> {
  // Captura el contenido entre images=[ ... ]
  const imagesMatch = chunk.match(/images=\[([\s\S]*?)\]/);
  if (!imagesMatch) return [];

  let jsonText = imagesMatch[1];

  // Poner comillas a las keys
  jsonText = jsonText.replace(/([{,]\s*)(\w+)\s*:/g, '$1"$2":');

  // Parsear como JSON
  try {
    return JSON.parse(`[${jsonText}]`); // volvemos a poner los corchetes
  } catch (error) {
    console.error("Error al parsear las imágenes:", error, "Texto:", jsonText);
    return [];
  }
}

function parseTimelineFromChunk(chunk: string): 
Array<{ date: string; title: string; description: string; location?: string; image?: string }> {

  const timelineMatch = chunk.match(/events=\[([\s\S]*?)\]/);
  if (!timelineMatch) return [];

  let jsonText = timelineMatch[1];

  // Poner comillas a las keys
  jsonText = jsonText.replace(/([{,]\s*)(\w+)\s*:/g, '$1"$2":');

  try {
    return JSON.parse(`[${jsonText}]`); // volvemos a poner los corchetes
  } catch (error) {
    console.error("Error al parsear el timeline:", error, "Texto:", jsonText);
    return [];
  }
}
/**
 * Componente para renderizar contenido MDX desde la base de datos
 * Convierte el texto MDX en HTML renderizado con componentes React
 */
const MdxRenderer: React.FC<MdxRendererProps> = ({ content, className = '' }) => {
  // Función para detectar y renderizar componentes
  const renderMdxContent = useMemo(() => {
    // Si el contenido está todo en una línea, dividirlo por espacios y componentes
    // let lines = content.split('\n');
    
    // Si hay muy pocas líneas pero mucho contenido, probablemente está todo junto
    // if (lines.length <= 3 && content.length > 1000) {
      // Dividir por componentes y espacios
      const componentPatterns = [
        /<InteractiveMap[^>]*>/g,
        /<CalloutBox[^>]*>/g,
        /<TourCard[^>]*>/g,
        /<ImageGallery[^>]*>/g,
        /<Timeline[^>]*>/g,
        /<VideoEmbed[^>]*>/g
      ];
      
      let processedContent = content
      //  .replaceAll('\n', ' ');
      
      // Agregar saltos de línea antes de cada componente
      componentPatterns.forEach(pattern => {
        processedContent = processedContent.replace(pattern, '\n$&\n');
      });

      
      // Dividir por saltos de línea
      const lines = processedContent.split('\n').filter(line => line.trim());
    
    
    const result: React.ReactNode[] = [];
    let currentText = '';
    let i = 0;
    const flushCurrentText = () => { 
      if (currentText.trim()) {
          result.push(
            <div 
              key={`text-${i}`}
              dangerouslySetInnerHTML={{ __html: markdownToHtml(currentText.trim()) }}
            />
          );
          currentText = '';
        }
    }
    while (i < lines.length) {
      const line = lines[i];
      
      // Detectar componentes por nombre
      if (line.includes('<InteractiveMap')) {
        // Renderizar texto acumulado
        flushCurrentText();
        const finalLine = getFullChunk(i, lines)[1]
        const chunk = getFullChunk(i, lines)[0]
        
        // Extraer props básicos
        const localizacionMatch = chunk.match(/localizacion="([^"]*)"/);
        const zoomMatch = chunk.match(/zoom=\{([^}]*)\}/);
        
        result.push(
          <InteractiveMap 
            key={`mapa-${i}`}
            localizacion={localizacionMatch ? localizacionMatch[1] : 'islandia'}
            zoom={zoomMatch ? parseInt(zoomMatch[1]) : 10}
          />
        );
        
        i = finalLine; // Saltar la línea del cierre
        
      } else if (line.includes('<CalloutBox')) {
        // Renderizar texto acumulado
        flushCurrentText();
        const finalLine = getFullChunk(i, lines)[1]
        const chunk = getFullChunk(i, lines)[0]
        
        const typeMatch = chunk.match(/type="([^"]*)"/);
        const titleMatch = chunk.match(/title="([^"]*)"/);
        const textMatch = chunk.match(/text="([^"]*)"/);
        // Buscar el contenido del CalloutBox
     
        
        result.push(
          <CalloutBox 
            key={`callout-${i}`}
            type={typeMatch ? typeMatch[1] : 'info'}
            title={titleMatch ? titleMatch[1] : undefined}
            text={textMatch ? textMatch[1] : "text must be provided"}
          />
        );
        i = finalLine;
        
      } else if (line.includes('<TourCard')) {
        // Renderizar texto acumulado
        flushCurrentText();
        const finalLine = getFullChunk(i, lines)[1]
        const chunk = getFullChunk(i, lines)[0]

        const tituloMatch = chunk.match(/titulo="([^"]*)"/);
        const descripcionMatch = chunk.match(/descripcion="([^"]*)"/);
        const precioMatch = chunk.match(/precio="([^"]*)"/);
        
        const destinoMatch = chunk.match(/destino="([^"]*)"/);
        const duracionMatch = chunk.match(/duracion="([^"]*)"/);
        const ratingMatch = chunk.match(/rating=\{([^}]*)\}/);
        
        result.push(
          <TourCard 
            key={`tour-${i}`}
            titulo={tituloMatch ? tituloMatch[1] : 'Tour'}
            descripcion={descripcionMatch ? descripcionMatch[1] : ''}
            precio={precioMatch ? precioMatch[1] : '0€'}
            destino={destinoMatch ? destinoMatch[1] : '#'}
            duracion={duracionMatch ? duracionMatch[1] : '1 día'}
            rating={ratingMatch ? parseFloat(ratingMatch[1]) : 4.5}
          />
        );
        
        i = finalLine; // Saltar la línea del cierre
        
      } else if (line.includes('<ImageGallery')) {
        // Renderizar texto acumulado
        flushCurrentText();
        const finalLine = getFullChunk(i, lines)[1]
        const chunk: string = getFullChunk(i, lines)[0]

        // let imagesArray: Array<{ src: string; alt: string; caption?: string }> = [];
        

        const imagesArray = parseImagesFromChunk(chunk);
        const columnsMatch = chunk.match(/columns=\{([^}]*)\}/);
        
        result.push(
          <ImageGallery 
            key={`gallery-${i}`}
            images={imagesArray}
            columns={columnsMatch ? parseInt(columnsMatch[1]) : 3}
            gap="1rem"
          />
        );
        
        i = finalLine; // Saltar la línea del cierre
        
      } else if (line.includes('<Timeline')) {
        // Renderizar texto acumulado
        flushCurrentText();
        const finalLine = getFullChunk(i, lines)[1]
        const chunk = getFullChunk(i, lines)[0]
        const eventsArray = parseTimelineFromChunk(chunk)
        const orientationMatch = chunk.match(/orientation="([^"]*)"/);
        
        result.push(
          <Timeline 
            key={`timeline-${i}`}
            events={eventsArray}
            orientation={orientationMatch ? orientationMatch[1] : 'vertical'}
          />
        );
        
        i = finalLine; // Saltar la línea del cierre
        
      } else if (line.includes('<VideoEmbed')) {
        // Renderizar texto acumulado
        flushCurrentText();
        const finalLine = getFullChunk(i, lines)[1]
        const chunk = getFullChunk(i, lines)[0]

        const urlMatch = chunk.match(/url="([^"]*)"/);
        const titleMatch = chunk.match(/title="([^"]*)"/);
        
        result.push(
          <VideoEmbed 
            key={`video-${i}`}
            url={urlMatch ? urlMatch[1] : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            title={titleMatch ? titleMatch[1] : 'Video'}
            width="100%"
            height="400px"
            provider="youtube"
          />
        );
        
        i = finalLine; // Saltar la línea del cierre
        
      } else {
        currentText += line + '\n';
        i++;
      }
    }
    
    // Agregar texto final
    if (currentText.trim()) {
      result.push(
        <div 
          key="final-text"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(currentText.trim()) }}
        />
      );
    }
    
    return result;
  }, [content]);

  return (
    <div className={`prose max-w-none ${className}`}>
      <MDXProvider components={mdxComponents}>
        <div className="text-gray-700 leading-relaxed">
          {renderMdxContent}
        </div>
      </MDXProvider>
    </div>
  );
};

export default MdxRenderer; 