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

/**
 * Componente para renderizar contenido MDX desde la base de datos
 * Convierte el texto MDX en HTML renderizado con componentes React
 */
const MdxRenderer: React.FC<MdxRendererProps> = ({ content, className = '' }) => {
  // Función para detectar y renderizar componentes
  const renderMdxContent = useMemo(() => {
    // Si el contenido está todo en una línea, dividirlo por espacios y componentes
    let lines = content.split('\n');
    
    // Si hay muy pocas líneas pero mucho contenido, probablemente está todo junto
    if (lines.length <= 3 && content.length > 1000) {
      // Dividir por componentes y espacios
      const componentPatterns = [
        /<InteractiveMap[^>]*>/g,
        /<CalloutBox[^>]*>/g,
        /<TourCard[^>]*>/g,
        /<ImageGallery[^>]*>/g,
        /<Timeline[^>]*>/g,
        /<VideoEmbed[^>]*>/g
      ];
      
      let processedContent = content;
      
      // Agregar saltos de línea antes de cada componente
      componentPatterns.forEach(pattern => {
        processedContent = processedContent.replace(pattern, '\n$&\n');
      });
      
      // Dividir por saltos de línea
      lines = processedContent.split('\n').filter(line => line.trim());
    }
    
    const result: React.ReactNode[] = [];
    let currentText = '';
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      // Detectar componentes por nombre
      if (line.includes('<InteractiveMap')) {
        // Renderizar texto acumulado
        if (currentText.trim()) {
          result.push(
            <div 
              key={`text-${i}`}
              dangerouslySetInnerHTML={{ __html: markdownToHtml(currentText.trim()) }}
            />
          );
          currentText = '';
        }
        
        // Extraer props básicos
        const localizacionMatch = line.match(/localizacion="([^"]*)"/);
        const zoomMatch = line.match(/zoom=\{([^}]*)\}/);
        
        result.push(
          <InteractiveMap 
            key={`mapa-${i}`}
            localizacion={localizacionMatch ? localizacionMatch[1] : 'islandia'}
            zoom={zoomMatch ? parseInt(zoomMatch[1]) : 10}
          />
        );
        
        // Saltar hasta el final del componente
        while (i < lines.length && !lines[i].includes('/>') && !lines[i].includes('</InteractiveMap>')) {
          i++;
        }
        i++; // Saltar la línea del cierre
        
      } else if (line.includes('<CalloutBox')) {
        // Renderizar texto acumulado
        if (currentText.trim()) {
          result.push(
            <div 
              key={`text-${i}`}
              dangerouslySetInnerHTML={{ __html: markdownToHtml(currentText.trim()) }}
            />
          );
          currentText = '';
        }
        
        const typeMatch = line.match(/type="([^"]*)"/);
        const titleMatch = line.match(/title="([^"]*)"/);
        
        // Buscar el contenido del CalloutBox
        let calloutContent = '';
        let j = i + 1;
        while (j < lines.length && !lines[j].includes('</CalloutBox>')) {
          calloutContent += lines[j] + '\n';
          j++;
        }
        
        result.push(
          <CalloutBox 
            key={`callout-${i}`}
            type={(typeMatch ? typeMatch[1] : 'info') as 'info' | 'warning' | 'tip' | 'note'}
            title={titleMatch ? titleMatch[1] : undefined}
          >
            {calloutContent}
          </CalloutBox>
        );
        
        i = j + 1; // Saltar hasta después del CalloutBox
        
      } else if (line.includes('<TourCard')) {
        // Renderizar texto acumulado
        if (currentText.trim()) {
          result.push(
            <div 
              key={`text-${i}`}
              dangerouslySetInnerHTML={{ __html: markdownToHtml(currentText.trim()) }}
            />
          );
          currentText = '';
        }
        
        const tituloMatch = line.match(/titulo="([^"]*)"/);
        const descripcionMatch = line.match(/descripcion="([^"]*)"/);
        const precioMatch = line.match(/precio="([^"]*)"/);
        const destinoMatch = line.match(/destino="([^"]*)"/);
        const duracionMatch = line.match(/duracion="([^"]*)"/);
        const ratingMatch = line.match(/rating=\{([^}]*)\}/);
        
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
        
        // Saltar hasta el final del componente
        while (i < lines.length && !lines[i].includes('/>') && !lines[i].includes('</TourCard>')) {
          i++;
        }
        i++; // Saltar la línea del cierre
        
      } else if (line.includes('<ImageGallery')) {
        // Renderizar texto acumulado
        if (currentText.trim()) {
          result.push(
            <div 
              key={`text-${i}`}
              dangerouslySetInnerHTML={{ __html: markdownToHtml(currentText.trim()) }}
            />
          );
          currentText = '';
        }
        
        // Datos de ejemplo para ImageGallery
        const sampleImages = [
          { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", alt: "Cascada Gullfoss", caption: "La impresionante cascada Gullfoss" },
          { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64", alt: "Geysir", caption: "El famoso géiser Strokkur" },
          { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", alt: "Þingvellir", caption: "Parque Nacional Þingvellir" }
        ];
        
        result.push(
          <ImageGallery 
            key={`gallery-${i}`}
            images={sampleImages}
            columns={3}
            gap="1rem"
          />
        );
        
        // Saltar hasta el final del componente
        while (i < lines.length && !lines[i].includes('/>') && !lines[i].includes('</ImageGallery>')) {
          i++;
        }
        i++; // Saltar la línea del cierre
        
      } else if (line.includes('<Timeline')) {
        // Renderizar texto acumulado
        if (currentText.trim()) {
          result.push(
            <div 
              key={`text-${i}`}
              dangerouslySetInnerHTML={{ __html: markdownToHtml(currentText.trim()) }}
            />
          );
          currentText = '';
        }
        
        // Datos de ejemplo para Timeline
        const sampleEvents = [
          {
            date: "Día 1",
            title: "Llegada a Reikiavik",
            description: "Aterrizamos en el aeropuerto Keflavík y nos dirigimos a la capital",
            location: "Reikiavik, Islandia"
          },
          {
            date: "Día 2-3",
            title: "Círculo Dorado",
            description: "Exploramos Gullfoss, Geysir y Þingvellir",
            location: "Círculo Dorado, Islandia"
          },
          {
            date: "Día 4-5",
            title: "Costa Sur",
            description: "Visitamos Vík, Skógafoss y la playa de arena negra",
            location: "Costa Sur, Islandia"
          }
        ];
        
        result.push(
          <Timeline 
            key={`timeline-${i}`}
            events={sampleEvents}
            orientation="vertical"
          />
        );
        
        // Saltar hasta el final del componente
        while (i < lines.length && !lines[i].includes('/>') && !lines[i].includes('</Timeline>')) {
          i++;
        }
        i++; // Saltar la línea del cierre
        
      } else if (line.includes('<VideoEmbed')) {
        // Renderizar texto acumulado
        if (currentText.trim()) {
          result.push(
            <div 
              key={`text-${i}`}
              dangerouslySetInnerHTML={{ __html: markdownToHtml(currentText.trim()) }}
            />
          );
          currentText = '';
        }
        
        const urlMatch = line.match(/url="([^"]*)"/);
        const titleMatch = line.match(/title="([^"]*)"/);
        
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
        
        // Saltar hasta el final del componente
        while (i < lines.length && !lines[i].includes('/>') && !lines[i].includes('</VideoEmbed>')) {
          i++;
        }
        i++; // Saltar la línea del cierre
        
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